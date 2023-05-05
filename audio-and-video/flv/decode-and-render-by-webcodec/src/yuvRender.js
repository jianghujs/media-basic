import createWebGL from './webglV2';

function createContextGL($canvas) {
    let gl = null;

    const validContextNames = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    let nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
        const contextName = validContextNames[nameIndex];

        try {
            let contextOptions = {preserveDrawingBuffer: true};
            gl = $canvas.getContext(contextName, contextOptions);
        } catch (e) {
            gl = null;
        }

        if (!gl || typeof gl.getParameter !== "function") {
            gl = null;
        }

        ++nameIndex;
    }


    return gl;
}

function isFunction(fn) {
    return typeof fn === "function"
}

function closeVideoFrame(videoFrame) {
    if (videoFrame.close) {
        videoFrame.close()
    } else if (videoFrame.destroy) {
        videoFrame.destroy()
    }
}


class YuvRender {
    constructor(options) {
        this.$videoElement = options.$videoElement;
        this.context2D = null;
        this.contextGl = null;
        this.contextGlRender = null;
        this.contextGlDestroy = null;
        this.bitmaprenderer = null;
        this.renderType = null;
        this.videoInfo = {
            width: '',
            height: '',
            encType: '',
        }

        this._initContext2D();
    }

    destroy() {
        if (this.contextGl) {
            this.contextGl = null;
        }
        if (this.context2D) {
            this.context2D = null;
        }
        if (this.contextGlRender) {
            this.contextGlDestroy && this.contextGlDestroy();
            this.contextGlDestroy = null;
            this.contextGlRender = null;
        }
        if (this.bitmaprenderer) {
            this.bitmaprenderer = null;
        }

        this.renderType = null;
    }

    updateVideoInfo(data) {
        if (data.videoCode) {
            this.videoInfo.encType = data.videoCode
        }

        if (data.width) {
            this.videoInfo.width = data.width;
        }

        if (data.height) {
            this.videoInfo.height = data.height;
        }

        this.$videoElement.height = this.videoInfo.height;
        this.$videoElement.width = this.videoInfo.width;
    }


    _initContext2D(options = {}) {
        this.context2D = this.$videoElement.getContext('2d', options);
    }


    render(msg) {
        if (isFunction(msg.videoFrame.createImageBitmap)) {
            try {
                msg.videoFrame.createImageBitmap().then((image) => {
                    this.context2D.drawImage(image, 0, 0, this.$videoElement.width, this.$videoElement.height);
                    closeVideoFrame(msg.videoFrame);
                })
            } catch (e) {
            }
        } else {
            this.context2D.drawImage(msg.videoFrame, 0, 0, this.$videoElement.width, this.$videoElement.height);
            closeVideoFrame(msg.videoFrame);
        }
    }
}

export default YuvRender;