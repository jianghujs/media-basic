function createWorkletModuleUrl(func) {

    function functionToString(str) {
        return str.trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1]
    }

    const funcStr = functionToString(func.toString());
    const blob = new Blob([funcStr], {type: 'application/javascript'});
    return URL.createObjectURL(blob);
}


class Recorder {
    constructor(options) {
        //
        this.userMediaStream = null;
        // 音频上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
            sampleRate: 48000
        });
        // 采集到的音频数据,回调方法
        this.onData = options.onData;
        // 音量的变化
        this.gainNode = this.audioContext.createGain();
        //
        this.gainNode.gain.value = 1;

        this._initWorklet()
    }

    destroy() {
        this.audioContext = null;
        // 关闭麦克风
        if (this.userMediaStream) {
            this.userMediaStream.getTracks && this.userMediaStream.getTracks().forEach((track) => {
                track.stop()
            })
            this.userMediaStream = null;
        }
    }

    _initWorklet() {
        //
        function recordWorkletProcessor() {
            class RecordProcessor extends AudioWorkletProcessor {

                constructor(options) {
                    super();
                    this._cursor = 0;
                    // 一次采集到的数据 512 个采样点
                    this._bufferSize = options.processorOptions.bufferSize;
                    // 采集到的数据
                    this._buffer = new Float32Array(this._bufferSize);
                }


                process(inputs, outputs, parameters) {
                    //
                    if (!inputs.length || !inputs[0].length) {
                        return true;
                    }
                    // 左声道
                    for (let i = 0; i < inputs[0][0].length; i++) {
                        this._cursor += 1;
                        //
                        if (this._cursor === this._bufferSize) {
                            this._cursor = 0;
                            this.port.postMessage({
                                eventType: 'data',
                                buffer: this._buffer
                            });
                        }
                        //
                        this._buffer[this._cursor] = inputs[0][0][i];
                    }

                    return true;
                }
            }

            registerProcessor('record-processor', RecordProcessor)
        }

        // audioWorklet.addModule
        // 加载 worklet
        this.audioContext.audioWorklet.addModule(createWorkletModuleUrl(recordWorkletProcessor)).then(() => {
            this.recordProcessor = new AudioWorkletNode(this.audioContext, "record-processor", {
                processorOptions: {
                    bufferSize: 512 // 一次采集到的数据 512 个采样点
                }
            });

            // 接收数据
            this.recordProcessor.port.onmessage = (e) => {
                if (this.audioContext) {
                    if (e.data.eventType === 'data') {
                        const buffer = e.data.buffer
                        this.processAudio(buffer);
                    }
                }

            }
            this.startRecord();
        })
    }

    startRecord() {
        // 获取麦克风
        window.navigator.mediaDevices.getUserMedia({
            audio: {
                latency: true,
                noiseSuppression: true,
                autoGainControl: true,
                echoCancellation: true,
                sampleRate: 48000,
                channelCount: 1
            },
            video: false
        }).then((stream) => {
            this.userMediaStream = stream;
            // 音频输入
            this.audioInput = new MediaStreamAudioSourceNode(this.audioContext, {
                mediaStream: stream
            });
            // 音频输入 -> 采集数据 -> 音量 -> 输出
            this.audioInput.connect(this.recordProcessor);
            // 采集数据 -> 音量
            this.recordProcessor.connect(this.gainNode);
            // 音量 -> 输出
            this.gainNode.connect(this.audioContext.destination);
        }).catch((e) => {
            console.error(e);
        }).finally(() => {

        })
    }


    processAudio(buffer) {
        if (this.onData) {
            this.onData(buffer);
        }
    }

    mute() {
        this.gainNode.gain.value = 0;
    }

    unMute() {
        this.gainNode.gain.value = 1;

    }
}