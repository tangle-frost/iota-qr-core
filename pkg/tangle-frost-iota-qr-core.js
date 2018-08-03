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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztBQUNBO0FBRUE7Ozs7OztJQUlhLGM7Ozs7O0FBQ1Q7Ozs7QUFJQSwwQkFBWSxJQUFaLEVBQXdCO0FBQUE7O0FBQUEsdUZBQ2Qsd0JB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LEVBMEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0ExQnlELEVBMkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsQ0EzQnlELEVBNEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsR0FBcEIsQ0E1QnlELEVBNkJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E3QnlELEVBOEJ6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0E5QnlELEVBK0J6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0EvQnlELEVBZ0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FoQ3lELEVBaUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FqQ3lELEVBa0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsQ0FsQ3lELEVBbUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FuQ3lELEVBb0N6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsQ0FwQ3lELEVBcUN6RCxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZ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OEJBQWtCLFNBQVMsR0FBVCxFQUFZLFlBQVosRUFBbEI7QUFDSDs7QUFFRCxjQUFJLE9BQU8sZUFBUCxNQUE0QixpQkFBaUIsQ0FBakQsRUFBb0Q7QUFDaEQsaUJBQUssV0FBTCxHQUFtQixVQUFuQjtBQUNBO0FBQ0gsV0FIRCxNQUdPLElBQUksZUFBZSxFQUFuQixFQUF1QjtBQUMxQixrQkFBTSxJQUFJLEtBQUosdUVBQXlFLE9BQU8sZUFBUCxFQUF6RSxnQkFBdUcsaUJBQWlCLENBQXhILGtDQUFOO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7Ozs7O0FBaGtCRDs7O0FBQ3dCLFVBQWUsSUFBZjtBQUN4Qjs7QUFDd0IsVUFBZSxJQUFmO0FBSjVCLGdCOzs7Ozs7Ozs7OztBQ2pCQSwrRiIsImZpbGUiOiJ0YW5nbGUtZnJvc3QtaW90YS1xci1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1jb3JlXCIsIFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLWNvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYW5nbGVGcm9zdElvdGFRckNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSBhbHBoYSBudW1lcmljLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJBbHBoYU51bWVyaWMgZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkFscGhhTnVtZXJpYy5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgcXIgYWxwaGEgbnVtZXJpYy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYywgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IHMgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAxIDwgcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLmdldENvZGUocy5jaGFyQXQoaSkpICogNDUgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb2RlKHMuY2hhckF0KGkgKyAxKSksIDExKTtcclxuICAgICAgICAgICAgaSArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5nZXRDb2RlKHMuY2hhckF0KGkpKSwgNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRDb2RlKGMpIHtcclxuICAgICAgICBpZiAoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IFwiQVwiICYmIGMgPD0gXCJaXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtIFwiQVwiLmNoYXJDb2RlQXQoMCkgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiBcIjogcmV0dXJuIDM2O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiRcIjogcmV0dXJuIDM3O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIiVcIjogcmV0dXJuIDM4O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIipcIjogcmV0dXJuIDM5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIitcIjogcmV0dXJuIDQwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi1cIjogcmV0dXJuIDQxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5cIjogcmV0dXJuIDQyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIi9cIjogcmV0dXJuIDQzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjpcIjogcmV0dXJuIDQ0O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSQWxwaGFOdW1lcmljID0gUVJBbHBoYU51bWVyaWM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkJiSEJvWVU1MWJXVnlhV011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5eGNrRnNjR2hoVG5WdFpYSnBZeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVWc1JEczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExHTkJRV1VzVTBGQlVTeDFRa0ZCVlR0SlFVTXhRenM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrN1VVRkRjRUlzUzBGQlN5eERRVUZETEhWQ1FVRlZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzcERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hMUVVGTExFTkJRVU1zVFVGQmFVSTdVVUZETVVJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVldMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlEwNHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSVHRuUWtGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVNM1FpeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRFZqdFJRVVZFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRFpDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6VkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFBRVUZQTEVOQlFVTXNRMEZCVXp0UlFVVnlRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNNVF6dGhRVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzFsQlF6ZENMRTlCUVU4c1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTnVSRHRoUVVGTk8xbEJRMGdzVVVGQlVTeERRVUZETEVWQlFVVTdaMEpCUTFBc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJN2IwSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTTNSRHRUUVVOS08wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk4wUkVMSGREUVRaRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhQmFzZVwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogUVIgRGF0YSBmb3IgcmVwcmVzZW50aW5nIGEgOCBiaXQgZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSQnl0ZTggZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkJ5dGU4LlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBxciA4IGJpdCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIocXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTgsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0J5dGVzKHRoaXMuZ2V0RGF0YSgpKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0cmluZ1RvQnl0ZXModGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGFbaV0sIDgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RyaW5nVG9CeXRlcyhzdHIpIHtcclxuICAgICAgICBjb25zdCB1dGY4ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoYXJjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChjaGFyY29kZSA8IDB4ODApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaChjaGFyY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhcmNvZGUgPCAweDgwMCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKDB4QzAgfCAoY2hhcmNvZGUgPj4gNiksIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNGKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hhcmNvZGUgPCAweEQ4MDAgfHwgY2hhcmNvZGUgPj0gMHhFMDAwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhFMCB8IChjaGFyY29kZSA+PiAxMiksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDYpICYgMHgzRiksIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNGKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAvLyBVVEYtMTYgZW5jb2RlcyAweDEwMDAwLTB4MTBGRkZGIGJ5XHJcbiAgICAgICAgICAgICAgICAvLyBzdWJ0cmFjdGluZyAweDEwMDAwIGFuZCBzcGxpdHRpbmcgdGhlXHJcbiAgICAgICAgICAgICAgICAvLyAyMCBiaXRzIG9mIDB4MC0weEZGRkZGIGludG8gdHdvIGhhbHZlc1xyXG4gICAgICAgICAgICAgICAgY2hhcmNvZGUgPSAweDEwMDAwICsgKCgoY2hhcmNvZGUgJiAweDNGRikgPDwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgfCAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKDB4RjAgfCAoY2hhcmNvZGUgPj4gMTgpLCAweDgwIHwgKChjaGFyY29kZSA+PiAxMikgJiAweDNGKSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXRmODtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSQnl0ZTggPSBRUkJ5dGU4O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpDZVhSbE9DNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMM0Z5UW5sMFpUZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVOQkxIRkVRVUZyUkR0QlFVTnNSQ3h4UkVGQmEwUTdRVUZGYkVRN096dEhRVWRITzBGQlEwZ3NUVUZCWVN4UFFVRlJMRk5CUVZFc2RVSkJRVlU3U1VGRGJrTTdPenRQUVVkSE8wbEJRMGdzV1VGQldTeEpRVUZaTzFGQlEzQkNMRXRCUVVzc1EwRkJReXgxUWtGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOc1F5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVTBGQlV6dFJRVU5hTEU5QlFVOHNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRja1FzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFdEJRVXNzUTBGQlF5eE5RVUZwUWp0UlFVTXhRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEyaEVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEyeERMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRekZDTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hoUVVGaExFTkJRVU1zUjBGQlZ6dFJRVU0zUWl4TlFVRk5MRWxCUVVrc1IwRkJZU3hGUVVGRkxFTkJRVU03VVVGRE1VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGFrTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVWQlFVVTdaMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1lVRkRka0k3YVVKQlFVMHNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhGUVVGRk8yZENRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkRkRUlzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGRrTTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFZEJRVWNzVFVGQlRTeEpRVUZKTEZGQlFWRXNTVUZCU1N4TlFVRk5MRVZCUVVVN1owSkJRMmhFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVTjJRaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGREwwSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZGtNN2FVSkJRVTA3WjBKQlEwZ3NRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRMG9zY1VOQlFYRkRPMmRDUVVOeVF5eDNRMEZCZDBNN1owSkJRM2hETEhsRFFVRjVRenRuUWtGRGVrTXNVVUZCVVN4SFFVRkhMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8zTkNRVU14UXl4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGJrTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUTNaQ0xFbEJRVWtzUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVU5vUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkRMMElzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGRrTTdVMEZEU2p0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdRMEZEU2p0QlFYcEVSQ3d3UWtGNVJFTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFCYXNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YUJhc2VcIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIFFSIERhdGEgZm9yIHJlcHJlc2VudGluZyBhIG51bWJlci5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSTnVtYmVyIGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJOdW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlciwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlIGRhdGEgaW50byB0aGUgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHdyaXRlIGludG8uXHJcbiAgICAgKi9cclxuICAgIHdyaXRlKGJ1ZmZlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgKyAyIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLnN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAzKSksIDEwKTtcclxuICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMSkpLCA0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLmxlbmd0aCAtIGkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMikpLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RyVG9OdW0ocykge1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBudW0gPSBudW0gKiAxMCArIHRoaXMuY2hhclRvTnVtKHMuY2hhckF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY2hhclRvTnVtKGMpIHtcclxuICAgICAgICBpZiAoYyA+PSBcIjBcIiAmJiBjIDw9IFwiOVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYElsbGVnYWwgY2hhcmFjdGVyIGluIHN0cmluZyA6ICR7Y31gKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSTnVtYmVyID0gUVJOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXhjazUxYldKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc2NVUkJRV3RFTzBGQlEyeEVMSEZFUVVGclJEdEJRVVZzUkRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEZGQlFWTXNVMEZCVVN4MVFrRkJWVHRKUVVOd1F6czdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVms3VVVGRGNFSXNTMEZCU3l4RFFVRkRMSFZDUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hUUVVGVE8xRkJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNUVUZCYVVJN1VVRkRNVUlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSVFZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWV0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFJDeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTFZN1VVRkZSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTJwQ0xFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU4yUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VUTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRemxDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVNeFJEdFRRVU5LTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hSUVVGUkxFTkJRVU1zUTBGQlV6dFJRVU4wUWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFdpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNdlFpeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5vUkR0UlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4VFFVRlRMRU5CUVVNc1EwRkJVenRSUVVOMlFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU01UXp0UlFVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRE1VUXNRMEZCUXp0RFFVTktPMEZCZUVSRUxEUkNRWGRFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIGZvciBtYWludGFpbmluZyBkYXRhIGJpdHMuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBCaXRCdWZmZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVmZmVyID0gW107XHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcclxuICAgIH1cclxuICAgIGdldEJ1ZmZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0TGVuZ3RoSW5CaXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdXQobnVtLCBsZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qml0KCgobnVtID4+PiAobGVuZ3RoIC0gaSAtIDEpKSAmIDEpID09PSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRCaXQoYml0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xlbmd0aCA9PT0gdGhpcy5fYnVmZmVyLmxlbmd0aCAqIDgpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVyW35+KHRoaXMuX2xlbmd0aCAvIDgpXSB8PSAoMHg4MCA+Pj4gKHRoaXMuX2xlbmd0aCAlIDgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoSW5CaXRzKCk7IGkrKykge1xyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5nZXRCaXQoaSkgPyBcIjFcIiA6IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG4gICAgZ2V0Qml0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuICgodGhpcy5fYnVmZmVyW35+KGluZGV4IC8gOCldID4+PiAoNyAtIGluZGV4ICUgOCkpICYgMSkgPT09IDE7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CaXRCdWZmZXIgPSBCaXRCdWZmZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbDBRblZtWm1WeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12WW1sMFFuVm1abVZ5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRk5CUVZNN1NVRkpiRUk3VVVGRFNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOeVFpeERRVUZETzBsQlJVMHNVMEZCVXp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlUwc1pVRkJaVHRSUVVOc1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZOTEVkQlFVY3NRMEZCUXl4SFFVRlhMRVZCUVVVc1RVRkJZenRSUVVOc1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjJSRHRKUVVOTUxFTkJRVU03U1VGRlRTeE5RVUZOTEVOQlFVTXNSMEZCV1R0UlFVTjBRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6RkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNoQ08xRkJRMFFzU1VGQlNTeEhRVUZITEVWQlFVVTdXVUZEVEN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTjJSVHRSUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVTBzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dFRRVU40UXp0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wbEJRMnhDTEVOQlFVTTdTVUZGVHl4TlFVRk5MRU5CUVVNc1MwRkJZVHRSUVVONFFpeFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjZSU3hEUVVGRE8wTkJRMG83UVVFMVEwUXNPRUpCTkVOREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byBoZWxwZXIgd2l0aCBtYXRoLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgTWF0aEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIG1hdGggaGVscGVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBpZiAoIU1hdGhIZWxwZXIuRVhQX1RBQkxFKSB7XHJcbiAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFID0gW107XHJcbiAgICAgICAgICAgIE1hdGhIZWxwZXIuTE9HX1RBQkxFID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFLnB1c2goaSA8IDggPyAxIDw8IGkgOlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2kgLSA0XSBeXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2kgLSA1XSBeXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2kgLSA2XSBeXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2kgLSA4XSk7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRS5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuTE9HX1RBQkxFW01hdGhIZWxwZXIuRVhQX1RBQkxFW2ldXSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbG9nIG9mIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gZ2V0IHRoZSBsb2cgb2YuXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbG9nIG9mIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdsb2codmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgbG9nKCcgKyAke3ZhbHVlfSArICcpJ2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5MT0dfVEFCTEVbdmFsdWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGV4cG9uZW50IG9mIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gZ2V0IHRoZSBleHBvbmVudCBvZi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBleHBvbmVudCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXhwKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB3aGlsZSAobG9jYWxWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgbG9jYWxWYWx1ZSArPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsb2NhbFZhbHVlID49IDI1Nikge1xyXG4gICAgICAgICAgICBsb2NhbFZhbHVlIC09IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuRVhQX1RBQkxFW2xvY2FsVmFsdWVdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTWF0aEhlbHBlciA9IE1hdGhIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRjBhRWhsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDIxaGRHaElaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3pzN1IwRkhSenRCUVVOSUxFMUJRV0VzVlVGQlZUdEpRVTF1UWpzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTzFGQlEzQkNMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEzWkNMRlZCUVZVc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6RkNMRlZCUVZVc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlF6RkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlF6RkNMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRkRU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU16UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUXpOQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRE0wSXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRha01zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFTTdXVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU14UWl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRGNrUTdVMEZEU2p0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZoTzFGQlF6VkNMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5ZTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1YwRkJWeXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzFOQlF6ZERPMUZCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRmhPMUZCUXpWQ0xFbEJRVWtzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTjJRaXhQUVVGUExGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEYmtJc1ZVRkJWU3hKUVVGSkxFZEJRVWNzUTBGQlF6dFRRVU55UWp0UlFVTkVMRTlCUVU4c1ZVRkJWU3hKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVU4wUWl4VlFVRlZMRWxCUVVrc1IwRkJSeXhEUVVGRE8xTkJRM0pDTzFGQlEwUXNUMEZCVHl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1EwRkRTanRCUVhSRVJDeG5RMEZ6UkVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZXByZXNlbnQgYSBwb2x5bm9taWFsLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUG9seW5vbWlhbCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQb2x5bm9taWFsLlxyXG4gICAgICogQHBhcmFtIG51bSBUaGUgbnVtIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHBhcmFtIHNoaWZ0IFRoZSBzaGlmdCBmb3IgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bSwgc2hpZnQgPSAwKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT09IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX251bSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IG51bS5sZW5ndGggLSBvZmZzZXQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9udW0ucHVzaChudW1bb2Zmc2V0ICsgaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaWZ0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbnVtLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGhlIHZhbHVlIG9mIHRoZSBwb2x5bm9taWFsIGF0IGdpdmVuIGluZGV4LlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleC5cclxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgZ2V0QXQoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtW2luZGV4XTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW0ubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBwb2x5bm9taWFsIHRvIGEgc3RyaW5nLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMuZ2V0QXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsb2cgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbG9nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICB0b0xvZ1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIgKz0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBNdWx0aXBseSB0aGUgcG9seW5vbWlhbCB3aXRoIGFub3RoZXIgb25lLlxyXG4gICAgICogQHBhcmFtIGUgVGhlIHBvbHlub21pYWwgdG8gbXVsdGlwbHkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbXVsdGlwbGljYXRpb24gb2YgdGhlIHBvbHlub21pYWxzLlxyXG4gICAgICovXHJcbiAgICBtdWx0aXBseShlKSB7XHJcbiAgICAgICAgY29uc3QgbnVtID0gW107XHJcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBudW1baSArIGpdIF49IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAobWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KGkpKSArXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KGopKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5bm9taWFsKG51bSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbW9kdWx1cyBvZiB0aGUgcG9seW5vbWlhbCBmcm9tIGFub3RoZXIuXHJcbiAgICAgKiBAcGFyYW0gZSBUaGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtb2R1bGVzIG9mIHRoZSBwb2x5bm9taWFscy5cclxuICAgICAqL1xyXG4gICAgbW9kKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRMZW5ndGgoKSAtIGUuZ2V0TGVuZ3RoKCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYXRpbyA9IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdCgwKSkgLSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoMCkpO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBjb3B5XHJcbiAgICAgICAgY29uc3QgbnVtID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtLnB1c2godGhpcy5nZXRBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnRyYWN0IGFuZCBjYWxjIHJlc3QuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtW2ldIF49IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAobWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KGkpKSArIHJhdGlvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FsbCByZWN1cnNpdmVseVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9seW5vbWlhbChudW0pLm1vZChlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBvbHlub21pYWwgPSBQb2x5bm9taWFsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljRzlzZVc1dmJXbGhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwzQnZiSGx1YjIxcFlXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEWkRRVUV3UXp0QlFVVXhRenM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRlZCUVZVN1NVRkpia0k3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzUjBGQllTeEZRVUZGTEZGQlFXZENMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUldZc1QwRkJUeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRTFCUVUwc1JVRkJSU3hEUVVGRE8xTkJRMW83VVVGRlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVObUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMmhETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1RE8xRkJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTFRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVFqdEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3l4RFFVRkRMRXRCUVdFN1VVRkRkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFRRVUZUTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5vUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzWkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEVUN4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRE8yRkJRMnBDTzFsQlEwUXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBJN1VVRkRSQ3hQUVVGUExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1YwRkJWenRSUVVOa0xFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNaRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRVQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETzJGQlEycENPMWxCUTBRc1RVRkJUU3hKUVVGSkxIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTFRenRSUVVORUxFOUJRVThzVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVVVGQlVTeERRVUZETEVOQlFXRTdVVUZEZWtJc1RVRkJUU3hIUVVGSExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlEzcENMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEycEVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5tTzFGQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4yUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTndReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM2hFTEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JETzFOQlEwbzdVVUZEUkN4UFFVRlBMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1IwRkJSeXhEUVVGRExFTkJRV0U3VVVGRGNFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOMFF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0VFFVTm1PMUZCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzZFVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVV6UlN4alFVRmpPMUZCUTJRc1RVRkJUU3hIUVVGSExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlEzcENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZGtNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wSTdVVUZGUkN3d1FrRkJNRUk3VVVGRE1VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzZFVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc2RVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8xRkJSVVFzYlVKQlFXMUNPMUZCUTI1Q0xFOUJRVThzU1VGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1EwRkRTanRCUVhaSVJDeG5RMEYxU0VNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG5jb25zdCBtYXNrUGF0dGVybl8xID0gcmVxdWlyZShcIi4uL21vZGVscy9tYXNrUGF0dGVyblwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG5jb25zdCBtYXRoSGVscGVyXzEgPSByZXF1aXJlKFwiLi9tYXRoSGVscGVyXCIpO1xyXG5jb25zdCBwb2x5bm9taWFsXzEgPSByZXF1aXJlKFwiLi9wb2x5bm9taWFsXCIpO1xyXG4vKipcclxuICogSGVscGVyIG1ldGhvZHMgZm9yIFFSIGdlbmVyYXRpb24uXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcGF0dGVybiBwb3NpdGlvbiBmb3IgdGhlIGdpdmVuIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgcGF0dGVybiBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcGF0dGVybiBmb3IgdGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UGF0dGVyblBvc2l0aW9uKHR5cGVOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gUVJIZWxwZXIuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWF4IGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHBhcmFtIG1vZGUgVGhlIGRhdGEgbW9kZSB0byBnZXQgZGF0YSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCBUaGUgZXJyb3IgY29ycmVjdGlvbiB0byBnZXQgdGhlIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1heCBsZW5ndGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXhMZW5ndGgodHlwZU51bWJlciwgbW9kZSwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBjb25zdCB0ID0gdHlwZU51bWJlciAtIDE7XHJcbiAgICAgICAgbGV0IGUgPSAwO1xyXG4gICAgICAgIGxldCBtID0gMDtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5MOlxyXG4gICAgICAgICAgICAgICAgZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLk06XHJcbiAgICAgICAgICAgICAgICBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuICAgICAgICAgICAgICAgIGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5IOlxyXG4gICAgICAgICAgICAgICAgZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBlcnJvciBjb3JyZWN0aW9uIGxldmVsICR7ZXJyb3JDb3JyZWN0TGV2ZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjpcclxuICAgICAgICAgICAgICAgIG0gPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOlxyXG4gICAgICAgICAgICAgICAgbSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODpcclxuICAgICAgICAgICAgICAgIG0gPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZGF0YSBtb2RlICR7bW9kZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFFSSGVscGVyLk1BWF9MRU5HVEhbdF1bZV1bbV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXJyb3IgY29ycmVjdGlvbiBwb2x5bm9taWFsIGZvciB0aGUgZXJyb3IgY29ycmVjdG8gbGVuZ3RoLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExlbmd0aCBUaGUgZXJyb3IgY29ycmVjdGlvbiBsZW5ndGggdG8gZ2V0IHRoZSBwb2x5bm9taWFsIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb2x5bm9taWFsIGZvciB0aGUgZXJyb3IgY29ycmVjdGlvbiBsZW5ndGguXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVycm9yQ29ycmVjdExlbmd0aCkge1xyXG4gICAgICAgIGxldCBhID0gbmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKFsxXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckNvcnJlY3RMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhID0gYS5tdWx0aXBseShuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoWzEsIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdleHAoaSldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1hc2sgbWV0aG9kIGZvciB0aGUgZ2l2ZW4gcGF0dGVybi5cclxuICAgICAqIEBwYXJhbSBtYXNrUGF0dGVybiBUaGUgcGF0dGVybiB0byBnZXQgdGhlIG1hc2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1hc2sgbWV0aG9kIGZvciB0aGUgcGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldE1hc2tNZXRob2QobWFza1BhdHRlcm4pIHtcclxuICAgICAgICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSArIGopICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IGkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAxMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gaiAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDExOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSArIGopICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICh+fihpIC8gMikgKyB+fihqIC8gMykpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTEwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjExMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtYXNrICR7bWFza1BhdHRlcm59YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEJDSCB0eXBlIGluZm8uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBnZXQgdGhlIEJDSCB0eXBlIGluZm8gZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHR5cGUgaW5mby5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEJDSFR5cGVJbmZvKGRhdGEpIHtcclxuICAgICAgICBsZXQgZCA9IGRhdGEgPDwgMTA7XHJcbiAgICAgICAgd2hpbGUgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC0gUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE1KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKFFSSGVscGVyLkcxNSA8PCAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLVxyXG4gICAgICAgICAgICAgICAgUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE1KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gUVJIZWxwZXIuRzE1X01BU0s7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQkNIIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZ2V0IHRoZSBCQ0ggdHlwZSBudW1iZXIgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIVHlwZU51bWJlcihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhIDw8IDEyO1xyXG4gICAgICAgIHdoaWxlIChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxOCkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChRUkhlbHBlci5HMTggPDwgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC1cclxuICAgICAgICAgICAgICAgIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxOCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChkYXRhIDw8IDEyKSB8IGQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hEaWdpdChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IGRpZ2l0ID0gMDtcclxuICAgICAgICB3aGlsZSAobG9jYWxEYXRhICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0Kys7XHJcbiAgICAgICAgICAgIGxvY2FsRGF0YSA+Pj49IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdpdDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuUEFUVEVSTl9QT1NJVElPTl9UQUJMRSA9IFtcclxuICAgIFtdLFxyXG4gICAgWzYsIDE4XSxcclxuICAgIFs2LCAyMl0sXHJcbiAgICBbNiwgMjZdLFxyXG4gICAgWzYsIDMwXSxcclxuICAgIFs2LCAzNF0sXHJcbiAgICBbNiwgMjIsIDM4XSxcclxuICAgIFs2LCAyNCwgNDJdLFxyXG4gICAgWzYsIDI2LCA0Nl0sXHJcbiAgICBbNiwgMjgsIDUwXSxcclxuICAgIFs2LCAzMCwgNTRdLFxyXG4gICAgWzYsIDMyLCA1OF0sXHJcbiAgICBbNiwgMzQsIDYyXSxcclxuICAgIFs2LCAyNiwgNDYsIDY2XSxcclxuICAgIFs2LCAyNiwgNDgsIDcwXSxcclxuICAgIFs2LCAyNiwgNTAsIDc0XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4XSxcclxuICAgIFs2LCAzMCwgNTYsIDgyXSxcclxuICAgIFs2LCAzMCwgNTgsIDg2XSxcclxuICAgIFs2LCAzNCwgNjIsIDkwXSxcclxuICAgIFs2LCAyOCwgNTAsIDcyLCA5NF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcbiAgICBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcclxuICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcclxuICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcbiAgICBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxyXG4gICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcclxuICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuICAgIFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcclxuICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcclxuICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuICAgIFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuTUFYX0xFTkdUSCA9IFtcclxuICAgIFtbNDEsIDI1LCAxNywgMTBdLCBbMzQsIDIwLCAxNCwgOF0sIFsyNywgMTYsIDExLCA3XSwgWzE3LCAxMCwgNywgNF1dLFxyXG4gICAgW1s3NywgNDcsIDMyLCAyMF0sIFs2MywgMzgsIDI2LCAxNl0sIFs0OCwgMjksIDIwLCAxMl0sIFszNCwgMjAsIDE0LCA4XV0sXHJcbiAgICBbWzEyNywgNzcsIDUzLCAzMl0sIFsxMDEsIDYxLCA0MiwgMjZdLCBbNzcsIDQ3LCAzMiwgMjBdLCBbNTgsIDM1LCAyNCwgMTVdXSxcclxuICAgIFtbMTg3LCAxMTQsIDc4LCA0OF0sIFsxNDksIDkwLCA2MiwgMzhdLCBbMTExLCA2NywgNDYsIDI4XSwgWzgyLCA1MCwgMzQsIDIxXV0sXHJcbiAgICBbWzI1NSwgMTU0LCAxMDYsIDY1XSwgWzIwMiwgMTIyLCA4NCwgNTJdLCBbMTQ0LCA4NywgNjAsIDM3XSwgWzEwNiwgNjQsIDQ0LCAyN11dLFxyXG4gICAgW1szMjIsIDE5NSwgMTM0LCA4Ml0sIFsyNTUsIDE1NCwgMTA2LCA2NV0sIFsxNzgsIDEwOCwgNzQsIDQ1XSwgWzEzOSwgODQsIDU4LCAzNl1dLFxyXG4gICAgW1szNzAsIDIyNCwgMTU0LCA5NV0sIFsyOTMsIDE3OCwgMTIyLCA3NV0sIFsyMDcsIDEyNSwgODYsIDUzXSwgWzE1NCwgOTMsIDY0LCAzOV1dLFxyXG4gICAgW1s0NjEsIDI3OSwgMTkyLCAxMThdLCBbMzY1LCAyMjEsIDE1MiwgOTNdLCBbMjU5LCAxNTcsIDEwOCwgNjZdLCBbMjAyLCAxMjIsIDg0LCA1Ml1dLFxyXG4gICAgW1s1NTIsIDMzNSwgMjMwLCAxNDFdLCBbNDMyLCAyNjIsIDE4MCwgMTExXSwgWzMxMiwgMTg5LCAxMzAsIDgwXSwgWzIzNSwgMTQzLCA5OCwgNjBdXSxcclxuICAgIFtbNjUyLCAzOTUsIDI3MSwgMTY3XSwgWzUxMywgMzExLCAyMTMsIDEzMV0sIFszNjQsIDIyMSwgMTUxLCA5M10sIFsyODgsIDE3NCwgMTE5LCA3NF1dXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpXHJcbiAgICB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApXHJcbiAgICB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTVfTUFTSyA9ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKVxyXG4gICAgfCAoMSA8PCA0KSB8ICgxIDw8IDEpO1xyXG5leHBvcnRzLlFSSGVscGVyID0gUVJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSklaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTl4Y2tobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiVVZCUVdkRk8wRkJRMmhGTEhWRVFVRnZSRHRCUVVOd1JDeHhSRUZCYTBRN1FVRkRiRVFzTmtOQlFUQkRPMEZCUXpGRExEWkRRVUV3UXp0QlFVVXhRenM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRkZCUVZFN1NVRjFSV3BDT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVlVGQmEwSTdVVUZETDBNc1QwRkJUeXhSUVVGUkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkVMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRlZCUVd0Q0xFVkJRVVVzU1VGQlowSXNSVUZCUlN4cFFrRkJiME03VVVGRGFrY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFZpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZWaXhSUVVGUkxHbENRVUZwUWl4RlFVRkZPMWxCUTNaQ0xFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRGRrTXNTMEZCU3l4eFEwRkJhVUlzUTBGQlF5eERRVUZETzJkQ1FVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlFVTXNUVUZCVFR0WlFVTjJReXhMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRM1pETEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEUxQlFVMDdXVUZEZGtNN1owSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clEwRkJhME1zYVVKQlFXbENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRemxGTzFGQlJVUXNVVUZCVVN4SlFVRkpMRVZCUVVVN1dVRkRWaXhMUVVGTExIVkNRVUZWTEVOQlFVTXNUVUZCVFR0blFrRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRTFCUVUwN1dVRkRja01zUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRmxCUVZrN1owSkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkJReXhOUVVGTk8xbEJRek5ETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhMUVVGTE8yZENRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVU1zVFVGQlRUdFpRVU53UXp0blFrRkRTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhGQ1FVRnhRaXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzQkVPMUZCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMR3RDUVVFd1FqdFJRVU01UkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxIVkNRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVFZDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU42UXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEhWQ1FVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzZFVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBRN1VVRkZSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5pTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGdFFqdFJRVU16UXl4UlFVRlJMRmRCUVZjc1JVRkJSVHRaUVVOcVFpeExRVUZMTEhsQ1FVRlhMRU5CUVVNc1ZVRkJWVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZGtRc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hMUVVGTExIbENRVUZYTEVOQlFVTXNWVUZCVlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTJwRUxFdEJRVXNzZVVKQlFWY3NRMEZCUXl4VlFVRlZPMmRDUVVOMlFpeFBRVUZQTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU4yUkN4TFFVRkxMSGxDUVVGWExFTkJRVU1zVlVGQlZUdG5Ra0ZEZGtJc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRrVXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnlSU3hMUVVGTExIbENRVUZYTEVOQlFVTXNWVUZCVlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETTBVc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlJUTkZPMmRDUVVOSkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVRN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCV1R0UlFVTnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTI1Q0xFOUJRVThzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGRFVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU14UXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkROVU03VVVGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZaTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYmtJc1QwRkJUeXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMFJTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRekZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTFRenRSUVVORUxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZaTzFGQlEyNURMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU55UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFpDeFBRVUZQTEZOQlFWTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRjRUlzUzBGQlN5eEZRVUZGTEVOQlFVTTdXVUZEVWl4VFFVRlRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM0JDTzFGQlEwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6czdRVUZvVFVRc1pVRkJaVHRCUVVOVExDdENRVUZ6UWl4SFFVRmxPMGxCUTNwRUxFVkJRVVU3U1VGRFJpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMllzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRia0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyNUNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOd1FpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEY0VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTndRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGNFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNwQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU42UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM3BDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRla0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTTVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTTVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTTVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTTVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTTVRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0RFFVTnFReXhEUVVGRE8wRkJSVVlzWlVGQlpUdEJRVU5UTEcxQ1FVRlZMRWRCUVdsQ08wbEJReTlETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1JTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka1VzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTTFSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETDBVc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEycEdMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUml4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGNFWXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM0pHTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenREUVVONlJpeERRVUZETzBGQlJVWXNaVUZCWlR0QlFVTlRMRmxCUVVjc1IwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkRMMFFzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZhRVFzWlVGQlpUdEJRVU5UTEZsQlFVY3NSMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdUVUZEYWtVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRk0wUXNaVUZCWlR0QlFVTlRMR2xDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wMUJRM1JGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCY2tVNVFpdzBRa0ZyVFVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgUlMgQmxvY2suXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBSU0Jsb2NrIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3N0YW5jZSBvZiBSU0Jsb2NrLlxyXG4gICAgICogQHBhcmFtIHRvdGFsQ291bnQgVGhlIHRvdGFsIGNvdW50IGZvciB0aGUgYmxvY2suXHJcbiAgICAgKiBAcGFyYW0gZGF0YUNvdW50IFRoZSBkYXRhIGNvdW50IGZvciB0aGUgYmxvY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRvdGFsQ291bnQsIGRhdGFDb3VudCkge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG4gICAgICAgIHRoaXMuX2RhdGFDb3VudCA9IGRhdGFDb3VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IFJTIEJsb2NrcyBmb3IgdGhlIHR5cGUgbnVtYmVyIGFuZCBlcnJvciBjb3JyZWN0IGxldmVsLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsIFRoZSBlcnJvciBjb3JyZWN0IGxldmVsLlxyXG4gICAgICogQHJldHVybnMgVGhlIFJTIEJsb2Nrcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgY29uc3QgcnNCbG9jayA9IFJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSByc0Jsb2NrW2kgKiAzICsgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3IFJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBnZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBzd2l0Y2ggKGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5MOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLk06XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuUTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5IOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGVycm9yIGNvcnJlY3QgbGV2ZWwgJHtlcnJvckNvcnJlY3RMZXZlbH1gKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhIGNvdW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgY291bnQuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGFDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUNvdW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRvdGFsIGNvdW50LlxyXG4gICAgICogQHJldHVybnMgVGhlIHRvdGFsIGNvdW50LlxyXG4gICAgICovXHJcbiAgICBnZXRUb3RhbENvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbENvdW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5SU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xyXG4gICAgLy8gTFxyXG4gICAgLy8gTVxyXG4gICAgLy8gUVxyXG4gICAgLy8gSFxyXG4gICAgLy8gMVxyXG4gICAgWzEsIDI2LCAxOV0sXHJcbiAgICBbMSwgMjYsIDE2XSxcclxuICAgIFsxLCAyNiwgMTNdLFxyXG4gICAgWzEsIDI2LCA5XSxcclxuICAgIC8vIDJcclxuICAgIFsxLCA0NCwgMzRdLFxyXG4gICAgWzEsIDQ0LCAyOF0sXHJcbiAgICBbMSwgNDQsIDIyXSxcclxuICAgIFsxLCA0NCwgMTZdLFxyXG4gICAgLy8gM1xyXG4gICAgWzEsIDcwLCA1NV0sXHJcbiAgICBbMSwgNzAsIDQ0XSxcclxuICAgIFsyLCAzNSwgMTddLFxyXG4gICAgWzIsIDM1LCAxM10sXHJcbiAgICAvLyA0XHJcbiAgICBbMSwgMTAwLCA4MF0sXHJcbiAgICBbMiwgNTAsIDMyXSxcclxuICAgIFsyLCA1MCwgMjRdLFxyXG4gICAgWzQsIDI1LCA5XSxcclxuICAgIC8vIDVcclxuICAgIFsxLCAxMzQsIDEwOF0sXHJcbiAgICBbMiwgNjcsIDQzXSxcclxuICAgIFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcbiAgICBbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxyXG4gICAgLy8gNlxyXG4gICAgWzIsIDg2LCA2OF0sXHJcbiAgICBbNCwgNDMsIDI3XSxcclxuICAgIFs0LCA0MywgMTldLFxyXG4gICAgWzQsIDQzLCAxNV0sXHJcbiAgICAvLyA3XHJcbiAgICBbMiwgOTgsIDc4XSxcclxuICAgIFs0LCA0OSwgMzFdLFxyXG4gICAgWzIsIDMyLCAxNCwgNCwgMzMsIDE1XSxcclxuICAgIFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXHJcbiAgICAvLyA4XHJcbiAgICBbMiwgMTIxLCA5N10sXHJcbiAgICBbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxyXG4gICAgWzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcclxuICAgIFs0LCA0MCwgMTQsIDIsIDQxLCAxNV0sXHJcbiAgICAvLyA5XHJcbiAgICBbMiwgMTQ2LCAxMTZdLFxyXG4gICAgWzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuICAgIFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXHJcbiAgICBbNCwgMzYsIDEyLCA0LCAzNywgMTNdLFxyXG4gICAgLy8gMTBcclxuICAgIFsyLCA4NiwgNjgsIDIsIDg3LCA2OV0sXHJcbiAgICBbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxyXG4gICAgWzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgIFs2LCA0MywgMTUsIDIsIDQ0LCAxNl0sXHJcbiAgICAvLyAxMVxyXG4gICAgWzQsIDEwMSwgODFdLFxyXG4gICAgWzEsIDgwLCA1MCwgNCwgODEsIDUxXSxcclxuICAgIFs0LCA1MCwgMjIsIDQsIDUxLCAyM10sXHJcbiAgICBbMywgMzYsIDEyLCA4LCAzNywgMTNdLFxyXG4gICAgLy8gMTJcclxuICAgIFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcclxuICAgIFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcbiAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG4gICAgWzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcclxuICAgIC8vIDEzXHJcbiAgICBbNCwgMTMzLCAxMDddLFxyXG4gICAgWzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcclxuICAgIFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcbiAgICBbMTIsIDMzLCAxMSwgNCwgMzQsIDEyXSxcclxuICAgIC8vIDE0XHJcbiAgICBbMywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuICAgIFs0LCA2NCwgNDAsIDUsIDY1LCA0MV0sXHJcbiAgICBbMTEsIDM2LCAxNiwgNSwgMzcsIDE3XSxcclxuICAgIFsxMSwgMzYsIDEyLCA1LCAzNywgMTNdLFxyXG4gICAgLy8gMTVcclxuICAgIFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcclxuICAgIFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXHJcbiAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgWzExLCAzNiwgMTIsIDcsIDM3LCAxM10sXHJcbiAgICAvLyAxNlxyXG4gICAgWzUsIDEyMiwgOTgsIDEsIDEyMywgOTldLFxyXG4gICAgWzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgIFsxNSwgNDMsIDE5LCAyLCA0NCwgMjBdLFxyXG4gICAgWzMsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcbiAgICAvLyAxN1xyXG4gICAgWzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuICAgIFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXHJcbiAgICAvLyAxOFxyXG4gICAgWzUsIDE1MCwgMTIwLCAxLCAxNTEsIDEyMV0sXHJcbiAgICBbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG4gICAgWzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXHJcbiAgICBbMiwgNDIsIDE0LCAxOSwgNDMsIDE1XSxcclxuICAgIC8vIDE5XHJcbiAgICBbMywgMTQxLCAxMTMsIDQsIDE0MiwgMTE0XSxcclxuICAgIFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxyXG4gICAgWzE3LCA0NywgMjEsIDQsIDQ4LCAyMl0sXHJcbiAgICBbOSwgMzksIDEzLCAxNiwgNDAsIDE0XSxcclxuICAgIC8vIDIwXHJcbiAgICBbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgIFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG4gICAgWzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXHJcbiAgICBbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXHJcbiAgICAvLyAyMVxyXG4gICAgWzQsIDE0NCwgMTE2LCA0LCAxNDUsIDExN10sXHJcbiAgICBbMTcsIDY4LCA0Ml0sXHJcbiAgICBbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuICAgIFsxOSwgNDYsIDE2LCA2LCA0NywgMTddLFxyXG4gICAgLy8gMjJcclxuICAgIFsyLCAxMzksIDExMSwgNywgMTQwLCAxMTJdLFxyXG4gICAgWzE3LCA3NCwgNDZdLFxyXG4gICAgWzcsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXHJcbiAgICBbMzQsIDM3LCAxM10sXHJcbiAgICAvLyAyM1xyXG4gICAgWzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXHJcbiAgICBbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcclxuICAgIC8vIDI0XHJcbiAgICBbNiwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuICAgIFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG4gICAgWzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG4gICAgWzMwLCA0NiwgMTYsIDIsIDQ3LCAxN10sXHJcbiAgICAvLyAyNVxyXG4gICAgWzgsIDEzMiwgMTA2LCA0LCAxMzMsIDEwN10sXHJcbiAgICBbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcclxuICAgIFs3LCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxyXG4gICAgWzIyLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG4gICAgLy8gMjZcclxuICAgIFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcclxuICAgIFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG4gICAgWzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcclxuICAgIC8vIDI3XHJcbiAgICBbOCwgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuICAgIFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgWzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXHJcbiAgICBbMTIsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcbiAgICAvLyAyOFxyXG4gICAgWzMsIDE0NywgMTE3LCAxMCwgMTQ4LCAxMThdLFxyXG4gICAgWzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXHJcbiAgICBbNCwgNTQsIDI0LCAzMSwgNTUsIDI1XSxcclxuICAgIFsxMSwgNDUsIDE1LCAzMSwgNDYsIDE2XSxcclxuICAgIC8vIDI5XHJcbiAgICBbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcclxuICAgIFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG4gICAgWzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMFxyXG4gICAgWzUsIDE0NSwgMTE1LCAxMCwgMTQ2LCAxMTZdLFxyXG4gICAgWzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG4gICAgWzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxyXG4gICAgWzIzLCA0NSwgMTUsIDI1LCA0NiwgMTZdLFxyXG4gICAgLy8gMzFcclxuICAgIFsxMywgMTQ1LCAxMTUsIDMsIDE0NiwgMTE2XSxcclxuICAgIFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxyXG4gICAgWzQyLCA1NCwgMjQsIDEsIDU1LCAyNV0sXHJcbiAgICBbMjMsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMlxyXG4gICAgWzE3LCAxNDUsIDExNV0sXHJcbiAgICBbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICBbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXHJcbiAgICBbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXHJcbiAgICAvLyAzM1xyXG4gICAgWzE3LCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG4gICAgWzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG4gICAgWzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxyXG4gICAgWzExLCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzRcclxuICAgIFsxMywgMTQ1LCAxMTUsIDYsIDE0NiwgMTE2XSxcclxuICAgIFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuICAgIFs0NCwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG4gICAgWzU5LCA0NiwgMTYsIDEsIDQ3LCAxN10sXHJcbiAgICAvLyAzNVxyXG4gICAgWzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxyXG4gICAgWzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG4gICAgWzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxyXG4gICAgLy8gMzZcclxuICAgIFs2LCAxNTEsIDEyMSwgMTQsIDE1MiwgMTIyXSxcclxuICAgIFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG4gICAgWzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG4gICAgWzIsIDQ1LCAxNSwgNjQsIDQ2LCAxNl0sXHJcbiAgICAvLyAzN1xyXG4gICAgWzE3LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG4gICAgWzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxyXG4gICAgWzQ5LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG4gICAgWzI0LCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzhcclxuICAgIFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcclxuICAgIFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuICAgIFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcclxuICAgIC8vIDM5XHJcbiAgICBbMjAsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcbiAgICBbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuICAgIFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuICAgIFsxMCwgNDUsIDE1LCA2NywgNDYsIDE2XSxcclxuICAgIC8vIDQwXHJcbiAgICBbMTksIDE0OCwgMTE4LCA2LCAxNDksIDExOV0sXHJcbiAgICBbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXHJcbiAgICBbMzQsIDU0LCAyNCwgMzQsIDU1LCAyNV0sXHJcbiAgICBbMjAsIDQ1LCAxNSwgNjEsIDQ2LCAxNl1cclxuXTtcclxuZXhwb3J0cy5SU0Jsb2NrID0gUlNCbG9jaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY25OQ2JHOWpheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwzSnpRbXh2WTJzdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEcxRlFVRm5SVHRCUVVWb1JUczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExFOUJRVTg3U1VFMFVHaENPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMRlZCUVd0Q0xFVkJRVVVzVTBGQmFVSTdVVUZETjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZEYUVNc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4VlFVRnJRaXhGUVVGRkxHbENRVUZ2UXp0UlFVTTVSU3hOUVVGTkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUTNaRkxFMUJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV3hETEUxQlFVMHNTVUZCU1N4SFFVRmpMRVZCUVVVc1EwRkJRenRSUVVVelFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlRkQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycERMRTFCUVUwc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhKRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUXpWQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtRN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVFVGQlRTeERRVUZETEdWQlFXVXNRMEZCUXl4VlFVRnJRaXhGUVVGRkxHbENRVUZ2UXp0UlFVTnVSaXhSUVVGUkxHbENRVUZwUWl4RlFVRkZPMWxCUTNaQ0xFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGRGNFSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUTNCQ0xFOUJRVThzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROVVFzUzBGQlN5eHhRMEZCYVVJc1EwRkJReXhEUVVGRE8yZENRVU53UWl4UFFVRlBMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkVMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkRjRUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeFJRVUZSTzFOQlExZzdVVUZGUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExDdENRVUVyUWl4cFFrRkJhVUlzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEZUVVc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRmxCUVZrN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR0ZCUVdFN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03TzBGQk9WUkVMR1ZCUVdVN1FVRkRVeXh6UWtGQll5eEhRVUZsTzBsQlJXcEVMRWxCUVVrN1NVRkRTaXhKUVVGSk8wbEJRMG9zU1VGQlNUdEpRVU5LTEVsQlFVazdTVUZEU2l4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVZXTEVsQlFVazdTVUZEU2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSVmdzU1VGQlNUdEpRVU5LTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZXQ3hKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVldMRWxCUVVrN1NVRkRTaXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTJJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMFFpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWWUxFbEJRVWs3U1VGRFNpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhSQ0xFbEJRVWs3U1VGRFNpeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRMklzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTmlMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZGtJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETVVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVZhTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGVFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEyUXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRrSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZka0lzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03UTBGRE0wSXNRMEZCUXp0QlFYWlFUaXd3UWtGblZVTWlmUT09IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3FyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzTUVKQlFYRkNPMEZCUlhKQ0xHZEVRVUV5UXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgdG8gdXNlIGZvciB0aGUgUVIgQ29kZS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBFcnJvckNvcnJlY3RMZXZlbDtcclxuKGZ1bmN0aW9uIChFcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiA3JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIkxcIl0gPSAxXSA9IFwiTFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNSVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJNXCJdID0gMF0gPSBcIk1cIjtcclxuICAgIC8qKlxyXG4gICAgICogMjUlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiUVwiXSA9IDNdID0gXCJRXCI7XHJcbiAgICAvKipcclxuICAgICAqIDMwJVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIkhcIl0gPSAyXSA9IFwiSFwiO1xyXG59KShFcnJvckNvcnJlY3RMZXZlbCA9IGV4cG9ydHMuRXJyb3JDb3JyZWN0TGV2ZWwgfHwgKGV4cG9ydHMuRXJyb3JDb3JyZWN0TGV2ZWwgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laWEp5YjNKRGIzSnlaV04wVEdWMlpXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmJXOWtaV3h6TDJWeWNtOXlRMjl5Y21WamRFeGxkbVZzTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4SlFVRlpMR2xDUVc5Q1dEdEJRWEJDUkN4WFFVRlpMR2xDUVVGcFFqdEpRVU42UWpzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdTVUZGVERzN1QwRkZSenRKUVVOSUxHMUVRVUZMTEVOQlFVRTdRVUZEVkN4RFFVRkRMRVZCY0VKWExHbENRVUZwUWl4SFFVRnFRaXg1UWtGQmFVSXNTMEZCYWtJc2VVSkJRV2xDTEZGQmIwSTFRaUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTWFzayBwYXR0ZXJucyBmb3IgUVIgY29kZXMuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgTWFza1BhdHRlcm47XHJcbihmdW5jdGlvbiAoTWFza1BhdHRlcm4pIHtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAwMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMDBcIl0gPSAwXSA9IFwiUEFUVEVSTjAwMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDAxXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAwMVwiXSA9IDFdID0gXCJQQVRURVJOMDAxXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMTBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDEwXCJdID0gMl0gPSBcIlBBVFRFUk4wMTBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAxMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMTFcIl0gPSAzXSA9IFwiUEFUVEVSTjAxMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTAwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjEwMFwiXSA9IDRdID0gXCJQQVRURVJOMTAwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMDFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTAxXCJdID0gNV0gPSBcIlBBVFRFUk4xMDFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDExMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMTBcIl0gPSA2XSA9IFwiUEFUVEVSTjExMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTExXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjExMVwiXSA9IDddID0gXCJQQVRURVJOMTExXCI7XHJcbn0pKE1hc2tQYXR0ZXJuID0gZXhwb3J0cy5NYXNrUGF0dGVybiB8fCAoZXhwb3J0cy5NYXNrUGF0dGVybiA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnphMUJoZEhSbGNtNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmJXOWtaV3h6TDIxaGMydFFZWFIwWlhKdUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeEpRVUZaTEZkQmQwTllPMEZCZUVORUxGZEJRVmtzVjBGQlZ6dEpRVU51UWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3U1VGRmJFSTdPMDlCUlVjN1NVRkRTQ3g1UkVGQmEwSXNRMEZCUVR0SlFVVnNRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdTVUZGYkVJN08wOUJSVWM3U1VGRFNDeDVSRUZCYTBJc1EwRkJRVHRKUVVWc1FqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1FVRkRkRUlzUTBGQlF5eEZRWGhEVnl4WFFVRlhMRWRCUVZnc2JVSkJRVmNzUzBGQldDeHRRa0ZCVnl4UlFYZERkRUlpZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4vcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIEJhc2UgY2xhc3MgZm9yIHN0b3JpbmcgUVIgRGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJEYXRhQmFzZS5cclxuICAgICAqIEBwYXJhbSBtb2RlIFRoZSBtb2RlIGZvciB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2RlLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YSBtb2RlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEgbW9kZS5cclxuICAgICAqL1xyXG4gICAgZ2V0TW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIGluIGJpdHMgb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBsZW5ndGggZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBpbiBiaXRzLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGhJbkJpdHModHlwZU51bWJlcikge1xyXG4gICAgICAgIGlmICh0eXBlTnVtYmVyID49IDEgJiYgdHlwZU51bWJlciA8IDEwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gOTtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiA4O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA8IDI3KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gMTE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlTnVtYmVyIDwgNDEpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDE0O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiAxMztcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdHlwZU51bWJlciAke3R5cGVOdW1iZXJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJEYXRhQmFzZSA9IFFSRGF0YUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkVZWFJoUW1GelpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGIyUmxiSE12Y1hKRVlYUmhRbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzTmtOQlFUQkRPMEZCUlRGRE96czdSMEZIUnp0QlFVTklMRTFCUVhOQ0xGVkJRVlU3U1VGTk5VSTdPenM3VDBGSlJ6dEpRVU5JTEZsQlFWa3NTVUZCWjBJc1JVRkJSU3hKUVVGWk8xRkJRM1JETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZqUkRzN096dFBRVWxITzBsQlEwa3NaVUZCWlN4RFFVRkRMRlZCUVd0Q08xRkJRM0pETEVsQlFVa3NWVUZCVlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlEzQkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEYUVJc1MwRkJTeXgxUWtGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU5zUXl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM1pETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRhRU03YjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGNrUTdVMEZEU2p0aFFVRk5MRWxCUVVrc1ZVRkJWU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU40UWl4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlEyaENMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGJFTXNTMEZCU3l4MVFrRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVONFF5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUTJwRE8yOUNRVU5KTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM0pFTzFOQlEwbzdZVUZCVFN4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGVFSXNVVUZCVVN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU5vUWl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRMnhETEV0QlFVc3NkVUpCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRlRU1zUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTnFRenR2UWtGRFNTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOeVJEdFRRVU5LTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1pFTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCT1VWRUxHZERRVGhGUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFRoZSBtb2RlIGZvciB0aGUgcXIgZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBRUkRhdGFNb2RlO1xyXG4oZnVuY3Rpb24gKFFSRGF0YU1vZGUpIHtcclxuICAgIC8qKlxyXG4gICAgICogbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcIm51bWJlclwiXSA9IDFdID0gXCJudW1iZXJcIjtcclxuICAgIC8qKlxyXG4gICAgICogYWxwaGFiZXQgYW5kIG51bWJlclxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJhbHBoYU51bWVyaWNcIl0gPSAyXSA9IFwiYWxwaGFOdW1lcmljXCI7XHJcbiAgICAvKipcclxuICAgICAqIDhiaXQgYnl0ZVxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJieXRlOFwiXSA9IDRdID0gXCJieXRlOFwiO1xyXG59KShRUkRhdGFNb2RlID0gZXhwb3J0cy5RUkRhdGFNb2RlIHx8IChleHBvcnRzLlFSRGF0YU1vZGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpFWVhSaFRXOWtaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXRiMlJsYkhNdmNYSkVZWFJoVFc5a1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN096dEhRVWRITzBGQlEwZ3NTVUZCV1N4VlFXVllPMEZCWmtRc1YwRkJXU3hWUVVGVk8wbEJRMnhDT3p0UFFVVkhPMGxCUTBnc0swTkJRV1VzUTBGQlFUdEpRVVZtT3p0UFFVVkhPMGxCUTBnc01rUkJRWEZDTEVOQlFVRTdTVUZGY2tJN08wOUJSVWM3U1VGRFNDdzJRMEZCWXl4RFFVRkJPMEZCUTJ4Q0xFTkJRVU1zUlVGbVZ5eFZRVUZWTEVkQlFWWXNhMEpCUVZVc1MwRkJWaXhyUWtGQlZTeFJRV1Z5UWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3QgcXJBbHBoYU51bWVyaWNfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJBbHBoYU51bWVyaWNcIik7XHJcbmNvbnN0IHFyQnl0ZThfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJCeXRlOFwiKTtcclxuY29uc3QgcXJOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcXJOdW1iZXJcIik7XHJcbmNvbnN0IGJpdEJ1ZmZlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9iaXRCdWZmZXJcIik7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvbWF0aEhlbHBlclwiKTtcclxuY29uc3QgcG9seW5vbWlhbF8xID0gcmVxdWlyZShcIi4vaGVscGVycy9wb2x5bm9taWFsXCIpO1xyXG5jb25zdCBxckhlbHBlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9xckhlbHBlclwiKTtcclxuY29uc3QgcnNCbG9ja18xID0gcmVxdWlyZShcIi4vaGVscGVycy9yc0Jsb2NrXCIpO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2Vycm9yQ29ycmVjdExldmVsXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gZ2VuZXJhdGVzIFFSIGNvZGVzIGZyb20gZGF0YS5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgMCB0byA0MCwgMCBtZWFucyBhdXRvZGV0ZWN0XHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgJ0wnLCdNJywnUScsJ0gnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHR5cGVOdW1iZXIgPSA2LCBlcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih0eXBlTnVtYmVyKSB8fCB0eXBlTnVtYmVyIDwgMCB8fCB0eXBlTnVtYmVyID4gNDApIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgdHlwZU51bWJlciBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgbnVtYmVyID49IDAgYW5kIDw9IDQwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuICAgICAgICB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdGV4dCBkYXRhIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZFRleHQocXJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhLnB1c2gobmV3IHFyQnl0ZThfMS5RUkJ5dGU4KHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgbnVtYmVyIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZE51bWJlcihxckRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xckRhdGEucHVzaChuZXcgcXJOdW1iZXJfMS5RUk51bWJlcihxckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFscGhhIG51bWVyaWMgdG8gdGhlIFFSIENvZGUuXHJcbiAgICAgKiBAcGFyYW0gcXJEYXRhIFRoZSBkYXRhIHRvIGFkZC5cclxuICAgICAqL1xyXG4gICAgYWRkQWxwaGFOdW1lcmljKHFyRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxckFscGhhTnVtZXJpY18xLlFSQWxwaGFOdW1lcmljKHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgZGlzcGxheSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gY2VsbFNpemUgVGhlIHNpemUgb2YgdGhlIGNlbGwgdG8gZ2VuZXJhdGUuXHJcbiAgICAgKiBAcGFyYW0gbWFyZ2luIFRoZSBzaXplIG9mIHRoZSBtYXJnaW5zIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQm9vbGVhbiBidWZmZXIgb2YgcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYXV0b0RldGVjdFR5cGVOdW1iZXIoKTtcclxuICAgICAgICB0aGlzLm1ha2VJbXBsKGZhbHNlLCB0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKTtcclxuICAgICAgICBjb25zdCBwaXhlbHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX21vZHVsZUNvdW50OyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9tb2R1bGVDb3VudDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbeF0gPSBwaXhlbHNbeF0gfHwgW107XHJcbiAgICAgICAgICAgICAgICBwaXhlbHNbeF1beV0gPSB0aGlzLmlzRGFyayh5LCB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl4ZWxzO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBpc0Rhcmsocm93LCBjb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZXNbcm93XVtjb2xdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0QmVzdE1hc2tQYXR0ZXJuKCkge1xyXG4gICAgICAgIGxldCBtaW5Mb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBsb3N0UG9pbnQgPSB0aGlzLmdldExvc3RQb2ludCgpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtYWtlSW1wbCh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIHRoaXMuX21vZHVsZUNvdW50ID0gdGhpcy5fdHlwZU51bWJlciAqIDQgKyAxNztcclxuICAgICAgICB0aGlzLl9tb2R1bGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9tb2R1bGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXMucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbW9kdWxlQ291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpXS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5fbW9kdWxlQ291bnQgLSA3LCAwKTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgdGhpcy5fbW9kdWxlQ291bnQgLSA3KTtcclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTtcclxuICAgICAgICB0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlTnVtYmVyID49IDcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cFR5cGVOdW1iZXIodGVzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgICAgICB0aGlzLm1hcERhdGEoZGF0YSwgbWFza1BhdHRlcm4pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBtYXBEYXRhKGRhdGEsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgbGV0IGluYyA9IC0xO1xyXG4gICAgICAgIGxldCByb3cgPSB0aGlzLl9tb2R1bGVDb3VudCAtIDE7XHJcbiAgICAgICAgbGV0IGJpdEluZGV4ID0gNztcclxuICAgICAgICBsZXQgYnl0ZUluZGV4ID0gMDtcclxuICAgICAgICBjb25zdCBtYXNrRnVuYyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0TWFza01ldGhvZChtYXNrUGF0dGVybik7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5fbW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xyXG4gICAgICAgICAgICBpZiAoY29sID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBjb2wgLT0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDI7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sIC0gY10gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhcmsgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFzayA9IG1hc2tGdW5jKHJvdywgY29sIC0gYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrID0gIWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3cgKz0gaW5jO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93IC09IGluYztcclxuICAgICAgICAgICAgICAgICAgICBpbmMgPSAtaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRQYXR0ZXJuUG9zaXRpb24odGhpcy5fdHlwZU51bWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwb3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHBvc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IHBvc1tqXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IC0yOyByIDw9IDI7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMjsgYyA8PSAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPT09IC0yIHx8IHIgPT09IDIgfHwgYyA9PT0gLTIgfHwgYyA9PT0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHIgPT09IDAgJiYgYyA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKHJvdywgY29sKSB7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IC0xOyByIDw9IDc7IHIrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjID0gLTE7IGMgPD0gNzsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSByb3cgKyByXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgY29sICsgYyA8PSAtMSB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKDAgPD0gciAmJiByIDw9IDYgJiYgKGMgPT09IDAgfHwgYyA9PT0gNikpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKDAgPD0gYyAmJiBjIDw9IDYgJiYgKHIgPT09IDAgfHwgciA9PT0gNikpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKDIgPD0gciAmJiByIDw9IDQgJiYgMiA8PSBjICYmIGMgPD0gNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUaW1pbmdQYXR0ZXJuKCkge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSA4OyByIDwgdGhpcy5fbW9kdWxlQ291bnQgLSA4OyByKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcl1bNl0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcl1bNl0gPSByICUgMiA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDg7IGMgPCB0aGlzLl9tb2R1bGVDb3VudCAtIDg7IGMrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1s2XVtjXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s2XVtjXSA9IGMgJSAyID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUeXBlTnVtYmVyKHRlc3QpIHtcclxuICAgICAgICBjb25zdCBiaXRzID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMuX3R5cGVOdW1iZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW35+KGkgLyAzKV1baSAlIDMgKyB0aGlzLl9tb2R1bGVDb3VudCAtIDggLSAzXSA9XHJcbiAgICAgICAgICAgICAgICAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaSAlIDMgKyB0aGlzLl9tb2R1bGVDb3VudCAtIDggLSAzXVt+fihpIC8gMyldID1cclxuICAgICAgICAgICAgICAgICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSAodGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwgPDwgMykgfCBtYXNrUGF0dGVybjtcclxuICAgICAgICBjb25zdCBiaXRzID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtcclxuICAgICAgICAvLyB2ZXJ0aWNhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2QgPSAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2ldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbdGhpcy5fbW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhvcml6b250YWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgICAgIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVt0aGlzLl9tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVsxNSAtIGkgLSAxICsgMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdWzE1IC0gaSAtIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeGVkXHJcbiAgICAgICAgdGhpcy5fbW9kdWxlc1t0aGlzLl9tb2R1bGVDb3VudCAtIDhdWzhdID0gIXRlc3Q7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldExvc3RQb2ludCgpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGVDb3VudCA9IHRoaXMuX21vZHVsZUNvdW50O1xyXG4gICAgICAgIGxldCBsb3N0UG9pbnQgPSAwO1xyXG4gICAgICAgIC8vIExFVkVMMVxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzYW1lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGFyayA9IHRoaXMuaXNEYXJrKHJvdywgY29sKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSAxOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDE7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgYyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhcmsgPT09IHRoaXMuaXNEYXJrKHJvdyArIHIsIGNvbCArIGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYW1lQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzYW1lQ291bnQgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUwyXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSAxOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDE7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93ICsgMSwgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwIHx8IGNvdW50ID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUwzXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgMilcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDMpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA0KVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3csIGNvbCArIDUpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgMiwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDMsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyA0LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdyArIDUsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyA2LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMNFxyXG4gICAgICAgIGxldCBkYXJrQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xyXG4gICAgICAgIGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG4gICAgICAgIHJldHVybiBsb3N0UG9pbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZURhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgcnNCbG9ja3MgPSByc0Jsb2NrXzEuUlNCbG9jay5nZXRSU0Jsb2Nrcyh0aGlzLl90eXBlTnVtYmVyLCB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IGJpdEJ1ZmZlcl8xLkJpdEJ1ZmZlcigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9xckRhdGFbaV07XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIGRhdGEuZ2V0TGVuZ3RoSW5CaXRzKHRoaXMuX3R5cGVOdW1iZXIpKTtcclxuICAgICAgICAgICAgZGF0YS53cml0ZShidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYWxjIG1heCBkYXRhIGNvdW50XHJcbiAgICAgICAgbGV0IHRvdGFsRGF0YUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmdldERhdGFDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgUVIgY29kZSB0byBzdG9yZSB0aGUgZGF0YSwgJHtidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCl9ID4gJHt0b3RhbERhdGFDb3VudCAqIDh9LCB0cnkgaW5jcmVhc2luZyB0aGUgdHlwZU51bWJlciBmcm9tICR7dGhpcy5fdHlwZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZW5kXHJcbiAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBhZGRpbmdcclxuICAgICAgICB3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPT0gMCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0Qml0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyLnB1dChRUi5QQUQwLCA4KTtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoUVIuUEFEMSwgOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcyk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBsZXQgbWF4RGNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IG1heEVjQ291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGRjZGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGVjZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgZGNkYXRhLnB1c2goW10pO1xyXG4gICAgICAgICAgICBlY2RhdGEucHVzaChbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU51bUFycmF5KGxlbikge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGEucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxyXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmdldERhdGFDb3VudCgpO1xyXG4gICAgICAgICAgICBjb25zdCBlY0NvdW50ID0gcnNCbG9ja3Nbcl0uZ2V0VG90YWxDb3VudCgpIC0gZGNDb3VudDtcclxuICAgICAgICAgICAgbWF4RGNDb3VudCA9IE1hdGgubWF4KG1heERjQ291bnQsIGRjQ291bnQpO1xyXG4gICAgICAgICAgICBtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XHJcbiAgICAgICAgICAgIGRjZGF0YVtyXSA9IGNyZWF0ZU51bUFycmF5KGRjQ291bnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGNkYXRhW3JdW2ldID0gMHhGRiAmIGJ1ZmZlci5nZXRCdWZmZXIoKVtpICsgb2Zmc2V0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gZGNDb3VudDtcclxuICAgICAgICAgICAgY29uc3QgcnNQb2x5ID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCByYXdQb2x5ID0gbmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKGRjZGF0YVtyXSwgcnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZFBvbHkgPSByYXdQb2x5Lm1vZChyc1BvbHkpO1xyXG4gICAgICAgICAgICBlY2RhdGFbcl0gPSBjcmVhdGVOdW1BcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZEluZGV4ID0gaSArIG1vZFBvbHkuZ2V0TGVuZ3RoKCkgLSBlY2RhdGFbcl0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZWNkYXRhW3JdW2ldID0gKG1vZEluZGV4ID49IDApID8gbW9kUG9seS5nZXRBdChtb2RJbmRleCkgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0b3RhbENvZGVDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS5nZXRUb3RhbENvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVOdW1BcnJheSh0b3RhbENvZGVDb3VudCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGRjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RWNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZWNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZWNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGF1dG9EZXRlY3RUeXBlTnVtYmVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90eXBlTnVtYmVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHR5cGVOdW1iZXIgPSAxOyB0eXBlTnVtYmVyIDw9IDQwOyB0eXBlTnVtYmVyKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJzQmxvY2tzID0gcnNCbG9ja18xLlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IGJpdEJ1ZmZlcl8xLkJpdEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9xckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fcXJEYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgZGF0YS5nZXRMZW5ndGhJbkJpdHModHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3R5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA9PT0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIFFSIGNvZGUgdG8gc3RvcmUgdGhlIGRhdGEsICR7YnVmZmVyLmdldExlbmd0aEluQml0cygpfSA+ICR7dG90YWxEYXRhQ291bnQgKiA4fSwgdHlwZU51bWJlciBjYW4gbm90IGJlID4gNDBgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVIuUEFEMCA9IDB4RUM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUi5QQUQxID0gMHgxMTtcclxuZXhwb3J0cy5RUiA9IFFSO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmNYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUdRVUZwUmp0QlFVTnFSaXd3UkVGQmRVUTdRVUZEZGtRc05FTkJRWGxETzBGQlEzcERMRGhEUVVFeVF6dEJRVU16UXl4dFJFRkJaMFE3UVVGRGFFUXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVOc1JDeHBSRUZCT0VNN1FVRkRPVU1zSzBOQlFUUkRPMEZCUXpWRExHdEZRVUVyUkR0QlFVa3ZSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRVZCUVVVN1NVRnhRbGc3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzWVVGQmNVSXNRMEZCUXl4RlFVRkZMRzlDUVVGMVF5eHhRMEZCYVVJc1EwRkJReXhEUVVGRE8xRkJRekZHTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZETVVVc1RVRkJUU3hMUVVGTExFTkJRVU1zTkVSQlFUUkVMRU5CUVVNc1EwRkJRenRUUVVNM1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRSUVVNMVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWdVFpeDFRa0ZCVlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTEVOQlFVTXNUVUZCWXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMR2xDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1UwRkJVeXhEUVVGRExFMUJRV003VVVGRE0wSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeHRRa0ZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEdWQlFXVXNRMEZCUXl4TlFVRmpPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc0swSkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNRMEZCUXp0UlFVVTFRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUldoRUxFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjRReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRlRU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUXpWQ0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1F6dFRRVU5LTzFGQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1NVRkRiRUlzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1IwRkJWeXhGUVVGRkxFZEJRVmM3VVVGRGJrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSVHRaUVVOc1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYkVNN1lVRkJUVHRaUVVOSUxFOUJRVThzUzBGQlN5eERRVUZETzFOQlEyaENPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHJRa0ZCYTBJN1VVRkRkRUlzU1VGQlNTeFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJYaENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhaQ0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRaUVVWMFF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUlVGQlJUdG5Ra0ZEY2tNc1dVRkJXU3hIUVVGSExGTkJRVk1zUTBGQlF6dG5Ra0ZEZWtJc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRkZCUVZFc1EwRkJReXhKUVVGaExFVkJRVVVzVjBGQmJVSTdVVUZETDBNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRGJrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF5OUNPMU5CUTBvN1VVRkZSQ3hKUVVGSkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hKUVVGSkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZla1FzU1VGQlNTeERRVUZETERCQ1FVRXdRaXhGUVVGRkxFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTTdVVUZGTVVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkZkRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemxDTzFGQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlJTOUNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNUMEZCVHl4RFFVRkRMRWxCUVdNc1JVRkJSU3hYUVVGdFFqdFJRVU12UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5pTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaERMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc2JVSkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkZja1FzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRmNrUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU5ZTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRXanRaUVVWRUxFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTm9RaXhQUVVGUExFbEJRVWtzUlVGQlJUdG5Ra0ZGVkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVVY0UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJUdDNRa0ZGZEVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETzNkQ1FVVnFRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTjJSRHQzUWtGRlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkZjRU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdORUpCUTA0c1NVRkJTU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETzNsQ1FVTm9RanQzUWtGRlJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN2QwSkJRMjVETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNN2QwSkJSV1FzU1VGQlNTeFJRVUZSTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN05FSkJRMnBDTEZOQlFWTXNSVUZCUlN4RFFVRkRPelJDUVVOYUxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUTJoQ08zRkNRVU5LTzJsQ1FVTktPMmRDUVVWRUxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTTdaMEpCUlZnc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1IwRkJSeXhGUVVGRk8yOUNRVU55UXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRE8yOUNRVU5ZTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJRenR2UWtGRFdDeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMmxDUVVOb1FqdGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxEQkNRVUV3UWp0UlFVTTVRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVeFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVWcVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmFrTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnVRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJSVzVDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN2IwSkJRMnhETEZOQlFWTTdhVUpCUTFvN1owSkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVVeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2QwSkJSVEZDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZET3l0Q1FVTjJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk96UkNRVU42UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzNsQ1FVTXhRenMyUWtGQlRUczBRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzNsQ1FVTXpRenR4UWtGRFNqdHBRa0ZEU2p0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEhsQ1FVRjVRaXhEUVVGRExFZEJRVmNzUlVGQlJTeEhRVUZYTzFGQlEzUkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU14UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlF6RkNMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzNWQ1FVTXhReXhIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRiRVFzVTBGQlV6dHBRa0ZEV2p0blFrRkZSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03ZFVKQlEzWkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2RVSkJRekZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTXpReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPMmxDUVVNeFF6dHhRa0ZCVFR0dlFrRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPMmxDUVVNelF6dGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxHdENRVUZyUWp0UlFVTjBRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRPVUlzVTBGQlV6dGhRVU5hTzFsQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU55UXp0UlFVTkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTTFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTzJkQ1FVTTVRaXhUUVVGVE8yRkJRMW83V1VGRFJDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM0pETzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hsUVVGbExFTkJRVU1zU1VGQllUdFJRVU5xUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXh0UWtGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVjZSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNaRUxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNoRE8xRkJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMlJDeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVONFF6dEpRVU5NTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1lVRkJZU3hEUVVGRExFbEJRV0VzUlVGQlJTeFhRVUZ0UWp0UlFVTndSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZGTTBNc1YwRkJWenRSUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZGZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkZOME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJGQlF6ZENPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZEYWtNN2FVSkJRVTA3WjBKQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZEZEVRN1UwRkRTanRSUVVWRUxHRkJRV0U3VVVGRFlpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlhwQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJSVGRETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFVDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU55UkR0cFFrRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRNVU03YVVKQlFVMDdaMEpCUTBnc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVTjBRenRUUVVOS08xRkJSVVFzVVVGQlVUdFJRVU5TTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF6dEpRVU53UkN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGbEJRVms3VVVGRGFFSXNUVUZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVVYwUXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmJFSXNVMEZCVXp0UlFVVlVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRmVFTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5zUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRmJrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVVV4UWl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEZkQlFWY3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRk8zZENRVU4yUXl4VFFVRlRPM0ZDUVVOYU8yOUNRVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHQzUWtGRk1VSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeFhRVUZYTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSVHMwUWtGRGRrTXNVMEZCVXp0NVFrRkRXanQzUWtGRlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUczBRa0ZEY0VJc1UwRkJVenQ1UWtGRFdqdDNRa0ZGUkN4SlFVRkpMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGT3pSQ1FVTjRReXhUUVVGVExFVkJRVVVzUTBGQlF6dDVRa0ZEWmp0eFFrRkRTanRwUWtGRFNqdG5Ra0ZGUkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFVkJRVVU3YjBKQlEyWXNVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0cFFrRkRjRU03WVVGRFNqdFRRVU5LTzFGQlJVUXNVMEZCVXp0UlFVVlVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlF6VkRMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzJkQ1FVTTFReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXp0cFFrRkJSVHRuUWtGRGRrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN2IwSkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTTdhVUpCUVVVN1owSkJRek5ETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVRkZPMmRDUVVNelF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTTdhVUpCUVVVN1owSkJReTlETEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzI5Q1FVTTFRaXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETzJsQ1FVTnNRanRoUVVOS08xTkJRMG83VVVGRlJDeFRRVUZUTzFGQlJWUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFF5eExRVUZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRE5VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTJ4Q0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQxUWtGRGVrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0MVFrRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZEZWtJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zVkNRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVN2IwSkJRemxDTEZOQlFWTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2FVSkJRMjVDTzJGQlEwbzdVMEZEU2p0UlFVVkVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlF6VkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPM1ZDUVVOc1FpeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEzcENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRM3BDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTNwQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dDFRa0ZETVVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU01UWl4VFFVRlRMRWxCUVVrc1JVRkJSU3hEUVVGRE8ybENRVU51UWp0aFFVTktPMU5CUTBvN1VVRkZSQ3hUUVVGVE8xRkJSVlFzU1VGQlNTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUld4Q0xFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEZUVNc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGRrSXNVMEZCVXl4RlFVRkZMRU5CUVVNN2FVSkJRMlk3WVVGRFNqdFRRVU5LTzFGQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NVMEZCVXl4SFFVRkhMRmRCUVZjc1IwRkJSeXhYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpkRkxGTkJRVk1zU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUlhoQ0xFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVlVGQlZUdFJRVU5rTEUxQlFVMHNVVUZCVVN4SFFVRmpMR2xDUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1VVRkZNMFlzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4eFFrRkJVeXhGUVVGRkxFTkJRVU03VVVGRkwwSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6RkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZET1VJc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM1JDTzFGQlJVUXNjMEpCUVhOQ08xRkJRM1JDTEVsQlFVa3NZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzFOQlEyaEVPMUZCUlVRc1NVRkJTU3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVkQlFVY3NZMEZCWXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMQ3RFUVVFclJDeE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVU1zZDBOQlFYZERMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6bE1PMUZCUlVRc1RVRkJUVHRSUVVOT0xFbEJRVWtzVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzQkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNCQ08xRkJSVVFzVlVGQlZUdFJRVU5XTEU5QlFVOHNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTjRRanRSUVVWRUxGVkJRVlU3VVVGRFZpeEpRVUZKTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVWQlFVVTdXVUZEVkN4SlFVRkpMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzU1VGQlNTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOb1JDeE5RVUZOTzJGQlExUTdXVUZEUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZka0lzU1VGQlNTeE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWxCUVVrc1kwRkJZeXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYUVRc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF6dGhRVU5vUWp0cFFrRkJUVHRuUWtGRFNDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVJN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRE9VTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hYUVVGWExFTkJRVU1zVFVGQmFVSXNSVUZCUlN4UlFVRnRRanRSUVVOMFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZaaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXNUNMRTFCUVUwc1RVRkJUU3hIUVVGbExFVkJRVVVzUTBGQlF6dFJRVU01UWl4TlFVRk5MRTFCUVUwc1IwRkJaU3hGUVVGRkxFTkJRVU03VVVGRk9VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGRFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5vUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyNUNPMUZCUlVRc1UwRkJVeXhqUVVGakxFTkJRVU1zUjBGQlZ6dFpRVU12UWl4TlFVRk5MRU5CUVVNc1IwRkJZU3hGUVVGRkxFTkJRVU03V1VGRGRrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE1VSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5pTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRZaXhEUVVGRE8xRkJSVVFzTkVKQlFUUkNPMUZCUlRWQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlhSRExFMUJRVTBzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dFpRVU16UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRE8xbEJSWFJFTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTXpReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRk0wTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0WlFVTndReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGRrTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTNoRU8xbEJRMFFzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXp0WlFVVnNRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUXpORUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NkVUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJXeEZMRTFCUVUwc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia1FzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkROVVFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFFVTdVMEZEU2p0UlFVVkVMRWxCUVVrc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4alFVRmpMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMU5CUTJwRU8xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NZMEZCWXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8xRkJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWa0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNSRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6TkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8ybENRVU5ZTzJGQlEwbzdVMEZEU2p0UlFVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmxDUVVOWU8yRkJRMG83VTBGRFNqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNiMEpCUVc5Q08xRkJRM2hDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGVFSXNTMEZCU3l4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFVkJRVVVzVlVGQlZTeEpRVUZKTEVWQlFVVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGRGNrUXNUVUZCVFN4UlFVRlJMRWRCUVVjc2FVSkJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMmRDUVVNeFJTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMSEZDUVVGVExFVkJRVVVzUTBGQlF6dG5Ra0ZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVNeFF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTTNRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZET1VJc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNdlJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8ybENRVU4wUWp0blFrRkZSQ3hKUVVGSkxHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNaQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVOMFF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzJsQ1FVTm9SRHRuUWtGRlJDeEpRVUZKTEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTm9SQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXp0dlFrRkRPVUlzVFVGQlRUdHBRa0ZEVkR0eFFrRkJUU3hKUVVGSkxGVkJRVlVzUzBGQlN5eEZRVUZGTEVWQlFVVTdiMEpCUXpGQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNLMFJCUVN0RUxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNUVUZCVFN4alFVRmpMRWRCUVVjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMmxDUVVOc1N6dGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPenRCUVdoclFrUXNaVUZCWlR0QlFVTlRMRTlCUVVrc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRE5VTXNaVUZCWlR0QlFVTlRMRTlCUVVrc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGS2FFUXNaMEpCYTJ0Q1F5SjkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=