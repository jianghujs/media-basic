import DecoderModule from '../decoder/decoder-full';
import Emitter from "./emitter";

DecoderModule.postRun = function () {
    console.log('decoderModule.postRun');
    // this.audioDecoder = new DecoderModule.AudioDecoder(this);
    // this.videoDecoder = new DecoderModule.VideoDecoder(this);
    // this.hasInit = true;
    // if(this.initResoleFn){
    //     this.initResoleFn();
    // }
}

class DecoderFull extends Emitter {
    constructor() {
        super();
        this.audioDecoder = null;
        this.videoDecoder = null;
        this.hasVideoConfigured = false;
        this.hasAudioConfigured = false;
        this.audioDecoder = new DecoderModule.AudioDecoder(this);
        this.videoDecoder = new DecoderModule.VideoDecoder(this);

        this.audioChannels = 0;
        this.audioOrigin = [];
        this.audioStart = 0;
        this.audioRemain = 0;
        this.audioOutputArray = [];
        this.audioTempAudioBuffer = [];

        this.videoWidth = null;
        this.videoHeight = null;
    }

    destroy() {
        this.off();
        this.hasVideoConfigured = false;
        this.hasAudioConfigured = false;
        if (this.audioDecoder) {
            this.audioDecoder.clear();
            this.audioDecoder = null;
        }
        if (this.videoDecoder) {
            this.videoDecoder.clear();
            this.videoDecoder = null;
        }
    }

    decodeAudio(data, timestamp) {
        if (!this.hasAudioConfigured) {
            console.error('audio not configured')
            return;
        }
        this.audioDecoder.decode(data, timestamp);
    }

    setCodecAudio(codecId, extraData) {
        if (!this.hasAudioConfigured) {
            console.log('setCodecAudio', codecId);
            this.audioDecoder.setCodec(codecId, 48000, extraData);
            this.hasAudioConfigured = true;
        }
    }

    decodeVideo(data, isKeyFrame, timestamp) {
        if (!this.hasVideoConfigured) {
            console.error('video not configured')
            return;
        }
        this.videoDecoder.decode(data, isKeyFrame ? 1 : 0, timestamp);
    }

    setCodecVideo(videoType, extraData) {
        if (!this.hasVideoConfigured) {
            console.log('setCodecVideo', videoType);
            this.videoDecoder.setCodec(videoType, extraData);
            this.hasVideoConfigured = true;
        }
    }

    // c 调用 js 的方法
    videoInfo(videoCode, width, height) {
        console.log('c++ call js videoInfo', videoCode, width, height)
        this.videoWidth = width;
        this.videoHeight = height;
        this.emit('videoInfo', {
            videoCode,
            width,
            height
        })
    }

    // c 调用 js 的方法
    audioInfo(audioCode, sampleRate, channels) {
        console.log('c++ call js audioInfo', audioCode, sampleRate, channels)
        this.audioChannels = channels;
        this.emit('audioInfo', {
            audioCode,
            sampleRate,
            channels
        })
    }

    // c 调用 js 的方法
    yuvData(yuv, ts) {
        console.log('c++ call js yuvData', ts)
        const size = this.videoWidth * this.videoHeight * 3 / 2;
        let out = DecoderModule.HEAPU8.subarray(yuv, yuv + size);
        let data = new Uint8Array(out)

        this.emit('yuvData', {
            ts,
            yuvData: data
        })
    }

    // c 调用 js 的方法
    pcmData(data, len, ts) {
        console.log('c++ call js pcmData', ts,len)
        var frameCount = len;
        var origin = this.audioOrigin;
        var outputArray = this.audioOutputArray;
        let tempAudioBuffer = this.audioTempAudioBuffer;
        let channels = this.audioChannels;
        for (var channel = 0; channel < 2; channel++) {
            var fp = DecoderModule.HEAPU32[(data >> 2) + channel] >> 2;
            origin[channel] = DecoderModule.HEAPF32.subarray(fp, fp + frameCount);
        }
        this.emit('pcmData', {
            ts,
            pcmData: origin
        })
    }
}

export default DecoderFull;