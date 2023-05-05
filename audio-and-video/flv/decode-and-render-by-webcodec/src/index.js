import FlvDemuxer from "./flv-demuxer";
import AudioPlayer from "./audioPlayer";
import YuvRender from "./yuvRender";
import WcsDecoder from "./wcsDecoder";


window.FlvDemuxer = FlvDemuxer;
window.WcsDecoder = WcsDecoder;
window.AudioPlayer = AudioPlayer;
window.YuvRender = YuvRender;

export default {
    FlvDemuxer,
    WcsDecoder,
    YuvRender,
    AudioPlayer
}
