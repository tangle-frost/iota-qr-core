(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@tangle-frost/iota-qr-core", [], factory);
	else if(typeof exports === 'object')
		exports["@tangle-frost/iota-qr-core"] = factory();
	else
		root["TangleFrostIotaQrCore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/data/qrAlphaNumeric.js":
/*!*************************************!*\
  !*** ./dist/data/qrAlphaNumeric.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var qrDataBase_1 = __webpack_require__(/*! ../models/qrDataBase */ "./dist/models/qrDataBase.js");

var qrDataMode_1 = __webpack_require__(/*! ../models/qrDataMode */ "./dist/models/qrDataMode.js");
/**
 * QR Data for representing a alpha numeric.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QRAlphaNumeric =
/*#__PURE__*/
function (_qrDataBase_1$QRDataB) {
  _inherits(QRAlphaNumeric, _qrDataBase_1$QRDataB);

  /**
   * Create a new instance of QRAlphaNumeric.
   * @param data The data for the qr alpha numeric.
   */
  function QRAlphaNumeric(data) {
    _classCallCheck(this, QRAlphaNumeric);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRAlphaNumeric).call(this, qrDataMode_1.QRDataMode.alphaNumeric, data));
  }
  /**
   * Get the length of the data.
   * @returns The length of the data.
   */


  _createClass(QRAlphaNumeric, [{
    key: "getLength",
    value: function getLength() {
      return this.getData().length;
    }
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */

  }, {
    key: "write",
    value: function write(buffer) {
      var s = this.getData();
      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(this.getCode(s.charAt(i)) * 45 + this.getCode(s.charAt(i + 1)), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(this.getCode(s.charAt(i)), 6);
      }
    }
    /* @internal */

  }, {
    key: "getCode",
    value: function getCode(c) {
      if (c >= "0" && c <= "9") {
        return c.charCodeAt(0) - "0".charCodeAt(0);
      } else if (c >= "A" && c <= "Z") {
        return c.charCodeAt(0) - "A".charCodeAt(0) + 10;
      } else {
        switch (c) {
          case " ":
            return 36;

          case "$":
            return 37;

          case "%":
            return 38;

          case "*":
            return 39;

          case "+":
            return 40;

          case "-":
            return 41;

          case ".":
            return 42;

          case "/":
            return 43;

          case ":":
            return 44;

          default:
            throw new Error("Illegal character in string : ".concat(c));
        }
      }
    }
  }]);

  return QRAlphaNumeric;
}(qrDataBase_1.QRDataBase);

exports.QRAlphaNumeric = QRAlphaNumeric;

/***/ }),

/***/ "./dist/data/qrByte8.js":
/*!******************************!*\
  !*** ./dist/data/qrByte8.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var qrDataBase_1 = __webpack_require__(/*! ../models/qrDataBase */ "./dist/models/qrDataBase.js");

var qrDataMode_1 = __webpack_require__(/*! ../models/qrDataMode */ "./dist/models/qrDataMode.js");
/**
 * QR Data for representing a 8 bit data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QRByte8 =
/*#__PURE__*/
function (_qrDataBase_1$QRDataB) {
  _inherits(QRByte8, _qrDataBase_1$QRDataB);

  /**
   * Create a new instance of QRByte8.
   * @param data The data for the qr 8 bit data.
   */
  function QRByte8(data) {
    _classCallCheck(this, QRByte8);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRByte8).call(this, qrDataMode_1.QRDataMode.byte8, data));
  }
  /**
   * Get the length of the data.
   * @returns The length of the data.
   */


  _createClass(QRByte8, [{
    key: "getLength",
    value: function getLength() {
      return this.stringToBytes(this.getData()).length;
    }
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */

  }, {
    key: "write",
    value: function write(buffer) {
      var data = this.stringToBytes(this.getData());

      for (var i = 0; i < data.length; i++) {
        buffer.put(data[i], 8);
      }
    }
    /* @internal */

  }, {
    key: "stringToBytes",
    value: function stringToBytes(str) {
      var utf8 = [];

      for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);

        if (charcode < 0x80) {
          utf8.push(charcode);
        } else if (charcode < 0x800) {
          utf8.push(0xC0 | charcode >> 6, 0x80 | charcode & 0x3F);
        } else if (charcode < 0xD800 || charcode >= 0xE000) {
          utf8.push(0xE0 | charcode >> 12, 0x80 | charcode >> 6 & 0x3F, 0x80 | charcode & 0x3F);
        } else {
          i++; // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves

          charcode = 0x10000 + ((charcode & 0x3FF) << 10 | str.charCodeAt(i) & 0x3FF);
          utf8.push(0xF0 | charcode >> 18, 0x80 | charcode >> 12 & 0x3F, 0x80 | charcode >> 6 & 0x3F, 0x80 | charcode & 0x3F);
        }
      }

      return utf8;
    }
  }]);

  return QRByte8;
}(qrDataBase_1.QRDataBase);

exports.QRByte8 = QRByte8;

/***/ }),

/***/ "./dist/data/qrNumber.js":
/*!*******************************!*\
  !*** ./dist/data/qrNumber.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var qrDataBase_1 = __webpack_require__(/*! ../models/qrDataBase */ "./dist/models/qrDataBase.js");

var qrDataMode_1 = __webpack_require__(/*! ../models/qrDataMode */ "./dist/models/qrDataMode.js");
/**
 * QR Data for representing a number.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QRNumber =
/*#__PURE__*/
function (_qrDataBase_1$QRDataB) {
  _inherits(QRNumber, _qrDataBase_1$QRDataB);

  /**
   * Create a new instance of QRNumber.
   * @param data The data for the qr number.
   */
  function QRNumber(data) {
    _classCallCheck(this, QRNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRNumber).call(this, qrDataMode_1.QRDataMode.number, data));
  }
  /**
   * Get the length of the data.
   * @returns The length of the data.
   */


  _createClass(QRNumber, [{
    key: "getLength",
    value: function getLength() {
      return this.getData().length;
    }
    /**
     * Write data into the buffer.
     * @param buffer The buffer to write into.
     */

  }, {
    key: "write",
    value: function write(buffer) {
      var data = this.getData();
      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(this.strToNum(data.substring(i, i + 3)), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i === 1) {
          buffer.put(this.strToNum(data.substring(i, i + 1)), 4);
        } else if (data.length - i === 2) {
          buffer.put(this.strToNum(data.substring(i, i + 2)), 7);
        }
      }
    }
    /* @internal */

  }, {
    key: "strToNum",
    value: function strToNum(s) {
      var num = 0;

      for (var i = 0; i < s.length; i++) {
        num = num * 10 + this.charToNum(s.charAt(i));
      }

      return num;
    }
    /* @internal */

  }, {
    key: "charToNum",
    value: function charToNum(c) {
      if ("0" <= c && c <= "9") {
        return c.charCodeAt(0) - "0".charCodeAt(0);
      }

      throw new Error("Illegal character in string : ".concat(c));
    }
  }]);

  return QRNumber;
}(qrDataBase_1.QRDataBase);

exports.QRNumber = QRNumber;

/***/ }),

/***/ "./dist/helpers/bitBuffer.js":
/*!***********************************!*\
  !*** ./dist/helpers/bitBuffer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Class for maintaining data bits.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */

var BitBuffer =
/*#__PURE__*/
function () {
  function BitBuffer() {
    _classCallCheck(this, BitBuffer);

    this._buffer = [];
    this._length = 0;
  }

  _createClass(BitBuffer, [{
    key: "getBuffer",
    value: function getBuffer() {
      return this._buffer;
    }
  }, {
    key: "getLengthInBits",
    value: function getLengthInBits() {
      return this._length;
    }
  }, {
    key: "put",
    value: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit((num >>> length - i - 1 & 1) === 1);
      }
    }
  }, {
    key: "putBit",
    value: function putBit(bit) {
      if (this._length === this._buffer.length * 8) {
        this._buffer.push(0);
      }

      if (bit) {
        this._buffer[~~(this._length / 8)] |= 0x80 >>> this._length % 8;
      }

      this._length++;
    }
  }, {
    key: "toString",
    value: function toString() {
      var buffer = "";

      for (var i = 0; i < this.getLengthInBits(); i++) {
        buffer += this.getBit(i) ? "1" : "0";
      }

      return buffer;
    }
  }, {
    key: "getBit",
    value: function getBit(index) {
      return (this._buffer[~~(index / 8)] >>> 7 - index % 8 & 1) === 1;
    }
  }]);

  return BitBuffer;
}();

exports.BitBuffer = BitBuffer;

/***/ }),

/***/ "./dist/helpers/mathHelper.js":
/*!************************************!*\
  !*** ./dist/helpers/mathHelper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Class to helper with math.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */

var MathHelper =
/*#__PURE__*/
function () {
  function MathHelper() {
    _classCallCheck(this, MathHelper);
  }

  _createClass(MathHelper, null, [{
    key: "initialize",

    /**
     * Initialize the math helper.
     */
    value: function initialize() {
      if (!MathHelper.EXP_TABLE) {
        MathHelper.EXP_TABLE = [];
        MathHelper.LOG_TABLE = [];

        for (var i = 0; i < 256; i++) {
          MathHelper.EXP_TABLE.push(i < 8 ? 1 << i : MathHelper.EXP_TABLE[i - 4] ^ MathHelper.EXP_TABLE[i - 5] ^ MathHelper.EXP_TABLE[i - 6] ^ MathHelper.EXP_TABLE[i - 8]);
          MathHelper.LOG_TABLE.push(0);
        }

        for (var _i = 0; _i < 255; _i++) {
          MathHelper.LOG_TABLE[MathHelper.EXP_TABLE[_i]] = _i;
        }
      }
    }
    /**
     * Get the log of the value.
     * @param value The value to get the log of.
     * @returns the log of the value.
     */

  }, {
    key: "glog",
    value: function glog(value) {
      if (value < 1) {
        throw new Error("log(' + ".concat(value, " + ')'"));
      }

      return MathHelper.LOG_TABLE[value];
    }
    /**
     * Get the exponent of the value.
     * @param value The value to get the exponent of.
     * @returns The exponent of the value.
     */

  }, {
    key: "gexp",
    value: function gexp(value) {
      var localValue = value;

      while (value < 0) {
        localValue += 255;
      }

      while (value >= 256) {
        localValue -= 255;
      }

      return MathHelper.EXP_TABLE[localValue];
    }
  }]);

  return MathHelper;
}();

exports.MathHelper = MathHelper;

/***/ }),

/***/ "./dist/helpers/polynomial.js":
/*!************************************!*\
  !*** ./dist/helpers/polynomial.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./dist/helpers/mathHelper.js");
/**
 * Class to represent a polynomial.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var Polynomial =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Polynomial.
   * @param num The num of the polynomial.
   * @param shift The shift for the polynomial.
   */
  function Polynomial(num) {
    var shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Polynomial);

    var offset = 0;

    while (offset < num.length && num[offset] === 0) {
      offset++;
    }

    this._num = [];
    var len = num.length - offset;

    for (var i = 0; i < len; i++) {
      this._num.push(num[offset + i]);
    }

    for (var _i = 0; _i < shift; _i++) {
      this._num.push(0);
    }
  }
  /**
   * The the value of the polynomial at given index.
   * @param index The index.
   * @returns The value of the polynomial.
   */


  _createClass(Polynomial, [{
    key: "getAt",
    value: function getAt(index) {
      return this._num[index];
    }
    /**
     * Get the length of the polynomial.
     * @returns The polynomial.
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this._num.length;
    }
    /**
     * Convert the polynomial to a string.
     * @returns The string representation of the polynomial.
     */

  }, {
    key: "toString",
    value: function toString() {
      var buffer = "";

      for (var i = 0; i < this.getLength(); i++) {
        if (i > 0) {
          buffer += ",";
        }

        buffer += this.getAt(i);
      }

      return buffer.toString();
    }
    /**
     * Get the log representation of the polynomial.
     * @returns The log representation of the polynomial.
     */

  }, {
    key: "toLogString",
    value: function toLogString() {
      var buffer = "";

      for (var i = 0; i < this.getLength(); i++) {
        if (i > 0) {
          buffer += ",";
        }

        buffer += mathHelper_1.MathHelper.glog(this.getAt(i));
      }

      return buffer.toString();
    }
    /**
     * Multiply the polynomial with another one.
     * @param e The polynomial to multiply.
     * @returns The multiplication of the polynomials.
     */

  }, {
    key: "multiply",
    value: function multiply(e) {
      var num = [];
      var len = this.getLength() + e.getLength() - 1;

      for (var i = 0; i < len; i++) {
        num.push(0);
      }

      for (var _i2 = 0; _i2 < this.getLength(); _i2++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[_i2 + j] ^= mathHelper_1.MathHelper.gexp(mathHelper_1.MathHelper.glog(this.getAt(_i2)) + mathHelper_1.MathHelper.glog(e.getAt(j)));
        }
      }

      return new Polynomial(num);
    }
    /**
     * Get the modulus of the polynomial from another.
     * @param e The polynomial.
     * @returns The modules of the polynomials.
     */

  }, {
    key: "mod",
    value: function mod(e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }

      var ratio = mathHelper_1.MathHelper.glog(this.getAt(0)) - mathHelper_1.MathHelper.glog(e.getAt(0)); // create copy

      var num = [];

      for (var i = 0; i < this.getLength(); i++) {
        num.push(this.getAt(i));
      } // subtract and calc rest.


      for (var _i3 = 0; _i3 < e.getLength(); _i3++) {
        num[_i3] ^= mathHelper_1.MathHelper.gexp(mathHelper_1.MathHelper.glog(e.getAt(_i3)) + ratio);
      } // call recursively


      return new Polynomial(num).mod(e);
    }
  }]);

  return Polynomial;
}();

exports.Polynomial = Polynomial;

/***/ }),

/***/ "./dist/helpers/qrHelper.js":
/*!**********************************!*\
  !*** ./dist/helpers/qrHelper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errorCorrectLevel_1 = __webpack_require__(/*! ../models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js");

var maskPattern_1 = __webpack_require__(/*! ../models/maskPattern */ "./dist/models/maskPattern.js");

var qrDataMode_1 = __webpack_require__(/*! ../models/qrDataMode */ "./dist/models/qrDataMode.js");

var mathHelper_1 = __webpack_require__(/*! ./mathHelper */ "./dist/helpers/mathHelper.js");

