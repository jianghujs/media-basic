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
        this.userMediaStream = null;

        this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
            sampleRate: 48000
        });
        this.onData = options.onData;
        this.bufferSize = options.bufferSize || 512

        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = 1;

        this._initWorklet()
    }

    destroy() {
        this.audioContext = null;

        if (this.userMediaStream) {
            this.userMediaStream.getTracks && this.userMediaStream.getTracks().forEach((track) => {
                track.stop()
            })
            this.userMediaStream = null;
        }
    }

    _initWorklet() {
        function recordWorkletProcessor() {
            class RecordProcessor extends AudioWorkletProcessor {

                constructor(options) {
                    super();
                    this._cursor = 0;
                    this._bufferSize = options.processorOptions.bufferSize;
                    this._buffer = new Float32Array(this._bufferSize);
                }


                process(inputs, outputs, parameters) {
                    if (!inputs.length || !inputs[0].length) {
                        return true;
                    }
                    for (let i = 0; i < inputs[0][0].length; i++) {
                        this._cursor += 1;
                        if (this._cursor === this._bufferSize) {
                            this._cursor = 0;
                            this.port.postMessage({
                                eventType: 'data',
                                buffer: this._buffer
                            });
                        }
                        this._buffer[this._cursor] = inputs[0][0][i];
                    }

                    return true;
                }
            }

            registerProcessor('record-processor', RecordProcessor)
        }

        this.audioContext.audioWorklet.addModule(createWorkletModuleUrl(recordWorkletProcessor)).then(() => {
            this.recordProcessor = new AudioWorkletNode(this.audioContext, "record-processor", {
                processorOptions: {
                    bufferSize: this.bufferSize // 一次采集到的数据 bufferSize 个采样点
                }
            });

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
            this.audioInput = new MediaStreamAudioSourceNode(this.audioContext, {
                mediaStream: stream
            });
            this.audioInput.connect(this.recordProcessor);
            this.recordProcessor.connect(this.gainNode);
            this.gainNode.connect(this.audioContext.destination);
        }).catch((e) => {
            console.error(e);
        }).finally(() => {

        })
    }


    processAudio(buffer) {
        // console.log('processAudio', buffer);
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