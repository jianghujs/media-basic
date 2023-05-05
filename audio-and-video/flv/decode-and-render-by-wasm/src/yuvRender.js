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
        this.initWebGlContext();
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

    updateVideoInfo(data){
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



    initWebGlContext() {
        this.contextGl = createContextGL(this.$videoElement);
        const webgl = createWebGL(this.contextGl, true);
        this.contextGlRender = webgl.render;
        this.contextGlDestroy = webgl.destroy
    }

    render(data) {
        const width = this.videoInfo.width;
        const height = this.videoInfo.height;
        let y = data.slice(0, width * height);
        let u = data.slice(width * height, width * height * 5 / 4);
        let v = data.slice(width * height * 5 / 4, width * height * 3 / 2);
        this.contextGlRender(this.$videoElement.width, this.$videoElement.height, y, u, v);
    }
}

export default YuvRender;