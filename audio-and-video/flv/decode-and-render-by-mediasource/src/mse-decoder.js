import Emitter from "./emitter";
import SPSParser from "./h264-sps-parser";
import MP4 from "./fmp4-generator";

function parseAVCDecoderConfigurationRecord(arrayBuffer) {
    const meta = {}
    const v = new DataView(arrayBuffer.buffer);
    let version = v.getUint8(0);  // configurationVersion
    let avcProfile = v.getUint8(1);  // avcProfileIndication
    let profileCompatibility = v.getUint8(2);  // profile_compatibil
    let avcLevel = v.getUint8(3);  // AVCLevelIndication

    if (version !== 1 || avcProfile === 0) {
        // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord');

        return {};
    }

    const _naluLengthSize = (v.getUint8(4) & 3) + 1;  // lengthSizeMinusOne

    if (_naluLengthSize !== 3 && _naluLengthSize !== 4) {  // holy shit!!!
        // this._onError(DemuxErrors.FORMAT_ERROR, `Flv: Strange NaluLengthSizeMinusOne: ${_naluLengthSize - 1}`);
        return {};
    }
    let spsCount = v.getUint8(5) & 31;  // numOfSequenceParameterSets

    if (spsCount === 0) {
        // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No SPS');
        return {};
    } else if (spsCount > 1) {
        // Log.w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ${spsCount}`);
    }

    let offset = 6;
    for (let i = 0; i < spsCount; i++) {
        let len = v.getUint16(offset, false);  // sequenceParameterSetLength
        offset += 2;

        if (len === 0) {
            continue;
        }

        // Notice: Nalu without startcode header (00 00 00 01)
        let sps = new Uint8Array(arrayBuffer.buffer, offset, len);
        offset += len;
        // flv.js作者选择了自己来解析这个数据结构，也是迫不得已，因为JS环境下没有ffmpeg，解析这个结构主要是为了提取 sps和pps。虽然理论上sps允许有多个，但其实一般就一个。
        // packetTtype 为 1 表示 NALU，NALU= network abstract layer unit，这是H.264的概念，网络抽象层数据单元，其实简单理解就是一帧视频数据。
        // pps的信息没什么用，所以作者只实现了sps的分析器，说明作者下了很大功夫去学习264的标准，其中的Golomb解码还是挺复杂的，能解对不容易，我在PC和手机平台都是用ffmpeg去解析的。
        // SPS里面包括了视频分辨率，帧率，profile level等视频重要信息。
        let config = SPSParser.parseSPS(sps);
        // console.log('h264 sps config',config)
        if (i !== 0) {
            // ignore other sps's config
            continue;
        }
        meta.sps = sps;
        meta.timescale = 1000;
        meta.codecWidth = config.codec_size.width;
        meta.codecHeight = config.codec_size.height;
        meta.presentWidth = config.present_size.width;
        meta.presentHeight = config.present_size.height;

        meta.profile = config.profile_string;
        meta.level = config.level_string;
        meta.bitDepth = config.bit_depth;
        meta.chromaFormat = config.chroma_format;
        meta.sarRatio = config.sar_ratio;
        meta.frameRate = config.frame_rate;

        if (config.frame_rate.fixed === false ||
            config.frame_rate.fps_num === 0 ||
            config.frame_rate.fps_den === 0) {
            meta.frameRate = {
                fixed: true,
                fps: 23.976,
                fps_num: 23976,
                fps_den: 1000
            };
        }

        let fps_den = meta.frameRate.fps_den;
        let fps_num = meta.frameRate.fps_num;

        meta.refSampleDuration = meta.timescale * (fps_den / fps_num);

        let codecArray = sps.subarray(1, 4);

        let codecString = 'avc1.';
        for (let j = 0; j < 3; j++) {
            let h = codecArray[j].toString(16);
            if (h.length < 2) {
                h = '0' + h;
            }
            codecString += h;
        }
        // codec
        meta.codec = codecString;
    }

    let ppsCount = v.getUint8(offset);  // numOfPictureParameterSets
    if (ppsCount === 0) {
        // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No PPS');
        return {};
    } else if (ppsCount > 1) {
        // Log.w(this.TAG, `Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ${ppsCount}`);
    }

    offset++;
    for (let i = 0; i < ppsCount; i++) {
        let len = v.getUint16(offset, false);  // pictureParameterSetLength
        offset += 2;

        if (len === 0) {
            continue;
        }
        let pps = new Uint8Array(arrayBuffer.buffer, offset, len);

        // pps is useless for extracting video information
        offset += len;
        meta.pps = pps;
    }

    meta.videoType = 'avc';

    if (meta.sps) {
        const spsLength = meta.sps.byteLength;
        const spsFlag = new Uint8Array([
            (spsLength >>> 24) & 0xFF,
            (spsLength >>> 16) & 0xFF,
            (spsLength >>> 8) & 0xFF,
            (spsLength) & 0xFF
        ])
        const sps = new Uint8Array(spsLength + 4);
        sps.set(spsFlag, 0);
        sps.set(meta.sps, 4);
        meta.sps = sps;
    }

    if (meta.pps) {
        const ppsLength = meta.pps.byteLength;
        const ppsFlag = new Uint8Array([
            (ppsLength >>> 24) & 0xFF,
            (ppsLength >>> 16) & 0xFF,
            (ppsLength >>> 8) & 0xFF,
            (ppsLength) & 0xFF
        ]);
        const pps = new Uint8Array(ppsLength + 4);
        pps.set(ppsFlag, 0);
        pps.set(meta.pps, 4);
        meta.pps = pps;
    }


    // meta.avcc = arrayBuffer;
    return meta;
}

