(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.demo = factory());
})(this, (function () { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(_typeof_1);

	var toPrimitive = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];
	function _toPrimitive(input, hint) {
	  if (_typeof(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}
	module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPrimitive);

	var toPropertyKey = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function _toPropertyKey(arg) {
	  var key = toPrimitive(arg, "string");
	  return _typeof(key) === "symbol" ? key : String(key);
	}
	module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPropertyKey);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _setPrototypeOf(o, p);
	}
	module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}
	module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _inherits = unwrapExports(inherits);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return assertThisInitialized(self);
	}
	module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  return _getPrototypeOf(o);
	}
	module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	var Emitter = /*#__PURE__*/function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }
	  _createClass(Emitter, [{
	    key: "on",
	    value: function on(name, fn, ctx) {
	      var e = this.e || (this.e = {});
	      (e[name] || (e[name] = [])).push({
	        fn: fn,
	        ctx: ctx
	      });
	      return this;
	    }
	  }, {
	    key: "once",
	    value: function once(name, fn, ctx) {
	      var self = this;
	      function listener() {
	        self.off(name, listener);
	        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	        fn.apply(ctx, args);
	      }
	      listener._ = fn;
	      return this.on(name, listener, ctx);
	    }
	  }, {
	    key: "emit",
	    value: function emit(name) {
	      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	      for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        data[_key2 - 1] = arguments[_key2];
	      }
	      for (var i = 0; i < evtArr.length; i += 1) {
	        evtArr[i].fn.apply(evtArr[i].ctx, data);
	      }
	      return this;
	    }
	  }, {
	    key: "off",
	    value: function off(name, callback) {
	      var e = this.e || (this.e = {});
	      if (!name) {
	        Object.keys(e).forEach(function (key) {
	          delete e[key];
	        });
	        delete this.e;
	        return;
	      }
	      var evts = e[name];
	      var liveEvents = [];
	      if (evts && callback) {
	        for (var i = 0, len = evts.length; i < len; i += 1) {
	          if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
	        }
	      }
	      if (liveEvents.length) {
	        e[name] = liveEvents;
	      } else {
	        delete e[name];
	      }
	      return this;
	    }
	  }]);
	  return Emitter;
	}();

	function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var FLV_PARSE_STATE = {
	  init: "init",
	  //
	  header: "header",
	  //
	  body: "body" //
	};

	var FLV_TAG_TYPE = {
	  audio: 8,
	  //
	  video: 9,
	  //
	  script: 18 //
	};

	var FLV_TAG_TYPE_SHOW = {
	  8: "audio",
	  //
	  9: "video",
	  //
	  18: "script" //
	};

	var CODEC_ID = {
	  h264: 7,
	  // AVC
	  h265: 12 // HEVC
	};

	var CODEC_ID_SHOW = {
	  7: "h264",
	  // AVC
	  12: "h265" // HEVC
	};

	var SOUND_ID = {
	  g711a: 7,
	  //
	  g711u: 8,
	  //
	  aac: 10 //
	};

	var AAC_PACKET_TYPE = {
	  sequenceHeader: 0,
	  //
	  raw: 1 //
	};

	var VIDEO_FRAME_TYPE = {
	  keyFrame: 1,
	  //
	  interFrame: 2 //
	};

	var VIDEO_PACKET_TYPE = {
	  sequenceHeader: 0,
	  //
	  nalu: 1 //
	};
	var FlvDemuxer = /*#__PURE__*/function (_Emitter) {
	  _inherits(FlvDemuxer, _Emitter);
	  var _super = _createSuper$1(FlvDemuxer);
	  function FlvDemuxer() {
	    var _this;
	    _classCallCheck(this, FlvDemuxer);
	    _this = _super.call(this);
	    _this.tempBuffer = null;
	    //
	    _this.needLen = 9;
	    _this.state = FLV_PARSE_STATE.init;
	    return _this;
	  }
	  _createClass(FlvDemuxer, [{
	    key: "destroy",
	    value: function destroy() {
	      this.reset();
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.tempBuffer = null;
	      this.needLen = 9;
	      this.state = FLV_PARSE_STATE.init;
	    }
	  }, {
	    key: "dispatchold",
	    value: function dispatchold(data) {
	      //
	      var remain = data;

	      // merge tempBuffer and data
	      if (this.tempBuffer) {
	        var newBuffer = new Uint8Array(this.tempBuffer.length + data.length);
	        newBuffer.set(this.tempBuffer, 0);
	        newBuffer.set(data, this.tempBuffer.length);
	        remain = newBuffer;
	        this.tempBuffer = undefined;
	      }
	      //
	      var tmp = new ArrayBuffer(4);
	      var dv = new DataView(tmp);
	      var tagType;
	      var dts;
	      var pts;
	      // parse flv
	      while (true) {
	        if (remain.length < this.needLen) {
	          console.log("remain.length < this.needLen: ".concat(remain.length, " < ").concat(this.needLen));
	          break;
	        }

	        //
	        if (this.state === FLV_PARSE_STATE.init) {
	          // flv header 9 bytes
	          var flvHeader = remain.slice(0, this.needLen);
	          console.log('flvHeader: ', flvHeader);
	          // 前3字节是 'FLV' 三个字符
	          var f = flvHeader[0];
	          var l = flvHeader[1];
	          var v = flvHeader[2];
	          // 第4字节是版本号，只有 0x01 这一个合法值
	          var version = flvHeader[3];
	          console.log('flv', f, l, v);
	          console.log('version: ', version);
	          // 第5字节是Flags ，用于鉴别是否含有音频、视频数据
	          var hasAudio = (flvHeader[4] & 4) >>> 2 !== 0;
	          var hasVideo = (flvHeader[4] & 1) !== 0;
	          console.log('hasAudio: ', hasAudio);
	          console.log('hasVideo: ', hasVideo);
	          // 6-9字节，组成一个int32是 Header Size，这个值一定不小于0x09
	          console.log("FLV_PARSE_STATE.init current needLen is ".concat(this.needLen, ", and next needLen is 15, and next stats is FLV_PARSE_STATE.header"));
	          //
	          remain = remain.slice(this.needLen);
	          // next length is 15 bytes 15 =  4(previous tag size)+ 11(tag header) ;
	          this.needLen = 15;
	          //
	          this.state = FLV_PARSE_STATE.header;
	        } else if (this.state === FLV_PARSE_STATE.header) {
	          // 0,1,2,3 is previous tag size
	          tagType = remain[4] & 0x1F; // 5bit代表类型,8:audio 9:video 18:script other:其他
	          console.log('FLV_PARSE_STATE.header,tagType', FLV_TAG_TYPE_SHOW[tagType]);
	          // 2-4 消息长度
	          dv.setUint8(0, remain[7]);
	          dv.setUint8(1, remain[6]);
	          dv.setUint8(2, remain[5]);
	          dv.setUint8(3, 0);
	          var payloadLen = dv.getUint32(0, true); //Tag 中除通用头外的长度，即 Header + Data 字段的长度 (等于 Tag 总长度 – 11)
	          // 5-7 时间戳
	          dv.setUint8(0, remain[10]);
	          dv.setUint8(1, remain[9]);
	          dv.setUint8(2, remain[8]);
	          // 8-8 时间戳扩展
	          dv.setUint8(3, remain[11]);
	          dts = dv.getUint32(0, true);
	          console.log('needLen is', this.needLen);
	          //
	          remain.slice(0, this.needLen);
	          //
	          remain = remain.slice(this.needLen);
	          // 下一个长度是 tag body
	          this.needLen = payloadLen;
	          console.log("nextLength is ".concat(payloadLen, " and next is FLV_PARSE_STATE.body"));
	          this.state = FLV_PARSE_STATE.body;
	        } else {
	          // tag body = tag header(1-5) + tag data
	          if (tagType === FLV_TAG_TYPE.video) {
	            // 1-4bit，帧类型【FrameType】
	            var frameType = remain[0] >> 4 & 0x0F;
	            //  5-8bit，编码类型【CodecID】
	            var codecId = remain[0] & 0x0F;
	            if (codecId === CODEC_ID.h264 || codecId === CODEC_ID.h265) {
	              // h264 or h265
	              var packetType = remain[1];
	              console.log('frameType packetType', frameType, packetType);

	              // compositionTime
	              dv.setUint8(0, remain[4]);
	              dv.setUint8(1, remain[3]);
	              dv.setUint8(2, remain[2]);
	              dv.setUint8(3, 0);
	              var compositionTime = dv.getUint32(0, true);
	              pts = dts + compositionTime;
	              if (frameType === VIDEO_FRAME_TYPE.keyFrame) {
	                if (packetType === VIDEO_PACKET_TYPE.sequenceHeader) {
	                  console.log("".concat(CODEC_ID_SHOW[codecId], " keyFrame sequenceHeader"));
	                  remain.slice(0, this.needLen);

	                  // 用来解析video的width，height ， extraData
	                  // tag header (1-5)
	                  var extraData = remain.slice(5, this.needLen);
	                  this.emit('videoExtraData', {
	                    codecId: codecId,
	                    extraData: extraData
	                  });
	                } else if (packetType === VIDEO_PACKET_TYPE.nalu) {
	                  console.warn("".concat(CODEC_ID_SHOW[codecId], " keyFrame nalu, dts: ").concat(dts, ", pts: ").concat(pts));
	                  // tag header (1-5)
	                  var nalu = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: nalu,
	                    timestamp: dts,
	                    isKeyFrame: true
	                  });
	                } else {
	                  console.warn('other packet type nalu', packetType);
	                }
	              } else if (frameType === VIDEO_FRAME_TYPE.interFrame) {
	                if (packetType === VIDEO_PACKET_TYPE.nalu) {
	                  console.log("".concat(CODEC_ID_SHOW[codecId], " interFrame nalu, dts: ").concat(dts, ", pts: ").concat(pts));
	                  // P Frame
	                  // tag header (1-5)
	                  var _nalu = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: _nalu,
	                    timestamp: dts,
	                    isKeyFrame: false
	                  });
	                }
	              } else {
	                console.log('other frame type', frameType);
	              }
	            }
	          } else if (tagType === FLV_TAG_TYPE.audio) {
	            // 音频格式【SoundFormat】
	            var soundId = remain[0] >> 4 & 0x0F;
	            remain[0] >> 2 & 0x02;
	            remain[0] >> 1 & 0x01;
	            remain[0] & 0x0F;
	            if (soundId === SOUND_ID.aac) {
	              // aac about sequence header and raw
	              // [2-2]：AAC音频类型，注，只有在SoundFormat=AAC 时，才有此数据
	              //  0 = AAC sequence header
	              //  1 = AAC raw
	              var _packetType = remain[1];
	              if (_packetType === AAC_PACKET_TYPE.sequenceHeader) {
	                remain.slice(0, this.needLen);
	                var aacSequenceHeader = remain.slice(2, this.needLen);
	                console.log('AAC sequence header');
	                this.emit('audioExtraData', {
	                  codecId: soundId,
	                  type: 'aac',
	                  extraData: aacSequenceHeader
	                });
	              } else {
	                // AAC raw
	                var aacRaw = remain.slice(2, this.needLen);
	                console.log('AAC raw');
	                this.emit('audioData', {
	                  type: 'aac',
	                  timestamp: dts,
	                  data: aacRaw
	                });
	              }
	            } else {
	              var type = soundId === SOUND_ID.g711a ? 'g711a' : 'g711u';
	              this.emit('audioExtraData', {
	                type: type,
	                extraData: new Uint8Array(0)
	              });
	              // g711a or g711u
	              // 音频数据
	              var g711Raw = remain.slice(1, this.needLen);
	              console.log('g711 raw');
	              this.emit('audioData', {
	                type: type,
	                timestamp: dts,
	                data: g711Raw
	              });
	            }
	          } else if (tagType === FLV_TAG_TYPE.script) {
	            console.log('script tag');
	          } else {
	            console.log('other tag type', tagType);
	          }
	          //
	          remain = remain.slice(this.needLen);
	          // next length is 15 bytes 15 =  4(previous tag size)+ 11(tag header) ;
	          this.needLen = 15;
	          this.state = FLV_PARSE_STATE.header;
	        }
	      }
	      this.tempBuffer = remain;
	    }
	  }, {
	    key: "dispatch",
	    value: function dispatch(data) {
	      var remain = data;
	      if (this.tempBuffer) {
	        var newbuffer = new Uint8Array(this.tempBuffer.length + data.length);
	        newbuffer.set(this.tempBuffer, 0);
	        newbuffer.set(data, this.tempBuffer.length);
	        remain = newbuffer;
	        this.tempBuffer = undefined;
	      }
	      var tmp = new ArrayBuffer(4);
	      var dv = new DataView(tmp);
	      while (true) {
	        if (remain.length < this.needLen) {
	          break;
	        }
	        if (this.state === FLV_PARSE_STATE.init) {
	          remain.slice(0, this.needLen);
	          remain = remain.slice(this.needLen);
	          this.needLen = 15;
	          this.state = FLV_PARSE_STATE.header;
	        } else if (this.state === FLV_PARSE_STATE.header) {
	          this._tagtype = remain[4] & 0x1F; // 5bit代表类型,8:audio 9:video 18:script other:其他

	          dv.setUint8(0, remain[7]);
	          dv.setUint8(1, remain[6]);
	          dv.setUint8(2, remain[5]);
	          dv.setUint8(3, 0);
	          var payloadlen = dv.getUint32(0, true); //Tag 中除通用头外的长度，即 Header + Data 字段的长度 (等于 Tag 总长度 – 11)

	          dv.setUint8(0, remain[10]);
	          dv.setUint8(1, remain[9]);
	          dv.setUint8(2, remain[8]);
	          dv.setUint8(3, remain[11]);
	          this._dts = dv.getUint32(0, true);
	          remain.slice(0, this.needLen);
	          remain = remain.slice(this.needLen);
	          this.needLen = payloadlen;
	          this.state = FLV_PARSE_STATE.body;
	        } else {
	          if (this._tagtype === FLV_TAG_TYPE.video) {
	            var frametype = remain[0] >> 4 & 0x0F;
	            var codecid = remain[0] & 0x0F;
	            if (codecid === CODEC_ID.h264 || codecid === CODEC_ID.h265) {
	              var avcpackettype = remain[1];
	              console.log('frameType packetType', frametype, avcpackettype);
	              dv.setUint8(0, remain[4]);
	              dv.setUint8(1, remain[3]);
	              dv.setUint8(2, remain[2]);
	              dv.setUint8(3, 0);
	              var compositiontime = dv.getUint32(0, true);
	              this._pts = this._dts + compositiontime;
	              if (frametype === VIDEO_FRAME_TYPE.keyFrame) {
	                if (avcpackettype === VIDEO_PACKET_TYPE.sequenceHeader) {
	                  console.log("keyFrame sequenceHeader");

	                  //avcseq
	                  // let info = readAVCSpecificConfig(remain.slice(0, this.needLen));

	                  // this._videoinfo.vtype = codecid === CodecID.AVC ? VideoType.H264 : VideoType.H265;
	                  // this._videoinfo.width = info.width;
	                  // this._videoinfo.height = info.height
	                  // this._videoinfo.extradata = remain.slice(5, this.needLen);
	                  var extraData = remain.slice(5, this.needLen);
	                  this.emit('videoExtraData', {
	                    codecId: codecid,
	                    extraData: extraData
	                  });
	                } else if (avcpackettype === VIDEO_PACKET_TYPE.nalu) {
	                  console.warn("keyFrame nalu, dts: ".concat(this._dts));

	                  //I Frame
	                  var vframe = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: vframe,
	                    timestamp: this._dts,
	                    isKeyFrame: true
	                  });
	                } else ;
	              } else if (frametype === VIDEO_FRAME_TYPE.interFrame) {
	                if (avcpackettype === VIDEO_PACKET_TYPE.nalu) {
	                  console.log("interFrame nalu, dts: ".concat(this._dts));
	                  //P Frame
	                  var _vframe = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: _vframe,
	                    timestamp: this._dts,
	                    isKeyFrame: false
	                  });
	                }
	              } else ;
	            }
	          } else if (this._tagtype === FLV_TAG_TYPE.audio) {
	            var soundformat = remain[0] >> 4 & 0x0F;
	            remain[0] >> 2 & 0x02;
	            remain[0] >> 1 & 0x01;
	            remain[0] & 0x0F;
	            if (soundformat === SOUND_ID.aac) {
	              var aacpackettype = remain[1];
	              if (aacpackettype === AAC_PACKET_TYPE.sequenceHeader) {
	                // let aacinfo = readAACSpecificConfig(remain.slice(0, this.needLen));

	                // this._audioinfo.atype = AudioType.AAC;
	                // this._audioinfo.profile = aacinfo.object_type;
	                // this._audioinfo.sample = aacinfo.sample_rate;
	                // this._audioinfo.channels = aacinfo.chan_config;
	                // this._audioinfo.depth = soundsize ? 16 : 8;
	                // this._audioinfo.extradata = remain.slice(2, this.needLen);
	                var aacSequenceHeader = remain.slice(2, this.needLen);
	                this.emit('audioExtraData', {
	                  codecId: soundformat,
	                  type: 'aac',
	                  extraData: aacSequenceHeader
	                });
	              } else {
	                var aacraw = remain.slice(2, this.needLen);

	                // let packet = new AVPacket();
	                // packet.payload = aacraw;
	                // packet.iskeyframe = false;
	                // packet.timestamp = this._dts;
	                // packet.avtype = AVType.Audio;

	                this.emit('audioData', {
	                  type: 'aac',
	                  timestamp: this._dts,
	                  data: aacraw
	                });
	              }
	            } else {
	              var audioraw = remain.slice(1, this.needLen);
	              this.emit('audioExtraData', {
	                type: type,
	                extraData: new Uint8Array(0)
	              });
	              var type = soundformat === SOUND_ID.g711a ? 'g711a' : 'g711u';
	              this.emit('audioData', {
	                type: type,
	                timestamp: this._dts,
	                data: audioraw
	              });
	            }
	          } else if (this._tagtype === FLV_TAG_TYPE.script) ; else ;
	          remain = remain.slice(this.needLen);
	          this.needLen = 15;
	          this.state = FLV_PARSE_STATE.header;
	        }
	      }
	      this.tempBuffer = remain;
	    }
	  }]);
	  return FlvDemuxer;
	}(Emitter);

	/*
	 * Copyright (C) 2016 Bilibili. All Rights Reserved.
	 *
	 * @author zheng qian <xqq@xqq.im>
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	// Exponential-Golomb buffer decoder
	var ExpGolomb = /*#__PURE__*/function () {
	  function ExpGolomb(uint8array) {
	    _classCallCheck(this, ExpGolomb);
	    this.TAG = 'ExpGolomb';
	    this._buffer = uint8array;
	    this._buffer_index = 0;
	    this._total_bytes = uint8array.byteLength;
	    this._total_bits = uint8array.byteLength * 8;
	    this._current_word = 0;
	    this._current_word_bits_left = 0;
	  }
	  _createClass(ExpGolomb, [{
	    key: "destroy",
	    value: function destroy() {
	      this._buffer = null;
	    }
	  }, {
	    key: "_fillCurrentWord",
	    value: function _fillCurrentWord() {
	      var buffer_bytes_left = this._total_bytes - this._buffer_index;
	      var bytes_read = Math.min(4, buffer_bytes_left);
	      var word = new Uint8Array(4);
	      word.set(this._buffer.subarray(this._buffer_index, this._buffer_index + bytes_read));
	      this._current_word = new DataView(word.buffer).getUint32(0, false);
	      this._buffer_index += bytes_read;
	      this._current_word_bits_left = bytes_read * 8;
	    }
	  }, {
	    key: "readBits",
	    value: function readBits(bits) {
	      if (bits <= this._current_word_bits_left) {
	        var _result = this._current_word >>> 32 - bits;
	        this._current_word <<= bits;
	        this._current_word_bits_left -= bits;
	        return _result;
	      }
	      var result = this._current_word_bits_left ? this._current_word : 0;
	      result = result >>> 32 - this._current_word_bits_left;
	      var bits_need_left = bits - this._current_word_bits_left;
	      this._fillCurrentWord();
	      var bits_read_next = Math.min(bits_need_left, this._current_word_bits_left);
	      var result2 = this._current_word >>> 32 - bits_read_next;
	      this._current_word <<= bits_read_next;
	      this._current_word_bits_left -= bits_read_next;
	      result = result << bits_read_next | result2;
	      return result;
	    }
	  }, {
	    key: "readBool",
	    value: function readBool() {
	      return this.readBits(1) === 1;
	    }
	  }, {
	    key: "readByte",
	    value: function readByte() {
	      return this.readBits(8);
	    }
	  }, {
	    key: "_skipLeadingZero",
	    value: function _skipLeadingZero() {
	      var zero_count;
	      for (zero_count = 0; zero_count < this._current_word_bits_left; zero_count++) {
	        if (0 !== (this._current_word & 0x80000000 >>> zero_count)) {
	          this._current_word <<= zero_count;
	          this._current_word_bits_left -= zero_count;
	          return zero_count;
	        }
	      }
	      this._fillCurrentWord();
	      return zero_count + this._skipLeadingZero();
	    }
	  }, {
	    key: "readUEG",
	    value: function readUEG() {
	      // unsigned exponential golomb
	      var leading_zeros = this._skipLeadingZero();
	      return this.readBits(leading_zeros + 1) - 1;
	    }
	  }, {
	    key: "readSEG",
	    value: function readSEG() {
	      // signed exponential golomb
	      var value = this.readUEG();
	      if (value & 0x01) {
	        return value + 1 >>> 1;
	      } else {
	        return -1 * (value >>> 1);
	      }
	    }
	  }]);
	  return ExpGolomb;
	}();

	var SPSParser = /*#__PURE__*/function () {
	  function SPSParser() {
	    _classCallCheck(this, SPSParser);
	  }
	  _createClass(SPSParser, null, [{
	    key: "_ebsp2rbsp",
	    value: function _ebsp2rbsp(uint8array) {
	      var src = uint8array;
	      var src_length = src.byteLength;
	      var dst = new Uint8Array(src_length);
	      var dst_idx = 0;
	      for (var i = 0; i < src_length; i++) {
	        if (i >= 2) {
	          // Unescape: Skip 0x03 after 00 00
	          if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
	            continue;
	          }
	        }
	        dst[dst_idx] = src[i];
	        dst_idx++;
	      }
	      return new Uint8Array(dst.buffer, 0, dst_idx);
	    }

	    // 解析 SPS
	    // https://zhuanlan.zhihu.com/p/27896239
	  }, {
	    key: "parseSPS",
	    value: function parseSPS(uint8array) {
	      var rbsp = SPSParser._ebsp2rbsp(uint8array);
	      var gb = new ExpGolomb(rbsp);
	      gb.readByte();
	      // 标识当前H.264码流的profile。
	      // 我们知道，H.264中定义了三种常用的档次profile： 基准档次：baseline profile;主要档次：main profile; 扩展档次：extended profile;

	      var profile_idc = gb.readByte(); // profile_idc
	      gb.readByte(); // constraint_set_flags[5] + reserved_zero[3]
	      // 标识当前码流的Level。编码的Level定义了某种条件下的最大视频分辨率、最大视频帧率等参数，码流所遵从的level由level_idc指定。
	      var level_idc = gb.readByte(); // level_idc
	      // 表示当前的序列参数集的id。通过该id值，图像参数集pps可以引用其代表的sps中的参数。
	      gb.readUEG(); // seq_parameter_set_id

	      var profile_string = SPSParser.getProfileString(profile_idc);
	      var level_string = SPSParser.getLevelString(level_idc);
	      var chroma_format_idc = 1;
	      var chroma_format = 420;
	      var chroma_format_table = [0, 420, 422, 444];
	      var bit_depth = 8;

	      //
	      if (profile_idc === 100 || profile_idc === 110 || profile_idc === 122 || profile_idc === 244 || profile_idc === 44 || profile_idc === 83 || profile_idc === 86 || profile_idc === 118 || profile_idc === 128 || profile_idc === 138 || profile_idc === 144) {
	        //
	        chroma_format_idc = gb.readUEG();
	        if (chroma_format_idc === 3) {
	          gb.readBits(1); // separate_colour_plane_flag
	        }

	        if (chroma_format_idc <= 3) {
	          chroma_format = chroma_format_table[chroma_format_idc];
	        }
	        bit_depth = gb.readUEG() + 8; // bit_depth_luma_minus8
	        gb.readUEG(); // bit_depth_chroma_minus8
	        gb.readBits(1); // qpprime_y_zero_transform_bypass_flag
	        if (gb.readBool()) {
	          // seq_scaling_matrix_present_flag
	          var scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
	          for (var i = 0; i < scaling_list_count; i++) {
	            if (gb.readBool()) {
	              // seq_scaling_list_present_flag
	              if (i < 6) {
	                SPSParser._skipScalingList(gb, 16);
	              } else {
	                SPSParser._skipScalingList(gb, 64);
	              }
	            }
	          }
	        }
	      }
	      // 用于计算MaxFrameNum的值。计算公式为MaxFrameNum = 2^(log2_max_frame_num_minus4 +
	      gb.readUEG(); // log2_max_frame_num_minus4
	      // 表示解码picture order count(POC)的方法。POC是另一种计量图像序号的方式，与frame_num有着不同的计算方法。该语法元素的取值为0、1或2。
	      var pic_order_cnt_type = gb.readUEG();
	      if (pic_order_cnt_type === 0) {
	        gb.readUEG(); // log2_max_pic_order_cnt_lsb_minus_4
	      } else if (pic_order_cnt_type === 1) {
	        gb.readBits(1); // delta_pic_order_always_zero_flag
	        gb.readSEG(); // offset_for_non_ref_pic
	        gb.readSEG(); // offset_for_top_to_bottom_field
	        var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
	        for (var _i = 0; _i < num_ref_frames_in_pic_order_cnt_cycle; _i++) {
	          gb.readSEG(); // offset_for_ref_frame
	        }
	      }
	      // 用于表示参考帧的最大数目。
	      var ref_frames = gb.readUEG(); // max_num_ref_frames
	      // 标识位，说明frame_num中是否允许不连续的值。
	      gb.readBits(1); // gaps_in_frame_num_value_allowed_flag
	      // 用于计算图像的宽度。单位为宏块个数，因此图像的实际宽度为:
	      var pic_width_in_mbs_minus1 = gb.readUEG();
	      // 使用PicHeightInMapUnits来度量视频中一帧图像的高度。
	      // PicHeightInMapUnits并非图像明确的以像素或宏块为单位的高度，而需要考虑该宏块是帧编码或场编码。PicHeightInMapUnits的计算方式为：
	      var pic_height_in_map_units_minus1 = gb.readUEG();
	      // 标识位，说明宏块的编码方式。当该标识位为0时，宏块可能为帧编码或场编码；
	      // 该标识位为1时，所有宏块都采用帧编码。根据该标识位取值不同，PicHeightInMapUnits的含义也不同，
	      // 为0时表示一场数据按宏块计算的高度，为1时表示一帧数据按宏块计算的高度。
	      var frame_mbs_only_flag = gb.readBits(1);
	      if (frame_mbs_only_flag === 0) {
	        // 标识位，说明是否采用了宏块级的帧场自适应编码。当该标识位为0时，不存在帧编码和场编码之间的切换；当标识位为1时，宏块可能在帧编码和场编码模式之间进行选择。
	        gb.readBits(1); // mb_adaptive_frame_field_flag
	      }
	      // 标识位，用于B_Skip、B_Direct模式运动矢量的推导计算。
	      gb.readBits(1); // direct_8x8_inference_flag

	      var frame_crop_left_offset = 0;
	      var frame_crop_right_offset = 0;
	      var frame_crop_top_offset = 0;
	      var frame_crop_bottom_offset = 0;
	      var frame_cropping_flag = gb.readBool();
	      if (frame_cropping_flag) {
	        frame_crop_left_offset = gb.readUEG();
	        frame_crop_right_offset = gb.readUEG();
	        frame_crop_top_offset = gb.readUEG();
	        frame_crop_bottom_offset = gb.readUEG();
	      }
	      var sar_width = 1,
	        sar_height = 1;
	      var fps = 0,
	        fps_fixed = true,
	        fps_num = 0,
	        fps_den = 0;
	      // 标识位，说明SPS中是否存在VUI信息。
	      var vui_parameters_present_flag = gb.readBool();
	      if (vui_parameters_present_flag) {
	        if (gb.readBool()) {
	          // aspect_ratio_info_present_flag
	          var aspect_ratio_idc = gb.readByte();
	          var sar_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
	          var sar_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
	          if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
	            sar_width = sar_w_table[aspect_ratio_idc - 1];
	            sar_height = sar_h_table[aspect_ratio_idc - 1];
	          } else if (aspect_ratio_idc === 255) {
	            sar_width = gb.readByte() << 8 | gb.readByte();
	            sar_height = gb.readByte() << 8 | gb.readByte();
	          }
	        }
	        if (gb.readBool()) {
	          // overscan_info_present_flag
	          gb.readBool(); // overscan_appropriate_flag
	        }

	        if (gb.readBool()) {
	          // video_signal_type_present_flag
	          gb.readBits(4); // video_format & video_full_range_flag
	          if (gb.readBool()) {
	            // colour_description_present_flag
	            gb.readBits(24); // colour_primaries & transfer_characteristics & matrix_coefficients
	          }
	        }

	        if (gb.readBool()) {
	          // chroma_loc_info_present_flag
	          gb.readUEG(); // chroma_sample_loc_type_top_field
	          gb.readUEG(); // chroma_sample_loc_type_bottom_field
	        }

	        if (gb.readBool()) {
	          // timing_info_present_flag
	          var num_units_in_tick = gb.readBits(32);
	          var time_scale = gb.readBits(32);
	          fps_fixed = gb.readBool(); // fixed_frame_rate_flag

	          fps_num = time_scale;
	          fps_den = num_units_in_tick * 2;
	          fps = fps_num / fps_den;
	        }
	      }
	      var sarScale = 1;
	      if (sar_width !== 1 || sar_height !== 1) {
	        sarScale = sar_width / sar_height;
	      }
	      var crop_unit_x = 0,
	        crop_unit_y = 0;
	      if (chroma_format_idc === 0) {
	        crop_unit_x = 1;
	        crop_unit_y = 2 - frame_mbs_only_flag;
	      } else {
	        var sub_wc = chroma_format_idc === 3 ? 1 : 2;
	        var sub_hc = chroma_format_idc === 1 ? 2 : 1;
	        crop_unit_x = sub_wc;
	        crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
	      }
	      var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
	      var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
	      codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
	      codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
	      var present_width = Math.ceil(codec_width * sarScale);
	      gb.destroy();
	      gb = null;

	      // 解析出来的SPS 内容。
	      return {
	        profile_string: profile_string,
	        // baseline, high, high10, ...
	        level_string: level_string,
	        // 3, 3.1, 4, 4.1, 5, 5.1, ...
	        bit_depth: bit_depth,
	        // 8bit, 10bit, ...
	        ref_frames: ref_frames,
	        chroma_format: chroma_format,
	        // 4:2:0, 4:2:2, ...
	        chroma_format_string: SPSParser.getChromaFormatString(chroma_format),
	        frame_rate: {
	          fixed: fps_fixed,
	          fps: fps,
	          fps_den: fps_den,
	          fps_num: fps_num
	        },
	        sar_ratio: {
	          width: sar_width,
	          height: sar_height
	        },
	        codec_size: {
	          width: codec_width,
	          height: codec_height
	        },
	        present_size: {
	          width: present_width,
	          height: codec_height
	        }
	      };
	    }
	  }, {
	    key: "_skipScalingList",
	    value: function _skipScalingList(gb, count) {
	      var last_scale = 8,
	        next_scale = 8;
	      var delta_scale = 0;
	      for (var i = 0; i < count; i++) {
	        if (next_scale !== 0) {
	          delta_scale = gb.readSEG();
	          next_scale = (last_scale + delta_scale + 256) % 256;
	        }
	        last_scale = next_scale === 0 ? last_scale : next_scale;
	      }
	    }

	    // profile_idc = 66 → baseline profile;
	    // profile_idc = 77 → main profile;
	    // profile_idc = 88 → extended profile;
	    // 在新版的标准中，还包括了High、High 10、High 4:2:2、High 4:4:4、High 10 Intra、High
	    // 4:2:2 Intra、High 4:4:4 Intra、CAVLC 4:4:4 Intra
	  }, {
	    key: "getProfileString",
	    value: function getProfileString(profile_idc) {
	      switch (profile_idc) {
	        case 66:
	          return 'Baseline';
	        case 77:
	          return 'Main';
	        case 88:
	          return 'Extended';
	        case 100:
	          return 'High';
	        case 110:
	          return 'High10';
	        case 122:
	          return 'High422';
	        case 244:
	          return 'High444';
	        default:
	          return 'Unknown';
	      }
	    }
	  }, {
	    key: "getLevelString",
	    value: function getLevelString(level_idc) {
	      return (level_idc / 10).toFixed(1);
	    }
	  }, {
	    key: "getChromaFormatString",
	    value: function getChromaFormatString(chroma) {
	      switch (chroma) {
	        case 420:
	          return '4:2:0';
	        case 422:
	          return '4:2:2';
	        case 444:
	          return '4:4:4';
	        default:
	          return 'Unknown';
	      }
	    }
	  }]);
	  return SPSParser;
	}();

	var MP4 = /*#__PURE__*/function () {
	  function MP4() {
	    _classCallCheck(this, MP4);
	  }
	  _createClass(MP4, null, [{
	    key: "init",
	    value: function init() {
	      MP4.types = {
	        avc1: [],
	        avcC: [],
	        hvc1: [],
	        hvcC: [],
	        btrt: [],
	        dinf: [],
	        dref: [],
	        esds: [],
	        ftyp: [],
	        hdlr: [],
	        mdat: [],
	        mdhd: [],
	        mdia: [],
	        mfhd: [],
	        minf: [],
	        moof: [],
	        moov: [],
	        mp4a: [],
	        mvex: [],
	        mvhd: [],
	        sdtp: [],
	        stbl: [],
	        stco: [],
	        stsc: [],
	        stsd: [],
	        stsz: [],
	        stts: [],
	        tfdt: [],
	        tfhd: [],
	        traf: [],
	        trak: [],
	        trun: [],
	        trex: [],
	        tkhd: [],
	        vmhd: [],
	        smhd: []
	      };
	      for (var name in MP4.types) {
	        if (MP4.types.hasOwnProperty(name)) {
	          MP4.types[name] = [name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)];
	        }
	      }
	      var constants = MP4.constants = {};
	      constants.FTYP = new Uint8Array([0x69, 0x73, 0x6F, 0x6D,
	      // major_brand: isom
	      0x0, 0x0, 0x0, 0x1,
	      // minor_version: 0x01
	      0x69, 0x73, 0x6F, 0x6D,
	      // isom
	      0x61, 0x76, 0x63, 0x31 // avc1
	      ]);

	      constants.STSD_PREFIX = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x01 // entry_count
	      ]);

	      constants.STTS = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00 // entry_count
	      ]);

	      constants.STSC = constants.STCO = constants.STTS;
	      constants.STSZ = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // sample_size
	      0x00, 0x00, 0x00, 0x00 // sample_count
	      ]);

	      constants.HDLR_VIDEO = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // pre_defined
	      0x76, 0x69, 0x64, 0x65,
	      // handler_type: 'vide'
	      0x00, 0x00, 0x00, 0x00,
	      // reserved: 3 * 4 bytes
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x56, 0x69, 0x64, 0x65, 0x6F, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x72, 0x00 // name: VideoHandler
	      ]);

	      constants.HDLR_AUDIO = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // pre_defined
	      0x73, 0x6F, 0x75, 0x6E,
	      // handler_type: 'soun'
	      0x00, 0x00, 0x00, 0x00,
	      // reserved: 3 * 4 bytes
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x53, 0x6F, 0x75, 0x6E, 0x64, 0x48, 0x61, 0x6E, 0x64, 0x6C, 0x65, 0x72, 0x00 // name: SoundHandler
	      ]);

	      constants.DREF = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x01,
	      // entry_count
	      0x00, 0x00, 0x00, 0x0C,
	      // entry_size
	      0x75, 0x72, 0x6C, 0x20,
	      // type 'url '
	      0x00, 0x00, 0x00, 0x01 // version(0) + flags
	      ]);

	      // Sound media header
	      constants.SMHD = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00 // balance(2) + reserved(2)
	      ]);

	      // video media header
	      constants.VMHD = new Uint8Array([0x00, 0x00, 0x00, 0x01,
	      // version(0) + flags
	      0x00, 0x00,
	      // graphicsmode: 2 bytes
	      0x00, 0x00, 0x00, 0x00,
	      // opcolor: 3 * 2 bytes
	      0x00, 0x00]);
	    }

	    // Generate a box
	  }, {
	    key: "box",
	    value: function box(type) {
	      var size = 8;
	      var result = null;
	      var datas = Array.prototype.slice.call(arguments, 1);
	      var arrayCount = datas.length;
	      for (var i = 0; i < arrayCount; i++) {
	        size += datas[i].byteLength;
	      }
	      result = new Uint8Array(size);
	      result[0] = size >>> 24 & 0xFF; // size
	      result[1] = size >>> 16 & 0xFF;
	      result[2] = size >>> 8 & 0xFF;
	      result[3] = size & 0xFF;
	      result.set(type, 4); // type

	      var offset = 8;
	      for (var _i = 0; _i < arrayCount; _i++) {
	        // data body
	        result.set(datas[_i], offset);
	        offset += datas[_i].byteLength;
	      }
	      return result;
	    }

	    // emit ftyp & moov
	  }, {
	    key: "generateInitSegment",
	    value: function generateInitSegment(meta) {
	      var ftyp = MP4.box(MP4.types.ftyp, MP4.constants.FTYP);
	      var moov = MP4.moov(meta);
	      var result = new Uint8Array(ftyp.byteLength + moov.byteLength);
	      result.set(ftyp, 0);
	      result.set(moov, ftyp.byteLength);
	      return result;
	    }

	    // Movie metadata box
	  }, {
	    key: "moov",
	    value: function moov(meta) {
	      var mvhd = MP4.mvhd(meta.timescale, meta.duration);
	      var trak = MP4.trak(meta);
	      var mvex = MP4.mvex(meta);
	      return MP4.box(MP4.types.moov, mvhd, trak, mvex);
	    }

	    // Movie header box
	  }, {
	    key: "mvhd",
	    value: function mvhd(timescale, duration) {
	      return MP4.box(MP4.types.mvhd, new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // creation_time
	      0x00, 0x00, 0x00, 0x00,
	      // modification_time
	      timescale >>> 24 & 0xFF,
	      // timescale: 4 bytes
	      timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF,
	      // duration: 4 bytes
	      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00,
	      // Preferred rate: 1.0
	      0x01, 0x00, 0x00, 0x00,
	      // PreferredVolume(1.0, 2bytes) + reserved(2bytes)
	      0x00, 0x00, 0x00, 0x00,
	      // reserved: 4 + 4 bytes
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
	      // ----begin composition matrix----
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
	      // ----end composition matrix----
	      0x00, 0x00, 0x00, 0x00,
	      // ----begin pre_defined 6 * 4 bytes----
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	      // ----end pre_defined 6 * 4 bytes----
	      0xFF, 0xFF, 0xFF, 0xFF // next_track_ID
	      ]));
	    }

	    // Track box
	  }, {
	    key: "trak",
	    value: function trak(meta) {
	      return MP4.box(MP4.types.trak, MP4.tkhd(meta), MP4.mdia(meta));
	    }

	    // Track header box
	  }, {
	    key: "tkhd",
	    value: function tkhd(meta) {
	      var trackId = meta.id,
	        duration = meta.duration;
	      var width = meta.presentWidth,
	        height = meta.presentHeight;
	      return MP4.box(MP4.types.tkhd, new Uint8Array([0x00, 0x00, 0x00, 0x07,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // creation_time
	      0x00, 0x00, 0x00, 0x00,
	      // modification_time
	      trackId >>> 24 & 0xFF,
	      // track_ID: 4 bytes
	      trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF, 0x00, 0x00, 0x00, 0x00,
	      // reserved: 4 bytes
	      duration >>> 24 & 0xFF,
	      // duration: 4 bytes
	      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00,
	      // reserved: 2 * 4 bytes
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	      // layer(2bytes) + alternate_group(2bytes)
	      0x00, 0x00, 0x00, 0x00,
	      // volume(2bytes) + reserved(2bytes)
	      0x00, 0x01, 0x00, 0x00,
	      // ----begin composition matrix----
	      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00,
	      // ----end composition matrix----
	      width >>> 8 & 0xFF,
	      // width and height
	      width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, height & 0xFF, 0x00, 0x00]));
	    }
	  }, {
	    key: "mdia",
	    value: function mdia(meta) {
	      return MP4.box(MP4.types.mdia, MP4.mdhd(meta), MP4.hdlr(meta), MP4.minf(meta));
	    }

	    // Media header box
	  }, {
	    key: "mdhd",
	    value: function mdhd(meta) {
	      var timescale = meta.timescale;
	      var duration = meta.duration;
	      return MP4.box(MP4.types.mdhd, new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      0x00, 0x00, 0x00, 0x00,
	      // creation_time
	      0x00, 0x00, 0x00, 0x00,
	      // modification_time
	      timescale >>> 24 & 0xFF,
	      // timescale: 4 bytes
	      timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF,
	      // duration: 4 bytes
	      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4,
	      // language: und (undetermined)
	      0x00, 0x00 // pre_defined = 0
	      ]));
	    }

	    // Media handler reference box
	  }, {
	    key: "hdlr",
	    value: function hdlr(meta) {
	      var data = null;
	      if (meta.type === 'audio') {
	        data = MP4.constants.HDLR_AUDIO;
	      } else {
	        data = MP4.constants.HDLR_VIDEO;
	      }
	      return MP4.box(MP4.types.hdlr, data);
	    }

	    // Media infomation box
	  }, {
	    key: "minf",
	    value: function minf(meta) {
	      var xmhd = null;
	      if (meta.type === 'audio') {
	        xmhd = MP4.box(MP4.types.smhd, MP4.constants.SMHD);
	      } else {
	        xmhd = MP4.box(MP4.types.vmhd, MP4.constants.VMHD);
	      }
	      return MP4.box(MP4.types.minf, xmhd, MP4.dinf(), MP4.stbl(meta));
	    }

	    // Data infomation box
	  }, {
	    key: "dinf",
	    value: function dinf() {
	      var result = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, MP4.constants.DREF));
	      return result;
	    }

	    // Sample table box
	  }, {
	    key: "stbl",
	    value: function stbl(meta) {
	      var result = MP4.box(MP4.types.stbl,
	      // type: stbl
	      MP4.stsd(meta),
	      // Sample Description Table
	      MP4.box(MP4.types.stts, MP4.constants.STTS),
	      // Time-To-Sample
	      MP4.box(MP4.types.stsc, MP4.constants.STSC),
	      // Sample-To-Chunk
	      MP4.box(MP4.types.stsz, MP4.constants.STSZ),
	      // Sample size
	      MP4.box(MP4.types.stco, MP4.constants.STCO) // Chunk offset
	      );

	      return result;
	    }

	    // Sample description box
	  }, {
	    key: "stsd",
	    value: function stsd(meta) {
	      if (meta.type === 'audio') {
	        // else: aac -> mp4a
	        return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.mp4a(meta));
	      } else {
	        if (meta.videoType === 'avc') {
	          //
	          return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.avc1(meta));
	        } else {
	          //
	          return MP4.box(MP4.types.stsd, MP4.constants.STSD_PREFIX, MP4.hvc1(meta));
	        }
	      }
	    }
	  }, {
	    key: "mp4a",
	    value: function mp4a(meta) {
	      var channelCount = meta.channelCount;
	      var sampleRate = meta.audioSampleRate;
	      var data = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // reserved(4)
	      0x00, 0x00, 0x00, 0x01,
	      // reserved(2) + data_reference_index(2)
	      0x00, 0x00, 0x00, 0x00,
	      // reserved: 2 * 4 bytes
	      0x00, 0x00, 0x00, 0x00, 0x00, channelCount,
	      // channelCount(2)
	      0x00, 0x10,
	      // sampleSize(2)
	      0x00, 0x00, 0x00, 0x00,
	      // reserved(4)
	      sampleRate >>> 8 & 0xFF,
	      // Audio sample rate
	      sampleRate & 0xFF, 0x00, 0x00]);
	      return MP4.box(MP4.types.mp4a, data, MP4.esds(meta));
	    }
	  }, {
	    key: "esds",
	    value: function esds(meta) {
	      var config = meta.config || [];
	      var configSize = config.length;
	      var data = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version 0 + flags

	      0x03,
	      // descriptor_type
	      0x17 + configSize,
	      // length3
	      0x00, 0x01,
	      // es_id
	      0x00,
	      // stream_priority

	      0x04,
	      // descriptor_type
	      0x0F + configSize,
	      // length
	      0x40,
	      // codec: mpeg4_audio
	      0x15,
	      // stream_type: Audio
	      0x00, 0x00, 0x00,
	      // buffer_size
	      0x00, 0x00, 0x00, 0x00,
	      // maxBitrate
	      0x00, 0x00, 0x00, 0x00,
	      // avgBitrate

	      0x05 // descriptor_type
	      ].concat([configSize]).concat(config).concat([0x06, 0x01, 0x02 // GASpecificConfig
	      ]));

	      return MP4.box(MP4.types.esds, data);
	    }

	    // avc
	  }, {
	    key: "avc1",
	    value: function avc1(meta) {
	      var avcc = meta.avcc;
	      var width = meta.codecWidth;
	      var height = meta.codecHeight;
	      var data = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, width >>> 8 & 255, width & 255, height >>> 8 & 255, height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
	      return MP4.box(MP4.types.avc1, data, MP4.box(MP4.types.avcC, avcc));
	    }

	    // hvc
	  }, {
	    key: "hvc1",
	    value: function hvc1(meta) {
	      var avcc = meta.avcc;
	      var width = meta.codecWidth;
	      var height = meta.codecHeight;
	      var data = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, width >>> 8 & 255, width & 255, height >>> 8 & 255, height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
	      return MP4.box(MP4.types.hvc1, data, MP4.box(MP4.types.hvcC, avcc));
	    }

	    // Movie Extends box
	  }, {
	    key: "mvex",
	    value: function mvex(meta) {
	      return MP4.box(MP4.types.mvex, MP4.trex(meta));
	    }

	    // Track Extends box
	  }, {
	    key: "trex",
	    value: function trex(meta) {
	      var trackId = meta.id;
	      var data = new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) + flags
	      trackId >>> 24 & 0xFF,
	      // track_ID
	      trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF, 0x00, 0x00, 0x00, 0x01,
	      // default_sample_description_index
	      0x00, 0x00, 0x00, 0x00,
	      // default_sample_duration
	      0x00, 0x00, 0x00, 0x00,
	      // default_sample_size
	      0x00, 0x01, 0x00, 0x01 // default_sample_flags
	      ]);

	      return MP4.box(MP4.types.trex, data);
	    }

	    // Movie fragment box
	  }, {
	    key: "moof",
	    value: function moof(track, baseMediaDecodeTime) {
	      return MP4.box(MP4.types.moof, MP4.mfhd(track.sequenceNumber), MP4.traf(track, baseMediaDecodeTime));
	    }
	    //
	  }, {
	    key: "mfhd",
	    value: function mfhd(sequenceNumber) {
	      var data = new Uint8Array([0x00, 0x00, 0x00, 0x00, sequenceNumber >>> 24 & 0xFF,
	      // sequence_number: int32
	      sequenceNumber >>> 16 & 0xFF, sequenceNumber >>> 8 & 0xFF, sequenceNumber & 0xFF]);
	      return MP4.box(MP4.types.mfhd, data);
	    }

	    // Track fragment box
	  }, {
	    key: "traf",
	    value: function traf(track, baseMediaDecodeTime) {
	      var trackId = track.id;

	      // Track fragment header box
	      var tfhd = MP4.box(MP4.types.tfhd, new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) & flags
	      trackId >>> 24 & 0xFF,
	      // track_ID
	      trackId >>> 16 & 0xFF, trackId >>> 8 & 0xFF, trackId & 0xFF]));
	      // Track Fragment Decode Time
	      var tfdt = MP4.box(MP4.types.tfdt, new Uint8Array([0x00, 0x00, 0x00, 0x00,
	      // version(0) & flags
	      baseMediaDecodeTime >>> 24 & 0xFF,
	      // baseMediaDecodeTime: int32
	      baseMediaDecodeTime >>> 16 & 0xFF, baseMediaDecodeTime >>> 8 & 0xFF, baseMediaDecodeTime & 0xFF]));
	      var sdtp = MP4.sdtp(track);
	      var trun = MP4.trun(track, sdtp.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
	      return MP4.box(MP4.types.traf, tfhd, tfdt, trun, sdtp);
	    }

	    // Sample Dependency Type box
	  }, {
	    key: "sdtp",
	    value: function sdtp(track) {
	      var data = new Uint8Array(4 + 1);
	      var flags = track.flags;
	      data[4] = flags.isLeading << 6 | flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
	      return MP4.box(MP4.types.sdtp, data);
	    }
	    // trun
	  }, {
	    key: "trun",
	    value: function trun(track, offset) {
	      var dataSize = 12 + 16;
	      var data = new Uint8Array(dataSize);
	      offset += 8 + dataSize;
	      data.set([0x00, 0x00, 0x0F, 0x01,
	      // version(0) & flags
	      0x00, 0x00, 0x00, 0x01,
	      // sample_count
	      offset >>> 24 & 0xFF,
	      // data_offset
	      offset >>> 16 & 0xFF, offset >>> 8 & 0xFF, offset & 0xFF], 0);
	      var duration = track.duration;
	      var size = track.size;
	      var flags = track.flags;
	      var cts = track.cts;
	      data.set([duration >>> 24 & 0xFF,
	      // sample_duration
	      duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, size >>> 24 & 0xFF,
	      // sample_size
	      size >>> 16 & 0xFF, size >>> 8 & 0xFF, size & 0xFF, flags.isLeading << 2 | flags.dependsOn,
	      // sample_flags
	      flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00,
	      // sample_degradation_priority
	      cts >>> 24 & 0xFF,
	      // sample_composition_time_offset
	      cts >>> 16 & 0xFF, cts >>> 8 & 0xFF, cts & 0xFF], 12);
	      return MP4.box(MP4.types.trun, data);
	    }
	    // mdat
	  }, {
	    key: "mdat",
	    value: function mdat(data) {
	      return MP4.box(MP4.types.mdat, data);
	    }
	  }]);
	  return MP4;
	}();
	MP4.init();

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	function parseAVCDecoderConfigurationRecord(arrayBuffer) {
	  var meta = {};
	  var v = new DataView(arrayBuffer.buffer);
	  var version = v.getUint8(0); // configurationVersion
	  var avcProfile = v.getUint8(1); // avcProfileIndication
	  v.getUint8(2); // profile_compatibil
	  v.getUint8(3); // AVCLevelIndication

	  if (version !== 1 || avcProfile === 0) {
	    // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord');

	    return {};
	  }
	  var _naluLengthSize = (v.getUint8(4) & 3) + 1; // lengthSizeMinusOne

	  if (_naluLengthSize !== 3 && _naluLengthSize !== 4) {
	    // holy shit!!!
	    // this._onError(DemuxErrors.FORMAT_ERROR, `Flv: Strange NaluLengthSizeMinusOne: ${_naluLengthSize - 1}`);
	    return {};
	  }
	  var spsCount = v.getUint8(5) & 31; // numOfSequenceParameterSets

	  if (spsCount === 0) {
	    // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No SPS');
	    return {};
	  }
	  var offset = 6;
	  for (var i = 0; i < spsCount; i++) {
	    var len = v.getUint16(offset, false); // sequenceParameterSetLength
	    offset += 2;
	    if (len === 0) {
	      continue;
	    }

	    // Notice: Nalu without startcode header (00 00 00 01)
	    var sps = new Uint8Array(arrayBuffer.buffer, offset, len);
	    offset += len;
	    // flv.js作者选择了自己来解析这个数据结构，也是迫不得已，因为JS环境下没有ffmpeg，解析这个结构主要是为了提取 sps和pps。虽然理论上sps允许有多个，但其实一般就一个。
	    // packetTtype 为 1 表示 NALU，NALU= network abstract layer unit，这是H.264的概念，网络抽象层数据单元，其实简单理解就是一帧视频数据。
	    // pps的信息没什么用，所以作者只实现了sps的分析器，说明作者下了很大功夫去学习264的标准，其中的Golomb解码还是挺复杂的，能解对不容易，我在PC和手机平台都是用ffmpeg去解析的。
	    // SPS里面包括了视频分辨率，帧率，profile level等视频重要信息。
	    var config = SPSParser.parseSPS(sps);
	    // console.log('h264 sps config',config)
	    if (i !== 0) {
	      // ignore other sps's config
	      continue;
	    }
	    meta.sps = sps;
	    meta.timescale = 1000;
	    meta.codecWidth = config.codec_size.width;
	    meta.codecHeight = config.codec_size.height;
	    meta.presentWidth = config.present_size.width;
	    meta.presentHeight = config.present_size.height;
	    meta.profile = config.profile_string;
	    meta.level = config.level_string;
	    meta.bitDepth = config.bit_depth;
	    meta.chromaFormat = config.chroma_format;
	    meta.sarRatio = config.sar_ratio;
	    meta.frameRate = config.frame_rate;
	    if (config.frame_rate.fixed === false || config.frame_rate.fps_num === 0 || config.frame_rate.fps_den === 0) {
	      meta.frameRate = {
	        fixed: true,
	        fps: 23.976,
	        fps_num: 23976,
	        fps_den: 1000
	      };
	    }
	    var fps_den = meta.frameRate.fps_den;
	    var fps_num = meta.frameRate.fps_num;
	    meta.refSampleDuration = meta.timescale * (fps_den / fps_num);
	    var codecArray = sps.subarray(1, 4);
	    var codecString = 'avc1.';
	    for (var j = 0; j < 3; j++) {
	      var h = codecArray[j].toString(16);
	      if (h.length < 2) {
	        h = '0' + h;
	      }
	      codecString += h;
	    }
	    // codec
	    meta.codec = codecString;
	  }
	  var ppsCount = v.getUint8(offset); // numOfPictureParameterSets
	  if (ppsCount === 0) {
	    // this._onError(DemuxErrors.FORMAT_ERROR, 'Flv: Invalid AVCDecoderConfigurationRecord: No PPS');
	    return {};
	  }
	  offset++;
	  for (var _i = 0; _i < ppsCount; _i++) {
	    var _len = v.getUint16(offset, false); // pictureParameterSetLength
	    offset += 2;
	    if (_len === 0) {
	      continue;
	    }
	    var pps = new Uint8Array(arrayBuffer.buffer, offset, _len);

	    // pps is useless for extracting video information
	    offset += _len;
	    meta.pps = pps;
	  }
	  meta.videoType = 'avc';
	  if (meta.sps) {
	    var spsLength = meta.sps.byteLength;
	    var spsFlag = new Uint8Array([spsLength >>> 24 & 0xFF, spsLength >>> 16 & 0xFF, spsLength >>> 8 & 0xFF, spsLength & 0xFF]);
	    var _sps = new Uint8Array(spsLength + 4);
	    _sps.set(spsFlag, 0);
	    _sps.set(meta.sps, 4);
	    meta.sps = _sps;
	  }
	  if (meta.pps) {
	    var ppsLength = meta.pps.byteLength;
	    var ppsFlag = new Uint8Array([ppsLength >>> 24 & 0xFF, ppsLength >>> 16 & 0xFF, ppsLength >>> 8 & 0xFF, ppsLength & 0xFF]);
	    var _pps = new Uint8Array(ppsLength + 4);
	    _pps.set(ppsFlag, 0);
	    _pps.set(meta.pps, 4);
	    meta.pps = _pps;
	  }

	  // meta.avcc = arrayBuffer;
	  return meta;
	}
	var MEDIA_SOURCE_STATE = {
	  ended: 'ended',
	  open: 'open',
	  closed: 'closed'
	};
	var MseDecoder = /*#__PURE__*/function (_Emitter) {
	  _inherits(MseDecoder, _Emitter);
	  var _super = _createSuper(MseDecoder);
	  function MseDecoder(options) {
	    var _this;
	    _classCallCheck(this, MseDecoder);
	    _this = _super.call(this);
	    _this.hasInit = false;
	    _this.isInitInfo = false;
	    _this.isDecodeFirstIIframe = false;
	    _this.codecId = null;
	    _this.mediaSourceOpen = false;
	    _this.sourceBuffer = null;
	    _this.hasInit = false;
	    _this.sequenceNumber = 0;
	    _this.cacheTrack = null;
	    _this.timeInit = false;
	    _this.mediaSource = new window.MediaSource();
	    _this.mediaSourceObjectURL = window.URL.createObjectURL(_this.mediaSource);
	    _this.$videoElement = options.$videoElement;
	    _this.$videoElement.src = _this.mediaSourceObjectURL;
	    return _this;
	  }
	  _createClass(MseDecoder, [{
	    key: "destroy",
	    value: function destroy() {
	      this.mediaSource = null;
	      this.mediaSourceOpen = false;
	      this.sourceBuffer = null;
	      this.hasInit = false;
	      this.isInitInfo = false;
	      this.sequenceNumber = 0;
	      this.cacheTrack = null;
	      this.timeInit = false;
	      this.isDecodeFirstIIframe = false;
	      this.off();
	    }
	  }, {
	    key: "setCodecVideo",
	    value: function setCodecVideo(codecId, extraData) {
	      var config = {};
	      config = parseAVCDecoderConfigurationRecord(extraData);
	      var metaData = {
	        id: 1,
	        // video tag data
	        type: 'video',
	        timescale: 1000,
	        duration: 0,
	        avcc: extraData,
	        codecWidth: config.codecWidth,
	        codecHeight: config.codecHeight,
	        videoType: config.videoType
	      };
	      var metaBox = MP4.generateInitSegment(metaData);
	      this._appendBuffer(metaBox.buffer);
	      this.sequenceNumber = 0;
	      this.cacheTrack = null;
	      this.timeInit = false;
	    }
	  }, {
	    key: "decodeVideo",
	    value: function decodeVideo(payload, isIframe, ts) {
	      if (!this.isDecodeFirstIIframe && isIframe) {
	        this.isDecodeFirstIIframe = true;
	      }
	      if (this.isDecodeFirstIIframe) {
	        if (this.firstRenderTime === null) {
	          this.firstRenderTime = ts;
	        }
	        ts - this.firstRenderTime;
	        this._decodeVideo(payload, ts, isIframe);
	      }
	    }
	  }, {
	    key: "_decodeVideo",
	    value: function _decodeVideo(arrayBuffer, dts, isIframe) {
	      var bytes = arrayBuffer.byteLength;
	      var $video = this.$videoElement;
	      if ($video.buffered.length > 1) {
	        this._removeBuffer($video.buffered.start(0), $video.buffered.end(0));
	        this.timeInit = false;
	      }
	      if (this.dropping && dts - this.cacheTrack.dts > 2) {
	        this.dropping = false;
	        this.cacheTrack = {};
	      } else if (this.cacheTrack && dts >= this.cacheTrack.dts) {
	        // 需要额外加8个size
	        var mdatBytes = 8 + this.cacheTrack.size;
	        var mdatbox = new Uint8Array(mdatBytes);
	        mdatbox[0] = mdatBytes >>> 24 & 255;
	        mdatbox[1] = mdatBytes >>> 16 & 255;
	        mdatbox[2] = mdatBytes >>> 8 & 255;
	        mdatbox[3] = mdatBytes & 255;
	        mdatbox.set(MP4.types.mdat, 4);
	        mdatbox.set(this.cacheTrack.data, 8);
	        this.cacheTrack.duration = dts - this.cacheTrack.dts;
	        // moof
	        var moofbox = MP4.moof(this.cacheTrack, this.cacheTrack.dts);
	        var result = new Uint8Array(moofbox.byteLength + mdatbox.byteLength);
	        result.set(moofbox, 0);
	        result.set(mdatbox, moofbox.byteLength);
	        // appendBuffer
	        this._appendBuffer(result.buffer);
	      } else {
	        this.timeInit = false;
	        this.cacheTrack = {};
	      }
	      if (!this.cacheTrack) {
	        this.cacheTrack = {};
	      }
	      this.cacheTrack.id = 1;
	      this.cacheTrack.sequenceNumber = ++this.sequenceNumber;
	      this.cacheTrack.size = bytes;
	      this.cacheTrack.dts = dts;
	      this.cacheTrack.cts = 0;
	      this.cacheTrack.isKeyframe = isIframe;
	      this.cacheTrack.data = arrayBuffer;
	      //
	      this.cacheTrack.flags = {
	        isLeading: 0,
	        dependsOn: isIframe ? 2 : 1,
	        isDependedOn: isIframe ? 1 : 0,
	        hasRedundancy: 0,
	        isNonSync: isIframe ? 0 : 1
	      };
	      if (!this.timeInit && $video.buffered.length === 1) {
	        this.timeInit = true;
	        $video.currentTime = $video.buffered.end(0);
	      }
	      if (!this.isInitInfo && $video.videoWidth > 0 && $video.videoHeight > 0) {
	        this.isInitInfo = true;
	      }
	    }
	  }, {
	    key: "_removeBuffer",
	    value: function _removeBuffer(start, end) {
	      if (this.isStateOpen && this.sourceBuffer.updating === false) {
	        try {
	          this.sourceBuffer.remove(start, end);
	        } catch (e) {
	          console.warn('removeBuffer() error', e);
	        }
	      } else {
	        console.warn('removeBuffer() this.isStateOpen is', this.isStateOpen, 'this.sourceBuffer.updating', this.sourceBuffer.updating);
	      }
	    }
	  }, {
	    key: "_appendBuffer",
	    value: function _appendBuffer(buffer) {
	      if (this.sourceBuffer === null) {
	        this.sourceBuffer = this.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64002A"');
	      }
	      if (this.sourceBuffer.updating === false && this.isStateOpen) {
	        try {
	          this.sourceBuffer.appendBuffer(buffer);
	        } catch (e) {}
	        return;
	      }
	      if (this.isStateClosed) {
	        console.warn('MediaSource is closed');
	      } else if (this.isStateEnded) {
	        console.warn('MediaSource is ended');
	      } else {
	        if (this.sourceBuffer.updating === true) {
	          console.warn('sourceBuffer.updating === true');
	        }
	      }
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return this.mediaSource && this.mediaSource.readyState;
	    }
	  }, {
	    key: "isStateEnded",
	    get: function get() {
	      return this.state === MEDIA_SOURCE_STATE.ended;
	    }
	  }, {
	    key: "isStateClosed",
	    get: function get() {
	      return this.state === MEDIA_SOURCE_STATE.closed;
	    }
	  }, {
	    key: "isStateOpen",
	    get: function get() {
	      return this.state === MEDIA_SOURCE_STATE.open;
	    }
	  }]);
	  return MseDecoder;
	}(Emitter);

	window.FlvDemuxer = FlvDemuxer;
	window.MseDecoder = MseDecoder;
	var index = {
	  FlvDemuxer: FlvDemuxer,
	  MseDecoder: MseDecoder
	};

	return index;

}));
//# sourceMappingURL=flv-decoder.dev.js.map
