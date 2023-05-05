#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <sys/time.h>
#include <stdio.h>
#include <string.h>

using namespace emscripten;
using namespace std;
typedef unsigned char u8;
typedef unsigned int u32;

extern "C"
{
#include <libavcodec/avcodec.h>
#include <libswresample/swresample.h>
}

class Decoder {

public:
    val mJsObject;

    AVCodec *mCodec = nullptr;
    AVCodecContext *mDecCtx = nullptr;
    AVFrame *mFrame = nullptr;
    AVPacket *mPacket = nullptr;
    bool mInit = false;

public:

    Decoder(val&& v);
    virtual ~Decoder();

    void initCodec(enum AVCodecID codecID);
    virtual void clear();
    void decode(u8* buffer, u32 bufferLen, u32 timestamp);

    virtual void frameReady(u32 timestamp) {};

};

Decoder::Decoder(val&& v) : mJsObject(move(v)) {
  
}

Decoder::~Decoder() {
    clear();
}

void Decoder::initCodec(enum AVCodecID codecID) {
    
    if (mInit) {

        return;
    }

    mPacket = av_packet_alloc();
    mCodec = avcodec_find_decoder(codecID);
    mDecCtx = avcodec_alloc_context3(mCodec);
    mFrame = av_frame_alloc();

}

void Decoder::clear() {

    if (mDecCtx) {
        avcodec_free_context(&mDecCtx);
        mDecCtx = nullptr;
    }

    if (mFrame) {
        av_frame_free(&mFrame);
        mFrame = nullptr;
    }

    if (mPacket) {
        av_packet_free(&mPacket);
        mPacket = nullptr;
    }

    mCodec = nullptr;
    mInit = false;
}

void Decoder::decode(u8* buffer, u32 bufferLen, u32 timestamp) {

    int ret = 0;
    mPacket->data = buffer;
    mPacket->size = bufferLen;
    mPacket->pts = timestamp;

    ret = avcodec_send_packet(mDecCtx, mPacket);
    while (ret >= 0)
    {
        ret = avcodec_receive_frame(mDecCtx, mFrame);
        if (ret == AVERROR(EAGAIN) || ret == AVERROR_EOF)
            return;

        frameReady(timestamp);
    }
}


class VideoDecoder : public Decoder {

public:

    int mVideoWith = 0;
    int mVideoHeight = 0;
    int mVCodecId = 0;
    int mStartTimestamp = 0;

    u8* mYUV = nullptr;

public:

    VideoDecoder(val&& v);
    virtual ~VideoDecoder();
    void setCodec(u32 vCodecId, string extra);
    void decode(string input, u32 isKeyFrame, u32 timestamp);
    virtual void clear();
    virtual void frameReady(u32 timestamp);
};


VideoDecoder::VideoDecoder(val&& v) : Decoder(move(v)) {
  
}

VideoDecoder::~VideoDecoder() {

    clear();

//    printf("VideoDecoder dealloc \n");

}

void VideoDecoder::clear() {

    if (mYUV) {
        free(mYUV);
        mYUV = nullptr;
    }

    mVideoWith = 0;
    mVideoHeight = 0;
    mVCodecId = 0;
    mStartTimestamp = 0;
    Decoder::clear();
}

void VideoDecoder::setCodec(u32 vCodecId, string extra){

//    printf("Use NOT-SIMD Decoder, VideoDecoder::setCodec vtype %d, extra %d \n", vtype, extra.length());
    
  
    clear();

    enum AVCodecID codecID;

    switch (vCodecId)
    {
        case 7: {

            codecID = AV_CODEC_ID_H264;

            break;
        }

        case 12: {

            codecID = AV_CODEC_ID_HEVC;
            break;
        }
    
        default: {
            printf("codec not support: %d", vCodecId);
            return;
        }
    }

    mVCodecId = vCodecId;


    Decoder::initCodec(codecID);
    
    u32 extraDataSize = extra.length();
    u8* extraData = (u8*)extra.data();

    if (extraData && extraDataSize > 0) {

        mDecCtx->extradata_size = extraDataSize;
        mDecCtx->extradata = extraData;
    }

    avcodec_open2(mDecCtx, mCodec, NULL);

    mInit = true;
}