var polynomial_1 = __webpack_require__(/*! ./polynomial */ "./dist/helpers/polynomial.js");
/**
 * Helper methods for QR generation.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QRHelper =
/*#__PURE__*/
function () {
  function QRHelper() {
    _classCallCheck(this, QRHelper);
  }

  _createClass(QRHelper, null, [{
    key: "getPatternPosition",

    /**
     * Get the pattern position for the given type number.
     * @param typeNumber The type number to get the pattern for.
     * @returns The pattern for the type number.
     */
    value: function getPatternPosition(typeNumber) {
      return QRHelper.PATTERN_POSITION_TABLE[typeNumber - 1];
    }
    /**
     * Get the max length of the data.
     * @param typeNumber The type number to get the max length for.
     * @param mode The data mode to get data max length for.
     * @param errorCorrectLevel The error correction to get the max length for.
     * @returns The max length.
     */

  }, {
    key: "getMaxLength",
    value: function getMaxLength(typeNumber, mode, errorCorrectLevel) {
      var t = typeNumber - 1;
      var e = 0;
      var m = 0;

      switch (errorCorrectLevel) {
        case errorCorrectLevel_1.ErrorCorrectLevel.L:
          e = 0;
          break;

        case errorCorrectLevel_1.ErrorCorrectLevel.M:
          e = 1;
          break;

        case errorCorrectLevel_1.ErrorCorrectLevel.Q:
          e = 2;
          break;

        case errorCorrectLevel_1.ErrorCorrectLevel.H:
          e = 3;
          break;

        default:
          throw new Error("Unknown error correction level ".concat(errorCorrectLevel));
      }

      switch (mode) {
        case qrDataMode_1.QRDataMode.number:
          m = 0;
          break;

        case qrDataMode_1.QRDataMode.alphaNumeric:
          m = 1;
          break;

        case qrDataMode_1.QRDataMode.byte8:
          m = 2;
          break;

        default:
          throw new Error("Unknown data mode ".concat(mode));
      }

      return QRHelper.MAX_LENGTH[t][e][m];
    }
    /**
     * Get the error correction polynomial for the error correcto length.
     * @param errorCorrectLength The error correction length to get the polynomial for.
     * @returns The polynomial for the error correction length.
     */

  }, {
    key: "getErrorCorrectPolynomial",
    value: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new polynomial_1.Polynomial([1]);

      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new polynomial_1.Polynomial([1, mathHelper_1.MathHelper.gexp(i)]));
      }

      return a;
    }
    /**
     * Get the mask method for the given pattern.
     * @param maskPattern The pattern to get the mask for.
     * @returns The mask method for the pattern.
     */

  }, {
    key: "getMaskMethod",
    value: function getMaskMethod(maskPattern) {
      switch (maskPattern) {
        case maskPattern_1.MaskPattern.PATTERN000:
          return function (i, j) {
            return (i + j) % 2 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN001:
          return function (i, j) {
            return i % 2 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN010:
          return function (i, j) {
            return j % 3 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN011:
          return function (i, j) {
            return (i + j) % 3 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN100:
          return function (i, j) {
            return (~~(i / 2) + ~~(j / 3)) % 2 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN101:
          return function (i, j) {
            return i * j % 2 + i * j % 3 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN110:
          return function (i, j) {
            return (i * j % 2 + i * j % 3) % 2 === 0;
          };

        case maskPattern_1.MaskPattern.PATTERN111:
          return function (i, j) {
            return (i * j % 3 + (i + j) % 2) % 2 === 0;
          };

        default:
          throw new Error("Invalid mask ".concat(maskPattern));
      }
    }
    /**
     * Get the BCH type info.
     * @param data The data to get the BCH type info for.
     * @returns The type info.
     */

  }, {
    key: "getBCHTypeInfo",
    value: function getBCHTypeInfo(data) {
      var d = data << 10;

      while (QRHelper.getBCHDigit(d) - QRHelper.getBCHDigit(QRHelper.G15) >= 0) {
        d ^= QRHelper.G15 << QRHelper.getBCHDigit(d) - QRHelper.getBCHDigit(QRHelper.G15);
      }

      return (data << 10 | d) ^ QRHelper.G15_MASK;
    }
    /**
     * Get the BCH type number.
     * @param data The data to get the BCH type number for.
     * @returns The type number.
     */

  }, {
    key: "getBCHTypeNumber",
    value: function getBCHTypeNumber(data) {
      var d = data << 12;

      while (QRHelper.getBCHDigit(d) - QRHelper.getBCHDigit(QRHelper.G18) >= 0) {
        d ^= QRHelper.G18 << QRHelper.getBCHDigit(d) - QRHelper.getBCHDigit(QRHelper.G18);
      }

      return data << 12 | d;
    }
    /* @internal */

  }, {
    key: "getBCHDigit",
    value: function getBCHDigit(data) {
      var localData = data;
      var digit = 0;

      while (localData !== 0) {
        digit++;
        localData >>>= 1;
      }

      return digit;
    }
  }]);

  return QRHelper;
}();
/* @internal */


QRHelper.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];
/* @internal */

QRHelper.MAX_LENGTH = [[[41, 25, 17, 10], [34, 20, 14, 8], [27, 16, 11, 7], [17, 10, 7, 4]], [[77, 47, 32, 20], [63, 38, 26, 16], [48, 29, 20, 12], [34, 20, 14, 8]], [[127, 77, 53, 32], [101, 61, 42, 26], [77, 47, 32, 20], [58, 35, 24, 15]], [[187, 114, 78, 48], [149, 90, 62, 38], [111, 67, 46, 28], [82, 50, 34, 21]], [[255, 154, 106, 65], [202, 122, 84, 52], [144, 87, 60, 37], [106, 64, 44, 27]], [[322, 195, 134, 82], [255, 154, 106, 65], [178, 108, 74, 45], [139, 84, 58, 36]], [[370, 224, 154, 95], [293, 178, 122, 75], [207, 125, 86, 53], [154, 93, 64, 39]], [[461, 279, 192, 118], [365, 221, 152, 93], [259, 157, 108, 66], [202, 122, 84, 52]], [[552, 335, 230, 141], [432, 262, 180, 111], [312, 189, 130, 80], [235, 143, 98, 60]], [[652, 395, 271, 167], [513, 311, 213, 131], [364, 221, 151, 93], [288, 174, 119, 74]]];
/* @internal */

QRHelper.G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
/* @internal */

QRHelper.G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
/* @internal */

QRHelper.G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
exports.QRHelper = QRHelper;

/***/ }),

/***/ "./dist/helpers/rsBlock.js":
/*!*********************************!*\
  !*** ./dist/helpers/rsBlock.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errorCorrectLevel_1 = __webpack_require__(/*! ../models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js");
/**
 * Class to represent a RS Block.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var RSBlock =
/*#__PURE__*/
function () {
  /**
   * Create a new insstance of RSBlock.
   * @param totalCount The total count for the block.
   * @param dataCount The data count for the block.
   */
  function RSBlock(totalCount, dataCount) {
    _classCallCheck(this, RSBlock);

    this._totalCount = totalCount;
    this._dataCount = dataCount;
  }
  /**
   * Get RS Blocks for the type number and error correct level.
   * @param typeNumber The type number.
   * @param errorCorrectLevel The error correct level.
   * @returns The RS Blocks.
   */


  _createClass(RSBlock, [{
    key: "getDataCount",

    /**
     * Get the data count.
     * @returns The data count.
     */
    value: function getDataCount() {
      return this._dataCount;
    }
    /**
     * Get the total count.
     * @returns The total count.
     */

  }, {
    key: "getTotalCount",
    value: function getTotalCount() {
      return this._totalCount;
    }
  }], [{
    key: "getRSBlocks",
    value: function getRSBlocks(typeNumber, errorCorrectLevel) {
      var rsBlock = RSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
      var length = rsBlock.length / 3;
      var list = [];

      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j++) {
          list.push(new RSBlock(totalCount, dataCount));
        }
      }

      return list;
    }
    /* @internal */

  }, {
    key: "getRsBlockTable",
    value: function getRsBlockTable(typeNumber, errorCorrectLevel) {
      switch (errorCorrectLevel) {
        case errorCorrectLevel_1.ErrorCorrectLevel.L:
          return RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

        case errorCorrectLevel_1.ErrorCorrectLevel.M:
          return RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

        case errorCorrectLevel_1.ErrorCorrectLevel.Q:
          return RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

        case errorCorrectLevel_1.ErrorCorrectLevel.H:
          return RSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

        default:
      }

      throw new Error("Invalid error correct lebel ".concat(errorCorrectLevel));
    }
  }]);

  return RSBlock;
}();
/* @internal */


RSBlock.RS_BLOCK_TABLE = [// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], // 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
exports.RSBlock = RSBlock;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./qr */ "./dist/qr.js"));

__export(__webpack_require__(/*! ./data/qrAlphaNumeric */ "./dist/data/qrAlphaNumeric.js"));

__export(__webpack_require__(/*! ./data/qrByte8 */ "./dist/data/qrByte8.js"));

__export(__webpack_require__(/*! ./data/qrNumber */ "./dist/data/qrNumber.js"));

__export(__webpack_require__(/*! ./helpers/bitBuffer */ "./dist/helpers/bitBuffer.js"));

__export(__webpack_require__(/*! ./helpers/mathHelper */ "./dist/helpers/mathHelper.js"));

__export(__webpack_require__(/*! ./helpers/polynomial */ "./dist/helpers/polynomial.js"));

__export(__webpack_require__(/*! ./helpers/qrHelper */ "./dist/helpers/qrHelper.js"));

__export(__webpack_require__(/*! ./helpers/rsBlock */ "./dist/helpers/rsBlock.js"));

__export(__webpack_require__(/*! ./models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js"));

__export(__webpack_require__(/*! ./models/maskPattern */ "./dist/models/maskPattern.js"));

__export(__webpack_require__(/*! ./models/qrDataBase */ "./dist/models/qrDataBase.js"));

__export(__webpack_require__(/*! ./models/qrDataMode */ "./dist/models/qrDataMode.js"));

/***/ }),

/***/ "./dist/models/errorCorrectLevel.js":
/*!******************************************!*\
  !*** ./dist/models/errorCorrectLevel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Error correction level to use for the QR Code.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */

var ErrorCorrectLevel;

(function (ErrorCorrectLevel) {
  /**
   * 7%
   */
  ErrorCorrectLevel[ErrorCorrectLevel["L"] = 1] = "L";
  /**
   * 15%
   */

  ErrorCorrectLevel[ErrorCorrectLevel["M"] = 0] = "M";
  /**
   * 25%
   */

  ErrorCorrectLevel[ErrorCorrectLevel["Q"] = 3] = "Q";
  /**
   * 30%
   */

  ErrorCorrectLevel[ErrorCorrectLevel["H"] = 2] = "H";
})(ErrorCorrectLevel = exports.ErrorCorrectLevel || (exports.ErrorCorrectLevel = {}));

/***/ }),

/***/ "./dist/models/maskPattern.js":
/*!************************************!*\
  !*** ./dist/models/maskPattern.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Mask patterns for QR codes.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */

var MaskPattern;

(function (MaskPattern) {
  /**
   * mask pattern 000
   */
  MaskPattern[MaskPattern["PATTERN000"] = 0] = "PATTERN000";
  /**
   * mask pattern 001
   */

  MaskPattern[MaskPattern["PATTERN001"] = 1] = "PATTERN001";
  /**
   * mask pattern 010
   */

  MaskPattern[MaskPattern["PATTERN010"] = 2] = "PATTERN010";
  /**
   * mask pattern 011
   */

  MaskPattern[MaskPattern["PATTERN011"] = 3] = "PATTERN011";
  /**
   * mask pattern 100
   */

  MaskPattern[MaskPattern["PATTERN100"] = 4] = "PATTERN100";
  /**
   * mask pattern 101
   */

  MaskPattern[MaskPattern["PATTERN101"] = 5] = "PATTERN101";
  /**
   * mask pattern 110
   */

  MaskPattern[MaskPattern["PATTERN110"] = 6] = "PATTERN110";
  /**
   * mask pattern 111
   */

  MaskPattern[MaskPattern["PATTERN111"] = 7] = "PATTERN111";
})(MaskPattern = exports.MaskPattern || (exports.MaskPattern = {}));

/***/ }),

/***/ "./dist/models/qrDataBase.js":
/*!***********************************!*\
  !*** ./dist/models/qrDataBase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var qrDataMode_1 = __webpack_require__(/*! ./qrDataMode */ "./dist/models/qrDataMode.js");
/**
 * Base class for storing QR Data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QRDataBase =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of QRDataBase.
   * @param mode The mode for the data.
   * @param data The data.
   */
  function QRDataBase(mode, data) {
    _classCallCheck(this, QRDataBase);

    this._mode = mode;
    this._data = data;
  }
  /**
   * Get the data mode.
   * @returns The data mode.
   */


  _createClass(QRDataBase, [{
    key: "getMode",
    value: function getMode() {
      return this._mode;
    }
    /**
     * Get the data.
     * @returns The data.
     */

  }, {
    key: "getData",
    value: function getData() {
      return this._data;
    }
    /**
     * Get the length in bits of the data.
     * @param typeNumber The type number to get the length for.
     * @returns The length in bits.
     */

  }, {
    key: "getLengthInBits",
    value: function getLengthInBits(typeNumber) {
      if (typeNumber >= 1 && typeNumber < 10) {
        switch (this._mode) {
          case qrDataMode_1.QRDataMode.number:
            return 10;

          case qrDataMode_1.QRDataMode.alphaNumeric:
            return 9;

          case qrDataMode_1.QRDataMode.byte8:
            return 8;

          default:
            throw new Error("Invalid mode ".concat(this._mode));
        }
      } else if (typeNumber < 27) {
        switch (this._mode) {
          case qrDataMode_1.QRDataMode.number:
            return 12;

          case qrDataMode_1.QRDataMode.alphaNumeric:
            return 11;

          case qrDataMode_1.QRDataMode.byte8:
            return 16;

          default:
            throw new Error("Invalid mode ".concat(this._mode));
        }
      } else if (typeNumber < 41) {
        switch (this._mode) {
          case qrDataMode_1.QRDataMode.number:
            return 14;

          case qrDataMode_1.QRDataMode.alphaNumeric:
            return 13;

          case qrDataMode_1.QRDataMode.byte8:
            return 16;

          default:
            throw new Error("Invalid mode ".concat(this._mode));
        }
      } else {
        throw new Error("Invalid typeNumber ".concat(typeNumber));
      }
    }
  }]);

  return QRDataBase;
}();

exports.QRDataBase = QRDataBase;

/***/ }),

/***/ "./dist/models/qrDataMode.js":
/*!***********************************!*\
  !*** ./dist/models/qrDataMode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The mode for the qr data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */

var QRDataMode;

