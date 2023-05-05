import DecoderModule from '../decoder/decoder-audio';

DecoderModule.postRun = function () {
    console.log('decoderModule.postRun');
    // workerPostRun(decoderModule);
}