void  VideoDecoder::decode(string input, u32 isKeyFrame, u32 timestamp){

  //   printf("VideoDecoder::decode input %d, timestamp %d \n", input.length(), timestamp);

    if (!mInit) {

//        printf("VideoDecoder has not Init when decode \n");
        return;
    }


    u32 bufferLen = input.length();
    u8* buffer = (u8*)input.data();

    // struct timeval tv;
    // gettimeofday(&tv,NULL);
    // int start = tv.tv_sec*1000 + tv.tv_usec/1000;


    Decoder::decode(buffer, bufferLen, timestamp);

    // gettimeofday(&tv,NULL);
    // int stop = tv.tv_sec*1000 + tv.tv_usec/1000;

    //  printf("decoder frame  decodetime %d\n", stop - start);

}

void  VideoDecoder::frameReady(u32 timestamp) {

    if (mVideoWith != mFrame->width || mVideoHeight != mFrame->height) {

        mVideoWith = mFrame->width;
        mVideoHeight = mFrame->height;

        mJsObject.call<void>("videoInfo", mVCodecId, mVideoWith, mVideoHeight);

        if (mYUV) {
            free(mYUV);
        }
            
       
        mYUV = (u8*)malloc(mVideoWith * mVideoHeight * 3 /2);
    }

    int size = mVideoWith * mVideoHeight;
 
    int halfw = mVideoWith >> 1;
    int halfh = mVideoHeight >> 1;

    if (mVideoWith == mFrame->linesize[0]) {

        memcpy(mYUV, mFrame->data[0], size);

    } else {

        for (int i = 0; i < mVideoHeight; i++) {

            memcpy(mYUV + i*mVideoWith, mFrame->data[0] + i*mFrame->linesize[0], mVideoWith);
        }

    }

    if (halfw == mFrame->linesize[1]) {

        memcpy(mYUV + size, mFrame->data[1], size>>2);

    } else {

        for (int i = 0; i < halfh; i++) {

            memcpy(mYUV + size + i*halfw, mFrame->data[1] + i*mFrame->linesize[1], halfw);
        }

    }

    if (halfw == mFrame->linesize[2]) {

        memcpy(mYUV + size*5/4, mFrame->data[2], size>>2);

    } else {

        for (int i = 0; i < halfh; i++) {

            memcpy(mYUV + size*5/4 + i*halfw, mFrame->data[2] + i*mFrame->linesize[2], halfw);
        }

    }

  //  printf("C yuv[0-5] %d  %d  %d  %d %d %d \n", mYUV[0], mYUV[1], mYUV[2], mYUV[3], mYUV[4], mYUV[5]);

   // printf("yuvData jspts %d ffpts %d pictype %d \n", timestamp, (u32)mFrame->pts, mFrame->pict_type);

    mJsObject.call<void>("yuvData", (u32)mYUV, (u32)mFrame->pts);

}


class AudioDecoder : public Decoder {

public:

    enum AVSampleFormat mAudioFormat;

    SwrContext *mConvertCtx = nullptr;
    u8 *mOutBuffer[2];

    bool mNotifyAudioParam;
    int mACodecId = 0;
    int sample_rate = 0;
    int n_channel = 0;

public:

    AudioDecoder(val&& v);
    virtual ~AudioDecoder();

    void setCodec(u32 aCodecId,u32 aSimpleRate, string extra);
    void decode(string input, u32 timestamp);
    virtual void clear();
    virtual void frameReady(u32 timestamp) ;

};

AudioDecoder::AudioDecoder(val&& v) : Decoder(move(v)) {
    
    //指定输出fltp raw 流，其他 采样率，通道数，位深 保持不变
    mAudioFormat = AV_SAMPLE_FMT_FLTP;

    mOutBuffer[0] = nullptr;
    mOutBuffer[1] = nullptr;

    mNotifyAudioParam = false;
}

void AudioDecoder::clear() {


    if (mConvertCtx) {
        swr_free(&mConvertCtx);
        mConvertCtx = nullptr;
    }
        
    if (mOutBuffer[0]) {
        free(mOutBuffer[0]);
        mOutBuffer[0] = nullptr;
    }

    mOutBuffer[1] = nullptr;
    mNotifyAudioParam = false;
    mACodecId = 0;
    sample_rate = 0;
    n_channel = 0;
    Decoder::clear();
}

