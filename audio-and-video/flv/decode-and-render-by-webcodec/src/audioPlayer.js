const AUDIO_ENC_TYPE = {
    10: 'AAC',
    7: 'G711A',
    8: 'G711U'
}

function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

class AudioPlayer {
    constructor() {
        this.bufferList = [];
        this.scriptNode = null;
        this.hasInitScriptNode = false;
        this.audioContextChannel = null;

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        //
        this.gainNode = this.audioContext.createGain();
        // Get an AudioBufferSourceNode.
        // This is the AudioNode to use when we want to play an AudioBuffer
        const source = this.audioContext.createBufferSource();
        // set the buffer in the AudioBufferSourceNode
        source.buffer = this.audioContext.createBuffer(1, 1, 22050);
        // connect the AudioBufferSourceNode to the
        // destination so we can hear the sound
        source.connect(this.audioContext.destination);
        // noteOn as start
        // start the source playing
        if (source.noteOn) {
            source.noteOn(0);
        } else {
            source.start(0);
        }
        this.audioBufferSourceNode = source;
        //
        this.mediaStreamAudioDestinationNode = this.audioContext.createMediaStreamDestination();
        //
        this.audioEnabled(true);
        // default setting 0
        this.gainNode.gain.value = 0;
        this.audioInfo = {
            encType: '',
            channels: '',
            sampleRate: ''
        }
        this.playing = false;
    }

    updateAudioInfo(data) {
        if (data.audioCode) {
            this.audioInfo.encType = AUDIO_ENC_TYPE[data.audioCode];
        }

        if (data.channels) {
            this.audioInfo.channels = data.channels;
        }

        if (data.sampleRate) {
            this.audioInfo.sampleRate = data.sampleRate;
        }

        // audio 基本信息
        if (this.audioInfo.sampleRate && this.audioInfo.channels && this.audioInfo.encType && !this.init) {
            console.log('audioInfo', this.audioInfo)
            this.init = true;
        }
    }

    initScriptNode() {
        const channels = this.audioInfo.channels;

        const scriptNode = this.audioContext.createScriptProcessor(2048, 0, channels);
        // tips: if audio isStateSuspended  onaudioprocess method not working
        scriptNode.onaudioprocess = (audioProcessingEvent) => {
            const outputBuffer = audioProcessingEvent.outputBuffer;

            if (this.bufferList.length && this.playing) {

                const bufferItem = this.bufferList.shift();

                for (let channel = 0; channel < channels; channel++) {
                    const b = bufferItem.buffer[channel]
                    const nowBuffering = outputBuffer.getChannelData(channel);
                    for (let i = 0; i < 2048; i++) {
                        nowBuffering[i] = b[i] || 0
                    }
                }
            }
        }

        scriptNode.connect(this.gainNode);
        this.scriptNode = scriptNode;
        this.gainNode.connect(this.audioContext.destination);
        this.gainNode.connect(this.mediaStreamAudioDestinationNode);
        this.hasInitScriptNode = true;
    }

    destroy() {
        if (this.hasInitScriptNode) {
            this.scriptNode && this.scriptNode.disconnect(this.gainNode);
            this.gainNode && this.gainNode.disconnect(this.audioContext.destination);
            this.gainNode && this.gainNode.disconnect(this.mediaStreamAudioDestinationNode);
        }
        this.clear();
        this.audioContext.close();
        this.audioContext = null;
        this.gainNode = null;
        this.hasAudio = false;
        this.playing = false;
        if (this.scriptNode) {
            this.scriptNode.onaudioprocess = null;
            this.scriptNode = null;
        }
        this.audioBufferSourceNode = null;
        this.mediaStreamAudioDestinationNode = null;
        this.hasInitScriptNode = false;
    }

    clear() {
        this.bufferList = [];
    }

    play(buffer, ts) {
        this.hasAudio = true;
        this.playing = true;
        this.bufferList.push({
            buffer,
            ts
        });
    }

    pause() {
        this.playing = false;
        this.clear();
    }

    mute(flag) {
        if (flag) {
            this.setVolume(0);
            this.clear();
        } else {
            this.setVolume(0.5);
            this.audioEnabled(true);
        }
    }

    setVolume(volume) {
        volume = parseFloat(volume).toFixed(2);
        if (isNaN(volume)) {
            return;
        }
        this.audioEnabled(true);
        volume = clamp(volume, 0, 1);
        this.gainNode.gain.value = volume;
        this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    }

    // 是否播放。。。
    audioEnabled(flag) {
        if (flag) {
            if (this.audioContext.state === 'suspended') {
                // resume
                this.audioContext.resume();
            }
        } else {
            if (this.audioContext.state === 'running') {
                // suspend
                this.audioContext.suspend();
            }
        }
    }


}

export default AudioPlayer;