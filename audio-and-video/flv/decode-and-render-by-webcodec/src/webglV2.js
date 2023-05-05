import {mat4, vec3} from 'gl-matrix'

export default (gl, openWebglAlignment) => {
    const vertexShaderScript = `
            attribute vec4 aVertexPosition;
            attribute vec2 aTexturePosition;
            uniform mat4 uModelMatrix;
            uniform mat4 uViewMatrix;
            uniform mat4 uProjectionMatrix;
            varying lowp vec2 vTexturePosition;
            void main(void) {
              gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;
              vTexturePosition = aTexturePosition;
            }
        `;
    const fragmentShaderScript = `
            precision highp float;
            varying highp vec2 vTexturePosition;
            uniform int isyuv;
            uniform sampler2D rgbaTexture;
            uniform sampler2D yTexture;
            uniform sampler2D uTexture;
            uniform sampler2D vTexture;

            const mat4 YUV2RGB = mat4( 1.1643828125, 0, 1.59602734375, -.87078515625,
                                       1.1643828125, -.39176171875, -.81296875, .52959375,
                                       1.1643828125, 2.017234375, 0, -1.081390625,
                                       0, 0, 0, 1);


            void main(void) {

                if (isyuv>0) {

                    highp float y = texture2D(yTexture,  vTexturePosition).r;
                    highp float u = texture2D(uTexture,  vTexturePosition).r;
                    highp float v = texture2D(vTexture,  vTexturePosition).r;
                    gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;

                } else {
                    gl_FragColor =  texture2D(rgbaTexture, vTexturePosition);
                }
            }
        `;

    if (openWebglAlignment) {
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    }

    const shaderProgram = _initShaderProgram();


    const _programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            texturePosition: gl.getAttribLocation(shaderProgram, 'aTexturePosition'),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelMatrix: gl.getUniformLocation(shaderProgram, 'uModelMatrix'),
            viewMatrix: gl.getUniformLocation(shaderProgram, 'uViewMatrix'),
            rgbatexture: gl.getUniformLocation(shaderProgram, 'rgbaTexture'),
            ytexture: gl.getUniformLocation(shaderProgram, 'yTexture'),
            utexture: gl.getUniformLocation(shaderProgram, 'uTexture'),
            vtexture: gl.getUniformLocation(shaderProgram, 'vTexture'),
            isyuv: gl.getUniformLocation(shaderProgram, 'isyuv'),
        }
    }

    const _buffers = _initBuffers();

    const _rgbatexture = _createTexture();
    const _ytexture = _createTexture();
    const _utexture = _createTexture();
    const _vtexture = _createTexture();


    function _initBuffers() {
        // Create a buffer for the cube's vertex positions.
        const positionBuffer = gl.createBuffer();

        // Select the positionBuffer as the one to apply buffer
        // operations to from here out.

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Now create an array of positions for the cube.

        const positions = [
            // Front face
            -1.0, -1.0, -1.0,
            1.0, -1.0, -1.0,
            1.0, 1.0, -1.0,
            -1.0, 1.0, -1.0,

        ];

        // Now pass the list of positions into WebGL to build the
        // shape. We do this by creating a Float32Array from the
        // JavaScript array, then use it to fill the current buffer.

        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // Now set up the colors for the faces. We'll use solid colors
        // for each face.

//   const facePos = [
//     [0.0,  0.0],
//     [1.0,  0.0],
//     [1.0,  1.0],
//     [0.0,  1.0]
//   ];

        const facePos = [
            [0.0, 1.0],
            [1.0, 1.0],
            [1.0, 0.0],
            [0.0, 0.0]
        ];

        // Convert the array of colors into a table for all the vertices.

        var texturePos = [];

        texturePos = texturePos.concat(...facePos);

        const texpositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texpositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturePos), gl.STATIC_DRAW);

        // Build the element array buffer; this specifies the indices
        // into the vertex arrays for each face's vertices.

        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        // This array defines each face as two triangles, using the
        // indices into the vertex array to specify each triangle's
        // position.

        const indices = [
            0, 1, 2, 0, 2, 3
        ];


        // Now send the element array to GL

        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(indices), gl.STATIC_DRAW);

        return {
            position: positionBuffer,
            texPosition: texpositionBuffer,
            indices: indexBuffer
        };
    }

    function _createTexture() {
        let texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        return texture;
    }

    function _loadShader(type, source) {
        const shader = gl.createShader(type);

        // Send the source to the shader object

        gl.shaderSource(shader, source);

        // Compile the shader program

        gl.compileShader(shader);

        // See if it compiled successfully

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    function _initShaderProgram() {
        const vertexShader = _loadShader(gl.VERTEX_SHADER, vertexShaderScript);
        const fragmentShader = _loadShader(gl.FRAGMENT_SHADER, fragmentShaderScript);

        // Create the shader program

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.log('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }

        return shaderProgram;
    }

    function _drawScene(w, h) {
        gl.viewport(0, 0, w, h);

        gl.clearColor(0.0, 0.0, 0.0, 0.0);  // Clear to black, fully opaque
        gl.clearDepth(1.0);                 // Clear everything
        gl.enable(gl.DEPTH_TEST);           // Enable depth testing
        gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

        // Clear the canvas before we start drawing on it.

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();
        mat4.ortho(projectionMatrix, -1, 1, -1, 1, zNear, zFar);

        // Set the drawing position to the "identity" point, which is
        // the center of the scene.
        const modelMatrix = mat4.create();
        mat4.identity(modelMatrix);

        const viewMatrix = mat4.create();
        mat4.lookAt(viewMatrix, vec3.fromValues(0, 0, 0), vec3.fromValues(0, 0, -1), vec3.fromValues(0, 1, 0));

        // Tell WebGL how to pull out the positions from the position
        // buffer into the vertexPosition attribute
        {
            const numComponents = 3;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, _buffers.position);
            gl.vertexAttribPointer(
                _programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                _programInfo.attribLocations.vertexPosition);
        }

        // Tell WebGL how to pull out the colors from the color buffer
        // into the vertexColor attribute.
        {
            const numComponents = 2;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, _buffers.texPosition);
            gl.vertexAttribPointer(
                _programInfo.attribLocations.texturePosition,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(
                _programInfo.attribLocations.texturePosition);
        }

        let rgbatextunit = 2;
        let ytextunit = rgbatextunit + 1;
        let utextunit = rgbatextunit + 2;
        let vtextunit = rgbatextunit + 3;

        gl.activeTexture(gl.TEXTURE0 + ytextunit);
        gl.bindTexture(gl.TEXTURE_2D, _ytexture);
        gl.activeTexture(gl.TEXTURE0 + utextunit);
        gl.bindTexture(gl.TEXTURE_2D, _utexture);
        gl.activeTexture(gl.TEXTURE0 + vtextunit);
        gl.bindTexture(gl.TEXTURE_2D, _vtexture);


        // Tell WebGL which indices to use to index the vertices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _buffers.indices);

        // Tell WebGL to use our program when drawing

        gl.useProgram(_programInfo.program);

        // Set the shader uniforms

        gl.uniformMatrix4fv(
            _programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix);

        gl.uniformMatrix4fv(
            _programInfo.uniformLocations.modelMatrix,
            false,
            modelMatrix);

        gl.uniformMatrix4fv(
            _programInfo.uniformLocations.viewMatrix,
            false,
            viewMatrix);

        gl.uniform1i(_programInfo.uniformLocations.rgbatexture, rgbatextunit);
        gl.uniform1i(_programInfo.uniformLocations.ytexture, ytextunit);
        gl.uniform1i(_programInfo.uniformLocations.utexture, utextunit);
        gl.uniform1i(_programInfo.uniformLocations.vtexture, vtextunit);

        gl.uniform1i(_programInfo.uniformLocations.isyuv, 1);

        {
            const vertexCount = 6;
            const type = gl.UNSIGNED_SHORT;
            const offset = 0;
            gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
        }

        // Update the rotation for the next draw
    }

    return {
        render: function (width, height, y, u, v) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, _ytexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, _utexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
            gl.activeTexture(gl.TEXTURE2);
            gl.bindTexture(gl.TEXTURE_2D, _vtexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
            _drawScene(width, height)
        },
        renderYUV: function (width, height, data) {
            let y = data.slice(0, width * height);
            let u = data.slice(width * height, width * height * 5 / 4);
            let v = data.slice(width * height * 5 / 4, width * height * 3 / 2);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, _ytexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, _utexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
            gl.activeTexture(gl.TEXTURE2);
            gl.bindTexture(gl.TEXTURE_2D, _vtexture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
            _drawScene(width, height)
        },

        destroy: function () {
            gl.deleteProgram(_programInfo.program);

            gl.deleteBuffer(_buffers.position);
            gl.deleteBuffer(_buffers.texPosition);
            gl.deleteBuffer(_buffers.indices);

            gl.deleteTexture(_rgbatexture);
            gl.deleteTexture(_ytexture);
            gl.deleteTexture(_utexture);
            gl.deleteTexture(_vtexture);
        }
    }
}
