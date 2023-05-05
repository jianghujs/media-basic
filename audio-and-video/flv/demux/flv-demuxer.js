import Emitter from "./emitter";

const FLV_PARSE_STATE = {
    init: "init",//
    header: "header",//
    body: "body",//
}

const FLV_TAG_TYPE = {
    audio: 8, //
    video: 9, //
    script: 18,//
}
const FLV_TAG_TYPE_SHOW = {
    8: "audio", //
    9: "video", //
    18: "script",//
}


const CODEC_ID = {
    h264: 7, // AVC
    h265: 12, // HEVC
}
const CODEC_ID_SHOW = {
    7: "h264", // AVC
    12: "h265", // HEVC
}


const SOUND_ID = {
    g711a: 7, //
    g711u: 8, //
    aac: 10,//
}

const AAC_PACKET_TYPE = {
    sequenceHeader: 0,//
    raw: 1,//
}

const VIDEO_FRAME_TYPE = {
    keyFrame: 1,//
    interFrame: 2,//
}

const VIDEO_PACKET_TYPE = {
    sequenceHeader: 0, //
    nalu: 1, //
}


class FlvDemuxer extends Emitter {
    constructor() {
        super();
        this.tempBuffer = null;
        //
        this.needLen = 9;
        this.state = FLV_PARSE_STATE.init;
        this.tagType = null;
        this.dts = null;
        this.pts = null;
    }

    destroy() {
        this.reset();
    }

    reset() {
        this.tempBuffer = null;
        this.needLen = 9;
        this.tagType = null;
        this.dts = null;
        this.pts = null;
        this.state = FLV_PARSE_STATE.init;
    }