const MEDIA_SOURCE_STATE = {
    ended: 'ended',
    open: 'open',
    closed: 'closed'
}

class MseDecoder extends Emitter {
    constructor(options) {
        super();
        this.hasInit = false;
        this.isInitInfo = false;
        this.isDecodeFirstIIframe = false;
        this.codecId = null;
        this.mediaSourceOpen = false;
        this.sourceBuffer = null;
        this.hasInit = false;
        this.sequenceNumber = 0;
        this.cacheTrack = null;
        this.timeInit = false;
        this.mediaSource = new window.MediaSource();
        this.mediaSourceObjectURL = window.URL.createObjectURL(this.mediaSource);
        this.$videoElement = options.$videoElement;
        this.$videoElement.src = this.mediaSourceObjectURL;
    }

    destroy() {
        this.mediaSource = null;
        this.mediaSourceOpen = false;
        this.sourceBuffer = null;
        this.hasInit = false;
        this.isInitInfo = false;
        this.sequenceNumber = 0;
        this.cacheTrack = null;
        this.timeInit = false;
        this.isDecodeFirstIIframe = false;
        this.off();
    }

    setCodecVideo(codecId, extraData) {
        let config = {};

        config = parseAVCDecoderConfigurationRecord(extraData)
        const metaData = {
            id: 1, // video tag data
            type: 'video',
            timescale: 1000,
            duration: 0,
            avcc: extraData,
            codecWidth: config.codecWidth,
            codecHeight: config.codecHeight,
            videoType: config.videoType
        }
        const metaBox = MP4.generateInitSegment(metaData);
        this._appendBuffer(metaBox.buffer);
        this.sequenceNumber = 0;
        this.cacheTrack = null;
        this.timeInit = false;
    }

    decodeVideo(payload, isIframe, ts) {
        if (!this.isDecodeFirstIIframe && isIframe) {
            this.isDecodeFirstIIframe = true;
        }

        if (this.isDecodeFirstIIframe) {
            if (this.firstRenderTime === null) {
                this.firstRenderTime = ts;
            }
            const dts = ts - this.firstRenderTime;

            this._decodeVideo(payload, ts, isIframe);
        }
    }

