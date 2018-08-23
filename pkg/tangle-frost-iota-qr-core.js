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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztBQUNBO0FBRUE7Ozs7OztJQUlhLGM7Ozs7O0FBQ1Q7Ozs7QUFJQSwwQkFBWSxJQUFaLEVBQXdCO0FBQUE7O0FBQUEsdUZBQ2Qsd0JB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QUFDaEQsaUJBQUssV0FBTCxHQUFtQixVQUFuQjtBQUNBO0FBQ0gsV0FIRCxNQUdPLElBQUksVUFBVSxLQUFLLEVBQW5CLEVBQXVCO0FBQzFCLGtCQUFNLElBQUksS0FBSix1RUFBeUUsTUFBTSxDQUFDLGVBQVAsRUFBekUsZ0JBQXVHLGNBQWMsR0FBRyxDQUF4SCxrQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7OztBQWhrQkQ7OztBQUN3QixVQUFlLElBQWY7QUFDeEI7O0FBQ3dCLFVBQWUsSUFBZjtBQUo1QixnQjs7Ozs7Ozs7Ozs7QUNqQkEsK0YiLCJmaWxlIjoidGFuZ2xlLWZyb3N0LWlvdGEtcXItY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtcXItY29yZVwiLCBbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkB0YW5nbGUtZnJvc3QvaW90YS1xci1jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFuZ2xlRnJvc3RJb3RhUXJDb3JlXCJdID0gZmFjdG9yeShyb290W1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGFuZ2xlX2Zyb3N0X2lvdGFfY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhQmFzZVwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogUVIgRGF0YSBmb3IgcmVwcmVzZW50aW5nIGEgYWxwaGEgbnVtZXJpYy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSQWxwaGFOdW1lcmljIGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJBbHBoYU51bWVyaWMuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIGFscGhhIG51bWVyaWMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWMsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIGludG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSBpbnRvLlxyXG4gICAgICovXHJcbiAgICB3cml0ZShidWZmZXIpIHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpICsgMSA8IHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5nZXRDb2RlKHMuY2hhckF0KGkpKSAqIDQ1ICtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29kZShzLmNoYXJBdChpICsgMSkpLCAxMSk7XHJcbiAgICAgICAgICAgIGkgKz0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuZ2V0Q29kZShzLmNoYXJBdChpKSksIDYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0Q29kZShjKSB7XHJcbiAgICAgICAgaWYgKGMgPj0gXCIwXCIgJiYgYyA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA+PSBcIkFcIiAmJiBjIDw9IFwiWlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSBcIkFcIi5jaGFyQ29kZUF0KDApICsgMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIgXCI6IHJldHVybiAzNjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIkXCI6IHJldHVybiAzNztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIlXCI6IHJldHVybiAzODtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6IHJldHVybiAzOTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6IHJldHVybiA0MDtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCItXCI6IHJldHVybiA0MTtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIuXCI6IHJldHVybiA0MjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIvXCI6IHJldHVybiA0MztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI6XCI6IHJldHVybiA0NDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIGNoYXJhY3RlciBpbiBzdHJpbmcgOiAke2N9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUkFscGhhTnVtZXJpYyA9IFFSQWxwaGFOdW1lcmljO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpCYkhCb1lVNTFiV1Z5YVdNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOXhja0ZzY0doaFRuVnRaWEpwWXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzY1VSQlFXdEVPMEZCUTJ4RUxIRkVRVUZyUkR0QlFVVnNSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMR05CUVdVc1UwRkJVU3gxUWtGQlZUdEpRVU14UXpzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEVsQlFWazdVVUZEY0VJc1MwRkJTeXhEUVVGRExIVkNRVUZWTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFRRVUZUTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1RVRkJhVUk3VVVGRE1VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZXTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzSkNMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRMDRzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTTNRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5TTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRWanRSUVVWRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRaQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRelZETzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hQUVVGUExFTkJRVU1zUTBGQlV6dFJRVVZ5UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTjBRaXhQUVVGUExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTVRenRoUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRk8xbEJRemRDTEU5QlFVOHNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU51UkR0aFFVRk5PMWxCUTBnc1VVRkJVU3hEUVVGRExFVkJRVVU3WjBKQlExQXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSTdiMEpCUTBrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU0zUkR0VFFVTktPMGxCUTB3c1EwRkJRenREUVVOS08wRkJOMFJFTEhkRFFUWkVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFCYXNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YUJhc2VcIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIFFSIERhdGEgZm9yIHJlcHJlc2VudGluZyBhIDggYml0IGRhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkJ5dGU4IGV4dGVuZHMgcXJEYXRhQmFzZV8xLlFSRGF0YUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVJCeXRlOC5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgcXIgOCBiaXQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyKHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4LCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nVG9CeXRlcyh0aGlzLmdldERhdGEoKSkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIGludG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSBpbnRvLlxyXG4gICAgICovXHJcbiAgICB3cml0ZShidWZmZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5zdHJpbmdUb0J5dGVzKHRoaXMuZ2V0RGF0YSgpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhW2ldLCA4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XHJcbiAgICAgICAgY29uc3QgdXRmOCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBpZiAoY2hhcmNvZGUgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goY2hhcmNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXJjb2RlIDwgMHg4MDApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaCgweEMwIHwgKGNoYXJjb2RlID4+IDYpLCAweDgwIHwgKGNoYXJjb2RlICYgMHgzRikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXJjb2RlIDwgMHhEODAwIHx8IGNoYXJjb2RlID49IDB4RTAwMCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKDB4RTAgfCAoY2hhcmNvZGUgPj4gMTIpLCAweDgwIHwgKChjaGFyY29kZSA+PiA2KSAmIDB4M0YpLCAweDgwIHwgKGNoYXJjb2RlICYgMHgzRikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgLy8gVVRGLTE2IGVuY29kZXMgMHgxMDAwMC0weDEwRkZGRiBieVxyXG4gICAgICAgICAgICAgICAgLy8gc3VidHJhY3RpbmcgMHgxMDAwMCBhbmQgc3BsaXR0aW5nIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gMjAgYml0cyBvZiAweDAtMHhGRkZGRiBpbnRvIHR3byBoYWx2ZXNcclxuICAgICAgICAgICAgICAgIGNoYXJjb2RlID0gMHgxMDAwMCArICgoKGNoYXJjb2RlICYgMHgzRkYpIDw8IDEwKVxyXG4gICAgICAgICAgICAgICAgICAgIHwgKHN0ci5jaGFyQ29kZUF0KGkpICYgMHgzRkYpKTtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaCgweEYwIHwgKGNoYXJjb2RlID4+IDE4KSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gMTIpICYgMHgzRiksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDYpICYgMHgzRiksIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNGKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHV0Zjg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUkJ5dGU4ID0gUVJCeXRlODtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKQ2VYUmxPQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWtZWFJoTDNGeVFubDBaVGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVTkJMSEZFUVVGclJEdEJRVU5zUkN4eFJFRkJhMFE3UVVGRmJFUTdPenRIUVVkSE8wRkJRMGdzVFVGQllTeFBRVUZSTEZOQlFWRXNkVUpCUVZVN1NVRkRia003T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hKUVVGWk8xRkJRM0JDTEV0QlFVc3NRMEZCUXl4MVFrRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1UwRkJVenRSUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEY2tRc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhOUVVGcFFqdFJRVU14UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRMmhFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRMnhETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpGQ08wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4aFFVRmhMRU5CUVVNc1IwRkJWenRSUVVNM1FpeE5RVUZOTEVsQlFVa3NSMEZCWVN4RlFVRkZMRU5CUVVNN1VVRkRNVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha01zU1VGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFVkJRVVU3WjBKQlEycENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdZVUZEZGtJN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVONlFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZEZEVJc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRka003YVVKQlFVMHNTVUZCU1N4UlFVRlJMRWRCUVVjc1RVRkJUU3hKUVVGSkxGRkJRVkVzU1VGQlNTeE5RVUZOTEVWQlFVVTdaMEpCUTJoRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVU4yUWl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkRMMElzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGRrTTdhVUpCUVUwN1owSkJRMGdzUTBGQlF5eEZRVUZGTEVOQlFVTTdaMEpCUTBvc2NVTkJRWEZETzJkQ1FVTnlReXgzUTBGQmQwTTdaMEpCUTNoRExIbERRVUY1UXp0blFrRkRla01zVVVGQlVTeEhRVUZITEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPM05DUVVNeFF5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia01zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFbEJRVWtzUlVGQlJTeERRVUZETEVWQlEzWkNMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVOb1F5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZETDBJc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRka003VTBGRFNqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03UTBGRFNqdEJRWHBFUkN3d1FrRjVSRU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSBudW1iZXIuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUk51bWJlciBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSTnVtYmVyLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBxciBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXIsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXcml0ZSBkYXRhIGludG8gdGhlIGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciB0byB3cml0ZSBpbnRvLlxyXG4gICAgICovXHJcbiAgICB3cml0ZShidWZmZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpICsgMiA8IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQodGhpcy5zdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMykpLCAxMCk7XHJcbiAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggLSBpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDEpKSwgNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5sZW5ndGggLSBpID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDIpKSwgNyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0clRvTnVtKHMpIHtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtID0gbnVtICogMTAgKyB0aGlzLmNoYXJUb051bShzLmNoYXJBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNoYXJUb051bShjKSB7XHJcbiAgICAgICAgaWYgKGMgPj0gXCIwXCIgJiYgYyA8PSBcIjlcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gXCIwXCIuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIGNoYXJhY3RlciBpbiBzdHJpbmcgOiAke2N9YCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUk51bWJlciA9IFFSTnVtYmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpPZFcxaVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzl4Y2s1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNjVVJCUVd0RU8wRkJRMnhFTEhGRVFVRnJSRHRCUVVWc1JEczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExGRkJRVk1zVTBGQlVTeDFRa0ZCVlR0SlFVTndRenM3TzA5QlIwYzdTVUZEU0N4WlFVRlpMRWxCUVZrN1VVRkRjRUlzUzBGQlN5eERRVUZETEhWQ1FVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hMUVVGTExFTkJRVU1zVFVGQmFVSTdVVUZETVVJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUlRWQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVldMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNoQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjRSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlExWTdVVUZGUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEycENMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVVE3YVVKQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUXpsQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXhSRHRUUVVOS08wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UlFVRlJMRU5CUVVNc1EwRkJVenRSUVVOMFFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRXaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXZRaXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JEdFJRVU5FTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFRRVUZUTEVOQlFVTXNRMEZCVXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVOMFFpeFBRVUZQTEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNNVF6dFJRVU5FTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRNVVFzUTBGQlF6dERRVU5LTzBGQmVFUkVMRFJDUVhkRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDbGFzcyBmb3IgbWFpbnRhaW5pbmcgZGF0YSBiaXRzLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgQml0QnVmZmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlciA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XHJcbiAgICB9XHJcbiAgICBnZXRCdWZmZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlcjtcclxuICAgIH1cclxuICAgIGdldExlbmd0aEluQml0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcHV0KG51bSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0Qml0KGJpdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sZW5ndGggPT09IHRoaXMuX2J1ZmZlci5sZW5ndGggKiA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlclt+fih0aGlzLl9sZW5ndGggLyA4KV0gfD0gKDB4ODAgPj4+ICh0aGlzLl9sZW5ndGggJSA4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xlbmd0aCsrO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aEluQml0cygpOyBpKyspIHtcclxuICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMuZ2V0Qml0KGkpID8gXCIxXCIgOiBcIjBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH1cclxuICAgIGdldEJpdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiAoKHRoaXMuX2J1ZmZlclt+fihpbmRleCAvIDgpXSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQml0QnVmZmVyID0gQml0QnVmZmVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWwwUW5WbVptVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdlltbDBRblZtWm1WeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEZOQlFWTTdTVUZKYkVJN1VVRkRTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJSVTBzVTBGQlV6dFJRVU5hTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVMHNaVUZCWlR0UlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVVWTkxFZEJRVWNzUTBGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWXp0UlFVTnNReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6ZENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU4yUkR0SlFVTk1MRU5CUVVNN1NVRkZUU3hOUVVGTkxFTkJRVU1zUjBGQldUdFJRVU4wUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRekZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzaENPMUZCUTBRc1NVRkJTU3hIUVVGSExFVkJRVVU3V1VGRFRDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlUwc1VVRkJVVHRSUVVOWUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpkRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRUUVVONFF6dFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlR5eE5RVUZOTEVOQlFVTXNTMEZCWVR0UlFVTjRRaXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU42UlN4RFFVRkRPME5CUTBvN1FVRTFRMFFzT0VKQk5FTkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgdG8gaGVscGVyIHdpdGggbWF0aC5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIE1hdGhIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBtYXRoIGhlbHBlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCFNYXRoSGVscGVyLkVYUF9UQUJMRSkge1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRS5wdXNoKGkgPCA4ID8gMSA8PCBpIDpcclxuICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNF0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNV0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gNl0gXlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkVYUF9UQUJMRVtpIC0gOF0pO1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEUucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBNYXRoSGVscGVyLkxPR19UQUJMRVtNYXRoSGVscGVyLkVYUF9UQUJMRVtpXV0gPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgbG9nIG9mLlxyXG4gICAgICogQHJldHVybnMgdGhlIGxvZyBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnbG9nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGxvZygnICsgJHt2YWx1ZX0gKyAnKSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIuTE9HX1RBQkxFW3ZhbHVlXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBleHBvbmVudCBvZiB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGdldCB0aGUgZXhwb25lbnQgb2YuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXhwb25lbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V4cCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBsb2NhbFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGxvY2FsVmFsdWUgKz0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobG9jYWxWYWx1ZSA+PSAyNTYpIHtcclxuICAgICAgICAgICAgbG9jYWxWYWx1ZSAtPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoSGVscGVyLkVYUF9UQUJMRVtsb2NhbFZhbHVlXTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk1hdGhIZWxwZXIgPSBNYXRoSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0YwYUVobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwyMWhkR2hJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk96czdSMEZIUnp0QlFVTklMRTFCUVdFc1ZVRkJWVHRKUVUxdVFqczdUMEZGUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVk8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRM1pDTEZWQlFWVXNRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRekZDTEZWQlFWVXNRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJRekZDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRekZDTEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZEVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVNelFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlF6TkNMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRNMElzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRU03V1VGRFJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVNeFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRja1E3VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGaE8xRkJRelZDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOWUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNWMEZCVnl4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8xTkJRemRETzFGQlEwUXNUMEZCVHl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZoTzFGQlF6VkNMRWxCUVVrc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU4yUWl4UFFVRlBMRlZCUVZVc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGJrSXNWVUZCVlN4SlFVRkpMRWRCUVVjc1EwRkJRenRUUVVOeVFqdFJRVU5FTEU5QlFVOHNWVUZCVlN4SlFVRkpMRWRCUVVjc1JVRkJSVHRaUVVOMFFpeFZRVUZWTEVsQlFVa3NSMEZCUnl4RFFVRkRPMU5CUTNKQ08xRkJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdRMEZEU2p0QlFYUkVSQ3huUTBGelJFTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBtYXRoSGVscGVyXzEgPSByZXF1aXJlKFwiLi9tYXRoSGVscGVyXCIpO1xyXG4vKipcclxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgcG9seW5vbWlhbC5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFBvbHlub21pYWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUG9seW5vbWlhbC5cclxuICAgICAqIEBwYXJhbSBudW0gVGhlIG51bSBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEBwYXJhbSBzaGlmdCBUaGUgc2hpZnQgZm9yIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihudW0sIHNoaWZ0ID0gMCkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBudW0ubGVuZ3RoICYmIG51bVtvZmZzZXRdID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9udW0gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW4gPSBudW0ubGVuZ3RoIC0gb2Zmc2V0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbnVtLnB1c2gobnVtW29mZnNldCArIGldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlmdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX251bS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRoZSB2YWx1ZSBvZiB0aGUgcG9seW5vbWlhbCBhdCBnaXZlbiBpbmRleC5cclxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXguXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGdldEF0KGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bVtpbmRleF07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgcG9seW5vbWlhbCB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLmdldEF0KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbG9nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxvZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgdG9Mb2dTdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IGJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVmZmVyICs9IG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTXVsdGlwbHkgdGhlIHBvbHlub21pYWwgd2l0aCBhbm90aGVyIG9uZS5cclxuICAgICAqIEBwYXJhbSBlIFRoZSBwb2x5bm9taWFsIHRvIG11bHRpcGx5LlxyXG4gICAgICogQHJldHVybnMgVGhlIG11bHRpcGxpY2F0aW9uIG9mIHRoZSBwb2x5bm9taWFscy5cclxuICAgICAqL1xyXG4gICAgbXVsdGlwbHkoZSkge1xyXG4gICAgICAgIGNvbnN0IG51bSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZ2V0TGVuZ3RoKCkgKyBlLmdldExlbmd0aCgpIC0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGUuZ2V0TGVuZ3RoKCk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbnVtW2kgKyBqXSBePSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2codGhpcy5nZXRBdChpKSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdChqKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUG9seW5vbWlhbChudW0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1vZHVsdXMgb2YgdGhlIHBvbHlub21pYWwgZnJvbSBhbm90aGVyLlxyXG4gICAgICogQHBhcmFtIGUgVGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbW9kdWxlcyBvZiB0aGUgcG9seW5vbWlhbHMuXHJcbiAgICAgKi9cclxuICAgIG1vZChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoMCkpIC0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyhlLmdldEF0KDApKTtcclxuICAgICAgICAvLyBjcmVhdGUgY29weVxyXG4gICAgICAgIGNvbnN0IG51bSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bS5wdXNoKHRoaXMuZ2V0QXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ0cmFjdCBhbmQgY2FsYyByZXN0LlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bVtpXSBePSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdChpKSkgKyByYXRpbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhbGwgcmVjdXJzaXZlbHlcclxuICAgICAgICByZXR1cm4gbmV3IFBvbHlub21pYWwobnVtKS5tb2QoZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qb2x5bm9taWFsID0gUG9seW5vbWlhbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0c5c2VXNXZiV2xoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMM0J2YkhsdWIyMXBZV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFpEUVVFd1F6dEJRVVV4UXpzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEZWQlFWVTdTVUZKYmtJN096czdUMEZKUnp0SlFVTklMRmxCUVZrc1IwRkJZU3hGUVVGRkxGRkJRV2RDTEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXWXNUMEZCVHl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNSVUZCUlN4RFFVRkRPMU5CUTFvN1VVRkZSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm1MRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTJoRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyNURPMUZCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0xUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnlRanRKUVVOTUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN5eERRVUZETEV0QlFXRTdVVUZEZEVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hUUVVGVE8xRkJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNMVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFVDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRPMkZCUTJwQ08xbEJRMFFzVFVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wSTdVVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU0zUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NWMEZCVnp0UlFVTmtMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5vUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzWkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEVUN4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRE8yRkJRMnBDTzFsQlEwUXNUVUZCVFN4SlFVRkpMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0xUXp0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6ZENMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1VVRkJVU3hEUVVGRExFTkJRV0U3VVVGRGVrSXNUVUZCVFN4SFFVRkhMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMnBFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRNVUlzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVObU8xRkJRMFFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU53UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNoRUxIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRE8xTkJRMG83VVVGRFJDeFBRVUZQTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NSMEZCUnl4RFFVRkRMRU5CUVdFN1VVRkRjRUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjBReXhQUVVGUExFbEJRVWtzUTBGQlF6dFRRVU5tTzFGQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc2RVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVelJTeGpRVUZqTzFGQlEyUXNUVUZCVFN4SFFVRkhMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJRM3BDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGRrTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMEk3VVVGRlJDd3dRa0ZCTUVJN1VVRkRNVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc2RVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNkVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc2JVSkJRVzFDTzFGQlEyNUNMRTlCUVU4c1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdRMEZEU2p0QlFYWklSQ3huUTBGMVNFTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKTtcclxuY29uc3QgbWFza1BhdHRlcm5fMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvbWFza1BhdHRlcm5cIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vbWF0aEhlbHBlclwiKTtcclxuY29uc3QgcG9seW5vbWlhbF8xID0gcmVxdWlyZShcIi4vcG9seW5vbWlhbFwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBtZXRob2RzIGZvciBRUiBnZW5lcmF0aW9uLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHBhdHRlcm4gcG9zaXRpb24gZm9yIHRoZSBnaXZlbiB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIHBhdHRlcm4gZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBhdHRlcm4gZm9yIHRoZSB0eXBlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFBhdHRlcm5Qb3NpdGlvbih0eXBlTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFFSSGVscGVyLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIG1heCBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEBwYXJhbSBtb2RlIFRoZSBkYXRhIG1vZGUgdG8gZ2V0IGRhdGEgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgVGhlIGVycm9yIGNvcnJlY3Rpb24gdG8gZ2V0IHRoZSBtYXggbGVuZ3RoIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtYXggbGVuZ3RoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0TWF4TGVuZ3RoKHR5cGVOdW1iZXIsIG1vZGUsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgY29uc3QgdCA9IHR5cGVOdW1iZXIgLSAxO1xyXG4gICAgICAgIGxldCBlID0gMDtcclxuICAgICAgICBsZXQgbSA9IDA7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTDpcclxuICAgICAgICAgICAgICAgIGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5NOlxyXG4gICAgICAgICAgICAgICAgZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLlE6XHJcbiAgICAgICAgICAgICAgICBlID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuSDpcclxuICAgICAgICAgICAgICAgIGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZXJyb3IgY29ycmVjdGlvbiBsZXZlbCAke2Vycm9yQ29ycmVjdExldmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6XHJcbiAgICAgICAgICAgICAgICBtID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzpcclxuICAgICAgICAgICAgICAgIG0gPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6XHJcbiAgICAgICAgICAgICAgICBtID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEgbW9kZSAke21vZGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBRUkhlbHBlci5NQVhfTEVOR1RIW3RdW2VdW21dO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGVycm9yIGNvcnJlY3Rpb24gcG9seW5vbWlhbCBmb3IgdGhlIGVycm9yIGNvcnJlY3RvIGxlbmd0aC5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZW5ndGggVGhlIGVycm9yIGNvcnJlY3Rpb24gbGVuZ3RoIHRvIGdldCB0aGUgcG9seW5vbWlhbCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcG9seW5vbWlhbCBmb3IgdGhlIGVycm9yIGNvcnJlY3Rpb24gbGVuZ3RoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlcnJvckNvcnJlY3RMZW5ndGgpIHtcclxuICAgICAgICBsZXQgYSA9IG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChbMV0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXJyb3JDb3JyZWN0TGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYSA9IGEubXVsdGlwbHkobmV3IHBvbHlub21pYWxfMS5Qb2x5bm9taWFsKFsxLCBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nZXhwKGkpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtYXNrIG1ldGhvZCBmb3IgdGhlIGdpdmVuIHBhdHRlcm4uXHJcbiAgICAgKiBAcGFyYW0gbWFza1BhdHRlcm4gVGhlIHBhdHRlcm4gdG8gZ2V0IHRoZSBtYXNrIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtYXNrIG1ldGhvZCBmb3IgdGhlIHBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRNYXNrTWV0aG9kKG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAwMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKyBqKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiBpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IGogJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAxMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKyBqKSAlIDMgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAofn4oaSAvIDIpICsgfn4oaiAvIDMpKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjExMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbWFzayAke21hc2tQYXR0ZXJufWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBCQ0ggdHlwZSBpbmZvLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZ2V0IHRoZSBCQ0ggdHlwZSBpbmZvIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0eXBlIGluZm8uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hUeXBlSW5mbyhkYXRhKSB7XHJcbiAgICAgICAgbGV0IGQgPSBkYXRhIDw8IDEwO1xyXG4gICAgICAgIHdoaWxlIChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxNSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkIF49IChRUkhlbHBlci5HMTUgPDwgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC1cclxuICAgICAgICAgICAgICAgIFFSSGVscGVyLmdldEJDSERpZ2l0KFFSSGVscGVyLkcxNSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIFFSSGVscGVyLkcxNV9NQVNLO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIEJDSCB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGdldCB0aGUgQkNIIHR5cGUgbnVtYmVyIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0eXBlIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEJDSFR5cGVOdW1iZXIoZGF0YSkge1xyXG4gICAgICAgIGxldCBkID0gZGF0YSA8PCAxMjtcclxuICAgICAgICB3aGlsZSAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLSBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTgpID49IDApIHtcclxuICAgICAgICAgICAgZCBePSAoUVJIZWxwZXIuRzE4IDw8IChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtXHJcbiAgICAgICAgICAgICAgICBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoZGF0YSA8PCAxMikgfCBkO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIRGlnaXQoZGF0YSkge1xyXG4gICAgICAgIGxldCBsb2NhbERhdGEgPSBkYXRhO1xyXG4gICAgICAgIGxldCBkaWdpdCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsRGF0YSAhPT0gMCkge1xyXG4gICAgICAgICAgICBkaWdpdCsrO1xyXG4gICAgICAgICAgICBsb2NhbERhdGEgPj4+PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlnaXQ7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLlBBVFRFUk5fUE9TSVRJT05fVEFCTEUgPSBbXHJcbiAgICBbXSxcclxuICAgIFs2LCAxOF0sXHJcbiAgICBbNiwgMjJdLFxyXG4gICAgWzYsIDI2XSxcclxuICAgIFs2LCAzMF0sXHJcbiAgICBbNiwgMzRdLFxyXG4gICAgWzYsIDIyLCAzOF0sXHJcbiAgICBbNiwgMjQsIDQyXSxcclxuICAgIFs2LCAyNiwgNDZdLFxyXG4gICAgWzYsIDI4LCA1MF0sXHJcbiAgICBbNiwgMzAsIDU0XSxcclxuICAgIFs2LCAzMiwgNThdLFxyXG4gICAgWzYsIDM0LCA2Ml0sXHJcbiAgICBbNiwgMjYsIDQ2LCA2Nl0sXHJcbiAgICBbNiwgMjYsIDQ4LCA3MF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NF0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OF0sXHJcbiAgICBbNiwgMzAsIDU2LCA4Ml0sXHJcbiAgICBbNiwgMzAsIDU4LCA4Nl0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MF0sXHJcbiAgICBbNiwgMjgsIDUwLCA3MiwgOTRdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzQsIDk4XSxcclxuICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxyXG4gICAgWzYsIDI4LCA1NCwgODAsIDEwNl0sXHJcbiAgICBbNiwgMzIsIDU4LCA4NCwgMTEwXSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTAsIDExOF0sXHJcbiAgICBbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxyXG4gICAgWzYsIDI2LCA1MiwgNzgsIDEwNCwgMTMwXSxcclxuICAgIFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0sXHJcbiAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyXSxcclxuICAgIFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXHJcbiAgICBbNiwgMjQsIDUwLCA3NiwgMTAyLCAxMjgsIDE1NF0sXHJcbiAgICBbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0sXHJcbiAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXHJcbiAgICBbNiwgMjYsIDU0LCA4MiwgMTEwLCAxMzgsIDE2Nl0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF1cclxuXTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLk1BWF9MRU5HVEggPSBbXHJcbiAgICBbWzQxLCAyNSwgMTcsIDEwXSwgWzM0LCAyMCwgMTQsIDhdLCBbMjcsIDE2LCAxMSwgN10sIFsxNywgMTAsIDcsIDRdXSxcclxuICAgIFtbNzcsIDQ3LCAzMiwgMjBdLCBbNjMsIDM4LCAyNiwgMTZdLCBbNDgsIDI5LCAyMCwgMTJdLCBbMzQsIDIwLCAxNCwgOF1dLFxyXG4gICAgW1sxMjcsIDc3LCA1MywgMzJdLCBbMTAxLCA2MSwgNDIsIDI2XSwgWzc3LCA0NywgMzIsIDIwXSwgWzU4LCAzNSwgMjQsIDE1XV0sXHJcbiAgICBbWzE4NywgMTE0LCA3OCwgNDhdLCBbMTQ5LCA5MCwgNjIsIDM4XSwgWzExMSwgNjcsIDQ2LCAyOF0sIFs4MiwgNTAsIDM0LCAyMV1dLFxyXG4gICAgW1syNTUsIDE1NCwgMTA2LCA2NV0sIFsyMDIsIDEyMiwgODQsIDUyXSwgWzE0NCwgODcsIDYwLCAzN10sIFsxMDYsIDY0LCA0NCwgMjddXSxcclxuICAgIFtbMzIyLCAxOTUsIDEzNCwgODJdLCBbMjU1LCAxNTQsIDEwNiwgNjVdLCBbMTc4LCAxMDgsIDc0LCA0NV0sIFsxMzksIDg0LCA1OCwgMzZdXSxcclxuICAgIFtbMzcwLCAyMjQsIDE1NCwgOTVdLCBbMjkzLCAxNzgsIDEyMiwgNzVdLCBbMjA3LCAxMjUsIDg2LCA1M10sIFsxNTQsIDkzLCA2NCwgMzldXSxcclxuICAgIFtbNDYxLCAyNzksIDE5MiwgMTE4XSwgWzM2NSwgMjIxLCAxNTIsIDkzXSwgWzI1OSwgMTU3LCAxMDgsIDY2XSwgWzIwMiwgMTIyLCA4NCwgNTJdXSxcclxuICAgIFtbNTUyLCAzMzUsIDIzMCwgMTQxXSwgWzQzMiwgMjYyLCAxODAsIDExMV0sIFszMTIsIDE4OSwgMTMwLCA4MF0sIFsyMzUsIDE0MywgOTgsIDYwXV0sXHJcbiAgICBbWzY1MiwgMzk1LCAyNzEsIDE2N10sIFs1MTMsIDMxMSwgMjEzLCAxMzFdLCBbMzY0LCAyMjEsIDE1MSwgOTNdLCBbMjg4LCAxNzQsIDExOSwgNzRdXVxyXG5dO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE1ID0gKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KVxyXG4gICAgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKVxyXG4gICAgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVJIZWxwZXIuRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMClcclxuICAgIHwgKDEgPDwgNCkgfCAoMSA8PCAxKTtcclxuZXhwb3J0cy5RUkhlbHBlciA9IFFSSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5eGNraGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYlVWQlFXZEZPMEZCUTJoRkxIVkVRVUZ2UkR0QlFVTndSQ3h4UkVGQmEwUTdRVUZEYkVRc05rTkJRVEJETzBGQlF6RkRMRFpEUVVFd1F6dEJRVVV4UXpzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEZGQlFWRTdTVUYxUldwQ096czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1ZVRkJhMEk3VVVGREwwTXNUMEZCVHl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZWQlFXdENMRVZCUVVVc1NVRkJaMElzUlVGQlJTeHBRa0ZCYjBNN1VVRkRha2NzVFVGQlRTeERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGVml4UlFVRlJMR2xDUVVGcFFpeEZRVUZGTzFsQlEzWkNMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRTFCUVUwN1dVRkRka01zUzBGQlN5eHhRMEZCYVVJc1EwRkJReXhEUVVGRE8yZENRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRVU1zVFVGQlRUdFpRVU4yUXl4TFFVRkxMSEZEUVVGcFFpeERRVUZETEVOQlFVTTdaMEpCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNaRExFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRGRrTTdaMEpCUTBrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRMEZCYTBNc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpsRk8xRkJSVVFzVVVGQlVTeEpRVUZKTEVWQlFVVTdXVUZEVml4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVFVGQlRUdG5Ra0ZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEUxQlFVMDdXVUZEY2tNc1MwRkJTeXgxUWtGQlZTeERRVUZETEZsQlFWazdaMEpCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUXpORExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4TFFVRkxPMmRDUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVNc1RVRkJUVHRaUVVOd1F6dG5Ra0ZEU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIRkNRVUZ4UWl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0JFTzFGQlJVUXNUMEZCVHl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEd0Q1FVRXdRanRSUVVNNVJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMSFZDUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxIVkNRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc2RVSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE0wUTdVVUZGUkN4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOaUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRnRRanRSUVVNelF5eFJRVUZSTEZkQlFWY3NSVUZCUlR0WlFVTnFRaXhMUVVGTExIbENRVUZYTEVOQlFVTXNWVUZCVlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGRrUXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU5xUkN4TFFVRkxMSGxDUVVGWExFTkJRVU1zVlVGQlZUdG5Ra0ZEZGtJc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEycEVMRXRCUVVzc2VVSkJRVmNzUTBGQlF5eFZRVUZWTzJkQ1FVTjJRaXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOMlJDeExRVUZMTEhsQ1FVRlhMRU5CUVVNc1ZVRkJWVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRka1VzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU55UlN4TFFVRkxMSGxDUVVGWExFTkJRVU1zVlVGQlZUdG5Ra0ZEZGtJc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE0wVXNTMEZCU3l4NVFrRkJWeXhEUVVGRExGVkJRVlU3WjBKQlEzWkNMRTlCUVU4c1EwRkJReXhEUVVGVExFVkJRVVVzUTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJSVE5GTzJkQ1FVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGRFUTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQldUdFJRVU55UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEyNUNMRTlCUVU4c1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRkRVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVNeFF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETlVNN1VVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGWk8xRkJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRGJrSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjBSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUXpGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU0xUXp0UlFVTkVMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRMjVETEVsQlFVa3NVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hQUVVGUExGTkJRVk1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VJc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRFVpeFRRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNCQ08xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEYWtJc1EwRkJRenM3UVVGb1RVUXNaVUZCWlR0QlFVTlRMQ3RDUVVGelFpeEhRVUZsTzBsQlEzcEVMRVZCUVVVN1NVRkRSaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTJZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMllzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEYmtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMjVDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTndRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGNFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNCQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU53UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRjRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTjRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzcENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTNwQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEZWtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU42UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU01UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU01UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU01UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU01UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU01UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dERRVU5xUXl4RFFVRkRPMEZCUlVZc1pVRkJaVHRCUVVOVExHMUNRVUZWTEVkQlFXbENPMGxCUXk5RExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTndSU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZGtVc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6RkZMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU0xUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGREwwVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMnBHTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRjRVlzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNKR0xFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0RFFVTjZSaXhEUVVGRE8wRkJSVVlzWlVGQlpUdEJRVU5UTEZsQlFVY3NSMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdUVUZETDBRc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGYUVRc1pVRkJaVHRCUVVOVExGbEJRVWNzUjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VFVGRGFrVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkZNMFFzWlVGQlpUdEJRVU5UTEdsQ1FVRlJMRWRCUVZjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMDFCUTNSRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQmNrVTVRaXcwUWtGclRVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlcnJvckNvcnJlY3RMZXZlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIFJTIEJsb2NrLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUlNCbG9jayB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnNzdGFuY2Ugb2YgUlNCbG9jay5cclxuICAgICAqIEBwYXJhbSB0b3RhbENvdW50IFRoZSB0b3RhbCBjb3VudCBmb3IgdGhlIGJsb2NrLlxyXG4gICAgICogQHBhcmFtIGRhdGFDb3VudCBUaGUgZGF0YSBjb3VudCBmb3IgdGhlIGJsb2NrLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcclxuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLl9kYXRhQ291bnQgPSBkYXRhQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBSUyBCbG9ja3MgZm9yIHRoZSB0eXBlIG51bWJlciBhbmQgZXJyb3IgY29ycmVjdCBsZXZlbC5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlci5cclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCBUaGUgZXJyb3IgY29ycmVjdCBsZXZlbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBSUyBCbG9ja3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IHJzQmxvY2sgPSBSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gcnNCbG9ja1tpICogMyArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5NOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLlE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuSDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBlcnJvciBjb3JyZWN0IGxldmVsICR7ZXJyb3JDb3JyZWN0TGV2ZWx9YCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YSBjb3VudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIGNvdW50LlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFDb3VudDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0b3RhbCBjb3VudC5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0b3RhbCBjb3VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxDb3VudDtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUlNCbG9jay5SU19CTE9DS19UQUJMRSA9IFtcclxuICAgIC8vIExcclxuICAgIC8vIE1cclxuICAgIC8vIFFcclxuICAgIC8vIEhcclxuICAgIC8vIDFcclxuICAgIFsxLCAyNiwgMTldLFxyXG4gICAgWzEsIDI2LCAxNl0sXHJcbiAgICBbMSwgMjYsIDEzXSxcclxuICAgIFsxLCAyNiwgOV0sXHJcbiAgICAvLyAyXHJcbiAgICBbMSwgNDQsIDM0XSxcclxuICAgIFsxLCA0NCwgMjhdLFxyXG4gICAgWzEsIDQ0LCAyMl0sXHJcbiAgICBbMSwgNDQsIDE2XSxcclxuICAgIC8vIDNcclxuICAgIFsxLCA3MCwgNTVdLFxyXG4gICAgWzEsIDcwLCA0NF0sXHJcbiAgICBbMiwgMzUsIDE3XSxcclxuICAgIFsyLCAzNSwgMTNdLFxyXG4gICAgLy8gNFxyXG4gICAgWzEsIDEwMCwgODBdLFxyXG4gICAgWzIsIDUwLCAzMl0sXHJcbiAgICBbMiwgNTAsIDI0XSxcclxuICAgIFs0LCAyNSwgOV0sXHJcbiAgICAvLyA1XHJcbiAgICBbMSwgMTM0LCAxMDhdLFxyXG4gICAgWzIsIDY3LCA0M10sXHJcbiAgICBbMiwgMzMsIDE1LCAyLCAzNCwgMTZdLFxyXG4gICAgWzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcclxuICAgIC8vIDZcclxuICAgIFsyLCA4NiwgNjhdLFxyXG4gICAgWzQsIDQzLCAyN10sXHJcbiAgICBbNCwgNDMsIDE5XSxcclxuICAgIFs0LCA0MywgMTVdLFxyXG4gICAgLy8gN1xyXG4gICAgWzIsIDk4LCA3OF0sXHJcbiAgICBbNCwgNDksIDMxXSxcclxuICAgIFsyLCAzMiwgMTQsIDQsIDMzLCAxNV0sXHJcbiAgICBbNCwgMzksIDEzLCAxLCA0MCwgMTRdLFxyXG4gICAgLy8gOFxyXG4gICAgWzIsIDEyMSwgOTddLFxyXG4gICAgWzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcclxuICAgIFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcbiAgICBbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxyXG4gICAgLy8gOVxyXG4gICAgWzIsIDE0NiwgMTE2XSxcclxuICAgIFszLCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcbiAgICBbNCwgMzYsIDE2LCA0LCAzNywgMTddLFxyXG4gICAgWzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcclxuICAgIC8vIDEwXHJcbiAgICBbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG4gICAgWzQsIDY5LCA0MywgMSwgNzAsIDQ0XSxcclxuICAgIFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG4gICAgLy8gMTFcclxuICAgIFs0LCAxMDEsIDgxXSxcclxuICAgIFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXHJcbiAgICBbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxyXG4gICAgWzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuICAgIC8vIDEyXHJcbiAgICBbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXHJcbiAgICBbNiwgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgWzQsIDQ2LCAyMCwgNiwgNDcsIDIxXSxcclxuICAgIFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXHJcbiAgICAvLyAxM1xyXG4gICAgWzQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA1OSwgMzcsIDEsIDYwLCAzOF0sXHJcbiAgICBbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxyXG4gICAgWzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcbiAgICAvLyAxNFxyXG4gICAgWzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICBbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxyXG4gICAgWzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXHJcbiAgICBbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuICAgIC8vIDE1XHJcbiAgICBbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXHJcbiAgICBbNSwgNjUsIDQxLCA1LCA2NiwgNDJdLFxyXG4gICAgWzUsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuICAgIFsxMSwgMzYsIDEyLCA3LCAzNywgMTNdLFxyXG4gICAgLy8gMTZcclxuICAgIFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcclxuICAgIFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcbiAgICBbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuICAgIFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG4gICAgLy8gMTdcclxuICAgIFsxLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG4gICAgWzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXHJcbiAgICBbMSwgNTAsIDIyLCAxNSwgNTEsIDIzXSxcclxuICAgIFsyLCA0MiwgMTQsIDE3LCA0MywgMTVdLFxyXG4gICAgLy8gMThcclxuICAgIFs1LCAxNTAsIDEyMCwgMSwgMTUxLCAxMjFdLFxyXG4gICAgWzksIDY5LCA0MywgNCwgNzAsIDQ0XSxcclxuICAgIFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG4gICAgWzIsIDQyLCAxNCwgMTksIDQzLCAxNV0sXHJcbiAgICAvLyAxOVxyXG4gICAgWzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXHJcbiAgICBbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcclxuICAgIFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG4gICAgWzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXHJcbiAgICAvLyAyMFxyXG4gICAgWzMsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXHJcbiAgICBbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcclxuICAgIFsxNSwgNTQsIDI0LCA1LCA1NSwgMjVdLFxyXG4gICAgWzE1LCA0MywgMTUsIDEwLCA0NCwgMTZdLFxyXG4gICAgLy8gMjFcclxuICAgIFs0LCAxNDQsIDExNiwgNCwgMTQ1LCAxMTddLFxyXG4gICAgWzE3LCA2OCwgNDJdLFxyXG4gICAgWzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcbiAgICBbMTksIDQ2LCAxNiwgNiwgNDcsIDE3XSxcclxuICAgIC8vIDIyXHJcbiAgICBbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcclxuICAgIFsxNywgNzQsIDQ2XSxcclxuICAgIFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG4gICAgWzM0LCAzNywgMTNdLFxyXG4gICAgLy8gMjNcclxuICAgIFs0LCAxNTEsIDEyMSwgNSwgMTUyLCAxMjJdLFxyXG4gICAgWzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXHJcbiAgICBbMTEsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbMTYsIDQ1LCAxNSwgMTQsIDQ2LCAxNl0sXHJcbiAgICAvLyAyNFxyXG4gICAgWzYsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcbiAgICBbNiwgNzMsIDQ1LCAxNCwgNzQsIDQ2XSxcclxuICAgIFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszMCwgNDYsIDE2LCAyLCA0NywgMTddLFxyXG4gICAgLy8gMjVcclxuICAgIFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxyXG4gICAgWzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXHJcbiAgICBbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuICAgIFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuICAgIC8vIDI2XHJcbiAgICBbMTAsIDE0MiwgMTE0LCAyLCAxNDMsIDExNV0sXHJcbiAgICBbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcclxuICAgIFsyOCwgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG4gICAgWzMzLCA0NiwgMTYsIDQsIDQ3LCAxN10sXHJcbiAgICAvLyAyN1xyXG4gICAgWzgsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjIsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuICAgIFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG4gICAgWzEyLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG4gICAgLy8gMjhcclxuICAgIFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcclxuICAgIFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxyXG4gICAgWzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcbiAgICBbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXHJcbiAgICAvLyAyOVxyXG4gICAgWzcsIDE0NiwgMTE2LCA3LCAxNDcsIDExN10sXHJcbiAgICBbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcclxuICAgIFsxLCA1MywgMjMsIDM3LCA1NCwgMjRdLFxyXG4gICAgWzE5LCA0NSwgMTUsIDI2LCA0NiwgMTZdLFxyXG4gICAgLy8gMzBcclxuICAgIFs1LCAxNDUsIDExNSwgMTAsIDE0NiwgMTE2XSxcclxuICAgIFsxOSwgNzUsIDQ3LCAxMCwgNzYsIDQ4XSxcclxuICAgIFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyNSwgNDYsIDE2XSxcclxuICAgIC8vIDMxXHJcbiAgICBbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXHJcbiAgICBbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcclxuICAgIFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG4gICAgWzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG4gICAgLy8gMzJcclxuICAgIFsxNywgMTQ1LCAxMTVdLFxyXG4gICAgWzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG4gICAgWzEwLCA1NCwgMjQsIDM1LCA1NSwgMjVdLFxyXG4gICAgWzE5LCA0NSwgMTUsIDM1LCA0NiwgMTZdLFxyXG4gICAgLy8gMzNcclxuICAgIFsxNywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcclxuICAgIFsxNCwgNzQsIDQ2LCAyMSwgNzUsIDQ3XSxcclxuICAgIFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuICAgIFsxMSwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuICAgIC8vIDM0XHJcbiAgICBbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXHJcbiAgICBbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcbiAgICBbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuICAgIFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxyXG4gICAgLy8gMzVcclxuICAgIFsxMiwgMTUxLCAxMjEsIDcsIDE1MiwgMTIyXSxcclxuICAgIFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcclxuICAgIFszOSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuICAgIFsyMiwgNDUsIDE1LCA0MSwgNDYsIDE2XSxcclxuICAgIC8vIDM2XHJcbiAgICBbNiwgMTUxLCAxMjEsIDE0LCAxNTIsIDEyMl0sXHJcbiAgICBbNiwgNzUsIDQ3LCAzNCwgNzYsIDQ4XSxcclxuICAgIFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgIFsyLCA0NSwgMTUsIDY0LCA0NiwgMTZdLFxyXG4gICAgLy8gMzdcclxuICAgIFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuICAgIFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcclxuICAgIFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuICAgIFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuICAgIC8vIDM4XHJcbiAgICBbNCwgMTUyLCAxMjIsIDE4LCAxNTMsIDEyM10sXHJcbiAgICBbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXHJcbiAgICBbNDgsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbNDIsIDQ1LCAxNSwgMzIsIDQ2LCAxNl0sXHJcbiAgICAvLyAzOVxyXG4gICAgWzIwLCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgWzQwLCA3NSwgNDcsIDcsIDc2LCA0OF0sXHJcbiAgICBbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMTAsIDQ1LCAxNSwgNjcsIDQ2LCAxNl0sXHJcbiAgICAvLyA0MFxyXG4gICAgWzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxyXG4gICAgWzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxyXG4gICAgWzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG4gICAgWzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXHJcbl07XHJcbmV4cG9ydHMuUlNCbG9jayA9IFJTQmxvY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNuTkNiRzlqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMM0p6UW14dlkyc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHMUZRVUZuUlR0QlFVVm9SVHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRTlCUVU4N1NVRTBVR2hDT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZaTEZWQlFXdENMRVZCUVVVc1UwRkJhVUk3VVVGRE4wTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGRGFFTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eFZRVUZyUWl4RlFVRkZMR2xDUVVGdlF6dFJRVU01UlN4TlFVRk5MRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEZWQlFWVXNSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eERRVUZETzFGQlEzWkZMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUld4RExFMUJRVTBzU1VGQlNTeEhRVUZqTEVWQlFVVXNRMEZCUXp0UlFVVXpRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJUZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFMUJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYSkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlF6VkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFrUTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExHVkJRV1VzUTBGQlF5eFZRVUZyUWl4RlFVRkZMR2xDUVVGdlF6dFJRVU51Uml4UlFVRlJMR2xDUVVGcFFpeEZRVUZGTzFsQlEzWkNMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkRjRUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNMVJDeExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlEzQkNMRTlCUVU4c1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETlVRc1MwRkJTeXh4UTBGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVOd1FpeFBRVUZQTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRelZFTEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VJc1QwRkJUeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hSUVVGUk8xTkJRMWc3VVVGRlJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMQ3RDUVVFclFpeHBRa0ZCYVVJc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZsQlFWazdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEdGQlFXRTdVVUZEYUVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlF6VkNMRU5CUVVNN08wRkJPVlJFTEdWQlFXVTdRVUZEVXl4elFrRkJZeXhIUVVGbE8wbEJSV3BFTEVsQlFVazdTVUZEU2l4SlFVRkpPMGxCUTBvc1NVRkJTVHRKUVVOS0xFbEJRVWs3U1VGRFNpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWV0xFbEJRVWs3U1VGRFNpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlZnc1NVRkJTVHRKUVVOS0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGV0N4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVZXTEVsQlFVazdTVUZEU2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEySXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVllMRWxCUVVrN1NVRkRTaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMFFpeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYUkNMRWxCUVVrN1NVRkRTaXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTJJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWMFFpeExRVUZMTzBsQlEwd3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzWkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRrSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE1VSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVWYUxFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRMlFzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZka0lzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZGtJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1EwRkRNMElzUTBGQlF6dEJRWFpRVGl3d1FrRm5WVU1pZlE9PSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9xclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc01FSkJRWEZDTzBGQlJYSkNMR2RFUVVFeVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBFcnJvciBjb3JyZWN0aW9uIGxldmVsIHRvIHVzZSBmb3IgdGhlIFFSIENvZGUuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgRXJyb3JDb3JyZWN0TGV2ZWw7XHJcbihmdW5jdGlvbiAoRXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgIC8qKlxyXG4gICAgICogNyVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJMXCJdID0gMV0gPSBcIkxcIjtcclxuICAgIC8qKlxyXG4gICAgICogMTUlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiTVwiXSA9IDBdID0gXCJNXCI7XHJcbiAgICAvKipcclxuICAgICAqIDI1JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIlFcIl0gPSAzXSA9IFwiUVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAzMCVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJIXCJdID0gMl0gPSBcIkhcIjtcclxufSkoRXJyb3JDb3JyZWN0TGV2ZWwgPSBleHBvcnRzLkVycm9yQ29ycmVjdExldmVsIHx8IChleHBvcnRzLkVycm9yQ29ycmVjdExldmVsID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhKeWIzSkRiM0p5WldOMFRHVjJaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiVzlrWld4ekwyVnljbTl5UTI5eWNtVmpkRXhsZG1Wc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN08wZEJSMGM3UVVGRFNDeEpRVUZaTEdsQ1FXOUNXRHRCUVhCQ1JDeFhRVUZaTEdsQ1FVRnBRanRKUVVONlFqczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3U1VGRlREczdUMEZGUnp0SlFVTklMRzFFUVVGTExFTkJRVUU3UVVGRFZDeERRVUZETEVWQmNFSlhMR2xDUVVGcFFpeEhRVUZxUWl4NVFrRkJhVUlzUzBGQmFrSXNlVUpCUVdsQ0xGRkJiMEkxUWlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE1hc2sgcGF0dGVybnMgZm9yIFFSIGNvZGVzLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIE1hc2tQYXR0ZXJuO1xyXG4oZnVuY3Rpb24gKE1hc2tQYXR0ZXJuKSB7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMDBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDAwXCJdID0gMF0gPSBcIlBBVFRFUk4wMDBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAwMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMDFcIl0gPSAxXSA9IFwiUEFUVEVSTjAwMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDEwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAxMFwiXSA9IDJdID0gXCJQQVRURVJOMDEwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMTFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDExXCJdID0gM10gPSBcIlBBVFRFUk4wMTFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDEwMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMDBcIl0gPSA0XSA9IFwiUEFUVEVSTjEwMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTAxXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjEwMVwiXSA9IDVdID0gXCJQQVRURVJOMTAxXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMTBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTEwXCJdID0gNl0gPSBcIlBBVFRFUk4xMTBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDExMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMTFcIl0gPSA3XSA9IFwiUEFUVEVSTjExMVwiO1xyXG59KShNYXNrUGF0dGVybiA9IGV4cG9ydHMuTWFza1BhdHRlcm4gfHwgKGV4cG9ydHMuTWFza1BhdHRlcm4gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0Z6YTFCaGRIUmxjbTR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZiVzlrWld4ekwyMWhjMnRRWVhSMFpYSnVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hKUVVGWkxGZEJkME5ZTzBGQmVFTkVMRmRCUVZrc1YwRkJWenRKUVVOdVFqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1NVRkZiRUk3TzA5QlJVYzdTVUZEU0N4NVJFRkJhMElzUTBGQlFUdEpRVVZzUWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3U1VGRmJFSTdPMDlCUlVjN1NVRkRTQ3g1UkVGQmEwSXNRMEZCUVR0SlFVVnNRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdRVUZEZEVJc1EwRkJReXhGUVhoRFZ5eFhRVUZYTEVkQlFWZ3NiVUpCUVZjc1MwRkJXQ3h0UWtGQlZ5eFJRWGREZEVJaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBzdG9yaW5nIFFSIERhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSRGF0YUJhc2UuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgbW9kZSBmb3IgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobW9kZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEgbW9kZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhIG1vZGUuXHJcbiAgICAgKi9cclxuICAgIGdldE1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBpbiBiaXRzIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgbGVuZ3RoIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggaW4gYml0cy5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoSW5CaXRzKHR5cGVOdW1iZXIpIHtcclxuICAgICAgICBpZiAodHlwZU51bWJlciA+PSAxICYmIHR5cGVOdW1iZXIgPCAxMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gODtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVOdW1iZXIgPCAyNykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDExO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZU51bWJlciA8IDQxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5udW1iZXI6IHJldHVybiAxNDtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljOiByZXR1cm4gMTM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OiByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHR5cGVOdW1iZXIgJHt0eXBlTnVtYmVyfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFSRGF0YUJhc2UgPSBRUkRhdGFCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljWEpFWVhSaFFtRnpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXRiMlJsYkhNdmNYSkVZWFJoUW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc05rTkJRVEJETzBGQlJURkRPenM3UjBGSFJ6dEJRVU5JTEUxQlFYTkNMRlZCUVZVN1NVRk5OVUk3T3pzN1QwRkpSenRKUVVOSUxGbEJRVmtzU1VGQlowSXNSVUZCUlN4SlFVRlpPMUZCUTNSRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGalJEczdPenRQUVVsSE8wbEJRMGtzWlVGQlpTeERRVUZETEZWQlFXdENPMUZCUTNKRExFbEJRVWtzVlVGQlZTeEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRM0JETEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRGFFSXNTMEZCU3l4MVFrRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVOc1F5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNaRExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVNN2IwSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4blFrRkJaMElzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRja1E3VTBGRFNqdGhRVUZOTEVsQlFVa3NWVUZCVlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVONFFpeFJRVUZSTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRMmhDTEV0QlFVc3NkVUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRiRU1zUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTjRReXhMUVVGTExIVkNRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEycERPMjlDUVVOSkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNKRU8xTkJRMG83WVVGQlRTeEpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRlRUlzVVVGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMmRDUVVOb1FpeExRVUZMTEhWQ1FVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdaMEpCUTJ4RExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEZUVNc1MwRkJTeXgxUWtGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU5xUXp0dlFrRkRTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnlSRHRUUVVOS08yRkJRVTA3V1VGRFNDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNaRU8wbEJRMHdzUTBGQlF6dERRVU5LTzBGQk9VVkVMR2REUVRoRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBUaGUgbW9kZSBmb3IgdGhlIHFyIGRhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG52YXIgUVJEYXRhTW9kZTtcclxuKGZ1bmN0aW9uIChRUkRhdGFNb2RlKSB7XHJcbiAgICAvKipcclxuICAgICAqIG51bWJlclxyXG4gICAgICovXHJcbiAgICBRUkRhdGFNb2RlW1FSRGF0YU1vZGVbXCJudW1iZXJcIl0gPSAxXSA9IFwibnVtYmVyXCI7XHJcbiAgICAvKipcclxuICAgICAqIGFscGhhYmV0IGFuZCBudW1iZXJcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wiYWxwaGFOdW1lcmljXCJdID0gMl0gPSBcImFscGhhTnVtZXJpY1wiO1xyXG4gICAgLyoqXHJcbiAgICAgKiA4Yml0IGJ5dGVcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wiYnl0ZThcIl0gPSA0XSA9IFwiYnl0ZThcIjtcclxufSkoUVJEYXRhTW9kZSA9IGV4cG9ydHMuUVJEYXRhTW9kZSB8fCAoZXhwb3J0cy5RUkRhdGFNb2RlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKRVlYUmhUVzlrWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl0YjJSbGJITXZjWEpFWVhSaFRXOWtaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdPenRIUVVkSE8wRkJRMGdzU1VGQldTeFZRV1ZZTzBGQlprUXNWMEZCV1N4VlFVRlZPMGxCUTJ4Q096dFBRVVZITzBsQlEwZ3NLME5CUVdVc1EwRkJRVHRKUVVWbU96dFBRVVZITzBsQlEwZ3NNa1JCUVhGQ0xFTkJRVUU3U1VGRmNrSTdPMDlCUlVjN1NVRkRTQ3cyUTBGQll5eERRVUZCTzBGQlEyeENMRU5CUVVNc1JVRm1WeXhWUVVGVkxFZEJRVllzYTBKQlFWVXNTMEZCVml4clFrRkJWU3hSUVdWeVFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IHFyQWxwaGFOdW1lcmljXzEgPSByZXF1aXJlKFwiLi9kYXRhL3FyQWxwaGFOdW1lcmljXCIpO1xyXG5jb25zdCBxckJ5dGU4XzEgPSByZXF1aXJlKFwiLi9kYXRhL3FyQnl0ZThcIik7XHJcbmNvbnN0IHFyTnVtYmVyXzEgPSByZXF1aXJlKFwiLi9kYXRhL3FyTnVtYmVyXCIpO1xyXG5jb25zdCBiaXRCdWZmZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvYml0QnVmZmVyXCIpO1xyXG5jb25zdCBtYXRoSGVscGVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL21hdGhIZWxwZXJcIik7XHJcbmNvbnN0IHBvbHlub21pYWxfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcG9seW5vbWlhbFwiKTtcclxuY29uc3QgcXJIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcXJIZWxwZXJcIik7XHJcbmNvbnN0IHJzQmxvY2tfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnMvcnNCbG9ja1wiKTtcclxuY29uc3QgZXJyb3JDb3JyZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9lcnJvckNvcnJlY3RMZXZlbFwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIGdlbmVyYXRlcyBRUiBjb2RlcyBmcm9tIGRhdGEuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUiB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUi5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIDAgdG8gNDAsIDAgbWVhbnMgYXV0b2RldGVjdFxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsICdMJywnTScsJ1EnLCdIJ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlTnVtYmVyID0gNiwgZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkwpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodHlwZU51bWJlcikgfHwgdHlwZU51bWJlciA8IDAgfHwgdHlwZU51bWJlciA+IDQwKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiVGhlIHR5cGVOdW1iZXIgcGFyYW1ldGVyIHNob3VsZCBiZSBhIG51bWJlciA+PSAwIGFuZCA8PSA0MFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbDtcclxuICAgICAgICB0aGlzLl9xckRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLl9tb2R1bGVDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHRleHQgZGF0YSB0byB0aGUgUVIgQ29kZS5cclxuICAgICAqIEBwYXJhbSBxckRhdGEgVGhlIGRhdGEgdG8gYWRkLlxyXG4gICAgICovXHJcbiAgICBhZGRUZXh0KHFyRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxckJ5dGU4XzEuUVJCeXRlOChxckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG51bWJlciB0byB0aGUgUVIgQ29kZS5cclxuICAgICAqIEBwYXJhbSBxckRhdGEgVGhlIGRhdGEgdG8gYWRkLlxyXG4gICAgICovXHJcbiAgICBhZGROdW1iZXIocXJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhLnB1c2gobmV3IHFyTnVtYmVyXzEuUVJOdW1iZXIocXJEYXRhKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbHBoYSBudW1lcmljIHRvIHRoZSBRUiBDb2RlLlxyXG4gICAgICogQHBhcmFtIHFyRGF0YSBUaGUgZGF0YSB0byBhZGQuXHJcbiAgICAgKi9cclxuICAgIGFkZEFscGhhTnVtZXJpYyhxckRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xckRhdGEucHVzaChuZXcgcXJBbHBoYU51bWVyaWNfMS5RUkFscGhhTnVtZXJpYyhxckRhdGEpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgdGhlIGRpc3BsYXkgYnVmZmVyLlxyXG4gICAgICogQHBhcmFtIGNlbGxTaXplIFRoZSBzaXplIG9mIHRoZSBjZWxsIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHBhcmFtIG1hcmdpbiBUaGUgc2l6ZSBvZiB0aGUgbWFyZ2lucyB0byBnZW5lcmF0ZS5cclxuICAgICAqIEByZXR1cm5zIEJvb2xlYW4gYnVmZmVyIG9mIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZSgpIHtcclxuICAgICAgICB0aGlzLmF1dG9EZXRlY3RUeXBlTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5tYWtlSW1wbChmYWxzZSwgdGhpcy5nZXRCZXN0TWFza1BhdHRlcm4oKSk7XHJcbiAgICAgICAgY29uc3QgcGl4ZWxzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9tb2R1bGVDb3VudDsgeSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5fbW9kdWxlQ291bnQ7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzW3hdID0gcGl4ZWxzW3hdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgcGl4ZWxzW3hdW3ldID0gdGhpcy5pc0RhcmsoeSwgeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpeGVscztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgaXNEYXJrKHJvdywgY29sKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcm93XVtjb2xdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVzW3Jvd11bY29sXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEJlc3RNYXNrUGF0dGVybigpIHtcclxuICAgICAgICBsZXQgbWluTG9zdFBvaW50ID0gMDtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYWtlSW1wbCh0cnVlLCBpKTtcclxuICAgICAgICAgICAgY29uc3QgbG9zdFBvaW50ID0gdGhpcy5nZXRMb3N0UG9pbnQoKTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgbWluTG9zdFBvaW50ID4gbG9zdFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0dGVybjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbWFrZUltcGwodGVzdCwgbWFza1BhdHRlcm4pIHtcclxuICAgICAgICB0aGlzLl9tb2R1bGVDb3VudCA9IHRoaXMuX3R5cGVOdW1iZXIgKiA0ICsgMTc7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbW9kdWxlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzLnB1c2goW10pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX21vZHVsZUNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKHRoaXMuX21vZHVsZUNvdW50IC0gNywgMCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIHRoaXMuX21vZHVsZUNvdW50IC0gNyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZU51bWJlciA+PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5tYXBEYXRhKGRhdGEsIG1hc2tQYXR0ZXJuKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgbWFwRGF0YShkYXRhLCBtYXNrUGF0dGVybikge1xyXG4gICAgICAgIGxldCBpbmMgPSAtMTtcclxuICAgICAgICBsZXQgcm93ID0gdGhpcy5fbW9kdWxlQ291bnQgLSAxO1xyXG4gICAgICAgIGxldCBiaXRJbmRleCA9IDc7XHJcbiAgICAgICAgbGV0IGJ5dGVJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgbWFza0Z1bmMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldE1hc2tNZXRob2QobWFza1BhdHRlcm4pO1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IHRoaXMuX21vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgY29sIC09IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aGlsZSAoZmxhZykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAyOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbCAtIGNdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXJrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hc2sgPSBtYXNrRnVuYyhyb3csIGNvbCAtIGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyayA9ICFkYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9IGRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdEluZGV4IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaXRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0SW5kZXggPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm93ICs9IGluYztcclxuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdyAtPSBpbmM7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jID0gLWluYztcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMuX3R5cGVOdW1iZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBwb3NbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBwb3Nbal07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyb3ddW2NvbF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHIgPSAtMjsgciA8PSAyOyByKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gLTI7IGMgPD0gMjsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChyID09PSAwICYmIGMgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybihyb3csIGNvbCkge1xyXG4gICAgICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIHIgPD0gLTEgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gcm93ICsgclxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGNvbCArIGMgPD0gLTEgfHwgdGhpcy5fbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVGltaW5nUGF0dGVybigpIHtcclxuICAgICAgICBmb3IgKGxldCByID0gODsgciA8IHRoaXMuX21vZHVsZUNvdW50IC0gODsgcisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3JdWzZdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JdWzZdID0gciAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGMgPSA4OyBjIDwgdGhpcy5fbW9kdWxlQ291bnQgLSA4OyBjKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbNl1bY10gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbNl1bY10gPSBjICUgMiA9PT0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVHlwZU51bWJlcih0ZXN0KSB7XHJcbiAgICAgICAgY29uc3QgYml0cyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0QkNIVHlwZU51bWJlcih0aGlzLl90eXBlTnVtYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1t+fihpIC8gMyldW2kgJSAzICsgdGhpcy5fbW9kdWxlQ291bnQgLSA4IC0gM10gPVxyXG4gICAgICAgICAgICAgICAgIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2kgJSAzICsgdGhpcy5fbW9kdWxlQ291bnQgLSA4IC0gM11bfn4oaSAvIDMpXSA9XHJcbiAgICAgICAgICAgICAgICAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gKHRoaXMuX2Vycm9yQ29ycmVjdExldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XHJcbiAgICAgICAgY29uc3QgYml0cyA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcbiAgICAgICAgLy8gdmVydGljYWxcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kID0gIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgICAgIGlmIChpIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpIDwgOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpICsgMV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3RoaXMuX21vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBob3Jpem9udGFsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9ICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bdGhpcy5fbW9kdWxlQ291bnQgLSBpIC0gMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IDkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bMTUgLSBpIC0gMSArIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmaXhlZFxyXG4gICAgICAgIHRoaXMuX21vZHVsZXNbdGhpcy5fbW9kdWxlQ291bnQgLSA4XVs4XSA9ICF0ZXN0O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRMb3N0UG9pbnQoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlQ291bnQgPSB0aGlzLl9tb2R1bGVDb3VudDtcclxuICAgICAgICBsZXQgbG9zdFBvaW50ID0gMDtcclxuICAgICAgICAvLyBMRVZFTDFcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FtZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhcmsgPSB0aGlzLmlzRGFyayhyb3csIGNvbCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gMTsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8PSAxOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbCArIGMgPCAwIHx8IG1vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID09PSAwICYmIGMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXJrID09PSB0aGlzLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FtZUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2FtZUNvdW50ID4gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAoMyArIHNhbWVDb3VudCAtIDUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMMlxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSAxOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCB8fCBjb3VudCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExFVkVMM1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdywgY29sICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAzKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgNClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93LCBjb2wgKyA1KVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgNikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gNjsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93ICsgMSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDIsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyAzLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgNCwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3cgKyA1LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgNiwgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDRcclxuICAgICAgICBsZXQgZGFya0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFya0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuICAgICAgICBsb3N0UG9pbnQgKz0gcmF0aW8gKiAxMDtcclxuICAgICAgICByZXR1cm4gbG9zdFBvaW50O1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHJzQmxvY2tzID0gcnNCbG9ja18xLlJTQmxvY2suZ2V0UlNCbG9ja3ModGhpcy5fdHlwZU51bWJlciwgdGhpcy5fZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBiaXRCdWZmZXJfMS5CaXRCdWZmZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3FyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fcXJEYXRhW2ldO1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBkYXRhLmdldExlbmd0aEluQml0cyh0aGlzLl90eXBlTnVtYmVyKSk7XHJcbiAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FsYyBtYXggZGF0YSBjb3VudFxyXG4gICAgICAgIGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5nZXREYXRhQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2UgaW4gdGhlIFFSIGNvZGUgdG8gc3RvcmUgdGhlIGRhdGEsICR7YnVmZmVyLmdldExlbmd0aEluQml0cygpfSA+ICR7dG90YWxEYXRhQ291bnQgKiA4fSwgdHJ5IGluY3JlYXNpbmcgdGhlIHR5cGVOdW1iZXIgZnJvbSAke3RoaXMuX3R5cGVOdW1iZXJ9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZFxyXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgKyA0IDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KDAsIDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT09IDApIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dEJpdChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHBhZGRpbmdcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoUVIuUEFEMCwgOCk7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIucHV0KFFSLlBBRDEsIDgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKSB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgbGV0IG1heERjQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhFY0NvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBkY2RhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBlY2RhdGEgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGRjZGF0YS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgZWNkYXRhLnB1c2goW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVOdW1BcnJheShsZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcclxuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5nZXREYXRhQ291bnQoKTtcclxuICAgICAgICAgICAgY29uc3QgZWNDb3VudCA9IHJzQmxvY2tzW3JdLmdldFRvdGFsQ291bnQoKSAtIGRjQ291bnQ7XHJcbiAgICAgICAgICAgIG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcclxuICAgICAgICAgICAgbWF4RWNDb3VudCA9IE1hdGgubWF4KG1heEVjQ291bnQsIGVjQ291bnQpO1xyXG4gICAgICAgICAgICBkY2RhdGFbcl0gPSBjcmVhdGVOdW1BcnJheShkY0NvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGRjZGF0YVtyXVtpXSA9IDB4RkYgJiBidWZmZXIuZ2V0QnVmZmVyKClbaSArIG9mZnNldF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGRjQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJzUG9seSA9IHFySGVscGVyXzEuUVJIZWxwZXIuZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlY0NvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgcmF3UG9seSA9IG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcclxuICAgICAgICAgICAgZWNkYXRhW3JdID0gY3JlYXRlTnVtQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKSA/IG1vZFBvbHkuZ2V0QXQobW9kSW5kZXgpIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG90YWxDb2RlQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0VG90YWxDb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhID0gY3JlYXRlTnVtQXJyYXkodG90YWxDb2RlQ291bnQpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSBkY2RhdGFbcl1baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2luZGV4XSA9IGVjZGF0YVtyXVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBhdXRvRGV0ZWN0VHlwZU51bWJlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZU51bWJlciA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0eXBlTnVtYmVyID0gMTsgdHlwZU51bWJlciA8PSA0MDsgdHlwZU51bWJlcisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByc0Jsb2NrcyA9IHJzQmxvY2tfMS5SU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIHRoaXMuX2Vycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBiaXRCdWZmZXJfMS5CaXRCdWZmZXIoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX3FyRGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIGRhdGEuZ2V0TGVuZ3RoSW5CaXRzKHR5cGVOdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxEYXRhQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmdldERhdGFDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90eXBlTnVtYmVyID0gdHlwZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVOdW1iZXIgPT09IDQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBRUiBjb2RlIHRvIHN0b3JlIHRoZSBkYXRhLCAke2J1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKX0gPiAke3RvdGFsRGF0YUNvdW50ICogOH0sIHR5cGVOdW1iZXIgY2FuIG5vdCBiZSA+IDQwYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblFSLlBBRDAgPSAweEVDO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUVIuUEFEMSA9IDB4MTE7XHJcbmV4cG9ydHMuUVIgPSBRUjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZjWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlHUVVGcFJqdEJRVU5xUml3d1JFRkJkVVE3UVVGRGRrUXNORU5CUVhsRE8wRkJRM3BETERoRFFVRXlRenRCUVVNelF5eHRSRUZCWjBRN1FVRkRhRVFzY1VSQlFXdEVPMEZCUTJ4RUxIRkVRVUZyUkR0QlFVTnNSQ3hwUkVGQk9FTTdRVUZET1VNc0swTkJRVFJETzBGQlF6VkRMR3RGUVVFclJEdEJRVWt2UkRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEVWQlFVVTdTVUZ4UWxnN096czdUMEZKUnp0SlFVTklMRmxCUVZrc1lVRkJjVUlzUTBGQlF5eEZRVUZGTEc5Q1FVRjFReXh4UTBGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUXpGR0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCUXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRE1VVXNUVUZCVFN4TFFVRkxMRU5CUVVNc05FUkJRVFJFTEVOQlFVTXNRMEZCUXp0VFFVTTNSVHRSUVVORUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0UlFVTTFReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnVRaXgxUWtGQlZTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUExFTkJRVU1zVFVGQll6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVMEZCVXl4RFFVRkRMRTFCUVdNN1VVRkRNMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3h0UWtGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHVkJRV1VzUTBGQlF5eE5RVUZqTzFGQlEycERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NLMEpCUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxGRkJRVkU3VVVGRFdDeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzUTBGQlF6dFJRVVUxUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eERRVUZETzFGQlJXaEVMRTFCUVUwc1RVRkJUU3hIUVVGbExFVkJRVVVzUTBGQlF6dFJRVU01UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU40UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZUVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlF6VkNMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndRenRUUVVOS08xRkJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNSMEZCVnl4RlFVRkZMRWRCUVZjN1VVRkRia01zU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTnNReXhQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJFTTdZVUZCVFR0WlFVTklMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMmhDTzBsQlEwd3NRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hyUWtGQmEwSTdVVUZEZEVJc1NVRkJTU3haUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzSkNMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZvUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJSWGhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJYWkNMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0WlFVVjBReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NXVUZCV1N4SFFVRkhMRk5CUVZNc1JVRkJSVHRuUWtGRGNrTXNXVUZCV1N4SFFVRkhMRk5CUVZNc1EwRkJRenRuUWtGRGVrSXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVObU8xTkJRMG83VVVGRlJDeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRXNRMEZCUXl4SlFVRmhMRVZCUVVVc1YwRkJiVUk3VVVGREwwTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRia0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRlRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yRkJReTlDTzFOQlEwbzdVVUZGUkN4SlFVRkpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pETEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU42UkN4SlFVRkpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZGZWtRc1NVRkJTU3hEUVVGRExEQkNRVUV3UWl4RlFVRkZMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU03VVVGRk1VSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGZEVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUXpsQ08xRkJSVVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJSUzlDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzBsQlEzQkRMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVDBGQlR5eERRVUZETEVsQlFXTXNSVUZCUlN4WFFVRnRRanRSUVVNdlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOaUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMmhETEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NiVUpCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGY2tRc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkZja1FzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOWUxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEV2p0WlFVVkVMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5vUWl4UFFVRlBMRWxCUVVrc1JVRkJSVHRuUWtGRlZDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVWNFFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSVHQzUWtGRmRFTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8zZENRVVZxUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGT3pSQ1FVTjZRaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU4yUkR0M1FrRkZSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dDNRa0ZGY0VNc1NVRkJTU3hKUVVGSkxFVkJRVVU3TkVKQlEwNHNTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRE8zbENRVU5vUWp0M1FrRkZSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdkMEpCUTI1RExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTTdkMEpCUldRc1NVRkJTU3hSUVVGUkxFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdORUpCUTJwQ0xGTkJRVk1zUlVGQlJTeERRVUZET3pSQ1FVTmFMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03ZVVKQlEyaENPM0ZDUVVOS08ybENRVU5LTzJkQ1FVVkVMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU03WjBKQlJWZ3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NSMEZCUnl4RlFVRkZPMjlDUVVOeVF5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRPMjlDUVVOWUxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXp0dlFrRkRXQ3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETzJsQ1FVTm9RanRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMREJDUVVFd1FqdFJRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXh0UWtGQlVTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVnFReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkZha01zVFVGQlRTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU51UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUlc1Q0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEVWQlFVVTdiMEpCUTJ4RExGTkJRVk03YVVKQlExbzdaMEpCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVVXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdkMEpCUlRGQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE95dENRVU4yUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8zbENRVU14UXpzMlFrRkJUVHMwUWtGRFNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8zbENRVU16UXp0eFFrRkRTanRwUWtGRFNqdGhRVU5LTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxIbENRVUY1UWl4RFFVRkRMRWRCUVZjc1JVRkJSU3hIUVVGWE8xRkJRM1JFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNeFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRE8zVkNRVU14UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEYkVRc1UwRkJVenRwUWtGRFdqdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2RVSkJRM1pETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdkVUpCUXpGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU16UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzJsQ1FVTXhRenR4UWtGQlRUdHZRa0ZEU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzJsQ1FVTXpRenRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMR3RDUVVGclFqdFJRVU4wUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETlVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJUdG5Ra0ZET1VJc1UwRkJVenRoUVVOYU8xbEJRMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOeVF6dFJRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU0xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRk8yZENRVU01UWl4VFFVRlRPMkZCUTFvN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTNKRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4bFFVRmxMRU5CUVVNc1NVRkJZVHRSUVVOcVF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4dFFrRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVY2UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzWkVMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzaERPMUZCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU42UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTjRRenRKUVVOTUxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNZVUZCWVN4RFFVRkRMRWxCUVdFc1JVRkJSU3hYUVVGdFFqdFJRVU53UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZETVVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzYlVKQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRk0wTXNWMEZCVnp0UlFVTllMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRmVrSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZGTjBNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTlFMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8yRkJRemRDTzJsQ1FVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEWkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRGFrTTdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRGRFUTdVMEZEU2p0UlFVVkVMR0ZCUVdFN1VVRkRZaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJYcENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUlRkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRVQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRoUVVOeVJEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTTdZVUZETVVNN2FVSkJRVTA3WjBKQlEwZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dGhRVU4wUXp0VFFVTktPMUZCUlVRc1VVRkJVVHRSUVVOU0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOd1JDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRmxCUVZrN1VVRkRhRUlzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVWMFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZiRUlzVTBGQlV6dFJRVVZVTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkZlRU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkZlRU1zU1VGQlNTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVOc1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkZia01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVVeFFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxGZEJRVmNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZPM2RDUVVOMlF5eFRRVUZUTzNGQ1FVTmFPMjlDUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0M1FrRkZNVUlzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hYUVVGWExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlRzMFFrRkRka01zVTBGQlV6dDVRa0ZEV2p0M1FrRkZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHMwUWtGRGNFSXNVMEZCVXp0NVFrRkRXanQzUWtGRlJDeEpRVUZKTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk96UkNRVU40UXl4VFFVRlRMRVZCUVVVc1EwRkJRenQ1UWtGRFpqdHhRa0ZEU2p0cFFrRkRTanRuUWtGRlJDeEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRVZCUVVVN2IwSkJRMllzVTBGQlV5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEY0VNN1lVRkRTanRUUVVOS08xRkJSVVFzVTBGQlV6dFJRVVZVTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRelZETEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8yZENRVU0xUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF6dHBRa0ZCUlR0blFrRkRka01zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdiMEpCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03YVVKQlFVVTdaMEpCUXpORExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRE8ybENRVUZGTzJkQ1FVTXpReXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03YVVKQlFVVTdaMEpCUXk5RExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU0xUWl4VFFVRlRMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU5zUWp0aFFVTktPMU5CUTBvN1VVRkZSQ3hUUVVGVE8xRkJSVlFzUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTjRReXhMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkROVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEyeENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQxUWtGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0MVFrRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZEZWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQxUWtGRGVrSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPM1ZDUVVNeFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUXpsQ0xGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdhVUpCUTI1Q08yRkJRMG83VTBGRFNqdFJRVVZFTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRlRU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRelZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzNWQ1FVTnNRaXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlF6RkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRM3BDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTNwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEzcENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenQxUWtGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMjlDUVVNNVFpeFRRVUZUTEVsQlFVa3NSVUZCUlN4RFFVRkRPMmxDUVVOdVFqdGhRVU5LTzFOQlEwbzdVVUZGUkN4VFFVRlRPMUZCUlZRc1NVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXeENMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4WFFVRlhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3V1VGRGVFTXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRGVFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0dlFrRkRka0lzVTBGQlV5eEZRVUZGTEVOQlFVTTdhVUpCUTJZN1lVRkRTanRUUVVOS08xRkJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzVTBGQlV5eEhRVUZITEZkQlFWY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6ZEZMRk5CUVZNc1NVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJYaENMRTlCUVU4c1UwRkJVeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1ZVRkJWVHRSUVVOa0xFMUJRVTBzVVVGQlVTeEhRVUZqTEdsQ1FVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTTdVVUZGTTBZc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeHhRa0ZCVXl4RlFVRkZMRU5CUVVNN1VVRkZMMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRekZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETjBJc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUTNSQ08xRkJSVVFzYzBKQlFYTkNPMUZCUTNSQ0xFbEJRVWtzWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhqUVVGakxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8xTkJRMmhFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVWNzWTBGQll5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEN0RVFVRXJSQ3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEUxQlFVMHNZMEZCWXl4SFFVRkhMRU5CUVVNc2QwTkJRWGRETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRemxNTzFGQlJVUXNUVUZCVFR0UlFVTk9MRWxCUVVrc1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM0JFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzQkNPMUZCUlVRc1ZVRkJWVHRSUVVOV0xFOUJRVThzVFVGQlRTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGRrTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU40UWp0UlFVVkVMRlZCUVZVN1VVRkRWaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYUVJc1QwRkJUeXhKUVVGSkxFVkJRVVU3V1VGRFZDeEpRVUZKTEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1NVRkJTU3hqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTm9SQ3hOUVVGTk8yRkJRMVE3V1VGRFJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZGtJc1NVRkJTU3hOUVVGTkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVsQlFVa3NZMEZCWXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRGFFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRoUVVOb1FqdHBRa0ZCVFR0blFrRkRTQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VSTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRPVU1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4WFFVRlhMRU5CUVVNc1RVRkJhVUlzUlVGQlJTeFJRVUZ0UWp0UlFVTjBSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGWml4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGJrSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSVzVDTEUxQlFVMHNUVUZCVFN4SFFVRmxMRVZCUVVVc1EwRkJRenRSUVVNNVFpeE5RVUZOTEUxQlFVMHNSMEZCWlN4RlFVRkZMRU5CUVVNN1VVRkZPVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRkRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOb1FpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMjVDTzFGQlJVUXNVMEZCVXl4alFVRmpMRU5CUVVNc1IwRkJWenRaUVVNdlFpeE5RVUZOTEVOQlFVTXNSMEZCWVN4RlFVRkZMRU5CUVVNN1dVRkRka0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRNVUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOaU8xbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUlVRc05FSkJRVFJDTzFGQlJUVkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJYUkRMRTFCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRaUVVNelF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRPMWxCUlhSRUxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU16UXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkZNME1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFpRVU53UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRka01zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEzaEVPMWxCUTBRc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF6dFpRVVZzUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXh0UWtGQlVTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6TkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzZFVKQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSV3hGTEUxQlFVMHNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZEY0VNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1pETEUxQlFVMHNVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZETlVRc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRVU3VTBGRFNqdFJRVVZFTEVsQlFVa3NZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOMFF5eGpRVUZqTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFOQlEycEVPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzWTBGQll5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUXpWRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVmtMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmxDUVVOWU8yRkJRMG83VTBGRFNqdFJRVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1JETEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVTllPMkZCUTBvN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzYjBKQlFXOUNPMUZCUTNoQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRlRUlzUzBGQlN5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hKUVVGSkxFVkJRVVVzUlVGQlJTeFZRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkRja1FzVFVGQlRTeFJRVUZSTEVkQlFVY3NhVUpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzJkQ1FVTXhSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEhGQ1FVRlRMRVZCUVVVc1EwRkJRenRuUWtGRkwwSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTXhReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU0zUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE9VSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTXZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMmxDUVVOMFFqdG5Ra0ZGUkN4SlFVRkpMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlEzWkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTjBReXhqUVVGakxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8ybENRVU5vUkR0blFrRkZSQ3hKUVVGSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNTVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGRk8yOUNRVU5vUkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF6dHZRa0ZET1VJc1RVRkJUVHRwUWtGRFZEdHhRa0ZCVFN4SlFVRkpMRlZCUVZVc1MwRkJTeXhGUVVGRkxFVkJRVVU3YjBKQlF6RkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zSzBSQlFTdEVMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzVFVGQlRTeGpRVUZqTEVkQlFVY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzJsQ1FVTnNTenRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZET3p0QlFXaHJRa1FzWlVGQlpUdEJRVU5UTEU5QlFVa3NSMEZCVnl4SlFVRkpMRU5CUVVNN1FVRkROVU1zWlVGQlpUdEJRVU5UTEU5QlFVa3NSMEZCVnl4SlFVRkpMRU5CUVVNN1FVRkthRVFzWjBKQmEydENReUo5IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9