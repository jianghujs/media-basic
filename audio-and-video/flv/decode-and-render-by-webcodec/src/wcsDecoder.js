import Emitter from "./emitter";

const VIDEO_ENC_CODE = {
    h264: 7,
    h265: 12
}

function formatVideoDecoderConfigure(avcC) {
    let codecArray = avcC.subarray(1, 4);
    let codecString = "avc1.";
    for (let j = 0; j < 3; j++) {
        let h = codecArray[j].toString(16);
        if (h.length < 2) {
            h = "0" + h
        }
        codecString += h
    }

    return {
        codec: codecString,
        description: avcC
    }
}

const ENCODED_VIDEO_TYPE = {
    key: 'key',
    delta: 'delta'
}

class WcsDecoder extends Emitter {
    constructor() {
        super()
        this.decoder = null;
        this.hasInit = false;
        this.isInitInfo = false;
        this.isDecodeFirstIIframe = false;
        this.codecId = null;
        this._initDecoder();
    }

    destroy() {
        this.off();
        if (this.decoder) {
            if (this.decoder.state !== 'closed') {
                this.decoder.close();
            }
            this.decoder = null;
        }
        this.hasInit = false;
        this.isInitInfo = false;
        this.isDecodeFirstIIframe = false;
        this.codecId = null;
    }

    _initDecoder() {
        const _this = this;
        this.decoder = new VideoDecoder({
            output(videoFrame) {
                _this._handleDecode(videoFrame)
            },
            error(error) {

                _this._handleError(error)
            }
        })
    }

    _handleDecode(videoFrame) {
        if (!this.isInitInfo) {
            this.isInitInfo = true;
            this.emit('videoInfo', {
                width: videoFrame.codedWidth,
                height: videoFrame.codedHeight,
                videoCode: this.codecId
            })
        }

        this.emit('videoFrame', {
            videoFrame,
            ts: videoFrame.timestamp
        })
    }

    _handleError(error) {
        console.error('Webcodecs', 'handleError', error)
    }

    setCodecVideo(codecId, extraData) {
        this.codecId = codecId;
        let config = null;

        if (codecId === VIDEO_ENC_CODE.h264) {
            config = formatVideoDecoderConfigure(extraData);
        }
        this.decoder.configure(config);
    }

    decodeVideo(payload, isIframe, ts) {
        if (!this.isDecodeFirstIIframe && isIframe) {
            this.isDecodeFirstIIframe = true;
        }

        if (this.isDecodeFirstIIframe) {
            const chunk = new EncodedVideoChunk({
                data: payload,
                timestamp: ts,
                type: isIframe ? ENCODED_VIDEO_TYPE.key : ENCODED_VIDEO_TYPE.delta
            })

            try {
                if(this.decoder.state === 'configured') {
                    this.decoder.decode(chunk);
                }

            } catch (e) {
                console.error('Webcodecs', 'decodeVideo', e)
            }
        }
    }
}

export default WcsDecoder;