(function (QRDataMode) {
  /**
   * number
   */
  QRDataMode[QRDataMode["number"] = 1] = "number";
  /**
   * alphabet and number
   */

  QRDataMode[QRDataMode["alphaNumeric"] = 2] = "alphaNumeric";
  /**
   * 8bit byte
   */

  QRDataMode[QRDataMode["byte8"] = 4] = "byte8";
})(QRDataMode = exports.QRDataMode || (exports.QRDataMode = {}));

/***/ }),

/***/ "./dist/qr.js":
/*!********************!*\
  !*** ./dist/qr.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var qrByte8_1 = __webpack_require__(/*! ./data/qrByte8 */ "./dist/data/qrByte8.js");

var bitBuffer_1 = __webpack_require__(/*! ./helpers/bitBuffer */ "./dist/helpers/bitBuffer.js");

var mathHelper_1 = __webpack_require__(/*! ./helpers/mathHelper */ "./dist/helpers/mathHelper.js");

var polynomial_1 = __webpack_require__(/*! ./helpers/polynomial */ "./dist/helpers/polynomial.js");

var qrHelper_1 = __webpack_require__(/*! ./helpers/qrHelper */ "./dist/helpers/qrHelper.js");

var rsBlock_1 = __webpack_require__(/*! ./helpers/rsBlock */ "./dist/helpers/rsBlock.js");

var errorCorrectLevel_1 = __webpack_require__(/*! ./models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js");

var qrDataBase_1 = __webpack_require__(/*! ./models/qrDataBase */ "./dist/models/qrDataBase.js");
/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QR =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of QR.
   * @param typeNumber 1 to 40
   * @param errorCorrectLevel 'L','M','Q','H'
   */
  function QR() {
    var typeNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var errorCorrectLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : errorCorrectLevel_1.ErrorCorrectLevel.L;

    _classCallCheck(this, QR);

    this._typeNumber = typeNumber;
    this._errorCorrectLevel = errorCorrectLevel;
    this._qrData = [];
    this._moduleCount = 0;
    this._modules = [];
    mathHelper_1.MathHelper.initialize();
  }
  /**
   * Add data to the QR Code.
   * @param qrData The data to add.
   */


  _createClass(QR, [{
    key: "addData",
    value: function addData(qrData) {
      if (qrData instanceof qrDataBase_1.QRDataBase) {
        this._qrData.push(qrData);
      } else if (typeof qrData === "string") {
        this._qrData.push(new qrByte8_1.QRByte8(qrData));
      } else {
        throw _typeof(qrData);
      }
    }
    /**
     * Generate the display buffer.
     * @param cellSize The size of the cell to generate.
     * @param margin The size of the margins to generate.
     * @returns Boolean buffer of pixels
     */

  }, {
    key: "generate",
    value: function generate() {
      var cellSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cellSize * 4;
      this.makeImpl(false, this.getBestMaskPattern());
      var mods = this._moduleCount;
      var size = cellSize * mods + margin * 2;
      var pixels = [];

      for (var y = 0; y < size; y += 1) {
        for (var x = 0; x < size; x += 1) {
          if (margin <= x && x < size - margin && margin <= y && y < size - margin && this.isDark(~~((y - margin) / cellSize), ~~((x - margin) / cellSize))) {
            pixels[x][y] = false;
          } else {
            pixels[x][y] = true;
          }
        }
      }

      return pixels;
    }
    /* @internal */

  }, {
    key: "isDark",
    value: function isDark(row, col) {
      if (this._modules[row][col] !== null) {
        return this._modules[row][col];
      } else {
        return false;
      }
    }
    /* @internal */

  }, {
    key: "getBestMaskPattern",
    value: function getBestMaskPattern() {
      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i++) {
        this.makeImpl(true, i);
        var lostPoint = this.getLostPoint();

        if (i === 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    }
    /* @internal */

  }, {
    key: "makeImpl",
    value: function makeImpl(test, maskPattern) {
      this._moduleCount = this._typeNumber * 4 + 17;
      this._modules = [];

      for (var i = 0; i < this._moduleCount; i++) {
        this._modules.push([]);

        for (var j = 0; j < this._moduleCount; j++) {
          this._modules[i].push(null);
        }
      }

      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this._moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this._moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);

      if (this._typeNumber >= 7) {
        this.setupTypeNumber(test);
      }

      var data = this.createData(this._typeNumber, this._errorCorrectLevel, this._qrData);
      this.mapData(data, maskPattern);
    }
    /* @internal */

  }, {
    key: "mapData",
    value: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this._moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = qrHelper_1.QRHelper.getMaskMethod(maskPattern);

      for (var col = this._moduleCount - 1; col > 0; col -= 2) {
        if (col === 6) {
          col -= 1;
        }

        var flag = true;

        while (flag) {
          for (var c = 0; c < 2; c++) {
            if (this._modules[row][col - c] === null) {
              var dark = false;

              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              this._modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || this._moduleCount <= row) {
            row -= inc;
            inc = -inc;
            flag = false;
          }
        }
      }
    }
    /* @internal */

  }, {
    key: "setupPositionAdjustPattern",
    value: function setupPositionAdjustPattern() {
      var pos = qrHelper_1.QRHelper.getPatternPosition(this._typeNumber);

      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];

          if (this._modules[row][col] !== null) {
            continue;
          }

          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
                this._modules[row + r][col + c] = true;
              } else {
                this._modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    }
    /* @internal */

  }, {
    key: "setupPositionProbePattern",
    value: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        for (var c = -1; c <= 7; c++) {
          if (row + r <= -1 || this._moduleCount <= row + r || col + c <= -1 || this._moduleCount <= col + c) {
            continue;
          }

          if (0 <= r && r <= 6 && (c === 0 || c === 6) || 0 <= c && c <= 6 && (r === 0 || r === 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this._modules[row + r][col + c] = true;
          } else {
            this._modules[row + r][col + c] = false;
          }
        }
      }
    }
    /* @internal */

  }, {
    key: "setupTimingPattern",
    value: function setupTimingPattern() {
      for (var r = 8; r < this._moduleCount - 8; r++) {
        if (this._modules[r][6] !== null) {
          continue;
        }

        this._modules[r][6] = r % 2 === 0;
      }

      for (var c = 8; c < this._moduleCount - 8; c++) {
        if (this._modules[6][c] !== null) {
          continue;
        }

        this._modules[6][c] = c % 2 === 0;
      }
    }
    /* @internal */

  }, {
    key: "setupTypeNumber",
    value: function setupTypeNumber(test) {
      var bits = qrHelper_1.QRHelper.getBCHTypeNumber(this._typeNumber);

      for (var i = 0; i < 18; i++) {
        this._modules[~~(i / 3)][i % 3 + this._moduleCount - 8 - 3] = !test && (bits >> i & 1) === 1;
      }

      for (var _i = 0; _i < 18; _i++) {
        this._modules[_i % 3 + this._moduleCount - 8 - 3][~~(_i / 3)] = !test && (bits >> _i & 1) === 1;
      }
    }
    /* @internal */

  }, {
    key: "setupTypeInfo",
    value: function setupTypeInfo(test, maskPattern) {
      var data = this._errorCorrectLevel << 3 | maskPattern;
      var bits = qrHelper_1.QRHelper.getBCHTypeInfo(data); // vertical

      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) === 1;

        if (i < 6) {
          this._modules[i][8] = mod;
        } else if (i < 8) {
          this._modules[i + 1][8] = mod;
        } else {
          this._modules[this._moduleCount - 15 + i][8] = mod;
        }
      } // horizontal


      for (var _i2 = 0; _i2 < 15; _i2++) {
        var _mod = !test && (bits >> _i2 & 1) === 1;

        if (_i2 < 8) {
          this._modules[8][this._moduleCount - _i2 - 1] = _mod;
        } else if (_i2 < 9) {
          this._modules[8][15 - _i2 - 1 + 1] = _mod;
        } else {
          this._modules[8][15 - _i2 - 1] = _mod;
        }
      } // fixed


      this._modules[this._moduleCount - 8][8] = !test;
    }
    /* @internal */

  }, {
    key: "getLostPoint",
    value: function getLostPoint() {
      var moduleCount = this._moduleCount;
      var lostPoint = 0; // LEVEL1

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = this.isDark(row, col);

          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r === 0 && c === 0) {
                continue;
              }

              if (dark === this.isDark(row + r, col + c)) {
                sameCount++;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      } // LEVEL2


      for (var _row = 0; _row < moduleCount - 1; _row++) {
        for (var _col = 0; _col < moduleCount - 1; _col++) {
          var count = 0;

          if (this.isDark(_row, _col)) {
            count++;
          }

          if (this.isDark(_row + 1, _col)) {
            count++;
          }

          if (this.isDark(_row, _col + 1)) {
            count++;
          }

          if (this.isDark(_row + 1, _col + 1)) {
            count++;
          }

          if (count === 0 || count === 4) {
            lostPoint += 3;
          }
        }
      } // LEVEL3


      for (var _row2 = 0; _row2 < moduleCount; _row2++) {
        for (var _col2 = 0; _col2 < moduleCount - 6; _col2++) {
          if (this.isDark(_row2, _col2) && !this.isDark(_row2, _col2 + 1) && this.isDark(_row2, _col2 + 2) && this.isDark(_row2, _col2 + 3) && this.isDark(_row2, _col2 + 4) && !this.isDark(_row2, _col2 + 5) && this.isDark(_row2, _col2 + 6)) {
            lostPoint += 40;
          }
        }
      }

      for (var _col3 = 0; _col3 < moduleCount; _col3++) {
        for (var _row3 = 0; _row3 < moduleCount - 6; _row3++) {
          if (this.isDark(_row3, _col3) && !this.isDark(_row3 + 1, _col3) && this.isDark(_row3 + 2, _col3) && this.isDark(_row3 + 3, _col3) && this.isDark(_row3 + 4, _col3) && !this.isDark(_row3 + 5, _col3) && this.isDark(_row3 + 6, _col3)) {
            lostPoint += 40;
          }
        }
      } // LEVEL4


      var darkCount = 0;

      for (var _col4 = 0; _col4 < moduleCount; _col4++) {
        for (var _row4 = 0; _row4 < moduleCount; _row4++) {
          if (this.isDark(_row4, _col4)) {
            darkCount++;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    }
    /* @internal */

  }, {
    key: "createData",
    value: function createData(typeNumber, errorCorrectLevel, dataArray) {
      var rsBlocks = rsBlock_1.RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
      var buffer = new bitBuffer_1.BitBuffer();

      for (var i = 0; i < dataArray.length; i++) {
        var data = dataArray[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), data.getLengthInBits(typeNumber));
        data.write(buffer);
      } // calc max data count


      var totalDataCount = 0;

      for (var _i3 = 0; _i3 < rsBlocks.length; _i3++) {
        totalDataCount += rsBlocks[_i3].getDataCount();
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("Code length overflow, (".concat(buffer.getLengthInBits(), " > ").concat(totalDataCount * 8));
      } // end


      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      } // padding


      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(false);
      } // padding


      var flag = true;

      while (flag) {
        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }

        buffer.put(QR.PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          flag = false;
        } else {
          buffer.put(QR.PAD1, 8);
        }
      }

      return this.createBytes(buffer, rsBlocks);
    }
    /* @internal */

  }, {
    key: "createBytes",
    value: function createBytes(buffer, rsBlocks) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var dcdata = [];
      var ecdata = [];

      for (var r = 0; r < rsBlocks.length; r++) {
        dcdata.push([]);
        ecdata.push([]);
      }

      function createNumArray(len) {
        var a = [];

        for (var i = 0; i < len; i++) {
          a.push(0);
        }

        return a;
      }

      for (var _r = 0; _r < rsBlocks.length; _r++) {
        var dcCount = rsBlocks[_r].getDataCount();

        var ecCount = rsBlocks[_r].getTotalCount() - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[_r] = createNumArray(dcCount);

        for (var i = 0; i < dcdata[_r].length; i++) {
          dcdata[_r][i] = 0xFF & buffer.getBuffer()[i + offset];
        }

        offset += dcCount;
        var rsPoly = qrHelper_1.QRHelper.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new polynomial_1.Polynomial(dcdata[_r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[_r] = createNumArray(rsPoly.getLength() - 1);

        for (var _i4 = 0; _i4 < ecdata[_r].length; _i4++) {
          var modIndex = _i4 + modPoly.getLength() - ecdata[_r].length;

          ecdata[_r][_i4] = modIndex >= 0 ? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;

      for (var _i5 = 0; _i5 < rsBlocks.length; _i5++) {
        totalCodeCount += rsBlocks[_i5].getTotalCount();
      }

      var data = createNumArray(totalCodeCount);
      var index = 0;

      for (var _i6 = 0; _i6 < maxDcCount; _i6++) {
        for (var _r2 = 0; _r2 < rsBlocks.length; _r2++) {
          if (_i6 < dcdata[_r2].length) {
            data[index] = dcdata[_r2][_i6];
            index++;
          }
        }
      }

      for (var _i7 = 0; _i7 < maxEcCount; _i7++) {
        for (var _r3 = 0; _r3 < rsBlocks.length; _r3++) {
          if (_i7 < ecdata[_r3].length) {
            data[index] = ecdata[_r3][_i7];
            index++;
          }
        }
      }

      return data;
    }
  }]);

  return QR;
}();
/* @internal */


QR.PAD0 = 0xEC;
/* @internal */