AudioDecoder::~AudioDecoder() {

    clear();

//    printf("AudioDecoder dealloc \n");
}

void AudioDecoder::setCodec(u32 aCodecId, u32 aSimpleRate, string extra){
    
    clear();
 
    switch (aCodecId)
    {
        case 10: {

            Decoder::initCodec(AV_CODEC_ID_AAC);
            mDecCtx->extradata_size = extra.length();
            mDecCtx->extradata = (u8*)extra.data();
            avcodec_open2(mDecCtx, mCodec, NULL);
            n_channel = 2;
            break;
        }

        case 7: {

            Decoder::initCodec(AV_CODEC_ID_PCM_ALAW);
            mDecCtx->channel_layout = AV_CH_LAYOUT_MONO;
            mDecCtx->sample_rate = 8000;
            mDecCtx->channels = 1;
            avcodec_open2(mDecCtx, mCodec, NULL);
            n_channel = 1;
            break;
        }

        case 8: {

            Decoder::initCodec(AV_CODEC_ID_PCM_MULAW);
            mDecCtx->channel_layout = AV_CH_LAYOUT_MONO;
            mDecCtx->sample_rate = 8000;
            mDecCtx->channels = 1;
            avcodec_open2(mDecCtx, mCodec, NULL);
            n_channel = 1;
            break;
        }
    
        default: {

            return;
        }
    }

    mACodecId = aCodecId;
    sample_rate = aSimpleRate;

    mInit = true;
}

void  AudioDecoder::decode(string input, u32 timestamp){
    if (!mInit) {

        return;
    }

    u32 bufferLen = input.length();
    u8* buffer = (u8*)input.data();

    Decoder::decode(buffer, bufferLen, timestamp);

}

void  AudioDecoder::frameReady(u32 timestamp)  {

    auto nb_samples = mFrame->nb_samples;


    if (!mNotifyAudioParam) {

        mJsObject.call<void>("audioInfo", mACodecId, mFrame->sample_rate, mFrame->channels);
        mNotifyAudioParam = true;
    }

    auto bytes_per_sample = av_get_bytes_per_sample(mAudioFormat);
    if (mDecCtx->sample_fmt == mAudioFormat && sample_rate == mDecCtx->sample_rate && mDecCtx->channel_layout == n_channel)
    {
        mJsObject.call<void>("pcmData", int(mFrame->data), nb_samples * bytes_per_sample * n_channel);
        return;
    }
    //s16 -> fltp
    if (!mConvertCtx)
    {
        mConvertCtx  = swr_alloc_set_opts(NULL, n_channel == 2 ? AV_CH_LAYOUT_STEREO : AV_CH_LAYOUT_MONO, mAudioFormat, sample_rate,
                                            mDecCtx->channel_layout, mDecCtx->sample_fmt, mDecCtx->sample_rate,
                                            0, NULL);
        auto ret = swr_init(mConvertCtx);
        auto out_buffer_size = av_samples_get_buffer_size(NULL, n_channel, nb_samples, mAudioFormat, 0);
        auto buffer = (uint8_t *)av_malloc(out_buffer_size);
        mOutBuffer[0] = buffer;
        mOutBuffer[1] = buffer + (out_buffer_size / 2);
    }
    // // 转换
    auto ret = swr_convert(mConvertCtx , mOutBuffer, nb_samples, (const uint8_t **)mFrame->data, nb_samples);
    while (ret > 0)
    {
        mJsObject.call<void>("pcmData", int(mOutBuffer), ret, timestamp);
        ret = swr_convert(mConvertCtx , mOutBuffer, nb_samples, (const uint8_t **)mFrame->data, 0);
    }
}


EMSCRIPTEN_BINDINGS(my_module) {
     class_<VideoDecoder>("VideoDecoder")
    .constructor<val>()
    .function("setCodec", &VideoDecoder::setCodec)
    .function("decode", &VideoDecoder::decode)
    .function("clear", &VideoDecoder::clear);
    class_<AudioDecoder>("AudioDecoder")
    .constructor<val>()
    .function("setCodec", &AudioDecoder::setCodec)
    .function("decode", &AudioDecoder::decode)
    .function("clear", &AudioDecoder::clear);
}
