class Recorder {
    constructor(options) {
        this.sourceUrl = options.url;
        this.audioData = null;
        // 音频上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
            sampleRate: 48000
        });
        // buffer source
        this.sourceNode = this.audioContext.createBufferSource();
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = 1;
        this.sourceNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
        this._loadSound();
    }
    destroy(){
        this.audioContext = null;
        if(this.sourceNode){
            this.sourceNode.stop();
            this.sourceNode = null;
        }
    }

    _loadSound() {
        let request = new XMLHttpRequest();
        request.open('GET', this.sourceUrl, true);
        request.responseType = 'arraybuffer';
        // When loaded, decode the data and play the sound
        request.onload = () => {
            // Decode the audio data
            this.audioContext.decodeAudioData(request.response, (buffer) => {
                this.audioData = buffer;
                this._playSound();
            }, () => {

            });
        }
        request.send();
    }

    _playSound() {
        // Create a buffer source node
        this.sourceNode.buffer = this.audioData;
        this.sourceNode.start(0);    // Play the sound now
        // Loop the sound forever
        this.sourceNode.loop = true;
    }
}