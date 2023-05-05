import DecoderModule from '../decoder/decoder-video';

DecoderModule.postRun = function () {
    console.log('decoderModule.postRun');
    // workerPostRun(decoderModule);
}