    _decodeVideo(arrayBuffer, dts, isIframe) {
        let bytes = arrayBuffer.byteLength;
        const $video = this.$videoElement;
        if ($video.buffered.length > 1) {
            this._removeBuffer($video.buffered.start(0), $video.buffered.end(0));
            this.timeInit = false;
        }
        if (this.dropping && dts - this.cacheTrack.dts > 2) {
            this.dropping = false;
            this.cacheTrack = {};
        }else if (this.cacheTrack && dts >= this.cacheTrack.dts) {
            // 需要额外加8个size
            let mdatBytes = 8 + this.cacheTrack.size;
            let mdatbox = new Uint8Array(mdatBytes);
            mdatbox[0] = mdatBytes >>> 24 & 255;
            mdatbox[1] = mdatBytes >>> 16 & 255;
            mdatbox[2] = mdatBytes >>> 8 & 255;
            mdatbox[3] = mdatBytes & 255;
            mdatbox.set(MP4.types.mdat, 4);
            mdatbox.set(this.cacheTrack.data, 8);

            this.cacheTrack.duration = dts - this.cacheTrack.dts;
            // moof
            let moofbox = MP4.moof(this.cacheTrack, this.cacheTrack.dts);
            let result = new Uint8Array(moofbox.byteLength + mdatbox.byteLength);
            result.set(moofbox, 0);
            result.set(mdatbox, moofbox.byteLength);
            // appendBuffer
            this._appendBuffer(result.buffer)
        }
        else {
            this.timeInit = false;
            this.cacheTrack = {};
        }
        if (!this.cacheTrack) {
            this.cacheTrack = {};
        }
        this.cacheTrack.id = 1;
        this.cacheTrack.sequenceNumber = ++this.sequenceNumber;
        this.cacheTrack.size = bytes;
        this.cacheTrack.dts = dts;
        this.cacheTrack.cts = 0;
        this.cacheTrack.isKeyframe = isIframe;
        this.cacheTrack.data = arrayBuffer;
        //
        this.cacheTrack.flags = {
            isLeading: 0,
            dependsOn: isIframe ? 2 : 1,
            isDependedOn: isIframe ? 1 : 0,
            hasRedundancy: 0,
            isNonSync: isIframe ? 0 : 1
        }

        if (!this.timeInit && $video.buffered.length === 1) {
            this.timeInit = true;
            $video.currentTime = $video.buffered.end(0);
        }

        if (!this.isInitInfo && $video.videoWidth > 0 && $video.videoHeight > 0) {
            this.isInitInfo = true;
        }
    }

    _removeBuffer(start, end) {
        if (this.isStateOpen && this.sourceBuffer.updating === false) {
            try {
                this.sourceBuffer.remove(start, end)
            } catch (e) {
                console.warn('removeBuffer() error', e);
            }
        } else {
            console.warn('removeBuffer() this.isStateOpen is', this.isStateOpen, 'this.sourceBuffer.updating', this.sourceBuffer.updating);
        }
    }

    _appendBuffer(buffer) {
        if (this.sourceBuffer === null) {
            this.sourceBuffer = this.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64002A"');
        }

        if (this.sourceBuffer.updating === false && this.isStateOpen) {
            try {
                this.sourceBuffer.appendBuffer(buffer);
            } catch (e) {
            }
            return;
        }

        if (this.isStateClosed) {
            console.warn('MediaSource is closed')
        } else if (this.isStateEnded) {
            console.warn('MediaSource is ended')
        } else {
            if (this.sourceBuffer.updating === true) {
                console.warn('sourceBuffer.updating === true')
            }
        }

    }

    get state() {
        return this.mediaSource && this.mediaSource.readyState
    }

    get isStateEnded() {
        return this.state === MEDIA_SOURCE_STATE.ended;
    }

    get isStateClosed() {
        return this.state === MEDIA_SOURCE_STATE.closed;
    }

    get isStateOpen() {
        return this.state === MEDIA_SOURCE_STATE.open;
    }
}

export default MseDecoder