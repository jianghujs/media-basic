class DemoPlayer {
    constructor(options) {
        this.audioCtx = null;
        this.interval = null;
        this.mediaDevices = null;
        this.ws = null;
        this.imageChuncks = [];
        this.audioChuncks = [];
        this.tempImage = null;
        this.$video = options.video;
        this.ctx = options.ctx;
        this.wsHref = options.wsHref;
        this._initWebsocket();
        this._listenVideo();
    }

    destroy() {
        this._stopInterval();
        if (this.audioCtx) {
            this.audioCtx.close();
            this.audioCtx = null;
        }
        if (this.mediaDevices) {
            this.mediaDevices = null;
        }
        this.imageChuncks = [];
        this.audioChuncks = [];
        this.tempImage = null;
        this.$video = null;
        this.ctx = null;
        this.wsHref = null;
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }

    _initWebsocket() {
        let ws = new WebSocket(this.wsHref);
        //如何处理二进制数据，默认是Blob
        ws.binaryType = 'arraybuffer';
        ws.onmessage = (evt) => {
            if (evt.data.byteLength === undefined) {
                //收到的base64图片
                this.imageChuncks.push(evt.data);
            } else {
                //收到的音频二进制pcm数据
                this.audioChuncks.push(new Float32Array(evt.data));
            }
            //缓存2帧的数据后开始播放
            if (!this.tempImage && this.audioChuncks.length > 2) {
                this.doPlay();
            }
        }
    }

    _listenVideo() {
        if (this.$video) {
            this.$video.onplay = () => {
                this._startInterval();
            }
        }
    }

    _startInterval() {
        this._stopInterval();
        this.interval = setInterval(() => {
            this.ctx.drawImage(this.$video, 0, 0);
        }, 30)
    }

    _stopInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }


    _initAudioCtx() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 48000
            })
        }

    }

    startPush() {
        this._initAudioCtx()
        this.mediaDevices = navigator.mediaDevices.getUserMedia({audio: true, video: {width: 320, height: 240}});
        const audioCtx = this.audioCtx;
        this.mediaDevices.then(stream => {
            //视频流转换到video标签播放
            this.$video.srcObject = stream;
            this.$video.play();
            //音频流转换到AudioNode做数据采集
            const source = audioCtx.createMediaStreamSource(stream);
            const recorder = audioCtx.createScriptProcessor(2048, 1, 1);
            source.connect(recorder);
            recorder.connect(audioCtx.destination);
            recorder.onaudioprocess = (ev) => {
                //采集单声道数据
                let inputBuffer = ev.inputBuffer.getChannelData(0);
                //将视频画面转换成base64发送
                this.ws.send(canvas.toDataURL('image/jpeg'));
                //发送音频pcm数据
                this.ws.send(inputBuffer.buffer);
            };
        });
    }

    doPlay() {
        this._initAudioCtx();
        this.tempImage = new Image();
        document.body.appendChild(this.tempImage);
        let myBuffer = this.audioCtx.createBuffer(1, 2048, this.audioCtx.sampleRate);
        let source = this.audioCtx.createBufferSource();
        let processor = this.audioCtx.createScriptProcessor(2048, 1, 1)
        source.connect(processor);
        processor.connect(this.audioCtx.destination);
        processor.onaudioprocess = (ev) => {
            ev.outputBuffer.copyToChannel(this.audioChuncks.shift() || new Float32Array(2048), 0, 0);

            if (this.audioChuncks.length > 0) {
                this.tempImage.src = this.imageChuncks.shift();
            }
        }
    }
}