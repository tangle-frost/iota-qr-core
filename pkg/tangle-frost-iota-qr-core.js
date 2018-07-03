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
   * @param typeNumber 1 to 40
   * @param errorCorrectLevel 'L','M','Q','H'
   */
  function QR() {
    var typeNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var errorCorrectLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : errorCorrectLevel_1.ErrorCorrectLevel.L;

    _classCallCheck(this, QR);

    if (!numberHelper_1.NumberHelper.isInteger(typeNumber) || typeNumber < 1 || typeNumber > 40) {
      throw Error("The typeNumber parameter should be a number >= 1 and <= 40");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztBQUNBO0FBRUE7Ozs7OztJQUlBLGM7Ozs7O0FBQ0k7Ozs7QUFJQSwwQkFBWSxJQUFaLEVBQXdCO0FBQUE7O0FBQUEsdUZBQ2Qsd0JB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LEVBMEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0ExQnlELEVBMkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0EzQnlELEVBNEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0E1QnlELEVBNkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E3QnlELEVBOEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E5QnlELEVBK0J6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0EvQnlELEVBZ0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FoQ3lELEVBaUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FqQ3lELEVBa0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FsQ3lELEVBbUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FuQ3lELEVBb0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FwQ3lELEVBcUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZ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TyxHQUFQLEVBQVUsR0FBVixDQUFkO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsV0FBSyxJQUFJLE1BQUksQ0FBYixFQUFnQixNQUFJLFVBQXBCLEVBQWdDLEtBQWhDLEVBQXFDO0FBQ2pDLGFBQUssSUFBSSxNQUFJLENBQWIsRUFBZ0IsTUFBSSxTQUFTLE1BQTdCLEVBQXFDLEtBQXJDLEVBQTBDO0FBQ3RDLGNBQUksTUFBSSxPQUFPLEdBQVAsRUFBVSxNQUFsQixFQUEwQjtBQUN0QixpQkFBSyxLQUFMLElBQWMsT0FBTyxHQUFQLEVBQVUsR0FBVixDQUFkO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7Ozs7O0FBamlCRDs7O0FBQ3dCLFVBQWUsSUFBZjtBQUN4Qjs7QUFDd0IsVUFBZSxJQUFmO0FBSjVCLGdCOzs7Ozs7Ozs7OztBQ2pCQSwrRiIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1xci1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1jb3JlXCIsIFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFRckNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSBhbHBoYSBudW1lcmljLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJBbHBoYU51bWVyaWMgZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkFscGhhTnVtZXJpYy5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgcXIgYWxwaGEgbnVtZXJpYy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAxIDwgcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLmdldENvZGUocy5jaGFyQXQoaSkpICogNDUgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2RlKHMuY2hhckF0KGkgKyAxKSksIDExKTtcclxuICAgICAgICAgICAgaSArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5nZXRDb2RlKHMuY2hhckF0KGkpKSwgNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRDb2RlKGMpIHtcclxuICAgICAgICBpZiAoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IFwiQVwiICYmIGMgPD0gXCJaXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtIFwiQVwiLmNoYXJDb2RlQXQoMCkgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiBcIjogcmV0dXJuIDM2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiRcIjogcmV0dXJuIDM3O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiVcIjogcmV0dXJuIDM4O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIipcIjogcmV0dXJuIDM5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIitcIjogcmV0dXJuIDQwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjogcmV0dXJuIDQxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5cIjogcmV0dXJuIDQyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjogcmV0dXJuIDQzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjpcIjogcmV0dXJuIDQ0O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSQWxwaGFOdW1lcmljID0gUVJBbHBoYU51bWVyaWM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkJiSEJvWVU1MWJXVnlhV011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5eGNrRnNjR2hoVG5WdFpYSnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVWc1JEczdPMGRCUjBjN1FVRkRTQ3h2UWtGQk5FSXNVMEZCVVN4MVFrRkJWVHRKUVVNeFF6czdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVms3VVVGRGNFSXNTMEZCU3l4RFFVRkRMSFZDUVVGVkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hUUVVGVE8xRkJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNUVUZCYVVJN1VVRkRNVUlzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWV0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUTA0c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEVmp0UlFVVkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEWkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UFFVRlBMRU5CUVVNc1EwRkJVenRSUVVWeVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU01UXp0aFFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMWxCUXpkQ0xFOUJRVThzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOdVJEdGhRVUZOTzFsQlEwZ3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRMUFzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUk3YjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNM1JEdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBSRUxIZERRVFpFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSA4IGJpdCBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJCeXRlOCBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSQnl0ZTguXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIDggYml0IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlOCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQnl0ZXModGhpcy5nZXREYXRhKCkpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgZGF0YSBpbnRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgdG8gd3JpdGUgaW50by5cclxuICAgICAqL1xyXG4gICAgd3JpdGUoYnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc3RyaW5nVG9CeXRlcyh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YVtpXSwgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdHJpbmdUb0J5dGVzKHN0cikge1xyXG4gICAgICAgIGNvbnN0IHV0ZjggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNoYXJjb2RlIDwgMHg4MCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKGNoYXJjb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhDMCB8IChjaGFyY29kZSA+PiA2KSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4RDgwMCB8fCBjaGFyY29kZSA+PSAweEUwMDApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaCgweEUwIHwgKGNoYXJjb2RlID4+IDEyKSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIC8vIFVURi0xNiBlbmNvZGVzIDB4MTAwMDAtMHgxMEZGRkYgYnlcclxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0aW5nIDB4MTAwMDAgYW5kIHNwbGl0dGluZyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIDIwIGJpdHMgb2YgMHgwLTB4RkZGRkYgaW50byB0d28gaGFsdmVzXHJcbiAgICAgICAgICAgICAgICBjaGFyY29kZSA9IDB4MTAwMDAgKyAoKChjaGFyY29kZSAmIDB4M0ZGKSA8PCAxMClcclxuICAgICAgICAgICAgICAgICAgICB8IChzdHIuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhGMCB8IChjaGFyY29kZSA+PiAxOCksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDEyKSAmIDB4M0YpLCAweDgwIHwgKChjaGFyY29kZSA+PiA2KSAmIDB4M0YpLCAweDgwIHwgKGNoYXJjb2RlICYgMHgzRikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1dGY4O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJCeXRlOCA9IFFSQnl0ZTg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkNlWFJsT0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwzRnlRbmwwWlRndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVU5CTEhGRVFVRnJSRHRCUVVOc1JDeHhSRUZCYTBRN1FVRkZiRVE3T3p0SFFVZEhPMEZCUTBnc1lVRkJjVUlzVTBGQlVTeDFRa0ZCVlR0SlFVTnVRenM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrN1VVRkRjRUlzUzBGQlN5eERRVUZETEhWQ1FVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyeERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU55UkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3l4RFFVRkRMRTFCUVdsQ08xRkJRekZDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRiRU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETVVJN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEdGQlFXRXNRMEZCUXl4SFFVRlhPMUZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnFReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEVsQlFVa3NVVUZCVVN4SFFVRkhMRWxCUVVrc1JVRkJSVHRuUWtGRGFrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU4yUWp0cFFrRkJUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVWQlFVVTdaMEpCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVU4wUWl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjJRenRwUWtGQlRTeEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRWxCUVVrc1VVRkJVU3hKUVVGSkxFMUJRVTBzUlVGQlJUdG5Ra0ZEYUVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRM1pDTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTXZRaXhKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOMlF6dHBRa0ZCVFR0blFrRkRTQ3hEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZEU2l4eFEwRkJjVU03WjBKQlEzSkRMSGREUVVGM1F6dG5Ra0ZEZUVNc2VVTkJRWGxETzJkQ1FVTjZReXhSUVVGUkxFZEJRVWNzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdjMEpCUXpGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGRGRrSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUTJoRExFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU12UWl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjJRenRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1EwRkJRenREUVVOS08wRkJla1JFTERCQ1FYbEVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFCYXNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YUJhc2VcIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIFFSIERhdGEgZm9yIHJlcHJlc2VudGluZyBhIG51bWJlci5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSTnVtYmVyIGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJOdW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlciwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAyIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLnN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAzKSksIDEwKTtcclxuICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMSkpLCA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMikpLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RyVG9OdW0ocykge1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBudW0gPSBudW0gKiAxMCArIHRoaXMuY2hhclRvTnVtKHMuY2hhckF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY2hhclRvTnVtKGMpIHtcclxuICAgICAgICBpZiAoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSTnVtYmVyID0gUVJOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXhjazUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc2NVUkJRV3RFTzBGQlEyeEVMSEZFUVVGclJEdEJRVVZzUkRzN08wZEJSMGM3UVVGRFNDeGpRVUZ6UWl4VFFVRlJMSFZDUVVGVk8wbEJRM0JET3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzU1VGQldUdFJRVU53UWl4TFFVRkxMRU5CUVVNc2RVSkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGTkJRVk03VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4TlFVRnBRanRSUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRk5VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVllzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRWanRSUVVWRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRha0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzWkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UkR0cFFrRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRE9VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRekZFTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkVzUTBGQlF5eERRVUZUTzFGQlEzUkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJReTlDTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyaEVPMUZCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRk5CUVZNc1EwRkJReXhEUVVGVE8xRkJRM1pDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlEzUkNMRTlCUVU4c1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6bERPMUZCUTBRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU14UkN4RFFVRkRPME5CUTBvN1FVRjRSRVFzTkVKQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgZm9yIG1haW50YWluaW5nIGRhdGEgYml0cy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIEJpdEJ1ZmZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgfVxyXG4gICAgZ2V0QnVmZmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRMZW5ndGhJbkJpdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcclxuICAgIH1cclxuICAgIHB1dChudW0sIGxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEJpdChiaXQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGVuZ3RoID09PSB0aGlzLl9idWZmZXIubGVuZ3RoICogOCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJbfn4odGhpcy5fbGVuZ3RoIC8gOCldIHw9ICgweDgwID4+PiAodGhpcy5fbGVuZ3RoICUgOCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sZW5ndGgrKztcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGhJbkJpdHMoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLmdldEJpdChpKSA/IFwiMVwiIDogXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRCaXQoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLl9idWZmZXJbfn4oaW5kZXggLyA4KV0gPj4+ICg3IC0gaW5kZXggJSA4KSkgJiAxKSA9PT0gMTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJpdEJ1ZmZlciA9IEJpdEJ1ZmZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sMFFuVm1abVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZZbWwwUW5WbVptVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVsSk8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZOTEZOQlFWTTdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVk5MR1ZCUVdVN1VVRkRiRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlRTeEhRVUZITEVOQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdNN1VVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtRN1NVRkRUQ3hEUVVGRE8wbEJSVTBzVFVGQlRTeERRVUZETEVkQlFWazdVVUZEZEVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU14UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjRRanRSUVVORUxFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlEwd3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEZGtVN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWTkxGRkJRVkU3VVVGRFdDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03VTBGRGVFTTdVVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVOHNUVUZCVFN4RFFVRkRMRXRCUVdFN1VVRkRlRUlzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZWtVc1EwRkJRenREUVVOS08wRkJOVU5FTERoQ1FUUkRReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgdG8gaGVscGVyIHdpdGggbWF0aC5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIE1hdGhIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtYXRoIGhlbHBlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCFNYXRoSGVscGVyLkVYUF9UQUJMRSkge1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRS5wdXNoKGkgPCA4ID8gMSA8PCBpIDpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNF0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNV0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNl0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gOF0pO1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEUucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRVtNYXRoSGVscGVyLkVYUF9UQUJMRVtpXV0gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgbG9nIG9mLlxyXG4gICAgICogQHJldHVybnMgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGxvZygnICsgJHt2YWx1ZX0gKyAnKSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuTE9HX1RBQkxFW3ZhbHVlXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBleHBvbmVudCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgZXhwb25lbnQgb2YuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXhwb25lbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V4cCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBsb2NhbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGxvY2FsVmFsdWUgKz0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobG9jYWxWYWx1ZSA+PSAyNTYpIHtcclxuICAgICAgICAgICAgbG9jYWxWYWx1ZSAtPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoSGVscGVyLkVYUF9UQUJMRVtsb2NhbFZhbHVlXTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdGhIZWxwZXIgPSBNYXRoSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwYUVobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwyMWhkR2hJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96czdSMEZIUnp0QlFVTklPMGxCVFVrN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlR0UlFVTndRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTjJRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTXhRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXhRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM1JETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZETTBJc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVNelFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlF6TkNMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMnBETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaERPMWxCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETVVJc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzSkVPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCWVR0UlFVTTFRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEV0N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGZEJRVmNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFOUJRVThzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJZVHRSUVVNMVFpeEpRVUZKTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRka0lzVDBGQlR5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTI1Q0xGVkJRVlVzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEY2tJN1VVRkRSQ3hQUVVGUExGVkJRVlVzU1VGQlNTeEhRVUZITEVWQlFVVTdXVUZEZEVJc1ZVRkJWU3hKUVVGSkxFZEJRVWNzUTBGQlF6dFRRVU55UWp0UlFVTkVMRTlCUVU4c1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0SlFVTTFReXhEUVVGRE8wTkJRMG83UVVGMFJFUXNaME5CYzBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZXByZXNlbnQgYSBwb2x5bm9taWFsLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUG9seW5vbWlhbCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQb2x5bm9taWFsLlxyXG4gICAgICogQHBhcmFtIG51bSBUaGUgbnVtIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHBhcmFtIHNoaWZ0IFRoZSBzaGlmdCBmb3IgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bSwgc2hpZnQgPSAwKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT09IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX251bSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IG51bS5sZW5ndGggLSBvZmZzZXQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9udW0ucHVzaChudW1bb2Zmc2V0ICsgaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaWZ0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbnVtLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGhlIHZhbHVlIG9mIHRoZSBwb2x5bm9taWFsIGF0IGdpdmVuIGluZGV4LlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleC5cclxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgZ2V0QXQoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtW2luZGV4XTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW0ubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBwb2x5bm9taWFsIHRvIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMuZ2V0QXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsb2cgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbG9nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICB0b0xvZ1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIgKz0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBNdWx0aXBseSB0aGUgcG9seW5vbWlhbCB3aXRoIGFub3RoZXIgb25lLlxyXG4gICAgICogQHBhcmFtIGUgVGhlIHBvbHlub21pYWwgdG8gbXVsdGlwbHkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbXVsdGlwbGljYXRpb24gb2YgdGhlIHBvbHlub21pYWxzLlxyXG4gICAgICovXHJcbiAgICBtdWx0aXBseShlKSB7XHJcbiAgICAgICAgY29uc3QgbnVtID0gW107XHJcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBudW1baSArIGpdIF49IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAobWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KGkpKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KGopKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5bm9taWFsKG51bSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbW9kdWx1cyBvZiB0aGUgcG9seW5vbWlhbCBmcm9tIGFub3RoZXIuXHJcbiAgICAgKiBAcGFyYW0gZSBUaGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtb2R1bGVzIG9mIHRoZSBwb2x5bm9taWFscy5cclxuICAgICAqL1xyXG4gICAgbW9kKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRMZW5ndGgoKSAtIGUuZ2V0TGVuZ3RoKCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYXRpbyA9IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdCgwKSkgLSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoMCkpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBjb3B5XHJcbiAgICAgICAgY29uc3QgbnVtID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtLnB1c2godGhpcy5nZXRBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnRyYWN0IGFuZCBjYWxjIHJlc3QuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtW2ldIF49IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAobWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KGkpKSArIHJhdGlvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FsbCByZWN1cnNpdmVseVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9seW5vbWlhbChudW0pLm1vZChlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlub21pYWwgPSBQb2x5bm9taWFsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlzZVc1dmJXbGhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwzQnZiSGx1YjIxcFlXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEWkRRVUV3UXp0QlFVVXhRenM3TzBkQlIwYzdRVUZEU0R0SlFVbEpPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMRWRCUVdFc1JVRkJSU3hSUVVGblFpeERRVUZETzFGQlEzaERMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZtTEU5QlFVOHNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNM1F5eE5RVUZOTEVWQlFVVXNRMEZCUXp0VFFVTmFPMUZCUlVRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEWml4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTm9ReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6RkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU51UXp0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE5VSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEY2tJN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFdEJRVXNzUTBGQlF5eExRVUZoTzFGQlEzUkNMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1UwRkJVenRSUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRhRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMUFzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXp0aFFVTnFRanRaUVVORUxFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5DTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZkQlFWYzdVVUZEWkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGFFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4yUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExQXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJRenRoUVVOcVFqdFpRVU5FTEUxQlFVMHNTVUZCU1N4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRkZCUVZFc1EwRkJReXhEUVVGaE8xRkJRM3BDTEUxQlFVMHNSMEZCUnl4SFFVRmhMRVZCUVVVc1EwRkJRenRSUVVONlFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGQ0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRaanRSUVVORUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRka01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGNFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeDFRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXgxUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTjRSQ3gxUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndRenRUUVVOS08xRkJRMFFzVDBGQlR5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNdlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEVkQlFVY3NRMEZCUXl4RFFVRmhPMUZCUTNCQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEZEVNc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFpqdFJRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eDFRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZNMFVzWTBGQll6dFJRVU5rTEUxQlFVMHNSMEZCUnl4SFFVRmhMRVZCUVVVc1EwRkJRenRSUVVONlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM1pETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpOQ08xRkJSVVFzTUVKQlFUQkNPMUZCUXpGQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRjRU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVVkVMRzFDUVVGdFFqdFJRVU51UWl4UFFVRlBMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMFF5eERRVUZETzBOQlEwbzdRVUYyU0VRc1owTkJkVWhESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZXJyb3JDb3JyZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbmNvbnN0IG1hc2tQYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL21hc2tQYXR0ZXJuXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhIZWxwZXJcIik7XHJcbmNvbnN0IHBvbHlub21pYWxfMSA9IHJlcXVpcmUoXCIuL3BvbHlub21pYWxcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgbWV0aG9kcyBmb3IgUVIgZ2VuZXJhdGlvbi5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBwYXR0ZXJuIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBwYXR0ZXJuIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXR0ZXJuIGZvciB0aGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRQYXR0ZXJuUG9zaXRpb24odHlwZU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBRUkhlbHBlci5QQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXIgLSAxXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtYXggbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgZGF0YSBtb2RlIHRvIGdldCBkYXRhIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsIFRoZSBlcnJvciBjb3JyZWN0aW9uIHRvIGdldCB0aGUgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWF4IGxlbmd0aC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldE1heExlbmd0aCh0eXBlTnVtYmVyLCBtb2RlLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IHQgPSB0eXBlTnVtYmVyIC0gMTtcclxuICAgICAgICBsZXQgZSA9IDA7XHJcbiAgICAgICAgbGV0IG0gPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkw6XHJcbiAgICAgICAgICAgICAgICBlID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTTpcclxuICAgICAgICAgICAgICAgIGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5ROlxyXG4gICAgICAgICAgICAgICAgZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkg6XHJcbiAgICAgICAgICAgICAgICBlID0gMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgJHtlcnJvckNvcnJlY3RMZXZlbH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgbSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6XHJcbiAgICAgICAgICAgICAgICBtID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OlxyXG4gICAgICAgICAgICAgICAgbSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhIG1vZGUgJHttb2RlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUVJIZWxwZXIuTUFYX0xFTkdUSFt0XVtlXVttXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBlcnJvciBjb3JyZWN0aW9uIHBvbHlub21pYWwgZm9yIHRoZSBlcnJvciBjb3JyZWN0byBsZW5ndGguXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGVuZ3RoIFRoZSBlcnJvciBjb3JyZWN0aW9uIGxlbmd0aCB0byBnZXQgdGhlIHBvbHlub21pYWwgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBvbHlub21pYWwgZm9yIHRoZSBlcnJvciBjb3JyZWN0aW9uIGxlbmd0aC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGEgPSBuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoWzFdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLm11bHRpcGx5KG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChbMSwgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChpKV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWFzayBtZXRob2QgZm9yIHRoZSBnaXZlbiBwYXR0ZXJuLlxyXG4gICAgICogQHBhcmFtIG1hc2tQYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIGdldCB0aGUgbWFzayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWFzayBtZXRob2QgZm9yIHRoZSBwYXR0ZXJuLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0TWFza01ldGhvZChtYXNrUGF0dGVybikge1xyXG4gICAgICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICsgaikgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gaSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDEwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiBqICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICsgaikgJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKH5+KGkgLyAyKSArIH5+KGogLyAzKSkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjEwMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTExOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1hc2sgJHttYXNrUGF0dGVybn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQkNIIHR5cGUgaW5mby5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGdldCB0aGUgQkNIIHR5cGUgaW5mbyBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHlwZSBpbmZvLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIVHlwZUluZm8oZGF0YSkge1xyXG4gICAgICAgIGxldCBkID0gZGF0YSA8PCAxMDtcclxuICAgICAgICB3aGlsZSAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLSBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTUpID49IDApIHtcclxuICAgICAgICAgICAgZCBePSAoUVJIZWxwZXIuRzE1IDw8IChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtXHJcbiAgICAgICAgICAgICAgICBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKGRhdGEgPDwgMTApIHwgZCkgXiBRUkhlbHBlci5HMTVfTUFTSztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBCQ0ggdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBnZXQgdGhlIEJDSCB0eXBlIG51bWJlciBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hUeXBlTnVtYmVyKGRhdGEpIHtcclxuICAgICAgICBsZXQgZCA9IGRhdGEgPDwgMTI7XHJcbiAgICAgICAgd2hpbGUgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC0gUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE4KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKFFSSGVscGVyLkcxOCA8PCAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLVxyXG4gICAgICAgICAgICAgICAgUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE4KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGdldEJDSERpZ2l0KGRhdGEpIHtcclxuICAgICAgICBsZXQgbG9jYWxEYXRhID0gZGF0YTtcclxuICAgICAgICBsZXQgZGlnaXQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChsb2NhbERhdGEgIT09IDApIHtcclxuICAgICAgICAgICAgZGlnaXQrKztcclxuICAgICAgICAgICAgbG9jYWxEYXRhID4+Pj0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2l0O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5QQVRURVJOX1BPU0lUSU9OX1RBQkxFID0gW1xyXG4gICAgW10sXHJcbiAgICBbNiwgMThdLFxyXG4gICAgWzYsIDIyXSxcclxuICAgIFs2LCAyNl0sXHJcbiAgICBbNiwgMzBdLFxyXG4gICAgWzYsIDM0XSxcclxuICAgIFs2LCAyMiwgMzhdLFxyXG4gICAgWzYsIDI0LCA0Ml0sXHJcbiAgICBbNiwgMjYsIDQ2XSxcclxuICAgIFs2LCAyOCwgNTBdLFxyXG4gICAgWzYsIDMwLCA1NF0sXHJcbiAgICBbNiwgMzIsIDU4XSxcclxuICAgIFs2LCAzNCwgNjJdLFxyXG4gICAgWzYsIDI2LCA0NiwgNjZdLFxyXG4gICAgWzYsIDI2LCA0OCwgNzBdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzRdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzhdLFxyXG4gICAgWzYsIDMwLCA1NiwgODJdLFxyXG4gICAgWzYsIDMwLCA1OCwgODZdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTBdLFxyXG4gICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcclxuICAgIFs2LCAyNiwgNTAsIDc0LCA5OF0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyXSxcclxuICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxyXG4gICAgWzYsIDMyLCA1OCwgODQsIDExMF0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0XSxcclxuICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2XSxcclxuICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXHJcbiAgICBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxyXG4gICAgWzYsIDM0LCA2MCwgODYsIDExMiwgMTM4XSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2LCAxNTBdLFxyXG4gICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxyXG4gICAgWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxyXG4gICAgWzYsIDMyLCA1OCwgODQsIDExMCwgMTM2LCAxNjJdLFxyXG4gICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5NQVhfTEVOR1RIID0gW1xyXG4gICAgW1s0MSwgMjUsIDE3LCAxMF0sIFszNCwgMjAsIDE0LCA4XSwgWzI3LCAxNiwgMTEsIDddLCBbMTcsIDEwLCA3LCA0XV0sXHJcbiAgICBbWzc3LCA0NywgMzIsIDIwXSwgWzYzLCAzOCwgMjYsIDE2XSwgWzQ4LCAyOSwgMjAsIDEyXSwgWzM0LCAyMCwgMTQsIDhdXSxcclxuICAgIFtbMTI3LCA3NywgNTMsIDMyXSwgWzEwMSwgNjEsIDQyLCAyNl0sIFs3NywgNDcsIDMyLCAyMF0sIFs1OCwgMzUsIDI0LCAxNV1dLFxyXG4gICAgW1sxODcsIDExNCwgNzgsIDQ4XSwgWzE0OSwgOTAsIDYyLCAzOF0sIFsxMTEsIDY3LCA0NiwgMjhdLCBbODIsIDUwLCAzNCwgMjFdXSxcclxuICAgIFtbMjU1LCAxNTQsIDEwNiwgNjVdLCBbMjAyLCAxMjIsIDg0LCA1Ml0sIFsxNDQsIDg3LCA2MCwgMzddLCBbMTA2LCA2NCwgNDQsIDI3XV0sXHJcbiAgICBbWzMyMiwgMTk1LCAxMzQsIDgyXSwgWzI1NSwgMTU0LCAxMDYsIDY1XSwgWzE3OCwgMTA4LCA3NCwgNDVdLCBbMTM5LCA4NCwgNTgsIDM2XV0sXHJcbiAgICBbWzM3MCwgMjI0LCAxNTQsIDk1XSwgWzI5MywgMTc4LCAxMjIsIDc1XSwgWzIwNywgMTI1LCA4NiwgNTNdLCBbMTU0LCA5MywgNjQsIDM5XV0sXHJcbiAgICBbWzQ2MSwgMjc5LCAxOTIsIDExOF0sIFszNjUsIDIyMSwgMTUyLCA5M10sIFsyNTksIDE1NywgMTA4LCA2Nl0sIFsyMDIsIDEyMiwgODQsIDUyXV0sXHJcbiAgICBbWzU1MiwgMzM1LCAyMzAsIDE0MV0sIFs0MzIsIDI2MiwgMTgwLCAxMTFdLCBbMzEyLCAxODksIDEzMCwgODBdLCBbMjM1LCAxNDMsIDk4LCA2MF1dLFxyXG4gICAgW1s2NTIsIDM5NSwgMjcxLCAxNjddLCBbNTEzLCAzMTEsIDIxMywgMTMxXSwgWzM2NCwgMjIxLCAxNTEsIDkzXSwgWzI4OCwgMTc0LCAxMTksIDc0XV1cclxuXTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSlcclxuICAgIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTggPSAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMClcclxuICAgIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApXHJcbiAgICB8ICgxIDw8IDQpIHwgKDEgPDwgMSk7XHJcbmV4cG9ydHMuUVJIZWxwZXIgPSBRUkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OXhja2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2JVVkJRV2RGTzBGQlEyaEZMSFZFUVVGdlJEdEJRVU53UkN4eFJFRkJhMFE3UVVGRGJFUXNOa05CUVRCRE8wRkJRekZETERaRFFVRXdRenRCUVVVeFF6czdPMGRCUjBjN1FVRkRTRHRKUVhWRlNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExGVkJRV3RDTzFGQlF5OURMRTlCUVU4c1VVRkJVU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4VlFVRnJRaXhGUVVGRkxFbEJRV2RDTEVWQlFVVXNhVUpCUVc5RE8xRkJRMnBITEUxQlFVMHNRMEZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMVlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlZZc1VVRkJVU3hwUWtGQmFVSXNSVUZCUlR0WlFVTjJRaXhMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRM1pETEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEUxQlFVMDdXVUZEZGtNc1MwRkJTeXh4UTBGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVNc1RVRkJUVHRaUVVOMlF5eExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eE5RVUZOTzFsQlEzWkRPMmRDUVVOSkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhME5CUVd0RExHbENRVUZwUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNNVJUdFJRVVZFTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXgxUWtGQlZTeERRVUZETEUxQlFVMDdaMEpCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNKRExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4WlFVRlpPMmRDUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVNc1RVRkJUVHRaUVVNelF5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1MwRkJTenRuUWtGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRGNFTTdaMEpCUTBrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHhRa0ZCY1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53UkR0UlFVVkVMRTlCUVU4c1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4clFrRkJNRUk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3gxUWtGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVMVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzYTBKQlFXdENMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVrTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeDFRa0ZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkVPMUZCUlVRc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJiVUk3VVVGRE0wTXNVVUZCVVN4WFFVRlhMRVZCUVVVN1dVRkRha0lzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzWkVMRXRCUVVzc2VVSkJRVmNzUTBGQlF5eFZRVUZWTzJkQ1FVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYWtRc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hMUVVGTExIbENRVUZYTEVOQlFVTXNWVUZCVlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRrUXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRM1pGTEV0QlFVc3NlVUpCUVZjc1EwRkJReXhWUVVGVk8yZENRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEY2tVc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlF6TkZMRXRCUVVzc2VVSkJRVmNzUTBGQlF5eFZRVUZWTzJkQ1FVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVVV6UlR0blFrRkRTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkVPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFWazdVVUZEY2tNc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhQUVVGUExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRM1JGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRE1VTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRE8xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQldUdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEyNUNMRTlCUVU4c1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNeFF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETlVNN1VVRkRSQ3hQUVVGUExFTkJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQldUdFJRVU51UXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGNrSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzVDBGQlR5eFRRVUZUTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTNCQ0xFdEJRVXNzUlVGQlJTeERRVUZETzFsQlExSXNVMEZCVXl4TlFVRk5MRU5CUVVNc1EwRkJRenRUUVVOd1FqdFJRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGxCUTJwQ0xFTkJRVU03TzBGQmFFMUVMR1ZCUVdVN1FVRkRVeXdyUWtGQmMwSXNSMEZCWlR0SlFVTjZSQ3hGUVVGRk8wbEJRMFlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMUFzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTJZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMllzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTI1Q0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU51UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRjRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzQkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOd1FpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEY0VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzcENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNwQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZET1VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZET1VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZET1VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZET1VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZET1VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdRMEZEYWtNc1EwRkJRenRCUVVWR0xHVkJRV1U3UVVGRFV5eHRRa0ZCVlN4SFFVRnBRanRKUVVNdlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRjRVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNaRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTXhSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETlVVc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF5OUZMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUml4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrWXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0JHTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOeVJpeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1EwRkRla1lzUTBGQlF6dEJRVVZHTEdWQlFXVTdRVUZEVXl4WlFVRkhMRWRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMDFCUXk5RUxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUldoRUxHVkJRV1U3UVVGRFV5eFpRVUZITEVkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzAxQlEycEZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVE5FTEdWQlFXVTdRVUZEVXl4cFFrRkJVU3hIUVVGWExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenROUVVOMFJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFYSkZPVUlzTkVKQmEwMURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIFJTIEJsb2NrLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUlNCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnNzdGFuY2Ugb2YgUlNCbG9jay5cclxuICAgICAqIEBwYXJhbSB0b3RhbENvdW50IFRoZSB0b3RhbCBjb3VudCBmb3IgdGhlIGJsb2NrLlxyXG4gICAgICogQHBhcmFtIGRhdGFDb3VudCBUaGUgZGF0YSBjb3VudCBmb3IgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcclxuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLl9kYXRhQ291bnQgPSBkYXRhQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBSUyBCbG9ja3MgZm9yIHRoZSB0eXBlIG51bWJlciBhbmQgZXJyb3IgY29ycmVjdCBsZXZlbC5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCBUaGUgZXJyb3IgY29ycmVjdCBsZXZlbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBSUyBCbG9ja3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IHJzQmxvY2sgPSBSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gcnNCbG9ja1tpICogMyArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5NOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLlE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuSDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBlcnJvciBjb3JyZWN0IGxlYmVsICR7ZXJyb3JDb3JyZWN0TGV2ZWx9YCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YSBjb3VudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIGNvdW50LlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFDb3VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0b3RhbCBjb3VudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0b3RhbCBjb3VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxDb3VudDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUlNCbG9jay5SU19CTE9DS19UQUJMRSA9IFtcclxuICAgIC8vIExcclxuICAgIC8vIE1cclxuICAgIC8vIFFcclxuICAgIC8vIEhcclxuICAgIC8vIDFcclxuICAgIFsxLCAyNiwgMTldLFxyXG4gICAgWzEsIDI2LCAxNl0sXHJcbiAgICBbMSwgMjYsIDEzXSxcclxuICAgIFsxLCAyNiwgOV0sXHJcbiAgICAvLyAyXHJcbiAgICBbMSwgNDQsIDM0XSxcclxuICAgIFsxLCA0NCwgMjhdLFxyXG4gICAgWzEsIDQ0LCAyMl0sXHJcbiAgICBbMSwgNDQsIDE2XSxcclxuICAgIC8vIDNcclxuICAgIFsxLCA3MCwgNTVdLFxyXG4gICAgWzEsIDcwLCA0NF0sXHJcbiAgICBbMiwgMzUsIDE3XSxcclxuICAgIFsyLCAzNSwgMTNdLFxyXG4gICAgLy8gNFxyXG4gICAgWzEsIDEwMCwgODBdLFxyXG4gICAgWzIsIDUwLCAzMl0sXHJcbiAgICBbMiwgNTAsIDI0XSxcclxuICAgIFs0LCAyNSwgOV0sXHJcbiAgICAvLyA1XHJcbiAgICBbMSwgMTM0LCAxMDhdLFxyXG4gICAgWzIsIDY3LCA0M10sXHJcbiAgICBbMiwgMzMsIDE1LCAyLCAzNCwgMTZdLFxyXG4gICAgWzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcclxuICAgIC8vIDZcclxuICAgIFsyLCA4NiwgNjhdLFxyXG4gICAgWzQsIDQzLCAyN10sXHJcbiAgICBbNCwgNDMsIDE5XSxcclxuICAgIFs0LCA0MywgMTVdLFxyXG4gICAgLy8gN1xyXG4gICAgWzIsIDk4LCA3OF0sXHJcbiAgICBbNCwgNDksIDMxXSxcclxuICAgIFsyLCAzMiwgMTQsIDQsIDMzLCAxNV0sXHJcbiAgICBbNCwgMzksIDEzLCAxLCA0MCwgMTRdLFxyXG4gICAgLy8gOFxyXG4gICAgWzIsIDEyMSwgOTddLFxyXG4gICAgWzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcclxuICAgIFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcbiAgICBbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG4gICAgLy8gOVxyXG4gICAgWzIsIDE0NiwgMTE2XSxcclxuICAgIFszLCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcbiAgICBbNCwgMzYsIDE2LCA0LCAzNywgMTddLFxyXG4gICAgWzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcclxuICAgIC8vIDEwXHJcbiAgICBbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG4gICAgWzQsIDY5LCA0MywgMSwgNzAsIDQ0XSxcclxuICAgIFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG4gICAgLy8gMTFcclxuICAgIFs0LCAxMDEsIDgxXSxcclxuICAgIFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXHJcbiAgICBbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxyXG4gICAgWzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuICAgIC8vIDEyXHJcbiAgICBbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXHJcbiAgICBbNiwgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgWzQsIDQ2LCAyMCwgNiwgNDcsIDIxXSxcclxuICAgIFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXHJcbiAgICAvLyAxM1xyXG4gICAgWzQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA1OSwgMzcsIDEsIDYwLCAzOF0sXHJcbiAgICBbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxyXG4gICAgWzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcbiAgICAvLyAxNFxyXG4gICAgWzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICBbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxyXG4gICAgWzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXHJcbiAgICBbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuICAgIC8vIDE1XHJcbiAgICBbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXHJcbiAgICBbNSwgNjUsIDQxLCA1LCA2NiwgNDJdLFxyXG4gICAgWzUsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuICAgIFsxMSwgMzYsIDEyLCA3LCAzNywgMTNdLFxyXG4gICAgLy8gMTZcclxuICAgIFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcclxuICAgIFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcbiAgICBbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgIFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG4gICAgLy8gMTdcclxuICAgIFsxLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG4gICAgWzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXHJcbiAgICBbMSwgNTAsIDIyLCAxNSwgNTEsIDIzXSxcclxuICAgIFsyLCA0MiwgMTQsIDE3LCA0MywgMTVdLFxyXG4gICAgLy8gMThcclxuICAgIFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxyXG4gICAgWzksIDY5LCA0MywgNCwgNzAsIDQ0XSxcclxuICAgIFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXHJcbiAgICAvLyAxOVxyXG4gICAgWzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXHJcbiAgICBbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcclxuICAgIFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG4gICAgWzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXHJcbiAgICAvLyAyMFxyXG4gICAgWzMsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcbiAgICBbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcclxuICAgIFsxNSwgNTQsIDI0LCA1LCA1NSwgMjVdLFxyXG4gICAgWzE1LCA0MywgMTUsIDEwLCA0NCwgMTZdLFxyXG4gICAgLy8gMjFcclxuICAgIFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxyXG4gICAgWzE3LCA2OCwgNDJdLFxyXG4gICAgWzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcclxuICAgIC8vIDIyXHJcbiAgICBbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcclxuICAgIFsxNywgNzQsIDQ2XSxcclxuICAgIFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG4gICAgWzM0LCAzNywgMTNdLFxyXG4gICAgLy8gMjNcclxuICAgIFs0LCAxNTEsIDEyMSwgNSwgMTUyLCAxMjJdLFxyXG4gICAgWzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXHJcbiAgICBbMTEsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbMTYsIDQ1LCAxNSwgMTQsIDQ2LCAxNl0sXHJcbiAgICAvLyAyNFxyXG4gICAgWzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcbiAgICBbNiwgNzMsIDQ1LCAxNCwgNzQsIDQ2XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxyXG4gICAgLy8gMjVcclxuICAgIFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxyXG4gICAgWzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXHJcbiAgICBbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuICAgIFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuICAgIC8vIDI2XHJcbiAgICBbMTAsIDE0MiwgMTE0LCAyLCAxNDMsIDExNV0sXHJcbiAgICBbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcclxuICAgIFsyOCwgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG4gICAgWzMzLCA0NiwgMTYsIDQsIDQ3LCAxN10sXHJcbiAgICAvLyAyN1xyXG4gICAgWzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjIsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgIFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG4gICAgWzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG4gICAgLy8gMjhcclxuICAgIFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcclxuICAgIFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxyXG4gICAgWzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcbiAgICBbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXHJcbiAgICAvLyAyOVxyXG4gICAgWzcsIDE0NiwgMTE2LCA3LCAxNDcsIDExN10sXHJcbiAgICBbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcclxuICAgIFsxLCA1MywgMjMsIDM3LCA1NCwgMjRdLFxyXG4gICAgWzE5LCA0NSwgMTUsIDI2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzBcclxuICAgIFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcclxuICAgIFsxOSwgNzUsIDQ3LCAxMCwgNzYsIDQ4XSxcclxuICAgIFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcclxuICAgIC8vIDMxXHJcbiAgICBbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXHJcbiAgICBbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcclxuICAgIFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG4gICAgWzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG4gICAgLy8gMzJcclxuICAgIFsxNywgMTQ1LCAxMTVdLFxyXG4gICAgWzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG4gICAgWzEwLCA1NCwgMjQsIDM1LCA1NSwgMjVdLFxyXG4gICAgWzE5LCA0NSwgMTUsIDM1LCA0NiwgMTZdLFxyXG4gICAgLy8gMzNcclxuICAgIFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuICAgIFsxNCwgNzQsIDQ2LCAyMSwgNzUsIDQ3XSxcclxuICAgIFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuICAgIFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuICAgIC8vIDM0XHJcbiAgICBbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXHJcbiAgICBbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICBbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuICAgIFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxyXG4gICAgLy8gMzVcclxuICAgIFsxMiwgMTUxLCAxMjEsIDcsIDE1MiwgMTIyXSxcclxuICAgIFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcclxuICAgIFszOSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFsyMiwgNDUsIDE1LCA0MSwgNDYsIDE2XSxcclxuICAgIC8vIDM2XHJcbiAgICBbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXHJcbiAgICBbNiwgNzUsIDQ3LCAzNCwgNzYsIDQ4XSxcclxuICAgIFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgIFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxyXG4gICAgLy8gMzdcclxuICAgIFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuICAgIFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcclxuICAgIFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgIFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuICAgIC8vIDM4XHJcbiAgICBbNCwgMTUyLCAxMjIsIDE4LCAxNTMsIDEyM10sXHJcbiAgICBbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXHJcbiAgICBbNDgsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbNDIsIDQ1LCAxNSwgMzIsIDQ2LCAxNl0sXHJcbiAgICAvLyAzOVxyXG4gICAgWzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgWzQwLCA3NSwgNDcsIDcsIDc2LCA0OF0sXHJcbiAgICBbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXHJcbiAgICAvLyA0MFxyXG4gICAgWzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxyXG4gICAgWzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxyXG4gICAgWzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG4gICAgWzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXHJcbl07XHJcbmV4cG9ydHMuUlNCbG9jayA9IFJTQmxvY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNuTkNiRzlqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMM0p6UW14dlkyc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHMUZRVUZuUlR0QlFVVm9SVHM3TzBkQlIwYzdRVUZEU0R0SlFUUlFTVHM3T3p0UFFVbEhPMGxCUTBnc1dVRkJXU3hWUVVGclFpeEZRVUZGTEZOQlFXbENPMUZCUXpkRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUTJoRExFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1ZVRkJhMElzUlVGQlJTeHBRa0ZCYjBNN1VVRkRPVVVzVFVGQlRTeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhWUVVGVkxFVkJRVVVzYVVKQlFXbENMRU5CUVVNc1EwRkJRenRSUVVOMlJTeE5RVUZOTEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZzUXl4TlFVRk5MRWxCUVVrc1IwRkJZeXhGUVVGRkxFTkJRVU03VVVGRk0wSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVVM1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVWeVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNMVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJwRU8xTkJRMG83VVVGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1ZVRkJhMElzUlVGQlJTeHBRa0ZCYjBNN1VVRkRia1lzVVVGQlVTeHBRa0ZCYVVJc1JVRkJSVHRaUVVOMlFpeExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlEzQkNMRTlCUVU4c1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVRc1MwRkJTeXh4UTBGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVOd1FpeFBRVUZQTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZFTEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VJc1QwRkJUeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEU5QlFVOHNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VUXNVVUZCVVR0VFFVTllPMUZCUlVRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3JRa0ZCSzBJc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3haUVVGWk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hoUVVGaE8xRkJRMmhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVNMVFpeERRVUZET3p0QlFUbFVSQ3hsUVVGbE8wRkJRMU1zYzBKQlFXTXNSMEZCWlR0SlFVVnFSQ3hKUVVGSk8wbEJRMG9zU1VGQlNUdEpRVU5LTEVsQlFVazdTVUZEU2l4SlFVRkpPMGxCUTBvc1NVRkJTVHRKUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGVml4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVZZTEVsQlFVazdTVUZEU2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSVmdzU1VGQlNUdEpRVU5LTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZWaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTVUZCU1R0SlFVTktMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRldDeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1NVRkJTVHRKUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMFFpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYUkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhSQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRZaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYyUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExb3NRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGV2l4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMlFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU16UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjJRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXhRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU14UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjRRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTXpRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWNFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVY0UWl4TFFVRkxPMGxCUTB3c1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTmtMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBOQlF6TkNMRU5CUVVNN1FVRjJVRTRzTUVKQloxVkRJbjA9IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3FyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzTUVKQlFYRkNPMEZCUlhKQ0xHZEVRVUV5UXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgdG8gdXNlIGZvciB0aGUgUVIgQ29kZS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBFcnJvckNvcnJlY3RMZXZlbDtcclxuKGZ1bmN0aW9uIChFcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiA3JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIkxcIl0gPSAxXSA9IFwiTFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNSVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJNXCJdID0gMF0gPSBcIk1cIjtcclxuICAgIC8qKlxyXG4gICAgICogMjUlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiUVwiXSA9IDNdID0gXCJRXCI7XHJcbiAgICAvKipcclxuICAgICAqIDMwJVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIkhcIl0gPSAyXSA9IFwiSFwiO1xyXG59KShFcnJvckNvcnJlY3RMZXZlbCA9IGV4cG9ydHMuRXJyb3JDb3JyZWN0TGV2ZWwgfHwgKGV4cG9ydHMuRXJyb3JDb3JyZWN0TGV2ZWwgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWEp5YjNKRGIzSnlaV04wVEdWMlpXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmJXOWtaV3h6TDJWeWNtOXlRMjl5Y21WamRFeGxkbVZzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4SlFVRlpMR2xDUVc5Q1dEdEJRWEJDUkN4WFFVRlpMR2xDUVVGcFFqdEpRVU42UWpzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdRVUZEVkN4RFFVRkRMRVZCY0VKWExHbENRVUZwUWl4SFFVRnFRaXg1UWtGQmFVSXNTMEZCYWtJc2VVSkJRV2xDTEZGQmIwSTFRaUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTWFzayBwYXR0ZXJucyBmb3IgUVIgY29kZXMuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgTWFza1BhdHRlcm47XHJcbihmdW5jdGlvbiAoTWFza1BhdHRlcm4pIHtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAwMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMDBcIl0gPSAwXSA9IFwiUEFUVEVSTjAwMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDAxXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAwMVwiXSA9IDFdID0gXCJQQVRURVJOMDAxXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMTBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDEwXCJdID0gMl0gPSBcIlBBVFRFUk4wMTBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAxMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMTFcIl0gPSAzXSA9IFwiUEFUVEVSTjAxMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTAwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjEwMFwiXSA9IDRdID0gXCJQQVRURVJOMTAwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMDFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTAxXCJdID0gNV0gPSBcIlBBVFRFUk4xMDFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDExMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMTBcIl0gPSA2XSA9IFwiUEFUVEVSTjExMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTExXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjExMVwiXSA9IDddID0gXCJQQVRURVJOMTExXCI7XHJcbn0pKE1hc2tQYXR0ZXJuID0gZXhwb3J0cy5NYXNrUGF0dGVybiB8fCAoZXhwb3J0cy5NYXNrUGF0dGVybiA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnphMUJoZEhSbGNtNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmJXOWtaV3h6TDIxaGMydFFZWFIwWlhKdUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeEpRVUZaTEZkQmQwTllPMEZCZUVORUxGZEJRVmtzVjBGQlZ6dEpRVU51UWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3U1VGRmJFSTdPMDlCUlVjN1NVRkRTQ3g1UkVGQmEwSXNRMEZCUVR0SlFVVnNRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdTVUZGYkVJN08wOUJSVWM3U1VGRFNDeDVSRUZCYTBJc1EwRkJRVHRKUVVWc1FqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1FVRkRkRUlzUTBGQlF5eEZRWGhEVnl4WFFVRlhMRWRCUVZnc2JVSkJRVmNzUzBGQldDeHRRa0ZCVnl4UlFYZERkRUlpZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4vcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHN0b3JpbmcgUVIgRGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJEYXRhQmFzZS5cclxuICAgICAqIEBwYXJhbSBtb2RlIFRoZSBtb2RlIGZvciB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YSBtb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgbW9kZS5cclxuICAgICAqL1xyXG4gICAgZ2V0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIGluIGJpdHMgb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBsZW5ndGggZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBpbiBiaXRzLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGhJbkJpdHModHlwZU51bWJlcikge1xyXG4gICAgICAgIGlmICh0eXBlTnVtYmVyID49IDEgJiYgdHlwZU51bWJlciA8IDEwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gOTtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiA4O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA8IDI3KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gMTE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlTnVtYmVyIDwgNDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDE0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiAxMztcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZU51bWJlciAke3R5cGVOdW1iZXJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJEYXRhQmFzZSA9IFFSRGF0YUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkVZWFJoUW1GelpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGIyUmxiSE12Y1hKRVlYUmhRbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzTmtOQlFUQkRPMEZCUlRGRE96czdSMEZIUnp0QlFVTklPMGxCVFVrN096czdUMEZKUnp0SlFVTklMRmxCUVZrc1NVRkJaMElzUlVGQlJTeEpRVUZaTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRmpSRHM3T3p0UFFVbEhPMGxCUTBrc1pVRkJaU3hEUVVGRExGVkJRV3RDTzFGQlEzSkRMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTNCRExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRhRUlzUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTnNReXhMUVVGTExIVkNRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEzWkRMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRGFFTTdiMEpCUTBrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEY2tRN1UwRkRTanRoUVVGTkxFbEJRVWtzVlVGQlZTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTjRRaXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUTJoQ0xFdEJRVXNzZFVKQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVNc1MwRkJTeXgxUWtGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU40UXl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRMnBETzI5Q1FVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzSkVPMU5CUTBvN1lVRkJUU3hKUVVGSkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEZUVJc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzJkQ1FVTm9RaXhMUVVGTExIVkNRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEyeERMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGVFTXNTMEZCU3l4MVFrRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVOcVF6dHZRa0ZEU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU55UkR0VFFVTktPMkZCUVUwN1dVRkRTQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzWkVPMGxCUTB3c1EwRkJRenREUVVOS08wRkJPVVZFTEdkRFFUaEZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogVGhlIG1vZGUgZm9yIHRoZSBxciBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIFFSRGF0YU1vZGU7XHJcbihmdW5jdGlvbiAoUVJEYXRhTW9kZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wibnVtYmVyXCJdID0gMV0gPSBcIm51bWJlclwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhbHBoYWJldCBhbmQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcImFscGhhTnVtZXJpY1wiXSA9IDJdID0gXCJhbHBoYU51bWVyaWNcIjtcclxuICAgIC8qKlxyXG4gICAgICogOGJpdCBieXRlXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcImJ5dGU4XCJdID0gNF0gPSBcImJ5dGU4XCI7XHJcbn0pKFFSRGF0YU1vZGUgPSBleHBvcnRzLlFSRGF0YU1vZGUgfHwgKGV4cG9ydHMuUVJEYXRhTW9kZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkVZWFJoVFc5a1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGIyUmxiSE12Y1hKRVlYUmhUVzlrWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3T3p0SFFVZEhPMEZCUTBnc1NVRkJXU3hWUVdWWU8wRkJaa1FzVjBGQldTeFZRVUZWTzBsQlEyeENPenRQUVVWSE8wbEJRMGdzSzBOQlFXVXNRMEZCUVR0SlFVVm1PenRQUVVWSE8wbEJRMGdzTWtSQlFYRkNMRU5CUVVFN1NVRkZja0k3TzA5QlJVYzdTVUZEU0N3MlEwRkJZeXhEUVVGQk8wRkJRMnhDTEVOQlFVTXNSVUZtVnl4VlFVRlZMRWRCUVZZc2EwSkJRVlVzUzBGQlZpeHJRa0ZCVlN4UlFXVnlRaUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBxckFscGhhTnVtZXJpY18xID0gcmVxdWlyZShcIi4vZGF0YS9xckFscGhhTnVtZXJpY1wiKTtcclxuY29uc3QgcXJCeXRlOF8xID0gcmVxdWlyZShcIi4vZGF0YS9xckJ5dGU4XCIpO1xyXG5jb25zdCBxck51bWJlcl8xID0gcmVxdWlyZShcIi4vZGF0YS9xck51bWJlclwiKTtcclxuY29uc3QgYml0QnVmZmVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2JpdEJ1ZmZlclwiKTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9tYXRoSGVscGVyXCIpO1xyXG5jb25zdCBwb2x5bm9taWFsXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BvbHlub21pYWxcIik7XHJcbmNvbnN0IHFySGVscGVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3FySGVscGVyXCIpO1xyXG5jb25zdCByc0Jsb2NrXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3JzQmxvY2tcIik7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byBnZW5lcmF0ZXMgUVIgY29kZXMgZnJvbSBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciAxIHRvIDQwXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgJ0wnLCdNJywnUScsJ0gnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHR5cGVOdW1iZXIgPSA2LCBlcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih0eXBlTnVtYmVyKSB8fCB0eXBlTnVtYmVyIDwgMSB8fCB0eXBlTnVtYmVyID4gNDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgdHlwZU51bWJlciBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyID49IDEgYW5kIDw9IDQwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuICAgICAgICB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGV4dCBkYXRhIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZFRleHQocXJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhLnB1c2gobmV3IHFyQnl0ZThfMS5RUkJ5dGU4KHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbnVtYmVyIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZE51bWJlcihxckRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xckRhdGEucHVzaChuZXcgcXJOdW1iZXJfMS5RUk51bWJlcihxckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFscGhhIG51bWVyaWMgdG8gdGhlIFFSIENvZGUuXHJcbiAgICAgKiBAcGFyYW0gcXJEYXRhIFRoZSBkYXRhIHRvIGFkZC5cclxuICAgICAqL1xyXG4gICAgYWRkQWxwaGFOdW1lcmljKHFyRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxckFscGhhTnVtZXJpY18xLlFSQWxwaGFOdW1lcmljKHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgZGlzcGxheSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgdGhlIGNlbGwgdG8gZ2VuZXJhdGUuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luIFRoZSBzaXplIG9mIHRoZSBtYXJnaW5zIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQm9vbGVhbiBidWZmZXIgb2YgcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMubWFrZUltcGwoZmFsc2UsIHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO1xyXG4gICAgICAgIGNvbnN0IHBpeGVscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fbW9kdWxlQ291bnQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX21vZHVsZUNvdW50OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1t4XSA9IHBpeGVsc1t4XSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1t4XVt5XSA9IHRoaXMuaXNEYXJrKHksIHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGlzRGFyayhyb3csIGNvbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kdWxlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRCZXN0TWFza1BhdHRlcm4oKSB7XHJcbiAgICAgICAgbGV0IG1pbkxvc3RQb2ludCA9IDA7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUltcGwodHJ1ZSwgaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvc3RQb2ludCA9IHRoaXMuZ2V0TG9zdFBvaW50KCk7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgbWluTG9zdFBvaW50ID0gbG9zdFBvaW50O1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG1ha2VJbXBsKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlQ291bnQgPSB0aGlzLl90eXBlTnVtYmVyICogNCArIDE3O1xyXG4gICAgICAgIHRoaXMuX21vZHVsZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZHVsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlcy5wdXNoKFtdKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9tb2R1bGVDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2ldLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLl9tb2R1bGVDb3VudCAtIDcsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLl9tb2R1bGVDb3VudCAtIDcpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuICAgICAgICB0aGlzLnNldHVwVGltaW5nUGF0dGVybigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGVOdW1iZXIgPj0gNykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubWFwRGF0YShkYXRhLCBtYXNrUGF0dGVybik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG1hcERhdGEoZGF0YSwgbWFza1BhdHRlcm4pIHtcclxuICAgICAgICBsZXQgaW5jID0gLTE7XHJcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuX21vZHVsZUNvdW50IC0gMTtcclxuICAgICAgICBsZXQgYml0SW5kZXggPSA3O1xyXG4gICAgICAgIGxldCBieXRlSW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IG1hc2tGdW5jID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRNYXNrTWV0aG9kKG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSB0aGlzLl9tb2R1bGVDb3VudCAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIGNvbCAtPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFyayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAoKChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXNrID0gbWFza0Z1bmMocm93LCBjb2wgLSBjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAhZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEluZGV4ID0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdyArPSBpbmM7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cgLT0gaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGluYyA9IC1pbmM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLl90eXBlTnVtYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcG9zW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcG9zW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcm93XVtjb2xdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gLTIgfHwgciA9PT0gMiB8fCBjID09PSAtMiB8fCBjID09PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAociA9PT0gMCAmJiBjID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4ocm93LCBjb2wpIHtcclxuICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gNzsgcisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IHJvdyArIHJcclxuICAgICAgICAgICAgICAgICAgICB8fCBjb2wgKyBjIDw9IC0xIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoMCA8PSByICYmIHIgPD0gNiAmJiAoYyA9PT0gMCB8fCBjID09PSA2KSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PT0gMCB8fCByID09PSA2KSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFRpbWluZ1BhdHRlcm4oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDg7IHIgPCB0aGlzLl9tb2R1bGVDb3VudCAtIDg7IHIrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyXVs2XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyXVs2XSA9IHIgJSAyID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBjID0gODsgYyA8IHRoaXMuX21vZHVsZUNvdW50IC0gODsgYysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzWzZdW2NdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzZdW2NdID0gYyAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFR5cGVOdW1iZXIodGVzdCkge1xyXG4gICAgICAgIGNvbnN0IGJpdHMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEJDSFR5cGVOdW1iZXIodGhpcy5fdHlwZU51bWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbfn4oaSAvIDMpXVtpICUgMyArIHRoaXMuX21vZHVsZUNvdW50IC0gOCAtIDNdID1cclxuICAgICAgICAgICAgICAgICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpICUgMyArIHRoaXMuX21vZHVsZUNvdW50IC0gOCAtIDNdW35+KGkgLyAzKV0gPVxyXG4gICAgICAgICAgICAgICAgIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xyXG4gICAgICAgIGNvbnN0IGJpdHMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xyXG4gICAgICAgIC8vIHZlcnRpY2FsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9ICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1t0aGlzLl9tb2R1bGVDb3VudCAtIDE1ICsgaV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaG9yaXpvbnRhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2QgPSAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdW3RoaXMuX21vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZml4ZWRcclxuICAgICAgICB0aGlzLl9tb2R1bGVzW3RoaXMuX21vZHVsZUNvdW50IC0gOF1bOF0gPSAhdGVzdDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0TG9zdFBvaW50KCkge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZUNvdW50ID0gdGhpcy5fbW9kdWxlQ291bnQ7XHJcbiAgICAgICAgbGV0IGxvc3RQb2ludCA9IDA7XHJcbiAgICAgICAgLy8gTEVWRUwxXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXJrID0gdGhpcy5pc0Rhcmsocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IC0xOyByIDw9IDE7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyByIDwgMCB8fCBtb2R1bGVDb3VudCA8PSByb3cgKyByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gLTE7IGMgPD0gMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gMCAmJiBjID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGFyayA9PT0gdGhpcy5pc0Rhcmsocm93ICsgciwgY29sICsgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNhbWVDb3VudCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDJcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDAgfHwgY291bnQgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDNcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSA2OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3csIGNvbCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgMylcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdywgY29sICsgNSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyAyLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgMywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDQsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93ICsgNSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDYsIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUw0XHJcbiAgICAgICAgbGV0IGRhcmtDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhcmtDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gTWF0aC5hYnMoMTAwICogZGFya0NvdW50IC8gbW9kdWxlQ291bnQgLyBtb2R1bGVDb3VudCAtIDUwKSAvIDU7XHJcbiAgICAgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XHJcbiAgICAgICAgcmV0dXJuIGxvc3RQb2ludDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlRGF0YSgpIHtcclxuICAgICAgICBjb25zdCByc0Jsb2NrcyA9IHJzQmxvY2tfMS5SU0Jsb2NrLmdldFJTQmxvY2tzKHRoaXMuX3R5cGVOdW1iZXIsIHRoaXMuX2Vycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgYml0QnVmZmVyXzEuQml0QnVmZmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9xckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX3FyRGF0YVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldE1vZGUoKSwgNCk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgZGF0YS5nZXRMZW5ndGhJbkJpdHModGhpcy5fdHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhbGMgbWF4IGRhdGEgY291bnRcclxuICAgICAgICBsZXQgdG90YWxEYXRhQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBRUiBjb2RlIHRvIHN0b3JlIHRoZSBkYXRhLCAke2J1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKX0gPiAke3RvdGFsRGF0YUNvdW50ICogOH0sIHRyeSBpbmNyZWFzaW5nIHRoZSB0eXBlTnVtYmVyIGZyb20gJHt0aGlzLl90eXBlTnVtYmVyfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbmRcclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCgwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIucHV0KFFSLlBBRDAsIDgpO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dChRUi5QQUQxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcykge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhEY0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RWNDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGNkYXRhID0gW107XHJcbiAgICAgICAgY29uc3QgZWNkYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBkY2RhdGEucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGVjZGF0YS5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTnVtQXJyYXkobGVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkY0NvdW50ID0gcnNCbG9ja3Nbcl0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVjQ291bnQgPSByc0Jsb2Nrc1tyXS5nZXRUb3RhbENvdW50KCkgLSBkY0NvdW50O1xyXG4gICAgICAgICAgICBtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XHJcbiAgICAgICAgICAgIG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuICAgICAgICAgICAgZGNkYXRhW3JdID0gY3JlYXRlTnVtQXJyYXkoZGNDb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkY2RhdGFbcl1baV0gPSAweEZGICYgYnVmZmVyLmdldEJ1ZmZlcigpW2kgKyBvZmZzZXRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xyXG4gICAgICAgICAgICBjb25zdCByc1BvbHkgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhd1BvbHkgPSBuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XHJcbiAgICAgICAgICAgIGVjZGF0YVtyXSA9IGNyZWF0ZU51bUFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldEF0KG1vZEluZGV4KSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsQ29kZUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29kZUNvdW50ICs9IHJzQmxvY2tzW2ldLmdldFRvdGFsQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGNyZWF0ZU51bUFycmF5KHRvdGFsQ29kZUNvdW50KTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZGNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhFY0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBlY2RhdGFbcl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSBlY2RhdGFbcl1baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVIuUEFEMCA9IDB4RUM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUi5QQUQxID0gMHgxMTtcclxuZXhwb3J0cy5RUiA9IFFSO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmNYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUdRVUZwUmp0QlFVTnFSaXd3UkVGQmRVUTdRVUZEZGtRc05FTkJRWGxETzBGQlEzcERMRGhEUVVFeVF6dEJRVU16UXl4dFJFRkJaMFE3UVVGRGFFUXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVOc1JDeHBSRUZCT0VNN1FVRkRPVU1zSzBOQlFUUkRPMEZCUXpWRExHdEZRVUVyUkR0QlFVa3ZSRHM3TzBkQlIwYzdRVUZEU0R0SlFYRkNTVHM3T3p0UFFVbEhPMGxCUTBnc1dVRkJXU3hoUVVGeFFpeERRVUZETEVWQlFVVXNiMEpCUVhWRExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1VVRkRNVVlzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU14UlN4TlFVRk5MRXRCUVVzc1EwRkJReXcwUkVGQk5FUXNRMEZCUXl4RFFVRkRPMU5CUXpkRk8xRkJRMFFzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExHbENRVUZwUWl4RFFVRkRPMUZCUXpWRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlc1Q0xIVkNRVUZWTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVThzUTBGQlF5eE5RVUZqTzFGQlEzcENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NhVUpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRMRU5CUVVNc1RVRkJZenRSUVVNelFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxHMUNRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzWlVGQlpTeERRVUZETEUxQlFXTTdVVUZEYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N3clFrRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYkVRc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmFFUXNUVUZCVFN4TlFVRk5MRWRCUVdVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM2hETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU40UXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRE5VSXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEhRVUZYTEVWQlFVVXNSMEZCVnp0UlFVTnVReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlEyeERMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOc1F6dGhRVUZOTzFsQlEwZ3NUMEZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR3RDUVVGclFqdFJRVU4wUWl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV2hDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkZlRUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmRrSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFsQlJYUkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeFpRVUZaTEVkQlFVY3NVMEZCVXl4RlFVRkZPMmRDUVVOeVF5eFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRPMmRDUVVONlFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTJZN1UwRkRTanRSUVVWRUxFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVVVGQlVTeERRVUZETEVsQlFXRXNSVUZCUlN4WFFVRnRRanRSUVVNdlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTTVReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjRReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGVFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRMMEk3VTBGRFNqdFJRVVZFTEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRja01zU1VGQlNTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVY2UkN4SlFVRkpMRU5CUVVNc01FSkJRVEJDTEVWQlFVVXNRMEZCUXp0UlFVTnNReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJRenRSUVVVeFFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVYwUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZET1VJN1VVRkZSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkZMMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRGNFTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hQUVVGUExFTkJRVU1zU1VGQll5eEZRVUZGTEZkQlFXMUNPMUZCUXk5RExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJJc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ5UkN4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVVnlSQ3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTFnc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dGhRVU5hTzFsQlJVUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRMmhDTEU5QlFVOHNTVUZCU1N4RlFVRkZPMmRDUVVWVUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUlhoQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZPM2RDUVVWMFF5eEpRVUZKTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN2QwSkJSV3BDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3TkVKQlEzcENMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2VVSkJRM1pFTzNkQ1FVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8zZENRVVZ3UXl4SlFVRkpMRWxCUVVrc1JVRkJSVHMwUWtGRFRpeEpRVUZKTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNN2VVSkJRMmhDTzNkQ1FVVkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dDNRa0ZEYmtNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF6dDNRa0ZGWkN4SlFVRkpMRkZCUVZFc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUczBRa0ZEYWtJc1UwRkJVeXhGUVVGRkxFTkJRVU03TkVKQlExb3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenQ1UWtGRGFFSTdjVUpCUTBvN2FVSkJRMG83WjBKQlJVUXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJRenRuUWtGRldDeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeEhRVUZITEVWQlFVVTdiMEpCUTNKRExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTTdiMEpCUTFnc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETzI5Q1FVTllMRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU03YVVKQlEyaENPMkZCUTBvN1UwRkRTanRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNNRUpCUVRCQ08xRkJRemxDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRzFDUVVGUkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlJURkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJXcERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVVnFReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMjVDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJUdHZRa0ZEYkVNc1UwRkJVenRwUWtGRFdqdG5Ra0ZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlJURkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdDNRa0ZGTVVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN0swSkJRM1pETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdORUpCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN2VVSkJRekZET3paQ1FVRk5PelJDUVVOSUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN2VVSkJRek5ETzNGQ1FVTktPMmxDUVVOS08yRkJRMG83VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2VVSkJRWGxDTEVOQlFVTXNSMEZCVnl4RlFVRkZMRWRCUVZjN1VVRkRkRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNN2RVSkJRekZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU5zUkN4VFFVRlRPMmxDUVVOYU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0MVFrRkRka01zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dDFRa0ZETVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRek5ETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03YVVKQlF6RkRPM0ZDUVVGTk8yOUNRVU5JTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03YVVKQlF6TkRPMkZCUTBvN1UwRkRTanRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhMEpCUVd0Q08xRkJRM1JDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8yZENRVU01UWl4VFFVRlRPMkZCUTFvN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNKRE8xRkJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRelZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1owSkJRemxDTEZOQlFWTTdZVUZEV2p0WlFVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEY2tNN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEdWQlFXVXNRMEZCUXl4SlFVRmhPMUZCUTJwRExFMUJRVTBzU1VGQlNTeEhRVUZITEcxQ1FVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSWHBFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRla0lzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRGRrUXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGVFTTdVVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkVMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzaERPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeGhRVUZoTEVOQlFVTXNTVUZCWVN4RlFVRkZMRmRCUVcxQ08xRkJRM0JFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVU14UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXh0UWtGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVVelF5eFhRVUZYTzFGQlExZ3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVWNlFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVVUzUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExQXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkROMEk3YVVKQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5rTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRoUVVOcVF6dHBRa0ZCVFR0blFrRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRoUVVOMFJEdFRRVU5LTzFGQlJVUXNZVUZCWVR0UlFVTmlMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRmVrSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZGTjBNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUTNKRU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU14UXp0cFFrRkJUVHRuUWtGRFNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRM1JETzFOQlEwbzdVVUZGUkN4UlFVRlJPMUZCUTFJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUTNCRUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNXVUZCV1R0UlFVTm9RaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUlhSRExFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVnNRaXhUUVVGVE8xRkJSVlFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVVjRReXhMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1YwRkJWeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVVjRReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJ4Q0xFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVVnVReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUlRGQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1YwRkJWeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVTdkMEpCUTNaRExGTkJRVk03Y1VKQlExbzdiMEpCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzNkQ1FVVXhRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRmRCUVZjc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGT3pSQ1FVTjJReXhUUVVGVE8zbENRVU5hTzNkQ1FVVkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPelJDUVVOd1FpeFRRVUZUTzNsQ1FVTmFPM2RDUVVWRUxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRM2hETEZOQlFWTXNSVUZCUlN4RFFVRkRPM2xDUVVObU8zRkNRVU5LTzJsQ1FVTktPMmRDUVVWRUxFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRaaXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU53UXp0aFFVTktPMU5CUTBvN1VVRkZSQ3hUUVVGVE8xRkJSVlFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkROVU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8ybENRVUZGTzJkQ1FVTjJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4TFFVRkxMRVZCUVVVc1EwRkJRenRwUWtGQlJUdG5Ra0ZETTBNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN2FVSkJRVVU3WjBKQlF6TkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4TFFVRkxMRVZCUVVVc1EwRkJRenRwUWtGQlJUdG5Ra0ZETDBNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVN2IwSkJRelZDTEZOQlFWTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRMnhDTzJGQlEwbzdVMEZEU2p0UlFVVkVMRk5CUVZNN1VVRkZWQ3hMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1YwRkJWeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEzaERMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVTTFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenQxUWtGRGJFSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM1ZDUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNWQ1FVTjZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zVkNRVU42UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM1ZDUVVONlFpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdkVUpCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZET1VJc1UwRkJVeXhKUVVGSkxFVkJRVVVzUTBGQlF6dHBRa0ZEYmtJN1lVRkRTanRUUVVOS08xRkJSVVFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTjRReXhMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkROVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEyeENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenQxUWtGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXp0MVFrRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZEZWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenQxUWtGRGVrSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRPM1ZDUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdiMEpCUXpsQ0xGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdhVUpCUTI1Q08yRkJRMG83VTBGRFNqdFJRVVZFTEZOQlFWTTdVVUZGVkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmJFSXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFF5eExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVONFF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTjJRaXhUUVVGVExFVkJRVVVzUTBGQlF6dHBRa0ZEWmp0aFFVTktPMU5CUTBvN1VVRkZSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhUUVVGVExFZEJRVWNzVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRE4wVXNVMEZCVXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmVFSXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VlFVRlZPMUZCUTJRc1RVRkJUU3hSUVVGUkxFZEJRV01zYVVKQlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVVV6Uml4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxIRkNRVUZUTEVWQlFVVXNRMEZCUXp0UlFVVXZRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVU1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEZEVJN1VVRkZSQ3h6UWtGQmMwSTdVVUZEZEVJc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzWkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzUkRMR05CUVdNc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1UwRkRhRVE3VVVGRlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1IwRkJSeXhqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zSzBSQlFTdEVMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzVFVGQlRTeGpRVUZqTEVkQlFVY3NRMEZCUXl4M1EwRkJkME1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRPVXc3VVVGRlJDeE5RVUZOTzFGQlEwNHNTVUZCU1N4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEpRVUZKTEdOQlFXTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRjRVFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNFSTdVVUZGUkN4VlFVRlZPMUZCUTFZc1QwRkJUeXhOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM2hDTzFGQlJVUXNWVUZCVlR0UlFVTldMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU5vUWl4UFFVRlBMRWxCUVVrc1JVRkJSVHRaUVVOVUxFbEJRVWtzVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4SlFVRkpMR05CUVdNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyaEVMRTFCUVUwN1lVRkRWRHRaUVVORUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVYyUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzU1VGQlNTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOb1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUTJoQ08ybENRVUZOTzJkQ1FVTklMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFFqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTTVReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZkQlFWY3NRMEZCUXl4TlFVRnBRaXhGUVVGRkxGRkJRVzFDTzFGQlEzUkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZtTEVsQlFVa3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOdVFpeEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZia0lzVFVGQlRTeE5RVUZOTEVkQlFXVXNSVUZCUlN4RFFVRkRPMUZCUXpsQ0xFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVVTVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJoQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRia0k3VVVGRlJDeDNRa0ZCZDBJc1IwRkJWenRaUVVNdlFpeE5RVUZOTEVOQlFVTXNSMEZCWVN4RlFVRkZMRU5CUVVNN1dVRkRka0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOaU8xbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUlVRc05FSkJRVFJDTzFGQlJUVkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJYUkRMRTFCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRaUVVNelF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUlhSRUxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU16UXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkZNME1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU53UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRka01zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEzaEVPMWxCUTBRc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF6dFpRVVZzUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXh0UWtGQlVTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6TkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzZFVKQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSV3hGTEUxQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEY0VNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1pETEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZETlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRVU3VTBGRFNqdFJRVVZFTEVsQlFVa3NZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFOQlEycEVPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpWRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmtMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmxDUVVOWU8yRkJRMG83VTBGRFNqdFJRVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1JETEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVTllPMkZCUTBvN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN08wRkJhbWxDUkN4bFFVRmxPMEZCUTFNc1QwRkJTU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVU0xUXl4bFFVRmxPMEZCUTFNc1QwRkJTU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVXBvUkN4blFrRnRhVUpESW4wPSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX187Il0sInNvdXJjZVJvb3QiOiIifQ==