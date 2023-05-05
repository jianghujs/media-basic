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

	var AUDIO_ENC_TYPE = {
	  10: 'AAC',
	  7: 'G711A',
	  8: 'G711U'
	};
	function clamp(num, a, b) {
	  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
	}
	var AudioPlayer = /*#__PURE__*/function () {
	  function AudioPlayer() {
	    _classCallCheck(this, AudioPlayer);
	    this.bufferList = [];
	    this.scriptNode = null;
	    this.hasInitScriptNode = false;
	    this.audioContextChannel = null;
	    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
	    //
	    this.gainNode = this.audioContext.createGain();
	    // Get an AudioBufferSourceNode.
	    // This is the AudioNode to use when we want to play an AudioBuffer
	    var source = this.audioContext.createBufferSource();
	    // set the buffer in the AudioBufferSourceNode
	    source.buffer = this.audioContext.createBuffer(1, 1, 22050);
	    // connect the AudioBufferSourceNode to the
	    // destination so we can hear the sound
	    source.connect(this.audioContext.destination);
	    // noteOn as start
	    // start the source playing
	    if (source.noteOn) {
	      source.noteOn(0);
	    } else {
	      source.start(0);
	    }
	    this.audioBufferSourceNode = source;
	    //
	    this.mediaStreamAudioDestinationNode = this.audioContext.createMediaStreamDestination();
	    //
	    this.audioEnabled(true);
	    // default setting 0
	    this.gainNode.gain.value = 0;
	    this.audioInfo = {
	      encType: '',
	      channels: '',
	      sampleRate: ''
	    };
	    this.playing = false;
	  }
	  _createClass(AudioPlayer, [{
	    key: "updateAudioInfo",
	    value: function updateAudioInfo(data) {
	      if (data.audioCode) {
	        this.audioInfo.encType = AUDIO_ENC_TYPE[data.audioCode];
	      }
	      if (data.channels) {
	        this.audioInfo.channels = data.channels;
	      }
	      if (data.sampleRate) {
	        this.audioInfo.sampleRate = data.sampleRate;
	      }

	      // audio 基本信息
	      if (this.audioInfo.sampleRate && this.audioInfo.channels && this.audioInfo.encType && !this.init) {
	        console.log('audioInfo', this.audioInfo);
	        this.init = true;
	      }
	    }
	  }, {
	    key: "initScriptNode",
	    value: function initScriptNode() {
	      var _this = this;
	      var channels = this.audioInfo.channels;
	      var scriptNode = this.audioContext.createScriptProcessor(2048, 0, channels);
	      // tips: if audio isStateSuspended  onaudioprocess method not working
	      scriptNode.onaudioprocess = function (audioProcessingEvent) {
	        var outputBuffer = audioProcessingEvent.outputBuffer;
	        if (_this.bufferList.length && _this.playing) {
	          var bufferItem = _this.bufferList.shift();
	          for (var channel = 0; channel < channels; channel++) {
	            var b = bufferItem.buffer[channel];
	            var nowBuffering = outputBuffer.getChannelData(channel);
	            for (var i = 0; i < 2048; i++) {
	              nowBuffering[i] = b[i] || 0;
	            }
	          }
	        }
	      };
	      scriptNode.connect(this.gainNode);
	      this.scriptNode = scriptNode;
	      this.gainNode.connect(this.audioContext.destination);
	      this.gainNode.connect(this.mediaStreamAudioDestinationNode);
	      this.hasInitScriptNode = true;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      if (this.hasInitScriptNode) {
	        this.scriptNode && this.scriptNode.disconnect(this.gainNode);
	        this.gainNode && this.gainNode.disconnect(this.audioContext.destination);
	        this.gainNode && this.gainNode.disconnect(this.mediaStreamAudioDestinationNode);
	      }
	      this.clear();
	      this.audioContext.close();
	      this.audioContext = null;
	      this.gainNode = null;
	      this.hasAudio = false;
	      this.playing = false;
	      if (this.scriptNode) {
	        this.scriptNode.onaudioprocess = null;
	        this.scriptNode = null;
	      }
	      this.audioBufferSourceNode = null;
	      this.mediaStreamAudioDestinationNode = null;
	      this.hasInitScriptNode = false;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.bufferList = [];
	    }
	  }, {
	    key: "play",
	    value: function play(buffer, ts) {
	      this.hasAudio = true;
	      this.playing = true;
	      this.bufferList.push({
	        buffer: buffer,
	        ts: ts
	      });
	    }
	  }, {
	    key: "pause",
	    value: function pause() {
	      this.playing = false;
	      this.clear();
	    }
	  }, {
	    key: "mute",
	    value: function mute(flag) {
	      if (flag) {
	        this.setVolume(0);
	        this.clear();
	      } else {
	        this.setVolume(0.5);
	        this.audioEnabled(true);
	      }
	    }
	  }, {
	    key: "setVolume",
	    value: function setVolume(volume) {
	      volume = parseFloat(volume).toFixed(2);
	      if (isNaN(volume)) {
	        return;
	      }
	      this.audioEnabled(true);
	      volume = clamp(volume, 0, 1);
	      this.gainNode.gain.value = volume;
	      this.gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
	    }

	    // 是否播放。。。
	  }, {
	    key: "audioEnabled",
	    value: function audioEnabled(flag) {
	      if (flag) {
	        if (this.audioContext.state === 'suspended') {
	          // resume
	          this.audioContext.resume();
	        }
	      } else {
	        if (this.audioContext.state === 'running') {
	          // suspend
	          this.audioContext.suspend();
	        }
	      }
	    }
	  }]);
	  return AudioPlayer;
	}();

	function isFunction(fn) {
	  return typeof fn === "function";
	}
	function closeVideoFrame(videoFrame) {
	  if (videoFrame.close) {
	    videoFrame.close();
	  } else if (videoFrame.destroy) {
	    videoFrame.destroy();
	  }
	}
	var YuvRender = /*#__PURE__*/function () {
	  function YuvRender(options) {
	    _classCallCheck(this, YuvRender);
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
	      encType: ''
	    };
	    this._initContext2D();
	  }
	  _createClass(YuvRender, [{
	    key: "destroy",
	    value: function destroy() {
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
	  }, {
	    key: "updateVideoInfo",
	    value: function updateVideoInfo(data) {
	      if (data.videoCode) {
	        this.videoInfo.encType = data.videoCode;
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
	  }, {
	    key: "_initContext2D",
	    value: function _initContext2D() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      this.context2D = this.$videoElement.getContext('2d', options);
	    }
	  }, {
	    key: "render",
	    value: function render(msg) {
	      var _this = this;
	      if (isFunction(msg.videoFrame.createImageBitmap)) {
	        try {
	          msg.videoFrame.createImageBitmap().then(function (image) {
	            _this.context2D.drawImage(image, 0, 0, _this.$videoElement.width, _this.$videoElement.height);
	            closeVideoFrame(msg.videoFrame);
	          });
	        } catch (e) {}
	      } else {
	        this.context2D.drawImage(msg.videoFrame, 0, 0, this.$videoElement.width, this.$videoElement.height);
	        closeVideoFrame(msg.videoFrame);
	      }
	    }
	  }]);
	  return YuvRender;
	}();

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	var VIDEO_ENC_CODE = {
	  h264: 7,
	  h265: 12
	};
	function formatVideoDecoderConfigure(avcC) {
	  var codecArray = avcC.subarray(1, 4);
	  var codecString = "avc1.";
	  for (var j = 0; j < 3; j++) {
	    var h = codecArray[j].toString(16);
	    if (h.length < 2) {
	      h = "0" + h;
	    }
	    codecString += h;
	  }
	  return {
	    codec: codecString,
	    description: avcC
	  };
	}
	var ENCODED_VIDEO_TYPE = {
	  key: 'key',
	  delta: 'delta'
	};
	var WcsDecoder = /*#__PURE__*/function (_Emitter) {
	  _inherits(WcsDecoder, _Emitter);
	  var _super = _createSuper(WcsDecoder);
	  function WcsDecoder() {
	    var _this2;
	    _classCallCheck(this, WcsDecoder);
	    _this2 = _super.call(this);
	    _this2.decoder = null;
	    _this2.hasInit = false;
	    _this2.isInitInfo = false;
	    _this2.isDecodeFirstIIframe = false;
	    _this2.codecId = null;
	    _this2._initDecoder();
	    return _this2;
	  }
	  _createClass(WcsDecoder, [{
	    key: "destroy",
	    value: function destroy() {
	      this.off();
	      if (this.decoder) {
	        if (this.decoder.state !== 'closed') {
	          this.decoder.close();
	        }
	        this.decoder = null;
	      }
	      this.hasInit = false;
	      this.isInitInfo = false;
	      this.isDecodeFirstIIframe = false;
	      this.codecId = null;
	    }
	  }, {
	    key: "_initDecoder",
	    value: function _initDecoder() {
	      var _this = this;
	      this.decoder = new VideoDecoder({
	        output: function output(videoFrame) {
	          _this._handleDecode(videoFrame);
	        },
	        error: function error(_error) {
	          _this._handleError(_error);
	        }
	      });
	    }
	  }, {
	    key: "_handleDecode",
	    value: function _handleDecode(videoFrame) {
	      if (!this.isInitInfo) {
	        this.isInitInfo = true;
	        this.emit('videoInfo', {
	          width: videoFrame.codedWidth,
	          height: videoFrame.codedHeight,
	          videoCode: this.codecId
	        });
	      }
	      this.emit('videoFrame', {
	        videoFrame: videoFrame,
	        ts: videoFrame.timestamp
	      });
	    }
	  }, {
	    key: "_handleError",
	    value: function _handleError(error) {
	      console.error('Webcodecs', 'handleError', error);
	    }
	  }, {
	    key: "setCodecVideo",
	    value: function setCodecVideo(codecId, extraData) {
	      this.codecId = codecId;
	      var config = null;
	      if (codecId === VIDEO_ENC_CODE.h264) {
	        config = formatVideoDecoderConfigure(extraData);
	      }
	      this.decoder.configure(config);
	    }
	  }, {
	    key: "decodeVideo",
	    value: function decodeVideo(payload, isIframe, ts) {
	      if (!this.isDecodeFirstIIframe && isIframe) {
	        this.isDecodeFirstIIframe = true;
	      }
	      if (this.isDecodeFirstIIframe) {
	        var chunk = new EncodedVideoChunk({
	          data: payload,
	          timestamp: ts,
	          type: isIframe ? ENCODED_VIDEO_TYPE.key : ENCODED_VIDEO_TYPE.delta
	        });
	        try {
	          if (this.decoder.state === 'configured') {
	            this.decoder.decode(chunk);
	          }
	        } catch (e) {
	          console.error('Webcodecs', 'decodeVideo', e);
	        }
	      }
	    }
	  }]);
	  return WcsDecoder;
	}(Emitter);

	window.FlvDemuxer = FlvDemuxer;
	window.WcsDecoder = WcsDecoder;
	window.AudioPlayer = AudioPlayer;
	window.YuvRender = YuvRender;
	var index = {
	  FlvDemuxer: FlvDemuxer,
	  WcsDecoder: WcsDecoder,
	  YuvRender: YuvRender,
	  AudioPlayer: AudioPlayer
	};

	return index;

}));
//# sourceMappingURL=flv-decoder.dev.js.map