    dispatch(data) {
        //
        let remain = data;

        // merge tempBuffer and data
        if (this.tempBuffer) {
            let newBuffer = new Uint8Array(this.tempBuffer.length + data.length);
            newBuffer.set(this.tempBuffer, 0);
            newBuffer.set(data, this.tempBuffer.length);
            remain = newBuffer;
            this.tempBuffer = undefined;
        }
        //
        const tmp = new ArrayBuffer(4);
        const dv = new DataView(tmp);

        // parse flv
        while (true) {

            if (remain.length < this.needLen) {
                console.log(`remain.length < this.needLen: ${remain.length} < ${this.needLen}`);
                break;
            }

            //
            if (this.state === FLV_PARSE_STATE.init) {
                // flv header 9 bytes
                let flvHeader = remain.slice(0, this.needLen);
                console.log('flvHeader: ', flvHeader);
                // 前3字节是 'FLV' 三个字符
                const f = flvHeader[0];
                const l = flvHeader[1];
                const v = flvHeader[2];
                // 第4字节是版本号，只有 0x01 这一个合法值
                const version = flvHeader[3];
                console.log('flv', f, l, v);
                console.log('version: ', version);
                // 第5字节是Flags ，用于鉴别是否含有音频、视频数据
                let hasAudio = ((flvHeader[4] & 4) >>> 2) !== 0;
                let hasVideo = (flvHeader[4] & 1) !== 0;
                console.log('hasAudio: ', hasAudio);
                console.log('hasVideo: ', hasVideo);
                // 6-9字节，组成一个int32是 Header Size，这个值一定不小于0x09
                console.log(`FLV_PARSE_STATE.init current needLen is ${this.needLen}, and next needLen is 15, and next stats is FLV_PARSE_STATE.header`)
                //
                remain = remain.slice(this.needLen);
                // next length is 15 bytes 15 =  4(previous tag size)+ 11(tag header) ;
                this.needLen = 15;
                //
                this.state = FLV_PARSE_STATE.header;
            } else if (this.state === FLV_PARSE_STATE.header) {
                // 0,1,2,3 is previous tag size
                this.tagType = remain[4] & 0x1F; // 5bit代表类型,8:audio 9:video 18:script other:其他
                console.log('FLV_PARSE_STATE.header,tagType', FLV_TAG_TYPE_SHOW[this.tagType]);
                // 2-4 消息长度
                dv.setUint8(0, remain[7]);
                dv.setUint8(1, remain[6]);
                dv.setUint8(2, remain[5]);
                dv.setUint8(3, 0);

                const payloadLen = dv.getUint32(0, true); //Tag 中除通用头外的长度，即 Header + Data 字段的长度 (等于 Tag 总长度 – 11)
                // 5-7 时间戳
                dv.setUint8(0, remain[10]);
                dv.setUint8(1, remain[9]);
                dv.setUint8(2, remain[8]);
                // 8-8 时间戳扩展
                dv.setUint8(3, remain[11]);

                this.dts = dv.getUint32(0, true);

                console.log('needLen is', this.needLen);
                //
                let commonHeader = remain.slice(0, this.needLen);
                //
                remain = remain.slice(this.needLen);
                // 下一个长度是 tag body
                this.needLen = payloadLen;
                console.log(`nextLength is ${payloadLen} and next is FLV_PARSE_STATE.body`)
                this.state = FLV_PARSE_STATE.body;
            } else {
                // tag body = tag header(1-5) + tag data
                if (this.tagType === FLV_TAG_TYPE.video) {
                    // 1-4bit，帧类型【FrameType】
                    let frameType = (remain[0] >> 4) & 0x0F;
                    //  5-8bit，编码类型【CodecID】
                    let codecId = (remain[0]) & 0x0F;

                    if (codecId === CODEC_ID.h264 || codecId === CODEC_ID.h265) {

                        // h264 or h265
                        const packetType = remain[1];
                        console.log('frameType packetType', frameType, packetType);

                        // compositionTime
                        dv.setUint8(0, remain[4]);
                        dv.setUint8(1, remain[3]);
                        dv.setUint8(2, remain[2]);
                        dv.setUint8(3, 0);

                        let compositionTime = dv.getUint32(0, true);
                        this.pts = this.dts + compositionTime;

                        if (frameType === VIDEO_FRAME_TYPE.keyFrame) {

                            if (packetType === VIDEO_PACKET_TYPE.sequenceHeader) {
                                console.log(`${CODEC_ID_SHOW[codecId]} keyFrame sequenceHeader`);
                                const config = remain.slice(0, this.needLen);

                                // 用来解析video的width，height ， extraData
                                // tag header (1-5)
                                const extraData = remain.slice(5, this.needLen);
                                this.emit('videoExtraData', {
                                    codecId,
                                    extraData,
                                });
                            } else if (packetType === VIDEO_PACKET_TYPE.nalu) {
                                console.warn(`${CODEC_ID_SHOW[codecId]} keyFrame nalu, dts: ${this.dts}, pts: ${this.pts}`);
                                // tag header (1-5)
                                const nalu = remain.slice(5, this.needLen);
                                this.emit('videoData', {
                                    nalu,
                                    timestamp: this.dts,
                                    isKeyFrame: true
                                });
                            } else {
                                console.warn('other packet type nalu', packetType);
                            }

                        } else if (frameType === VIDEO_FRAME_TYPE.interFrame) {
                            if (packetType === VIDEO_PACKET_TYPE.nalu) {
                                console.log(`${CODEC_ID_SHOW[codecId]} interFrame nalu, dts: ${this.dts}, pts: ${this.pts}`);
                                // P Frame
                                // tag header (1-5)
                                const nalu = remain.slice(5, this.needLen);
                                this.emit('videoData', {
                                    nalu,
                                    timestamp: this.dts,
                                    isKeyFrame: false
                                });
                            }
                        } else {
                            console.log('other frame type', frameType);
                        }
                    }

                } else if (this.tagType === FLV_TAG_TYPE.audio) {
                    // 音频格式【SoundFormat】
                    let soundId = (remain[0] >> 4) & 0x0F;
                    let soundrate = (remain[0]>>2)&0x02;
                    let soundsize = (remain[0]>>1)&0x01;
                    let soundtype = (remain[0])&0x0F;

                    if (soundId === SOUND_ID.aac) {
                        // aac about sequence header and raw
                        // [2-2]：AAC音频类型，注，只有在SoundFormat=AAC 时，才有此数据
                        //  0 = AAC sequence header
                        //  1 = AAC raw
                        const packetType = remain[1];
                        if (packetType === AAC_PACKET_TYPE.sequenceHeader) {
                            const config = remain.slice(0, this.needLen);
                            const aacSequenceHeader = remain.slice(2, this.needLen);
                            console.log('AAC sequence header');
                            this.emit('audioExtraData', {
                                codecId: soundId,
                                type: 'aac',
                                extraData: aacSequenceHeader
                            });
                        } else {
                            // AAC raw
                            const aacRaw = remain.slice(2, this.needLen);
                            console.log('AAC raw')
                            this.emit('audioData', {
                                type: 'aac',
                                timestamp: this.dts,
                                data: aacRaw
                            })
                        }
                    } else {
                        const type = soundId === SOUND_ID.g711a ? 'g711a' : 'g711u';
                        this.emit('audioExtraData', {
                            type,
                            extraData: new Uint8Array(0)
                        })
                        // g711a or g711u
                        // 音频数据
                        const g711Raw = remain.slice(1, this.needLen);
                        console.log('g711 raw')
                        this.emit('audioData', {
                            type,
                            timestamp: this.dts,
                            data: g711Raw
                        })
                    }

                } else if (this.tagType === FLV_TAG_TYPE.script) {
                    console.log('script tag');
                } else {
                    console.log('other tag type', tagType);
                }
                //
                remain = remain.slice(this.needLen);
                // next length is 15 bytes 15 =  4(previous tag size)+ 11(tag header) ;
                this.needLen = 15;
                this.state = FLV_PARSE_STATE.header;
            }
        }

        this.tempBuffer = remain;
    }
}


export default FlvDemuxer;