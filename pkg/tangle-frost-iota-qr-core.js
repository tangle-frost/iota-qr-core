(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tangle-frost/iota-core/dist/helpers/numberHelper"));
	else if(typeof define === 'function' && define.amd)
		define("@tangle-frost/iota-qr-core", ["@tangle-frost/iota-core/dist/helpers/numberHelper"], factory);
	else if(typeof exports === 'object')
		exports["@tangle-frost/iota-qr-core"] = factory(require("@tangle-frost/iota-core/dist/helpers/numberHelper"));
	else
		root["TangleFrostIotaQrCore"] = factory(root["@tangle-frost/iota-core/dist/helpers/numberHelper"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_numberHelper__) {
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
      if (c >= "0" && c <= "9") {
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

      while (localValue < 0) {
        localValue += 255;
      }

      while (localValue >= 256) {
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

      throw new Error("Invalid error correct level ".concat(errorCorrectLevel));
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

__export(__webpack_require__(/*! ./models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js"));

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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @tangle-frost/iota-core/dist/helpers/numberHelper */ "@tangle-frost/iota-core/dist/helpers/numberHelper");

var qrAlphaNumeric_1 = __webpack_require__(/*! ./data/qrAlphaNumeric */ "./dist/data/qrAlphaNumeric.js");

var qrByte8_1 = __webpack_require__(/*! ./data/qrByte8 */ "./dist/data/qrByte8.js");

var qrNumber_1 = __webpack_require__(/*! ./data/qrNumber */ "./dist/data/qrNumber.js");

var bitBuffer_1 = __webpack_require__(/*! ./helpers/bitBuffer */ "./dist/helpers/bitBuffer.js");

var mathHelper_1 = __webpack_require__(/*! ./helpers/mathHelper */ "./dist/helpers/mathHelper.js");

var polynomial_1 = __webpack_require__(/*! ./helpers/polynomial */ "./dist/helpers/polynomial.js");

var qrHelper_1 = __webpack_require__(/*! ./helpers/qrHelper */ "./dist/helpers/qrHelper.js");

var rsBlock_1 = __webpack_require__(/*! ./helpers/rsBlock */ "./dist/helpers/rsBlock.js");

var errorCorrectLevel_1 = __webpack_require__(/*! ./models/errorCorrectLevel */ "./dist/models/errorCorrectLevel.js");
/**
 * Class to generates QR codes from data.
 * Based on https://github.com/kazuhikoarase/qrcode-generator/
 */


var QR =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of QR.
   * @param typeNumber 0 to 40, 0 means autodetect
   * @param errorCorrectLevel 'L','M','Q','H'
   */
  function QR() {
    var typeNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var errorCorrectLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : errorCorrectLevel_1.ErrorCorrectLevel.L;

    _classCallCheck(this, QR);

    if (!numberHelper_1.NumberHelper.isInteger(typeNumber) || typeNumber < 0 || typeNumber > 40) {
      throw Error("The typeNumber parameter should be a number >= 0 and <= 40");
    }

    this._typeNumber = typeNumber;
    this._errorCorrectLevel = errorCorrectLevel;
    this._qrData = [];
    this._moduleCount = 0;
    this._modules = [];
    mathHelper_1.MathHelper.initialize();
  }
  /**
   * Add text data to the QR Code.
   * @param qrData The data to add.
   */


  _createClass(QR, [{
    key: "addText",
    value: function addText(qrData) {
      this._qrData.push(new qrByte8_1.QRByte8(qrData));
    }
    /**
     * Add number to the QR Code.
     * @param qrData The data to add.
     */

  }, {
    key: "addNumber",
    value: function addNumber(qrData) {
      this._qrData.push(new qrNumber_1.QRNumber(qrData));
    }
    /**
     * Add alpha numeric to the QR Code.
     * @param qrData The data to add.
     */

  }, {
    key: "addAlphaNumeric",
    value: function addAlphaNumeric(qrData) {
      this._qrData.push(new qrAlphaNumeric_1.QRAlphaNumeric(qrData));
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
      this.autoDetectTypeNumber();
      this.makeImpl(false, this.getBestMaskPattern());
      var pixels = [];

      for (var y = 0; y < this._moduleCount; y++) {
        for (var x = 0; x < this._moduleCount; x++) {
          pixels[x] = pixels[x] || [];
          pixels[x][y] = this.isDark(y, x);
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

      var data = this.createData();
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
    value: function createData() {
      var rsBlocks = rsBlock_1.RSBlock.getRSBlocks(this._typeNumber, this._errorCorrectLevel);
      var buffer = new bitBuffer_1.BitBuffer();

      for (var i = 0; i < this._qrData.length; i++) {
        var data = this._qrData[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), data.getLengthInBits(this._typeNumber));
        data.write(buffer);
      } // calc max data count


      var totalDataCount = 0;

      for (var _i3 = 0; _i3 < rsBlocks.length; _i3++) {
        totalDataCount += rsBlocks[_i3].getDataCount();
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw new Error("There is not enough space in the QR code to store the data, ".concat(buffer.getLengthInBits(), " > ").concat(totalDataCount * 8, ", try increasing the typeNumber from ").concat(this._typeNumber));
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
      } // tslint:disable:no-console


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
    /* @internal */

  }, {
    key: "autoDetectTypeNumber",
    value: function autoDetectTypeNumber() {
      if (this._typeNumber === 0) {
        for (var typeNumber = 1; typeNumber <= 40; typeNumber++) {
          var rsBlocks = rsBlock_1.RSBlock.getRSBlocks(typeNumber, this._errorCorrectLevel);
          var buffer = new bitBuffer_1.BitBuffer();

          for (var i = 0; i < this._qrData.length; i++) {
            var data = this._qrData[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), data.getLengthInBits(typeNumber));
            data.write(buffer);
          }

          var totalDataCount = 0;

          for (var _i8 = 0; _i8 < rsBlocks.length; _i8++) {
            totalDataCount += rsBlocks[_i8].getDataCount();
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            this._typeNumber = typeNumber;
            break;
          } else if (typeNumber === 40) {
            throw new Error("There is not enough space in the QR code to store the data, ".concat(buffer.getLengthInBits(), " > ").concat(totalDataCount * 8, ", typeNumber can not be > 40"));
          }
        }
      }
    }
  }]);

  return QR;
}();
/* @internal */


QR.PAD0 = 0xEC;
/* @internal */

QR.PAD1 = 0x11;
exports.QR = QR;

/***/ }),

/***/ "@tangle-frost/iota-core/dist/helpers/numberHelper":
/*!********************************************************************!*\
  !*** external "@tangle-frost/iota-core/dist/helpers/numberHelper" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tangle_frost_iota_core_dist_helpers_numberHelper__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztBQUNBO0FBRUE7Ozs7OztJQUlBLGM7Ozs7O0FBQ0k7Ozs7QUFJQSwwQkFBWSxJQUFaLEVBQXdCO0FBQUE7O0FBQUEsdUZBQ2Qsd0JB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LEVBMEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0ExQnlELEVBMkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0EzQnlELEVBNEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0E1QnlELEVBNkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E3QnlELEVBOEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E5QnlELEVBK0J6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0EvQnlELEVBZ0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FoQ3lELEVBaUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FqQ3lELEVBa0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FsQ3lELEVBbUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FuQ3lELEVBb0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FwQ3lELEVBcUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FyQ3lELEVBc0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0F0Q3lELEVBdUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0F2Q3lELEVBd0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0F4Q3lELENBQXJDO0FBMkN4Qjs7QUFDd0Isc0JBQTJCLENBQy9DLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQUQsRUFBbUIsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLENBQW5CLEVBQW9DLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixDQUFwQyxFQUFxRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBckQsQ0FEK0MsRUFFL0MsQ0FBQyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBRCxFQUFtQixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBbkIsRUFBcUMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQXJDLEVBQXVELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixDQUF2RCxDQUYrQyxFQUcvQyxDQUFDLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUFELEVBQW9CLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUFwQixFQUF1QyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBdkMsRUFBeUQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQXpELENBSCtDLEVBSS9DLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEVBQVgsRUFBZSxFQUFmLENBQUQsRUFBcUIsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQXJCLEVBQXdDLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUF4QyxFQUEyRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsQ0FBM0QsQ0FKK0MsRUFLL0MsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixFQUFoQixDQUFELEVBQXNCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLEVBQWUsRUFBZixDQUF0QixFQUEwQyxDQUFDLEdBQUQsRUFBTSxFQUFOLEVBQVUsRUFBVixFQUFjLEVBQWQsQ0FBMUMsRUFBNkQsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQTdELENBTCtDLEVBTS9DLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsRUFBaEIsQ0FBRCxFQUFzQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixFQUFoQixDQUF0QixFQUEyQyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWCxFQUFlLEVBQWYsQ0FBM0MsRUFBK0QsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQS9ELENBTitDLEVBTy9DLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsRUFBaEIsQ0FBRCxFQUFzQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixFQUFoQixDQUF0QixFQUEyQyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWCxFQUFlLEVBQWYsQ0FBM0MsRUFBK0QsQ0FBQyxHQUFELEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQS9ELENBUCtDLEVBUS9DLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBRCxFQUF1QixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixFQUFoQixDQUF2QixFQUE0QyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixFQUFoQixDQUE1QyxFQUFpRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWCxFQUFlLEVBQWYsQ0FBakUsQ0FSK0MsRUFTL0MsQ0FBQyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFELEVBQXVCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQXZCLEVBQTZDLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEVBQWhCLENBQTdDLEVBQWtFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLEVBQWUsRUFBZixDQUFsRSxDQVQrQyxFQVUvQyxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQUQsRUFBdUIsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBdkIsRUFBNkMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsRUFBaEIsQ0FBN0MsRUFBa0UsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsRUFBaEIsQ0FBbEUsQ0FWK0MsQ0FBM0I7QUFheEI7O0FBQ3dCLGVBQWUsS0FBSyxFQUFOLEdBQWEsS0FBSyxDQUFsQixHQUF3QixLQUFLLENBQTdCLEdBQy9CLEtBQUssQ0FEMEIsR0FDcEIsS0FBSyxDQURlLEdBQ1QsS0FBSyxDQURJLEdBQ0UsS0FBSyxDQURyQjtBQUd4Qjs7QUFDd0IsZUFBZSxLQUFLLEVBQU4sR0FBYSxLQUFLLEVBQWxCLEdBQXlCLEtBQUssRUFBOUIsR0FDL0IsS0FBSyxDQUQwQixHQUNwQixLQUFLLENBRGUsR0FDVCxLQUFLLENBREksR0FDRSxLQUFLLENBRFAsR0FDYSxLQUFLLENBRGhDO0FBR3hCOztBQUN3QixvQkFBb0IsS0FBSyxFQUFOLEdBQWEsS0FBSyxFQUFsQixHQUF5QixLQUFLLEVBQTlCLEdBQ3BDLEtBQUssQ0FEK0IsR0FDekIsS0FBSyxDQURDO0FBcEU1Qiw0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFFQTs7Ozs7O0lBSUEsTzs7O0FBNFBJOzs7OztBQUtBLG1CQUFZLFVBQVosRUFBZ0MsU0FBaEMsRUFBaUQ7QUFBQTs7QUFDN0MsU0FBSyxXQUFMLEdBQW1CLFVBQW5CO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLFNBQWxCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7QUEyQ0E7Ozs7bUNBSW1CO0FBQ2YsYUFBTyxLQUFLLFVBQVo7QUFDSDtBQUVEOzs7Ozs7O29DQUlvQjtBQUNoQixhQUFPLEtBQUssV0FBWjtBQUNIOzs7Z0NBbkR5QixVLEVBQW9CLGlCLEVBQW9DO0FBQzlFLFVBQU0sVUFBVSxRQUFRLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0MsaUJBQXBDLENBQWhCO0FBQ0EsVUFBTSxTQUFTLFFBQVEsTUFBUixHQUFpQixDQUFoQztBQUVBLFVBQU0sT0FBa0IsRUFBeEI7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQXBCLEVBQTRCLEdBQTVCLEVBQWlDO0FBRTdCLFlBQU0sUUFBUSxRQUFRLElBQUksQ0FBSixHQUFRLENBQWhCLENBQWQ7QUFDQSxZQUFNLGFBQWEsUUFBUSxJQUFJLENBQUosR0FBUSxDQUFoQixDQUFuQjtBQUNBLFlBQU0sWUFBWSxRQUFRLElBQUksQ0FBSixHQUFRLENBQWhCLENBQWxCOztBQUVBLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFwQixFQUEyQixHQUEzQixFQUFnQztBQUM1QixlQUFLLElBQUwsQ0FBVSxJQUFJLE9BQUosQ0FBWSxVQUFaLEVBQXdCLFNBQXhCLENBQVY7QUFDSDtBQUNKOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7b0NBQytCLFUsRUFBb0IsaUIsRUFBb0M7QUFDbkYsY0FBUSxpQkFBUjtBQUNJLGFBQUssc0NBQWtCLENBQXZCO0FBQ0ksaUJBQU8sUUFBUSxjQUFSLENBQXVCLENBQUMsYUFBYSxDQUFkLElBQW1CLENBQW5CLEdBQXVCLENBQTlDLENBQVA7O0FBQ0osYUFBSyxzQ0FBa0IsQ0FBdkI7QUFDSSxpQkFBTyxRQUFRLGNBQVIsQ0FBdUIsQ0FBQyxhQUFhLENBQWQsSUFBbUIsQ0FBbkIsR0FBdUIsQ0FBOUMsQ0FBUDs7QUFDSixhQUFLLHNDQUFrQixDQUF2QjtBQUNJLGlCQUFPLFFBQVEsY0FBUixDQUF1QixDQUFDLGFBQWEsQ0FBZCxJQUFtQixDQUFuQixHQUF1QixDQUE5QyxDQUFQOztBQUNKLGFBQUssc0NBQWtCLENBQXZCO0FBQ0ksaUJBQU8sUUFBUSxjQUFSLENBQXVCLENBQUMsYUFBYSxDQUFkLElBQW1CLENBQW5CLEdBQXVCLENBQTlDLENBQVA7O0FBQ0o7QUFUSjs7QUFZQSxZQUFNLElBQUksS0FBSix1Q0FBeUMsaUJBQXpDLEVBQU47QUFDSDs7Ozs7QUE5U0Q7OztBQUN3Qix5QkFBNkIsQ0FFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBUGlELEVBUWpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBUmlELEVBU2pELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBVGlELEVBVWpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSLENBVmlELEVBWWpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FiaUQsRUFjakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FkaUQsRUFlakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FmaUQsRUFnQmpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBaEJpRCxFQWtCakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQW5CaUQsRUFvQmpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBcEJpRCxFQXFCakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FyQmlELEVBc0JqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQXRCaUQsRUF3QmpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEVBQVQsQ0F6QmlELEVBMEJqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQTFCaUQsRUEyQmpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBM0JpRCxFQTRCakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsQ0E1QmlELEVBOEJqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBL0JpRCxFQWdDakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FoQ2lELEVBaUNqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBakNpRCxFQWtDakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQWxDaUQsRUFvQ2pEO0FBQ0EsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0FyQ2lELEVBc0NqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixDQXRDaUQsRUF1Q2pELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBdkNpRCxFQXdDakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0F4Q2lELEVBMENqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLENBM0NpRCxFQTRDakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsQ0E1Q2lELEVBNkNqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBN0NpRCxFQThDakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQTlDaUQsRUFnRGpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEVBQVQsQ0FqRGlELEVBa0RqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBbERpRCxFQW1EakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQW5EaUQsRUFvRGpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0FwRGlELEVBc0RqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULENBdkRpRCxFQXdEakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQXhEaUQsRUF5RGpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0F6RGlELEVBMERqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBMURpRCxFQTREakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBN0RpRCxFQThEakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQTlEaUQsRUErRGpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0EvRGlELEVBZ0VqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBaEVpRCxFQWtFakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsRUFBVCxDQW5FaUQsRUFvRWpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0FwRWlELEVBcUVqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBckVpRCxFQXNFakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQXRFaUQsRUF3RWpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLENBekVpRCxFQTBFakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQTFFaUQsRUEyRWpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0EzRWlELEVBNEVqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBNUVpRCxFQThFakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxDQS9FaUQsRUFnRmpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksQ0FBWixFQUFlLEVBQWYsRUFBbUIsRUFBbkIsQ0FoRmlELEVBaUZqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBakZpRCxFQWtGakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBbEZpRCxFQW9GakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0FyRmlELEVBc0ZqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBdEZpRCxFQXVGakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBdkZpRCxFQXdGakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBeEZpRCxFQTBGakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsQ0EzRmlELEVBNEZqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBNUZpRCxFQTZGakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQTdGaUQsRUE4RmpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQTlGaUQsRUFnR2pEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCLEVBQXJCLENBakdpRCxFQWtHakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQixFQUFuQixDQWxHaUQsRUFtR2pELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQW5HaUQsRUFvR2pELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQXBHaUQsRUFzR2pEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBdkdpRCxFQXdHakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBeEdpRCxFQXlHakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBekdpRCxFQTBHakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBMUdpRCxFQTRHakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0E3R2lELEVBOEdqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CLEVBQW5CLENBOUdpRCxFQStHakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBL0dpRCxFQWdIakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBaEhpRCxFQWtIakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0FuSGlELEVBb0hqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FwSGlELEVBcUhqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FySGlELEVBc0hqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0F0SGlELEVBd0hqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQXpIaUQsRUEwSGpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQTFIaUQsRUEySGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQTNIaUQsRUE0SGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQTVIaUQsRUE4SGpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBL0hpRCxFQWdJakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0FoSWlELEVBaUlqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FqSWlELEVBa0lqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FsSWlELEVBb0lqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQXJJaUQsRUFzSWpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBdElpRCxFQXVJakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBdklpRCxFQXdJakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsQ0F4SWlELEVBMElqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQTNJaUQsRUE0SWpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQTVJaUQsRUE2SWpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQTdJaUQsRUE4SWpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQTlJaUQsRUFnSmpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBakppRCxFQWtKakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBbEppRCxFQW1KakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBbkppRCxFQW9KakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBcEppRCxFQXNKakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0F2SmlELEVBd0pqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0F4SmlELEVBeUpqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0F6SmlELEVBMEpqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0ExSmlELEVBNEpqRDtBQUNBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQTdKaUQsRUE4SmpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQTlKaUQsRUErSmpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQS9KaUQsRUFnS2pELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQWhLaUQsRUFrS2pEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBbktpRCxFQW9LakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBcEtpRCxFQXFLakQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLENBcktpRCxFQXNLakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdEtpRCxFQXdLakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLEVBQWQsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0F6S2lELEVBMEtqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0ExS2lELEVBMktqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0EzS2lELEVBNEtqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0E1S2lELEVBOEtqRDtBQUNBLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQS9LaUQsRUFnTGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQWhMaUQsRUFpTGpELENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQWpMaUQsRUFrTGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQWxMaUQsRUFvTGpEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBckxpRCxFQXNMakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdExpRCxFQXVMakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdkxpRCxFQXdMakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBeExpRCxFQTBMakQ7QUFDQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0EzTGlELEVBNExqRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0E1TGlELEVBNkxqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0E3TGlELEVBOExqRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0E5TGlELEVBZ01qRDtBQUNBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBak1pRCxFQWtNakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBbE1pRCxFQW1NakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBbk1pRCxFQW9NakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBcE1pRCxFQXNNakQ7QUFDQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0F2TWlELEVBd01qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0F4TWlELEVBeU1qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0F6TWlELEVBME1qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0ExTWlELEVBNE1qRDtBQUNBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQTdNaUQsRUE4TWpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQTlNaUQsRUErTWpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQS9NaUQsRUFnTmpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQixFQUFwQixDQWhOaUQsRUFrTmpEO0FBQ0EsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBbk5pRCxFQW9OakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBcE5pRCxFQXFOakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBck5pRCxFQXNOakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdE5pRCxFQXdOakQ7QUFDQSxDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLEVBQWQsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0F6TmlELEVBME5qRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0ExTmlELEVBMk5qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0EzTmlELEVBNE5qRCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0E1TmlELEVBOE5qRDtBQUNBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQS9OaUQsRUFnT2pELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQWhPaUQsRUFpT2pELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQWpPaUQsRUFrT2pELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQWxPaUQsRUFvT2pEO0FBQ0EsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLENBck9pRCxFQXNPakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdE9pRCxFQXVPakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBdk9pRCxFQXdPakQsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLENBeE9pRCxFQTBPakQ7QUFDQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLENBQWYsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0EzT2lELEVBNE9qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0E1T2lELEVBNk9qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0E3T2lELEVBOE9qRCxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0E5T2lELEVBZ1BqRDtBQUNBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQixHQUFsQixFQUF1QixHQUF2QixDQWpQaUQsRUFrUGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQWxQaUQsRUFtUGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQW5QaUQsRUFvUGpELENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixDQXBQaUQsQ0FBN0I7QUFGNUIsMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7QUFHQTs7QUFFQSxzRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7QUFJQSxJQUFZLGlCQUFaOztBQUFBLFdBQVksaUJBQVosRUFBNkI7QUFDekI7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTs7OztBQUdBO0FBQ0gsQ0FwQkQsRUFBWSw4RUFBaUIsRUFBakIsQ0FBWixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7OztBQUlBLElBQVksV0FBWjs7QUFBQSxXQUFZLFdBQVosRUFBdUI7QUFDbkI7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUVBOzs7O0FBR0E7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUNILENBeENELEVBQVksNERBQVcsRUFBWCxDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRUE7Ozs7OztJQUlBLFU7OztBQU1JOzs7OztBQUtBLHNCQUFZLElBQVosRUFBOEIsSUFBOUIsRUFBMEM7QUFBQTs7QUFDdEMsU0FBSyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUssS0FBTCxHQUFhLElBQWI7QUFDSDtBQUVEOzs7Ozs7Ozs4QkFJYztBQUNWLGFBQU8sS0FBSyxLQUFaO0FBQ0g7QUFFRDs7Ozs7Ozs4QkFJYztBQUNWLGFBQU8sS0FBSyxLQUFaO0FBQ0g7QUFjRDs7Ozs7Ozs7b0NBS3VCLFUsRUFBa0I7QUFDckMsVUFBSSxjQUFjLENBQWQsSUFBbUIsYUFBYSxFQUFwQyxFQUF3QztBQUNwQyxnQkFBUSxLQUFLLEtBQWI7QUFDSSxlQUFLLHdCQUFXLE1BQWhCO0FBQXdCLG1CQUFPLEVBQVA7O0FBQ3hCLGVBQUssd0JBQVcsWUFBaEI7QUFBOEIsbUJBQU8sQ0FBUDs7QUFDOUIsZUFBSyx3QkFBVyxLQUFoQjtBQUF1QixtQkFBTyxDQUFQOztBQUN2QjtBQUNJLGtCQUFNLElBQUksS0FBSix3QkFBMEIsS0FBSyxLQUEvQixFQUFOO0FBTFI7QUFPSCxPQVJELE1BUU8sSUFBSSxhQUFhLEVBQWpCLEVBQXFCO0FBQ3hCLGdCQUFRLEtBQUssS0FBYjtBQUNJLGVBQUssd0JBQVcsTUFBaEI7QUFBd0IsbUJBQU8sRUFBUDs7QUFDeEIsZUFBSyx3QkFBVyxZQUFoQjtBQUE4QixtQkFBTyxFQUFQOztBQUM5QixlQUFLLHdCQUFXLEtBQWhCO0FBQXVCLG1CQUFPLEVBQVA7O0FBQ3ZCO0FBQ0ksa0JBQU0sSUFBSSxLQUFKLHdCQUEwQixLQUFLLEtBQS9CLEVBQU47QUFMUjtBQU9ILE9BUk0sTUFRQSxJQUFJLGFBQWEsRUFBakIsRUFBcUI7QUFDeEIsZ0JBQVEsS0FBSyxLQUFiO0FBQ0ksZUFBSyx3QkFBVyxNQUFoQjtBQUF3QixtQkFBTyxFQUFQOztBQUN4QixlQUFLLHdCQUFXLFlBQWhCO0FBQThCLG1CQUFPLEVBQVA7O0FBQzlCLGVBQUssd0JBQVcsS0FBaEI7QUFBdUIsbUJBQU8sRUFBUDs7QUFDdkI7QUFDSSxrQkFBTSxJQUFJLEtBQUosd0JBQTBCLEtBQUssS0FBL0IsRUFBTjtBQUxSO0FBT0gsT0FSTSxNQVFBO0FBQ0gsY0FBTSxJQUFJLEtBQUosOEJBQWdDLFVBQWhDLEVBQU47QUFDSDtBQUNKOzs7Ozs7QUE3RUwsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7O0FBSUEsSUFBWSxVQUFaOztBQUFBLFdBQVksVUFBWixFQUFzQjtBQUNsQjs7O0FBR0E7QUFFQTs7OztBQUdBO0FBRUE7Ozs7QUFHQTtBQUNILENBZkQsRUFBWSx5REFBVSxFQUFWLENBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFJQTs7Ozs7O0lBSUEsRTs7O0FBcUJJOzs7OztBQUtBLGdCQUE4RjtBQUFBLFFBQWxGLFVBQWtGLHVFQUE3RCxDQUE2RDtBQUFBLFFBQTFELGlCQUEwRCx1RUFBbkIsc0NBQWtCLENBQUM7O0FBQUE7O0FBQzFGLFFBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLFVBQXZCLENBQUQsSUFBdUMsYUFBYSxDQUFwRCxJQUF5RCxhQUFhLEVBQTFFLEVBQThFO0FBQzFFLFlBQU0sTUFBTSw0REFBTixDQUFOO0FBQ0g7O0FBQ0QsU0FBSyxXQUFMLEdBQW1CLFVBQW5CO0FBQ0EsU0FBSyxrQkFBTCxHQUEwQixpQkFBMUI7QUFDQSxTQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBRUEsNEJBQVcsVUFBWDtBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUllLE0sRUFBYztBQUN6QixXQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQUksaUJBQUosQ0FBWSxNQUFaLENBQWxCO0FBQ0g7QUFFRDs7Ozs7Ozs4QkFJaUIsTSxFQUFjO0FBQzNCLFdBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBSSxtQkFBSixDQUFhLE1BQWIsQ0FBbEI7QUFDSDtBQUVEOzs7Ozs7O29DQUl1QixNLEVBQWM7QUFDakMsV0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixJQUFJLCtCQUFKLENBQW1CLE1BQW5CLENBQWxCO0FBQ0g7QUFFRDs7Ozs7Ozs7OytCQU1lO0FBQ1gsV0FBSyxvQkFBTDtBQUVBLFdBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsS0FBSyxrQkFBTCxFQUFyQjtBQUVBLFVBQU0sU0FBcUIsRUFBM0I7O0FBQ0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssWUFBekIsRUFBdUMsR0FBdkMsRUFBNEM7QUFDeEMsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssWUFBekIsRUFBdUMsR0FBdkMsRUFBNEM7QUFDeEMsaUJBQU8sQ0FBUCxJQUFZLE9BQU8sQ0FBUCxLQUFhLEVBQXpCO0FBQ0EsaUJBQU8sQ0FBUCxFQUFVLENBQVYsSUFBZSxLQUFLLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixDQUFmO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLE1BQVA7QUFDSDtBQUVEOzs7OzJCQUNlLEcsRUFBYSxHLEVBQVc7QUFDbkMsVUFBSSxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLE1BQTRCLElBQWhDLEVBQXNDO0FBQ2xDLGVBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixHQUFuQixDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxLQUFQO0FBQ0g7QUFDSjtBQUVEOzs7O3lDQUMwQjtBQUN0QixVQUFJLGVBQWUsQ0FBbkI7QUFDQSxVQUFJLFVBQVUsQ0FBZDs7QUFFQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFFeEIsYUFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixDQUFwQjtBQUVBLFlBQU0sWUFBWSxLQUFLLFlBQUwsRUFBbEI7O0FBRUEsWUFBSSxNQUFNLENBQU4sSUFBVyxlQUFlLFNBQTlCLEVBQXlDO0FBQ3JDLHlCQUFlLFNBQWY7QUFDQSxvQkFBVSxDQUFWO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLE9BQVA7QUFDSDtBQUVEOzs7OzZCQUNpQixJLEVBQWUsVyxFQUFtQjtBQUMvQyxXQUFLLFlBQUwsR0FBb0IsS0FBSyxXQUFMLEdBQW1CLENBQW5CLEdBQXVCLEVBQTNDO0FBQ0EsV0FBSyxRQUFMLEdBQWdCLEVBQWhCOztBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLFlBQXpCLEVBQXVDLEdBQXZDLEVBQTRDO0FBQ3hDLGFBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsRUFBbkI7O0FBQ0EsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssWUFBekIsRUFBdUMsR0FBdkMsRUFBNEM7QUFDeEMsZUFBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixJQUFqQixDQUFzQixJQUF0QjtBQUNIO0FBQ0o7O0FBRUQsV0FBSyx5QkFBTCxDQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNBLFdBQUsseUJBQUwsQ0FBK0IsS0FBSyxZQUFMLEdBQW9CLENBQW5ELEVBQXNELENBQXREO0FBQ0EsV0FBSyx5QkFBTCxDQUErQixDQUEvQixFQUFrQyxLQUFLLFlBQUwsR0FBb0IsQ0FBdEQ7QUFFQSxXQUFLLDBCQUFMO0FBQ0EsV0FBSyxrQkFBTDtBQUVBLFdBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixXQUF6Qjs7QUFFQSxVQUFJLEtBQUssV0FBTCxJQUFvQixDQUF4QixFQUEyQjtBQUN2QixhQUFLLGVBQUwsQ0FBcUIsSUFBckI7QUFDSDs7QUFFRCxVQUFNLE9BQU8sS0FBSyxVQUFMLEVBQWI7QUFFQSxXQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLFdBQW5CO0FBQ0g7QUFFRDs7Ozs0QkFDZ0IsSSxFQUFnQixXLEVBQW1CO0FBQy9DLFVBQUksTUFBTSxDQUFDLENBQVg7QUFDQSxVQUFJLE1BQU0sS0FBSyxZQUFMLEdBQW9CLENBQTlCO0FBQ0EsVUFBSSxXQUFXLENBQWY7QUFDQSxVQUFJLFlBQVksQ0FBaEI7QUFDQSxVQUFNLFdBQVcsb0JBQVMsYUFBVCxDQUF1QixXQUF2QixDQUFqQjs7QUFFQSxXQUFLLElBQUksTUFBTSxLQUFLLFlBQUwsR0FBb0IsQ0FBbkMsRUFBc0MsTUFBTSxDQUE1QyxFQUErQyxPQUFPLENBQXRELEVBQXlEO0FBRXJELFlBQUksUUFBUSxDQUFaLEVBQWU7QUFDWCxpQkFBTyxDQUFQO0FBQ0g7O0FBRUQsWUFBSSxPQUFPLElBQVg7O0FBQ0EsZUFBTyxJQUFQLEVBQWE7QUFFVCxlQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFFeEIsZ0JBQUksS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixNQUFNLENBQXpCLE1BQWdDLElBQXBDLEVBQTBDO0FBRXRDLGtCQUFJLE9BQU8sS0FBWDs7QUFFQSxrQkFBSSxZQUFZLEtBQUssTUFBckIsRUFBNkI7QUFDekIsdUJBQVEsQ0FBRSxLQUFLLFNBQUwsTUFBb0IsUUFBckIsR0FBaUMsQ0FBbEMsTUFBeUMsQ0FBakQ7QUFDSDs7QUFFRCxrQkFBTSxPQUFPLFNBQVMsR0FBVCxFQUFjLE1BQU0sQ0FBcEIsQ0FBYjs7QUFFQSxrQkFBSSxJQUFKLEVBQVU7QUFDTix1QkFBTyxDQUFDLElBQVI7QUFDSDs7QUFFRCxtQkFBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixNQUFNLENBQXpCLElBQThCLElBQTlCO0FBQ0EsMEJBQVksQ0FBWjs7QUFFQSxrQkFBSSxhQUFhLENBQUMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDQSwyQkFBVyxDQUFYO0FBQ0g7QUFDSjtBQUNKOztBQUVELGlCQUFPLEdBQVA7O0FBRUEsY0FBSSxNQUFNLENBQU4sSUFBVyxLQUFLLFlBQUwsSUFBcUIsR0FBcEMsRUFBeUM7QUFDckMsbUJBQU8sR0FBUDtBQUNBLGtCQUFNLENBQUMsR0FBUDtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUVEOzs7O2lEQUNrQztBQUM5QixVQUFNLE1BQU0sb0JBQVMsa0JBQVQsQ0FBNEIsS0FBSyxXQUFqQyxDQUFaOztBQUVBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxJQUFJLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDO0FBRWpDLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxJQUFJLE1BQXhCLEVBQWdDLEdBQWhDLEVBQXFDO0FBRWpDLGNBQU0sTUFBTSxJQUFJLENBQUosQ0FBWjtBQUNBLGNBQU0sTUFBTSxJQUFJLENBQUosQ0FBWjs7QUFFQSxjQUFJLEtBQUssUUFBTCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsTUFBNEIsSUFBaEMsRUFBc0M7QUFDbEM7QUFDSDs7QUFFRCxlQUFLLElBQUksSUFBSSxDQUFDLENBQWQsRUFBaUIsS0FBSyxDQUF0QixFQUF5QixHQUF6QixFQUE4QjtBQUUxQixpQkFBSyxJQUFJLElBQUksQ0FBQyxDQUFkLEVBQWlCLEtBQUssQ0FBdEIsRUFBeUIsR0FBekIsRUFBOEI7QUFFMUIsa0JBQUksTUFBTSxDQUFDLENBQVAsSUFBWSxNQUFNLENBQWxCLElBQXVCLE1BQU0sQ0FBQyxDQUE5QixJQUFtQyxNQUFNLENBQXpDLElBQ0ksTUFBTSxDQUFOLElBQVcsTUFBTSxDQUR6QixFQUM2QjtBQUN6QixxQkFBSyxRQUFMLENBQWMsTUFBTSxDQUFwQixFQUF1QixNQUFNLENBQTdCLElBQWtDLElBQWxDO0FBQ0gsZUFIRCxNQUdPO0FBQ0gscUJBQUssUUFBTCxDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QixJQUFrQyxLQUFsQztBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUVEOzs7OzhDQUNrQyxHLEVBQWEsRyxFQUFXO0FBQ3RELFdBQUssSUFBSSxJQUFJLENBQUMsQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCO0FBQzFCLGFBQUssSUFBSSxJQUFJLENBQUMsQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCO0FBQzFCLGNBQUksTUFBTSxDQUFOLElBQVcsQ0FBQyxDQUFaLElBQWlCLEtBQUssWUFBTCxJQUFxQixNQUFNLENBQTVDLElBQ0csTUFBTSxDQUFOLElBQVcsQ0FBQyxDQURmLElBQ29CLEtBQUssWUFBTCxJQUFxQixNQUFNLENBRG5ELEVBQ3NEO0FBQ2xEO0FBQ0g7O0FBRUQsY0FBSyxLQUFLLENBQUwsSUFBVSxLQUFLLENBQWYsS0FBcUIsTUFBTSxDQUFOLElBQVcsTUFBTSxDQUF0QyxDQUFELElBQ0ksS0FBSyxDQUFMLElBQVUsS0FBSyxDQUFmLEtBQXFCLE1BQU0sQ0FBTixJQUFXLE1BQU0sQ0FBdEMsQ0FESixJQUVJLEtBQUssQ0FBTCxJQUFVLEtBQUssQ0FBZixJQUFvQixLQUFLLENBQXpCLElBQThCLEtBQUssQ0FGM0MsRUFFK0M7QUFDM0MsaUJBQUssUUFBTCxDQUFjLE1BQU0sQ0FBcEIsRUFBdUIsTUFBTSxDQUE3QixJQUFrQyxJQUFsQztBQUNILFdBSkQsTUFJTztBQUNILGlCQUFLLFFBQUwsQ0FBYyxNQUFNLENBQXBCLEVBQXVCLE1BQU0sQ0FBN0IsSUFBa0MsS0FBbEM7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUVEOzs7O3lDQUMwQjtBQUN0QixXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxZQUFMLEdBQW9CLENBQXhDLEVBQTJDLEdBQTNDLEVBQWdEO0FBQzVDLFlBQUksS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFqQixNQUF3QixJQUE1QixFQUFrQztBQUM5QjtBQUNIOztBQUNELGFBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsSUFBc0IsSUFBSSxDQUFKLEtBQVUsQ0FBaEM7QUFDSDs7QUFDRCxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxZQUFMLEdBQW9CLENBQXhDLEVBQTJDLEdBQTNDLEVBQWdEO0FBQzVDLFlBQUksS0FBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixDQUFqQixNQUF3QixJQUE1QixFQUFrQztBQUM5QjtBQUNIOztBQUNELGFBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsSUFBc0IsSUFBSSxDQUFKLEtBQVUsQ0FBaEM7QUFDSDtBQUNKO0FBRUQ7Ozs7b0NBQ3dCLEksRUFBYTtBQUNqQyxVQUFNLE9BQU8sb0JBQVMsZ0JBQVQsQ0FBMEIsS0FBSyxXQUEvQixDQUFiOztBQUVBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxFQUFwQixFQUF3QixHQUF4QixFQUE2QjtBQUN6QixhQUFLLFFBQUwsQ0FBYyxDQUFDLEVBQUUsSUFBSSxDQUFOLENBQWYsRUFBeUIsSUFBSSxDQUFKLEdBQVEsS0FBSyxZQUFiLEdBQTRCLENBQTVCLEdBQWdDLENBQXpELElBQ0ksQ0FBQyxJQUFELElBQVMsQ0FBRSxRQUFRLENBQVQsR0FBYyxDQUFmLE1BQXNCLENBRG5DO0FBRUg7O0FBRUQsV0FBSyxJQUFJLEtBQUksQ0FBYixFQUFnQixLQUFJLEVBQXBCLEVBQXdCLElBQXhCLEVBQTZCO0FBQ3pCLGFBQUssUUFBTCxDQUFjLEtBQUksQ0FBSixHQUFRLEtBQUssWUFBYixHQUE0QixDQUE1QixHQUFnQyxDQUE5QyxFQUFpRCxDQUFDLEVBQUUsS0FBSSxDQUFOLENBQWxELElBQ0ksQ0FBQyxJQUFELElBQVMsQ0FBRSxRQUFRLEVBQVQsR0FBYyxDQUFmLE1BQXNCLENBRG5DO0FBRUg7QUFDSjtBQUVEOzs7O2tDQUNzQixJLEVBQWUsVyxFQUFtQjtBQUNwRCxVQUFNLE9BQVEsS0FBSyxrQkFBTCxJQUEyQixDQUE1QixHQUFpQyxXQUE5QztBQUNBLFVBQU0sT0FBTyxvQkFBUyxjQUFULENBQXdCLElBQXhCLENBQWIsQ0FGb0QsQ0FJcEQ7O0FBQ0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEVBQXBCLEVBQXdCLEdBQXhCLEVBQTZCO0FBRXpCLFlBQU0sTUFBTSxDQUFDLElBQUQsSUFBUyxDQUFFLFFBQVEsQ0FBVCxHQUFjLENBQWYsTUFBc0IsQ0FBM0M7O0FBRUEsWUFBSSxJQUFJLENBQVIsRUFBVztBQUNQLGVBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsSUFBc0IsR0FBdEI7QUFDSCxTQUZELE1BRU8sSUFBSSxJQUFJLENBQVIsRUFBVztBQUNkLGVBQUssUUFBTCxDQUFjLElBQUksQ0FBbEIsRUFBcUIsQ0FBckIsSUFBMEIsR0FBMUI7QUFDSCxTQUZNLE1BRUE7QUFDSCxlQUFLLFFBQUwsQ0FBYyxLQUFLLFlBQUwsR0FBb0IsRUFBcEIsR0FBeUIsQ0FBdkMsRUFBMEMsQ0FBMUMsSUFBK0MsR0FBL0M7QUFDSDtBQUNKLE9BaEJtRCxDQWtCcEQ7OztBQUNBLFdBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxFQUFwQixFQUF3QixLQUF4QixFQUE2QjtBQUV6QixZQUFNLE9BQU0sQ0FBQyxJQUFELElBQVMsQ0FBRSxRQUFRLEdBQVQsR0FBYyxDQUFmLE1BQXNCLENBQTNDOztBQUVBLFlBQUksTUFBSSxDQUFSLEVBQVc7QUFDUCxlQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEtBQUssWUFBTCxHQUFvQixHQUFwQixHQUF3QixDQUF6QyxJQUE4QyxJQUE5QztBQUNILFNBRkQsTUFFTyxJQUFJLE1BQUksQ0FBUixFQUFXO0FBQ2QsZUFBSyxRQUFMLENBQWMsQ0FBZCxFQUFpQixLQUFLLEdBQUwsR0FBUyxDQUFULEdBQWEsQ0FBOUIsSUFBbUMsSUFBbkM7QUFDSCxTQUZNLE1BRUE7QUFDSCxlQUFLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLEtBQUssR0FBTCxHQUFTLENBQTFCLElBQStCLElBQS9CO0FBQ0g7QUFDSixPQTlCbUQsQ0FnQ3BEOzs7QUFDQSxXQUFLLFFBQUwsQ0FBYyxLQUFLLFlBQUwsR0FBb0IsQ0FBbEMsRUFBcUMsQ0FBckMsSUFBMEMsQ0FBQyxJQUEzQztBQUNIO0FBRUQ7Ozs7bUNBQ29CO0FBQ2hCLFVBQU0sY0FBYyxLQUFLLFlBQXpCO0FBRUEsVUFBSSxZQUFZLENBQWhCLENBSGdCLENBS2hCOztBQUVBLFdBQUssSUFBSSxNQUFNLENBQWYsRUFBa0IsTUFBTSxXQUF4QixFQUFxQyxLQUFyQyxFQUE0QztBQUV4QyxhQUFLLElBQUksTUFBTSxDQUFmLEVBQWtCLE1BQU0sV0FBeEIsRUFBcUMsS0FBckMsRUFBNEM7QUFFeEMsY0FBSSxZQUFZLENBQWhCO0FBQ0EsY0FBTSxPQUFPLEtBQUssTUFBTCxDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBYjs7QUFFQSxlQUFLLElBQUksSUFBSSxDQUFDLENBQWQsRUFBaUIsS0FBSyxDQUF0QixFQUF5QixHQUF6QixFQUE4QjtBQUUxQixnQkFBSSxNQUFNLENBQU4sR0FBVSxDQUFWLElBQWUsZUFBZSxNQUFNLENBQXhDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBRUQsaUJBQUssSUFBSSxJQUFJLENBQUMsQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCO0FBRTFCLGtCQUFJLE1BQU0sQ0FBTixHQUFVLENBQVYsSUFBZSxlQUFlLE1BQU0sQ0FBeEMsRUFBMkM7QUFDdkM7QUFDSDs7QUFFRCxrQkFBSSxNQUFNLENBQU4sSUFBVyxNQUFNLENBQXJCLEVBQXdCO0FBQ3BCO0FBQ0g7O0FBRUQsa0JBQUksU0FBUyxLQUFLLE1BQUwsQ0FBWSxNQUFNLENBQWxCLEVBQXFCLE1BQU0sQ0FBM0IsQ0FBYixFQUE0QztBQUN4QztBQUNIO0FBQ0o7QUFDSjs7QUFFRCxjQUFJLFlBQVksQ0FBaEIsRUFBbUI7QUFDZix5QkFBYyxJQUFJLFNBQUosR0FBZ0IsQ0FBOUI7QUFDSDtBQUNKO0FBQ0osT0F4Q2UsQ0EwQ2hCOzs7QUFFQSxXQUFLLElBQUksT0FBTSxDQUFmLEVBQWtCLE9BQU0sY0FBYyxDQUF0QyxFQUF5QyxNQUF6QyxFQUFnRDtBQUM1QyxhQUFLLElBQUksT0FBTSxDQUFmLEVBQWtCLE9BQU0sY0FBYyxDQUF0QyxFQUF5QyxNQUF6QyxFQUFnRDtBQUM1QyxjQUFJLFFBQVEsQ0FBWjs7QUFDQSxjQUFJLEtBQUssTUFBTCxDQUFZLElBQVosRUFBaUIsSUFBakIsQ0FBSixFQUEyQjtBQUFFO0FBQVU7O0FBQ3ZDLGNBQUksS0FBSyxNQUFMLENBQVksT0FBTSxDQUFsQixFQUFxQixJQUFyQixDQUFKLEVBQStCO0FBQUU7QUFBVTs7QUFDM0MsY0FBSSxLQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWlCLE9BQU0sQ0FBdkIsQ0FBSixFQUErQjtBQUFFO0FBQVU7O0FBQzNDLGNBQUksS0FBSyxNQUFMLENBQVksT0FBTSxDQUFsQixFQUFxQixPQUFNLENBQTNCLENBQUosRUFBbUM7QUFBRTtBQUFVOztBQUMvQyxjQUFJLFVBQVUsQ0FBVixJQUFlLFVBQVUsQ0FBN0IsRUFBZ0M7QUFDNUIseUJBQWEsQ0FBYjtBQUNIO0FBQ0o7QUFDSixPQXZEZSxDQXlEaEI7OztBQUVBLFdBQUssSUFBSSxRQUFNLENBQWYsRUFBa0IsUUFBTSxXQUF4QixFQUFxQyxPQUFyQyxFQUE0QztBQUN4QyxhQUFLLElBQUksUUFBTSxDQUFmLEVBQWtCLFFBQU0sY0FBYyxDQUF0QyxFQUF5QyxPQUF6QyxFQUFnRDtBQUM1QyxjQUFJLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBaUIsS0FBakIsS0FDRyxDQUFDLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBaUIsUUFBTSxDQUF2QixDQURKLElBRUcsS0FBSyxNQUFMLENBQVksS0FBWixFQUFpQixRQUFNLENBQXZCLENBRkgsSUFHRyxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQWlCLFFBQU0sQ0FBdkIsQ0FISCxJQUlHLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBaUIsUUFBTSxDQUF2QixDQUpILElBS0csQ0FBQyxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQWlCLFFBQU0sQ0FBdkIsQ0FMSixJQU1HLEtBQUssTUFBTCxDQUFZLEtBQVosRUFBaUIsUUFBTSxDQUF2QixDQU5QLEVBTWtDO0FBQzlCLHlCQUFhLEVBQWI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsV0FBSyxJQUFJLFFBQU0sQ0FBZixFQUFrQixRQUFNLFdBQXhCLEVBQXFDLE9BQXJDLEVBQTRDO0FBQ3hDLGFBQUssSUFBSSxRQUFNLENBQWYsRUFBa0IsUUFBTSxjQUFjLENBQXRDLEVBQXlDLE9BQXpDLEVBQWdEO0FBQzVDLGNBQUksS0FBSyxNQUFMLENBQVksS0FBWixFQUFpQixLQUFqQixLQUNHLENBQUMsS0FBSyxNQUFMLENBQVksUUFBTSxDQUFsQixFQUFxQixLQUFyQixDQURKLElBRUcsS0FBSyxNQUFMLENBQVksUUFBTSxDQUFsQixFQUFxQixLQUFyQixDQUZILElBR0csS0FBSyxNQUFMLENBQVksUUFBTSxDQUFsQixFQUFxQixLQUFyQixDQUhILElBSUcsS0FBSyxNQUFMLENBQVksUUFBTSxDQUFsQixFQUFxQixLQUFyQixDQUpILElBS0csQ0FBQyxLQUFLLE1BQUwsQ0FBWSxRQUFNLENBQWxCLEVBQXFCLEtBQXJCLENBTEosSUFNRyxLQUFLLE1BQUwsQ0FBWSxRQUFNLENBQWxCLEVBQXFCLEtBQXJCLENBTlAsRUFNa0M7QUFDOUIseUJBQWEsRUFBYjtBQUNIO0FBQ0o7QUFDSixPQXJGZSxDQXVGaEI7OztBQUVBLFVBQUksWUFBWSxDQUFoQjs7QUFFQSxXQUFLLElBQUksUUFBTSxDQUFmLEVBQWtCLFFBQU0sV0FBeEIsRUFBcUMsT0FBckMsRUFBNEM7QUFDeEMsYUFBSyxJQUFJLFFBQU0sQ0FBZixFQUFrQixRQUFNLFdBQXhCLEVBQXFDLE9BQXJDLEVBQTRDO0FBQ3hDLGNBQUksS0FBSyxNQUFMLENBQVksS0FBWixFQUFpQixLQUFqQixDQUFKLEVBQTJCO0FBQ3ZCO0FBQ0g7QUFDSjtBQUNKOztBQUVELFVBQU0sUUFBUSxLQUFLLEdBQUwsQ0FBUyxNQUFNLFNBQU4sR0FBa0IsV0FBbEIsR0FBZ0MsV0FBaEMsR0FBOEMsRUFBdkQsSUFBNkQsQ0FBM0U7QUFDQSxtQkFBYSxRQUFRLEVBQXJCO0FBRUEsYUFBTyxTQUFQO0FBQ0g7QUFFRDs7OztpQ0FDa0I7QUFDZCxVQUFNLFdBQXNCLGtCQUFRLFdBQVIsQ0FBb0IsS0FBSyxXQUF6QixFQUFzQyxLQUFLLGtCQUEzQyxDQUE1QjtBQUVBLFVBQU0sU0FBUyxJQUFJLHFCQUFKLEVBQWY7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssT0FBTCxDQUFhLE1BQWpDLEVBQXlDLEdBQXpDLEVBQThDO0FBQzFDLFlBQU0sT0FBTyxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQWI7QUFDQSxlQUFPLEdBQVAsQ0FBVyxLQUFLLE9BQUwsRUFBWCxFQUEyQixDQUEzQjtBQUNBLGVBQU8sR0FBUCxDQUFXLEtBQUssU0FBTCxFQUFYLEVBQTZCLEtBQUssZUFBTCxDQUFxQixLQUFLLFdBQTFCLENBQTdCO0FBQ0EsYUFBSyxLQUFMLENBQVcsTUFBWDtBQUNILE9BVmEsQ0FZZDs7O0FBQ0EsVUFBSSxpQkFBaUIsQ0FBckI7O0FBQ0EsV0FBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFNBQVMsTUFBN0IsRUFBcUMsS0FBckMsRUFBMEM7QUFDdEMsMEJBQWtCLFNBQVMsR0FBVCxFQUFZLFlBQVosRUFBbEI7QUFDSDs7QUFFRCxVQUFJLE9BQU8sZUFBUCxLQUEyQixpQkFBaUIsQ0FBaEQsRUFBbUQ7QUFDL0MsY0FBTSxJQUFJLEtBQUosdUVBQXlFLE9BQU8sZUFBUCxFQUF6RSxnQkFBdUcsaUJBQWlCLENBQXhILGtEQUFpSyxLQUFLLFdBQXRLLEVBQU47QUFDSCxPQXBCYSxDQXNCZDs7O0FBQ0EsVUFBSSxPQUFPLGVBQVAsS0FBMkIsQ0FBM0IsSUFBZ0MsaUJBQWlCLENBQXJELEVBQXdEO0FBQ3BELGVBQU8sR0FBUCxDQUFXLENBQVgsRUFBYyxDQUFkO0FBQ0gsT0F6QmEsQ0EyQmQ7OztBQUNBLGFBQU8sT0FBTyxlQUFQLEtBQTJCLENBQTNCLEtBQWlDLENBQXhDLEVBQTJDO0FBQ3ZDLGVBQU8sTUFBUCxDQUFjLEtBQWQ7QUFDSCxPQTlCYSxDQWdDZDs7O0FBQ0EsVUFBSSxPQUFPLElBQVg7O0FBQ0EsYUFBTyxJQUFQLEVBQWE7QUFDVCxZQUFJLE9BQU8sZUFBUCxNQUE0QixpQkFBaUIsQ0FBakQsRUFBb0Q7QUFDaEQ7QUFDSDs7QUFDRCxlQUFPLEdBQVAsQ0FBVyxHQUFHLElBQWQsRUFBb0IsQ0FBcEI7O0FBRUEsWUFBSSxPQUFPLGVBQVAsTUFBNEIsaUJBQWlCLENBQWpELEVBQW9EO0FBQ2hELGlCQUFPLEtBQVA7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBTyxHQUFQLENBQVcsR0FBRyxJQUFkLEVBQW9CLENBQXBCO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLEtBQUssV0FBTCxDQUFpQixNQUFqQixFQUF5QixRQUF6QixDQUFQO0FBQ0g7QUFFRDs7OztnQ0FDb0IsTSxFQUFtQixRLEVBQW1CO0FBQ3RELFVBQUksU0FBUyxDQUFiO0FBRUEsVUFBSSxhQUFhLENBQWpCO0FBQ0EsVUFBSSxhQUFhLENBQWpCO0FBRUEsVUFBTSxTQUFxQixFQUEzQjtBQUNBLFVBQU0sU0FBcUIsRUFBM0I7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsTUFBN0IsRUFBcUMsR0FBckMsRUFBMEM7QUFDdEMsZUFBTyxJQUFQLENBQVksRUFBWjtBQUNBLGVBQU8sSUFBUCxDQUFZLEVBQVo7QUFDSDs7QUFFRCw4QkFBd0IsR0FBeEIsRUFBbUM7QUFDL0IsWUFBTSxJQUFjLEVBQXBCOztBQUNBLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxHQUFwQixFQUF5QixHQUF6QixFQUE4QjtBQUMxQixZQUFFLElBQUYsQ0FBTyxDQUFQO0FBQ0g7O0FBQ0QsZUFBTyxDQUFQO0FBQ0gsT0FwQnFELENBc0J0RDs7O0FBRUEsV0FBSyxJQUFJLEtBQUksQ0FBYixFQUFnQixLQUFJLFNBQVMsTUFBN0IsRUFBcUMsSUFBckMsRUFBMEM7QUFFdEMsWUFBTSxVQUFVLFNBQVMsRUFBVCxFQUFZLFlBQVosRUFBaEI7O0FBQ0EsWUFBTSxVQUFVLFNBQVMsRUFBVCxFQUFZLGFBQVosS0FBOEIsT0FBOUM7QUFFQSxxQkFBYSxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLE9BQXJCLENBQWI7QUFDQSxxQkFBYSxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLE9BQXJCLENBQWI7QUFFQSxlQUFPLEVBQVAsSUFBWSxlQUFlLE9BQWYsQ0FBWjs7QUFDQSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksT0FBTyxFQUFQLEVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFDdkMsaUJBQU8sRUFBUCxFQUFVLENBQVYsSUFBZSxPQUFPLE9BQU8sU0FBUCxHQUFtQixJQUFJLE1BQXZCLENBQXRCO0FBQ0g7O0FBQ0Qsa0JBQVUsT0FBVjtBQUVBLFlBQU0sU0FBUyxvQkFBUyx5QkFBVCxDQUFtQyxPQUFuQyxDQUFmO0FBQ0EsWUFBTSxVQUFVLElBQUksdUJBQUosQ0FBZSxPQUFPLEVBQVAsQ0FBZixFQUEwQixPQUFPLFNBQVAsS0FBcUIsQ0FBL0MsQ0FBaEI7QUFFQSxZQUFNLFVBQVUsUUFBUSxHQUFSLENBQVksTUFBWixDQUFoQjtBQUNBLGVBQU8sRUFBUCxJQUFZLGVBQWUsT0FBTyxTQUFQLEtBQXFCLENBQXBDLENBQVo7O0FBQ0EsYUFBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLE9BQU8sRUFBUCxFQUFVLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTJDO0FBQ3ZDLGNBQU0sV0FBVyxNQUFJLFFBQVEsU0FBUixFQUFKLEdBQTBCLE9BQU8sRUFBUCxFQUFVLE1BQXJEOztBQUNBLGlCQUFPLEVBQVAsRUFBVSxHQUFWLElBQWdCLFlBQVksQ0FBYixHQUFrQixRQUFRLEtBQVIsQ0FBYyxRQUFkLENBQWxCLEdBQTRDLENBQTNEO0FBQ0g7QUFDSjs7QUFFRCxVQUFJLGlCQUFpQixDQUFyQjs7QUFDQSxXQUFLLElBQUksTUFBSSxDQUFiLEVBQWdCLE1BQUksU0FBUyxNQUE3QixFQUFxQyxLQUFyQyxFQUEwQztBQUN0QywwQkFBa0IsU0FBUyxHQUFULEVBQVksYUFBWixFQUFsQjtBQUNIOztBQUVELFVBQU0sT0FBTyxlQUFlLGNBQWYsQ0FBYjtBQUNBLFVBQUksUUFBUSxDQUFaOztBQUVBLFdBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxVQUFwQixFQUFnQyxLQUFoQyxFQUFxQztBQUNqQyxhQUFLLElBQUksTUFBSSxDQUFiLEVBQWdCLE1BQUksU0FBUyxNQUE3QixFQUFxQyxLQUFyQyxFQUEwQztBQUN0QyxjQUFJLE1BQUksT0FBTyxHQUFQLEVBQVUsTUFBbEIsRUFBMEI7QUFDdEIsaUJBQUssS0FBTCxJQUFjLE9BQU8sR0FBUCxFQUFVLEdBQVYsQ0FBZDtBQUNBO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxVQUFwQixFQUFnQyxLQUFoQyxFQUFxQztBQUNqQyxhQUFLLElBQUksTUFBSSxDQUFiLEVBQWdCLE1BQUksU0FBUyxNQUE3QixFQUFxQyxLQUFyQyxFQUEwQztBQUN0QyxjQUFJLE1BQUksT0FBTyxHQUFQLEVBQVUsTUFBbEIsRUFBMEI7QUFDdEIsaUJBQUssS0FBTCxJQUFjLE9BQU8sR0FBUCxFQUFVLEdBQVYsQ0FBZDtBQUNBO0FBQ0g7QUFDSjtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7MkNBQzRCO0FBQ3hCLFVBQUksS0FBSyxXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLGFBQUssSUFBSSxhQUFhLENBQXRCLEVBQXlCLGNBQWMsRUFBdkMsRUFBMkMsWUFBM0MsRUFBeUQ7QUFDckQsY0FBTSxXQUFXLGtCQUFRLFdBQVIsQ0FBb0IsVUFBcEIsRUFBZ0MsS0FBSyxrQkFBckMsQ0FBakI7QUFDQSxjQUFNLFNBQVMsSUFBSSxxQkFBSixFQUFmOztBQUVBLGVBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLE9BQUwsQ0FBYSxNQUFqQyxFQUF5QyxHQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxPQUFPLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBYjtBQUNBLG1CQUFPLEdBQVAsQ0FBVyxLQUFLLE9BQUwsRUFBWCxFQUEyQixDQUEzQjtBQUNBLG1CQUFPLEdBQVAsQ0FBVyxLQUFLLFNBQUwsRUFBWCxFQUE2QixLQUFLLGVBQUwsQ0FBcUIsVUFBckIsQ0FBN0I7QUFDQSxpQkFBSyxLQUFMLENBQVcsTUFBWDtBQUNIOztBQUVELGNBQUksaUJBQWlCLENBQXJCOztBQUNBLGVBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxTQUFTLE1BQTdCLEVBQXFDLEtBQXJDLEVBQTBDO0FBQ3RDLDhCQUFrQixTQUFTLEdBQVQsRUFBWSxZQUFaLEVBQWxCO0FBQ0g7O0FBRUQsY0FBSSxPQUFPLGVBQVAsTUFBNEIsaUJBQWlCLENBQWpELEVBQW9EO0FBQ2hELGlCQUFLLFdBQUwsR0FBbUIsVUFBbkI7QUFDQTtBQUNILFdBSEQsTUFHTyxJQUFJLGVBQWUsRUFBbkIsRUFBdUI7QUFDMUIsa0JBQU0sSUFBSSxLQUFKLHVFQUF5RSxPQUFPLGVBQVAsRUFBekUsZ0JBQXVHLGlCQUFpQixDQUF4SCxrQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7OztBQWhrQkQ7OztBQUN3QixVQUFlLElBQWY7QUFDeEI7O0FBQ3dCLFVBQWUsSUFBZjtBQUo1QixnQjs7Ozs7Ozs7Ozs7QUNqQkEsK0YiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtcXItY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtcXItY29yZVwiLCBbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhUXJDb3JlXCJdID0gZmFjdG9yeShyb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhQmFzZVwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogUVIgRGF0YSBmb3IgcmVwcmVzZW50aW5nIGEgYWxwaGEgbnVtZXJpYy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSQWxwaGFOdW1lcmljIGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJBbHBoYU51bWVyaWMuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIGFscGhhIG51bWVyaWMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWMsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIGludG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSBpbnRvLlxyXG4gICAgICovXHJcbiAgICB3cml0ZShidWZmZXIpIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpICsgMSA8IHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5nZXRDb2RlKHMuY2hhckF0KGkpKSAqIDQ1ICtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29kZShzLmNoYXJBdChpICsgMSkpLCAxMSk7XHJcbiAgICAgICAgICAgIGkgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuZ2V0Q29kZShzLmNoYXJBdChpKSksIDYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0Q29kZShjKSB7XHJcbiAgICAgICAgaWYgKGMgPj0gXCIwXCIgJiYgYyA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSBcIkFcIiAmJiBjIDw9IFwiWlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIkFcIi5jaGFyQ29kZUF0KDApICsgMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIgXCI6IHJldHVybiAzNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIkXCI6IHJldHVybiAzNztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIlXCI6IHJldHVybiAzODtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6IHJldHVybiAzOTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6IHJldHVybiA0MDtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6IHJldHVybiA0MTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIuXCI6IHJldHVybiA0MjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6IHJldHVybiA0MztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI6XCI6IHJldHVybiA0NDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIGNoYXJhY3RlciBpbiBzdHJpbmcgOiAke2N9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUkFscGhhTnVtZXJpYyA9IFFSQWxwaGFOdW1lcmljO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpCYkhCb1lVNTFiV1Z5YVdNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXhja0ZzY0doaFRuVnRaWEpwWXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzY1VSQlFXdEVPMEZCUTJ4RUxIRkVRVUZyUkR0QlFVVnNSRHM3TzBkQlIwYzdRVUZEU0N4dlFrRkJORUlzVTBGQlVTeDFRa0ZCVlR0SlFVTXhRenM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrN1VVRkRjRUlzUzBGQlN5eERRVUZETEhWQ1FVRlZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzcERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hMUVVGTExFTkJRVU1zVFVGQmFVSTdVVUZETVVJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVldMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlEwNHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSVHRuUWtGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRFZqdFJRVVZFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRFpDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6VkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFBRVUZQTEVOQlFVTXNRMEZCVXp0UlFVVnlRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNNVF6dGhRVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlF6ZENMRTlCUVU4c1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTnVSRHRoUVVGTk8xbEJRMGdzVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUTFBc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJN2IwSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTNSRHRUUVVOS08wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk4wUkVMSGREUVRaRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhQmFzZVwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogUVIgRGF0YSBmb3IgcmVwcmVzZW50aW5nIGEgOCBiaXQgZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSQnl0ZTggZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkJ5dGU4LlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBxciA4IGJpdCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIocXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTgsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0J5dGVzKHRoaXMuZ2V0RGF0YSgpKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0cmluZ1RvQnl0ZXModGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGFbaV0sIDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RyaW5nVG9CeXRlcyhzdHIpIHtcclxuICAgICAgICBjb25zdCB1dGY4ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoYXJjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjaGFyY29kZSA8IDB4ODApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaChjaGFyY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhcmNvZGUgPCAweDgwMCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKDB4QzAgfCAoY2hhcmNvZGUgPj4gNiksIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNGKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhcmNvZGUgPCAweEQ4MDAgfHwgY2hhcmNvZGUgPj0gMHhFMDAwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhFMCB8IChjaGFyY29kZSA+PiAxMiksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDYpICYgMHgzRiksIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNGKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAvLyBVVEYtMTYgZW5jb2RlcyAweDEwMDAwLTB4MTBGRkZGIGJ5XHJcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdGluZyAweDEwMDAwIGFuZCBzcGxpdHRpbmcgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyAyMCBiaXRzIG9mIDB4MC0weEZGRkZGIGludG8gdHdvIGhhbHZlc1xyXG4gICAgICAgICAgICAgICAgY2hhcmNvZGUgPSAweDEwMDAwICsgKCgoY2hhcmNvZGUgJiAweDNGRikgPDwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgfCAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKDB4RjAgfCAoY2hhcmNvZGUgPj4gMTgpLCAweDgwIHwgKChjaGFyY29kZSA+PiAxMikgJiAweDNGKSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXRmODtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSQnl0ZTggPSBRUkJ5dGU4O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpDZVhSbE9DNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMM0Z5UW5sMFpUZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVOQkxIRkVRVUZyUkR0QlFVTnNSQ3h4UkVGQmEwUTdRVUZGYkVRN096dEhRVWRITzBGQlEwZ3NZVUZCY1VJc1UwRkJVU3gxUWtGQlZUdEpRVU51UXpzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEVsQlFWazdVVUZEY0VJc1MwRkJTeXhEUVVGRExIVkNRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFRRVUZUTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOeVJDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzUzBGQlN5eERRVUZETEUxQlFXbENPMUZCUXpGQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYkVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE1VSTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHRkJRV0VzUTBGQlF5eEhRVUZYTzFGQlF6ZENMRTFCUVUwc1NVRkJTU3hIUVVGaExFVkJRVVVzUTBGQlF6dFJRVU14UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5xUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NSVUZCUlR0blFrRkRha0lzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOMlFqdHBRa0ZCVFN4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFVkJRVVU3WjBKQlEzcENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVOMFFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU4yUXp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVsQlFVa3NVVUZCVVN4SlFVRkpMRTFCUVUwc1JVRkJSVHRuUWtGRGFFUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUTNaQ0xFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU12UWl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjJRenRwUWtGQlRUdG5Ra0ZEU0N4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRFNpeHhRMEZCY1VNN1owSkJRM0pETEhkRFFVRjNRenRuUWtGRGVFTXNlVU5CUVhsRE8yZENRVU42UXl4UlFVRlJMRWRCUVVjc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YzBKQlF6RkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU51UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4RlFVRkZMRU5CUVVNc1JVRkRka0lzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlEyaERMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVNdlFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU4yUXp0VFFVTktPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0RFFVTktPMEZCZWtSRUxEQkNRWGxFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSBudW1iZXIuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUk51bWJlciBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSTnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBxciBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXIsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIGludG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSBpbnRvLlxyXG4gICAgICovXHJcbiAgICB3cml0ZShidWZmZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpICsgMiA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMykpLCAxMCk7XHJcbiAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggLSBpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDEpKSwgNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5sZW5ndGggLSBpID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDIpKSwgNyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0clRvTnVtKHMpIHtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtID0gbnVtICogMTAgKyB0aGlzLmNoYXJUb051bShzLmNoYXJBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNoYXJUb051bShjKSB7XHJcbiAgICAgICAgaWYgKGMgPj0gXCIwXCIgJiYgYyA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIGNoYXJhY3RlciBpbiBzdHJpbmcgOiAke2N9YCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUk51bWJlciA9IFFSTnVtYmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpPZFcxaVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzl4Y2s1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVWc1JEczdPMGRCUjBjN1FVRkRTQ3hqUVVGelFpeFRRVUZSTEhWQ1FVRlZPMGxCUTNCRE96czdUMEZIUnp0SlFVTklMRmxCUVZrc1NVRkJXVHRSUVVOd1FpeExRVUZMTEVOQlFVTXNkVUpCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYmtNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRk5CUVZNN1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFdEJRVXNzUTBGQlF5eE5RVUZwUWp0UlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkZOVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlZZc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRlRUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEVmp0UlFVVkVMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYWtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM1pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJEdHBRa0ZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRPVUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUXpGRU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRkZCUVZFc1EwRkJReXhEUVVGVE8xRkJRM1JDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOYUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXk5Q0xFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMmhFTzFGQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZOQlFWTXNRMEZCUXl4RFFVRlRPMUZCUTNaQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRM1JDTEU5QlFVOHNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRemxETzFGQlEwUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUY0UkVRc05FSkJkMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIGZvciBtYWludGFpbmluZyBkYXRhIGJpdHMuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBCaXRCdWZmZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gW107XHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIGdldEJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0TGVuZ3RoSW5CaXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdXQobnVtLCBsZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qml0KCgobnVtID4+PiAobGVuZ3RoIC0gaSAtIDEpKSAmIDEpID09PSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRCaXQoYml0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xlbmd0aCA9PT0gdGhpcy5fYnVmZmVyLmxlbmd0aCAqIDgpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyW35+KHRoaXMuX2xlbmd0aCAvIDgpXSB8PSAoMHg4MCA+Pj4gKHRoaXMuX2xlbmd0aCAlIDgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoSW5CaXRzKCk7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5nZXRCaXQoaSkgPyBcIjFcIiA6IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0Qml0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fYnVmZmVyW35+KGluZGV4IC8gOCldID4+PiAoNyAtIGluZGV4ICUgOCkpICYgMSkgPT09IDE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CaXRCdWZmZXIgPSBCaXRCdWZmZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbDBRblZtWm1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12WW1sMFFuVm1abVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVbEpPMUZCUTBrc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWTkxGTkJRVk03VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZOTEdWQlFXVTdVVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZUU3hIUVVGSExFTkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFXTTdVVUZEYkVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGRrUTdTVUZEVEN4RFFVRkRPMGxCUlUwc1RVRkJUU3hEUVVGRExFZEJRVms3VVVGRGRFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNeFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU40UWp0UlFVTkVMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRMHdzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGRrVTdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVk5MRkZCUVZFN1VVRkRXQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTNReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1UwRkRlRU03VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVThzVFVGQlRTeERRVUZETEV0QlFXRTdVVUZEZUVJc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGVrVXNRMEZCUXp0RFFVTktPMEZCTlVORUxEaENRVFJEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIGhlbHBlciB3aXRoIG1hdGguXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBNYXRoSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbWF0aCBoZWxwZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGlmICghTWF0aEhlbHBlci5FWFBfVEFCTEUpIHtcclxuICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEUgPSBbXTtcclxuICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEUgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEUucHVzaChpIDwgOCA/IDEgPDwgaSA6XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDRdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDVdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDZdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDhdKTtcclxuICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuTE9HX1RBQkxFLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEVbTWF0aEhlbHBlci5FWFBfVEFCTEVbaV1dID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsb2cgb2YgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBnZXQgdGhlIGxvZyBvZi5cclxuICAgICAqIEByZXR1cm5zIHRoZSBsb2cgb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2xvZyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBsb2coJyArICR7dmFsdWV9ICsgJyknYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoSGVscGVyLkxPR19UQUJMRVt2YWx1ZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXhwb25lbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBnZXQgdGhlIGV4cG9uZW50IG9mLlxyXG4gICAgICogQHJldHVybnMgVGhlIGV4cG9uZW50IG9mIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdleHAodmFsdWUpIHtcclxuICAgICAgICBsZXQgbG9jYWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChsb2NhbFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBsb2NhbFZhbHVlICs9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsVmFsdWUgPj0gMjU2KSB7XHJcbiAgICAgICAgICAgIGxvY2FsVmFsdWUgLT0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5FWFBfVEFCTEVbbG9jYWxWYWx1ZV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXRoSGVscGVyID0gTWF0aEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGMGFFaGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMjFoZEdoSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenM3UjBGSFJ6dEJRVU5JTzBsQlRVazdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU4yUWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU14UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dFpRVU14UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU14UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNSRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRE0wSXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTXpRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRek5DTEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMmhETzFsQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM0pFTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQllUdFJRVU0xUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRFdDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRmRCUVZjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU0zUXp0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCWVR0UlFVTTFRaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEZGtJc1QwRkJUeXhWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyNUNMRlZCUVZVc1NVRkJTU3hIUVVGSExFTkJRVU03VTBGRGNrSTdVVUZEUkN4UFFVRlBMRlZCUVZVc1NVRkJTU3hIUVVGSExFVkJRVVU3V1VGRGRFSXNWVUZCVlN4SlFVRkpMRWRCUVVjc1EwRkJRenRUUVVOeVFqdFJRVU5FTEU5QlFVOHNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU0xUXl4RFFVRkRPME5CUTBvN1FVRjBSRVFzWjBOQmMwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtYXRoSGVscGVyXzEgPSByZXF1aXJlKFwiLi9tYXRoSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgcG9seW5vbWlhbC5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFBvbHlub21pYWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUG9seW5vbWlhbC5cclxuICAgICAqIEBwYXJhbSBudW0gVGhlIG51bSBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEBwYXJhbSBzaGlmdCBUaGUgc2hpZnQgZm9yIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW0sIHNoaWZ0ID0gMCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9udW0gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW4gPSBudW0ubGVuZ3RoIC0gb2Zmc2V0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbnVtLnB1c2gobnVtW29mZnNldCArIGldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlmdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX251bS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRoZSB2YWx1ZSBvZiB0aGUgcG9seW5vbWlhbCBhdCBnaXZlbiBpbmRleC5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGdldEF0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bVtpbmRleF07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgcG9seW5vbWlhbCB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLmdldEF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbG9nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxvZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgdG9Mb2dTdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyICs9IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTXVsdGlwbHkgdGhlIHBvbHlub21pYWwgd2l0aCBhbm90aGVyIG9uZS5cclxuICAgICAqIEBwYXJhbSBlIFRoZSBwb2x5bm9taWFsIHRvIG11bHRpcGx5LlxyXG4gICAgICogQHJldHVybnMgVGhlIG11bHRpcGxpY2F0aW9uIG9mIHRoZSBwb2x5bm9taWFscy5cclxuICAgICAqL1xyXG4gICAgbXVsdGlwbHkoZSkge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGUuZ2V0TGVuZ3RoKCk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbnVtW2kgKyBqXSBePSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdChpKSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdChqKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9seW5vbWlhbChudW0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1vZHVsdXMgb2YgdGhlIHBvbHlub21pYWwgZnJvbSBhbm90aGVyLlxyXG4gICAgICogQHBhcmFtIGUgVGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlcyBvZiB0aGUgcG9seW5vbWlhbHMuXHJcbiAgICAgKi9cclxuICAgIG1vZChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoMCkpIC0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KDApKTtcclxuICAgICAgICAvLyBjcmVhdGUgY29weVxyXG4gICAgICAgIGNvbnN0IG51bSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bS5wdXNoKHRoaXMuZ2V0QXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ0cmFjdCBhbmQgY2FsYyByZXN0LlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bVtpXSBePSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdChpKSkgKyByYXRpbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhbGwgcmVjdXJzaXZlbHlcclxuICAgICAgICByZXR1cm4gbmV3IFBvbHlub21pYWwobnVtKS5tb2QoZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2x5bm9taWFsID0gUG9seW5vbWlhbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXNXZiV2xoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMM0J2YkhsdWIyMXBZV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFpEUVVFd1F6dEJRVVV4UXpzN08wZEJSMGM3UVVGRFNEdEpRVWxKT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZaTEVkQlFXRXNSVUZCUlN4UlFVRm5RaXhEUVVGRE8xRkJRM2hETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWbUxFOUJRVThzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTTNReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFRRVU5hTzFGQlJVUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFppeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dFJRVU5vUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOdVF6dFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROVUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNrSTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhMUVVGaE8xRkJRM1JDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVMEZCVXp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZETlVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYUVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTFBc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF6dGhRVU5xUWp0WlFVTkVMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpOQ08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkROMElzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGZEJRVmM3VVVGRFpDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMUFzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXp0aFFVTnFRanRaUVVORUxFMUJRVTBzU1VGQlNTeDFRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVU03VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEZGQlFWRXNRMEZCUXl4RFFVRmhPMUZCUTNwQ0xFMUJRVTBzUjBGQlJ5eEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6RkNMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEWmp0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZGtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRjRU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3gxUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU40UkN4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UXp0VFFVTktPMUZCUTBRc1QwRkJUeXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFZEJRVWNzUTBGQlF5eERRVUZoTzFGQlEzQkNMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGRFTXNUMEZCVHl4SlFVRkpMRU5CUVVNN1UwRkRaanRSUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUZITEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXgxUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGTTBVc1kwRkJZenRSUVVOa0xFMUJRVTBzUjBGQlJ5eEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTjZRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNaRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkNPMUZCUlVRc01FSkJRVEJDTzFGQlF6RkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY0VNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEcxQ1FVRnRRanRSUVVOdVFpeFBRVUZQTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wTkJRMG83UVVGMlNFUXNaME5CZFVoREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG5jb25zdCBtYXNrUGF0dGVybl8xID0gcmVxdWlyZShcIi4uL21vZGVscy9tYXNrUGF0dGVyblwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG5jb25zdCBtYXRoSGVscGVyXzEgPSByZXF1aXJlKFwiLi9tYXRoSGVscGVyXCIpO1xyXG5jb25zdCBwb2x5bm9taWFsXzEgPSByZXF1aXJlKFwiLi9wb2x5bm9taWFsXCIpO1xyXG4vKipcclxuICogSGVscGVyIG1ldGhvZHMgZm9yIFFSIGdlbmVyYXRpb24uXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcGF0dGVybiBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgcGF0dGVybiBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcGF0dGVybiBmb3IgdGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UGF0dGVyblBvc2l0aW9uKHR5cGVOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gUVJIZWxwZXIuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWF4IGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHBhcmFtIG1vZGUgVGhlIGRhdGEgbW9kZSB0byBnZXQgZGF0YSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCBUaGUgZXJyb3IgY29ycmVjdGlvbiB0byBnZXQgdGhlIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1heCBsZW5ndGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXhMZW5ndGgodHlwZU51bWJlciwgbW9kZSwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBjb25zdCB0ID0gdHlwZU51bWJlciAtIDE7XHJcbiAgICAgICAgbGV0IGUgPSAwO1xyXG4gICAgICAgIGxldCBtID0gMDtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5MOlxyXG4gICAgICAgICAgICAgICAgZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLk06XHJcbiAgICAgICAgICAgICAgICBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuICAgICAgICAgICAgICAgIGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5IOlxyXG4gICAgICAgICAgICAgICAgZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBlcnJvciBjb3JyZWN0aW9uIGxldmVsICR7ZXJyb3JDb3JyZWN0TGV2ZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjpcclxuICAgICAgICAgICAgICAgIG0gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOlxyXG4gICAgICAgICAgICAgICAgbSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODpcclxuICAgICAgICAgICAgICAgIG0gPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YSBtb2RlICR7bW9kZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFFSSGVscGVyLk1BWF9MRU5HVEhbdF1bZV1bbV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3IgY29ycmVjdGlvbiBwb2x5bm9taWFsIGZvciB0aGUgZXJyb3IgY29ycmVjdG8gbGVuZ3RoLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExlbmd0aCBUaGUgZXJyb3IgY29ycmVjdGlvbiBsZW5ndGggdG8gZ2V0IHRoZSBwb2x5bm9taWFsIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb2x5bm9taWFsIGZvciB0aGUgZXJyb3IgY29ycmVjdGlvbiBsZW5ndGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVycm9yQ29ycmVjdExlbmd0aCkge1xyXG4gICAgICAgIGxldCBhID0gbmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKFsxXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckNvcnJlY3RMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhID0gYS5tdWx0aXBseShuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoWzEsIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAoaSldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1hc2sgbWV0aG9kIGZvciB0aGUgZ2l2ZW4gcGF0dGVybi5cclxuICAgICAqIEBwYXJhbSBtYXNrUGF0dGVybiBUaGUgcGF0dGVybiB0byBnZXQgdGhlIG1hc2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1hc2sgbWV0aG9kIGZvciB0aGUgcGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hc2tNZXRob2QobWFza1BhdHRlcm4pIHtcclxuICAgICAgICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSArIGopICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IGkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAxMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gaiAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDExOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSArIGopICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICh+fihpIC8gMikgKyB+fihqIC8gMykpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTEwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjExMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtYXNrICR7bWFza1BhdHRlcm59YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEJDSCB0eXBlIGluZm8uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBnZXQgdGhlIEJDSCB0eXBlIGluZm8gZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHR5cGUgaW5mby5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEJDSFR5cGVJbmZvKGRhdGEpIHtcclxuICAgICAgICBsZXQgZCA9IGRhdGEgPDwgMTA7XHJcbiAgICAgICAgd2hpbGUgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC0gUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE1KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKFFSSGVscGVyLkcxNSA8PCAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLVxyXG4gICAgICAgICAgICAgICAgUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE1KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gUVJIZWxwZXIuRzE1X01BU0s7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQkNIIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZ2V0IHRoZSBCQ0ggdHlwZSBudW1iZXIgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIVHlwZU51bWJlcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhIDw8IDEyO1xyXG4gICAgICAgIHdoaWxlIChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxOCkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChRUkhlbHBlci5HMTggPDwgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC1cclxuICAgICAgICAgICAgICAgIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxOCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChkYXRhIDw8IDEyKSB8IGQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hEaWdpdChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IGRpZ2l0ID0gMDtcclxuICAgICAgICB3aGlsZSAobG9jYWxEYXRhICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0Kys7XHJcbiAgICAgICAgICAgIGxvY2FsRGF0YSA+Pj49IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdpdDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuUEFUVEVSTl9QT1NJVElPTl9UQUJMRSA9IFtcclxuICAgIFtdLFxyXG4gICAgWzYsIDE4XSxcclxuICAgIFs2LCAyMl0sXHJcbiAgICBbNiwgMjZdLFxyXG4gICAgWzYsIDMwXSxcclxuICAgIFs2LCAzNF0sXHJcbiAgICBbNiwgMjIsIDM4XSxcclxuICAgIFs2LCAyNCwgNDJdLFxyXG4gICAgWzYsIDI2LCA0Nl0sXHJcbiAgICBbNiwgMjgsIDUwXSxcclxuICAgIFs2LCAzMCwgNTRdLFxyXG4gICAgWzYsIDMyLCA1OF0sXHJcbiAgICBbNiwgMzQsIDYyXSxcclxuICAgIFs2LCAyNiwgNDYsIDY2XSxcclxuICAgIFs2LCAyNiwgNDgsIDcwXSxcclxuICAgIFs2LCAyNiwgNTAsIDc0XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4XSxcclxuICAgIFs2LCAzMCwgNTYsIDgyXSxcclxuICAgIFs2LCAzMCwgNTgsIDg2XSxcclxuICAgIFs2LCAzNCwgNjIsIDkwXSxcclxuICAgIFs2LCAyOCwgNTAsIDcyLCA5NF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcbiAgICBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcclxuICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcclxuICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcbiAgICBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxyXG4gICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcclxuICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuICAgIFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcclxuICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcclxuICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuICAgIFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuTUFYX0xFTkdUSCA9IFtcclxuICAgIFtbNDEsIDI1LCAxNywgMTBdLCBbMzQsIDIwLCAxNCwgOF0sIFsyNywgMTYsIDExLCA3XSwgWzE3LCAxMCwgNywgNF1dLFxyXG4gICAgW1s3NywgNDcsIDMyLCAyMF0sIFs2MywgMzgsIDI2LCAxNl0sIFs0OCwgMjksIDIwLCAxMl0sIFszNCwgMjAsIDE0LCA4XV0sXHJcbiAgICBbWzEyNywgNzcsIDUzLCAzMl0sIFsxMDEsIDYxLCA0MiwgMjZdLCBbNzcsIDQ3LCAzMiwgMjBdLCBbNTgsIDM1LCAyNCwgMTVdXSxcclxuICAgIFtbMTg3LCAxMTQsIDc4LCA0OF0sIFsxNDksIDkwLCA2MiwgMzhdLCBbMTExLCA2NywgNDYsIDI4XSwgWzgyLCA1MCwgMzQsIDIxXV0sXHJcbiAgICBbWzI1NSwgMTU0LCAxMDYsIDY1XSwgWzIwMiwgMTIyLCA4NCwgNTJdLCBbMTQ0LCA4NywgNjAsIDM3XSwgWzEwNiwgNjQsIDQ0LCAyN11dLFxyXG4gICAgW1szMjIsIDE5NSwgMTM0LCA4Ml0sIFsyNTUsIDE1NCwgMTA2LCA2NV0sIFsxNzgsIDEwOCwgNzQsIDQ1XSwgWzEzOSwgODQsIDU4LCAzNl1dLFxyXG4gICAgW1szNzAsIDIyNCwgMTU0LCA5NV0sIFsyOTMsIDE3OCwgMTIyLCA3NV0sIFsyMDcsIDEyNSwgODYsIDUzXSwgWzE1NCwgOTMsIDY0LCAzOV1dLFxyXG4gICAgW1s0NjEsIDI3OSwgMTkyLCAxMThdLCBbMzY1LCAyMjEsIDE1MiwgOTNdLCBbMjU5LCAxNTcsIDEwOCwgNjZdLCBbMjAyLCAxMjIsIDg0LCA1Ml1dLFxyXG4gICAgW1s1NTIsIDMzNSwgMjMwLCAxNDFdLCBbNDMyLCAyNjIsIDE4MCwgMTExXSwgWzMxMiwgMTg5LCAxMzAsIDgwXSwgWzIzNSwgMTQzLCA5OCwgNjBdXSxcclxuICAgIFtbNjUyLCAzOTUsIDI3MSwgMTY3XSwgWzUxMywgMzExLCAyMTMsIDEzMV0sIFszNjQsIDIyMSwgMTUxLCA5M10sIFsyODgsIDE3NCwgMTE5LCA3NF1dXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpXHJcbiAgICB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApXHJcbiAgICB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTVfTUFTSyA9ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKVxyXG4gICAgfCAoMSA8PCA0KSB8ICgxIDw8IDEpO1xyXG5leHBvcnRzLlFSSGVscGVyID0gUVJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSklaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTl4Y2tobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiVVZCUVdkRk8wRkJRMmhGTEhWRVFVRnZSRHRCUVVOd1JDeHhSRUZCYTBRN1FVRkRiRVFzTmtOQlFUQkRPMEZCUXpGRExEWkRRVUV3UXp0QlFVVXhRenM3TzBkQlIwYzdRVUZEU0R0SlFYVkZTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRlZCUVd0Q08xRkJReTlETEU5QlFVOHNVVUZCVVN4RFFVRkRMSE5DUVVGelFpeERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelJDeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZyUWl4RlFVRkZMRWxCUVdkQ0xFVkJRVVVzYVVKQlFXOURPMUZCUTJwSExFMUJRVTBzUTBGQlF5eEhRVUZITEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTFZc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJWWXNVVUZCVVN4cFFrRkJhVUlzUlVGQlJUdFpRVU4yUWl4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNaRExFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRGRrTXNTMEZCU3l4eFEwRkJhVUlzUTBGQlF5eERRVUZETzJkQ1FVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlFVTXNUVUZCVFR0WlFVTjJReXhMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRM1pETzJkQ1FVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBOQlFXdERMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTTVSVHRSUVVWRUxGRkJRVkVzU1VGQlNTeEZRVUZGTzFsQlExWXNTMEZCU3l4MVFrRkJWU3hEUVVGRExFMUJRVTA3WjBKQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eE5RVUZOTzFsQlEzSkRMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eFpRVUZaTzJkQ1FVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlFVTXNUVUZCVFR0WlFVTXpReXhMUVVGTExIVkNRVUZWTEVOQlFVTXNTMEZCU3p0blFrRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRTFCUVUwN1dVRkRjRU03WjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh4UWtGQmNVSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOd1JEdFJRVVZFTEU5QlFVOHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eHJRa0ZCTUVJN1VVRkRPVVFzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4MVFrRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVTFRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRla01zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3gxUWtGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5FTzFGQlJVUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRZaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCYlVJN1VVRkRNME1zVVVGQlVTeFhRVUZYTEVWQlFVVTdXVUZEYWtJc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM1pFTEV0QlFVc3NlVUpCUVZjc1EwRkJReXhWUVVGVk8yZENRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4TFFVRkxMSGxDUVVGWExFTkJRVU1zVlVGQlZUdG5Ra0ZEZGtJc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRka1FzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTNaRkxFdEJRVXNzZVVKQlFWY3NRMEZCUXl4VlFVRlZPMmRDUVVOMlFpeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGNrVXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRek5GTEV0QlFVc3NlVUpCUVZjc1EwRkJReXhWUVVGVk8yZENRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVVelJUdG5Ra0ZEU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1JFTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVms3VVVGRGNrTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU51UWl4UFFVRlBMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNSRkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRNVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6VkRPMUZCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJXVHRSUVVOMlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMjVDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZEVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXhReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZEUkN4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJXVHRSUVVOdVF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRja0lzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJRc1QwRkJUeXhUUVVGVExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzQkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRMUlzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTndRanRSUVVORUxFOUJRVThzUzBGQlN5eERRVUZETzBsQlEycENMRU5CUVVNN08wRkJhRTFFTEdWQlFXVTdRVUZEVXl3clFrRkJjMElzUjBGQlpUdEpRVU42UkN4RlFVRkZPMGxCUTBZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTJZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMllzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyNUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOdVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEY0VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTndRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGNFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNCQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZUVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU42UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM3BDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRla0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzcENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE9VSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE9VSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE9VSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE9VSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE9VSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03UTBGRGFrTXNRMEZCUXp0QlFVVkdMR1ZCUVdVN1FVRkRVeXh0UWtGQlZTeEhRVUZwUWp0SlFVTXZReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEY0VVc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzWkZMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE5VVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJReTlGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1lzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNCR0xFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRMEZEZWtZc1EwRkJRenRCUVVWR0xHVkJRV1U3UVVGRFV5eFpRVUZITEVkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzAxQlF5OUVMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJXaEVMR1ZCUVdVN1FVRkRVeXhaUVVGSExFZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wMUJRMnBGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUlRORUxHVkJRV1U3UVVGRFV5eHBRa0ZCVVN4SFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TlFVTjBSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRWEpGT1VJc05FSkJhMDFESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZXJyb3JDb3JyZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZXByZXNlbnQgYSBSUyBCbG9jay5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFJTQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zc3RhbmNlIG9mIFJTQmxvY2suXHJcbiAgICAgKiBAcGFyYW0gdG90YWxDb3VudCBUaGUgdG90YWwgY291bnQgZm9yIHRoZSBibG9jay5cclxuICAgICAqIEBwYXJhbSBkYXRhQ291bnQgVGhlIGRhdGEgY291bnQgZm9yIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodG90YWxDb3VudCwgZGF0YUNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5fZGF0YUNvdW50ID0gZGF0YUNvdW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgUlMgQmxvY2tzIGZvciB0aGUgdHlwZSBudW1iZXIgYW5kIGVycm9yIGNvcnJlY3QgbGV2ZWwuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgVGhlIGVycm9yIGNvcnJlY3QgbGV2ZWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgUlMgQmxvY2tzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBjb25zdCByc0Jsb2NrID0gUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUNvdW50ID0gcnNCbG9ja1tpICogMyArIDJdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChuZXcgUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDBdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMV07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5ROlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAyXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDNdO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZXJyb3IgY29ycmVjdCBsZXZlbCAke2Vycm9yQ29ycmVjdExldmVsfWApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEgY291bnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBjb3VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YUNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdG90YWwgY291bnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdG90YWwgY291bnQuXHJcbiAgICAgKi9cclxuICAgIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ291bnQ7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblJTQmxvY2suUlNfQkxPQ0tfVEFCTEUgPSBbXHJcbiAgICAvLyBMXHJcbiAgICAvLyBNXHJcbiAgICAvLyBRXHJcbiAgICAvLyBIXHJcbiAgICAvLyAxXHJcbiAgICBbMSwgMjYsIDE5XSxcclxuICAgIFsxLCAyNiwgMTZdLFxyXG4gICAgWzEsIDI2LCAxM10sXHJcbiAgICBbMSwgMjYsIDldLFxyXG4gICAgLy8gMlxyXG4gICAgWzEsIDQ0LCAzNF0sXHJcbiAgICBbMSwgNDQsIDI4XSxcclxuICAgIFsxLCA0NCwgMjJdLFxyXG4gICAgWzEsIDQ0LCAxNl0sXHJcbiAgICAvLyAzXHJcbiAgICBbMSwgNzAsIDU1XSxcclxuICAgIFsxLCA3MCwgNDRdLFxyXG4gICAgWzIsIDM1LCAxN10sXHJcbiAgICBbMiwgMzUsIDEzXSxcclxuICAgIC8vIDRcclxuICAgIFsxLCAxMDAsIDgwXSxcclxuICAgIFsyLCA1MCwgMzJdLFxyXG4gICAgWzIsIDUwLCAyNF0sXHJcbiAgICBbNCwgMjUsIDldLFxyXG4gICAgLy8gNVxyXG4gICAgWzEsIDEzNCwgMTA4XSxcclxuICAgIFsyLCA2NywgNDNdLFxyXG4gICAgWzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcclxuICAgIFsyLCAzMywgMTEsIDIsIDM0LCAxMl0sXHJcbiAgICAvLyA2XHJcbiAgICBbMiwgODYsIDY4XSxcclxuICAgIFs0LCA0MywgMjddLFxyXG4gICAgWzQsIDQzLCAxOV0sXHJcbiAgICBbNCwgNDMsIDE1XSxcclxuICAgIC8vIDdcclxuICAgIFsyLCA5OCwgNzhdLFxyXG4gICAgWzQsIDQ5LCAzMV0sXHJcbiAgICBbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxyXG4gICAgWzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcclxuICAgIC8vIDhcclxuICAgIFsyLCAxMjEsIDk3XSxcclxuICAgIFsyLCA2MCwgMzgsIDIsIDYxLCAzOV0sXHJcbiAgICBbNCwgNDAsIDE4LCAyLCA0MSwgMTldLFxyXG4gICAgWzQsIDQwLCAxNCwgMiwgNDEsIDE1XSxcclxuICAgIC8vIDlcclxuICAgIFsyLCAxNDYsIDExNl0sXHJcbiAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgWzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcclxuICAgIFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXHJcbiAgICAvLyAxMFxyXG4gICAgWzIsIDg2LCA2OCwgMiwgODcsIDY5XSxcclxuICAgIFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXHJcbiAgICBbNiwgNDMsIDE5LCAyLCA0NCwgMjBdLFxyXG4gICAgWzYsIDQzLCAxNSwgMiwgNDQsIDE2XSxcclxuICAgIC8vIDExXHJcbiAgICBbNCwgMTAxLCA4MV0sXHJcbiAgICBbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG4gICAgWzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcclxuICAgIFszLCAzNiwgMTIsIDgsIDM3LCAxM10sXHJcbiAgICAvLyAxMlxyXG4gICAgWzIsIDExNiwgOTIsIDIsIDExNywgOTNdLFxyXG4gICAgWzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuICAgIFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXHJcbiAgICBbNywgNDIsIDE0LCA0LCA0MywgMTVdLFxyXG4gICAgLy8gMTNcclxuICAgIFs0LCAxMzMsIDEwN10sXHJcbiAgICBbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxyXG4gICAgWzgsIDQ0LCAyMCwgNCwgNDUsIDIxXSxcclxuICAgIFsxMiwgMzMsIDExLCA0LCAzNCwgMTJdLFxyXG4gICAgLy8gMTRcclxuICAgIFszLCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG4gICAgWzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuICAgIFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxyXG4gICAgWzExLCAzNiwgMTIsIDUsIDM3LCAxM10sXHJcbiAgICAvLyAxNVxyXG4gICAgWzUsIDEwOSwgODcsIDEsIDExMCwgODhdLFxyXG4gICAgWzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuICAgIFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcbiAgICBbMTEsIDM2LCAxMiwgNywgMzcsIDEzXSxcclxuICAgIC8vIDE2XHJcbiAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcbiAgICBbNywgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgWzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuICAgIC8vIDE3XHJcbiAgICBbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgIFsxMCwgNzQsIDQ2LCAxLCA3NSwgNDddLFxyXG4gICAgWzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXHJcbiAgICBbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuICAgIC8vIDE4XHJcbiAgICBbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcclxuICAgIFs5LCA2OSwgNDMsIDQsIDcwLCA0NF0sXHJcbiAgICBbMTcsIDUwLCAyMiwgMSwgNTEsIDIzXSxcclxuICAgIFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxyXG4gICAgLy8gMTlcclxuICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG4gICAgWzMsIDcwLCA0NCwgMTEsIDcxLCA0NV0sXHJcbiAgICBbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcclxuICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG4gICAgLy8gMjBcclxuICAgIFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG4gICAgWzMsIDY3LCA0MSwgMTMsIDY4LCA0Ml0sXHJcbiAgICBbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcclxuICAgIFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuICAgIC8vIDIxXHJcbiAgICBbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcclxuICAgIFsxNywgNjgsIDQyXSxcclxuICAgIFsxNywgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG4gICAgWzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXHJcbiAgICAvLyAyMlxyXG4gICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcbiAgICBbMTcsIDc0LCA0Nl0sXHJcbiAgICBbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszNCwgMzcsIDEzXSxcclxuICAgIC8vIDIzXHJcbiAgICBbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuICAgIFs0LCA3NSwgNDcsIDE0LCA3NiwgNDhdLFxyXG4gICAgWzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG4gICAgLy8gMjRcclxuICAgIFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgWzYsIDczLCA0NSwgMTQsIDc0LCA0Nl0sXHJcbiAgICBbMTEsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXHJcbiAgICBbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcclxuICAgIC8vIDI1XHJcbiAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA3NSwgNDcsIDEzLCA3NiwgNDhdLFxyXG4gICAgWzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcbiAgICAvLyAyNlxyXG4gICAgWzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG4gICAgWzE5LCA3NCwgNDYsIDQsIDc1LCA0N10sXHJcbiAgICBbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuICAgIFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG4gICAgLy8gMjdcclxuICAgIFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG4gICAgWzIyLCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcbiAgICBbOCwgNTMsIDIzLCAyNiwgNTQsIDI0XSxcclxuICAgIFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuICAgIC8vIDI4XHJcbiAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcbiAgICBbMywgNzMsIDQ1LCAyMywgNzQsIDQ2XSxcclxuICAgIFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxyXG4gICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG4gICAgLy8gMjlcclxuICAgIFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG4gICAgWzIxLCA3MywgNDUsIDcsIDc0LCA0Nl0sXHJcbiAgICBbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcclxuICAgIFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuICAgIC8vIDMwXHJcbiAgICBbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXHJcbiAgICBbMTksIDc1LCA0NywgMTAsIDc2LCA0OF0sXHJcbiAgICBbMTUsIDU0LCAyNCwgMjUsIDU1LCAyNV0sXHJcbiAgICBbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMVxyXG4gICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG4gICAgWzIsIDc0LCA0NiwgMjksIDc1LCA0N10sXHJcbiAgICBbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuICAgIC8vIDMyXHJcbiAgICBbMTcsIDE0NSwgMTE1XSxcclxuICAgIFsxMCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuICAgIFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcclxuICAgIFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuICAgIC8vIDMzXHJcbiAgICBbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICBbMTQsIDc0LCA0NiwgMjEsIDc1LCA0N10sXHJcbiAgICBbMjksIDU0LCAyNCwgMTksIDU1LCAyNV0sXHJcbiAgICBbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzNFxyXG4gICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG4gICAgWzE0LCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG4gICAgWzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcbiAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuICAgIC8vIDM1XHJcbiAgICBbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcbiAgICBbMTIsIDc1LCA0NywgMjYsIDc2LCA0OF0sXHJcbiAgICBbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcbiAgICAvLyAzNlxyXG4gICAgWzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxyXG4gICAgWzYsIDc1LCA0NywgMzQsIDc2LCA0OF0sXHJcbiAgICBbNDYsIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcbiAgICBbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcclxuICAgIC8vIDM3XHJcbiAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjksIDc0LCA0NiwgMTQsIDc1LCA0N10sXHJcbiAgICBbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcbiAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzOFxyXG4gICAgWzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG4gICAgWzEzLCA3NCwgNDYsIDMyLCA3NSwgNDddLFxyXG4gICAgWzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG4gICAgLy8gMzlcclxuICAgIFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuICAgIFs0MCwgNzUsIDQ3LCA3LCA3NiwgNDhdLFxyXG4gICAgWzQzLCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxyXG4gICAgWzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxyXG4gICAgLy8gNDBcclxuICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuICAgIFsxOCwgNzUsIDQ3LCAzMSwgNzYsIDQ4XSxcclxuICAgIFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcclxuICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG5dO1xyXG5leHBvcnRzLlJTQmxvY2sgPSBSU0Jsb2NrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbk5DYkc5amF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDNKelFteHZZMnN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzFGUVVGblJUdEJRVVZvUlRzN08wZEJSMGM3UVVGRFNEdEpRVFJRU1RzN096dFBRVWxITzBsQlEwZ3NXVUZCV1N4VlFVRnJRaXhGUVVGRkxGTkJRV2xDTzFGQlF6ZERMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETzBsQlEyaERMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTXNWVUZCYTBJc1JVRkJSU3hwUWtGQmIwTTdVVUZET1VVc1RVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4VlFVRlZMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWc1F5eE5RVUZOTEVsQlFVa3NSMEZCWXl4RlFVRkZMRU5CUVVNN1VVRkZNMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVTNRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TlFVRk5MRlZCUVZVc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVnlReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVPMU5CUTBvN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNWVUZCYTBJc1JVRkJSU3hwUWtGQmIwTTdVVUZEYmtZc1VVRkJVU3hwUWtGQmFVSXNSVUZCUlR0WlFVTjJRaXhMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEU5QlFVOHNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VUXNTMEZCU3l4eFEwRkJhVUlzUTBGQlF5eERRVUZETzJkQ1FVTndRaXhQUVVGUExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGRGNFSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUTNCQ0xFOUJRVThzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzVVVGQlVUdFRRVU5ZTzFGQlJVUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXdyUWtGQkswSXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzaEZMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4WlFVRlpPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzBsQlF6TkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4aFFVRmhPMUZCUTJoQ0xFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTTFRaXhEUVVGRE96dEJRVGxVUkN4bFFVRmxPMEZCUTFNc2MwSkJRV01zUjBGQlpUdEpRVVZxUkN4SlFVRkpPMGxCUTBvc1NVRkJTVHRKUVVOS0xFbEJRVWs3U1VGRFNpeEpRVUZKTzBsQlEwb3NTVUZCU1R0SlFVTktMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRlZpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWWUxFbEJRVWs3U1VGRFNpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlZnc1NVRkJTVHRKUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGVml4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTmlMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzU1VGQlNUdEpRVU5LTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZXQ3hKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTVUZCU1R0SlFVTktMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFJDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYUkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEWWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRldpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNelFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU16UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU5rTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wTkJRek5DTEVOQlFVTTdRVUYyVUU0c01FSkJaMVZESW4wPSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9xclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc01FSkJRWEZDTzBGQlJYSkNMR2RFUVVFeVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBFcnJvciBjb3JyZWN0aW9uIGxldmVsIHRvIHVzZSBmb3IgdGhlIFFSIENvZGUuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgRXJyb3JDb3JyZWN0TGV2ZWw7XHJcbihmdW5jdGlvbiAoRXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgIC8qKlxyXG4gICAgICogNyVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJMXCJdID0gMV0gPSBcIkxcIjtcclxuICAgIC8qKlxyXG4gICAgICogMTUlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiTVwiXSA9IDBdID0gXCJNXCI7XHJcbiAgICAvKipcclxuICAgICAqIDI1JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIlFcIl0gPSAzXSA9IFwiUVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAzMCVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJIXCJdID0gMl0gPSBcIkhcIjtcclxufSkoRXJyb3JDb3JyZWN0TGV2ZWwgPSBleHBvcnRzLkVycm9yQ29ycmVjdExldmVsIHx8IChleHBvcnRzLkVycm9yQ29ycmVjdExldmVsID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhKeWIzSkRiM0p5WldOMFRHVjJaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiVzlrWld4ekwyVnljbTl5UTI5eWNtVmpkRXhsZG1Wc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeEpRVUZaTEdsQ1FXOUNXRHRCUVhCQ1JDeFhRVUZaTEdsQ1FVRnBRanRKUVVONlFqczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3UVVGRFZDeERRVUZETEVWQmNFSlhMR2xDUVVGcFFpeEhRVUZxUWl4NVFrRkJhVUlzUzBGQmFrSXNlVUpCUVdsQ0xGRkJiMEkxUWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE1hc2sgcGF0dGVybnMgZm9yIFFSIGNvZGVzLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIE1hc2tQYXR0ZXJuO1xyXG4oZnVuY3Rpb24gKE1hc2tQYXR0ZXJuKSB7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMDBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDAwXCJdID0gMF0gPSBcIlBBVFRFUk4wMDBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAwMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMDFcIl0gPSAxXSA9IFwiUEFUVEVSTjAwMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDEwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAxMFwiXSA9IDJdID0gXCJQQVRURVJOMDEwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMTFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDExXCJdID0gM10gPSBcIlBBVFRFUk4wMTFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDEwMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMDBcIl0gPSA0XSA9IFwiUEFUVEVSTjEwMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTAxXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjEwMVwiXSA9IDVdID0gXCJQQVRURVJOMTAxXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMTBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTEwXCJdID0gNl0gPSBcIlBBVFRFUk4xMTBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDExMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMTFcIl0gPSA3XSA9IFwiUEFUVEVSTjExMVwiO1xyXG59KShNYXNrUGF0dGVybiA9IGV4cG9ydHMuTWFza1BhdHRlcm4gfHwgKGV4cG9ydHMuTWFza1BhdHRlcm4gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0Z6YTFCaGRIUmxjbTR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiVzlrWld4ekwyMWhjMnRRWVhSMFpYSnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hKUVVGWkxGZEJkME5ZTzBGQmVFTkVMRmRCUVZrc1YwRkJWenRKUVVOdVFqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1NVRkZiRUk3TzA5QlJVYzdTVUZEU0N4NVJFRkJhMElzUTBGQlFUdEpRVVZzUWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3U1VGRmJFSTdPMDlCUlVjN1NVRkRTQ3g1UkVGQmEwSXNRMEZCUVR0SlFVVnNRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdRVUZEZEVJc1EwRkJReXhGUVhoRFZ5eFhRVUZYTEVkQlFWZ3NiVUpCUVZjc1MwRkJXQ3h0UWtGQlZ5eFJRWGREZEVJaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzdG9yaW5nIFFSIERhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSRGF0YUJhc2UuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgbW9kZSBmb3IgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobW9kZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEgbW9kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIGdldE1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBpbiBiaXRzIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgbGVuZ3RoIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggaW4gYml0cy5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoSW5CaXRzKHR5cGVOdW1iZXIpIHtcclxuICAgICAgICBpZiAodHlwZU51bWJlciA+PSAxICYmIHR5cGVOdW1iZXIgPCAxMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gODtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVOdW1iZXIgPCAyNykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDExO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA8IDQxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gMTM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHR5cGVOdW1iZXIgJHt0eXBlTnVtYmVyfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSRGF0YUJhc2UgPSBRUkRhdGFCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpFWVhSaFFtRnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXRiMlJsYkhNdmNYSkVZWFJoUW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc05rTkJRVEJETzBGQlJURkRPenM3UjBGSFJ6dEJRVU5JTzBsQlRVazdPenM3VDBGSlJ6dEpRVU5JTEZsQlFWa3NTVUZCWjBJc1JVRkJSU3hKUVVGWk8xRkJRM1JETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZqUkRzN096dFBRVWxITzBsQlEwa3NaVUZCWlN4RFFVRkRMRlZCUVd0Q08xRkJRM0pETEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEzQkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEYUVJc1MwRkJTeXgxUWtGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU5zUXl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM1pETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRhRU03YjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGNrUTdVMEZEU2p0aFFVRk5MRWxCUVVrc1ZVRkJWU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU40UWl4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlEyaENMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGJFTXNTMEZCU3l4MVFrRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVONFF5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUTJwRE8yOUNRVU5KTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM0pFTzFOQlEwbzdZVUZCVFN4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGVFSXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU5vUWl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRMnhETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRlRU1zUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTnFRenR2UWtGRFNTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOeVJEdFRRVU5LTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1pFTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCT1VWRUxHZERRVGhGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFRoZSBtb2RlIGZvciB0aGUgcXIgZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBRUkRhdGFNb2RlO1xyXG4oZnVuY3Rpb24gKFFSRGF0YU1vZGUpIHtcclxuICAgIC8qKlxyXG4gICAgICogbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcIm51bWJlclwiXSA9IDFdID0gXCJudW1iZXJcIjtcclxuICAgIC8qKlxyXG4gICAgICogYWxwaGFiZXQgYW5kIG51bWJlclxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJhbHBoYU51bWVyaWNcIl0gPSAyXSA9IFwiYWxwaGFOdW1lcmljXCI7XHJcbiAgICAvKipcclxuICAgICAqIDhiaXQgYnl0ZVxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJieXRlOFwiXSA9IDRdID0gXCJieXRlOFwiO1xyXG59KShRUkRhdGFNb2RlID0gZXhwb3J0cy5RUkRhdGFNb2RlIHx8IChleHBvcnRzLlFSRGF0YU1vZGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpFWVhSaFRXOWtaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXRiMlJsYkhNdmNYSkVZWFJoVFc5a1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN096dEhRVWRITzBGQlEwZ3NTVUZCV1N4VlFXVllPMEZCWmtRc1YwRkJXU3hWUVVGVk8wbEJRMnhDT3p0UFFVVkhPMGxCUTBnc0swTkJRV1VzUTBGQlFUdEpRVVZtT3p0UFFVVkhPMGxCUTBnc01rUkJRWEZDTEVOQlFVRTdTVUZGY2tJN08wOUJSVWM3U1VGRFNDdzJRMEZCWXl4RFFVRkJPMEZCUTJ4Q0xFTkJRVU1zUlVGbVZ5eFZRVUZWTEVkQlFWWXNhMEpCUVZVc1MwRkJWaXhyUWtGQlZTeFJRV1Z5UWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3QgcXJBbHBoYU51bWVyaWNfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJBbHBoYU51bWVyaWNcIik7XHJcbmNvbnN0IHFyQnl0ZThfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJCeXRlOFwiKTtcclxuY29uc3QgcXJOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJOdW1iZXJcIik7XHJcbmNvbnN0IGJpdEJ1ZmZlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9iaXRCdWZmZXJcIik7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvbWF0aEhlbHBlclwiKTtcclxuY29uc3QgcG9seW5vbWlhbF8xID0gcmVxdWlyZShcIi4vaGVscGVycy9wb2x5bm9taWFsXCIpO1xyXG5jb25zdCBxckhlbHBlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9xckhlbHBlclwiKTtcclxuY29uc3QgcnNCbG9ja18xID0gcmVxdWlyZShcIi4vaGVscGVycy9yc0Jsb2NrXCIpO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gZ2VuZXJhdGVzIFFSIGNvZGVzIGZyb20gZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgMCB0byA0MCwgMCBtZWFucyBhdXRvZGV0ZWN0XHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgJ0wnLCdNJywnUScsJ0gnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHR5cGVOdW1iZXIgPSA2LCBlcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih0eXBlTnVtYmVyKSB8fCB0eXBlTnVtYmVyIDwgMCB8fCB0eXBlTnVtYmVyID4gNDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgdHlwZU51bWJlciBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDQwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuICAgICAgICB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGV4dCBkYXRhIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZFRleHQocXJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhLnB1c2gobmV3IHFyQnl0ZThfMS5RUkJ5dGU4KHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbnVtYmVyIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZE51bWJlcihxckRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xckRhdGEucHVzaChuZXcgcXJOdW1iZXJfMS5RUk51bWJlcihxckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFscGhhIG51bWVyaWMgdG8gdGhlIFFSIENvZGUuXHJcbiAgICAgKiBAcGFyYW0gcXJEYXRhIFRoZSBkYXRhIHRvIGFkZC5cclxuICAgICAqL1xyXG4gICAgYWRkQWxwaGFOdW1lcmljKHFyRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxckFscGhhTnVtZXJpY18xLlFSQWxwaGFOdW1lcmljKHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgZGlzcGxheSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgdGhlIGNlbGwgdG8gZ2VuZXJhdGUuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luIFRoZSBzaXplIG9mIHRoZSBtYXJnaW5zIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQm9vbGVhbiBidWZmZXIgb2YgcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYXV0b0RldGVjdFR5cGVOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLm1ha2VJbXBsKGZhbHNlLCB0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKTtcclxuICAgICAgICBjb25zdCBwaXhlbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX21vZHVsZUNvdW50OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9tb2R1bGVDb3VudDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbeF0gPSBwaXhlbHNbeF0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbeF1beV0gPSB0aGlzLmlzRGFyayh5LCB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpc0Rhcmsocm93LCBjb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZXNbcm93XVtjb2xdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0QmVzdE1hc2tQYXR0ZXJuKCkge1xyXG4gICAgICAgIGxldCBtaW5Mb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3N0UG9pbnQgPSB0aGlzLmdldExvc3RQb2ludCgpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtYWtlSW1wbCh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gdGhpcy5fdHlwZU51bWJlciAqIDQgKyAxNztcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2R1bGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXMucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbW9kdWxlQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpXS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5fbW9kdWxlQ291bnQgLSA3LCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgdGhpcy5fbW9kdWxlQ291bnQgLSA3KTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcclxuICAgICAgICB0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlTnVtYmVyID49IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFR5cGVOdW1iZXIodGVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgICAgICB0aGlzLm1hcERhdGEoZGF0YSwgbWFza1BhdHRlcm4pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtYXBEYXRhKGRhdGEsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgbGV0IGluYyA9IC0xO1xyXG4gICAgICAgIGxldCByb3cgPSB0aGlzLl9tb2R1bGVDb3VudCAtIDE7XHJcbiAgICAgICAgbGV0IGJpdEluZGV4ID0gNztcclxuICAgICAgICBsZXQgYnl0ZUluZGV4ID0gMDtcclxuICAgICAgICBjb25zdCBtYXNrRnVuYyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0TWFza01ldGhvZChtYXNrUGF0dGVybik7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5fbW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xyXG4gICAgICAgICAgICBpZiAoY29sID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBjb2wgLT0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDI7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sIC0gY10gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhcmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFzayA9IG1hc2tGdW5jKHJvdywgY29sIC0gYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gIWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3cgKz0gaW5jO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93IC09IGluYztcclxuICAgICAgICAgICAgICAgICAgICBpbmMgPSAtaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRQYXR0ZXJuUG9zaXRpb24odGhpcy5fdHlwZU51bWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHBvc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBvc1tqXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IC0yOyByIDw9IDI7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMjsgYyA8PSAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPT09IC0yIHx8IHIgPT09IDIgfHwgYyA9PT0gLTIgfHwgYyA9PT0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHIgPT09IDAgJiYgYyA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKHJvdywgY29sKSB7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IC0xOyByIDw9IDc7IHIrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gLTE7IGMgPD0gNzsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSByb3cgKyByXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgY29sICsgYyA8PSAtMSB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT09IDAgfHwgYyA9PT0gNikpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT09IDAgfHwgciA9PT0gNikpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUaW1pbmdQYXR0ZXJuKCkge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSA4OyByIDwgdGhpcy5fbW9kdWxlQ291bnQgLSA4OyByKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcl1bNl0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcl1bNl0gPSByICUgMiA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDg7IGMgPCB0aGlzLl9tb2R1bGVDb3VudCAtIDg7IGMrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1s2XVtjXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s2XVtjXSA9IGMgJSAyID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUeXBlTnVtYmVyKHRlc3QpIHtcclxuICAgICAgICBjb25zdCBiaXRzID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMuX3R5cGVOdW1iZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW35+KGkgLyAzKV1baSAlIDMgKyB0aGlzLl9tb2R1bGVDb3VudCAtIDggLSAzXSA9XHJcbiAgICAgICAgICAgICAgICAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaSAlIDMgKyB0aGlzLl9tb2R1bGVDb3VudCAtIDggLSAzXVt+fihpIC8gMyldID1cclxuICAgICAgICAgICAgICAgICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAodGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcclxuICAgICAgICBjb25zdCBiaXRzID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtcclxuICAgICAgICAvLyB2ZXJ0aWNhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2QgPSAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2ldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbdGhpcy5fbW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhvcml6b250YWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgICAgIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVt0aGlzLl9tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdWzE1IC0gaSAtIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeGVkXHJcbiAgICAgICAgdGhpcy5fbW9kdWxlc1t0aGlzLl9tb2R1bGVDb3VudCAtIDhdWzhdID0gIXRlc3Q7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldExvc3RQb2ludCgpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGVDb3VudCA9IHRoaXMuX21vZHVsZUNvdW50O1xyXG4gICAgICAgIGxldCBsb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIC8vIExFVkVMMVxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzYW1lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGFyayA9IHRoaXMuaXNEYXJrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSAxOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDE7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgYyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhcmsgPT09IHRoaXMuaXNEYXJrKHJvdyArIHIsIGNvbCArIGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQ291bnQgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUwyXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSAxOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDE7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93ICsgMSwgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwIHx8IGNvdW50ID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUwzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgMilcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA0KVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3csIGNvbCArIDUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgMiwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDMsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyA0LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdyArIDUsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyA2LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMNFxyXG4gICAgICAgIGxldCBkYXJrQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xyXG4gICAgICAgIGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG4gICAgICAgIHJldHVybiBsb3N0UG9pbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcnNCbG9ja3MgPSByc0Jsb2NrXzEuUlNCbG9jay5nZXRSU0Jsb2Nrcyh0aGlzLl90eXBlTnVtYmVyLCB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IGJpdEJ1ZmZlcl8xLkJpdEJ1ZmZlcigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9xckRhdGFbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIGRhdGEuZ2V0TGVuZ3RoSW5CaXRzKHRoaXMuX3R5cGVOdW1iZXIpKTtcclxuICAgICAgICAgICAgZGF0YS53cml0ZShidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYWxjIG1heCBkYXRhIGNvdW50XHJcbiAgICAgICAgbGV0IHRvdGFsRGF0YUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmdldERhdGFDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgUVIgY29kZSB0byBzdG9yZSB0aGUgZGF0YSwgJHtidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCl9ID4gJHt0b3RhbERhdGFDb3VudCAqIDh9LCB0cnkgaW5jcmVhc2luZyB0aGUgdHlwZU51bWJlciBmcm9tICR7dGhpcy5fdHlwZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kXHJcbiAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBhZGRpbmdcclxuICAgICAgICB3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPT0gMCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0Qml0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyLnB1dChRUi5QQUQwLCA4KTtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoUVIuUEFEMSwgOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBsZXQgbWF4RGNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVjQ291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRjZGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGVjZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgZGNkYXRhLnB1c2goW10pO1xyXG4gICAgICAgICAgICBlY2RhdGEucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU51bUFycmF5KGxlbikge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGEucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmdldERhdGFDb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBlY0NvdW50ID0gcnNCbG9ja3Nbcl0uZ2V0VG90YWxDb3VudCgpIC0gZGNDb3VudDtcclxuICAgICAgICAgICAgbWF4RGNDb3VudCA9IE1hdGgubWF4KG1heERjQ291bnQsIGRjQ291bnQpO1xyXG4gICAgICAgICAgICBtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XHJcbiAgICAgICAgICAgIGRjZGF0YVtyXSA9IGNyZWF0ZU51bUFycmF5KGRjQ291bnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGNkYXRhW3JdW2ldID0gMHhGRiAmIGJ1ZmZlci5nZXRCdWZmZXIoKVtpICsgb2Zmc2V0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gZGNDb3VudDtcclxuICAgICAgICAgICAgY29uc3QgcnNQb2x5ID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCByYXdQb2x5ID0gbmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKGRjZGF0YVtyXSwgcnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZFBvbHkgPSByYXdQb2x5Lm1vZChyc1BvbHkpO1xyXG4gICAgICAgICAgICBlY2RhdGFbcl0gPSBjcmVhdGVOdW1BcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZWNkYXRhW3JdW2ldID0gKG1vZEluZGV4ID49IDApID8gbW9kUG9seS5nZXRBdChtb2RJbmRleCkgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbENvZGVDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS5nZXRUb3RhbENvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVOdW1BcnJheSh0b3RhbENvZGVDb3VudCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGRjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RWNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZWNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGF1dG9EZXRlY3RUeXBlTnVtYmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlTnVtYmVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDw9IDQwOyB0eXBlTnVtYmVyKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJzQmxvY2tzID0gcnNCbG9ja18xLlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IGJpdEJ1ZmZlcl8xLkJpdEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9xckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fcXJEYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgZGF0YS5nZXRMZW5ndGhJbkJpdHModHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA9PT0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIFFSIGNvZGUgdG8gc3RvcmUgdGhlIGRhdGEsICR7YnVmZmVyLmdldExlbmd0aEluQml0cygpfSA+ICR7dG90YWxEYXRhQ291bnQgKiA4fSwgdHlwZU51bWJlciBjYW4gbm90IGJlID4gNDBgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVIuUEFEMCA9IDB4RUM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUi5QQUQxID0gMHgxMTtcclxuZXhwb3J0cy5RUiA9IFFSO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmNYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUdRVUZwUmp0QlFVTnFSaXd3UkVGQmRVUTdRVUZEZGtRc05FTkJRWGxETzBGQlEzcERMRGhEUVVFeVF6dEJRVU16UXl4dFJFRkJaMFE3UVVGRGFFUXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVOc1JDeHBSRUZCT0VNN1FVRkRPVU1zSzBOQlFUUkRPMEZCUXpWRExHdEZRVUVyUkR0QlFVa3ZSRHM3TzBkQlIwYzdRVUZEU0R0SlFYRkNTVHM3T3p0UFFVbEhPMGxCUTBnc1dVRkJXU3hoUVVGeFFpeERRVUZETEVWQlFVVXNiMEpCUVhWRExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRNVVlzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU14UlN4TlFVRk5MRXRCUVVzc1EwRkJReXcwUkVGQk5FUXNRMEZCUXl4RFFVRkRPMU5CUXpkRk8xRkJRMFFzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUXpWRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlc1Q0xIVkNRVUZWTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVThzUTBGQlF5eE5RVUZqTzFGQlEzcENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NhVUpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRMRU5CUVVNc1RVRkJZenRSUVVNelFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzWlVGQlpTeERRVUZETEUxQlFXTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N3clFrRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUlVGQlJTeERRVUZETzFGQlJUVkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGYUVRc1RVRkJUU3hOUVVGTkxFZEJRV1VzUlVGQlJTeERRVUZETzFGQlF6bENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzaERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTjRReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZETlVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRE8xTkJRMG83VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SFFVRlhMRVZCUVVVc1IwRkJWenRSUVVOdVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUTJ4RExFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5zUXp0aFFVRk5PMWxCUTBnc1QwRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHdENRVUZyUWp0UlFVTjBRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRmVFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZGtJc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMWxCUlhSRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1UwRkJVeXhGUVVGRk8yZENRVU55UXl4WlFVRlpMRWRCUVVjc1UwRkJVeXhEUVVGRE8yZENRVU42UWl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRMlk3VTBGRFNqdFJRVVZFTEU5QlFVOHNUMEZCVHl4RFFVRkRPMGxCUTI1Q0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNVVUZCVVN4RFFVRkRMRWxCUVdFc1JVRkJSU3hYUVVGdFFqdFJRVU12UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNNVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOdVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGREwwSTdVMEZEU2p0UlFVVkVMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcEVMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVjZSQ3hKUVVGSkxFTkJRVU1zTUVKQlFUQkNMRVZCUVVVc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVVV4UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVjBReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTNaQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRPVUk3VVVGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRkwwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEY0VNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFBRVUZQTEVOQlFVTXNTVUZCWXl4RlFVRkZMRmRCUVcxQ08xRkJReTlETEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMklzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOc1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4dFFrRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVnlSQ3hMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVWeVJDeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRMWdzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTmFPMWxCUlVRc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEyaENMRTlCUVU4c1NVRkJTU3hGUVVGRk8yZENRVVZVTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJSWGhDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8zZENRVVYwUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU03ZDBKQlJXcENMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdORUpCUTNwQ0xFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03ZVVKQlEzWkVPM2RDUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVVndReXhKUVVGSkxFbEJRVWtzUlVGQlJUczBRa0ZEVGl4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU03ZVVKQlEyaENPM2RDUVVWRUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0M1FrRkRia01zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXp0M1FrRkZaQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlRzMFFrRkRha0lzVTBGQlV5eEZRVUZGTEVOQlFVTTdORUpCUTFvc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dDVRa0ZEYUVJN2NVSkJRMG83YVVKQlEwbzdaMEpCUlVRc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF6dG5Ra0ZGV0N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4SFFVRkhMRVZCUVVVN2IwSkJRM0pETEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNN2IwSkJRMWdzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRPMjlDUVVOWUxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTTdhVUpCUTJoQ08yRkJRMG83VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc01FSkJRVEJDTzFGQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExHMUNRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlRGRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUldwRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVWcVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyNUNMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZia0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0dlFrRkRiRU1zVTBGQlV6dHBRa0ZEV2p0blFrRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUlRGQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0M1FrRkZNVUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03SzBKQlEzWkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03ZVVKQlF6RkRPelpDUVVGTk96UkNRVU5JTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03ZVVKQlF6TkRPM0ZDUVVOS08ybENRVU5LTzJGQlEwbzdVMEZEU2p0SlFVTk1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzZVVKQlFYbENMRU5CUVVNc1IwRkJWeXhGUVVGRkxFZEJRVmM3VVVGRGRFUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03ZFVKQlF6RkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRmxCUVZrc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTnNSQ3hUUVVGVE8ybENRVU5hTzJkQ1FVVkVMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenQxUWtGRGRrTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0MVFrRkRNVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlF6TkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdhVUpCUXpGRE8zRkNRVUZOTzI5Q1FVTklMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdhVUpCUXpORE8yRkJRMG83VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2EwSkJRV3RDTzFGQlEzUkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTTVRaXhUUVVGVE8yRkJRMW83V1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM0pETzFGQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6VkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3WjBKQlF6bENMRk5CUVZNN1lVRkRXanRaUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRja003U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR1ZCUVdVc1EwRkJReXhKUVVGaE8xRkJRMnBETEUxQlFVMHNTVUZCU1N4SFFVRkhMRzFDUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJYcEVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtRc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZUVNN1VVRkZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaRUxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNoRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4aFFVRmhMRU5CUVVNc1NVRkJZU3hGUVVGRkxGZEJRVzFDTzFGQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZkQlFWY3NRMEZCUXp0UlFVTXhSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVV6UXl4WFFVRlhPMUZCUTFnc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVVY2UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVTNReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTFBc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRE4wSTdhVUpCUVUwc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTmtMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU5xUXp0cFFrRkJUVHRuUWtGRFNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU4wUkR0VFFVTktPMUZCUlVRc1lVRkJZVHRSUVVOaUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZGZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkZOME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRM0pFTzJsQ1FVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEWkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVTXhRenRwUWtGQlRUdG5Ra0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlEzUkRPMU5CUTBvN1VVRkZSQ3hSUVVGUk8xRkJRMUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJRM0JFTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1dVRkJXVHRSUVVOb1FpeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJSWFJETEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWc1FpeFRRVUZUTzFGQlJWUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVWNFF5eExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVWNFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMnhDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVWdVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJSVEZDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzVjBGQlZ5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVN2QwSkJRM1pETEZOQlFWTTdjVUpCUTFvN2IwSkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPM2RDUVVVeFFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxGZEJRVmNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZPelJDUVVOMlF5eFRRVUZUTzNsQ1FVTmFPM2RDUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk96UkNRVU53UWl4VFFVRlRPM2xDUVVOYU8zZENRVVZFTEVsQlFVa3NTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlEzaERMRk5CUVZNc1JVRkJSU3hEUVVGRE8zbENRVU5tTzNGQ1FVTktPMmxDUVVOS08yZENRVVZFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRFppeFRRVUZUTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTndRenRoUVVOS08xTkJRMG83VVVGRlJDeFRRVUZUTzFGQlJWUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRE5VTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlF6VkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMjlDUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVRkZPMmRDUVVOMlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF6dHBRa0ZCUlR0blFrRkRNME1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03YVVKQlFVVTdaMEpCUXpORExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF6dHBRa0ZCUlR0blFrRkRMME1zU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1MwRkJTeXhEUVVGRExFVkJRVVU3YjBKQlF6VkNMRk5CUVZNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEyeENPMkZCUTBvN1UwRkRTanRSUVVWRUxGTkJRVk03VVVGRlZDeExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTNoRExFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVNMVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZEYkVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zVkNRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM1ZDUVVONlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNWQ1FVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zVkNRVU42UWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2RVSkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRPVUlzVTBGQlV5eEpRVUZKTEVWQlFVVXNRMEZCUXp0cFFrRkRia0k3WVVGRFNqdFRRVU5LTzFGQlJVUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFF5eExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRE5VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTJ4Q0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenQxUWtGRGVrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXp0MVFrRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZEZWtJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRE8zVkNRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN2IwSkJRemxDTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRMjVDTzJGQlEwbzdVMEZEU2p0UlFVVkVMRk5CUVZNN1VVRkZWQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYkVJc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU40UXl4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NWMEZCVnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8yZENRVU40UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMjlDUVVOMlFpeFRRVUZUTEVWQlFVVXNRMEZCUXp0cFFrRkRaanRoUVVOS08xTkJRMG83VVVGRlJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFRRVUZUTEVkQlFVY3NWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZETjBVc1UwRkJVeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGZUVJc1QwRkJUeXhUUVVGVExFTkJRVU03U1VGRGNrSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hWUVVGVk8xRkJRMlFzVFVGQlRTeFJRVUZSTEVkQlFXTXNhVUpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0UlFVVXpSaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEhGQ1FVRlRMRVZCUVVVc1EwRkJRenRSUVVVdlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU01UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeHpRa0ZCYzBJN1VVRkRkRUlzU1VGQlNTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNaQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNSRExHTkJRV01zU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03VTBGRGFFUTdVVUZGUkN4SlFVRkpMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzUjBGQlJ5eGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMFJCUVN0RUxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNUVUZCVFN4alFVRmpMRWRCUVVjc1EwRkJReXgzUTBGQmQwTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRE9VdzdVVUZGUkN4TlFVRk5PMUZCUTA0c1NVRkJTU3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMR05CUVdNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNFUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEY0VJN1VVRkZSQ3hWUVVGVk8xRkJRMVlzVDBGQlR5eE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzaENPMUZCUlVRc1ZVRkJWVHRSUVVOV0xFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTm9RaXhQUVVGUExFbEJRVWtzUlVGQlJUdFpRVU5VTEVsQlFVa3NUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hKUVVGSkxHTkJRV01zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJoRUxFMUJRVTA3WVVGRFZEdFpRVU5FTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVjJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNTVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRMmhDTzJsQ1FVRk5PMmRDUVVOSUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UWp0VFFVTktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVNNVF5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmRCUVZjc1EwRkJReXhOUVVGcFFpeEZRVUZGTEZGQlFXMUNPMUZCUTNSRUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm1MRWxCUVVrc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU51UWl4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmJrSXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEUxQlFVMHNUVUZCVFN4SFFVRmxMRVZCUVVVc1EwRkJRenRSUVVVNVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMmhDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJrSTdVVUZGUkN4M1FrRkJkMElzUjBGQlZ6dFpRVU12UWl4TlFVRk5MRU5CUVVNc1IwRkJZU3hGUVVGRkxFTkJRVU03V1VGRGRrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5pTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJSVVFzTkVKQlFUUkNPMUZCUlRWQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlhSRExFMUJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dFpRVU16UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJSWFJFTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTXpReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRk0wTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTndReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGRrTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTNoRU8xbEJRMFFzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXp0WlFVVnNRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUXpORUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NkVUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJXeEZMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia1FzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkROVVFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFVTdVMEZEU2p0UlFVVkVMRWxCUVVrc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4alFVRmpMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMU5CUTJwRU8xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NZMEZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWa0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNSRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6TkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8ybENRVU5ZTzJGQlEwbzdVMEZEU2p0UlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmxDUVVOWU8yRkJRMG83VTBGRFNqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNiMEpCUVc5Q08xRkJRM2hDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGVFSXNTMEZCU3l4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFVkJRVVVzVlVGQlZTeEpRVUZKTEVWQlFVVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGRGNrUXNUVUZCVFN4UlFVRlJMRWRCUVVjc2FVSkJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmRDUVVNeFJTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMSEZDUVVGVExFVkJRVVVzUTBGQlF6dG5Ra0ZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNeFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZET1VJc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNdlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8ybENRVU4wUWp0blFrRkZSQ3hKUVVGSkxHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVOMFF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzJsQ1FVTm9SRHRuUWtGRlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTm9SQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXp0dlFrRkRPVUlzVFVGQlRUdHBRa0ZEVkR0eFFrRkJUU3hKUVVGSkxGVkJRVlVzUzBGQlN5eEZRVUZGTEVWQlFVVTdiMEpCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMFJCUVN0RUxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNUVUZCVFN4alFVRmpMRWRCUVVjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMmxDUVVOc1N6dGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPenRCUVdoclFrUXNaVUZCWlR0QlFVTlRMRTlCUVVrc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRE5VTXNaVUZCWlR0QlFVTlRMRTlCUVVrc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGS2FFUXNaMEpCYTJ0Q1F5SjkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=