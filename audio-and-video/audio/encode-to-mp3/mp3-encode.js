/**
 *
 * @param channels
 * @param sampleRate
 * @param samples
 * @returns {Blob}
 */
function encodeMono(channels, sampleRate, samples) {
    var buffer = [];
    var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
    var remaining = samples.length;
    var maxSamples = 1152;
    for (var i = 0; remaining >= maxSamples; i += maxSamples) {
        var mono = samples.subarray(i, i + maxSamples);
        var mp3buf = mp3enc.encodeBuffer(mono);
        if (mp3buf.length > 0) {
            buffer.push(new Int8Array(mp3buf));
        }
        remaining -= maxSamples;
    }
    var d = mp3enc.flush();
    if(d.length > 0){
        buffer.push(new Int8Array(d));
    }

    console.log('done encoding, size=', buffer.length);
    var blob = new Blob(buffer, {type: 'audio/mp3'});
    var bUrl = window.URL.createObjectURL(blob);
    console.log('Blob created, URL:', bUrl);
    window.myAudioPlayer = document.createElement('audio');
    window.myAudioPlayer.src = bUrl;
    window.myAudioPlayer.setAttribute('controls', '');
    window.myAudioPlayer.play();

    return blob;
}

