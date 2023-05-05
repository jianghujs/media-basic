(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('path'), require('fs'), require('crypto')) :
	typeof define === 'function' && define.amd ? define(['path', 'fs', 'crypto'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.demo = factory(global.path, global.fs, global.crypto$1));
})(this, (function (path, fs, crypto$1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
	var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
	var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto$1);

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

	var _typeof = unwrapExports(_typeof_1);

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

	var _assertThisInitialized = unwrapExports(assertThisInitialized);

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
	    _this.tagType = null;
	    _this.dts = null;
	    _this.pts = null;
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
	      this.tagType = null;
	      this.dts = null;
	      this.pts = null;
	      this.state = FLV_PARSE_STATE.init;
	    }
	  }, {
	    key: "dispatch",
	    value: function dispatch(data) {
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
	          this.tagType = remain[4] & 0x1F; // 5bit代表类型,8:audio 9:video 18:script other:其他
	          console.log('FLV_PARSE_STATE.header,tagType', FLV_TAG_TYPE_SHOW[this.tagType]);
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
	          this.dts = dv.getUint32(0, true);
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
	          if (this.tagType === FLV_TAG_TYPE.video) {
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
	              this.pts = this.dts + compositionTime;
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
	                  console.warn("".concat(CODEC_ID_SHOW[codecId], " keyFrame nalu, dts: ").concat(this.dts, ", pts: ").concat(this.pts));
	                  // tag header (1-5)
	                  var nalu = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: nalu,
	                    timestamp: this.dts,
	                    isKeyFrame: true
	                  });
	                } else {
	                  console.warn('other packet type nalu', packetType);
	                }
	              } else if (frameType === VIDEO_FRAME_TYPE.interFrame) {
	                if (packetType === VIDEO_PACKET_TYPE.nalu) {
	                  console.log("".concat(CODEC_ID_SHOW[codecId], " interFrame nalu, dts: ").concat(this.dts, ", pts: ").concat(this.pts));
	                  // P Frame
	                  // tag header (1-5)
	                  var _nalu = remain.slice(5, this.needLen);
	                  this.emit('videoData', {
	                    nalu: _nalu,
	                    timestamp: this.dts,
	                    isKeyFrame: false
	                  });
	                }
	              } else {
	                console.log('other frame type', frameType);
	              }
	            }
	          } else if (this.tagType === FLV_TAG_TYPE.audio) {
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
	                  timestamp: this.dts,
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
	                timestamp: this.dts,
	                data: g711Raw
	              });
	            }
	          } else if (this.tagType === FLV_TAG_TYPE.script) {
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
	    key: "dispatchold",
	    value: function dispatchold(data) {
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

	var decoderFull = createCommonjsModule(function (module) {
	  var Module = typeof Module != "undefined" ? Module : {};
	  var moduleOverrides = Object.assign({}, Module);
	  var thisProgram = "./this.program";
	  var ENVIRONMENT_IS_WEB = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object";
	  var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
	  var ENVIRONMENT_IS_NODE = (typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && _typeof(process.versions) == "object" && typeof process.versions.node == "string";
	  var scriptDirectory = "";
	  function locateFile(path) {
	    if (Module["locateFile"]) {
	      return Module["locateFile"](path, scriptDirectory);
	    }
	    return scriptDirectory + path;
	  }
	  var read_, readAsync, readBinary;
	  var fs;
	  var nodePath;
	  var requireNodeFS;
	  if (ENVIRONMENT_IS_NODE) {
	    if (ENVIRONMENT_IS_WORKER) {
	      scriptDirectory = path__default["default"].dirname(scriptDirectory) + "/";
	    } else {
	      scriptDirectory = __dirname + "/";
	    }
	    requireNodeFS = function requireNodeFS() {
	      if (!nodePath) {
	        fs = fs__default["default"];
	        nodePath = path__default["default"];
	      }
	    };
	    read_ = function shell_read(filename, binary) {
	      requireNodeFS();
	      filename = nodePath["normalize"](filename);
	      return fs.readFileSync(filename, binary ? undefined : "utf8");
	    };
	    readBinary = function readBinary(filename) {
	      var ret = read_(filename, true);
	      if (!ret.buffer) {
	        ret = new Uint8Array(ret);
	      }
	      return ret;
	    };
	    readAsync = function readAsync(filename, onload, onerror) {
	      requireNodeFS();
	      filename = nodePath["normalize"](filename);
	      fs.readFile(filename, function (err, data) {
	        if (err) onerror(err);else onload(data.buffer);
	      });
	    };
	    if (process["argv"].length > 1) {
	      thisProgram = process["argv"][1].replace(/\\/g, "/");
	    }
	    process["argv"].slice(2);
	    {
	      module["exports"] = Module;
	    }
	    process["on"]("uncaughtException", function (ex) {
	      if (!(ex instanceof ExitStatus)) {
	        throw ex;
	      }
	    });
	    process["on"]("unhandledRejection", function (reason) {
	      throw reason;
	    });
	    Module["inspect"] = function () {
	      return "[Emscripten Module object]";
	    };
	  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
	    if (ENVIRONMENT_IS_WORKER) {
	      scriptDirectory = self.location.href;
	    } else if (typeof document != "undefined" && document.currentScript) {
	      scriptDirectory = document.currentScript.src;
	    }
	    if (scriptDirectory.indexOf("blob:") !== 0) {
	      scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
	    } else {
	      scriptDirectory = "";
	    }
	    {
	      read_ = function read_(url) {
	        var xhr = new XMLHttpRequest();
	        xhr.open("GET", url, false);
	        xhr.send(null);
	        return xhr.responseText;
	      };
	      if (ENVIRONMENT_IS_WORKER) {
	        readBinary = function readBinary(url) {
	          var xhr = new XMLHttpRequest();
	          xhr.open("GET", url, false);
	          xhr.responseType = "arraybuffer";
	          xhr.send(null);
	          return new Uint8Array(xhr.response);
	        };
	      }
	      readAsync = function readAsync(url, onload, onerror) {
	        var xhr = new XMLHttpRequest();
	        xhr.open("GET", url, true);
	        xhr.responseType = "arraybuffer";
	        xhr.onload = function () {
	          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
	            onload(xhr.response);
	            return;
	          }
	          onerror();
	        };
	        xhr.onerror = onerror;
	        xhr.send(null);
	      };
	    }
	  } else ;
	  var out = Module["print"] || console.log.bind(console);
	  var err = Module["printErr"] || console.warn.bind(console);
	  Object.assign(Module, moduleOverrides);
	  moduleOverrides = null;
	  if (Module["arguments"]) Module["arguments"];
	  if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
	  if (Module["quit"]) Module["quit"];
	  var POINTER_SIZE = 4;
	  var wasmBinary;
	  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
	  Module["noExitRuntime"] || true;
	  if ((typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) != "object") {
	    abort("no native wasm support detected");
	  }
	  var wasmMemory;
	  var ABORT = false;
	  function assert(condition, text) {
	    if (!condition) {
	      abort(text);
	    }
	  }
	  var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
	  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
	    var endIdx = idx + maxBytesToRead;
	    var endPtr = idx;
	    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
	    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
	      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
	    }
	    var str = "";
	    while (idx < endPtr) {
	      var u0 = heapOrArray[idx++];
	      if (!(u0 & 128)) {
	        str += String.fromCharCode(u0);
	        continue;
	      }
	      var u1 = heapOrArray[idx++] & 63;
	      if ((u0 & 224) == 192) {
	        str += String.fromCharCode((u0 & 31) << 6 | u1);
	        continue;
	      }
	      var u2 = heapOrArray[idx++] & 63;
	      if ((u0 & 240) == 224) {
	        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
	      } else {
	        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
	      }
	      if (u0 < 65536) {
	        str += String.fromCharCode(u0);
	      } else {
	        var ch = u0 - 65536;
	        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
	      }
	    }
	    return str;
	  }
	  function UTF8ToString(ptr, maxBytesToRead) {
	    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
	  }
	  function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
	    if (!(maxBytesToWrite > 0)) return 0;
	    var startIdx = outIdx;
	    var endIdx = outIdx + maxBytesToWrite - 1;
	    for (var i = 0; i < str.length; ++i) {
	      var u = str.charCodeAt(i);
	      if (u >= 55296 && u <= 57343) {
	        var u1 = str.charCodeAt(++i);
	        u = 65536 + ((u & 1023) << 10) | u1 & 1023;
	      }
	      if (u <= 127) {
	        if (outIdx >= endIdx) break;
	        heap[outIdx++] = u;
	      } else if (u <= 2047) {
	        if (outIdx + 1 >= endIdx) break;
	        heap[outIdx++] = 192 | u >> 6;
	        heap[outIdx++] = 128 | u & 63;
	      } else if (u <= 65535) {
	        if (outIdx + 2 >= endIdx) break;
	        heap[outIdx++] = 224 | u >> 12;
	        heap[outIdx++] = 128 | u >> 6 & 63;
	        heap[outIdx++] = 128 | u & 63;
	      } else {
	        if (outIdx + 3 >= endIdx) break;
	        heap[outIdx++] = 240 | u >> 18;
	        heap[outIdx++] = 128 | u >> 12 & 63;
	        heap[outIdx++] = 128 | u >> 6 & 63;
	        heap[outIdx++] = 128 | u & 63;
	      }
	    }
	    heap[outIdx] = 0;
	    return outIdx - startIdx;
	  }
	  function stringToUTF8(str, outPtr, maxBytesToWrite) {
	    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
	  }
	  function lengthBytesUTF8(str) {
	    var len = 0;
	    for (var i = 0; i < str.length; ++i) {
	      var c = str.charCodeAt(i);
	      if (c <= 127) {
	        len++;
	      } else if (c <= 2047) {
	        len += 2;
	      } else if (c >= 55296 && c <= 57343) {
	        len += 4;
	        ++i;
	      } else {
	        len += 3;
	      }
	    }
	    return len;
	  }
	  var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
	  function updateGlobalBufferAndViews(buf) {
	    buffer = buf;
	    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
	    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
	    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
	    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
	    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
	    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
	    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
	    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
	  }
	  Module["INITIAL_MEMORY"] || 134217728;
	  var wasmTable;
	  var __ATPRERUN__ = [];
	  var __ATINIT__ = [];
	  var __ATPOSTRUN__ = [];
	  function preRun() {
	    if (Module["preRun"]) {
	      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
	      while (Module["preRun"].length) {
	        addOnPreRun(Module["preRun"].shift());
	      }
	    }
	    callRuntimeCallbacks(__ATPRERUN__);
	  }
	  function initRuntime() {
	    if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
	    FS.ignorePermissions = false;
	    callRuntimeCallbacks(__ATINIT__);
	  }
	  function postRun() {
	    if (Module["postRun"]) {
	      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
	      while (Module["postRun"].length) {
	        addOnPostRun(Module["postRun"].shift());
	      }
	    }
	    callRuntimeCallbacks(__ATPOSTRUN__);
	  }
	  function addOnPreRun(cb) {
	    __ATPRERUN__.unshift(cb);
	  }
	  function addOnInit(cb) {
	    __ATINIT__.unshift(cb);
	  }
	  function addOnPostRun(cb) {
	    __ATPOSTRUN__.unshift(cb);
	  }
	  var runDependencies = 0;
	  var dependenciesFulfilled = null;
	  function getUniqueRunDependency(id) {
	    return id;
	  }
	  function addRunDependency(id) {
	    runDependencies++;
	    if (Module["monitorRunDependencies"]) {
	      Module["monitorRunDependencies"](runDependencies);
	    }
	  }
	  function removeRunDependency(id) {
	    runDependencies--;
	    if (Module["monitorRunDependencies"]) {
	      Module["monitorRunDependencies"](runDependencies);
	    }
	    if (runDependencies == 0) {
	      if (dependenciesFulfilled) {
	        var callback = dependenciesFulfilled;
	        dependenciesFulfilled = null;
	        callback();
	      }
	    }
	  }
	  function abort(what) {
	    {
	      if (Module["onAbort"]) {
	        Module["onAbort"](what);
	      }
	    }
	    what = "Aborted(" + what + ")";
	    err(what);
	    ABORT = true;
	    what += ". Build with -sASSERTIONS for more info.";
	    var e = new WebAssembly.RuntimeError(what);
	    throw e;
	  }
	  var dataURIPrefix = "data:application/octet-stream;base64,";
	  function isDataURI(filename) {
	    return filename.startsWith(dataURIPrefix);
	  }
	  function isFileURI(filename) {
	    return filename.startsWith("file://");
	  }
	  var wasmBinaryFile;
	  wasmBinaryFile = "decoder-full.wasm";
	  if (!isDataURI(wasmBinaryFile)) {
	    wasmBinaryFile = locateFile(wasmBinaryFile);
	  }
	  function getBinary(file) {
	    try {
	      if (file == wasmBinaryFile && wasmBinary) {
	        return new Uint8Array(wasmBinary);
	      }
	      if (readBinary) {
	        return readBinary(file);
	      }
	      throw "both async and sync fetching of the wasm failed";
	    } catch (err) {
	      abort(err);
	    }
	  }
	  function getBinaryPromise() {
	    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
	      if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
	        return fetch(wasmBinaryFile, {
	          credentials: "same-origin"
	        }).then(function (response) {
	          if (!response["ok"]) {
	            throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
	          }
	          return response["arrayBuffer"]();
	        })["catch"](function () {
	          return getBinary(wasmBinaryFile);
	        });
	      } else {
	        if (readAsync) {
	          return new Promise(function (resolve, reject) {
	            readAsync(wasmBinaryFile, function (response) {
	              resolve(new Uint8Array(response));
	            }, reject);
	          });
	        }
	      }
	    }
	    return Promise.resolve().then(function () {
	      return getBinary(wasmBinaryFile);
	    });
	  }
	  function createWasm() {
	    var info = {
	      "a": asmLibraryArg
	    };
	    function receiveInstance(instance, module) {
	      var exports = instance.exports;
	      Module["asm"] = exports;
	      wasmMemory = Module["asm"]["F"];
	      updateGlobalBufferAndViews(wasmMemory.buffer);
	      wasmTable = Module["asm"]["J"];
	      addOnInit(Module["asm"]["G"]);
	      removeRunDependency();
	    }
	    addRunDependency();
	    function receiveInstantiationResult(result) {
	      receiveInstance(result["instance"]);
	    }
	    function instantiateArrayBuffer(receiver) {
	      return getBinaryPromise().then(function (binary) {
	        return WebAssembly.instantiate(binary, info);
	      }).then(function (instance) {
	        return instance;
	      }).then(receiver, function (reason) {
	        err("failed to asynchronously prepare wasm: " + reason);
	        abort(reason);
	      });
	    }
	    function instantiateAsync() {
	      if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
	        return fetch(wasmBinaryFile, {
	          credentials: "same-origin"
	        }).then(function (response) {
	          var result = WebAssembly.instantiateStreaming(response, info);
	          return result.then(receiveInstantiationResult, function (reason) {
	            err("wasm streaming compile failed: " + reason);
	            err("falling back to ArrayBuffer instantiation");
	            return instantiateArrayBuffer(receiveInstantiationResult);
	          });
	        });
	      } else {
	        return instantiateArrayBuffer(receiveInstantiationResult);
	      }
	    }
	    if (Module["instantiateWasm"]) {
	      try {
	        var exports = Module["instantiateWasm"](info, receiveInstance);
	        return exports;
	      } catch (e) {
	        err("Module.instantiateWasm callback failed with error: " + e);
	        return false;
	      }
	    }
	    instantiateAsync();
	    return {};
	  }
	  var tempDouble;
	  var tempI64;
	  function ExitStatus(status) {
	    this.name = "ExitStatus";
	    this.message = "Program terminated with exit(" + status + ")";
	    this.status = status;
	  }
	  function callRuntimeCallbacks(callbacks) {
	    while (callbacks.length > 0) {
	      callbacks.shift()(Module);
	    }
	  }
	  function ___cxa_allocate_exception(size) {
	    return _malloc(size + 24) + 24;
	  }
	  function ExceptionInfo(excPtr) {
	    this.excPtr = excPtr;
	    this.ptr = excPtr - 24;
	    this.set_type = function (type) {
	      HEAPU32[this.ptr + 4 >> 2] = type;
	    };
	    this.get_type = function () {
	      return HEAPU32[this.ptr + 4 >> 2];
	    };
	    this.set_destructor = function (destructor) {
	      HEAPU32[this.ptr + 8 >> 2] = destructor;
	    };
	    this.get_destructor = function () {
	      return HEAPU32[this.ptr + 8 >> 2];
	    };
	    this.set_refcount = function (refcount) {
	      HEAP32[this.ptr >> 2] = refcount;
	    };
	    this.set_caught = function (caught) {
	      caught = caught ? 1 : 0;
	      HEAP8[this.ptr + 12 >> 0] = caught;
	    };
	    this.get_caught = function () {
	      return HEAP8[this.ptr + 12 >> 0] != 0;
	    };
	    this.set_rethrown = function (rethrown) {
	      rethrown = rethrown ? 1 : 0;
	      HEAP8[this.ptr + 13 >> 0] = rethrown;
	    };
	    this.get_rethrown = function () {
	      return HEAP8[this.ptr + 13 >> 0] != 0;
	    };
	    this.init = function (type, destructor) {
	      this.set_adjusted_ptr(0);
	      this.set_type(type);
	      this.set_destructor(destructor);
	      this.set_refcount(0);
	      this.set_caught(false);
	      this.set_rethrown(false);
	    };
	    this.add_ref = function () {
	      var value = HEAP32[this.ptr >> 2];
	      HEAP32[this.ptr >> 2] = value + 1;
	    };
	    this.release_ref = function () {
	      var prev = HEAP32[this.ptr >> 2];
	      HEAP32[this.ptr >> 2] = prev - 1;
	      return prev === 1;
	    };
	    this.set_adjusted_ptr = function (adjustedPtr) {
	      HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
	    };
	    this.get_adjusted_ptr = function () {
	      return HEAPU32[this.ptr + 16 >> 2];
	    };
	    this.get_exception_ptr = function () {
	      var isPointer = ___cxa_is_pointer_type(this.get_type());
	      if (isPointer) {
	        return HEAPU32[this.excPtr >> 2];
	      }
	      var adjusted = this.get_adjusted_ptr();
	      if (adjusted !== 0) return adjusted;
	      return this.excPtr;
	    };
	  }
	  function ___cxa_throw(ptr, type, destructor) {
	    var info = new ExceptionInfo(ptr);
	    info.init(type, destructor);
	    throw ptr;
	  }
	  function setErrNo(value) {
	    HEAP32[___errno_location() >> 2] = value;
	    return value;
	  }
	  var PATH = {
	    isAbs: function isAbs(path) {
	      return path.charAt(0) === "/";
	    },
	    splitPath: function splitPath(filename) {
	      var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	      return splitPathRe.exec(filename).slice(1);
	    },
	    normalizeArray: function normalizeArray(parts, allowAboveRoot) {
	      var up = 0;
	      for (var i = parts.length - 1; i >= 0; i--) {
	        var last = parts[i];
	        if (last === ".") {
	          parts.splice(i, 1);
	        } else if (last === "..") {
	          parts.splice(i, 1);
	          up++;
	        } else if (up) {
	          parts.splice(i, 1);
	          up--;
	        }
	      }
	      if (allowAboveRoot) {
	        for (; up; up--) {
	          parts.unshift("..");
	        }
	      }
	      return parts;
	    },
	    normalize: function normalize(path) {
	      var isAbsolute = PATH.isAbs(path),
	        trailingSlash = path.substr(-1) === "/";
	      path = PATH.normalizeArray(path.split("/").filter(function (p) {
	        return !!p;
	      }), !isAbsolute).join("/");
	      if (!path && !isAbsolute) {
	        path = ".";
	      }
	      if (path && trailingSlash) {
	        path += "/";
	      }
	      return (isAbsolute ? "/" : "") + path;
	    },
	    dirname: function dirname(path) {
	      var result = PATH.splitPath(path),
	        root = result[0],
	        dir = result[1];
	      if (!root && !dir) {
	        return ".";
	      }
	      if (dir) {
	        dir = dir.substr(0, dir.length - 1);
	      }
	      return root + dir;
	    },
	    basename: function basename(path) {
	      if (path === "/") return "/";
	      path = PATH.normalize(path);
	      path = path.replace(/\/$/, "");
	      var lastSlash = path.lastIndexOf("/");
	      if (lastSlash === -1) return path;
	      return path.substr(lastSlash + 1);
	    },
	    join: function join() {
	      var paths = Array.prototype.slice.call(arguments, 0);
	      return PATH.normalize(paths.join("/"));
	    },
	    join2: function join2(l, r) {
	      return PATH.normalize(l + "/" + r);
	    }
	  };
	  function getRandomDevice() {
	    if ((typeof crypto === "undefined" ? "undefined" : _typeof(crypto)) == "object" && typeof crypto["getRandomValues"] == "function") {
	      var randomBuffer = new Uint8Array(1);
	      return function () {
	        crypto.getRandomValues(randomBuffer);
	        return randomBuffer[0];
	      };
	    } else if (ENVIRONMENT_IS_NODE) {
	      try {
	        var crypto_module = crypto__default["default"];
	        return function () {
	          return crypto_module["randomBytes"](1)[0];
	        };
	      } catch (e) {}
	    }
	    return function () {
	      return abort("randomDevice");
	    };
	  }
	  var PATH_FS = {
	    resolve: function resolve() {
	      var resolvedPath = "",
	        resolvedAbsolute = false;
	      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	        var path = i >= 0 ? arguments[i] : FS.cwd();
	        if (typeof path != "string") {
	          throw new TypeError("Arguments to path.resolve must be strings");
	        } else if (!path) {
	          return "";
	        }
	        resolvedPath = path + "/" + resolvedPath;
	        resolvedAbsolute = PATH.isAbs(path);
	      }
	      resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function (p) {
	        return !!p;
	      }), !resolvedAbsolute).join("/");
	      return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
	    },
	    relative: function relative(from, to) {
	      from = PATH_FS.resolve(from).substr(1);
	      to = PATH_FS.resolve(to).substr(1);
	      function trim(arr) {
	        var start = 0;
	        for (; start < arr.length; start++) {
	          if (arr[start] !== "") break;
	        }
	        var end = arr.length - 1;
	        for (; end >= 0; end--) {
	          if (arr[end] !== "") break;
	        }
	        if (start > end) return [];
	        return arr.slice(start, end - start + 1);
	      }
	      var fromParts = trim(from.split("/"));
	      var toParts = trim(to.split("/"));
	      var length = Math.min(fromParts.length, toParts.length);
	      var samePartsLength = length;
	      for (var i = 0; i < length; i++) {
	        if (fromParts[i] !== toParts[i]) {
	          samePartsLength = i;
	          break;
	        }
	      }
	      var outputParts = [];
	      for (var i = samePartsLength; i < fromParts.length; i++) {
	        outputParts.push("..");
	      }
	      outputParts = outputParts.concat(toParts.slice(samePartsLength));
	      return outputParts.join("/");
	    }
	  };
	  function intArrayFromString(stringy, dontAddNull, length) {
	    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
	    var u8array = new Array(len);
	    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
	    if (dontAddNull) u8array.length = numBytesWritten;
	    return u8array;
	  }
	  var TTY = {
	    ttys: [],
	    init: function init() {},
	    shutdown: function shutdown() {},
	    register: function register(dev, ops) {
	      TTY.ttys[dev] = {
	        input: [],
	        output: [],
	        ops: ops
	      };
	      FS.registerDevice(dev, TTY.stream_ops);
	    },
	    stream_ops: {
	      open: function open(stream) {
	        var tty = TTY.ttys[stream.node.rdev];
	        if (!tty) {
	          throw new FS.ErrnoError(43);
	        }
	        stream.tty = tty;
	        stream.seekable = false;
	      },
	      close: function close(stream) {
	        stream.tty.ops.flush(stream.tty);
	      },
	      flush: function flush(stream) {
	        stream.tty.ops.flush(stream.tty);
	      },
	      read: function read(stream, buffer, offset, length, pos) {
	        if (!stream.tty || !stream.tty.ops.get_char) {
	          throw new FS.ErrnoError(60);
	        }
	        var bytesRead = 0;
	        for (var i = 0; i < length; i++) {
	          var result;
	          try {
	            result = stream.tty.ops.get_char(stream.tty);
	          } catch (e) {
	            throw new FS.ErrnoError(29);
	          }
	          if (result === undefined && bytesRead === 0) {
	            throw new FS.ErrnoError(6);
	          }
	          if (result === null || result === undefined) break;
	          bytesRead++;
	          buffer[offset + i] = result;
	        }
	        if (bytesRead) {
	          stream.node.timestamp = Date.now();
	        }
	        return bytesRead;
	      },
	      write: function write(stream, buffer, offset, length, pos) {
	        if (!stream.tty || !stream.tty.ops.put_char) {
	          throw new FS.ErrnoError(60);
	        }
	        try {
	          for (var i = 0; i < length; i++) {
	            stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
	          }
	        } catch (e) {
	          throw new FS.ErrnoError(29);
	        }
	        if (length) {
	          stream.node.timestamp = Date.now();
	        }
	        return i;
	      }
	    },
	    default_tty_ops: {
	      get_char: function get_char(tty) {
	        if (!tty.input.length) {
	          var result = null;
	          if (ENVIRONMENT_IS_NODE) {
	            var BUFSIZE = 256;
	            var buf = Buffer.alloc(BUFSIZE);
	            var bytesRead = 0;
	            try {
	              bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1);
	            } catch (e) {
	              if (e.toString().includes("EOF")) bytesRead = 0;else throw e;
	            }
	            if (bytesRead > 0) {
	              result = buf.slice(0, bytesRead).toString("utf-8");
	            } else {
	              result = null;
	            }
	          } else if (typeof window != "undefined" && typeof window.prompt == "function") {
	            result = window.prompt("Input: ");
	            if (result !== null) {
	              result += "\n";
	            }
	          } else if (typeof readline == "function") {
	            result = readline();
	            if (result !== null) {
	              result += "\n";
	            }
	          }
	          if (!result) {
	            return null;
	          }
	          tty.input = intArrayFromString(result, true);
	        }
	        return tty.input.shift();
	      },
	      put_char: function put_char(tty, val) {
	        if (val === null || val === 10) {
	          out(UTF8ArrayToString(tty.output, 0));
	          tty.output = [];
	        } else {
	          if (val != 0) tty.output.push(val);
	        }
	      },
	      flush: function flush(tty) {
	        if (tty.output && tty.output.length > 0) {
	          out(UTF8ArrayToString(tty.output, 0));
	          tty.output = [];
	        }
	      }
	    },
	    default_tty1_ops: {
	      put_char: function put_char(tty, val) {
	        if (val === null || val === 10) {
	          err(UTF8ArrayToString(tty.output, 0));
	          tty.output = [];
	        } else {
	          if (val != 0) tty.output.push(val);
	        }
	      },
	      flush: function flush(tty) {
	        if (tty.output && tty.output.length > 0) {
	          err(UTF8ArrayToString(tty.output, 0));
	          tty.output = [];
	        }
	      }
	    }
	  };
	  function zeroMemory(address, size) {
	    HEAPU8.fill(0, address, address + size);
	  }
	  function alignMemory(size, alignment) {
	    return Math.ceil(size / alignment) * alignment;
	  }
	  function mmapAlloc(size) {
	    size = alignMemory(size, 65536);
	    var ptr = _emscripten_builtin_memalign(65536, size);
	    if (!ptr) return 0;
	    zeroMemory(ptr, size);
	    return ptr;
	  }
	  var MEMFS = {
	    ops_table: null,
	    mount: function mount(_mount) {
	      return MEMFS.createNode(null, "/", 16384 | 511, 0);
	    },
	    createNode: function createNode(parent, name, mode, dev) {
	      if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
	        throw new FS.ErrnoError(63);
	      }
	      if (!MEMFS.ops_table) {
	        MEMFS.ops_table = {
	          dir: {
	            node: {
	              getattr: MEMFS.node_ops.getattr,
	              setattr: MEMFS.node_ops.setattr,
	              lookup: MEMFS.node_ops.lookup,
	              mknod: MEMFS.node_ops.mknod,
	              rename: MEMFS.node_ops.rename,
	              unlink: MEMFS.node_ops.unlink,
	              rmdir: MEMFS.node_ops.rmdir,
	              readdir: MEMFS.node_ops.readdir,
	              symlink: MEMFS.node_ops.symlink
	            },
	            stream: {
	              llseek: MEMFS.stream_ops.llseek
	            }
	          },
	          file: {
	            node: {
	              getattr: MEMFS.node_ops.getattr,
	              setattr: MEMFS.node_ops.setattr
	            },
	            stream: {
	              llseek: MEMFS.stream_ops.llseek,
	              read: MEMFS.stream_ops.read,
	              write: MEMFS.stream_ops.write,
	              allocate: MEMFS.stream_ops.allocate,
	              mmap: MEMFS.stream_ops.mmap,
	              msync: MEMFS.stream_ops.msync
	            }
	          },
	          link: {
	            node: {
	              getattr: MEMFS.node_ops.getattr,
	              setattr: MEMFS.node_ops.setattr,
	              readlink: MEMFS.node_ops.readlink
	            },
	            stream: {}
	          },
	          chrdev: {
	            node: {
	              getattr: MEMFS.node_ops.getattr,
	              setattr: MEMFS.node_ops.setattr
	            },
	            stream: FS.chrdev_stream_ops
	          }
	        };
	      }
	      var node = FS.createNode(parent, name, mode, dev);
	      if (FS.isDir(node.mode)) {
	        node.node_ops = MEMFS.ops_table.dir.node;
	        node.stream_ops = MEMFS.ops_table.dir.stream;
	        node.contents = {};
	      } else if (FS.isFile(node.mode)) {
	        node.node_ops = MEMFS.ops_table.file.node;
	        node.stream_ops = MEMFS.ops_table.file.stream;
	        node.usedBytes = 0;
	        node.contents = null;
	      } else if (FS.isLink(node.mode)) {
	        node.node_ops = MEMFS.ops_table.link.node;
	        node.stream_ops = MEMFS.ops_table.link.stream;
	      } else if (FS.isChrdev(node.mode)) {
	        node.node_ops = MEMFS.ops_table.chrdev.node;
	        node.stream_ops = MEMFS.ops_table.chrdev.stream;
	      }
	      node.timestamp = Date.now();
	      if (parent) {
	        parent.contents[name] = node;
	        parent.timestamp = node.timestamp;
	      }
	      return node;
	    },
	    getFileDataAsTypedArray: function getFileDataAsTypedArray(node) {
	      if (!node.contents) return new Uint8Array(0);
	      if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
	      return new Uint8Array(node.contents);
	    },
	    expandFileStorage: function expandFileStorage(node, newCapacity) {
	      var prevCapacity = node.contents ? node.contents.length : 0;
	      if (prevCapacity >= newCapacity) return;
	      var CAPACITY_DOUBLING_MAX = 1024 * 1024;
	      newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
	      if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
	      var oldContents = node.contents;
	      node.contents = new Uint8Array(newCapacity);
	      if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
	    },
	    resizeFileStorage: function resizeFileStorage(node, newSize) {
	      if (node.usedBytes == newSize) return;
	      if (newSize == 0) {
	        node.contents = null;
	        node.usedBytes = 0;
	      } else {
	        var oldContents = node.contents;
	        node.contents = new Uint8Array(newSize);
	        if (oldContents) {
	          node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
	        }
	        node.usedBytes = newSize;
	      }
	    },
	    node_ops: {
	      getattr: function getattr(node) {
	        var attr = {};
	        attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
	        attr.ino = node.id;
	        attr.mode = node.mode;
	        attr.nlink = 1;
	        attr.uid = 0;
	        attr.gid = 0;
	        attr.rdev = node.rdev;
	        if (FS.isDir(node.mode)) {
	          attr.size = 4096;
	        } else if (FS.isFile(node.mode)) {
	          attr.size = node.usedBytes;
	        } else if (FS.isLink(node.mode)) {
	          attr.size = node.link.length;
	        } else {
	          attr.size = 0;
	        }
	        attr.atime = new Date(node.timestamp);
	        attr.mtime = new Date(node.timestamp);
	        attr.ctime = new Date(node.timestamp);
	        attr.blksize = 4096;
	        attr.blocks = Math.ceil(attr.size / attr.blksize);
	        return attr;
	      },
	      setattr: function setattr(node, attr) {
	        if (attr.mode !== undefined) {
	          node.mode = attr.mode;
	        }
	        if (attr.timestamp !== undefined) {
	          node.timestamp = attr.timestamp;
	        }
	        if (attr.size !== undefined) {
	          MEMFS.resizeFileStorage(node, attr.size);
	        }
	      },
	      lookup: function lookup(parent, name) {
	        throw FS.genericErrors[44];
	      },
	      mknod: function mknod(parent, name, mode, dev) {
	        return MEMFS.createNode(parent, name, mode, dev);
	      },
	      rename: function rename(old_node, new_dir, new_name) {
	        if (FS.isDir(old_node.mode)) {
	          var new_node;
	          try {
	            new_node = FS.lookupNode(new_dir, new_name);
	          } catch (e) {}
	          if (new_node) {
	            for (var i in new_node.contents) {
	              throw new FS.ErrnoError(55);
	            }
	          }
	        }
	        delete old_node.parent.contents[old_node.name];
	        old_node.parent.timestamp = Date.now();
	        old_node.name = new_name;
	        new_dir.contents[new_name] = old_node;
	        new_dir.timestamp = old_node.parent.timestamp;
	        old_node.parent = new_dir;
	      },
	      unlink: function unlink(parent, name) {
	        delete parent.contents[name];
	        parent.timestamp = Date.now();
	      },
	      rmdir: function rmdir(parent, name) {
	        var node = FS.lookupNode(parent, name);
	        for (var i in node.contents) {
	          throw new FS.ErrnoError(55);
	        }
	        delete parent.contents[name];
	        parent.timestamp = Date.now();
	      },
	      readdir: function readdir(node) {
	        var entries = [".", ".."];
	        for (var key in node.contents) {
	          if (!node.contents.hasOwnProperty(key)) {
	            continue;
	          }
	          entries.push(key);
	        }
	        return entries;
	      },
	      symlink: function symlink(parent, newname, oldpath) {
	        var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
	        node.link = oldpath;
	        return node;
	      },
	      readlink: function readlink(node) {
	        if (!FS.isLink(node.mode)) {
	          throw new FS.ErrnoError(28);
	        }
	        return node.link;
	      }
	    },
	    stream_ops: {
	      read: function read(stream, buffer, offset, length, position) {
	        var contents = stream.node.contents;
	        if (position >= stream.node.usedBytes) return 0;
	        var size = Math.min(stream.node.usedBytes - position, length);
	        if (size > 8 && contents.subarray) {
	          buffer.set(contents.subarray(position, position + size), offset);
	        } else {
	          for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
	        }
	        return size;
	      },
	      write: function write(stream, buffer, offset, length, position, canOwn) {
	        if (!length) return 0;
	        var node = stream.node;
	        node.timestamp = Date.now();
	        if (buffer.subarray && (!node.contents || node.contents.subarray)) {
	          if (canOwn) {
	            node.contents = buffer.subarray(offset, offset + length);
	            node.usedBytes = length;
	            return length;
	          } else if (node.usedBytes === 0 && position === 0) {
	            node.contents = buffer.slice(offset, offset + length);
	            node.usedBytes = length;
	            return length;
	          } else if (position + length <= node.usedBytes) {
	            node.contents.set(buffer.subarray(offset, offset + length), position);
	            return length;
	          }
	        }
	        MEMFS.expandFileStorage(node, position + length);
	        if (node.contents.subarray && buffer.subarray) {
	          node.contents.set(buffer.subarray(offset, offset + length), position);
	        } else {
	          for (var i = 0; i < length; i++) {
	            node.contents[position + i] = buffer[offset + i];
	          }
	        }
	        node.usedBytes = Math.max(node.usedBytes, position + length);
	        return length;
	      },
	      llseek: function llseek(stream, offset, whence) {
	        var position = offset;
	        if (whence === 1) {
	          position += stream.position;
	        } else if (whence === 2) {
	          if (FS.isFile(stream.node.mode)) {
	            position += stream.node.usedBytes;
	          }
	        }
	        if (position < 0) {
	          throw new FS.ErrnoError(28);
	        }
	        return position;
	      },
	      allocate: function allocate(stream, offset, length) {
	        MEMFS.expandFileStorage(stream.node, offset + length);
	        stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
	      },
	      mmap: function mmap(stream, length, position, prot, flags) {
	        if (!FS.isFile(stream.node.mode)) {
	          throw new FS.ErrnoError(43);
	        }
	        var ptr;
	        var allocated;
	        var contents = stream.node.contents;
	        if (!(flags & 2) && contents.buffer === buffer) {
	          allocated = false;
	          ptr = contents.byteOffset;
	        } else {
	          if (position > 0 || position + length < contents.length) {
	            if (contents.subarray) {
	              contents = contents.subarray(position, position + length);
	            } else {
	              contents = Array.prototype.slice.call(contents, position, position + length);
	            }
	          }
	          allocated = true;
	          ptr = mmapAlloc(length);
	          if (!ptr) {
	            throw new FS.ErrnoError(48);
	          }
	          HEAP8.set(contents, ptr);
	        }
	        return {
	          ptr: ptr,
	          allocated: allocated
	        };
	      },
	      msync: function msync(stream, buffer, offset, length, mmapFlags) {
	        if (!FS.isFile(stream.node.mode)) {
	          throw new FS.ErrnoError(43);
	        }
	        if (mmapFlags & 2) {
	          return 0;
	        }
	        MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
	        return 0;
	      }
	    }
	  };
	  function asyncLoad(url, onload, onerror, noRunDep) {
	    var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
	    readAsync(url, function (arrayBuffer) {
	      assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
	      onload(new Uint8Array(arrayBuffer));
	      if (dep) removeRunDependency();
	    }, function (event) {
	      if (onerror) {
	        onerror();
	      } else {
	        throw 'Loading data file "' + url + '" failed.';
	      }
	    });
	    if (dep) addRunDependency();
	  }
	  var FS = {
	    root: null,
	    mounts: [],
	    devices: {},
	    streams: [],
	    nextInode: 1,
	    nameTable: null,
	    currentPath: "/",
	    initialized: false,
	    ignorePermissions: true,
	    ErrnoError: null,
	    genericErrors: {},
	    filesystems: null,
	    syncFSRequests: 0,
	    lookupPath: function lookupPath(path) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      path = PATH_FS.resolve(FS.cwd(), path);
	      if (!path) return {
	        path: "",
	        node: null
	      };
	      var defaults = {
	        follow_mount: true,
	        recurse_count: 0
	      };
	      opts = Object.assign(defaults, opts);
	      if (opts.recurse_count > 8) {
	        throw new FS.ErrnoError(32);
	      }
	      var parts = PATH.normalizeArray(path.split("/").filter(function (p) {
	        return !!p;
	      }), false);
	      var current = FS.root;
	      var current_path = "/";
	      for (var i = 0; i < parts.length; i++) {
	        var islast = i === parts.length - 1;
	        if (islast && opts.parent) {
	          break;
	        }
	        current = FS.lookupNode(current, parts[i]);
	        current_path = PATH.join2(current_path, parts[i]);
	        if (FS.isMountpoint(current)) {
	          if (!islast || islast && opts.follow_mount) {
	            current = current.mounted.root;
	          }
	        }
	        if (!islast || opts.follow) {
	          var count = 0;
	          while (FS.isLink(current.mode)) {
	            var link = FS.readlink(current_path);
	            current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
	            var lookup = FS.lookupPath(current_path, {
	              recurse_count: opts.recurse_count + 1
	            });
	            current = lookup.node;
	            if (count++ > 40) {
	              throw new FS.ErrnoError(32);
	            }
	          }
	        }
	      }
	      return {
	        path: current_path,
	        node: current
	      };
	    },
	    getPath: function getPath(node) {
	      var path;
	      while (true) {
	        if (FS.isRoot(node)) {
	          var mount = node.mount.mountpoint;
	          if (!path) return mount;
	          return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
	        }
	        path = path ? node.name + "/" + path : node.name;
	        node = node.parent;
	      }
	    },
	    hashName: function hashName(parentid, name) {
	      var hash = 0;
	      for (var i = 0; i < name.length; i++) {
	        hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
	      }
	      return (parentid + hash >>> 0) % FS.nameTable.length;
	    },
	    hashAddNode: function hashAddNode(node) {
	      var hash = FS.hashName(node.parent.id, node.name);
	      node.name_next = FS.nameTable[hash];
	      FS.nameTable[hash] = node;
	    },
	    hashRemoveNode: function hashRemoveNode(node) {
	      var hash = FS.hashName(node.parent.id, node.name);
	      if (FS.nameTable[hash] === node) {
	        FS.nameTable[hash] = node.name_next;
	      } else {
	        var current = FS.nameTable[hash];
	        while (current) {
	          if (current.name_next === node) {
	            current.name_next = node.name_next;
	            break;
	          }
	          current = current.name_next;
	        }
	      }
	    },
	    lookupNode: function lookupNode(parent, name) {
	      var errCode = FS.mayLookup(parent);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode, parent);
	      }
	      var hash = FS.hashName(parent.id, name);
	      for (var node = FS.nameTable[hash]; node; node = node.name_next) {
	        var nodeName = node.name;
	        if (node.parent.id === parent.id && nodeName === name) {
	          return node;
	        }
	      }
	      return FS.lookup(parent, name);
	    },
	    createNode: function createNode(parent, name, mode, rdev) {
	      var node = new FS.FSNode(parent, name, mode, rdev);
	      FS.hashAddNode(node);
	      return node;
	    },
	    destroyNode: function destroyNode(node) {
	      FS.hashRemoveNode(node);
	    },
	    isRoot: function isRoot(node) {
	      return node === node.parent;
	    },
	    isMountpoint: function isMountpoint(node) {
	      return !!node.mounted;
	    },
	    isFile: function isFile(mode) {
	      return (mode & 61440) === 32768;
	    },
	    isDir: function isDir(mode) {
	      return (mode & 61440) === 16384;
	    },
	    isLink: function isLink(mode) {
	      return (mode & 61440) === 40960;
	    },
	    isChrdev: function isChrdev(mode) {
	      return (mode & 61440) === 8192;
	    },
	    isBlkdev: function isBlkdev(mode) {
	      return (mode & 61440) === 24576;
	    },
	    isFIFO: function isFIFO(mode) {
	      return (mode & 61440) === 4096;
	    },
	    isSocket: function isSocket(mode) {
	      return (mode & 49152) === 49152;
	    },
	    flagModes: {
	      "r": 0,
	      "r+": 2,
	      "w": 577,
	      "w+": 578,
	      "a": 1089,
	      "a+": 1090
	    },
	    modeStringToFlags: function modeStringToFlags(str) {
	      var flags = FS.flagModes[str];
	      if (typeof flags == "undefined") {
	        throw new Error("Unknown file open mode: " + str);
	      }
	      return flags;
	    },
	    flagsToPermissionString: function flagsToPermissionString(flag) {
	      var perms = ["r", "w", "rw"][flag & 3];
	      if (flag & 512) {
	        perms += "w";
	      }
	      return perms;
	    },
	    nodePermissions: function nodePermissions(node, perms) {
	      if (FS.ignorePermissions) {
	        return 0;
	      }
	      if (perms.includes("r") && !(node.mode & 292)) {
	        return 2;
	      } else if (perms.includes("w") && !(node.mode & 146)) {
	        return 2;
	      } else if (perms.includes("x") && !(node.mode & 73)) {
	        return 2;
	      }
	      return 0;
	    },
	    mayLookup: function mayLookup(dir) {
	      var errCode = FS.nodePermissions(dir, "x");
	      if (errCode) return errCode;
	      if (!dir.node_ops.lookup) return 2;
	      return 0;
	    },
	    mayCreate: function mayCreate(dir, name) {
	      try {
	        var node = FS.lookupNode(dir, name);
	        return 20;
	      } catch (e) {}
	      return FS.nodePermissions(dir, "wx");
	    },
	    mayDelete: function mayDelete(dir, name, isdir) {
	      var node;
	      try {
	        node = FS.lookupNode(dir, name);
	      } catch (e) {
	        return e.errno;
	      }
	      var errCode = FS.nodePermissions(dir, "wx");
	      if (errCode) {
	        return errCode;
	      }
	      if (isdir) {
	        if (!FS.isDir(node.mode)) {
	          return 54;
	        }
	        if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
	          return 10;
	        }
	      } else {
	        if (FS.isDir(node.mode)) {
	          return 31;
	        }
	      }
	      return 0;
	    },
	    mayOpen: function mayOpen(node, flags) {
	      if (!node) {
	        return 44;
	      }
	      if (FS.isLink(node.mode)) {
	        return 32;
	      } else if (FS.isDir(node.mode)) {
	        if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
	          return 31;
	        }
	      }
	      return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
	    },
	    MAX_OPEN_FDS: 4096,
	    nextfd: function nextfd() {
	      var fd_start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var fd_end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FS.MAX_OPEN_FDS;
	      for (var fd = fd_start; fd <= fd_end; fd++) {
	        if (!FS.streams[fd]) {
	          return fd;
	        }
	      }
	      throw new FS.ErrnoError(33);
	    },
	    getStream: function getStream(fd) {
	      return FS.streams[fd];
	    },
	    createStream: function createStream(stream, fd_start, fd_end) {
	      if (!FS.FSStream) {
	        FS.FSStream = function () {
	          this.shared = {};
	        };
	        FS.FSStream.prototype = {};
	        Object.defineProperties(FS.FSStream.prototype, {
	          object: {
	            get: function get() {
	              return this.node;
	            },
	            set: function set(val) {
	              this.node = val;
	            }
	          },
	          isRead: {
	            get: function get() {
	              return (this.flags & 2097155) !== 1;
	            }
	          },
	          isWrite: {
	            get: function get() {
	              return (this.flags & 2097155) !== 0;
	            }
	          },
	          isAppend: {
	            get: function get() {
	              return this.flags & 1024;
	            }
	          },
	          flags: {
	            get: function get() {
	              return this.shared.flags;
	            },
	            set: function set(val) {
	              this.shared.flags = val;
	            }
	          },
	          position: {
	            get: function get() {
	              return this.shared.position;
	            },
	            set: function set(val) {
	              this.shared.position = val;
	            }
	          }
	        });
	      }
	      stream = Object.assign(new FS.FSStream(), stream);
	      var fd = FS.nextfd(fd_start, fd_end);
	      stream.fd = fd;
	      FS.streams[fd] = stream;
	      return stream;
	    },
	    closeStream: function closeStream(fd) {
	      FS.streams[fd] = null;
	    },
	    chrdev_stream_ops: {
	      open: function open(stream) {
	        var device = FS.getDevice(stream.node.rdev);
	        stream.stream_ops = device.stream_ops;
	        if (stream.stream_ops.open) {
	          stream.stream_ops.open(stream);
	        }
	      },
	      llseek: function llseek() {
	        throw new FS.ErrnoError(70);
	      }
	    },
	    major: function major(dev) {
	      return dev >> 8;
	    },
	    minor: function minor(dev) {
	      return dev & 255;
	    },
	    makedev: function makedev(ma, mi) {
	      return ma << 8 | mi;
	    },
	    registerDevice: function registerDevice(dev, ops) {
	      FS.devices[dev] = {
	        stream_ops: ops
	      };
	    },
	    getDevice: function getDevice(dev) {
	      return FS.devices[dev];
	    },
	    getMounts: function getMounts(mount) {
	      var mounts = [];
	      var check = [mount];
	      while (check.length) {
	        var m = check.pop();
	        mounts.push(m);
	        check.push.apply(check, m.mounts);
	      }
	      return mounts;
	    },
	    syncfs: function syncfs(populate, callback) {
	      if (typeof populate == "function") {
	        callback = populate;
	        populate = false;
	      }
	      FS.syncFSRequests++;
	      if (FS.syncFSRequests > 1) {
	        err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
	      }
	      var mounts = FS.getMounts(FS.root.mount);
	      var completed = 0;
	      function doCallback(errCode) {
	        FS.syncFSRequests--;
	        return callback(errCode);
	      }
	      function done(errCode) {
	        if (errCode) {
	          if (!done.errored) {
	            done.errored = true;
	            return doCallback(errCode);
	          }
	          return;
	        }
	        if (++completed >= mounts.length) {
	          doCallback(null);
	        }
	      }
	      mounts.forEach(function (mount) {
	        if (!mount.type.syncfs) {
	          return done(null);
	        }
	        mount.type.syncfs(mount, populate, done);
	      });
	    },
	    mount: function mount(type, opts, mountpoint) {
	      var root = mountpoint === "/";
	      var pseudo = !mountpoint;
	      var node;
	      if (root && FS.root) {
	        throw new FS.ErrnoError(10);
	      } else if (!root && !pseudo) {
	        var lookup = FS.lookupPath(mountpoint, {
	          follow_mount: false
	        });
	        mountpoint = lookup.path;
	        node = lookup.node;
	        if (FS.isMountpoint(node)) {
	          throw new FS.ErrnoError(10);
	        }
	        if (!FS.isDir(node.mode)) {
	          throw new FS.ErrnoError(54);
	        }
	      }
	      var mount = {
	        type: type,
	        opts: opts,
	        mountpoint: mountpoint,
	        mounts: []
	      };
	      var mountRoot = type.mount(mount);
	      mountRoot.mount = mount;
	      mount.root = mountRoot;
	      if (root) {
	        FS.root = mountRoot;
	      } else if (node) {
	        node.mounted = mount;
	        if (node.mount) {
	          node.mount.mounts.push(mount);
	        }
	      }
	      return mountRoot;
	    },
	    unmount: function unmount(mountpoint) {
	      var lookup = FS.lookupPath(mountpoint, {
	        follow_mount: false
	      });
	      if (!FS.isMountpoint(lookup.node)) {
	        throw new FS.ErrnoError(28);
	      }
	      var node = lookup.node;
	      var mount = node.mounted;
	      var mounts = FS.getMounts(mount);
	      Object.keys(FS.nameTable).forEach(function (hash) {
	        var current = FS.nameTable[hash];
	        while (current) {
	          var next = current.name_next;
	          if (mounts.includes(current.mount)) {
	            FS.destroyNode(current);
	          }
	          current = next;
	        }
	      });
	      node.mounted = null;
	      var idx = node.mount.mounts.indexOf(mount);
	      node.mount.mounts.splice(idx, 1);
	    },
	    lookup: function lookup(parent, name) {
	      return parent.node_ops.lookup(parent, name);
	    },
	    mknod: function mknod(path, mode, dev) {
	      var lookup = FS.lookupPath(path, {
	        parent: true
	      });
	      var parent = lookup.node;
	      var name = PATH.basename(path);
	      if (!name || name === "." || name === "..") {
	        throw new FS.ErrnoError(28);
	      }
	      var errCode = FS.mayCreate(parent, name);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      if (!parent.node_ops.mknod) {
	        throw new FS.ErrnoError(63);
	      }
	      return parent.node_ops.mknod(parent, name, mode, dev);
	    },
	    create: function create(path, mode) {
	      mode = mode !== undefined ? mode : 438;
	      mode &= 4095;
	      mode |= 32768;
	      return FS.mknod(path, mode, 0);
	    },
	    mkdir: function mkdir(path, mode) {
	      mode = mode !== undefined ? mode : 511;
	      mode &= 511 | 512;
	      mode |= 16384;
	      return FS.mknod(path, mode, 0);
	    },
	    mkdirTree: function mkdirTree(path, mode) {
	      var dirs = path.split("/");
	      var d = "";
	      for (var i = 0; i < dirs.length; ++i) {
	        if (!dirs[i]) continue;
	        d += "/" + dirs[i];
	        try {
	          FS.mkdir(d, mode);
	        } catch (e) {
	          if (e.errno != 20) throw e;
	        }
	      }
	    },
	    mkdev: function mkdev(path, mode, dev) {
	      if (typeof dev == "undefined") {
	        dev = mode;
	        mode = 438;
	      }
	      mode |= 8192;
	      return FS.mknod(path, mode, dev);
	    },
	    symlink: function symlink(oldpath, newpath) {
	      if (!PATH_FS.resolve(oldpath)) {
	        throw new FS.ErrnoError(44);
	      }
	      var lookup = FS.lookupPath(newpath, {
	        parent: true
	      });
	      var parent = lookup.node;
	      if (!parent) {
	        throw new FS.ErrnoError(44);
	      }
	      var newname = PATH.basename(newpath);
	      var errCode = FS.mayCreate(parent, newname);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      if (!parent.node_ops.symlink) {
	        throw new FS.ErrnoError(63);
	      }
	      return parent.node_ops.symlink(parent, newname, oldpath);
	    },
	    rename: function rename(old_path, new_path) {
	      var old_dirname = PATH.dirname(old_path);
	      var new_dirname = PATH.dirname(new_path);
	      var old_name = PATH.basename(old_path);
	      var new_name = PATH.basename(new_path);
	      var lookup, old_dir, new_dir;
	      lookup = FS.lookupPath(old_path, {
	        parent: true
	      });
	      old_dir = lookup.node;
	      lookup = FS.lookupPath(new_path, {
	        parent: true
	      });
	      new_dir = lookup.node;
	      if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
	      if (old_dir.mount !== new_dir.mount) {
	        throw new FS.ErrnoError(75);
	      }
	      var old_node = FS.lookupNode(old_dir, old_name);
	      var relative = PATH_FS.relative(old_path, new_dirname);
	      if (relative.charAt(0) !== ".") {
	        throw new FS.ErrnoError(28);
	      }
	      relative = PATH_FS.relative(new_path, old_dirname);
	      if (relative.charAt(0) !== ".") {
	        throw new FS.ErrnoError(55);
	      }
	      var new_node;
	      try {
	        new_node = FS.lookupNode(new_dir, new_name);
	      } catch (e) {}
	      if (old_node === new_node) {
	        return;
	      }
	      var isdir = FS.isDir(old_node.mode);
	      var errCode = FS.mayDelete(old_dir, old_name, isdir);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      if (!old_dir.node_ops.rename) {
	        throw new FS.ErrnoError(63);
	      }
	      if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
	        throw new FS.ErrnoError(10);
	      }
	      if (new_dir !== old_dir) {
	        errCode = FS.nodePermissions(old_dir, "w");
	        if (errCode) {
	          throw new FS.ErrnoError(errCode);
	        }
	      }
	      FS.hashRemoveNode(old_node);
	      try {
	        old_dir.node_ops.rename(old_node, new_dir, new_name);
	      } catch (e) {
	        throw e;
	      } finally {
	        FS.hashAddNode(old_node);
	      }
	    },
	    rmdir: function rmdir(path) {
	      var lookup = FS.lookupPath(path, {
	        parent: true
	      });
	      var parent = lookup.node;
	      var name = PATH.basename(path);
	      var node = FS.lookupNode(parent, name);
	      var errCode = FS.mayDelete(parent, name, true);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      if (!parent.node_ops.rmdir) {
	        throw new FS.ErrnoError(63);
	      }
	      if (FS.isMountpoint(node)) {
	        throw new FS.ErrnoError(10);
	      }
	      parent.node_ops.rmdir(parent, name);
	      FS.destroyNode(node);
	    },
	    readdir: function readdir(path) {
	      var lookup = FS.lookupPath(path, {
	        follow: true
	      });
	      var node = lookup.node;
	      if (!node.node_ops.readdir) {
	        throw new FS.ErrnoError(54);
	      }
	      return node.node_ops.readdir(node);
	    },
	    unlink: function unlink(path) {
	      var lookup = FS.lookupPath(path, {
	        parent: true
	      });
	      var parent = lookup.node;
	      if (!parent) {
	        throw new FS.ErrnoError(44);
	      }
	      var name = PATH.basename(path);
	      var node = FS.lookupNode(parent, name);
	      var errCode = FS.mayDelete(parent, name, false);
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      if (!parent.node_ops.unlink) {
	        throw new FS.ErrnoError(63);
	      }
	      if (FS.isMountpoint(node)) {
	        throw new FS.ErrnoError(10);
	      }
	      parent.node_ops.unlink(parent, name);
	      FS.destroyNode(node);
	    },
	    readlink: function readlink(path) {
	      var lookup = FS.lookupPath(path);
	      var link = lookup.node;
	      if (!link) {
	        throw new FS.ErrnoError(44);
	      }
	      if (!link.node_ops.readlink) {
	        throw new FS.ErrnoError(28);
	      }
	      return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
	    },
	    stat: function stat(path, dontFollow) {
	      var lookup = FS.lookupPath(path, {
	        follow: !dontFollow
	      });
	      var node = lookup.node;
	      if (!node) {
	        throw new FS.ErrnoError(44);
	      }
	      if (!node.node_ops.getattr) {
	        throw new FS.ErrnoError(63);
	      }
	      return node.node_ops.getattr(node);
	    },
	    lstat: function lstat(path) {
	      return FS.stat(path, true);
	    },
	    chmod: function chmod(path, mode, dontFollow) {
	      var node;
	      if (typeof path == "string") {
	        var lookup = FS.lookupPath(path, {
	          follow: !dontFollow
	        });
	        node = lookup.node;
	      } else {
	        node = path;
	      }
	      if (!node.node_ops.setattr) {
	        throw new FS.ErrnoError(63);
	      }
	      node.node_ops.setattr(node, {
	        mode: mode & 4095 | node.mode & ~4095,
	        timestamp: Date.now()
	      });
	    },
	    lchmod: function lchmod(path, mode) {
	      FS.chmod(path, mode, true);
	    },
	    fchmod: function fchmod(fd, mode) {
	      var stream = FS.getStream(fd);
	      if (!stream) {
	        throw new FS.ErrnoError(8);
	      }
	      FS.chmod(stream.node, mode);
	    },
	    chown: function chown(path, uid, gid, dontFollow) {
	      var node;
	      if (typeof path == "string") {
	        var lookup = FS.lookupPath(path, {
	          follow: !dontFollow
	        });
	        node = lookup.node;
	      } else {
	        node = path;
	      }
	      if (!node.node_ops.setattr) {
	        throw new FS.ErrnoError(63);
	      }
	      node.node_ops.setattr(node, {
	        timestamp: Date.now()
	      });
	    },
	    lchown: function lchown(path, uid, gid) {
	      FS.chown(path, uid, gid, true);
	    },
	    fchown: function fchown(fd, uid, gid) {
	      var stream = FS.getStream(fd);
	      if (!stream) {
	        throw new FS.ErrnoError(8);
	      }
	      FS.chown(stream.node, uid, gid);
	    },
	    truncate: function truncate(path, len) {
	      if (len < 0) {
	        throw new FS.ErrnoError(28);
	      }
	      var node;
	      if (typeof path == "string") {
	        var lookup = FS.lookupPath(path, {
	          follow: true
	        });
	        node = lookup.node;
	      } else {
	        node = path;
	      }
	      if (!node.node_ops.setattr) {
	        throw new FS.ErrnoError(63);
	      }
	      if (FS.isDir(node.mode)) {
	        throw new FS.ErrnoError(31);
	      }
	      if (!FS.isFile(node.mode)) {
	        throw new FS.ErrnoError(28);
	      }
	      var errCode = FS.nodePermissions(node, "w");
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      node.node_ops.setattr(node, {
	        size: len,
	        timestamp: Date.now()
	      });
	    },
	    ftruncate: function ftruncate(fd, len) {
	      var stream = FS.getStream(fd);
	      if (!stream) {
	        throw new FS.ErrnoError(8);
	      }
	      if ((stream.flags & 2097155) === 0) {
	        throw new FS.ErrnoError(28);
	      }
	      FS.truncate(stream.node, len);
	    },
	    utime: function utime(path, atime, mtime) {
	      var lookup = FS.lookupPath(path, {
	        follow: true
	      });
	      var node = lookup.node;
	      node.node_ops.setattr(node, {
	        timestamp: Math.max(atime, mtime)
	      });
	    },
	    open: function open(path, flags, mode) {
	      if (path === "") {
	        throw new FS.ErrnoError(44);
	      }
	      flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
	      mode = typeof mode == "undefined" ? 438 : mode;
	      if (flags & 64) {
	        mode = mode & 4095 | 32768;
	      } else {
	        mode = 0;
	      }
	      var node;
	      if (_typeof(path) == "object") {
	        node = path;
	      } else {
	        path = PATH.normalize(path);
	        try {
	          var lookup = FS.lookupPath(path, {
	            follow: !(flags & 131072)
	          });
	          node = lookup.node;
	        } catch (e) {}
	      }
	      var created = false;
	      if (flags & 64) {
	        if (node) {
	          if (flags & 128) {
	            throw new FS.ErrnoError(20);
	          }
	        } else {
	          node = FS.mknod(path, mode, 0);
	          created = true;
	        }
	      }
	      if (!node) {
	        throw new FS.ErrnoError(44);
	      }
	      if (FS.isChrdev(node.mode)) {
	        flags &= ~512;
	      }
	      if (flags & 65536 && !FS.isDir(node.mode)) {
	        throw new FS.ErrnoError(54);
	      }
	      if (!created) {
	        var errCode = FS.mayOpen(node, flags);
	        if (errCode) {
	          throw new FS.ErrnoError(errCode);
	        }
	      }
	      if (flags & 512 && !created) {
	        FS.truncate(node, 0);
	      }
	      flags &= ~(128 | 512 | 131072);
	      var stream = FS.createStream({
	        node: node,
	        path: FS.getPath(node),
	        flags: flags,
	        seekable: true,
	        position: 0,
	        stream_ops: node.stream_ops,
	        ungotten: [],
	        error: false
	      });
	      if (stream.stream_ops.open) {
	        stream.stream_ops.open(stream);
	      }
	      if (Module["logReadFiles"] && !(flags & 1)) {
	        if (!FS.readFiles) FS.readFiles = {};
	        if (!(path in FS.readFiles)) {
	          FS.readFiles[path] = 1;
	        }
	      }
	      return stream;
	    },
	    close: function close(stream) {
	      if (FS.isClosed(stream)) {
	        throw new FS.ErrnoError(8);
	      }
	      if (stream.getdents) stream.getdents = null;
	      try {
	        if (stream.stream_ops.close) {
	          stream.stream_ops.close(stream);
	        }
	      } catch (e) {
	        throw e;
	      } finally {
	        FS.closeStream(stream.fd);
	      }
	      stream.fd = null;
	    },
	    isClosed: function isClosed(stream) {
	      return stream.fd === null;
	    },
	    llseek: function llseek(stream, offset, whence) {
	      if (FS.isClosed(stream)) {
	        throw new FS.ErrnoError(8);
	      }
	      if (!stream.seekable || !stream.stream_ops.llseek) {
	        throw new FS.ErrnoError(70);
	      }
	      if (whence != 0 && whence != 1 && whence != 2) {
	        throw new FS.ErrnoError(28);
	      }
	      stream.position = stream.stream_ops.llseek(stream, offset, whence);
	      stream.ungotten = [];
	      return stream.position;
	    },
	    read: function read(stream, buffer, offset, length, position) {
	      if (length < 0 || position < 0) {
	        throw new FS.ErrnoError(28);
	      }
	      if (FS.isClosed(stream)) {
	        throw new FS.ErrnoError(8);
	      }
	      if ((stream.flags & 2097155) === 1) {
	        throw new FS.ErrnoError(8);
	      }
	      if (FS.isDir(stream.node.mode)) {
	        throw new FS.ErrnoError(31);
	      }
	      if (!stream.stream_ops.read) {
	        throw new FS.ErrnoError(28);
	      }
	      var seeking = typeof position != "undefined";
	      if (!seeking) {
	        position = stream.position;
	      } else if (!stream.seekable) {
	        throw new FS.ErrnoError(70);
	      }
	      var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
	      if (!seeking) stream.position += bytesRead;
	      return bytesRead;
	    },
	    write: function write(stream, buffer, offset, length, position, canOwn) {
	      if (length < 0 || position < 0) {
	        throw new FS.ErrnoError(28);
	      }
	      if (FS.isClosed(stream)) {
	        throw new FS.ErrnoError(8);
	      }
	      if ((stream.flags & 2097155) === 0) {
	        throw new FS.ErrnoError(8);
	      }
	      if (FS.isDir(stream.node.mode)) {
	        throw new FS.ErrnoError(31);
	      }
	      if (!stream.stream_ops.write) {
	        throw new FS.ErrnoError(28);
	      }
	      if (stream.seekable && stream.flags & 1024) {
	        FS.llseek(stream, 0, 2);
	      }
	      var seeking = typeof position != "undefined";
	      if (!seeking) {
	        position = stream.position;
	      } else if (!stream.seekable) {
	        throw new FS.ErrnoError(70);
	      }
	      var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
	      if (!seeking) stream.position += bytesWritten;
	      return bytesWritten;
	    },
	    allocate: function allocate(stream, offset, length) {
	      if (FS.isClosed(stream)) {
	        throw new FS.ErrnoError(8);
	      }
	      if (offset < 0 || length <= 0) {
	        throw new FS.ErrnoError(28);
	      }
	      if ((stream.flags & 2097155) === 0) {
	        throw new FS.ErrnoError(8);
	      }
	      if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
	        throw new FS.ErrnoError(43);
	      }
	      if (!stream.stream_ops.allocate) {
	        throw new FS.ErrnoError(138);
	      }
	      stream.stream_ops.allocate(stream, offset, length);
	    },
	    mmap: function mmap(stream, length, position, prot, flags) {
	      if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
	        throw new FS.ErrnoError(2);
	      }
	      if ((stream.flags & 2097155) === 1) {
	        throw new FS.ErrnoError(2);
	      }
	      if (!stream.stream_ops.mmap) {
	        throw new FS.ErrnoError(43);
	      }
	      return stream.stream_ops.mmap(stream, length, position, prot, flags);
	    },
	    msync: function msync(stream, buffer, offset, length, mmapFlags) {
	      if (!stream || !stream.stream_ops.msync) {
	        return 0;
	      }
	      return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
	    },
	    munmap: function munmap(stream) {
	      return 0;
	    },
	    ioctl: function ioctl(stream, cmd, arg) {
	      if (!stream.stream_ops.ioctl) {
	        throw new FS.ErrnoError(59);
	      }
	      return stream.stream_ops.ioctl(stream, cmd, arg);
	    },
	    readFile: function readFile(path) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      opts.flags = opts.flags || 0;
	      opts.encoding = opts.encoding || "binary";
	      if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
	        throw new Error('Invalid encoding type "' + opts.encoding + '"');
	      }
	      var ret;
	      var stream = FS.open(path, opts.flags);
	      var stat = FS.stat(path);
	      var length = stat.size;
	      var buf = new Uint8Array(length);
	      FS.read(stream, buf, 0, length, 0);
	      if (opts.encoding === "utf8") {
	        ret = UTF8ArrayToString(buf, 0);
	      } else if (opts.encoding === "binary") {
	        ret = buf;
	      }
	      FS.close(stream);
	      return ret;
	    },
	    writeFile: function writeFile(path, data) {
	      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      opts.flags = opts.flags || 577;
	      var stream = FS.open(path, opts.flags, opts.mode);
	      if (typeof data == "string") {
	        var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
	        var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
	        FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
	      } else if (ArrayBuffer.isView(data)) {
	        FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
	      } else {
	        throw new Error("Unsupported data type");
	      }
	      FS.close(stream);
	    },
	    cwd: function cwd() {
	      return FS.currentPath;
	    },
	    chdir: function chdir(path) {
	      var lookup = FS.lookupPath(path, {
	        follow: true
	      });
	      if (lookup.node === null) {
	        throw new FS.ErrnoError(44);
	      }
	      if (!FS.isDir(lookup.node.mode)) {
	        throw new FS.ErrnoError(54);
	      }
	      var errCode = FS.nodePermissions(lookup.node, "x");
	      if (errCode) {
	        throw new FS.ErrnoError(errCode);
	      }
	      FS.currentPath = lookup.path;
	    },
	    createDefaultDirectories: function createDefaultDirectories() {
	      FS.mkdir("/tmp");
	      FS.mkdir("/home");
	      FS.mkdir("/home/web_user");
	    },
	    createDefaultDevices: function createDefaultDevices() {
	      FS.mkdir("/dev");
	      FS.registerDevice(FS.makedev(1, 3), {
	        read: function read() {
	          return 0;
	        },
	        write: function write(stream, buffer, offset, length, pos) {
	          return length;
	        }
	      });
	      FS.mkdev("/dev/null", FS.makedev(1, 3));
	      TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
	      TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
	      FS.mkdev("/dev/tty", FS.makedev(5, 0));
	      FS.mkdev("/dev/tty1", FS.makedev(6, 0));
	      var random_device = getRandomDevice();
	      FS.createDevice("/dev", "random", random_device);
	      FS.createDevice("/dev", "urandom", random_device);
	      FS.mkdir("/dev/shm");
	      FS.mkdir("/dev/shm/tmp");
	    },
	    createSpecialDirectories: function createSpecialDirectories() {
	      FS.mkdir("/proc");
	      var proc_self = FS.mkdir("/proc/self");
	      FS.mkdir("/proc/self/fd");
	      FS.mount({
	        mount: function mount() {
	          var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
	          node.node_ops = {
	            lookup: function lookup(parent, name) {
	              var fd = +name;
	              var stream = FS.getStream(fd);
	              if (!stream) throw new FS.ErrnoError(8);
	              var ret = {
	                parent: null,
	                mount: {
	                  mountpoint: "fake"
	                },
	                node_ops: {
	                  readlink: function readlink() {
	                    return stream.path;
	                  }
	                }
	              };
	              ret.parent = ret;
	              return ret;
	            }
	          };
	          return node;
	        }
	      }, {}, "/proc/self/fd");
	    },
	    createStandardStreams: function createStandardStreams() {
	      if (Module["stdin"]) {
	        FS.createDevice("/dev", "stdin", Module["stdin"]);
	      } else {
	        FS.symlink("/dev/tty", "/dev/stdin");
	      }
	      if (Module["stdout"]) {
	        FS.createDevice("/dev", "stdout", null, Module["stdout"]);
	      } else {
	        FS.symlink("/dev/tty", "/dev/stdout");
	      }
	      if (Module["stderr"]) {
	        FS.createDevice("/dev", "stderr", null, Module["stderr"]);
	      } else {
	        FS.symlink("/dev/tty1", "/dev/stderr");
	      }
	      FS.open("/dev/stdin", 0);
	      FS.open("/dev/stdout", 1);
	      FS.open("/dev/stderr", 1);
	    },
	    ensureErrnoError: function ensureErrnoError() {
	      if (FS.ErrnoError) return;
	      FS.ErrnoError = function ErrnoError(errno, node) {
	        this.node = node;
	        this.setErrno = function (errno) {
	          this.errno = errno;
	        };
	        this.setErrno(errno);
	        this.message = "FS error";
	      };
	      FS.ErrnoError.prototype = new Error();
	      FS.ErrnoError.prototype.constructor = FS.ErrnoError;
	      [44].forEach(function (code) {
	        FS.genericErrors[code] = new FS.ErrnoError(code);
	        FS.genericErrors[code].stack = "<generic error, no stack>";
	      });
	    },
	    staticInit: function staticInit() {
	      FS.ensureErrnoError();
	      FS.nameTable = new Array(4096);
	      FS.mount(MEMFS, {}, "/");
	      FS.createDefaultDirectories();
	      FS.createDefaultDevices();
	      FS.createSpecialDirectories();
	      FS.filesystems = {
	        "MEMFS": MEMFS
	      };
	    },
	    init: function init(input, output, error) {
	      FS.init.initialized = true;
	      FS.ensureErrnoError();
	      Module["stdin"] = input || Module["stdin"];
	      Module["stdout"] = output || Module["stdout"];
	      Module["stderr"] = error || Module["stderr"];
	      FS.createStandardStreams();
	    },
	    quit: function quit() {
	      FS.init.initialized = false;
	      for (var i = 0; i < FS.streams.length; i++) {
	        var stream = FS.streams[i];
	        if (!stream) {
	          continue;
	        }
	        FS.close(stream);
	      }
	    },
	    getMode: function getMode(canRead, canWrite) {
	      var mode = 0;
	      if (canRead) mode |= 292 | 73;
	      if (canWrite) mode |= 146;
	      return mode;
	    },
	    findObject: function findObject(path, dontResolveLastLink) {
	      var ret = FS.analyzePath(path, dontResolveLastLink);
	      if (!ret.exists) {
	        return null;
	      }
	      return ret.object;
	    },
	    analyzePath: function analyzePath(path, dontResolveLastLink) {
	      try {
	        var lookup = FS.lookupPath(path, {
	          follow: !dontResolveLastLink
	        });
	        path = lookup.path;
	      } catch (e) {}
	      var ret = {
	        isRoot: false,
	        exists: false,
	        error: 0,
	        name: null,
	        path: null,
	        object: null,
	        parentExists: false,
	        parentPath: null,
	        parentObject: null
	      };
	      try {
	        var lookup = FS.lookupPath(path, {
	          parent: true
	        });
	        ret.parentExists = true;
	        ret.parentPath = lookup.path;
	        ret.parentObject = lookup.node;
	        ret.name = PATH.basename(path);
	        lookup = FS.lookupPath(path, {
	          follow: !dontResolveLastLink
	        });
	        ret.exists = true;
	        ret.path = lookup.path;
	        ret.object = lookup.node;
	        ret.name = lookup.node.name;
	        ret.isRoot = lookup.path === "/";
	      } catch (e) {
	        ret.error = e.errno;
	      }
	      return ret;
	    },
	    createPath: function createPath(parent, path, canRead, canWrite) {
	      parent = typeof parent == "string" ? parent : FS.getPath(parent);
	      var parts = path.split("/").reverse();
	      while (parts.length) {
	        var part = parts.pop();
	        if (!part) continue;
	        var current = PATH.join2(parent, part);
	        try {
	          FS.mkdir(current);
	        } catch (e) {}
	        parent = current;
	      }
	      return current;
	    },
	    createFile: function createFile(parent, name, properties, canRead, canWrite) {
	      var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
	      var mode = FS.getMode(canRead, canWrite);
	      return FS.create(path, mode);
	    },
	    createDataFile: function createDataFile(parent, name, data, canRead, canWrite, canOwn) {
	      var path = name;
	      if (parent) {
	        parent = typeof parent == "string" ? parent : FS.getPath(parent);
	        path = name ? PATH.join2(parent, name) : parent;
	      }
	      var mode = FS.getMode(canRead, canWrite);
	      var node = FS.create(path, mode);
	      if (data) {
	        if (typeof data == "string") {
	          var arr = new Array(data.length);
	          for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
	          data = arr;
	        }
	        FS.chmod(node, mode | 146);
	        var stream = FS.open(node, 577);
	        FS.write(stream, data, 0, data.length, 0, canOwn);
	        FS.close(stream);
	        FS.chmod(node, mode);
	      }
	      return node;
	    },
	    createDevice: function createDevice(parent, name, input, output) {
	      var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
	      var mode = FS.getMode(!!input, !!output);
	      if (!FS.createDevice.major) FS.createDevice.major = 64;
	      var dev = FS.makedev(FS.createDevice.major++, 0);
	      FS.registerDevice(dev, {
	        open: function open(stream) {
	          stream.seekable = false;
	        },
	        close: function close(stream) {
	          if (output && output.buffer && output.buffer.length) {
	            output(10);
	          }
	        },
	        read: function read(stream, buffer, offset, length, pos) {
	          var bytesRead = 0;
	          for (var i = 0; i < length; i++) {
	            var result;
	            try {
	              result = input();
	            } catch (e) {
	              throw new FS.ErrnoError(29);
	            }
	            if (result === undefined && bytesRead === 0) {
	              throw new FS.ErrnoError(6);
	            }
	            if (result === null || result === undefined) break;
	            bytesRead++;
	            buffer[offset + i] = result;
	          }
	          if (bytesRead) {
	            stream.node.timestamp = Date.now();
	          }
	          return bytesRead;
	        },
	        write: function write(stream, buffer, offset, length, pos) {
	          for (var i = 0; i < length; i++) {
	            try {
	              output(buffer[offset + i]);
	            } catch (e) {
	              throw new FS.ErrnoError(29);
	            }
	          }
	          if (length) {
	            stream.node.timestamp = Date.now();
	          }
	          return i;
	        }
	      });
	      return FS.mkdev(path, mode, dev);
	    },
	    forceLoadFile: function forceLoadFile(obj) {
	      if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
	      if (typeof XMLHttpRequest != "undefined") {
	        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
	      } else if (read_) {
	        try {
	          obj.contents = intArrayFromString(read_(obj.url), true);
	          obj.usedBytes = obj.contents.length;
	        } catch (e) {
	          throw new FS.ErrnoError(29);
	        }
	      } else {
	        throw new Error("Cannot load without read() or XMLHttpRequest.");
	      }
	    },
	    createLazyFile: function createLazyFile(parent, name, url, canRead, canWrite) {
	      function LazyUint8Array() {
	        this.lengthKnown = false;
	        this.chunks = [];
	      }
	      LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
	        if (idx > this.length - 1 || idx < 0) {
	          return undefined;
	        }
	        var chunkOffset = idx % this.chunkSize;
	        var chunkNum = idx / this.chunkSize | 0;
	        return this.getter(chunkNum)[chunkOffset];
	      };
	      LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
	        this.getter = getter;
	      };
	      LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
	        var xhr = new XMLHttpRequest();
	        xhr.open("HEAD", url, false);
	        xhr.send(null);
	        if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
	        var datalength = Number(xhr.getResponseHeader("Content-length"));
	        var header;
	        var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
	        var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
	        var chunkSize = 1024 * 1024;
	        if (!hasByteServing) chunkSize = datalength;
	        var doXHR = function doXHR(from, to) {
	          if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
	          if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
	          var xhr = new XMLHttpRequest();
	          xhr.open("GET", url, false);
	          if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
	          xhr.responseType = "arraybuffer";
	          if (xhr.overrideMimeType) {
	            xhr.overrideMimeType("text/plain; charset=x-user-defined");
	          }
	          xhr.send(null);
	          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
	          if (xhr.response !== undefined) {
	            return new Uint8Array(xhr.response || []);
	          }
	          return intArrayFromString(xhr.responseText || "", true);
	        };
	        var lazyArray = this;
	        lazyArray.setDataGetter(function (chunkNum) {
	          var start = chunkNum * chunkSize;
	          var end = (chunkNum + 1) * chunkSize - 1;
	          end = Math.min(end, datalength - 1);
	          if (typeof lazyArray.chunks[chunkNum] == "undefined") {
	            lazyArray.chunks[chunkNum] = doXHR(start, end);
	          }
	          if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
	          return lazyArray.chunks[chunkNum];
	        });
	        if (usesGzip || !datalength) {
	          chunkSize = datalength = 1;
	          datalength = this.getter(0).length;
	          chunkSize = datalength;
	          out("LazyFiles on gzip forces download of the whole file when length is accessed");
	        }
	        this._length = datalength;
	        this._chunkSize = chunkSize;
	        this.lengthKnown = true;
	      };
	      if (typeof XMLHttpRequest != "undefined") {
	        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
	        var lazyArray = new LazyUint8Array();
	        Object.defineProperties(lazyArray, {
	          length: {
	            get: function get() {
	              if (!this.lengthKnown) {
	                this.cacheLength();
	              }
	              return this._length;
	            }
	          },
	          chunkSize: {
	            get: function get() {
	              if (!this.lengthKnown) {
	                this.cacheLength();
	              }
	              return this._chunkSize;
	            }
	          }
	        });
	        var properties = {
	          isDevice: false,
	          contents: lazyArray
	        };
	      } else {
	        var properties = {
	          isDevice: false,
	          url: url
	        };
	      }
	      var node = FS.createFile(parent, name, properties, canRead, canWrite);
	      if (properties.contents) {
	        node.contents = properties.contents;
	      } else if (properties.url) {
	        node.contents = null;
	        node.url = properties.url;
	      }
	      Object.defineProperties(node, {
	        usedBytes: {
	          get: function get() {
	            return this.contents.length;
	          }
	        }
	      });
	      var stream_ops = {};
	      var keys = Object.keys(node.stream_ops);
	      keys.forEach(function (key) {
	        var fn = node.stream_ops[key];
	        stream_ops[key] = function forceLoadLazyFile() {
	          FS.forceLoadFile(node);
	          return fn.apply(null, arguments);
	        };
	      });
	      function writeChunks(stream, buffer, offset, length, position) {
	        var contents = stream.node.contents;
	        if (position >= contents.length) return 0;
	        var size = Math.min(contents.length - position, length);
	        if (contents.slice) {
	          for (var i = 0; i < size; i++) {
	            buffer[offset + i] = contents[position + i];
	          }
	        } else {
	          for (var i = 0; i < size; i++) {
	            buffer[offset + i] = contents.get(position + i);
	          }
	        }
	        return size;
	      }
	      stream_ops.read = function (stream, buffer, offset, length, position) {
	        FS.forceLoadFile(node);
	        return writeChunks(stream, buffer, offset, length, position);
	      };
	      stream_ops.mmap = function (stream, length, position, prot, flags) {
	        FS.forceLoadFile(node);
	        var ptr = mmapAlloc(length);
	        if (!ptr) {
	          throw new FS.ErrnoError(48);
	        }
	        writeChunks(stream, HEAP8, ptr, length, position);
	        return {
	          ptr: ptr,
	          allocated: true
	        };
	      };
	      node.stream_ops = stream_ops;
	      return node;
	    },
	    createPreloadedFile: function createPreloadedFile(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
	      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
	      function processData(byteArray) {
	        function finish(byteArray) {
	          if (preFinish) preFinish();
	          if (!dontCreateFile) {
	            FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
	          }
	          if (onload) onload();
	          removeRunDependency();
	        }
	        if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, function () {
	          if (onerror) onerror();
	          removeRunDependency();
	        })) {
	          return;
	        }
	        finish(byteArray);
	      }
	      addRunDependency();
	      if (typeof url == "string") {
	        asyncLoad(url, function (byteArray) {
	          return processData(byteArray);
	        }, onerror);
	      } else {
	        processData(url);
	      }
	    },
	    indexedDB: function indexedDB() {
	      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	    },
	    DB_NAME: function DB_NAME() {
	      return "EM_FS_" + window.location.pathname;
	    },
	    DB_VERSION: 20,
	    DB_STORE_NAME: "FILE_DATA",
	    saveFilesToDB: function saveFilesToDB(paths, onload, onerror) {
	      onload = onload || function () {};
	      onerror = onerror || function () {};
	      var indexedDB = FS.indexedDB();
	      try {
	        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
	      } catch (e) {
	        return onerror(e);
	      }
	      openRequest.onupgradeneeded = function () {
	        out("creating db");
	        var db = openRequest.result;
	        db.createObjectStore(FS.DB_STORE_NAME);
	      };
	      openRequest.onsuccess = function () {
	        var db = openRequest.result;
	        var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
	        var files = transaction.objectStore(FS.DB_STORE_NAME);
	        var ok = 0,
	          fail = 0,
	          total = paths.length;
	        function finish() {
	          if (fail == 0) onload();else onerror();
	        }
	        paths.forEach(function (path) {
	          var putRequest = files.put(FS.analyzePath(path).object.contents, path);
	          putRequest.onsuccess = function () {
	            ok++;
	            if (ok + fail == total) finish();
	          };
	          putRequest.onerror = function () {
	            fail++;
	            if (ok + fail == total) finish();
	          };
	        });
	        transaction.onerror = onerror;
	      };
	      openRequest.onerror = onerror;
	    },
	    loadFilesFromDB: function loadFilesFromDB(paths, onload, onerror) {
	      onload = onload || function () {};
	      onerror = onerror || function () {};
	      var indexedDB = FS.indexedDB();
	      try {
	        var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
	      } catch (e) {
	        return onerror(e);
	      }
	      openRequest.onupgradeneeded = onerror;
	      openRequest.onsuccess = function () {
	        var db = openRequest.result;
	        try {
	          var transaction = db.transaction([FS.DB_STORE_NAME], "readonly");
	        } catch (e) {
	          onerror(e);
	          return;
	        }
	        var files = transaction.objectStore(FS.DB_STORE_NAME);
	        var ok = 0,
	          fail = 0,
	          total = paths.length;
	        function finish() {
	          if (fail == 0) onload();else onerror();
	        }
	        paths.forEach(function (path) {
	          var getRequest = files.get(path);
	          getRequest.onsuccess = function () {
	            if (FS.analyzePath(path).exists) {
	              FS.unlink(path);
	            }
	            FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
	            ok++;
	            if (ok + fail == total) finish();
	          };
	          getRequest.onerror = function () {
	            fail++;
	            if (ok + fail == total) finish();
	          };
	        });
	        transaction.onerror = onerror;
	      };
	      openRequest.onerror = onerror;
	    }
	  };
	  var SYSCALLS = {
	    DEFAULT_POLLMASK: 5,
	    calculateAt: function calculateAt(dirfd, path, allowEmpty) {
	      if (PATH.isAbs(path)) {
	        return path;
	      }
	      var dir;
	      if (dirfd === -100) {
	        dir = FS.cwd();
	      } else {
	        var dirstream = FS.getStream(dirfd);
	        if (!dirstream) throw new FS.ErrnoError(8);
	        dir = dirstream.path;
	      }
	      if (path.length == 0) {
	        if (!allowEmpty) {
	          throw new FS.ErrnoError(44);
	        }
	        return dir;
	      }
	      return PATH.join2(dir, path);
	    },
	    doStat: function doStat(func, path, buf) {
	      try {
	        var stat = func(path);
	      } catch (e) {
	        if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
	          return -54;
	        }
	        throw e;
	      }
	      HEAP32[buf >> 2] = stat.dev;
	      HEAP32[buf + 4 >> 2] = 0;
	      HEAP32[buf + 8 >> 2] = stat.ino;
	      HEAP32[buf + 12 >> 2] = stat.mode;
	      HEAP32[buf + 16 >> 2] = stat.nlink;
	      HEAP32[buf + 20 >> 2] = stat.uid;
	      HEAP32[buf + 24 >> 2] = stat.gid;
	      HEAP32[buf + 28 >> 2] = stat.rdev;
	      HEAP32[buf + 32 >> 2] = 0;
	      tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
	      HEAP32[buf + 48 >> 2] = 4096;
	      HEAP32[buf + 52 >> 2] = stat.blocks;
	      tempI64 = [Math.floor(stat.atime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.atime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
	      HEAP32[buf + 64 >> 2] = 0;
	      tempI64 = [Math.floor(stat.mtime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.mtime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
	      HEAP32[buf + 80 >> 2] = 0;
	      tempI64 = [Math.floor(stat.ctime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.ctime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
	      HEAP32[buf + 96 >> 2] = 0;
	      tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >> 2] = tempI64[0], HEAP32[buf + 108 >> 2] = tempI64[1];
	      return 0;
	    },
	    doMsync: function doMsync(addr, stream, len, flags, offset) {
	      var buffer = HEAPU8.slice(addr, addr + len);
	      FS.msync(stream, buffer, offset, len, flags);
	    },
	    varargs: undefined,
	    get: function get() {
	      SYSCALLS.varargs += 4;
	      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
	      return ret;
	    },
	    getStr: function getStr(ptr) {
	      var ret = UTF8ToString(ptr);
	      return ret;
	    },
	    getStreamFromFD: function getStreamFromFD(fd) {
	      var stream = FS.getStream(fd);
	      if (!stream) throw new FS.ErrnoError(8);
	      return stream;
	    }
	  };
	  function ___syscall_fcntl64(fd, cmd, varargs) {
	    SYSCALLS.varargs = varargs;
	    try {
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      switch (cmd) {
	        case 0:
	          {
	            var arg = SYSCALLS.get();
	            if (arg < 0) {
	              return -28;
	            }
	            var newStream;
	            newStream = FS.createStream(stream, arg);
	            return newStream.fd;
	          }
	        case 1:
	        case 2:
	          return 0;
	        case 3:
	          return stream.flags;
	        case 4:
	          {
	            var arg = SYSCALLS.get();
	            stream.flags |= arg;
	            return 0;
	          }
	        case 5:
	          {
	            var arg = SYSCALLS.get();
	            var offset = 0;
	            HEAP16[arg + offset >> 1] = 2;
	            return 0;
	          }
	        case 6:
	        case 7:
	          return 0;
	        case 16:
	        case 8:
	          return -28;
	        case 9:
	          setErrNo(28);
	          return -1;
	        default:
	          {
	            return -28;
	          }
	      }
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return -e.errno;
	    }
	  }
	  function ___syscall_openat(dirfd, path, flags, varargs) {
	    SYSCALLS.varargs = varargs;
	    try {
	      path = SYSCALLS.getStr(path);
	      path = SYSCALLS.calculateAt(dirfd, path);
	      var mode = varargs ? SYSCALLS.get() : 0;
	      return FS.open(path, flags, mode).fd;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return -e.errno;
	    }
	  }
	  function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {}
	  function getShiftFromSize(size) {
	    switch (size) {
	      case 1:
	        return 0;
	      case 2:
	        return 1;
	      case 4:
	        return 2;
	      case 8:
	        return 3;
	      default:
	        throw new TypeError("Unknown type size: " + size);
	    }
	  }
	  function embind_init_charCodes() {
	    var codes = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	      codes[i] = String.fromCharCode(i);
	    }
	    embind_charCodes = codes;
	  }
	  var embind_charCodes = undefined;
	  function readLatin1String(ptr) {
	    var ret = "";
	    var c = ptr;
	    while (HEAPU8[c]) {
	      ret += embind_charCodes[HEAPU8[c++]];
	    }
	    return ret;
	  }
	  var awaitingDependencies = {};
	  var registeredTypes = {};
	  var typeDependencies = {};
	  var char_0 = 48;
	  var char_9 = 57;
	  function makeLegalFunctionName(name) {
	    if (undefined === name) {
	      return "_unknown";
	    }
	    name = name.replace(/[^a-zA-Z0-9_]/g, "$");
	    var f = name.charCodeAt(0);
	    if (f >= char_0 && f <= char_9) {
	      return "_" + name;
	    }
	    return name;
	  }
	  function createNamedFunction(name, body) {
	    name = makeLegalFunctionName(name);
	    return new Function("body", "return function " + name + "() {\n" + '    "use strict";' + "    return body.apply(this, arguments);\n" + "};\n")(body);
	  }
	  function extendError(baseErrorType, errorName) {
	    var errorClass = createNamedFunction(errorName, function (message) {
	      this.name = errorName;
	      this.message = message;
	      var stack = new Error(message).stack;
	      if (stack !== undefined) {
	        this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
	      }
	    });
	    errorClass.prototype = Object.create(baseErrorType.prototype);
	    errorClass.prototype.constructor = errorClass;
	    errorClass.prototype.toString = function () {
	      if (this.message === undefined) {
	        return this.name;
	      } else {
	        return this.name + ": " + this.message;
	      }
	    };
	    return errorClass;
	  }
	  var BindingError = undefined;
	  function throwBindingError(message) {
	    throw new BindingError(message);
	  }
	  var InternalError = undefined;
	  function throwInternalError(message) {
	    throw new InternalError(message);
	  }
	  function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
	    myTypes.forEach(function (type) {
	      typeDependencies[type] = dependentTypes;
	    });
	    function onComplete(typeConverters) {
	      var myTypeConverters = getTypeConverters(typeConverters);
	      if (myTypeConverters.length !== myTypes.length) {
	        throwInternalError("Mismatched type converter count");
	      }
	      for (var i = 0; i < myTypes.length; ++i) {
	        registerType(myTypes[i], myTypeConverters[i]);
	      }
	    }
	    var typeConverters = new Array(dependentTypes.length);
	    var unregisteredTypes = [];
	    var registered = 0;
	    dependentTypes.forEach(function (dt, i) {
	      if (registeredTypes.hasOwnProperty(dt)) {
	        typeConverters[i] = registeredTypes[dt];
	      } else {
	        unregisteredTypes.push(dt);
	        if (!awaitingDependencies.hasOwnProperty(dt)) {
	          awaitingDependencies[dt] = [];
	        }
	        awaitingDependencies[dt].push(function () {
	          typeConverters[i] = registeredTypes[dt];
	          ++registered;
	          if (registered === unregisteredTypes.length) {
	            onComplete(typeConverters);
	          }
	        });
	      }
	    });
	    if (0 === unregisteredTypes.length) {
	      onComplete(typeConverters);
	    }
	  }
	  function registerType(rawType, registeredInstance) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    if (!("argPackAdvance" in registeredInstance)) {
	      throw new TypeError("registerType registeredInstance requires argPackAdvance");
	    }
	    var name = registeredInstance.name;
	    if (!rawType) {
	      throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
	    }
	    if (registeredTypes.hasOwnProperty(rawType)) {
	      if (options.ignoreDuplicateRegistrations) {
	        return;
	      } else {
	        throwBindingError("Cannot register type '" + name + "' twice");
	      }
	    }
	    registeredTypes[rawType] = registeredInstance;
	    delete typeDependencies[rawType];
	    if (awaitingDependencies.hasOwnProperty(rawType)) {
	      var callbacks = awaitingDependencies[rawType];
	      delete awaitingDependencies[rawType];
	      callbacks.forEach(function (cb) {
	        return cb();
	      });
	    }
	  }
	  function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
	    var shift = getShiftFromSize(size);
	    name = readLatin1String(name);
	    registerType(rawType, {
	      name: name,
	      "fromWireType": function fromWireType(wt) {
	        return !!wt;
	      },
	      "toWireType": function toWireType(destructors, o) {
	        return o ? trueValue : falseValue;
	      },
	      "argPackAdvance": 8,
	      "readValueFromPointer": function readValueFromPointer(pointer) {
	        var heap;
	        if (size === 1) {
	          heap = HEAP8;
	        } else if (size === 2) {
	          heap = HEAP16;
	        } else if (size === 4) {
	          heap = HEAP32;
	        } else {
	          throw new TypeError("Unknown boolean type size: " + name);
	        }
	        return this["fromWireType"](heap[pointer >> shift]);
	      },
	      destructorFunction: null
	    });
	  }
	  function ClassHandle_isAliasOf(other) {
	    if (!(this instanceof ClassHandle)) {
	      return false;
	    }
	    if (!(other instanceof ClassHandle)) {
	      return false;
	    }
	    var leftClass = this.$$.ptrType.registeredClass;
	    var left = this.$$.ptr;
	    var rightClass = other.$$.ptrType.registeredClass;
	    var right = other.$$.ptr;
	    while (leftClass.baseClass) {
	      left = leftClass.upcast(left);
	      leftClass = leftClass.baseClass;
	    }
	    while (rightClass.baseClass) {
	      right = rightClass.upcast(right);
	      rightClass = rightClass.baseClass;
	    }
	    return leftClass === rightClass && left === right;
	  }
	  function shallowCopyInternalPointer(o) {
	    return {
	      count: o.count,
	      deleteScheduled: o.deleteScheduled,
	      preservePointerOnDelete: o.preservePointerOnDelete,
	      ptr: o.ptr,
	      ptrType: o.ptrType,
	      smartPtr: o.smartPtr,
	      smartPtrType: o.smartPtrType
	    };
	  }
	  function throwInstanceAlreadyDeleted(obj) {
	    function getInstanceTypeName(handle) {
	      return handle.$$.ptrType.registeredClass.name;
	    }
	    throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
	  }
	  var finalizationRegistry = false;
	  function detachFinalizer(handle) {}
	  function runDestructor($$) {
	    if ($$.smartPtr) {
	      $$.smartPtrType.rawDestructor($$.smartPtr);
	    } else {
	      $$.ptrType.registeredClass.rawDestructor($$.ptr);
	    }
	  }
	  function releaseClassHandle($$) {
	    $$.count.value -= 1;
	    var toDelete = 0 === $$.count.value;
	    if (toDelete) {
	      runDestructor($$);
	    }
	  }
	  function downcastPointer(ptr, ptrClass, desiredClass) {
	    if (ptrClass === desiredClass) {
	      return ptr;
	    }
	    if (undefined === desiredClass.baseClass) {
	      return null;
	    }
	    var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
	    if (rv === null) {
	      return null;
	    }
	    return desiredClass.downcast(rv);
	  }
	  var registeredPointers = {};
	  function getInheritedInstanceCount() {
	    return Object.keys(registeredInstances).length;
	  }
	  function getLiveInheritedInstances() {
	    var rv = [];
	    for (var k in registeredInstances) {
	      if (registeredInstances.hasOwnProperty(k)) {
	        rv.push(registeredInstances[k]);
	      }
	    }
	    return rv;
	  }
	  var deletionQueue = [];
	  function flushPendingDeletes() {
	    while (deletionQueue.length) {
	      var obj = deletionQueue.pop();
	      obj.$$.deleteScheduled = false;
	      obj["delete"]();
	    }
	  }
	  var delayFunction = undefined;
	  function setDelayFunction(fn) {
	    delayFunction = fn;
	    if (deletionQueue.length && delayFunction) {
	      delayFunction(flushPendingDeletes);
	    }
	  }
	  function init_embind() {
	    Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
	    Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
	    Module["flushPendingDeletes"] = flushPendingDeletes;
	    Module["setDelayFunction"] = setDelayFunction;
	  }
	  var registeredInstances = {};
	  function getBasestPointer(class_, ptr) {
	    if (ptr === undefined) {
	      throwBindingError("ptr should not be undefined");
	    }
	    while (class_.baseClass) {
	      ptr = class_.upcast(ptr);
	      class_ = class_.baseClass;
	    }
	    return ptr;
	  }
	  function getInheritedInstance(class_, ptr) {
	    ptr = getBasestPointer(class_, ptr);
	    return registeredInstances[ptr];
	  }
	  function makeClassHandle(prototype, record) {
	    if (!record.ptrType || !record.ptr) {
	      throwInternalError("makeClassHandle requires ptr and ptrType");
	    }
	    var hasSmartPtrType = !!record.smartPtrType;
	    var hasSmartPtr = !!record.smartPtr;
	    if (hasSmartPtrType !== hasSmartPtr) {
	      throwInternalError("Both smartPtrType and smartPtr must be specified");
	    }
	    record.count = {
	      value: 1
	    };
	    return attachFinalizer(Object.create(prototype, {
	      $$: {
	        value: record
	      }
	    }));
	  }
	  function RegisteredPointer_fromWireType(ptr) {
	    var rawPointer = this.getPointee(ptr);
	    if (!rawPointer) {
	      this.destructor(ptr);
	      return null;
	    }
	    var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
	    if (undefined !== registeredInstance) {
	      if (0 === registeredInstance.$$.count.value) {
	        registeredInstance.$$.ptr = rawPointer;
	        registeredInstance.$$.smartPtr = ptr;
	        return registeredInstance["clone"]();
	      } else {
	        var rv = registeredInstance["clone"]();
	        this.destructor(ptr);
	        return rv;
	      }
	    }
	    function makeDefaultHandle() {
	      if (this.isSmartPointer) {
	        return makeClassHandle(this.registeredClass.instancePrototype, {
	          ptrType: this.pointeeType,
	          ptr: rawPointer,
	          smartPtrType: this,
	          smartPtr: ptr
	        });
	      } else {
	        return makeClassHandle(this.registeredClass.instancePrototype, {
	          ptrType: this,
	          ptr: ptr
	        });
	      }
	    }
	    var actualType = this.registeredClass.getActualType(rawPointer);
	    var registeredPointerRecord = registeredPointers[actualType];
	    if (!registeredPointerRecord) {
	      return makeDefaultHandle.call(this);
	    }
	    var toType;
	    if (this.isConst) {
	      toType = registeredPointerRecord.constPointerType;
	    } else {
	      toType = registeredPointerRecord.pointerType;
	    }
	    var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
	    if (dp === null) {
	      return makeDefaultHandle.call(this);
	    }
	    if (this.isSmartPointer) {
	      return makeClassHandle(toType.registeredClass.instancePrototype, {
	        ptrType: toType,
	        ptr: dp,
	        smartPtrType: this,
	        smartPtr: ptr
	      });
	    } else {
	      return makeClassHandle(toType.registeredClass.instancePrototype, {
	        ptrType: toType,
	        ptr: dp
	      });
	    }
	  }
	  function attachFinalizer(handle) {
	    if ("undefined" === typeof FinalizationRegistry) {
	      attachFinalizer = function attachFinalizer(handle) {
	        return handle;
	      };
	      return handle;
	    }
	    finalizationRegistry = new FinalizationRegistry(function (info) {
	      releaseClassHandle(info.$$);
	    });
	    attachFinalizer = function attachFinalizer(handle) {
	      var $$ = handle.$$;
	      var hasSmartPtr = !!$$.smartPtr;
	      if (hasSmartPtr) {
	        var info = {
	          $$: $$
	        };
	        finalizationRegistry.register(handle, info, handle);
	      }
	      return handle;
	    };
	    detachFinalizer = function detachFinalizer(handle) {
	      return finalizationRegistry.unregister(handle);
	    };
	    return attachFinalizer(handle);
	  }
	  function ClassHandle_clone() {
	    if (!this.$$.ptr) {
	      throwInstanceAlreadyDeleted(this);
	    }
	    if (this.$$.preservePointerOnDelete) {
	      this.$$.count.value += 1;
	      return this;
	    } else {
	      var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), {
	        $$: {
	          value: shallowCopyInternalPointer(this.$$)
	        }
	      }));
	      clone.$$.count.value += 1;
	      clone.$$.deleteScheduled = false;
	      return clone;
	    }
	  }
	  function ClassHandle_delete() {
	    if (!this.$$.ptr) {
	      throwInstanceAlreadyDeleted(this);
	    }
	    if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
	      throwBindingError("Object already scheduled for deletion");
	    }
	    detachFinalizer(this);
	    releaseClassHandle(this.$$);
	    if (!this.$$.preservePointerOnDelete) {
	      this.$$.smartPtr = undefined;
	      this.$$.ptr = undefined;
	    }
	  }
	  function ClassHandle_isDeleted() {
	    return !this.$$.ptr;
	  }
	  function ClassHandle_deleteLater() {
	    if (!this.$$.ptr) {
	      throwInstanceAlreadyDeleted(this);
	    }
	    if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
	      throwBindingError("Object already scheduled for deletion");
	    }
	    deletionQueue.push(this);
	    if (deletionQueue.length === 1 && delayFunction) {
	      delayFunction(flushPendingDeletes);
	    }
	    this.$$.deleteScheduled = true;
	    return this;
	  }
	  function init_ClassHandle() {
	    ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
	    ClassHandle.prototype["clone"] = ClassHandle_clone;
	    ClassHandle.prototype["delete"] = ClassHandle_delete;
	    ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
	    ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
	  }
	  function ClassHandle() {}
	  function ensureOverloadTable(proto, methodName, humanName) {
	    if (undefined === proto[methodName].overloadTable) {
	      var prevFunc = proto[methodName];
	      proto[methodName] = function () {
	        if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
	          throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
	        }
	        return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
	      };
	      proto[methodName].overloadTable = [];
	      proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
	    }
	  }
	  function exposePublicSymbol(name, value, numArguments) {
	    if (Module.hasOwnProperty(name)) {
	      if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
	        throwBindingError("Cannot register public name '" + name + "' twice");
	      }
	      ensureOverloadTable(Module, name, name);
	      if (Module.hasOwnProperty(numArguments)) {
	        throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
	      }
	      Module[name].overloadTable[numArguments] = value;
	    } else {
	      Module[name] = value;
	      if (undefined !== numArguments) {
	        Module[name].numArguments = numArguments;
	      }
	    }
	  }
	  function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
	    this.name = name;
	    this.constructor = constructor;
	    this.instancePrototype = instancePrototype;
	    this.rawDestructor = rawDestructor;
	    this.baseClass = baseClass;
	    this.getActualType = getActualType;
	    this.upcast = upcast;
	    this.downcast = downcast;
	    this.pureVirtualFunctions = [];
	  }
	  function upcastPointer(ptr, ptrClass, desiredClass) {
	    while (ptrClass !== desiredClass) {
	      if (!ptrClass.upcast) {
	        throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
	      }
	      ptr = ptrClass.upcast(ptr);
	      ptrClass = ptrClass.baseClass;
	    }
	    return ptr;
	  }
	  function constNoSmartPtrRawPointerToWireType(destructors, handle) {
	    if (handle === null) {
	      if (this.isReference) {
	        throwBindingError("null is not a valid " + this.name);
	      }
	      return 0;
	    }
	    if (!handle.$$) {
	      throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
	    }
	    if (!handle.$$.ptr) {
	      throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
	    }
	    var handleClass = handle.$$.ptrType.registeredClass;
	    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
	    return ptr;
	  }
	  function genericPointerToWireType(destructors, handle) {
	    var ptr;
	    if (handle === null) {
	      if (this.isReference) {
	        throwBindingError("null is not a valid " + this.name);
	      }
	      if (this.isSmartPointer) {
	        ptr = this.rawConstructor();
	        if (destructors !== null) {
	          destructors.push(this.rawDestructor, ptr);
	        }
	        return ptr;
	      } else {
	        return 0;
	      }
	    }
	    if (!handle.$$) {
	      throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
	    }
	    if (!handle.$$.ptr) {
	      throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
	    }
	    if (!this.isConst && handle.$$.ptrType.isConst) {
	      throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
	    }
	    var handleClass = handle.$$.ptrType.registeredClass;
	    ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
	    if (this.isSmartPointer) {
	      if (undefined === handle.$$.smartPtr) {
	        throwBindingError("Passing raw pointer to smart pointer is illegal");
	      }
	      switch (this.sharingPolicy) {
	        case 0:
	          if (handle.$$.smartPtrType === this) {
	            ptr = handle.$$.smartPtr;
	          } else {
	            throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
	          }
	          break;
	        case 1:
	          ptr = handle.$$.smartPtr;
	          break;
	        case 2:
	          if (handle.$$.smartPtrType === this) {
	            ptr = handle.$$.smartPtr;
	          } else {
	            var clonedHandle = handle["clone"]();
	            ptr = this.rawShare(ptr, Emval.toHandle(function () {
	              clonedHandle["delete"]();
	            }));
	            if (destructors !== null) {
	              destructors.push(this.rawDestructor, ptr);
	            }
	          }
	          break;
	        default:
	          throwBindingError("Unsupporting sharing policy");
	      }
	    }
	    return ptr;
	  }
	  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
	    if (handle === null) {
	      if (this.isReference) {
	        throwBindingError("null is not a valid " + this.name);
	      }
	      return 0;
	    }
	    if (!handle.$$) {
	      throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
	    }
	    if (!handle.$$.ptr) {
	      throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
	    }
	    if (handle.$$.ptrType.isConst) {
	      throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
	    }
	    var handleClass = handle.$$.ptrType.registeredClass;
	    var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
	    return ptr;
	  }
	  function simpleReadValueFromPointer(pointer) {
	    return this["fromWireType"](HEAP32[pointer >> 2]);
	  }
	  function RegisteredPointer_getPointee(ptr) {
	    if (this.rawGetPointee) {
	      ptr = this.rawGetPointee(ptr);
	    }
	    return ptr;
	  }
	  function RegisteredPointer_destructor(ptr) {
	    if (this.rawDestructor) {
	      this.rawDestructor(ptr);
	    }
	  }
	  function RegisteredPointer_deleteObject(handle) {
	    if (handle !== null) {
	      handle["delete"]();
	    }
	  }
	  function init_RegisteredPointer() {
	    RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
	    RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
	    RegisteredPointer.prototype["argPackAdvance"] = 8;
	    RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
	    RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
	    RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
	  }
	  function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
	    this.name = name;
	    this.registeredClass = registeredClass;
	    this.isReference = isReference;
	    this.isConst = isConst;
	    this.isSmartPointer = isSmartPointer;
	    this.pointeeType = pointeeType;
	    this.sharingPolicy = sharingPolicy;
	    this.rawGetPointee = rawGetPointee;
	    this.rawConstructor = rawConstructor;
	    this.rawShare = rawShare;
	    this.rawDestructor = rawDestructor;
	    if (!isSmartPointer && registeredClass.baseClass === undefined) {
	      if (isConst) {
	        this["toWireType"] = constNoSmartPtrRawPointerToWireType;
	        this.destructorFunction = null;
	      } else {
	        this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
	        this.destructorFunction = null;
	      }
	    } else {
	      this["toWireType"] = genericPointerToWireType;
	    }
	  }
	  function replacePublicSymbol(name, value, numArguments) {
	    if (!Module.hasOwnProperty(name)) {
	      throwInternalError("Replacing nonexistant public symbol");
	    }
	    if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
	      Module[name].overloadTable[numArguments] = value;
	    } else {
	      Module[name] = value;
	      Module[name].argCount = numArguments;
	    }
	  }
	  function dynCallLegacy(sig, ptr, args) {
	    var f = Module["dynCall_" + sig];
	    return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
	  }
	  var wasmTableMirror = [];
	  function getWasmTableEntry(funcPtr) {
	    var func = wasmTableMirror[funcPtr];
	    if (!func) {
	      if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
	      wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
	    }
	    return func;
	  }
	  function dynCall(sig, ptr, args) {
	    if (sig.includes("j")) {
	      return dynCallLegacy(sig, ptr, args);
	    }
	    var rtn = getWasmTableEntry(ptr).apply(null, args);
	    return rtn;
	  }
	  function getDynCaller(sig, ptr) {
	    var argCache = [];
	    return function () {
	      argCache.length = 0;
	      Object.assign(argCache, arguments);
	      return dynCall(sig, ptr, argCache);
	    };
	  }
	  function embind__requireFunction(signature, rawFunction) {
	    signature = readLatin1String(signature);
	    function makeDynCaller() {
	      if (signature.includes("j")) {
	        return getDynCaller(signature, rawFunction);
	      }
	      return getWasmTableEntry(rawFunction);
	    }
	    var fp = makeDynCaller();
	    if (typeof fp != "function") {
	      throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
	    }
	    return fp;
	  }
	  var UnboundTypeError = undefined;
	  function getTypeName(type) {
	    var ptr = ___getTypeName(type);
	    var rv = readLatin1String(ptr);
	    _free(ptr);
	    return rv;
	  }
	  function throwUnboundTypeError(message, types) {
	    var unboundTypes = [];
	    var seen = {};
	    function visit(type) {
	      if (seen[type]) {
	        return;
	      }
	      if (registeredTypes[type]) {
	        return;
	      }
	      if (typeDependencies[type]) {
	        typeDependencies[type].forEach(visit);
	        return;
	      }
	      unboundTypes.push(type);
	      seen[type] = true;
	    }
	    types.forEach(visit);
	    throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
	  }
	  function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
	    name = readLatin1String(name);
	    getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
	    if (upcast) {
	      upcast = embind__requireFunction(upcastSignature, upcast);
	    }
	    if (downcast) {
	      downcast = embind__requireFunction(downcastSignature, downcast);
	    }
	    rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
	    var legalFunctionName = makeLegalFunctionName(name);
	    exposePublicSymbol(legalFunctionName, function () {
	      throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
	    });
	    whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function (base) {
	      base = base[0];
	      var baseClass;
	      var basePrototype;
	      if (baseClassRawType) {
	        baseClass = base.registeredClass;
	        basePrototype = baseClass.instancePrototype;
	      } else {
	        basePrototype = ClassHandle.prototype;
	      }
	      var constructor = createNamedFunction(legalFunctionName, function () {
	        if (Object.getPrototypeOf(this) !== instancePrototype) {
	          throw new BindingError("Use 'new' to construct " + name);
	        }
	        if (undefined === registeredClass.constructor_body) {
	          throw new BindingError(name + " has no accessible constructor");
	        }
	        var body = registeredClass.constructor_body[arguments.length];
	        if (undefined === body) {
	          throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
	        }
	        return body.apply(this, arguments);
	      });
	      var instancePrototype = Object.create(basePrototype, {
	        constructor: {
	          value: constructor
	        }
	      });
	      constructor.prototype = instancePrototype;
	      var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
	      var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
	      var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
	      var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
	      registeredPointers[rawType] = {
	        pointerType: pointerConverter,
	        constPointerType: constPointerConverter
	      };
	      replacePublicSymbol(legalFunctionName, constructor);
	      return [referenceConverter, pointerConverter, constPointerConverter];
	    });
	  }
	  function heap32VectorToArray(count, firstElement) {
	    var array = [];
	    for (var i = 0; i < count; i++) {
	      array.push(HEAPU32[firstElement + i * 4 >> 2]);
	    }
	    return array;
	  }
	  function runDestructors(destructors) {
	    while (destructors.length) {
	      var ptr = destructors.pop();
	      var del = destructors.pop();
	      del(ptr);
	    }
	  }
	  function new_(constructor, argumentList) {
	    if (!(constructor instanceof Function)) {
	      throw new TypeError("new_ called with constructor type " + _typeof(constructor) + " which is not a function");
	    }
	    var dummy = createNamedFunction(constructor.name || "unknownFunctionName", function () {});
	    dummy.prototype = constructor.prototype;
	    var obj = new dummy();
	    var r = constructor.apply(obj, argumentList);
	    return r instanceof Object ? r : obj;
	  }
	  function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
	    var argCount = argTypes.length;
	    if (argCount < 2) {
	      throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
	    }
	    var isClassMethodFunc = argTypes[1] !== null && classType !== null;
	    var needsDestructorStack = false;
	    for (var i = 1; i < argTypes.length; ++i) {
	      if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
	        needsDestructorStack = true;
	        break;
	      }
	    }
	    var returns = argTypes[0].name !== "void";
	    var argsList = "";
	    var argsListWired = "";
	    for (var i = 0; i < argCount - 2; ++i) {
	      argsList += (i !== 0 ? ", " : "") + "arg" + i;
	      argsListWired += (i !== 0 ? ", " : "") + "arg" + i + "Wired";
	    }
	    var invokerFnBody = "return function " + makeLegalFunctionName(humanName) + "(" + argsList + ") {\n" + "if (arguments.length !== " + (argCount - 2) + ") {\n" + "throwBindingError('function " + humanName + " called with ' + arguments.length + ' arguments, expected " + (argCount - 2) + " args!');\n" + "}\n";
	    if (needsDestructorStack) {
	      invokerFnBody += "var destructors = [];\n";
	    }
	    var dtorStack = needsDestructorStack ? "destructors" : "null";
	    var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
	    var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
	    if (isClassMethodFunc) {
	      invokerFnBody += "var thisWired = classParam.toWireType(" + dtorStack + ", this);\n";
	    }
	    for (var i = 0; i < argCount - 2; ++i) {
	      invokerFnBody += "var arg" + i + "Wired = argType" + i + ".toWireType(" + dtorStack + ", arg" + i + "); // " + argTypes[i + 2].name + "\n";
	      args1.push("argType" + i);
	      args2.push(argTypes[i + 2]);
	    }
	    if (isClassMethodFunc) {
	      argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
	    }
	    invokerFnBody += (returns ? "var rv = " : "") + "invoker(fn" + (argsListWired.length > 0 ? ", " : "") + argsListWired + ");\n";
	    if (needsDestructorStack) {
	      invokerFnBody += "runDestructors(destructors);\n";
	    } else {
	      for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
	        var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
	        if (argTypes[i].destructorFunction !== null) {
	          invokerFnBody += paramName + "_dtor(" + paramName + "); // " + argTypes[i].name + "\n";
	          args1.push(paramName + "_dtor");
	          args2.push(argTypes[i].destructorFunction);
	        }
	      }
	    }
	    if (returns) {
	      invokerFnBody += "var ret = retType.fromWireType(rv);\n" + "return ret;\n";
	    }
	    invokerFnBody += "}\n";
	    args1.push(invokerFnBody);
	    var invokerFunction = new_(Function, args1).apply(null, args2);
	    return invokerFunction;
	  }
	  function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
	    assert(argCount > 0);
	    var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
	    invoker = embind__requireFunction(invokerSignature, invoker);
	    whenDependentTypesAreResolved([], [rawClassType], function (classType) {
	      classType = classType[0];
	      var humanName = "constructor " + classType.name;
	      if (undefined === classType.registeredClass.constructor_body) {
	        classType.registeredClass.constructor_body = [];
	      }
	      if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
	        throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
	      }
	      classType.registeredClass.constructor_body[argCount - 1] = function () {
	        throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
	      };
	      whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
	        argTypes.splice(1, 0, null);
	        classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
	        return [];
	      });
	      return [];
	    });
	  }
	  function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
	    var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
	    methodName = readLatin1String(methodName);
	    rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
	    whenDependentTypesAreResolved([], [rawClassType], function (classType) {
	      classType = classType[0];
	      var humanName = classType.name + "." + methodName;
	      if (methodName.startsWith("@@")) {
	        methodName = Symbol[methodName.substring(2)];
	      }
	      if (isPureVirtual) {
	        classType.registeredClass.pureVirtualFunctions.push(methodName);
	      }
	      function unboundTypesHandler() {
	        throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
	      }
	      var proto = classType.registeredClass.instancePrototype;
	      var method = proto[methodName];
	      if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
	        unboundTypesHandler.argCount = argCount - 2;
	        unboundTypesHandler.className = classType.name;
	        proto[methodName] = unboundTypesHandler;
	      } else {
	        ensureOverloadTable(proto, methodName, humanName);
	        proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
	      }
	      whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
	        var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
	        if (undefined === proto[methodName].overloadTable) {
	          memberFunction.argCount = argCount - 2;
	          proto[methodName] = memberFunction;
	        } else {
	          proto[methodName].overloadTable[argCount - 2] = memberFunction;
	        }
	        return [];
	      });
	      return [];
	    });
	  }
	  var emval_free_list = [];
	  var emval_handle_array = [{}, {
	    value: undefined
	  }, {
	    value: null
	  }, {
	    value: true
	  }, {
	    value: false
	  }];
	  function __emval_decref(handle) {
	    if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
	      emval_handle_array[handle] = undefined;
	      emval_free_list.push(handle);
	    }
	  }
	  function count_emval_handles() {
	    var count = 0;
	    for (var i = 5; i < emval_handle_array.length; ++i) {
	      if (emval_handle_array[i] !== undefined) {
	        ++count;
	      }
	    }
	    return count;
	  }
	  function get_first_emval() {
	    for (var i = 5; i < emval_handle_array.length; ++i) {
	      if (emval_handle_array[i] !== undefined) {
	        return emval_handle_array[i];
	      }
	    }
	    return null;
	  }
	  function init_emval() {
	    Module["count_emval_handles"] = count_emval_handles;
	    Module["get_first_emval"] = get_first_emval;
	  }
	  var Emval = {
	    toValue: function toValue(handle) {
	      if (!handle) {
	        throwBindingError("Cannot use deleted val. handle = " + handle);
	      }
	      return emval_handle_array[handle].value;
	    },
	    toHandle: function toHandle(value) {
	      switch (value) {
	        case undefined:
	          return 1;
	        case null:
	          return 2;
	        case true:
	          return 3;
	        case false:
	          return 4;
	        default:
	          {
	            var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
	            emval_handle_array[handle] = {
	              refcount: 1,
	              value: value
	            };
	            return handle;
	          }
	      }
	    }
	  };
	  function __embind_register_emval(rawType, name) {
	    name = readLatin1String(name);
	    registerType(rawType, {
	      name: name,
	      "fromWireType": function fromWireType(handle) {
	        var rv = Emval.toValue(handle);
	        __emval_decref(handle);
	        return rv;
	      },
	      "toWireType": function toWireType(destructors, value) {
	        return Emval.toHandle(value);
	      },
	      "argPackAdvance": 8,
	      "readValueFromPointer": simpleReadValueFromPointer,
	      destructorFunction: null
	    });
	  }
	  function embindRepr(v) {
	    if (v === null) {
	      return "null";
	    }
	    var t = _typeof(v);
	    if (t === "object" || t === "array" || t === "function") {
	      return v.toString();
	    } else {
	      return "" + v;
	    }
	  }
	  function floatReadValueFromPointer(name, shift) {
	    switch (shift) {
	      case 2:
	        return function (pointer) {
	          return this["fromWireType"](HEAPF32[pointer >> 2]);
	        };
	      case 3:
	        return function (pointer) {
	          return this["fromWireType"](HEAPF64[pointer >> 3]);
	        };
	      default:
	        throw new TypeError("Unknown float type: " + name);
	    }
	  }
	  function __embind_register_float(rawType, name, size) {
	    var shift = getShiftFromSize(size);
	    name = readLatin1String(name);
	    registerType(rawType, {
	      name: name,
	      "fromWireType": function fromWireType(value) {
	        return value;
	      },
	      "toWireType": function toWireType(destructors, value) {
	        return value;
	      },
	      "argPackAdvance": 8,
	      "readValueFromPointer": floatReadValueFromPointer(name, shift),
	      destructorFunction: null
	    });
	  }
	  function integerReadValueFromPointer(name, shift, signed) {
	    switch (shift) {
	      case 0:
	        return signed ? function readS8FromPointer(pointer) {
	          return HEAP8[pointer];
	        } : function readU8FromPointer(pointer) {
	          return HEAPU8[pointer];
	        };
	      case 1:
	        return signed ? function readS16FromPointer(pointer) {
	          return HEAP16[pointer >> 1];
	        } : function readU16FromPointer(pointer) {
	          return HEAPU16[pointer >> 1];
	        };
	      case 2:
	        return signed ? function readS32FromPointer(pointer) {
	          return HEAP32[pointer >> 2];
	        } : function readU32FromPointer(pointer) {
	          return HEAPU32[pointer >> 2];
	        };
	      default:
	        throw new TypeError("Unknown integer type: " + name);
	    }
	  }
	  function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
	    name = readLatin1String(name);
	    var shift = getShiftFromSize(size);
	    var fromWireType = function fromWireType(value) {
	      return value;
	    };
	    if (minRange === 0) {
	      var bitshift = 32 - 8 * size;
	      fromWireType = function fromWireType(value) {
	        return value << bitshift >>> bitshift;
	      };
	    }
	    var isUnsignedType = name.includes("unsigned");
	    var checkAssertions = function checkAssertions(value, toTypeName) {};
	    var toWireType;
	    if (isUnsignedType) {
	      toWireType = function toWireType(destructors, value) {
	        checkAssertions(value, this.name);
	        return value >>> 0;
	      };
	    } else {
	      toWireType = function toWireType(destructors, value) {
	        checkAssertions(value, this.name);
	        return value;
	      };
	    }
	    registerType(primitiveType, {
	      name: name,
	      "fromWireType": fromWireType,
	      "toWireType": toWireType,
	      "argPackAdvance": 8,
	      "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0),
	      destructorFunction: null
	    });
	  }
	  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
	    var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
	    var TA = typeMapping[dataTypeIndex];
	    function decodeMemoryView(handle) {
	      handle = handle >> 2;
	      var heap = HEAPU32;
	      var size = heap[handle];
	      var data = heap[handle + 1];
	      return new TA(buffer, data, size);
	    }
	    name = readLatin1String(name);
	    registerType(rawType, {
	      name: name,
	      "fromWireType": decodeMemoryView,
	      "argPackAdvance": 8,
	      "readValueFromPointer": decodeMemoryView
	    }, {
	      ignoreDuplicateRegistrations: true
	    });
	  }
	  function __embind_register_std_string(rawType, name) {
	    name = readLatin1String(name);
	    var stdStringIsUTF8 = name === "std::string";
	    registerType(rawType, {
	      name: name,
	      "fromWireType": function fromWireType(value) {
	        var length = HEAPU32[value >> 2];
	        var payload = value + 4;
	        var str;
	        if (stdStringIsUTF8) {
	          var decodeStartPtr = payload;
	          for (var i = 0; i <= length; ++i) {
	            var currentBytePtr = payload + i;
	            if (i == length || HEAPU8[currentBytePtr] == 0) {
	              var maxRead = currentBytePtr - decodeStartPtr;
	              var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
	              if (str === undefined) {
	                str = stringSegment;
	              } else {
	                str += String.fromCharCode(0);
	                str += stringSegment;
	              }
	              decodeStartPtr = currentBytePtr + 1;
	            }
	          }
	        } else {
	          var a = new Array(length);
	          for (var i = 0; i < length; ++i) {
	            a[i] = String.fromCharCode(HEAPU8[payload + i]);
	          }
	          str = a.join("");
	        }
	        _free(value);
	        return str;
	      },
	      "toWireType": function toWireType(destructors, value) {
	        if (value instanceof ArrayBuffer) {
	          value = new Uint8Array(value);
	        }
	        var length;
	        var valueIsOfTypeString = typeof value == "string";
	        if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
	          throwBindingError("Cannot pass non-string to std::string");
	        }
	        if (stdStringIsUTF8 && valueIsOfTypeString) {
	          length = lengthBytesUTF8(value);
	        } else {
	          length = value.length;
	        }
	        var base = _malloc(4 + length + 1);
	        var ptr = base + 4;
	        HEAPU32[base >> 2] = length;
	        if (stdStringIsUTF8 && valueIsOfTypeString) {
	          stringToUTF8(value, ptr, length + 1);
	        } else {
	          if (valueIsOfTypeString) {
	            for (var i = 0; i < length; ++i) {
	              var charCode = value.charCodeAt(i);
	              if (charCode > 255) {
	                _free(ptr);
	                throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
	              }
	              HEAPU8[ptr + i] = charCode;
	            }
	          } else {
	            for (var i = 0; i < length; ++i) {
	              HEAPU8[ptr + i] = value[i];
	            }
	          }
	        }
	        if (destructors !== null) {
	          destructors.push(_free, base);
	        }
	        return base;
	      },
	      "argPackAdvance": 8,
	      "readValueFromPointer": simpleReadValueFromPointer,
	      destructorFunction: function destructorFunction(ptr) {
	        _free(ptr);
	      }
	    });
	  }
	  var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
	  function UTF16ToString(ptr, maxBytesToRead) {
	    var endPtr = ptr;
	    var idx = endPtr >> 1;
	    var maxIdx = idx + maxBytesToRead / 2;
	    while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
	    endPtr = idx << 1;
	    if (endPtr - ptr > 32 && UTF16Decoder) {
	      return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
	    } else {
	      var str = "";
	      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
	        var codeUnit = HEAP16[ptr + i * 2 >> 1];
	        if (codeUnit == 0) break;
	        str += String.fromCharCode(codeUnit);
	      }
	      return str;
	    }
	  }
	  function stringToUTF16(str, outPtr, maxBytesToWrite) {
	    if (maxBytesToWrite === undefined) {
	      maxBytesToWrite = 2147483647;
	    }
	    if (maxBytesToWrite < 2) return 0;
	    maxBytesToWrite -= 2;
	    var startPtr = outPtr;
	    var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
	    for (var i = 0; i < numCharsToWrite; ++i) {
	      var codeUnit = str.charCodeAt(i);
	      HEAP16[outPtr >> 1] = codeUnit;
	      outPtr += 2;
	    }
	    HEAP16[outPtr >> 1] = 0;
	    return outPtr - startPtr;
	  }
	  function lengthBytesUTF16(str) {
	    return str.length * 2;
	  }
	  function UTF32ToString(ptr, maxBytesToRead) {
	    var i = 0;
	    var str = "";
	    while (!(i >= maxBytesToRead / 4)) {
	      var utf32 = HEAP32[ptr + i * 4 >> 2];
	      if (utf32 == 0) break;
	      ++i;
	      if (utf32 >= 65536) {
	        var ch = utf32 - 65536;
	        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
	      } else {
	        str += String.fromCharCode(utf32);
	      }
	    }
	    return str;
	  }
	  function stringToUTF32(str, outPtr, maxBytesToWrite) {
	    if (maxBytesToWrite === undefined) {
	      maxBytesToWrite = 2147483647;
	    }
	    if (maxBytesToWrite < 4) return 0;
	    var startPtr = outPtr;
	    var endPtr = startPtr + maxBytesToWrite - 4;
	    for (var i = 0; i < str.length; ++i) {
	      var codeUnit = str.charCodeAt(i);
	      if (codeUnit >= 55296 && codeUnit <= 57343) {
	        var trailSurrogate = str.charCodeAt(++i);
	        codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
	      }
	      HEAP32[outPtr >> 2] = codeUnit;
	      outPtr += 4;
	      if (outPtr + 4 > endPtr) break;
	    }
	    HEAP32[outPtr >> 2] = 0;
	    return outPtr - startPtr;
	  }
	  function lengthBytesUTF32(str) {
	    var len = 0;
	    for (var i = 0; i < str.length; ++i) {
	      var codeUnit = str.charCodeAt(i);
	      if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
	      len += 4;
	    }
	    return len;
	  }
	  function __embind_register_std_wstring(rawType, charSize, name) {
	    name = readLatin1String(name);
	    var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
	    if (charSize === 2) {
	      decodeString = UTF16ToString;
	      encodeString = stringToUTF16;
	      lengthBytesUTF = lengthBytesUTF16;
	      getHeap = function getHeap() {
	        return HEAPU16;
	      };
	      shift = 1;
	    } else if (charSize === 4) {
	      decodeString = UTF32ToString;
	      encodeString = stringToUTF32;
	      lengthBytesUTF = lengthBytesUTF32;
	      getHeap = function getHeap() {
	        return HEAPU32;
	      };
	      shift = 2;
	    }
	    registerType(rawType, {
	      name: name,
	      "fromWireType": function fromWireType(value) {
	        var length = HEAPU32[value >> 2];
	        var HEAP = getHeap();
	        var str;
	        var decodeStartPtr = value + 4;
	        for (var i = 0; i <= length; ++i) {
	          var currentBytePtr = value + 4 + i * charSize;
	          if (i == length || HEAP[currentBytePtr >> shift] == 0) {
	            var maxReadBytes = currentBytePtr - decodeStartPtr;
	            var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
	            if (str === undefined) {
	              str = stringSegment;
	            } else {
	              str += String.fromCharCode(0);
	              str += stringSegment;
	            }
	            decodeStartPtr = currentBytePtr + charSize;
	          }
	        }
	        _free(value);
	        return str;
	      },
	      "toWireType": function toWireType(destructors, value) {
	        if (!(typeof value == "string")) {
	          throwBindingError("Cannot pass non-string to C++ string type " + name);
	        }
	        var length = lengthBytesUTF(value);
	        var ptr = _malloc(4 + length + charSize);
	        HEAPU32[ptr >> 2] = length >> shift;
	        encodeString(value, ptr + 4, length + charSize);
	        if (destructors !== null) {
	          destructors.push(_free, ptr);
	        }
	        return ptr;
	      },
	      "argPackAdvance": 8,
	      "readValueFromPointer": simpleReadValueFromPointer,
	      destructorFunction: function destructorFunction(ptr) {
	        _free(ptr);
	      }
	    });
	  }
	  function __embind_register_void(rawType, name) {
	    name = readLatin1String(name);
	    registerType(rawType, {
	      isVoid: true,
	      name: name,
	      "argPackAdvance": 0,
	      "fromWireType": function fromWireType() {
	        return undefined;
	      },
	      "toWireType": function toWireType(destructors, o) {
	        return undefined;
	      }
	    });
	  }
	  function __emscripten_date_now() {
	    return Date.now();
	  }
	  var emval_symbols = {};
	  function getStringOrSymbol(address) {
	    var symbol = emval_symbols[address];
	    if (symbol === undefined) {
	      return readLatin1String(address);
	    }
	    return symbol;
	  }
	  var emval_methodCallers = [];
	  function __emval_call_void_method(caller, handle, methodName, args) {
	    caller = emval_methodCallers[caller];
	    handle = Emval.toValue(handle);
	    methodName = getStringOrSymbol(methodName);
	    caller(handle, methodName, null, args);
	  }
	  function emval_addMethodCaller(caller) {
	    var id = emval_methodCallers.length;
	    emval_methodCallers.push(caller);
	    return id;
	  }
	  function requireRegisteredType(rawType, humanName) {
	    var impl = registeredTypes[rawType];
	    if (undefined === impl) {
	      throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
	    }
	    return impl;
	  }
	  function emval_lookupTypes(argCount, argTypes) {
	    var a = new Array(argCount);
	    for (var i = 0; i < argCount; ++i) {
	      a[i] = requireRegisteredType(HEAPU32[argTypes + i * POINTER_SIZE >> 2], "parameter " + i);
	    }
	    return a;
	  }
	  var emval_registeredMethods = [];
	  function __emval_get_method_caller(argCount, argTypes) {
	    var types = emval_lookupTypes(argCount, argTypes);
	    var retType = types[0];
	    var signatureName = retType.name + "_$" + types.slice(1).map(function (t) {
	      return t.name;
	    }).join("_") + "$";
	    var returnId = emval_registeredMethods[signatureName];
	    if (returnId !== undefined) {
	      return returnId;
	    }
	    var params = ["retType"];
	    var args = [retType];
	    var argsList = "";
	    for (var i = 0; i < argCount - 1; ++i) {
	      argsList += (i !== 0 ? ", " : "") + "arg" + i;
	      params.push("argType" + i);
	      args.push(types[1 + i]);
	    }
	    var functionName = makeLegalFunctionName("methodCaller_" + signatureName);
	    var functionBody = "return function " + functionName + "(handle, name, destructors, args) {\n";
	    var offset = 0;
	    for (var i = 0; i < argCount - 1; ++i) {
	      functionBody += "    var arg" + i + " = argType" + i + ".readValueFromPointer(args" + (offset ? "+" + offset : "") + ");\n";
	      offset += types[i + 1]["argPackAdvance"];
	    }
	    functionBody += "    var rv = handle[name](" + argsList + ");\n";
	    for (var i = 0; i < argCount - 1; ++i) {
	      if (types[i + 1]["deleteObject"]) {
	        functionBody += "    argType" + i + ".deleteObject(arg" + i + ");\n";
	      }
	    }
	    if (!retType.isVoid) {
	      functionBody += "    return retType.toWireType(destructors, rv);\n";
	    }
	    functionBody += "};\n";
	    params.push(functionBody);
	    var invokerFunction = new_(Function, params).apply(null, args);
	    returnId = emval_addMethodCaller(invokerFunction);
	    emval_registeredMethods[signatureName] = returnId;
	    return returnId;
	  }
	  function _abort() {
	    abort("");
	  }
	  function _emscripten_memcpy_big(dest, src, num) {
	    HEAPU8.copyWithin(dest, src, src + num);
	  }
	  function abortOnCannotGrowMemory(requestedSize) {
	    abort("OOM");
	  }
	  function _emscripten_resize_heap(requestedSize) {
	    HEAPU8.length;
	    abortOnCannotGrowMemory();
	  }
	  var ENV = {};
	  function getExecutableName() {
	    return thisProgram || "./this.program";
	  }
	  function getEnvStrings() {
	    if (!getEnvStrings.strings) {
	      var lang = ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
	      var env = {
	        "USER": "web_user",
	        "LOGNAME": "web_user",
	        "PATH": "/",
	        "PWD": "/",
	        "HOME": "/home/web_user",
	        "LANG": lang,
	        "_": getExecutableName()
	      };
	      for (var x in ENV) {
	        if (ENV[x] === undefined) delete env[x];else env[x] = ENV[x];
	      }
	      var strings = [];
	      for (var x in env) {
	        strings.push(x + "=" + env[x]);
	      }
	      getEnvStrings.strings = strings;
	    }
	    return getEnvStrings.strings;
	  }
	  function writeAsciiToMemory(str, buffer, dontAddNull) {
	    for (var i = 0; i < str.length; ++i) {
	      HEAP8[buffer++ >> 0] = str.charCodeAt(i);
	    }
	    if (!dontAddNull) HEAP8[buffer >> 0] = 0;
	  }
	  function _environ_get(__environ, environ_buf) {
	    var bufSize = 0;
	    getEnvStrings().forEach(function (string, i) {
	      var ptr = environ_buf + bufSize;
	      HEAPU32[__environ + i * 4 >> 2] = ptr;
	      writeAsciiToMemory(string, ptr);
	      bufSize += string.length + 1;
	    });
	    return 0;
	  }
	  function _environ_sizes_get(penviron_count, penviron_buf_size) {
	    var strings = getEnvStrings();
	    HEAPU32[penviron_count >> 2] = strings.length;
	    var bufSize = 0;
	    strings.forEach(function (string) {
	      bufSize += string.length + 1;
	    });
	    HEAPU32[penviron_buf_size >> 2] = bufSize;
	    return 0;
	  }
	  function _fd_close(fd) {
	    try {
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      FS.close(stream);
	      return 0;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return e.errno;
	    }
	  }
	  function _fd_fdstat_get(fd, pbuf) {
	    try {
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
	      HEAP8[pbuf >> 0] = type;
	      return 0;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return e.errno;
	    }
	  }
	  function doReadv(stream, iov, iovcnt, offset) {
	    var ret = 0;
	    for (var i = 0; i < iovcnt; i++) {
	      var ptr = HEAPU32[iov >> 2];
	      var len = HEAPU32[iov + 4 >> 2];
	      iov += 8;
	      var curr = FS.read(stream, HEAP8, ptr, len, offset);
	      if (curr < 0) return -1;
	      ret += curr;
	      if (curr < len) break;
	    }
	    return ret;
	  }
	  function _fd_read(fd, iov, iovcnt, pnum) {
	    try {
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      var num = doReadv(stream, iov, iovcnt);
	      HEAP32[pnum >> 2] = num;
	      return 0;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return e.errno;
	    }
	  }
	  function convertI32PairToI53Checked(lo, hi) {
	    return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
	  }
	  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
	    try {
	      var offset = convertI32PairToI53Checked(offset_low, offset_high);
	      if (isNaN(offset)) return 61;
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      FS.llseek(stream, offset, whence);
	      tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
	      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
	      return 0;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return e.errno;
	    }
	  }
	  function doWritev(stream, iov, iovcnt, offset) {
	    var ret = 0;
	    for (var i = 0; i < iovcnt; i++) {
	      var ptr = HEAPU32[iov >> 2];
	      var len = HEAPU32[iov + 4 >> 2];
	      iov += 8;
	      var curr = FS.write(stream, HEAP8, ptr, len, offset);
	      if (curr < 0) return -1;
	      ret += curr;
	    }
	    return ret;
	  }
	  function _fd_write(fd, iov, iovcnt, pnum) {
	    try {
	      var stream = SYSCALLS.getStreamFromFD(fd);
	      var num = doWritev(stream, iov, iovcnt);
	      HEAPU32[pnum >> 2] = num;
	      return 0;
	    } catch (e) {
	      if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
	      return e.errno;
	    }
	  }
	  function _setTempRet0(val) {
	  }
	  var FSNode = function FSNode(parent, name, mode, rdev) {
	    if (!parent) {
	      parent = this;
	    }
	    this.parent = parent;
	    this.mount = parent.mount;
	    this.mounted = null;
	    this.id = FS.nextInode++;
	    this.name = name;
	    this.mode = mode;
	    this.node_ops = {};
	    this.stream_ops = {};
	    this.rdev = rdev;
	  };
	  var readMode = 292 | 73;
	  var writeMode = 146;
	  Object.defineProperties(FSNode.prototype, {
	    read: {
	      get: function get() {
	        return (this.mode & readMode) === readMode;
	      },
	      set: function set(val) {
	        val ? this.mode |= readMode : this.mode &= ~readMode;
	      }
	    },
	    write: {
	      get: function get() {
	        return (this.mode & writeMode) === writeMode;
	      },
	      set: function set(val) {
	        val ? this.mode |= writeMode : this.mode &= ~writeMode;
	      }
	    },
	    isFolder: {
	      get: function get() {
	        return FS.isDir(this.mode);
	      }
	    },
	    isDevice: {
	      get: function get() {
	        return FS.isChrdev(this.mode);
	      }
	    }
	  });
	  FS.FSNode = FSNode;
	  FS.staticInit();
	  embind_init_charCodes();
	  BindingError = Module["BindingError"] = extendError(Error, "BindingError");
	  InternalError = Module["InternalError"] = extendError(Error, "InternalError");
	  init_ClassHandle();
	  init_embind();
	  init_RegisteredPointer();
	  UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
	  init_emval();
	  var asmLibraryArg = {
	    "s": ___cxa_allocate_exception,
	    "r": ___cxa_throw,
	    "C": ___syscall_fcntl64,
	    "w": ___syscall_openat,
	    "u": __embind_register_bigint,
	    "E": __embind_register_bool,
	    "l": __embind_register_class,
	    "k": __embind_register_class_constructor,
	    "d": __embind_register_class_function,
	    "D": __embind_register_emval,
	    "p": __embind_register_float,
	    "c": __embind_register_integer,
	    "b": __embind_register_memory_view,
	    "o": __embind_register_std_string,
	    "j": __embind_register_std_wstring,
	    "q": __embind_register_void,
	    "i": __emscripten_date_now,
	    "e": __emval_call_void_method,
	    "g": __emval_decref,
	    "f": __emval_get_method_caller,
	    "a": _abort,
	    "A": _emscripten_memcpy_big,
	    "v": _emscripten_resize_heap,
	    "y": _environ_get,
	    "z": _environ_sizes_get,
	    "n": _fd_close,
	    "x": _fd_fdstat_get,
	    "B": _fd_read,
	    "t": _fd_seek,
	    "m": _fd_write,
	    "h": _setTempRet0
	  };
	  createWasm();
	  Module["___wasm_call_ctors"] = function () {
	    return (Module["___wasm_call_ctors"] = Module["asm"]["G"]).apply(null, arguments);
	  };
	  var _free = Module["_free"] = function () {
	    return (_free = Module["_free"] = Module["asm"]["H"]).apply(null, arguments);
	  };
	  var _malloc = Module["_malloc"] = function () {
	    return (_malloc = Module["_malloc"] = Module["asm"]["I"]).apply(null, arguments);
	  };
	  var ___errno_location = Module["___errno_location"] = function () {
	    return (___errno_location = Module["___errno_location"] = Module["asm"]["K"]).apply(null, arguments);
	  };
	  var ___getTypeName = Module["___getTypeName"] = function () {
	    return (___getTypeName = Module["___getTypeName"] = Module["asm"]["L"]).apply(null, arguments);
	  };
	  Module["___embind_register_native_and_builtin_types"] = function () {
	    return (Module["___embind_register_native_and_builtin_types"] = Module["asm"]["M"]).apply(null, arguments);
	  };
	  var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function () {
	    return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["N"]).apply(null, arguments);
	  };
	  var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = function () {
	    return (___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = Module["asm"]["O"]).apply(null, arguments);
	  };
	  Module["dynCall_viiijj"] = function () {
	    return (Module["dynCall_viiijj"] = Module["asm"]["P"]).apply(null, arguments);
	  };
	  Module["dynCall_jij"] = function () {
	    return (Module["dynCall_jij"] = Module["asm"]["Q"]).apply(null, arguments);
	  };
	  Module["dynCall_jii"] = function () {
	    return (Module["dynCall_jii"] = Module["asm"]["R"]).apply(null, arguments);
	  };
	  Module["dynCall_jiji"] = function () {
	    return (Module["dynCall_jiji"] = Module["asm"]["S"]).apply(null, arguments);
	  };
	  Module["_ff_h264_cabac_tables"] = 112796;
	  var calledRun;
	  dependenciesFulfilled = function runCaller() {
	    if (!calledRun) run();
	    if (!calledRun) dependenciesFulfilled = runCaller;
	  };
	  function run(args) {
	    if (runDependencies > 0) {
	      return;
	    }
	    preRun();
	    if (runDependencies > 0) {
	      return;
	    }
	    function doRun() {
	      if (calledRun) return;
	      calledRun = true;
	      Module["calledRun"] = true;
	      if (ABORT) return;
	      initRuntime();
	      if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
	      postRun();
	    }
	    if (Module["setStatus"]) {
	      Module["setStatus"]("Running...");
	      setTimeout(function () {
	        setTimeout(function () {
	          Module["setStatus"]("");
	        }, 1);
	        doRun();
	      }, 1);
	    } else {
	      doRun();
	    }
	  }
	  if (Module["preInit"]) {
	    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
	    while (Module["preInit"].length > 0) {
	      Module["preInit"].pop()();
	    }
	  }
	  run();
	  module.exports = Module;
	});

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
	decoderFull.postRun = function () {
	  console.log('decoderModule.postRun');
	  // this.audioDecoder = new DecoderModule.AudioDecoder(this);
	  // this.videoDecoder = new DecoderModule.VideoDecoder(this);
	  // this.hasInit = true;
	  // if(this.initResoleFn){
	  //     this.initResoleFn();
	  // }
	};
	var DecoderFull = /*#__PURE__*/function (_Emitter) {
	  _inherits(DecoderFull, _Emitter);
	  var _super = _createSuper(DecoderFull);
	  function DecoderFull() {
	    var _this;
	    _classCallCheck(this, DecoderFull);
	    _this = _super.call(this);
	    _this.audioDecoder = null;
	    _this.videoDecoder = null;
	    _this.hasVideoConfigured = false;
	    _this.hasAudioConfigured = false;
	    _this.audioDecoder = new decoderFull.AudioDecoder(_assertThisInitialized(_this));
	    _this.videoDecoder = new decoderFull.VideoDecoder(_assertThisInitialized(_this));
	    _this.audioChannels = 0;
	    _this.audioOrigin = [];
	    _this.audioStart = 0;
	    _this.audioRemain = 0;
	    _this.audioOutputArray = [];
	    _this.audioTempAudioBuffer = [];
	    _this.videoWidth = null;
	    _this.videoHeight = null;
	    return _this;
	  }
	  _createClass(DecoderFull, [{
	    key: "destroy",
	    value: function destroy() {
	      this.off();
	      this.hasVideoConfigured = false;
	      this.hasAudioConfigured = false;
	      if (this.audioDecoder) {
	        this.audioDecoder.clear();
	        this.audioDecoder = null;
	      }
	      if (this.videoDecoder) {
	        this.videoDecoder.clear();
	        this.videoDecoder = null;
	      }
	    }
	  }, {
	    key: "decodeAudio",
	    value: function decodeAudio(data, timestamp) {
	      if (!this.hasAudioConfigured) {
	        console.error('audio not configured');
	        return;
	      }
	      this.audioDecoder.decode(data, timestamp);
	    }
	  }, {
	    key: "setCodecAudio",
	    value: function setCodecAudio(codecId, extraData) {
	      if (!this.hasAudioConfigured) {
	        console.log('setCodecAudio', codecId);
	        this.audioDecoder.setCodec(codecId, 48000, extraData);
	        this.hasAudioConfigured = true;
	      }
	    }
	  }, {
	    key: "decodeVideo",
	    value: function decodeVideo(data, isKeyFrame, timestamp) {
	      if (!this.hasVideoConfigured) {
	        console.error('video not configured');
	        return;
	      }
	      this.videoDecoder.decode(data, isKeyFrame ? 1 : 0, timestamp);
	    }
	  }, {
	    key: "setCodecVideo",
	    value: function setCodecVideo(videoType, extraData) {
	      if (!this.hasVideoConfigured) {
	        console.log('setCodecVideo', videoType);
	        this.videoDecoder.setCodec(videoType, extraData);
	        this.hasVideoConfigured = true;
	      }
	    }

	    // c 调用 js 的方法
	  }, {
	    key: "videoInfo",
	    value: function videoInfo(videoCode, width, height) {
	      console.log('c++ call js videoInfo', videoCode, width, height);
	      this.videoWidth = width;
	      this.videoHeight = height;
	      this.emit('videoInfo', {
	        videoCode: videoCode,
	        width: width,
	        height: height
	      });
	    }

	    // c 调用 js 的方法
	  }, {
	    key: "audioInfo",
	    value: function audioInfo(audioCode, sampleRate, channels) {
	      console.log('c++ call js audioInfo', audioCode, sampleRate, channels);
	      this.audioChannels = channels;
	      this.emit('audioInfo', {
	        audioCode: audioCode,
	        sampleRate: sampleRate,
	        channels: channels
	      });
	    }

	    // c 调用 js 的方法
	  }, {
	    key: "yuvData",
	    value: function yuvData(yuv, ts) {
	      console.log('c++ call js yuvData', ts);
	      var size = this.videoWidth * this.videoHeight * 3 / 2;
	      var out = decoderFull.HEAPU8.subarray(yuv, yuv + size);
	      var data = new Uint8Array(out);
	      this.emit('yuvData', {
	        ts: ts,
	        yuvData: data
	      });
	    }

	    // c 调用 js 的方法
	  }, {
	    key: "pcmData",
	    value: function pcmData(data, len, ts) {
	      console.log('c++ call js pcmData', ts, len);
	      var frameCount = len;
	      var origin = this.audioOrigin;
	      this.audioOutputArray;
	      this.audioTempAudioBuffer;
	      this.audioChannels;
	      for (var channel = 0; channel < 2; channel++) {
	        var fp = decoderFull.HEAPU32[(data >> 2) + channel] >> 2;
	        origin[channel] = decoderFull.HEAPF32.subarray(fp, fp + frameCount);
	      }
	      this.emit('pcmData', {
	        ts: ts,
	        pcmData: origin
	      });
	    }
	  }]);
	  return DecoderFull;
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

	/**
	 * Common utilities
	 * @module glMatrix
	 */
	// Configuration Constants
	var EPSILON = 0.000001;
	var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
	if (!Math.hypot) Math.hypot = function () {
	  var y = 0,
	      i = arguments.length;

	  while (i--) {
	    y += arguments[i] * arguments[i];
	  }

	  return Math.sqrt(y);
	};

	/**
	 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
	 * @module mat4
	 */

	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */

	function create$1() {
	  var out = new ARRAY_TYPE(16);

	  if (ARRAY_TYPE != Float32Array) {
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	  }

	  out[0] = 1;
	  out[5] = 1;
	  out[10] = 1;
	  out[15] = 1;
	  return out;
	}
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */

	function identity(out) {
	  out[0] = 1;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = 1;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 1;
	  out[11] = 0;
	  out[12] = 0;
	  out[13] = 0;
	  out[14] = 0;
	  out[15] = 1;
	  return out;
	}
	/**
	 * Generates a orthogonal projection matrix with the given bounds.
	 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
	 * which matches WebGL/OpenGL's clip volume.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */

	function orthoNO(out, left, right, bottom, top, near, far) {
	  var lr = 1 / (left - right);
	  var bt = 1 / (bottom - top);
	  var nf = 1 / (near - far);
	  out[0] = -2 * lr;
	  out[1] = 0;
	  out[2] = 0;
	  out[3] = 0;
	  out[4] = 0;
	  out[5] = -2 * bt;
	  out[6] = 0;
	  out[7] = 0;
	  out[8] = 0;
	  out[9] = 0;
	  out[10] = 2 * nf;
	  out[11] = 0;
	  out[12] = (left + right) * lr;
	  out[13] = (top + bottom) * bt;
	  out[14] = (far + near) * nf;
	  out[15] = 1;
	  return out;
	}
	/**
	 * Alias for {@link mat4.orthoNO}
	 * @function
	 */

	var ortho = orthoNO;
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis.
	 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {ReadonlyVec3} eye Position of the viewer
	 * @param {ReadonlyVec3} center Point the viewer is looking at
	 * @param {ReadonlyVec3} up vec3 pointing up
	 * @returns {mat4} out
	 */

	function lookAt(out, eye, center, up) {
	  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
	  var eyex = eye[0];
	  var eyey = eye[1];
	  var eyez = eye[2];
	  var upx = up[0];
	  var upy = up[1];
	  var upz = up[2];
	  var centerx = center[0];
	  var centery = center[1];
	  var centerz = center[2];

	  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
	    return identity(out);
	  }

	  z0 = eyex - centerx;
	  z1 = eyey - centery;
	  z2 = eyez - centerz;
	  len = 1 / Math.hypot(z0, z1, z2);
	  z0 *= len;
	  z1 *= len;
	  z2 *= len;
	  x0 = upy * z2 - upz * z1;
	  x1 = upz * z0 - upx * z2;
	  x2 = upx * z1 - upy * z0;
	  len = Math.hypot(x0, x1, x2);

	  if (!len) {
	    x0 = 0;
	    x1 = 0;
	    x2 = 0;
	  } else {
	    len = 1 / len;
	    x0 *= len;
	    x1 *= len;
	    x2 *= len;
	  }

	  y0 = z1 * x2 - z2 * x1;
	  y1 = z2 * x0 - z0 * x2;
	  y2 = z0 * x1 - z1 * x0;
	  len = Math.hypot(y0, y1, y2);

	  if (!len) {
	    y0 = 0;
	    y1 = 0;
	    y2 = 0;
	  } else {
	    len = 1 / len;
	    y0 *= len;
	    y1 *= len;
	    y2 *= len;
	  }

	  out[0] = x0;
	  out[1] = y0;
	  out[2] = z0;
	  out[3] = 0;
	  out[4] = x1;
	  out[5] = y1;
	  out[6] = z1;
	  out[7] = 0;
	  out[8] = x2;
	  out[9] = y2;
	  out[10] = z2;
	  out[11] = 0;
	  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	  out[15] = 1;
	  return out;
	}

	/**
	 * 3 Dimensional Vector
	 * @module vec3
	 */

	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */

	function create() {
	  var out = new ARRAY_TYPE(3);

	  if (ARRAY_TYPE != Float32Array) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	  }

	  return out;
	}
	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */

	function fromValues(x, y, z) {
	  var out = new ARRAY_TYPE(3);
	  out[0] = x;
	  out[1] = y;
	  out[2] = z;
	  return out;
	}
	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */

	(function () {
	  var vec = create();
	  return function (a, stride, offset, count, fn, arg) {
	    var i, l;

	    if (!stride) {
	      stride = 3;
	    }

	    if (!offset) {
	      offset = 0;
	    }

	    if (count) {
	      l = Math.min(count * stride + offset, a.length);
	    } else {
	      l = a.length;
	    }

	    for (i = offset; i < l; i += stride) {
	      vec[0] = a[i];
	      vec[1] = a[i + 1];
	      vec[2] = a[i + 2];
	      fn(vec, vec, arg);
	      a[i] = vec[0];
	      a[i + 1] = vec[1];
	      a[i + 2] = vec[2];
	    }

	    return a;
	  };
	})();

	var createWebGL = (function (gl, openWebglAlignment) {
	  var vertexShaderScript = "\n            attribute vec4 aVertexPosition;\n            attribute vec2 aTexturePosition;\n            uniform mat4 uModelMatrix;\n            uniform mat4 uViewMatrix;\n            uniform mat4 uProjectionMatrix;\n            varying lowp vec2 vTexturePosition;\n            void main(void) {\n              gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\n              vTexturePosition = aTexturePosition;\n            }\n        ";
	  var fragmentShaderScript = "\n            precision highp float;\n            varying highp vec2 vTexturePosition;\n            uniform int isyuv;\n            uniform sampler2D rgbaTexture;\n            uniform sampler2D yTexture;\n            uniform sampler2D uTexture;\n            uniform sampler2D vTexture;\n\n            const mat4 YUV2RGB = mat4( 1.1643828125, 0, 1.59602734375, -.87078515625,\n                                       1.1643828125, -.39176171875, -.81296875, .52959375,\n                                       1.1643828125, 2.017234375, 0, -1.081390625,\n                                       0, 0, 0, 1);\n\n\n            void main(void) {\n\n                if (isyuv>0) {\n\n                    highp float y = texture2D(yTexture,  vTexturePosition).r;\n                    highp float u = texture2D(uTexture,  vTexturePosition).r;\n                    highp float v = texture2D(vTexture,  vTexturePosition).r;\n                    gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;\n\n                } else {\n                    gl_FragColor =  texture2D(rgbaTexture, vTexturePosition);\n                }\n            }\n        ";
	  if (openWebglAlignment) {
	    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
	  }
	  var shaderProgram = _initShaderProgram();
	  var _programInfo = {
	    program: shaderProgram,
	    attribLocations: {
	      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
	      texturePosition: gl.getAttribLocation(shaderProgram, 'aTexturePosition')
	    },
	    uniformLocations: {
	      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
	      modelMatrix: gl.getUniformLocation(shaderProgram, 'uModelMatrix'),
	      viewMatrix: gl.getUniformLocation(shaderProgram, 'uViewMatrix'),
	      rgbatexture: gl.getUniformLocation(shaderProgram, 'rgbaTexture'),
	      ytexture: gl.getUniformLocation(shaderProgram, 'yTexture'),
	      utexture: gl.getUniformLocation(shaderProgram, 'uTexture'),
	      vtexture: gl.getUniformLocation(shaderProgram, 'vTexture'),
	      isyuv: gl.getUniformLocation(shaderProgram, 'isyuv')
	    }
	  };
	  var _buffers = _initBuffers();
	  var _rgbatexture = _createTexture();
	  var _ytexture = _createTexture();
	  var _utexture = _createTexture();
	  var _vtexture = _createTexture();
	  function _initBuffers() {
	    var _texturePos;
	    // Create a buffer for the cube's vertex positions.
	    var positionBuffer = gl.createBuffer();

	    // Select the positionBuffer as the one to apply buffer
	    // operations to from here out.

	    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

	    // Now create an array of positions for the cube.

	    var positions = [
	    // Front face
	    -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];

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

	    var facePos = [[0.0, 1.0], [1.0, 1.0], [1.0, 0.0], [0.0, 0.0]];

	    // Convert the array of colors into a table for all the vertices.

	    var texturePos = [];
	    texturePos = (_texturePos = texturePos).concat.apply(_texturePos, facePos);
	    var texpositionBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, texpositionBuffer);
	    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texturePos), gl.STATIC_DRAW);

	    // Build the element array buffer; this specifies the indices
	    // into the vertex arrays for each face's vertices.

	    var indexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

	    // This array defines each face as two triangles, using the
	    // indices into the vertex array to specify each triangle's
	    // position.

	    var indices = [0, 1, 2, 0, 2, 3];

	    // Now send the element array to GL

	    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	    return {
	      position: positionBuffer,
	      texPosition: texpositionBuffer,
	      indices: indexBuffer
	    };
	  }
	  function _createTexture() {
	    var texture = gl.createTexture();
	    gl.bindTexture(gl.TEXTURE_2D, texture);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	    return texture;
	  }
	  function _loadShader(type, source) {
	    var shader = gl.createShader(type);

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
	    var vertexShader = _loadShader(gl.VERTEX_SHADER, vertexShaderScript);
	    var fragmentShader = _loadShader(gl.FRAGMENT_SHADER, fragmentShaderScript);

	    // Create the shader program

	    var shaderProgram = gl.createProgram();
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
	    gl.clearColor(0.0, 0.0, 0.0, 0.0); // Clear to black, fully opaque
	    gl.clearDepth(1.0); // Clear everything
	    gl.enable(gl.DEPTH_TEST); // Enable depth testing
	    gl.depthFunc(gl.LEQUAL); // Near things obscure far things

	    // Clear the canvas before we start drawing on it.

	    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	    var zNear = 0.1;
	    var zFar = 100.0;
	    var projectionMatrix = create$1();
	    ortho(projectionMatrix, -1, 1, -1, 1, zNear, zFar);

	    // Set the drawing position to the "identity" point, which is
	    // the center of the scene.
	    var modelMatrix = create$1();
	    identity(modelMatrix);
	    var viewMatrix = create$1();
	    lookAt(viewMatrix, fromValues(0, 0, 0), fromValues(0, 0, -1), fromValues(0, 1, 0));

	    // Tell WebGL how to pull out the positions from the position
	    // buffer into the vertexPosition attribute
	    {
	      var numComponents = 3;
	      var type = gl.FLOAT;
	      var normalize = false;
	      var stride = 0;
	      var offset = 0;
	      gl.bindBuffer(gl.ARRAY_BUFFER, _buffers.position);
	      gl.vertexAttribPointer(_programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
	      gl.enableVertexAttribArray(_programInfo.attribLocations.vertexPosition);
	    }

	    // Tell WebGL how to pull out the colors from the color buffer
	    // into the vertexColor attribute.
	    {
	      var _numComponents = 2;
	      var _type = gl.FLOAT;
	      var _normalize = false;
	      var _stride = 0;
	      var _offset = 0;
	      gl.bindBuffer(gl.ARRAY_BUFFER, _buffers.texPosition);
	      gl.vertexAttribPointer(_programInfo.attribLocations.texturePosition, _numComponents, _type, _normalize, _stride, _offset);
	      gl.enableVertexAttribArray(_programInfo.attribLocations.texturePosition);
	    }
	    var rgbatextunit = 2;
	    var ytextunit = rgbatextunit + 1;
	    var utextunit = rgbatextunit + 2;
	    var vtextunit = rgbatextunit + 3;
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

	    gl.uniformMatrix4fv(_programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
	    gl.uniformMatrix4fv(_programInfo.uniformLocations.modelMatrix, false, modelMatrix);
	    gl.uniformMatrix4fv(_programInfo.uniformLocations.viewMatrix, false, viewMatrix);
	    gl.uniform1i(_programInfo.uniformLocations.rgbatexture, rgbatextunit);
	    gl.uniform1i(_programInfo.uniformLocations.ytexture, ytextunit);
	    gl.uniform1i(_programInfo.uniformLocations.utexture, utextunit);
	    gl.uniform1i(_programInfo.uniformLocations.vtexture, vtextunit);
	    gl.uniform1i(_programInfo.uniformLocations.isyuv, 1);
	    {
	      var vertexCount = 6;
	      var _type2 = gl.UNSIGNED_SHORT;
	      var _offset2 = 0;
	      gl.drawElements(gl.TRIANGLES, vertexCount, _type2, _offset2);
	    }

	    // Update the rotation for the next draw
	  }

	  return {
	    render: function render(width, height, y, u, v) {
	      gl.activeTexture(gl.TEXTURE0);
	      gl.bindTexture(gl.TEXTURE_2D, _ytexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
	      gl.activeTexture(gl.TEXTURE1);
	      gl.bindTexture(gl.TEXTURE_2D, _utexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
	      gl.activeTexture(gl.TEXTURE2);
	      gl.bindTexture(gl.TEXTURE_2D, _vtexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
	      _drawScene(width, height);
	    },
	    renderYUV: function renderYUV(width, height, data) {
	      var y = data.slice(0, width * height);
	      var u = data.slice(width * height, width * height * 5 / 4);
	      var v = data.slice(width * height * 5 / 4, width * height * 3 / 2);
	      gl.activeTexture(gl.TEXTURE0);
	      gl.bindTexture(gl.TEXTURE_2D, _ytexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, y);
	      gl.activeTexture(gl.TEXTURE1);
	      gl.bindTexture(gl.TEXTURE_2D, _utexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, u);
	      gl.activeTexture(gl.TEXTURE2);
	      gl.bindTexture(gl.TEXTURE_2D, _vtexture);
	      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, width / 2, height / 2, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, v);
	      _drawScene(width, height);
	    },
	    destroy: function destroy() {
	      gl.deleteProgram(_programInfo.program);
	      gl.deleteBuffer(_buffers.position);
	      gl.deleteBuffer(_buffers.texPosition);
	      gl.deleteBuffer(_buffers.indices);
	      gl.deleteTexture(_rgbatexture);
	      gl.deleteTexture(_ytexture);
	      gl.deleteTexture(_utexture);
	      gl.deleteTexture(_vtexture);
	    }
	  };
	});

	function createContextGL($canvas) {
	  var gl = null;
	  var validContextNames = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
	  var nameIndex = 0;
	  while (!gl && nameIndex < validContextNames.length) {
	    var contextName = validContextNames[nameIndex];
	    try {
	      var contextOptions = {
	        preserveDrawingBuffer: true
	      };
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
	    this.initWebGlContext();
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
	    key: "initWebGlContext",
	    value: function initWebGlContext() {
	      this.contextGl = createContextGL(this.$videoElement);
	      var webgl = createWebGL(this.contextGl, true);
	      this.contextGlRender = webgl.render;
	      this.contextGlDestroy = webgl.destroy;
	    }
	  }, {
	    key: "render",
	    value: function render(data) {
	      var width = this.videoInfo.width;
	      var height = this.videoInfo.height;
	      var y = data.slice(0, width * height);
	      var u = data.slice(width * height, width * height * 5 / 4);
	      var v = data.slice(width * height * 5 / 4, width * height * 3 / 2);
	      this.contextGlRender(this.$videoElement.width, this.$videoElement.height, y, u, v);
	    }
	  }]);
	  return YuvRender;
	}();

	window.FlvDemuxer = FlvDemuxer;
	window.DecoderFull = DecoderFull;
	window.AudioPlayer = AudioPlayer;
	window.YuvRender = YuvRender;
	var index = {
	  FlvDemuxer: FlvDemuxer,
	  DecoderFull: DecoderFull,
	  YuvRender: YuvRender,
	  AudioPlayer: AudioPlayer
	};

	return index;

}));
//# sourceMappingURL=flv-decoder.dev.js.map