QR.PAD1 = 0x11;
exports.QR = QR;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7O0FBQ0E7QUFFQTs7Ozs7O0lBSUEsYzs7Ozs7QUFDSTs7OztBQUlBLDBCQUFZLElBQVosRUFBd0I7QUFBQTs7QUFBQSx1RkFDZCx3QkFBVyxZQURHLEVBQ1csSUFEWDtBQUV2QjtBQUVEOzs7Ozs7OztnQ0FJZ0I7QUFDWixhQUFPLEtBQUssT0FBTCxHQUFlLE1BQXRCO0FBQ0g7QUFFRDs7Ozs7OzswQkFJYSxN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RUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0EzQnlELEVBNEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0E1QnlELEVBNkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E3QnlELEVBOEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E5QnlELEVBK0J6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0EvQnlELEVBZ0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FoQ3lELEVBaUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FqQ3lELEVBa0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FsQ3lELEVBbUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FuQ3lELEVBb0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FwQ3lELEVBcUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FyQ3lELEVBc0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFB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S0FBaEMsRUFBcUM7QUFDakMsYUFBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFNBQVMsTUFBN0IsRUFBcUMsS0FBckMsRUFBMEM7QUFDdEMsY0FBSSxNQUFJLE9BQU8sR0FBUCxFQUFVLE1BQWxCLEVBQTBCO0FBQ3RCLGlCQUFLLEtBQUwsSUFBYyxPQUFPLEdBQVAsRUFBVSxHQUFWLENBQWQ7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxXQUFLLElBQUksTUFBSSxDQUFiLEVBQWdCLE1BQUksVUFBcEIsRUFBZ0MsS0FBaEMsRUFBcUM7QUFDakMsYUFBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFNBQVMsTUFBN0IsRUFBcUMsS0FBckMsRUFBMEM7QUFDdEMsY0FBSSxNQUFJLE9BQU8sR0FBUCxFQUFVLE1BQWxCLEVBQTBCO0FBQ3RCLGlCQUFLLEtBQUwsSUFBYyxPQUFPLEdBQVAsRUFBVSxHQUFWLENBQWQ7QUFDQTtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxhQUFPLElBQVA7QUFDSDs7Ozs7QUEzaEJEOzs7QUFDd0IsVUFBZSxJQUFmO0FBQ3hCOztBQUN3QixVQUFlLElBQWY7QUFKNUIsZ0IiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtcXItY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLWNvcmVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLWNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhUXJDb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSBhbHBoYSBudW1lcmljLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJBbHBoYU51bWVyaWMgZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkFscGhhTnVtZXJpYy5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgcXIgYWxwaGEgbnVtZXJpYy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAxIDwgcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLmdldENvZGUocy5jaGFyQXQoaSkpICogNDUgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2RlKHMuY2hhckF0KGkgKyAxKSksIDExKTtcclxuICAgICAgICAgICAgaSArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5nZXRDb2RlKHMuY2hhckF0KGkpKSwgNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRDb2RlKGMpIHtcclxuICAgICAgICBpZiAoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IFwiQVwiICYmIGMgPD0gXCJaXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtIFwiQVwiLmNoYXJDb2RlQXQoMCkgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiBcIjogcmV0dXJuIDM2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiRcIjogcmV0dXJuIDM3O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiVcIjogcmV0dXJuIDM4O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIipcIjogcmV0dXJuIDM5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIitcIjogcmV0dXJuIDQwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjogcmV0dXJuIDQxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5cIjogcmV0dXJuIDQyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjogcmV0dXJuIDQzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjpcIjogcmV0dXJuIDQ0O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSQWxwaGFOdW1lcmljID0gUVJBbHBoYU51bWVyaWM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkJiSEJvWVU1MWJXVnlhV011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5eGNrRnNjR2hoVG5WdFpYSnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVWc1JEczdPMGRCUjBjN1FVRkRTQ3h2UWtGQk5FSXNVMEZCVVN4MVFrRkJWVHRKUVVNeFF6czdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVms3VVVGRGNFSXNTMEZCU3l4RFFVRkRMSFZDUVVGVkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hUUVVGVE8xRkJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNUVUZCYVVJN1VVRkRNVUlzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWV0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUTA0c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEVmp0UlFVVkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEWkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UFFVRlBMRU5CUVVNc1EwRkJVenRSUVVWeVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU01UXp0aFFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMWxCUXpkQ0xFOUJRVThzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOdVJEdGhRVUZOTzFsQlEwZ3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRMUFzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUk3YjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNM1JEdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBSRUxIZERRVFpFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSA4IGJpdCBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJCeXRlOCBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSQnl0ZTguXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIDggYml0IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlOCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQnl0ZXModGhpcy5nZXREYXRhKCkpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgZGF0YSBpbnRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgdG8gd3JpdGUgaW50by5cclxuICAgICAqL1xyXG4gICAgd3JpdGUoYnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc3RyaW5nVG9CeXRlcyh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YVtpXSwgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdHJpbmdUb0J5dGVzKHN0cikge1xyXG4gICAgICAgIGNvbnN0IHV0ZjggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNoYXJjb2RlIDwgMHg4MCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKGNoYXJjb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhDMCB8IChjaGFyY29kZSA+PiA2KSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4RDgwMCB8fCBjaGFyY29kZSA+PSAweEUwMDApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaCgweEUwIHwgKGNoYXJjb2RlID4+IDEyKSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIC8vIFVURi0xNiBlbmNvZGVzIDB4MTAwMDAtMHgxMEZGRkYgYnlcclxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0aW5nIDB4MTAwMDAgYW5kIHNwbGl0dGluZyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIDIwIGJpdHMgb2YgMHgwLTB4RkZGRkYgaW50byB0d28gaGFsdmVzXHJcbiAgICAgICAgICAgICAgICBjaGFyY29kZSA9IDB4MTAwMDAgKyAoKChjaGFyY29kZSAmIDB4M0ZGKSA8PCAxMClcclxuICAgICAgICAgICAgICAgICAgICB8IChzdHIuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhGMCB8IChjaGFyY29kZSA+PiAxOCksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDEyKSAmIDB4M0YpLCAweDgwIHwgKChjaGFyY29kZSA+PiA2KSAmIDB4M0YpLCAweDgwIHwgKGNoYXJjb2RlICYgMHgzRikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1dGY4O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJCeXRlOCA9IFFSQnl0ZTg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkNlWFJsT0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwzRnlRbmwwWlRndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVU5CTEhGRVFVRnJSRHRCUVVOc1JDeHhSRUZCYTBRN1FVRkZiRVE3T3p0SFFVZEhPMEZCUTBnc1lVRkJjVUlzVTBGQlVTeDFRa0ZCVlR0SlFVTnVRenM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrN1VVRkRjRUlzUzBGQlN5eERRVUZETEhWQ1FVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyeERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU55UkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3l4RFFVRkRMRTFCUVdsQ08xRkJRekZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRiRU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETVVJN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEdGQlFXRXNRMEZCUXl4SFFVRlhPMUZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnFReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEVsQlFVa3NVVUZCVVN4SFFVRkhMRWxCUVVrc1JVRkJSVHRuUWtGRGFrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU4yUWp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVWQlFVVTdaMEpCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVU4wUWl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjJRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRWxCUVVrc1VVRkJVU3hKUVVGSkxFMUJRVTBzUlVGQlJUdG5Ra0ZEYUVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRM1pDTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTXZRaXhKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOMlF6dHBRa0ZCVFR0blFrRkRTQ3hEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZEU2l4eFEwRkJjVU03WjBKQlEzSkRMSGREUVVGM1F6dG5Ra0ZEZUVNc2VVTkJRWGxETzJkQ1FVTjZReXhSUVVGUkxFZEJRVWNzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdjMEpCUXpGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGRGRrSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUTJoRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU12UWl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjJRenRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenREUVVOS08wRkJla1JFTERCQ1FYbEVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFCYXNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YUJhc2VcIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIFFSIERhdGEgZm9yIHJlcHJlc2VudGluZyBhIG51bWJlci5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSTnVtYmVyIGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJOdW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlciwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAyIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLnN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAzKSksIDEwKTtcclxuICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMSkpLCA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMikpLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RyVG9OdW0ocykge1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBudW0gPSBudW0gKiAxMCArIHRoaXMuY2hhclRvTnVtKHMuY2hhckF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY2hhclRvTnVtKGMpIHtcclxuICAgICAgICBpZiAoXCIwXCIgPD0gYyAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSTnVtYmVyID0gUVJOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXhjazUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc2NVUkJRV3RFTzBGQlEyeEVMSEZFUVVGclJEdEJRVVZzUkRzN08wZEJSMGM3UVVGRFNDeGpRVUZ6UWl4VFFVRlJMSFZDUVVGVk8wbEJRM0JET3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzU1VGQldUdFJRVU53UWl4TFFVRkxMRU5CUVVNc2RVSkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGTkJRVk03VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4TlFVRnBRanRSUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRk5VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVllzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRWanRSUVVWRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRha0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzWkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UkR0cFFrRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRE9VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRekZFTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkVzUTBGQlF5eERRVUZUTzFGQlEzUkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJReTlDTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyaEVPMUZCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhEUVVGVE8xRkJRM1pDTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlEzUkNMRTlCUVU4c1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6bERPMUZCUTBRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRjRSRVFzTkVKQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgZm9yIG1haW50YWluaW5nIGRhdGEgYml0cy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIEJpdEJ1ZmZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgfVxyXG4gICAgZ2V0QnVmZmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRMZW5ndGhJbkJpdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcclxuICAgIH1cclxuICAgIHB1dChudW0sIGxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEJpdChiaXQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGVuZ3RoID09PSB0aGlzLl9idWZmZXIubGVuZ3RoICogOCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJbfn4odGhpcy5fbGVuZ3RoIC8gOCldIHw9ICgweDgwID4+PiAodGhpcy5fbGVuZ3RoICUgOCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sZW5ndGgrKztcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGhJbkJpdHMoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLmdldEJpdChpKSA/IFwiMVwiIDogXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRCaXQoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLl9idWZmZXJbfn4oaW5kZXggLyA4KV0gPj4+ICg3IC0gaW5kZXggJSA4KSkgJiAxKSA9PT0gMTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJpdEJ1ZmZlciA9IEJpdEJ1ZmZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sMFFuVm1abVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZZbWwwUW5WbVptVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVsSk8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZOTEZOQlFWTTdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVk5MR1ZCUVdVN1VVRkRiRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlRTeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdNN1VVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtRN1NVRkRUQ3hEUVVGRE8wbEJSVTBzVFVGQlRTeERRVUZETEVkQlFWazdVVUZEZEVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU14UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjRRanRSUVVORUxFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlEwd3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWTkxGRkJRVkU3VVVGRFdDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03VTBGRGVFTTdVVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVOHNUVUZCVFN4RFFVRkRMRXRCUVdFN1VVRkRlRUlzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtVc1EwRkJRenREUVVOS08wRkJOVU5FTERoQ1FUUkRReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgdG8gaGVscGVyIHdpdGggbWF0aC5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIE1hdGhIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtYXRoIGhlbHBlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCFNYXRoSGVscGVyLkVYUF9UQUJMRSkge1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRS5wdXNoKGkgPCA4ID8gMSA8PCBpIDpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNF0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNV0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNl0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gOF0pO1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEUucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRVtNYXRoSGVscGVyLkVYUF9UQUJMRVtpXV0gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgbG9nIG9mLlxyXG4gICAgICogQHJldHVybnMgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGxvZygnICsgJHt2YWx1ZX0gKyAnKSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuTE9HX1RBQkxFW3ZhbHVlXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBleHBvbmVudCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgZXhwb25lbnQgb2YuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXhwb25lbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V4cCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBsb2NhbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgd2hpbGUgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBsb2NhbFZhbHVlICs9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHZhbHVlID49IDI1Nikge1xyXG4gICAgICAgICAgICBsb2NhbFZhbHVlIC09IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2xvY2FsVmFsdWVdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0aEhlbHBlciA9IE1hdGhIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRjBhRWhsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDIxaGRHaElaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3pzN1IwRkhSenRCUVVOSU8wbEJUVWs3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVOMlFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVNeFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVNeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNeFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzUkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNMElzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU16UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUXpOQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycERMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRE8xbEJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNKRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJZVHRSUVVNMVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRXQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEZkQlFWY3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRUUVVNM1F6dFJRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQllUdFJRVU0xUWl4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGRrSXNUMEZCVHl4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRMlFzVlVGQlZTeEpRVUZKTEVkQlFVY3NRMEZCUXp0VFFVTnlRanRSUVVORUxFOUJRVThzUzBGQlN5eEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTnFRaXhWUVVGVkxFbEJRVWtzUjBGQlJ5eERRVUZETzFOQlEzSkNPMUZCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUXpWRExFTkJRVU03UTBGRFNqdEJRWFJFUkN4blEwRnpSRU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vbWF0aEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIHBvbHlub21pYWwuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBQb2x5bm9taWFsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFBvbHlub21pYWwuXHJcbiAgICAgKiBAcGFyYW0gbnVtIFRoZSBudW0gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcGFyYW0gc2hpZnQgVGhlIHNoaWZ0IGZvciB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtLCBzaGlmdCA9IDApIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbnVtLmxlbmd0aCAmJiBudW1bb2Zmc2V0XSA9PT0gMCkge1xyXG4gICAgICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbnVtID0gW107XHJcbiAgICAgICAgY29uc3QgbGVuID0gbnVtLmxlbmd0aCAtIG9mZnNldDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX251bS5wdXNoKG51bVtvZmZzZXQgKyBpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpZnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9udW0ucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aGUgdmFsdWUgb2YgdGhlIHBvbHlub21pYWwgYXQgZ2l2ZW4gaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4LlxyXG4gICAgICogQHJldHVybnMgVGhlIHZhbHVlIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBnZXRBdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW1baW5kZXhdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHBvbHlub21pYWwgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5nZXRBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxvZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsb2cgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIHRvTG9nU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE11bHRpcGx5IHRoZSBwb2x5bm9taWFsIHdpdGggYW5vdGhlciBvbmUuXHJcbiAgICAgKiBAcGFyYW0gZSBUaGUgcG9seW5vbWlhbCB0byBtdWx0aXBseS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtdWx0aXBsaWNhdGlvbiBvZiB0aGUgcG9seW5vbWlhbHMuXHJcbiAgICAgKi9cclxuICAgIG11bHRpcGx5KGUpIHtcclxuICAgICAgICBjb25zdCBudW0gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmdldExlbmd0aCgpICsgZS5nZXRMZW5ndGgoKSAtIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBudW0ucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG51bVtpICsgal0gXj0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoaSkpICtcclxuICAgICAgICAgICAgICAgICAgICBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoaikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBvbHlub21pYWwobnVtKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtb2R1bHVzIG9mIHRoZSBwb2x5bm9taWFsIGZyb20gYW5vdGhlci5cclxuICAgICAqIEBwYXJhbSBlIFRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1vZHVsZXMgb2YgdGhlIHBvbHlub21pYWxzLlxyXG4gICAgICovXHJcbiAgICBtb2QoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KDApKSAtIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdCgwKSk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGNvcHlcclxuICAgICAgICBjb25zdCBudW0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBudW0ucHVzaCh0aGlzLmdldEF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidHJhY3QgYW5kIGNhbGMgcmVzdC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBudW1baV0gXj0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoaSkpICsgcmF0aW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5bm9taWFsKG51bSkubW9kKGUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9seW5vbWlhbCA9IFBvbHlub21pYWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXNlVzV2YldsaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDNCdmJIbHViMjFwWVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERaRFFVRXdRenRCUVVVeFF6czdPMGRCUjBjN1FVRkRTRHRKUVVsSk96czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxFZEJRV0VzUlVGQlJTeFJRVUZuUWl4RFFVRkRPMUZCUTNoRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm1MRTlCUVU4c1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU0zUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRUUVVOYU8xRkJSVVFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOb1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnVRenRSUVVORUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETlVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRja0k3U1VGRFRDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4TFFVRmhPMUZCUTNSQ0xFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVTBGQlV6dFJRVU5hTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRE5VSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4yUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExQXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJRenRoUVVOcVFqdFpRVU5FTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRmRCUVZjN1VVRkRaQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTFBc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF6dGhRVU5xUWp0WlFVTkVMRTFCUVUwc1NVRkJTU3gxUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETlVNN1VVRkRSQ3hQUVVGUExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxGRkJRVkVzUTBGQlF5eERRVUZoTzFGQlEzcENMRTFCUVUwc1IwRkJSeXhIUVVGaExFVkJRVVVzUTBGQlF6dFJRVU42UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFpqdFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGRrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEY0VNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eDFRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVONFJDeDFRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1F6dFRRVU5LTzFGQlEwUXNUMEZCVHl4SlFVRkpMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRWRCUVVjc1EwRkJReXhEUVVGaE8xRkJRM0JDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRkRU1zVDBGQlR5eEpRVUZKTEVOQlFVTTdVMEZEWmp0UlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk0wVXNZMEZCWXp0UlFVTmtMRTFCUVUwc1IwRkJSeXhIUVVGaExFVkJRVVVzUTBGQlF6dFJRVU42UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzWkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5DTzFGQlJVUXNNRUpCUVRCQ08xRkJRekZDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGNFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRSUVVWRUxHMUNRVUZ0UWp0UlFVTnVRaXhQUVVGUExFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPME5CUTBvN1FVRjJTRVFzWjBOQmRVaERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKTtcclxuY29uc3QgbWFza1BhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvbWFza1BhdHRlcm5cIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vbWF0aEhlbHBlclwiKTtcclxuY29uc3QgcG9seW5vbWlhbF8xID0gcmVxdWlyZShcIi4vcG9seW5vbWlhbFwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBtZXRob2RzIGZvciBRUiBnZW5lcmF0aW9uLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHBhdHRlcm4gcG9zaXRpb24gZm9yIHRoZSBnaXZlbiB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIHBhdHRlcm4gZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBhdHRlcm4gZm9yIHRoZSB0eXBlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFBhdHRlcm5Qb3NpdGlvbih0eXBlTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFFSSGVscGVyLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1heCBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEBwYXJhbSBtb2RlIFRoZSBkYXRhIG1vZGUgdG8gZ2V0IGRhdGEgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgVGhlIGVycm9yIGNvcnJlY3Rpb24gdG8gZ2V0IHRoZSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtYXggbGVuZ3RoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0TWF4TGVuZ3RoKHR5cGVOdW1iZXIsIG1vZGUsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgY29uc3QgdCA9IHR5cGVOdW1iZXIgLSAxO1xyXG4gICAgICAgIGxldCBlID0gMDtcclxuICAgICAgICBsZXQgbSA9IDA7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTDpcclxuICAgICAgICAgICAgICAgIGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5NOlxyXG4gICAgICAgICAgICAgICAgZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLlE6XHJcbiAgICAgICAgICAgICAgICBlID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuSDpcclxuICAgICAgICAgICAgICAgIGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZXJyb3IgY29ycmVjdGlvbiBsZXZlbCAke2Vycm9yQ29ycmVjdExldmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBtID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzpcclxuICAgICAgICAgICAgICAgIG0gPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6XHJcbiAgICAgICAgICAgICAgICBtID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEgbW9kZSAke21vZGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBRUkhlbHBlci5NQVhfTEVOR1RIW3RdW2VdW21dO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGVycm9yIGNvcnJlY3Rpb24gcG9seW5vbWlhbCBmb3IgdGhlIGVycm9yIGNvcnJlY3RvIGxlbmd0aC5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZW5ndGggVGhlIGVycm9yIGNvcnJlY3Rpb24gbGVuZ3RoIHRvIGdldCB0aGUgcG9seW5vbWlhbCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcG9seW5vbWlhbCBmb3IgdGhlIGVycm9yIGNvcnJlY3Rpb24gbGVuZ3RoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlcnJvckNvcnJlY3RMZW5ndGgpIHtcclxuICAgICAgICBsZXQgYSA9IG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChbMV0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JDb3JyZWN0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYSA9IGEubXVsdGlwbHkobmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKFsxLCBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKGkpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtYXNrIG1ldGhvZCBmb3IgdGhlIGdpdmVuIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0gbWFza1BhdHRlcm4gVGhlIHBhdHRlcm4gdG8gZ2V0IHRoZSBtYXNrIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtYXNrIG1ldGhvZCBmb3IgdGhlIHBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXNrTWV0aG9kKG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAwMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKyBqKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiBpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IGogJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAxMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKyBqKSAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAofn4oaSAvIDIpICsgfn4oaiAvIDMpKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjExMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWFzayAke21hc2tQYXR0ZXJufWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBCQ0ggdHlwZSBpbmZvLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZ2V0IHRoZSBCQ0ggdHlwZSBpbmZvIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0eXBlIGluZm8uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hUeXBlSW5mbyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhIDw8IDEwO1xyXG4gICAgICAgIHdoaWxlIChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxNSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChRUkhlbHBlci5HMTUgPDwgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC1cclxuICAgICAgICAgICAgICAgIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxNSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIFFSSGVscGVyLkcxNV9NQVNLO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEJDSCB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGdldCB0aGUgQkNIIHR5cGUgbnVtYmVyIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0eXBlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEJDSFR5cGVOdW1iZXIoZGF0YSkge1xyXG4gICAgICAgIGxldCBkID0gZGF0YSA8PCAxMjtcclxuICAgICAgICB3aGlsZSAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLSBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTgpID49IDApIHtcclxuICAgICAgICAgICAgZCBePSAoUVJIZWxwZXIuRzE4IDw8IChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtXHJcbiAgICAgICAgICAgICAgICBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIRGlnaXQoZGF0YSkge1xyXG4gICAgICAgIGxldCBsb2NhbERhdGEgPSBkYXRhO1xyXG4gICAgICAgIGxldCBkaWdpdCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsRGF0YSAhPT0gMCkge1xyXG4gICAgICAgICAgICBkaWdpdCsrO1xyXG4gICAgICAgICAgICBsb2NhbERhdGEgPj4+PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnaXQ7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLlBBVFRFUk5fUE9TSVRJT05fVEFCTEUgPSBbXHJcbiAgICBbXSxcclxuICAgIFs2LCAxOF0sXHJcbiAgICBbNiwgMjJdLFxyXG4gICAgWzYsIDI2XSxcclxuICAgIFs2LCAzMF0sXHJcbiAgICBbNiwgMzRdLFxyXG4gICAgWzYsIDIyLCAzOF0sXHJcbiAgICBbNiwgMjQsIDQyXSxcclxuICAgIFs2LCAyNiwgNDZdLFxyXG4gICAgWzYsIDI4LCA1MF0sXHJcbiAgICBbNiwgMzAsIDU0XSxcclxuICAgIFs2LCAzMiwgNThdLFxyXG4gICAgWzYsIDM0LCA2Ml0sXHJcbiAgICBbNiwgMjYsIDQ2LCA2Nl0sXHJcbiAgICBbNiwgMjYsIDQ4LCA3MF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NF0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OF0sXHJcbiAgICBbNiwgMzAsIDU2LCA4Ml0sXHJcbiAgICBbNiwgMzAsIDU4LCA4Nl0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MF0sXHJcbiAgICBbNiwgMjgsIDUwLCA3MiwgOTRdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzQsIDk4XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxyXG4gICAgWzYsIDI4LCA1NCwgODAsIDEwNl0sXHJcbiAgICBbNiwgMzIsIDU4LCA4NCwgMTEwXSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTAsIDExOF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxyXG4gICAgWzYsIDI2LCA1MiwgNzgsIDEwNCwgMTMwXSxcclxuICAgIFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0sXHJcbiAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyXSxcclxuICAgIFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXHJcbiAgICBbNiwgMjQsIDUwLCA3NiwgMTAyLCAxMjgsIDE1NF0sXHJcbiAgICBbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0sXHJcbiAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXHJcbiAgICBbNiwgMjYsIDU0LCA4MiwgMTEwLCAxMzgsIDE2Nl0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF1cclxuXTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLk1BWF9MRU5HVEggPSBbXHJcbiAgICBbWzQxLCAyNSwgMTcsIDEwXSwgWzM0LCAyMCwgMTQsIDhdLCBbMjcsIDE2LCAxMSwgN10sIFsxNywgMTAsIDcsIDRdXSxcclxuICAgIFtbNzcsIDQ3LCAzMiwgMjBdLCBbNjMsIDM4LCAyNiwgMTZdLCBbNDgsIDI5LCAyMCwgMTJdLCBbMzQsIDIwLCAxNCwgOF1dLFxyXG4gICAgW1sxMjcsIDc3LCA1MywgMzJdLCBbMTAxLCA2MSwgNDIsIDI2XSwgWzc3LCA0NywgMzIsIDIwXSwgWzU4LCAzNSwgMjQsIDE1XV0sXHJcbiAgICBbWzE4NywgMTE0LCA3OCwgNDhdLCBbMTQ5LCA5MCwgNjIsIDM4XSwgWzExMSwgNjcsIDQ2LCAyOF0sIFs4MiwgNTAsIDM0LCAyMV1dLFxyXG4gICAgW1syNTUsIDE1NCwgMTA2LCA2NV0sIFsyMDIsIDEyMiwgODQsIDUyXSwgWzE0NCwgODcsIDYwLCAzN10sIFsxMDYsIDY0LCA0NCwgMjddXSxcclxuICAgIFtbMzIyLCAxOTUsIDEzNCwgODJdLCBbMjU1LCAxNTQsIDEwNiwgNjVdLCBbMTc4LCAxMDgsIDc0LCA0NV0sIFsxMzksIDg0LCA1OCwgMzZdXSxcclxuICAgIFtbMzcwLCAyMjQsIDE1NCwgOTVdLCBbMjkzLCAxNzgsIDEyMiwgNzVdLCBbMjA3LCAxMjUsIDg2LCA1M10sIFsxNTQsIDkzLCA2NCwgMzldXSxcclxuICAgIFtbNDYxLCAyNzksIDE5MiwgMTE4XSwgWzM2NSwgMjIxLCAxNTIsIDkzXSwgWzI1OSwgMTU3LCAxMDgsIDY2XSwgWzIwMiwgMTIyLCA4NCwgNTJdXSxcclxuICAgIFtbNTUyLCAzMzUsIDIzMCwgMTQxXSwgWzQzMiwgMjYyLCAxODAsIDExMV0sIFszMTIsIDE4OSwgMTMwLCA4MF0sIFsyMzUsIDE0MywgOTgsIDYwXV0sXHJcbiAgICBbWzY1MiwgMzk1LCAyNzEsIDE2N10sIFs1MTMsIDMxMSwgMjEzLCAxMzFdLCBbMzY0LCAyMjEsIDE1MSwgOTNdLCBbMjg4LCAxNzQsIDExOSwgNzRdXVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE1ID0gKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KVxyXG4gICAgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKVxyXG4gICAgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMClcclxuICAgIHwgKDEgPDwgNCkgfCAoMSA8PCAxKTtcclxuZXhwb3J0cy5RUkhlbHBlciA9IFFSSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5eGNraGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYlVWQlFXZEZPMEZCUTJoRkxIVkVRVUZ2UkR0QlFVTndSQ3h4UkVGQmEwUTdRVUZEYkVRc05rTkJRVEJETzBGQlF6RkRMRFpEUVVFd1F6dEJRVVV4UXpzN08wZEJSMGM3UVVGRFNEdEpRWFZGU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR3RDUVVGclFpeERRVUZETEZWQlFXdENPMUZCUXk5RExFOUJRVThzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhWUVVGclFpeEZRVUZGTEVsQlFXZENMRVZCUVVVc2FVSkJRVzlETzFGQlEycEhMRTFCUVUwc1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlExWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVllzVVVGQlVTeHBRa0ZCYVVJc1JVRkJSVHRaUVVOMlFpeExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eE5RVUZOTzFsQlEzWkRMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRTFCUVUwN1dVRkRka01zUzBGQlN5eHhRMEZCYVVJc1EwRkJReXhEUVVGRE8yZENRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVU1zVFVGQlRUdFpRVU4yUXl4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNaRE8yZENRVU5KTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwTkJRV3RETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU01UlR0UlFVVkVMRkZCUVZFc1NVRkJTU3hGUVVGRk8xbEJRMVlzUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRTFCUVUwN1owSkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRM0pETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhaUVVGWk8yZENRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVU1zVFVGQlRUdFpRVU16UXl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zUzBGQlN6dG5Ra0ZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEUxQlFVMDdXVUZEY0VNN1owSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4eFFrRkJjVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTndSRHRSUVVWRUxFOUJRVThzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhyUWtGQk1FSTdVVUZET1VRc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeDFRa0ZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVUxUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4MVFrRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpORU8xRkJSVVFzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQmJVSTdVVUZETTBNc1VVRkJVU3hYUVVGWExFVkJRVVU3V1VGRGFrSXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNaRUxFdEJRVXNzZVVKQlFWY3NRMEZCUXl4VlFVRlZPMmRDUVVOMlFpeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRha1FzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOcVJDeExRVUZMTEhsQ1FVRlhMRU5CUVVNc1ZVRkJWVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZGtRc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzWkZMRXRCUVVzc2VVSkJRVmNzUTBGQlF5eFZRVUZWTzJkQ1FVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRja1VzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUXpORkxFdEJRVXNzZVVKQlFWY3NRMEZCUXl4VlFVRlZPMmRDUVVOMlFpeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVXpSVHRuUWtGRFNTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeFhRVUZYTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNSRU8wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVZrN1VVRkRja01zU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOdVFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzUkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRelZETzFGQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCV1R0UlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTI1Q0xFOUJRVThzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRFVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU14UXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVU03VVVGRFJDeFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCV1R0UlFVTnVReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyUXNUMEZCVHl4VFFVRlRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRM0JDTEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUTFJc1UwRkJVeXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU53UWp0UlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wbEJRMnBDTEVOQlFVTTdPMEZCYUUxRUxHVkJRV1U3UVVGRFV5d3JRa0ZCYzBJc1IwRkJaVHRKUVVONlJDeEZRVUZGTzBsQlEwWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMllzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTJZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMjVDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTnVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGNFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNCQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU53UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRjRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzQkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNwQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU42UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM3BDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRla0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1EwRkRha01zUTBGQlF6dEJRVVZHTEdWQlFXVTdRVUZEVXl4dFFrRkJWU3hIUVVGcFFqdEpRVU12UXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNFVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1pGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFJTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkROVVVzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXk5RkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtZc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzQkdMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU55Uml4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UTBGRGVrWXNRMEZCUXp0QlFVVkdMR1ZCUVdVN1FVRkRVeXhaUVVGSExFZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wMUJReTlFTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSV2hFTEdWQlFXVTdRVUZEVXl4WlFVRkhMRWRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMDFCUTJwRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJUTkVMR1ZCUVdVN1FVRkRVeXhwUWtGQlVTeEhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dE5RVU4wUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVhKRk9VSXNORUpCYTAxREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgUlMgQmxvY2suXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBSU0Jsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3N0YW5jZSBvZiBSU0Jsb2NrLlxyXG4gICAgICogQHBhcmFtIHRvdGFsQ291bnQgVGhlIHRvdGFsIGNvdW50IGZvciB0aGUgYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gZGF0YUNvdW50IFRoZSBkYXRhIGNvdW50IGZvciB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRvdGFsQ291bnQsIGRhdGFDb3VudCkge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG4gICAgICAgIHRoaXMuX2RhdGFDb3VudCA9IGRhdGFDb3VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IFJTIEJsb2NrcyBmb3IgdGhlIHR5cGUgbnVtYmVyIGFuZCBlcnJvciBjb3JyZWN0IGxldmVsLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsIFRoZSBlcnJvciBjb3JyZWN0IGxldmVsLlxyXG4gICAgICogQHJldHVybnMgVGhlIFJTIEJsb2Nrcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgY29uc3QgcnNCbG9jayA9IFJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSByc0Jsb2NrW2kgKiAzICsgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IFJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBnZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5MOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLk06XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5IOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGVycm9yIGNvcnJlY3QgbGViZWwgJHtlcnJvckNvcnJlY3RMZXZlbH1gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhIGNvdW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgY291bnQuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGFDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUNvdW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRvdGFsIGNvdW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHRvdGFsIGNvdW50LlxyXG4gICAgICovXHJcbiAgICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbENvdW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5SU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xyXG4gICAgLy8gTFxyXG4gICAgLy8gTVxyXG4gICAgLy8gUVxyXG4gICAgLy8gSFxyXG4gICAgLy8gMVxyXG4gICAgWzEsIDI2LCAxOV0sXHJcbiAgICBbMSwgMjYsIDE2XSxcclxuICAgIFsxLCAyNiwgMTNdLFxyXG4gICAgWzEsIDI2LCA5XSxcclxuICAgIC8vIDJcclxuICAgIFsxLCA0NCwgMzRdLFxyXG4gICAgWzEsIDQ0LCAyOF0sXHJcbiAgICBbMSwgNDQsIDIyXSxcclxuICAgIFsxLCA0NCwgMTZdLFxyXG4gICAgLy8gM1xyXG4gICAgWzEsIDcwLCA1NV0sXHJcbiAgICBbMSwgNzAsIDQ0XSxcclxuICAgIFsyLCAzNSwgMTddLFxyXG4gICAgWzIsIDM1LCAxM10sXHJcbiAgICAvLyA0XHJcbiAgICBbMSwgMTAwLCA4MF0sXHJcbiAgICBbMiwgNTAsIDMyXSxcclxuICAgIFsyLCA1MCwgMjRdLFxyXG4gICAgWzQsIDI1LCA5XSxcclxuICAgIC8vIDVcclxuICAgIFsxLCAxMzQsIDEwOF0sXHJcbiAgICBbMiwgNjcsIDQzXSxcclxuICAgIFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcbiAgICBbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxyXG4gICAgLy8gNlxyXG4gICAgWzIsIDg2LCA2OF0sXHJcbiAgICBbNCwgNDMsIDI3XSxcclxuICAgIFs0LCA0MywgMTldLFxyXG4gICAgWzQsIDQzLCAxNV0sXHJcbiAgICAvLyA3XHJcbiAgICBbMiwgOTgsIDc4XSxcclxuICAgIFs0LCA0OSwgMzFdLFxyXG4gICAgWzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcclxuICAgIFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXHJcbiAgICAvLyA4XHJcbiAgICBbMiwgMTIxLCA5N10sXHJcbiAgICBbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxyXG4gICAgWzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcclxuICAgIFs0LCA0MCwgMTQsIDIsIDQxLCAxNV0sXHJcbiAgICAvLyA5XHJcbiAgICBbMiwgMTQ2LCAxMTZdLFxyXG4gICAgWzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuICAgIFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXHJcbiAgICBbNCwgMzYsIDEyLCA0LCAzNywgMTNdLFxyXG4gICAgLy8gMTBcclxuICAgIFsyLCA4NiwgNjgsIDIsIDg3LCA2OV0sXHJcbiAgICBbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxyXG4gICAgWzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgIFs2LCA0MywgMTUsIDIsIDQ0LCAxNl0sXHJcbiAgICAvLyAxMVxyXG4gICAgWzQsIDEwMSwgODFdLFxyXG4gICAgWzEsIDgwLCA1MCwgNCwgODEsIDUxXSxcclxuICAgIFs0LCA1MCwgMjIsIDQsIDUxLCAyM10sXHJcbiAgICBbMywgMzYsIDEyLCA4LCAzNywgMTNdLFxyXG4gICAgLy8gMTJcclxuICAgIFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcclxuICAgIFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcbiAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG4gICAgWzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcclxuICAgIC8vIDEzXHJcbiAgICBbNCwgMTMzLCAxMDddLFxyXG4gICAgWzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcclxuICAgIFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcbiAgICBbMTIsIDMzLCAxMSwgNCwgMzQsIDEyXSxcclxuICAgIC8vIDE0XHJcbiAgICBbMywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuICAgIFs0LCA2NCwgNDAsIDUsIDY1LCA0MV0sXHJcbiAgICBbMTEsIDM2LCAxNiwgNSwgMzcsIDE3XSxcclxuICAgIFsxMSwgMzYsIDEyLCA1LCAzNywgMTNdLFxyXG4gICAgLy8gMTVcclxuICAgIFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcclxuICAgIFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXHJcbiAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgWzExLCAzNiwgMTIsIDcsIDM3LCAxM10sXHJcbiAgICAvLyAxNlxyXG4gICAgWzUsIDEyMiwgOTgsIDEsIDEyMywgOTldLFxyXG4gICAgWzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgIFsxNSwgNDMsIDE5LCAyLCA0NCwgMjBdLFxyXG4gICAgWzMsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcbiAgICAvLyAxN1xyXG4gICAgWzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuICAgIFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXHJcbiAgICAvLyAxOFxyXG4gICAgWzUsIDE1MCwgMTIwLCAxLCAxNTEsIDEyMV0sXHJcbiAgICBbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG4gICAgWzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXHJcbiAgICBbMiwgNDIsIDE0LCAxOSwgNDMsIDE1XSxcclxuICAgIC8vIDE5XHJcbiAgICBbMywgMTQxLCAxMTMsIDQsIDE0MiwgMTE0XSxcclxuICAgIFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxyXG4gICAgWzE3LCA0NywgMjEsIDQsIDQ4LCAyMl0sXHJcbiAgICBbOSwgMzksIDEzLCAxNiwgNDAsIDE0XSxcclxuICAgIC8vIDIwXHJcbiAgICBbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgIFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG4gICAgWzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXHJcbiAgICBbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXHJcbiAgICAvLyAyMVxyXG4gICAgWzQsIDE0NCwgMTE2LCA0LCAxNDUsIDExN10sXHJcbiAgICBbMTcsIDY4LCA0Ml0sXHJcbiAgICBbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuICAgIFsxOSwgNDYsIDE2LCA2LCA0NywgMTddLFxyXG4gICAgLy8gMjJcclxuICAgIFsyLCAxMzksIDExMSwgNywgMTQwLCAxMTJdLFxyXG4gICAgWzE3LCA3NCwgNDZdLFxyXG4gICAgWzcsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXHJcbiAgICBbMzQsIDM3LCAxM10sXHJcbiAgICAvLyAyM1xyXG4gICAgWzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXHJcbiAgICBbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcclxuICAgIC8vIDI0XHJcbiAgICBbNiwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuICAgIFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG4gICAgWzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG4gICAgWzMwLCA0NiwgMTYsIDIsIDQ3LCAxN10sXHJcbiAgICAvLyAyNVxyXG4gICAgWzgsIDEzMiwgMTA2LCA0LCAxMzMsIDEwN10sXHJcbiAgICBbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcclxuICAgIFs3LCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxyXG4gICAgWzIyLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG4gICAgLy8gMjZcclxuICAgIFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcclxuICAgIFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG4gICAgWzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcclxuICAgIC8vIDI3XHJcbiAgICBbOCwgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuICAgIFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgWzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXHJcbiAgICBbMTIsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcbiAgICAvLyAyOFxyXG4gICAgWzMsIDE0NywgMTE3LCAxMCwgMTQ4LCAxMThdLFxyXG4gICAgWzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXHJcbiAgICBbNCwgNTQsIDI0LCAzMSwgNTUsIDI1XSxcclxuICAgIFsxMSwgNDUsIDE1LCAzMSwgNDYsIDE2XSxcclxuICAgIC8vIDI5XHJcbiAgICBbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcclxuICAgIFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG4gICAgWzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMFxyXG4gICAgWzUsIDE0NSwgMTE1LCAxMCwgMTQ2LCAxMTZdLFxyXG4gICAgWzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG4gICAgWzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxyXG4gICAgWzIzLCA0NSwgMTUsIDI1LCA0NiwgMTZdLFxyXG4gICAgLy8gMzFcclxuICAgIFsxMywgMTQ1LCAxMTUsIDMsIDE0NiwgMTE2XSxcclxuICAgIFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxyXG4gICAgWzQyLCA1NCwgMjQsIDEsIDU1LCAyNV0sXHJcbiAgICBbMjMsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMlxyXG4gICAgWzE3LCAxNDUsIDExNV0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICBbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXHJcbiAgICAvLyAzM1xyXG4gICAgWzE3LCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG4gICAgWzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG4gICAgWzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxyXG4gICAgWzExLCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzRcclxuICAgIFsxMywgMTQ1LCAxMTUsIDYsIDE0NiwgMTE2XSxcclxuICAgIFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuICAgIFs0NCwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgWzU5LCA0NiwgMTYsIDEsIDQ3LCAxN10sXHJcbiAgICAvLyAzNVxyXG4gICAgWzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxyXG4gICAgWzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG4gICAgWzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxyXG4gICAgLy8gMzZcclxuICAgIFs2LCAxNTEsIDEyMSwgMTQsIDE1MiwgMTIyXSxcclxuICAgIFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG4gICAgWzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG4gICAgWzIsIDQ1LCAxNSwgNjQsIDQ2LCAxNl0sXHJcbiAgICAvLyAzN1xyXG4gICAgWzE3LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG4gICAgWzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxyXG4gICAgWzQ5LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG4gICAgWzI0LCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzhcclxuICAgIFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcclxuICAgIFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuICAgIFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcclxuICAgIC8vIDM5XHJcbiAgICBbMjAsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcbiAgICBbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuICAgIFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuICAgIFsxMCwgNDUsIDE1LCA2NywgNDYsIDE2XSxcclxuICAgIC8vIDQwXHJcbiAgICBbMTksIDE0OCwgMTE4LCA2LCAxNDksIDExOV0sXHJcbiAgICBbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXHJcbiAgICBbMzQsIDU0LCAyNCwgMzQsIDU1LCAyNV0sXHJcbiAgICBbMjAsIDQ1LCAxNSwgNjEsIDQ2LCAxNl1cclxuXTtcclxuZXhwb3J0cy5SU0Jsb2NrID0gUlNCbG9jaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY25OQ2JHOWpheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwzSnpRbXh2WTJzdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVWb1JUczdPMGRCUjBjN1FVRkRTRHRKUVRSUVNUczdPenRQUVVsSE8wbEJRMGdzV1VGQldTeFZRVUZyUWl4RlFVRkZMRk5CUVdsQ08xRkJRemRETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQmEwSXNSVUZCUlN4cFFrRkJiME03VVVGRE9VVXNUVUZCVFN4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eFZRVUZWTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dFJRVU4yUlN4TlFVRk5MRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVnNReXhOUVVGTkxFbEJRVWtzUjBGQll5eEZRVUZGTEVOQlFVTTdVVUZGTTBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVVUzUWl4TlFVRk5MRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVZ5UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBFTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zVlVGQmEwSXNSVUZCUlN4cFFrRkJiME03VVVGRGJrWXNVVUZCVVN4cFFrRkJhVUlzUlVGQlJUdFpRVU4yUWl4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUTNCQ0xFOUJRVThzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzUzBGQlN5eHhRMEZCYVVJc1EwRkJReXhEUVVGRE8yZENRVU53UWl4UFFVRlBMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkVMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkRjRUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlEzQkNMRTlCUVU4c1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVRc1VVRkJVVHRUUVVOWU8xRkJSVVFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl3clFrRkJLMElzYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM2hGTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFpRVUZaTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeGhRVUZoTzFGQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU0xUWl4RFFVRkRPenRCUVRsVVJDeGxRVUZsTzBGQlExTXNjMEpCUVdNc1IwRkJaVHRKUVVWcVJDeEpRVUZKTzBsQlEwb3NTVUZCU1R0SlFVTktMRWxCUVVrN1NVRkRTaXhKUVVGSk8wbEJRMG9zU1VGQlNUdEpRVU5LTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZWaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVllMRWxCUVVrN1NVRkRTaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJWZ3NTVUZCU1R0SlFVTktMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRlZpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1NVRkJTVHRKUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGV0N4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzU1VGQlNUdEpRVU5LTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTmlMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhSQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFJDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRFlpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZXaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXpRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNelFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOa0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPME5CUXpOQ0xFTkJRVU03UVVGMlVFNHNNRUpCWjFWREluMD0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vcXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9kYXRhL3FyQWxwaGFOdW1lcmljXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9xckJ5dGU4XCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vZGF0YS9xck51bWJlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYml0QnVmZmVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9tYXRoSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9wb2x5bm9taWFsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vaGVscGVycy9xckhlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvcnNCbG9ja1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21vZGVscy9tYXNrUGF0dGVyblwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21vZGVscy9xckRhdGFCYXNlXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9kZWxzL3FyRGF0YU1vZGVcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NNRUpCUVhGQ08wRkJRM0pDTERKRFFVRnpRenRCUVVOMFF5eHZRMEZCSzBJN1FVRkRMMElzY1VOQlFXZERPMEZCUTJoRExIbERRVUZ2UXp0QlFVTndReXd3UTBGQmNVTTdRVUZEY2tNc01FTkJRWEZETzBGQlEzSkRMSGREUVVGdFF6dEJRVU51UXl4MVEwRkJhME03UVVGRGJFTXNaMFJCUVRKRE8wRkJRek5ETERCRFFVRnhRenRCUVVOeVF5eDVRMEZCYjBNN1FVRkRjRU1zZVVOQlFXOURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRXJyb3IgY29ycmVjdGlvbiBsZXZlbCB0byB1c2UgZm9yIHRoZSBRUiBDb2RlLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIEVycm9yQ29ycmVjdExldmVsO1xyXG4oZnVuY3Rpb24gKEVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAvKipcclxuICAgICAqIDclXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiTFwiXSA9IDFdID0gXCJMXCI7XHJcbiAgICAvKipcclxuICAgICAqIDE1JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIk1cIl0gPSAwXSA9IFwiTVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAyNSVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJRXCJdID0gM10gPSBcIlFcIjtcclxuICAgIC8qKlxyXG4gICAgICogMzAlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiSFwiXSA9IDJdID0gXCJIXCI7XHJcbn0pKEVycm9yQ29ycmVjdExldmVsID0gZXhwb3J0cy5FcnJvckNvcnJlY3RMZXZlbCB8fCAoZXhwb3J0cy5FcnJvckNvcnJlY3RMZXZlbCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0pEYjNKeVpXTjBUR1YyWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Ylc5a1pXeHpMMlZ5Y205eVEyOXljbVZqZEV4bGRtVnNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hKUVVGWkxHbENRVzlDV0R0QlFYQkNSQ3hYUVVGWkxHbENRVUZwUWp0SlFVTjZRanM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1FVRkRWQ3hEUVVGRExFVkJjRUpYTEdsQ1FVRnBRaXhIUVVGcVFpeDVRa0ZCYVVJc1MwRkJha0lzZVVKQlFXbENMRkZCYjBJMVFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBNYXNrIHBhdHRlcm5zIGZvciBRUiBjb2Rlcy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBNYXNrUGF0dGVybjtcclxuKGZ1bmN0aW9uIChNYXNrUGF0dGVybikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDAwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAwMFwiXSA9IDBdID0gXCJQQVRURVJOMDAwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMDFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDAxXCJdID0gMV0gPSBcIlBBVFRFUk4wMDFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAxMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMTBcIl0gPSAyXSA9IFwiUEFUVEVSTjAxMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDExXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAxMVwiXSA9IDNdID0gXCJQQVRURVJOMDExXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMDBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTAwXCJdID0gNF0gPSBcIlBBVFRFUk4xMDBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDEwMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMDFcIl0gPSA1XSA9IFwiUEFUVEVSTjEwMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTEwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjExMFwiXSA9IDZdID0gXCJQQVRURVJOMTEwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMTFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTExXCJdID0gN10gPSBcIlBBVFRFUk4xMTFcIjtcclxufSkoTWFza1BhdHRlcm4gPSBleHBvcnRzLk1hc2tQYXR0ZXJuIHx8IChleHBvcnRzLk1hc2tQYXR0ZXJuID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGemExQmhkSFJsY200dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Ylc5a1pXeHpMMjFoYzJ0UVlYUjBaWEp1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4SlFVRlpMRmRCZDBOWU8wRkJlRU5FTEZkQlFWa3NWMEZCVnp0SlFVTnVRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdTVUZGYkVJN08wOUJSVWM3U1VGRFNDeDVSRUZCYTBJc1EwRkJRVHRKUVVWc1FqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1NVRkZiRUk3TzA5QlJVYzdTVUZEU0N4NVJFRkJhMElzUTBGQlFUdEpRVVZzUWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3UVVGRGRFSXNRMEZCUXl4RlFYaERWeXhYUVVGWExFZEJRVmdzYlVKQlFWY3NTMEZCV0N4dFFrRkJWeXhSUVhkRGRFSWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3Igc3RvcmluZyBRUiBEYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkRhdGFCYXNlLlxyXG4gICAgICogQHBhcmFtIG1vZGUgVGhlIG1vZGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1vZGUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhIG1vZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBtb2RlLlxyXG4gICAgICovXHJcbiAgICBnZXRNb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIGluIGJpdHMuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aEluQml0cyh0eXBlTnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVOdW1iZXIgPj0gMSAmJiB0eXBlTnVtYmVyIDwgMTApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDEwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiA5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDg7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlTnVtYmVyIDwgMjcpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiAxMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVOdW1iZXIgPCA0MSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDEzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0eXBlTnVtYmVyICR7dHlwZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUkRhdGFCYXNlID0gUVJEYXRhQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKRVlYUmhRbUZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl0YjJSbGJITXZjWEpFWVhSaFFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNOa05CUVRCRE8wRkJSVEZET3pzN1IwRkhSenRCUVVOSU8wbEJUVWs3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzU1VGQlowSXNSVUZCUlN4SlFVRlpPMUZCUTNSRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGalJEczdPenRQUVVsSE8wbEJRMGtzWlVGQlpTeERRVUZETEZWQlFXdENPMUZCUTNKRExFbEJRVWtzVlVGQlZTeEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRM0JETEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRGFFSXNTMEZCU3l4MVFrRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVOc1F5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNaRExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVNN2IwSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4blFrRkJaMElzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRja1E3VTBGRFNqdGhRVUZOTEVsQlFVa3NWVUZCVlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFFpeFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRMmhDTEV0QlFVc3NkVUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRiRU1zUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTjRReXhMUVVGTExIVkNRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEycERPMjlDUVVOSkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNKRU8xTkJRMG83WVVGQlRTeEpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMmRDUVVOb1FpeExRVUZMTEhWQ1FVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUTJ4RExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEZUVNc1MwRkJTeXgxUWtGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU5xUXp0dlFrRkRTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnlSRHRUUVVOS08yRkJRVTA3V1VGRFNDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNaRU8wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk9VVkVMR2REUVRoRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBUaGUgbW9kZSBmb3IgdGhlIHFyIGRhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgUVJEYXRhTW9kZTtcclxuKGZ1bmN0aW9uIChRUkRhdGFNb2RlKSB7XHJcbiAgICAvKipcclxuICAgICAqIG51bWJlclxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJudW1iZXJcIl0gPSAxXSA9IFwibnVtYmVyXCI7XHJcbiAgICAvKipcclxuICAgICAqIGFscGhhYmV0IGFuZCBudW1iZXJcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wiYWxwaGFOdW1lcmljXCJdID0gMl0gPSBcImFscGhhTnVtZXJpY1wiO1xyXG4gICAgLyoqXHJcbiAgICAgKiA4Yml0IGJ5dGVcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wiYnl0ZThcIl0gPSA0XSA9IFwiYnl0ZThcIjtcclxufSkoUVJEYXRhTW9kZSA9IGV4cG9ydHMuUVJEYXRhTW9kZSB8fCAoZXhwb3J0cy5RUkRhdGFNb2RlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKRVlYUmhUVzlrWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl0YjJSbGJITXZjWEpFWVhSaFRXOWtaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPenRIUVVkSE8wRkJRMGdzU1VGQldTeFZRV1ZZTzBGQlprUXNWMEZCV1N4VlFVRlZPMGxCUTJ4Q096dFBRVVZITzBsQlEwZ3NLME5CUVdVc1EwRkJRVHRKUVVWbU96dFBRVVZITzBsQlEwZ3NNa1JCUVhGQ0xFTkJRVUU3U1VGRmNrSTdPMDlCUlVjN1NVRkRTQ3cyUTBGQll5eERRVUZCTzBGQlEyeENMRU5CUVVNc1JVRm1WeXhWUVVGVkxFZEJRVllzYTBKQlFWVXNTMEZCVml4clFrRkJWU3hSUVdWeVFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyQnl0ZThfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJCeXRlOFwiKTtcclxuY29uc3QgYml0QnVmZmVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2JpdEJ1ZmZlclwiKTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9tYXRoSGVscGVyXCIpO1xyXG5jb25zdCBwb2x5bm9taWFsXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BvbHlub21pYWxcIik7XHJcbmNvbnN0IHFySGVscGVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3FySGVscGVyXCIpO1xyXG5jb25zdCByc0Jsb2NrXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3JzQmxvY2tcIik7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gZ2VuZXJhdGVzIFFSIGNvZGVzIGZyb20gZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgMSB0byA0MFxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsICdMJywnTScsJ1EnLCdIJ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlTnVtYmVyID0gMSwgZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkwpIHtcclxuICAgICAgICB0aGlzLl90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuICAgICAgICB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZGF0YSB0byB0aGUgUVIgQ29kZS5cclxuICAgICAqIEBwYXJhbSBxckRhdGEgVGhlIGRhdGEgdG8gYWRkLlxyXG4gICAgICovXHJcbiAgICBhZGREYXRhKHFyRGF0YSkge1xyXG4gICAgICAgIGlmIChxckRhdGEgaW5zdGFuY2VvZiBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9xckRhdGEucHVzaChxckRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcXJEYXRhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxckJ5dGU4XzEuUVJCeXRlOChxckRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IHR5cGVvZiBxckRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgZGlzcGxheSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgdGhlIGNlbGwgdG8gZ2VuZXJhdGUuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luIFRoZSBzaXplIG9mIHRoZSBtYXJnaW5zIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQm9vbGVhbiBidWZmZXIgb2YgcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlKGNlbGxTaXplID0gMiwgbWFyZ2luID0gY2VsbFNpemUgKiA0KSB7XHJcbiAgICAgICAgdGhpcy5tYWtlSW1wbChmYWxzZSwgdGhpcy5nZXRCZXN0TWFza1BhdHRlcm4oKSk7XHJcbiAgICAgICAgY29uc3QgbW9kcyA9IHRoaXMuX21vZHVsZUNvdW50O1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBjZWxsU2l6ZSAqIG1vZHMgKyBtYXJnaW4gKiAyO1xyXG4gICAgICAgIGNvbnN0IHBpeGVscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZTsgeSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFyZ2luIDw9IHggJiYgeCA8IHNpemUgLSBtYXJnaW4gJiZcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gPD0geSAmJiB5IDwgc2l6ZSAtIG1hcmdpbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEYXJrKH5+KCh5IC0gbWFyZ2luKSAvIGNlbGxTaXplKSwgfn4oKHggLSBtYXJnaW4pIC8gY2VsbFNpemUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpeGVsc1t4XVt5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxzW3hdW3ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpc0Rhcmsocm93LCBjb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZXNbcm93XVtjb2xdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0QmVzdE1hc2tQYXR0ZXJuKCkge1xyXG4gICAgICAgIGxldCBtaW5Mb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3N0UG9pbnQgPSB0aGlzLmdldExvc3RQb2ludCgpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtYWtlSW1wbCh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gdGhpcy5fdHlwZU51bWJlciAqIDQgKyAxNztcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2R1bGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXMucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbW9kdWxlQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpXS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5fbW9kdWxlQ291bnQgLSA3LCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgdGhpcy5fbW9kdWxlQ291bnQgLSA3KTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcclxuICAgICAgICB0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlTnVtYmVyID49IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFR5cGVOdW1iZXIodGVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEodGhpcy5fdHlwZU51bWJlciwgdGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwsIHRoaXMuX3FyRGF0YSk7XHJcbiAgICAgICAgdGhpcy5tYXBEYXRhKGRhdGEsIG1hc2tQYXR0ZXJuKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbWFwRGF0YShkYXRhLCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIGxldCBpbmMgPSAtMTtcclxuICAgICAgICBsZXQgcm93ID0gdGhpcy5fbW9kdWxlQ291bnQgLSAxO1xyXG4gICAgICAgIGxldCBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgbGV0IGJ5dGVJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgbWFza0Z1bmMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldE1hc2tNZXRob2QobWFza1BhdHRlcm4pO1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IHRoaXMuX21vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgY29sIC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbCAtIGNdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXJrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSBtYXNrRnVuYyhyb3csIGNvbCAtIGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyayA9ICFkYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9IGRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93ICs9IGluYztcclxuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdyAtPSBpbmM7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jID0gLWluYztcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMuX3R5cGVOdW1iZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBwb3NbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBwb3Nbal07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAtMjsgciA8PSAyOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gLTI7IGMgPD0gMjsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyID09PSAwICYmIGMgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybihyb3csIGNvbCkge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIHIgPD0gLTEgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gcm93ICsgclxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGNvbCArIGMgPD0gLTEgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVGltaW5nUGF0dGVybigpIHtcclxuICAgICAgICBmb3IgKGxldCByID0gODsgciA8IHRoaXMuX21vZHVsZUNvdW50IC0gODsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3JdWzZdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JdWzZdID0gciAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGMgPSA4OyBjIDwgdGhpcy5fbW9kdWxlQ291bnQgLSA4OyBjKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbNl1bY10gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbNl1bY10gPSBjICUgMiA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVHlwZU51bWJlcih0ZXN0KSB7XHJcbiAgICAgICAgY29uc3QgYml0cyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0QkNIVHlwZU51bWJlcih0aGlzLl90eXBlTnVtYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1t+fihpIC8gMyldW2kgJSAzICsgdGhpcy5fbW9kdWxlQ291bnQgLSA4IC0gM10gPVxyXG4gICAgICAgICAgICAgICAgIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2kgJSAzICsgdGhpcy5fbW9kdWxlQ291bnQgLSA4IC0gM11bfn4oaSAvIDMpXSA9XHJcbiAgICAgICAgICAgICAgICAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gKHRoaXMuX2Vycm9yQ29ycmVjdExldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XHJcbiAgICAgICAgY29uc3QgYml0cyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcbiAgICAgICAgLy8gdmVydGljYWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgICAgIGlmIChpIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpICsgMV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3RoaXMuX21vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBob3Jpem9udGFsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9ICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bdGhpcy5fbW9kdWxlQ291bnQgLSBpIC0gMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IDkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bMTUgLSBpIC0gMSArIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaXhlZFxyXG4gICAgICAgIHRoaXMuX21vZHVsZXNbdGhpcy5fbW9kdWxlQ291bnQgLSA4XVs4XSA9ICF0ZXN0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRMb3N0UG9pbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlQ291bnQgPSB0aGlzLl9tb2R1bGVDb3VudDtcclxuICAgICAgICBsZXQgbG9zdFBvaW50ID0gMDtcclxuICAgICAgICAvLyBMRVZFTDFcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FtZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhcmsgPSB0aGlzLmlzRGFyayhyb3csIGNvbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8PSAxOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCArIGMgPCAwIHx8IG1vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAwICYmIGMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXJrID09PSB0aGlzLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2FtZUNvdW50ID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAoMyArIHNhbWVDb3VudCAtIDUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMMlxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCB8fCBjb3VudCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMM1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdywgY29sICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAzKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgNClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA1KVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgNikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gNjsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93ICsgMSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDIsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyAzLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgNCwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3cgKyA1LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgNiwgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDRcclxuICAgICAgICBsZXQgZGFya0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFya0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuICAgICAgICBsb3N0UG9pbnQgKz0gcmF0aW8gKiAxMDtcclxuICAgICAgICByZXR1cm4gbG9zdFBvaW50O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVEYXRhKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsLCBkYXRhQXJyYXkpIHtcclxuICAgICAgICBjb25zdCByc0Jsb2NrcyA9IHJzQmxvY2tfMS5SU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgYml0QnVmZmVyXzEuQml0QnVmZmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRhdGFBcnJheVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldE1vZGUoKSwgNCk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgZGF0YS5nZXRMZW5ndGhJbkJpdHModHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhbGMgbWF4IGRhdGEgY291bnRcclxuICAgICAgICBsZXQgdG90YWxEYXRhQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb2RlIGxlbmd0aCBvdmVyZmxvdywgKCR7YnVmZmVyLmdldExlbmd0aEluQml0cygpfSA+ICR7dG90YWxEYXRhQ291bnQgKiA4fWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbmRcclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCgwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIucHV0KFFSLlBBRDAsIDgpO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dChRUi5QQUQxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcykge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhEY0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RWNDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGNkYXRhID0gW107XHJcbiAgICAgICAgY29uc3QgZWNkYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBkY2RhdGEucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGVjZGF0YS5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTnVtQXJyYXkobGVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5nZXREYXRhQ291bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZWNDb3VudCA9IHJzQmxvY2tzW3JdLmdldFRvdGFsQ291bnQoKSAtIGRjQ291bnQ7XHJcbiAgICAgICAgICAgIG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcclxuICAgICAgICAgICAgbWF4RWNDb3VudCA9IE1hdGgubWF4KG1heEVjQ291bnQsIGVjQ291bnQpO1xyXG4gICAgICAgICAgICBkY2RhdGFbcl0gPSBjcmVhdGVOdW1BcnJheShkY0NvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGRjZGF0YVtyXVtpXSA9IDB4RkYgJiBidWZmZXIuZ2V0QnVmZmVyKClbaSArIG9mZnNldF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGRjQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJzUG9seSA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlY0NvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgcmF3UG9seSA9IG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcclxuICAgICAgICAgICAgZWNkYXRhW3JdID0gY3JlYXRlTnVtQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKSA/IG1vZFBvbHkuZ2V0QXQobW9kSW5kZXgpIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxDb2RlQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0VG90YWxDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gY3JlYXRlTnVtQXJyYXkodG90YWxDb2RlQ291bnQpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSBkY2RhdGFbcl1baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGVjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUi5QQUQwID0gMHhFQztcclxuLyogQGludGVybmFsICovXHJcblFSLlBBRDEgPSAweDExO1xyXG5leHBvcnRzLlFSID0gUVI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Y1hJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRFFVRjVRenRCUVVONlF5eHRSRUZCWjBRN1FVRkRhRVFzY1VSQlFXdEVPMEZCUTJ4RUxIRkVRVUZyUkR0QlFVTnNSQ3hwUkVGQk9FTTdRVUZET1VNc0swTkJRVFJETzBGQlF6VkRMR3RGUVVFclJEdEJRVU12UkN4dlJFRkJhVVE3UVVGRmFrUTdPenRIUVVkSE8wRkJRMGc3U1VGeFFrazdPenM3VDBGSlJ6dEpRVU5JTEZsQlFWa3NZVUZCY1VJc1EwRkJReXhGUVVGRkxHOUNRVUYxUXl4eFEwRkJhVUlzUTBGQlF5eERRVUZETzFGQlF6RkdMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU0xUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZ1UWl4MVFrRkJWU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBMRU5CUVVNc1RVRkJNa0k3VVVGRGRFTXNTVUZCU1N4TlFVRk5MRmxCUVZrc2RVSkJRVlVzUlVGQlJUdFpRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTTNRanRoUVVGTkxFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc2FVSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGRE8yRkJRVTA3V1VGRFNDeE5RVUZOTEU5QlFVOHNUVUZCVFN4RFFVRkRPMU5CUTNaQ08wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NVVUZCVVN4RFFVRkRMRmRCUVcxQ0xFTkJRVU1zUlVGQlJTeFRRVUZwUWl4UlFVRlJMRWRCUVVjc1EwRkJRenRSUVVNdlJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSV2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU03VVVGREwwSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hIUVVGSExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGRExFMUJRVTBzVFVGQlRTeEhRVUZuUWl4RlFVRkZMRU5CUVVNN1VVRkRMMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpsQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0blFrRkRPVUlzU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFZEJRVWNzVFVGQlRUdHZRa0ZEYUVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRTFCUVUwN2IwSkJRMmhETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUTFBc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFVkJRek5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRMnhETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdhVUpCUTNoQ08zRkNRVUZOTzI5Q1FVTklMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN2FVSkJRM1pDTzJGQlEwbzdVMEZEU2p0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExFZEJRVmNzUlVGQlJTeEhRVUZYTzFGQlEyNURMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGJFTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTJ4RE8yRkJRVTA3V1VGRFNDeFBRVUZQTEV0QlFVc3NRMEZCUXp0VFFVTm9RanRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhMEpCUVd0Q08xRkJRM1JDTEVsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOeVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVjRRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVWMlFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03V1VGRmRFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEVWQlFVVTdaMEpCUTNKRExGbEJRVmtzUjBGQlJ5eFRRVUZUTEVOQlFVTTdaMEpCUTNwQ0xFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEWmp0VFFVTktPMUZCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUkxFTkJRVU1zU1VGQllTeEZRVUZGTEZkQlFXMUNPMUZCUXk5RExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyNUNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVONFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTXZRanRUUVVOS08xRkJSVVFzU1VGQlNTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla1FzU1VGQlNTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSWHBFTEVsQlFVa3NRMEZCUXl3d1FrRkJNRUlzUlVGQlJTeERRVUZETzFGQlEyeERMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRPMUZCUlRGQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWFJETEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRrSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU01UWp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzUkdMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNUMEZCVHl4RFFVRkRMRWxCUVdNc1JVRkJSU3hYUVVGdFFqdFJRVU12UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5pTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaERMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2JVSkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkZja1FzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRmNrUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5ZTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRXanRaUVVWRUxFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTm9RaXhQUVVGUExFbEJRVWtzUlVGQlJUdG5Ra0ZGVkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVVY0UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJUdDNRa0ZGZEVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETzNkQ1FVVnFRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTjJSRHQzUWtGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkZjRU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdORUpCUTA0c1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzNsQ1FVTm9RanQzUWtGRlJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN2QwSkJRMjVETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNN2QwSkJSV1FzU1VGQlNTeFJRVUZSTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRMnBDTEZOQlFWTXNSVUZCUlN4RFFVRkRPelJDUVVOYUxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUTJoQ08zRkNRVU5LTzJsQ1FVTktPMmRDUVVWRUxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTTdaMEpCUlZnc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1IwRkJSeXhGUVVGRk8yOUNRVU55UXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRE8yOUNRVU5ZTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJRenR2UWtGRFdDeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMmxDUVVOb1FqdGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxEQkNRVUV3UWp0UlFVTTVRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVeFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVWcVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmFrTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJSVzVDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN2IwSkJRMnhETEZOQlFWTTdhVUpCUTFvN1owSkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVVeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2QwSkJSVEZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZET3l0Q1FVTjJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk96UkNRVU42UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzNsQ1FVTXhRenMyUWtGQlRUczBRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzNsQ1FVTXpRenR4UWtGRFNqdHBRa0ZEU2p0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEhsQ1FVRjVRaXhEUVVGRExFZEJRVmNzUlVGQlJTeEhRVUZYTzFGQlEzUkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU14UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzNWQ1FVTXhReXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRiRVFzVTBGQlV6dHBRa0ZEV2p0blFrRkZSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03ZFVKQlEzWkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2RVSkJRekZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTXpReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMmxDUVVNeFF6dHhRa0ZCVFR0dlFrRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMmxDUVVNelF6dGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHdENRVUZyUWp0UlFVTjBRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRPVUlzVTBGQlV6dGhRVU5hTzFsQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTTVRaXhUUVVGVE8yRkJRMW83V1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM0pETzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hsUVVGbExFTkJRVU1zU1VGQllUdFJRVU5xUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXh0UWtGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVjZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNaRUxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNoRE8xRkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMlJDeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVONFF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1lVRkJZU3hEUVVGRExFbEJRV0VzUlVGQlJTeFhRVUZ0UWp0UlFVTndSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZGTTBNc1YwRkJWenRSUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZGZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkZOME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlF6ZENPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZEYWtNN2FVSkJRVTA3WjBKQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZEZEVRN1UwRkRTanRSUVVWRUxHRkJRV0U3VVVGRFlpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlhwQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJSVGRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFVDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU55UkR0cFFrRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRNVU03YVVKQlFVMDdaMEpCUTBnc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVTjBRenRUUVVOS08xRkJSVVFzVVVGQlVUdFJRVU5TTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU53UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGbEJRVms3VVVGRGFFSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVYwUXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmJFSXNVMEZCVXp0UlFVVlVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRmVFTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5zUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRmJrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVVV4UWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEZkQlFWY3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU4yUXl4VFFVRlRPM0ZDUVVOYU8yOUNRVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHQzUWtGRk1VSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeFhRVUZYTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSVHMwUWtGRGRrTXNVMEZCVXp0NVFrRkRXanQzUWtGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUczBRa0ZEY0VJc1UwRkJVenQ1UWtGRFdqdDNRa0ZGUkN4SlFVRkpMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGT3pSQ1FVTjRReXhUUVVGVExFVkJRVVVzUTBGQlF6dDVRa0ZEWmp0eFFrRkRTanRwUWtGRFNqdG5Ra0ZGUkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFVkJRVVU3YjBKQlEyWXNVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRjRU03WVVGRFNqdFRRVU5LTzFGQlJVUXNVMEZCVXp0UlFVVlVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlF6VkRMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVTTFReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXp0cFFrRkJSVHRuUWtGRGRrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN2IwSkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTTdhVUpCUVVVN1owSkJRek5ETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVRkZPMmRDUVVNelF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTTdhVUpCUVVVN1owSkJReTlETEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzI5Q1FVTTFRaXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnNRanRoUVVOS08xTkJRMG83VVVGRlJDeFRRVUZUTzFGQlJWUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFF5eExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRE5VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTJ4Q0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQxUWtGRGVrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0MVFrRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZEZWtJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zVkNRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRemxDTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRMjVDTzJGQlEwbzdVMEZEU2p0UlFVVkVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlF6VkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPM1ZDUVVOc1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEzcENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRM3BDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTNwQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU01UWl4VFFVRlRMRWxCUVVrc1JVRkJSU3hEUVVGRE8ybENRVU51UWp0aFFVTktPMU5CUTBvN1VVRkZSQ3hUUVVGVE8xRkJSVlFzU1VGQlNTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUld4Q0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEZUVNc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGRrSXNVMEZCVXl4RlFVRkZMRU5CUVVNN2FVSkJRMlk3WVVGRFNqdFRRVU5LTzFGQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NVMEZCVXl4SFFVRkhMRmRCUVZjc1IwRkJSeXhYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkRkxGTkJRVk1zU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlhoQ0xFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVlVGQlZTeERRVUZETEZWQlFXdENMRVZCUVVVc2FVSkJRVzlETEVWQlFVVXNVMEZCZFVJN1VVRkRhRWNzVFVGQlRTeFJRVUZSTEVkQlFXTXNhVUpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGRkwwVXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3h4UWtGQlV5eEZRVUZGTEVOQlFVTTdVVUZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hKUVVGSkxFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpGQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNSQ08xRkJSVVFzYzBKQlFYTkNPMUZCUTNSQ0xFbEJRVWtzWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhqUVVGakxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRMmhFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVWNzWTBGQll5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERCQ1FVRXdRaXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEUxQlFVMHNZMEZCWXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGFrYzdVVUZGUkN4TlFVRk5PMUZCUTA0c1NVRkJTU3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMR05CUVdNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNFUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEY0VJN1VVRkZSQ3hWUVVGVk8xRkJRMVlzVDBGQlR5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzaENPMUZCUlVRc1ZVRkJWVHRSUVVOV0xFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTm9RaXhQUVVGUExFbEJRVWtzUlVGQlJUdFpRVVZVTEVsQlFVa3NUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hKUVVGSkxHTkJRV01zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJoRUxFMUJRVTA3WVVGRFZEdFpRVU5FTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNTVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRMmhDTzJsQ1FVRk5PMmRDUVVOSUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UWp0VFFVTktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVNNVF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmRCUVZjc1EwRkJReXhOUVVGcFFpeEZRVUZGTEZGQlFXMUNPMUZCUTNSRUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm1MRWxCUVVrc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmJrSXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEUxQlFVMHNUVUZCVFN4SFFVRmxMRVZCUVVVc1EwRkJRenRSUVVVNVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMmhDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJrSTdVVUZGUkN4M1FrRkJkMElzUjBGQlZ6dFpRVU12UWl4TlFVRk5MRU5CUVVNc1IwRkJZU3hGUVVGRkxFTkJRVU03V1VGRGRrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5pTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkZkRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFsQlF6TkRMRTFCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU03V1VGRmRFUXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUXpORExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVV6UXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNCRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU4yUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRlRVE3V1VGRFJDeE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRPMWxCUld4Q0xFMUJRVTBzVFVGQlRTeEhRVUZITEcxQ1FVRlJMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRNMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4MVFrRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGYkVVc1RVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVNMVJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUlR0VFFVTktPMUZCUlVRc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzWkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzUkRMR05CUVdNc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1UwRkRha1E3VVVGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4alFVRmpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03VVVGRE5VTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV1FzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnFReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRkRU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUdHZRa0ZEZEVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1MwRkJTeXhGUVVGRkxFTkJRVU03YVVKQlExZzdZVUZEU2p0VFFVTktPMUZCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5xUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZEVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHR2UWtGRGRFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE0wSXNTMEZCU3l4RlFVRkZMRU5CUVVNN2FVSkJRMWc3WVVGRFNqdFRRVU5LTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6czdRVUV6YUVKRUxHVkJRV1U3UVVGRFV5eFBRVUZKTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUXpWRExHVkJRV1U3UVVGRFV5eFBRVUZKTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCU21oRUxHZENRVFpvUWtNaWZRPT0iXSwic291cmNlUm9vdCI6IiJ9