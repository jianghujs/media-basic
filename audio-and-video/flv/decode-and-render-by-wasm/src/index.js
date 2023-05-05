import FlvDemuxer from "./flv-demuxer";
import DecoderFull from "./decoderFull";
import AudioPlayer from "./audioPlayer";
import YuvRender from "./yuvRender";


window.FlvDemuxer = FlvDemuxer;
window.DecoderFull = DecoderFull;
window.AudioPlayer = AudioPlayer;
window.YuvRender = YuvRender;

export default {
    FlvDemuxer,
    DecoderFull,
    YuvRender,
    AudioPlayer
}
