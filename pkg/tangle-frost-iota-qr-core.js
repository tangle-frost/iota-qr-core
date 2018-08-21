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


var _iterator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js"));

var _symbol = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/create */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/create.js"));

var _setPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/set-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/set-prototype-of.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var _iterator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js"));

var _symbol = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/create */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/create.js"));

var _setPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/set-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/set-prototype-of.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var _iterator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol/iterator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js"));

var _symbol = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/symbol */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/get-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/create */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/create.js"));

var _setPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/set-prototype-of */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/set-prototype-of.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = _setPrototypeOf2.default ? _getPrototypeOf2.default : function _getPrototypeOf(o) { return o.__proto__ || (0, _getPrototypeOf2.default)(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = (0, _create.default)(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = _setPrototypeOf2.default || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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


var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty.default)(target, descriptor.key, descriptor); } }

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

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/create.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/create.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/define-property.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/get-prototype-of.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/get-prototype-of.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/set-prototype-of.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/object/set-prototype-of.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.51/node_modules/@babel/runtime/core-js/symbol/iterator.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/create.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/create.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/define-property.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dps.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-proto.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-proto.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared-key.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-length.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.create.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.create.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/.registry.npmjs.org/core-js/2.5.7/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL2RhdGEvcXJBbHBoYU51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyQnl0ZTgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9kYXRhL3FyTnVtYmVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9iaXRCdWZmZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL21hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3BvbHlub21pYWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9oZWxwZXJzL3FySGVscGVyLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi8uLi9zcmMvaGVscGVycy9yc0Jsb2NrLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvbWFza1BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4uLy4uL3NyYy9tb2RlbHMvcXJEYXRhQmFzZS50cyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi4vLi4vc3JjL21vZGVscy9xckRhdGFNb2RlLnRzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uLi9zcmMvcXIudHMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS41MS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNTEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjAuMC1iZXRhLjUxL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNTEvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS41MS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvQGJhYmVsL3J1bnRpbWUvNy4wLjAtYmV0YS41MS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9UYW5nbGVGcm9zdElvdGFRckNvcmUvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9jb3JlLWpzLzIuNS43L25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvY29yZS1qcy8yLjUuNy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL1RhbmdsZUZyb3N0SW90YVFyQ29yZS8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL2NvcmUtanMvMi41Ljcvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vVGFuZ2xlRnJvc3RJb3RhUXJDb3JlL2V4dGVybmFsIFwiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7O0FBQ0E7QUFF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QUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBeEJ5RCxFQXlCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBekJ5RCxFQTBCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBMUJ5RCxFQTJCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBM0J5RCxFQTRCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBNUJ5RCxFQTZCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBN0J5RCxFQThCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBOUJ5RCxFQStCekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBL0J5RCxFQWdDekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBaEN5RCxFQWlDekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBakN5RCxFQWtDekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBbEN5RCxFQW1DekQsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBbkN5RCxFQW9DekQsQ0FBQyxDQUFELEVB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IiwiZmlsZSI6InRhbmdsZS1mcm9zdC1pb3RhLXFyLWNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQHRhbmdsZS1mcm9zdC9pb3RhLXFyLWNvcmVcIiwgW1wiQHRhbmdsZS1mcm9zdC9pb3RhLWNvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAdGFuZ2xlLWZyb3N0L2lvdGEtcXItY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRhbmdsZUZyb3N0SW90YVFyQ29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0YW5nbGUtZnJvc3QvaW90YS1jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RhbmdsZV9mcm9zdF9pb3RhX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFCYXNlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YUJhc2VcIik7XHJcbmNvbnN0IHFyRGF0YU1vZGVfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhTW9kZVwiKTtcclxuLyoqXHJcbiAqIFFSIERhdGEgZm9yIHJlcHJlc2VudGluZyBhIGFscGhhIG51bWVyaWMuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBRUkFscGhhTnVtZXJpYyBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSQWxwaGFOdW1lcmljLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgZm9yIHRoZSBxciBhbHBoYSBudW1lcmljLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIocXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYWxwaGFOdW1lcmljLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgZGF0YSBpbnRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgdG8gd3JpdGUgaW50by5cclxuICAgICAqL1xyXG4gICAgd3JpdGUoYnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSArIDEgPCBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuZ2V0Q29kZShzLmNoYXJBdChpKSkgKiA0NSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvZGUocy5jaGFyQXQoaSArIDEpKSwgMTEpO1xyXG4gICAgICAgICAgICBpICs9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpIDwgcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLmdldENvZGUocy5jaGFyQXQoaSkpLCA2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldENvZGUoYykge1xyXG4gICAgICAgIGlmIChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtIFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPj0gXCJBXCIgJiYgYyA8PSBcIlpcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gXCJBXCIuY2hhckNvZGVBdCgwKSArIDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChjKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiIFwiOiByZXR1cm4gMzY7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiJFwiOiByZXR1cm4gMzc7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiJVwiOiByZXR1cm4gMzg7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOiByZXR1cm4gMzk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiK1wiOiByZXR1cm4gNDA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLVwiOiByZXR1cm4gNDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiLlwiOiByZXR1cm4gNDI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiL1wiOiByZXR1cm4gNDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiOlwiOiByZXR1cm4gNDQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBjaGFyYWN0ZXIgaW4gc3RyaW5nIDogJHtjfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJBbHBoYU51bWVyaWMgPSBRUkFscGhhTnVtZXJpYztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKQmJIQm9ZVTUxYldWeWFXTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzl4Y2tGc2NHaGhUblZ0WlhKcFl5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUTBFc2NVUkJRV3RFTzBGQlEyeEVMSEZFUVVGclJEdEJRVVZzUkRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEdOQlFXVXNVMEZCVVN4MVFrRkJWVHRKUVVNeFF6czdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFbEJRVms3VVVGRGNFSXNTMEZCU3l4RFFVRkRMSFZDUVVGVkxFTkJRVU1zV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hUUVVGVE8xRkJRMW9zVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNUVUZCYVVJN1VVRkRNVUlzVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWV0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUTA0c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVU0zUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOU0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEVmp0UlFVVkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEWkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRE8wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4UFFVRlBMRU5CUVVNc1EwRkJVenRSUVVWeVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVU4wUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU01UXp0aFFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMWxCUXpkQ0xFOUJRVThzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOdVJEdGhRVUZOTzFsQlEwZ3NVVUZCVVN4RFFVRkRMRVZCUVVVN1owSkJRMUFzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUlzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGNFSXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VJc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRjRUk3YjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVNM1JEdFRRVU5LTzBsQlEwd3NRMEZCUXp0RFFVTktPMEZCTjBSRUxIZERRVFpFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcXJEYXRhQmFzZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFCYXNlXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbi8qKlxyXG4gKiBRUiBEYXRhIGZvciByZXByZXNlbnRpbmcgYSA4IGJpdCBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJCeXRlOCBleHRlbmRzIHFyRGF0YUJhc2VfMS5RUkRhdGFCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFFSQnl0ZTguXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIHFyIDggYml0IGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICBzdXBlcihxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlOCwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvQnl0ZXModGhpcy5nZXREYXRhKCkpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgZGF0YSBpbnRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgdG8gd3JpdGUgaW50by5cclxuICAgICAqL1xyXG4gICAgd3JpdGUoYnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc3RyaW5nVG9CeXRlcyh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YVtpXSwgOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdHJpbmdUb0J5dGVzKHN0cikge1xyXG4gICAgICAgIGNvbnN0IHV0ZjggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKGNoYXJjb2RlIDwgMHg4MCkge1xyXG4gICAgICAgICAgICAgICAgdXRmOC5wdXNoKGNoYXJjb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4ODAwKSB7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhDMCB8IChjaGFyY29kZSA+PiA2KSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4RDgwMCB8fCBjaGFyY29kZSA+PSAweEUwMDApIHtcclxuICAgICAgICAgICAgICAgIHV0ZjgucHVzaCgweEUwIHwgKGNoYXJjb2RlID4+IDEyKSwgMHg4MCB8ICgoY2hhcmNvZGUgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjaGFyY29kZSAmIDB4M0YpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIC8vIFVURi0xNiBlbmNvZGVzIDB4MTAwMDAtMHgxMEZGRkYgYnlcclxuICAgICAgICAgICAgICAgIC8vIHN1YnRyYWN0aW5nIDB4MTAwMDAgYW5kIHNwbGl0dGluZyB0aGVcclxuICAgICAgICAgICAgICAgIC8vIDIwIGJpdHMgb2YgMHgwLTB4RkZGRkYgaW50byB0d28gaGFsdmVzXHJcbiAgICAgICAgICAgICAgICBjaGFyY29kZSA9IDB4MTAwMDAgKyAoKChjaGFyY29kZSAmIDB4M0ZGKSA8PCAxMClcclxuICAgICAgICAgICAgICAgICAgICB8IChzdHIuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XHJcbiAgICAgICAgICAgICAgICB1dGY4LnB1c2goMHhGMCB8IChjaGFyY29kZSA+PiAxOCksIDB4ODAgfCAoKGNoYXJjb2RlID4+IDEyKSAmIDB4M0YpLCAweDgwIHwgKChjaGFyY29kZSA+PiA2KSAmIDB4M0YpLCAweDgwIHwgKGNoYXJjb2RlICYgMHgzRikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1dGY4O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJCeXRlOCA9IFFSQnl0ZTg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkNlWFJsT0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwzRnlRbmwwWlRndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVU5CTEhGRVFVRnJSRHRCUVVOc1JDeHhSRUZCYTBRN1FVRkZiRVE3T3p0SFFVZEhPMEZCUTBnc1RVRkJZU3hQUVVGUkxGTkJRVkVzZFVKQlFWVTdTVUZEYmtNN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4SlFVRlpPMUZCUTNCQ0xFdEJRVXNzUTBGQlF5eDFRa0ZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5zUXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVMEZCVXp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGNrUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4TlFVRnBRanRSUVVNeFFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJoRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6RkNPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeGhRVUZoTEVOQlFVTXNSMEZCVnp0UlFVTTNRaXhOUVVGTkxFbEJRVWtzUjBGQllTeEZRVUZGTEVOQlFVTTdVVUZETVVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1NVRkJTU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRVZCUVVVN1owSkJRMnBDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WVVGRGRrSTdhVUpCUVUwc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eEZRVUZGTzJkQ1FVTjZRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGRGRFSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZGtNN2FVSkJRVTBzU1VGQlNTeFJRVUZSTEVkQlFVY3NUVUZCVFN4SlFVRkpMRkZCUVZFc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlEyaEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVOMlFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZETDBJc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRka003YVVKQlFVMDdaMEpCUTBnc1EwRkJReXhGUVVGRkxFTkJRVU03WjBKQlEwb3NjVU5CUVhGRE8yZENRVU55UXl4M1EwRkJkME03WjBKQlEzaERMSGxEUVVGNVF6dG5Ra0ZEZWtNc1VVRkJVU3hIUVVGSExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzNOQ1FVTXhReXhEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYmtNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRExFVkJRM1pDTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVTm9ReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGREwwSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZGtNN1UwRkRTanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1EwRkRTanRCUVhwRVJDd3dRa0Y1UkVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHFyRGF0YUJhc2VfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvcXJEYXRhQmFzZVwiKTtcclxuY29uc3QgcXJEYXRhTW9kZV8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogUVIgRGF0YSBmb3IgcmVwcmVzZW50aW5nIGEgbnVtYmVyLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJOdW1iZXIgZXh0ZW5kcyBxckRhdGFCYXNlXzEuUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUk51bWJlci5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgcXIgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIocXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JpdGUgZGF0YSBpbnRvIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgdG8gd3JpdGUgaW50by5cclxuICAgICAqL1xyXG4gICAgd3JpdGUoYnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSArIDIgPCBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBidWZmZXIucHV0KHRoaXMuc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDMpKSwgMTApO1xyXG4gICAgICAgICAgICBpICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoIC0gaSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLnN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAxKSksIDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubGVuZ3RoIC0gaSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dCh0aGlzLnN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAyKSksIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdHJUb051bShzKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG51bSA9IG51bSAqIDEwICsgdGhpcy5jaGFyVG9OdW0ocy5jaGFyQXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjaGFyVG9OdW0oYykge1xyXG4gICAgICAgIGlmIChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtIFwiMFwiLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSWxsZWdhbCBjaGFyYWN0ZXIgaW4gc3RyaW5nIDogJHtjfWApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUVJOdW1iZXIgPSBRUk51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKT2RXMWlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5eGNrNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzY1VSQlFXdEVPMEZCUTJ4RUxIRkVRVUZyUkR0QlFVVnNSRHM3TzBkQlIwYzdRVUZEU0N4TlFVRmhMRkZCUVZNc1UwRkJVU3gxUWtGQlZUdEpRVU53UXpzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEVsQlFWazdVVUZEY0VJc1MwRkJTeXhEUVVGRExIVkNRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFRRVUZUTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1RVRkJhVUk3VVVGRE1VSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlJUVkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZXTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzaENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRMVk3VVVGRlJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMnBDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTjJRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVRN2FVSkJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlF6bENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UkR0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFJRVUZSTEVOQlFVTXNRMEZCVXp0UlFVTjBRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEV2l4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU12UWl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTm9SRHRSUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETzBsQlEyWXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hUUVVGVExFTkJRVU1zUTBGQlV6dFJRVU4yUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTjBRaXhQUVVGUExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTVRenRSUVVORUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETVVRc1EwRkJRenREUVVOS08wRkJlRVJFTERSQ1FYZEVReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2xhc3MgZm9yIG1haW50YWluaW5nIGRhdGEgYml0cy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIEJpdEJ1ZmZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9sZW5ndGggPSAwO1xyXG4gICAgfVxyXG4gICAgZ2V0QnVmZmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRMZW5ndGhJbkJpdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcclxuICAgIH1cclxuICAgIHB1dChudW0sIGxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT09IDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1dEJpdChiaXQpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGVuZ3RoID09PSB0aGlzLl9idWZmZXIubGVuZ3RoICogOCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWZmZXJbfn4odGhpcy5fbGVuZ3RoIC8gOCldIHw9ICgweDgwID4+PiAodGhpcy5fbGVuZ3RoICUgOCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sZW5ndGgrKztcclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGhJbkJpdHMoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLmdldEJpdChpKSA/IFwiMVwiIDogXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICBnZXRCaXQoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKCh0aGlzLl9idWZmZXJbfn4oaW5kZXggLyA4KV0gPj4+ICg3IC0gaW5kZXggJSA4KSkgJiAxKSA9PT0gMTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkJpdEJ1ZmZlciA9IEJpdEJ1ZmZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sMFFuVm1abVZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZZbWwwUW5WbVptVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExGTkJRVk03U1VGSmJFSTdVVUZEU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlUwc1UwRkJVenRSUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVTBzWlVGQlpUdFJRVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVk5MRWRCUVVjc1EwRkJReXhIUVVGWExFVkJRVVVzVFVGQll6dFJRVU5zUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOMlJEdEpRVU5NTEVOQlFVTTdTVUZGVFN4TlFVRk5MRU5CUVVNc1IwRkJXVHRSUVVOMFFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM2hDTzFGQlEwUXNTVUZCU1N4SFFVRkhMRVZCUVVVN1dVRkRUQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOMlJUdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVMHNVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5vUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6ZERMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0VFFVTjRRenRSUVVORUxFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZUeXhOUVVGTkxFTkJRVU1zUzBGQllUdFJRVU40UWl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVONlJTeERRVUZETzBOQlEwbzdRVUUxUTBRc09FSkJORU5ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIGhlbHBlciB3aXRoIG1hdGguXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBNYXRoSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbWF0aCBoZWxwZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGlmICghTWF0aEhlbHBlci5FWFBfVEFCTEUpIHtcclxuICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEUgPSBbXTtcclxuICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEUgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEUucHVzaChpIDwgOCA/IDEgPDwgaSA6XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDRdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDVdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDZdIF5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aEhlbHBlci5FWFBfVEFCTEVbaSAtIDhdKTtcclxuICAgICAgICAgICAgICAgIE1hdGhIZWxwZXIuTE9HX1RBQkxFLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTWF0aEhlbHBlci5MT0dfVEFCTEVbTWF0aEhlbHBlci5FWFBfVEFCTEVbaV1dID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsb2cgb2YgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBnZXQgdGhlIGxvZyBvZi5cclxuICAgICAqIEByZXR1cm5zIHRoZSBsb2cgb2YgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2xvZyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBsb2coJyArICR7dmFsdWV9ICsgJyknYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoSGVscGVyLkxPR19UQUJMRVt2YWx1ZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZXhwb25lbnQgb2YgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBnZXQgdGhlIGV4cG9uZW50IG9mLlxyXG4gICAgICogQHJldHVybnMgVGhlIGV4cG9uZW50IG9mIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdleHAodmFsdWUpIHtcclxuICAgICAgICBsZXQgbG9jYWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChsb2NhbFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBsb2NhbFZhbHVlICs9IDI1NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsVmFsdWUgPj0gMjU2KSB7XHJcbiAgICAgICAgICAgIGxvY2FsVmFsdWUgLT0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5FWFBfVEFCTEVbbG9jYWxWYWx1ZV07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NYXRoSGVscGVyID0gTWF0aEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGMGFFaGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMjFoZEdoSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenM3UjBGSFJ6dEJRVU5JTEUxQlFXRXNWVUZCVlR0SlFVMXVRanM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTNaQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUXpGQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUXpGQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUXpGQ0xGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRGRFTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTXpRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJRek5DTEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZETTBJc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGFrTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYUVNN1dVRkRSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXhRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEY2tRN1UwRkRTanRKUVVOTUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRmhPMUZCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTllMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zVjBGQlZ5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMU5CUXpkRE8xRkJRMFFzVDBGQlR5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGaE8xRkJRelZDTEVsQlFVa3NWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVOMlFpeFBRVUZQTEZWQlFWVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRia0lzVlVGQlZTeEpRVUZKTEVkQlFVY3NRMEZCUXp0VFFVTnlRanRSUVVORUxFOUJRVThzVlVGQlZTeEpRVUZKTEVkQlFVY3NSVUZCUlR0WlFVTjBRaXhWUVVGVkxFbEJRVWtzUjBGQlJ5eERRVUZETzFOQlEzSkNPMUZCUTBRc1QwRkJUeXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUXpWRExFTkJRVU03UTBGRFNqdEJRWFJFUkN4blEwRnpSRU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vbWF0aEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIENsYXNzIHRvIHJlcHJlc2VudCBhIHBvbHlub21pYWwuXHJcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9rYXp1aGlrb2FyYXNlL3FyY29kZS1nZW5lcmF0b3IvXHJcbiAqL1xyXG5jbGFzcyBQb2x5bm9taWFsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFBvbHlub21pYWwuXHJcbiAgICAgKiBAcGFyYW0gbnVtIFRoZSBudW0gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKiBAcGFyYW0gc2hpZnQgVGhlIHNoaWZ0IGZvciB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtLCBzaGlmdCA9IDApIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbnVtLmxlbmd0aCAmJiBudW1bb2Zmc2V0XSA9PT0gMCkge1xyXG4gICAgICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbnVtID0gW107XHJcbiAgICAgICAgY29uc3QgbGVuID0gbnVtLmxlbmd0aCAtIG9mZnNldDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX251bS5wdXNoKG51bVtvZmZzZXQgKyBpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpZnQ7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLl9udW0ucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0aGUgdmFsdWUgb2YgdGhlIHBvbHlub21pYWwgYXQgZ2l2ZW4gaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4LlxyXG4gICAgICogQHJldHVybnMgVGhlIHZhbHVlIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBnZXRBdChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW1baW5kZXhdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHBvbHlub21pYWwgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwb2x5bm9taWFsLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBcIixcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5nZXRBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxvZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcG9seW5vbWlhbC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsb2cgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBvbHlub21pYWwuXHJcbiAgICAgKi9cclxuICAgIHRvTG9nU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiLFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE11bHRpcGx5IHRoZSBwb2x5bm9taWFsIHdpdGggYW5vdGhlciBvbmUuXHJcbiAgICAgKiBAcGFyYW0gZSBUaGUgcG9seW5vbWlhbCB0byBtdWx0aXBseS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBtdWx0aXBsaWNhdGlvbiBvZiB0aGUgcG9seW5vbWlhbHMuXHJcbiAgICAgKi9cclxuICAgIG11bHRpcGx5KGUpIHtcclxuICAgICAgICBjb25zdCBudW0gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmdldExlbmd0aCgpICsgZS5nZXRMZW5ndGgoKSAtIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBudW0ucHVzaCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG51bVtpICsgal0gXj0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKHRoaXMuZ2V0QXQoaSkpICtcclxuICAgICAgICAgICAgICAgICAgICBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoaikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBvbHlub21pYWwobnVtKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtb2R1bHVzIG9mIHRoZSBwb2x5bm9taWFsIGZyb20gYW5vdGhlci5cclxuICAgICAqIEBwYXJhbSBlIFRoZSBwb2x5bm9taWFsLlxyXG4gICAgICogQHJldHVybnMgVGhlIG1vZHVsZXMgb2YgdGhlIHBvbHlub21pYWxzLlxyXG4gICAgICovXHJcbiAgICBtb2QoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2xvZyh0aGlzLmdldEF0KDApKSAtIG1hdGhIZWxwZXJfMS5NYXRoSGVscGVyLmdsb2coZS5nZXRBdCgwKSk7XHJcbiAgICAgICAgLy8gY3JlYXRlIGNvcHlcclxuICAgICAgICBjb25zdCBudW0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBudW0ucHVzaCh0aGlzLmdldEF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidHJhY3QgYW5kIGNhbGMgcmVzdC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG4gICAgICAgICAgICBudW1baV0gXj0gbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5nbG9nKGUuZ2V0QXQoaSkpICsgcmF0aW8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZWx5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2x5bm9taWFsKG51bSkubW9kKGUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUG9seW5vbWlhbCA9IFBvbHlub21pYWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHOXNlVzV2YldsaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDNCdmJIbHViMjFwWVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERaRFFVRXdRenRCUVVVeFF6czdPMGRCUjBjN1FVRkRTQ3hOUVVGaExGVkJRVlU3U1VGSmJrSTdPenM3VDBGSlJ6dEpRVU5JTEZsQlFWa3NSMEZCWVN4RlFVRkZMRkZCUVdkQ0xFTkJRVU03VVVGRGVFTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV1lzVDBGQlR5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpkRExFMUJRVTBzUlVGQlJTeERRVUZETzFOQlExbzdVVUZGUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5tTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEyaERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMjVETzFGQlEwUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNMVFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU55UWp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTeXhEUVVGRExFdEJRV0U3VVVGRGRFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VFFVRlRPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNaRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRVQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETzJGQlEycENPMWxCUTBRc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMEk3VVVGRFJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVjBGQlZ6dFJRVU5rTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFVDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRPMkZCUTJwQ08xbEJRMFFzVFVGQlRTeEpRVUZKTEhWQ1FVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNMVF6dFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NVVUZCVVN4RFFVRkRMRU5CUVdFN1VVRkRla0lzVFVGQlRTeEhRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJwRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTm1PMUZCUTBRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjJReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOd1F5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzaEVMSFZDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExFbEJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUjBGQlJ5eERRVUZETEVOQlFXRTdVVUZEY0VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU4wUXl4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVObU8xRkJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NkVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExIVkNRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXpSU3hqUVVGak8xRkJRMlFzVFVGQlRTeEhRVUZITEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRka01zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBJN1VVRkZSQ3d3UWtGQk1FSTdVVUZETVVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTndReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NkVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zZFVKQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNiVUpCUVcxQ08xRkJRMjVDTEU5QlFVOHNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03UTBGRFNqdEJRWFpJUkN4blEwRjFTRU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZXJyb3JDb3JyZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbmNvbnN0IG1hc2tQYXR0ZXJuXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL21hc2tQYXR0ZXJuXCIpO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi4vbW9kZWxzL3FyRGF0YU1vZGVcIik7XHJcbmNvbnN0IG1hdGhIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL21hdGhIZWxwZXJcIik7XHJcbmNvbnN0IHBvbHlub21pYWxfMSA9IHJlcXVpcmUoXCIuL3BvbHlub21pYWxcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgbWV0aG9kcyBmb3IgUVIgZ2VuZXJhdGlvbi5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFFSSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBwYXR0ZXJuIHBvc2l0aW9uIGZvciB0aGUgZ2l2ZW4gdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIgdG8gZ2V0IHRoZSBwYXR0ZXJuIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBwYXR0ZXJuIGZvciB0aGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRQYXR0ZXJuUG9zaXRpb24odHlwZU51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBRUkhlbHBlci5QQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXIgLSAxXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtYXggbGVuZ3RoIG9mIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHR5cGVOdW1iZXIgVGhlIHR5cGUgbnVtYmVyIHRvIGdldCB0aGUgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBUaGUgZGF0YSBtb2RlIHRvIGdldCBkYXRhIG1heCBsZW5ndGggZm9yLlxyXG4gICAgICogQHBhcmFtIGVycm9yQ29ycmVjdExldmVsIFRoZSBlcnJvciBjb3JyZWN0aW9uIHRvIGdldCB0aGUgbWF4IGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWF4IGxlbmd0aC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldE1heExlbmd0aCh0eXBlTnVtYmVyLCBtb2RlLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IHQgPSB0eXBlTnVtYmVyIC0gMTtcclxuICAgICAgICBsZXQgZSA9IDA7XHJcbiAgICAgICAgbGV0IG0gPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkw6XHJcbiAgICAgICAgICAgICAgICBlID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTTpcclxuICAgICAgICAgICAgICAgIGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5ROlxyXG4gICAgICAgICAgICAgICAgZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkg6XHJcbiAgICAgICAgICAgICAgICBlID0gMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgJHtlcnJvckNvcnJlY3RMZXZlbH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgbSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6XHJcbiAgICAgICAgICAgICAgICBtID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmJ5dGU4OlxyXG4gICAgICAgICAgICAgICAgbSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBkYXRhIG1vZGUgJHttb2RlfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUVJIZWxwZXIuTUFYX0xFTkdUSFt0XVtlXVttXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBlcnJvciBjb3JyZWN0aW9uIHBvbHlub21pYWwgZm9yIHRoZSBlcnJvciBjb3JyZWN0byBsZW5ndGguXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGVuZ3RoIFRoZSBlcnJvciBjb3JyZWN0aW9uIGxlbmd0aCB0byBnZXQgdGhlIHBvbHlub21pYWwgZm9yLlxyXG4gICAgICogQHJldHVybnMgVGhlIHBvbHlub21pYWwgZm9yIHRoZSBlcnJvciBjb3JyZWN0aW9uIGxlbmd0aC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZXJyb3JDb3JyZWN0TGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGEgPSBuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoWzFdKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLm11bHRpcGx5KG5ldyBwb2x5bm9taWFsXzEuUG9seW5vbWlhbChbMSwgbWF0aEhlbHBlcl8xLk1hdGhIZWxwZXIuZ2V4cChpKV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWFzayBtZXRob2QgZm9yIHRoZSBnaXZlbiBwYXR0ZXJuLlxyXG4gICAgICogQHBhcmFtIG1hc2tQYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIGdldCB0aGUgbWFzayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbWFzayBtZXRob2QgZm9yIHRoZSBwYXR0ZXJuLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0TWFza01ldGhvZChtYXNrUGF0dGVybikge1xyXG4gICAgICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICsgaikgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gaSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMDEwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiBqICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+IChpICsgaikgJSAzID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKH5+KGkgLyAyKSArIH5+KGogLyAzKSkgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBjYXNlIG1hc2tQYXR0ZXJuXzEuTWFza1BhdHRlcm4uUEFUVEVSTjEwMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoaSwgaikgPT4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PT0gMDtcclxuICAgICAgICAgICAgY2FzZSBtYXNrUGF0dGVybl8xLk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGksIGopID0+ICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT09IDA7XHJcbiAgICAgICAgICAgIGNhc2UgbWFza1BhdHRlcm5fMS5NYXNrUGF0dGVybi5QQVRURVJOMTExOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChpLCBqKSA9PiAoKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09PSAwO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1hc2sgJHttYXNrUGF0dGVybn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgQkNIIHR5cGUgaW5mby5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGdldCB0aGUgQkNIIHR5cGUgaW5mbyBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHlwZSBpbmZvLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0QkNIVHlwZUluZm8oZGF0YSkge1xyXG4gICAgICAgIGxldCBkID0gZGF0YSA8PCAxMDtcclxuICAgICAgICB3aGlsZSAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLSBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTUpID49IDApIHtcclxuICAgICAgICAgICAgZCBePSAoUVJIZWxwZXIuRzE1IDw8IChRUkhlbHBlci5nZXRCQ0hEaWdpdChkKSAtXHJcbiAgICAgICAgICAgICAgICBRUkhlbHBlci5nZXRCQ0hEaWdpdChRUkhlbHBlci5HMTUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKGRhdGEgPDwgMTApIHwgZCkgXiBRUkhlbHBlci5HMTVfTUFTSztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBCQ0ggdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBnZXQgdGhlIEJDSCB0eXBlIG51bWJlciBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCQ0hUeXBlTnVtYmVyKGRhdGEpIHtcclxuICAgICAgICBsZXQgZCA9IGRhdGEgPDwgMTI7XHJcbiAgICAgICAgd2hpbGUgKFFSSGVscGVyLmdldEJDSERpZ2l0KGQpIC0gUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE4KSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGQgXj0gKFFSSGVscGVyLkcxOCA8PCAoUVJIZWxwZXIuZ2V0QkNIRGlnaXQoZCkgLVxyXG4gICAgICAgICAgICAgICAgUVJIZWxwZXIuZ2V0QkNIRGlnaXQoUVJIZWxwZXIuRzE4KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGdldEJDSERpZ2l0KGRhdGEpIHtcclxuICAgICAgICBsZXQgbG9jYWxEYXRhID0gZGF0YTtcclxuICAgICAgICBsZXQgZGlnaXQgPSAwO1xyXG4gICAgICAgIHdoaWxlIChsb2NhbERhdGEgIT09IDApIHtcclxuICAgICAgICAgICAgZGlnaXQrKztcclxuICAgICAgICAgICAgbG9jYWxEYXRhID4+Pj0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2l0O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5QQVRURVJOX1BPU0lUSU9OX1RBQkxFID0gW1xyXG4gICAgW10sXHJcbiAgICBbNiwgMThdLFxyXG4gICAgWzYsIDIyXSxcclxuICAgIFs2LCAyNl0sXHJcbiAgICBbNiwgMzBdLFxyXG4gICAgWzYsIDM0XSxcclxuICAgIFs2LCAyMiwgMzhdLFxyXG4gICAgWzYsIDI0LCA0Ml0sXHJcbiAgICBbNiwgMjYsIDQ2XSxcclxuICAgIFs2LCAyOCwgNTBdLFxyXG4gICAgWzYsIDMwLCA1NF0sXHJcbiAgICBbNiwgMzIsIDU4XSxcclxuICAgIFs2LCAzNCwgNjJdLFxyXG4gICAgWzYsIDI2LCA0NiwgNjZdLFxyXG4gICAgWzYsIDI2LCA0OCwgNzBdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzRdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzhdLFxyXG4gICAgWzYsIDMwLCA1NiwgODJdLFxyXG4gICAgWzYsIDMwLCA1OCwgODZdLFxyXG4gICAgWzYsIDM0LCA2MiwgOTBdLFxyXG4gICAgWzYsIDI4LCA1MCwgNzIsIDk0XSxcclxuICAgIFs2LCAyNiwgNTAsIDc0LCA5OF0sXHJcbiAgICBbNiwgMzAsIDU0LCA3OCwgMTAyXSxcclxuICAgIFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxyXG4gICAgWzYsIDMyLCA1OCwgODQsIDExMF0sXHJcbiAgICBbNiwgMzAsIDU4LCA4NiwgMTE0XSxcclxuICAgIFs2LCAzNCwgNjIsIDkwLCAxMThdLFxyXG4gICAgWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2XSxcclxuICAgIFs2LCAyNiwgNTIsIDc4LCAxMDQsIDEzMF0sXHJcbiAgICBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxyXG4gICAgWzYsIDM0LCA2MCwgODYsIDExMiwgMTM4XSxcclxuICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0Ml0sXHJcbiAgICBbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxyXG4gICAgWzYsIDMwLCA1NCwgNzgsIDEwMiwgMTI2LCAxNTBdLFxyXG4gICAgWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxyXG4gICAgWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxyXG4gICAgWzYsIDMyLCA1OCwgODQsIDExMCwgMTM2LCAxNjJdLFxyXG4gICAgWzYsIDI2LCA1NCwgODIsIDExMCwgMTM4LCAxNjZdLFxyXG4gICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXHJcbl07XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5NQVhfTEVOR1RIID0gW1xyXG4gICAgW1s0MSwgMjUsIDE3LCAxMF0sIFszNCwgMjAsIDE0LCA4XSwgWzI3LCAxNiwgMTEsIDddLCBbMTcsIDEwLCA3LCA0XV0sXHJcbiAgICBbWzc3LCA0NywgMzIsIDIwXSwgWzYzLCAzOCwgMjYsIDE2XSwgWzQ4LCAyOSwgMjAsIDEyXSwgWzM0LCAyMCwgMTQsIDhdXSxcclxuICAgIFtbMTI3LCA3NywgNTMsIDMyXSwgWzEwMSwgNjEsIDQyLCAyNl0sIFs3NywgNDcsIDMyLCAyMF0sIFs1OCwgMzUsIDI0LCAxNV1dLFxyXG4gICAgW1sxODcsIDExNCwgNzgsIDQ4XSwgWzE0OSwgOTAsIDYyLCAzOF0sIFsxMTEsIDY3LCA0NiwgMjhdLCBbODIsIDUwLCAzNCwgMjFdXSxcclxuICAgIFtbMjU1LCAxNTQsIDEwNiwgNjVdLCBbMjAyLCAxMjIsIDg0LCA1Ml0sIFsxNDQsIDg3LCA2MCwgMzddLCBbMTA2LCA2NCwgNDQsIDI3XV0sXHJcbiAgICBbWzMyMiwgMTk1LCAxMzQsIDgyXSwgWzI1NSwgMTU0LCAxMDYsIDY1XSwgWzE3OCwgMTA4LCA3NCwgNDVdLCBbMTM5LCA4NCwgNTgsIDM2XV0sXHJcbiAgICBbWzM3MCwgMjI0LCAxNTQsIDk1XSwgWzI5MywgMTc4LCAxMjIsIDc1XSwgWzIwNywgMTI1LCA4NiwgNTNdLCBbMTU0LCA5MywgNjQsIDM5XV0sXHJcbiAgICBbWzQ2MSwgMjc5LCAxOTIsIDExOF0sIFszNjUsIDIyMSwgMTUyLCA5M10sIFsyNTksIDE1NywgMTA4LCA2Nl0sIFsyMDIsIDEyMiwgODQsIDUyXV0sXHJcbiAgICBbWzU1MiwgMzM1LCAyMzAsIDE0MV0sIFs0MzIsIDI2MiwgMTgwLCAxMTFdLCBbMzEyLCAxODksIDEzMCwgODBdLCBbMjM1LCAxNDMsIDk4LCA2MF1dLFxyXG4gICAgW1s2NTIsIDM5NSwgMjcxLCAxNjddLCBbNTEzLCAzMTEsIDIxMywgMTMxXSwgWzM2NCwgMjIxLCAxNTEsIDkzXSwgWzI4OCwgMTc0LCAxMTksIDc0XV1cclxuXTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSlcclxuICAgIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUkhlbHBlci5HMTggPSAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMClcclxuICAgIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcclxuLyogQGludGVybmFsICovXHJcblFSSGVscGVyLkcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApXHJcbiAgICB8ICgxIDw8IDQpIHwgKDEgPDwgMSk7XHJcbmV4cG9ydHMuUVJIZWxwZXIgPSBRUkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OXhja2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2JVVkJRV2RGTzBGQlEyaEZMSFZFUVVGdlJEdEJRVU53UkN4eFJFRkJhMFE3UVVGRGJFUXNOa05CUVRCRE8wRkJRekZETERaRFFVRXdRenRCUVVVeFF6czdPMGRCUjBjN1FVRkRTQ3hOUVVGaExGRkJRVkU3U1VGMVJXcENPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNWVUZCYTBJN1VVRkRMME1zVDBGQlR5eFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpORUxFTkJRVU03U1VGRlJEczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExGVkJRV3RDTEVWQlFVVXNTVUZCWjBJc1JVRkJSU3hwUWtGQmIwTTdVVUZEYWtjc1RVRkJUU3hEUVVGRExFZEJRVWNzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRlZpeFJRVUZSTEdsQ1FVRnBRaXhGUVVGRk8xbEJRM1pDTEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVUZETEUxQlFVMDdXVUZEZGtNc1MwRkJTeXh4UTBGQmFVSXNRMEZCUXl4RFFVRkRPMmRDUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUVVNc1RVRkJUVHRaUVVOMlF5eExRVUZMTEhGRFFVRnBRaXhEUVVGRExFTkJRVU03WjBKQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eE5RVUZOTzFsQlEzWkRMRXRCUVVzc2NVTkJRV2xDTEVOQlFVTXNRMEZCUXp0blFrRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVRkRMRTFCUVUwN1dVRkRka003WjBKQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUTBGQmEwTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUlVRc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFZpeExRVUZMTEhWQ1FVRlZMRU5CUVVNc1RVRkJUVHRuUWtGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFMUJRVTA3V1VGRGNrTXNTMEZCU3l4MVFrRkJWU3hEUVVGRExGbEJRVms3WjBKQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGQlF5eE5RVUZOTzFsQlF6TkRMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eExRVUZMTzJkQ1FVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlFVTXNUVUZCVFR0WlFVTndRenRuUWtGRFNTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSEZDUVVGeFFpeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNCRU8xRkJSVVFzVDBGQlR5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExHdENRVUV3UWp0UlFVTTVSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEhWQ1FVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUVkNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4clFrRkJhMElzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjZReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMSFZDUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNkVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMFE3VVVGRlJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTmlMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZ0UWp0UlFVTXpReXhSUVVGUkxGZEJRVmNzUlVGQlJUdFpRVU5xUWl4TFFVRkxMSGxDUVVGWExFTkJRVU1zVlVGQlZUdG5Ra0ZEZGtJc1QwRkJUeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRka1FzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOcVJDeExRVUZMTEhsQ1FVRlhMRU5CUVVNc1ZVRkJWVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRMnBFTEV0QlFVc3NlVUpCUVZjc1EwRkJReXhWUVVGVk8yZENRVU4yUWl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hMUVVGTExIbENRVUZYTEVOQlFVTXNWVUZCVlR0blFrRkRka0lzVDBGQlR5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEZGtVc1MwRkJTeXg1UWtGQlZ5eERRVUZETEZWQlFWVTdaMEpCUTNaQ0xFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOeVJTeExRVUZMTEhsQ1FVRlhMRU5CUVVNc1ZVRkJWVHRuUWtGRGRrSXNUMEZCVHl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRNMFVzUzBGQlN5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVN1owSkJRM1pDTEU5QlFVOHNRMEZCUXl4RFFVRlRMRVZCUVVVc1EwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUlRORk8yZENRVU5KTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRkRVE3U1VGRFRDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJXVHRSUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMjVDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEZEVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTXhReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE5VTTdVVUZEUkN4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU5zUkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRlpPMUZCUTNaRExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRia0lzVDBGQlR5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4wUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6RkRMRkZCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNMVF6dFJRVU5FTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRlpPMUZCUTI1RExFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnlRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4UFFVRlBMRk5CUVZNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNTMEZCU3l4RlFVRkZMRU5CUVVNN1dVRkRVaXhUUVVGVExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEzQkNPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXpzN1FVRm9UVVFzWlVGQlpUdEJRVU5UTEN0Q1FVRnpRaXhIUVVGbE8wbEJRM3BFTEVWQlFVVTdTVUZEUml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFppeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5tTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEyWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEWml4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTm1MRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTJZc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTI1Q0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU53UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRjRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzQkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOd1FpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZEY0VJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF6dEpRVU40UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRM3BDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRla0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0SlFVTjZRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEzcENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRGVrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVONlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNNVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNNVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNNVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNNVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVNNVFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenREUVVOcVF5eERRVUZETzBGQlJVWXNaVUZCWlR0QlFVTlRMRzFDUVVGVkxFZEJRV2xDTzBsQlF5OURMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU53UlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGRrVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRekZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNMVJTeERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRMMFVzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTJwR0xFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEY0VZc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEzSkdMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dERRVU42Uml4RFFVRkRPMEZCUlVZc1pVRkJaVHRCUVVOVExGbEJRVWNzUjBGQlZ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VFVGREwwUXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRmFFUXNaVUZCWlR0QlFVTlRMRmxCUVVjc1IwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1RVRkRha1VzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGTTBRc1pVRkJaVHRCUVVOVExHbENRVUZSTEVkQlFWY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzAxQlEzUkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJja1U1UWl3MFFrRnJUVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZXJyb3JDb3JyZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byByZXByZXNlbnQgYSBSUyBCbG9jay5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbmNsYXNzIFJTQmxvY2sge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zc3RhbmNlIG9mIFJTQmxvY2suXHJcbiAgICAgKiBAcGFyYW0gdG90YWxDb3VudCBUaGUgdG90YWwgY291bnQgZm9yIHRoZSBibG9jay5cclxuICAgICAqIEBwYXJhbSBkYXRhQ291bnQgVGhlIGRhdGEgY291bnQgZm9yIHRoZSBibG9jay5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodG90YWxDb3VudCwgZGF0YUNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5fdG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5fZGF0YUNvdW50ID0gZGF0YUNvdW50O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgUlMgQmxvY2tzIGZvciB0aGUgdHlwZSBudW1iZXIgYW5kIGVycm9yIGNvcnJlY3QgbGV2ZWwuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciBUaGUgdHlwZSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0TGV2ZWwgVGhlIGVycm9yIGNvcnJlY3QgbGV2ZWwuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgUlMgQmxvY2tzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICBjb25zdCByc0Jsb2NrID0gUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUNvdW50ID0gcnNCbG9ja1tpICogMyArIDJdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChuZXcgUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkw6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDBdO1xyXG4gICAgICAgICAgICBjYXNlIGVycm9yQ29ycmVjdExldmVsXzEuRXJyb3JDb3JyZWN0TGV2ZWwuTTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMV07XHJcbiAgICAgICAgICAgIGNhc2UgZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5ROlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAyXTtcclxuICAgICAgICAgICAgY2FzZSBlcnJvckNvcnJlY3RMZXZlbF8xLkVycm9yQ29ycmVjdExldmVsLkg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDNdO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZXJyb3IgY29ycmVjdCBsZXZlbCAke2Vycm9yQ29ycmVjdExldmVsfWApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEgY291bnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBjb3VudC5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YUNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhQ291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdG90YWwgY291bnQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdG90YWwgY291bnQuXHJcbiAgICAgKi9cclxuICAgIGdldFRvdGFsQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ291bnQ7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblJTQmxvY2suUlNfQkxPQ0tfVEFCTEUgPSBbXHJcbiAgICAvLyBMXHJcbiAgICAvLyBNXHJcbiAgICAvLyBRXHJcbiAgICAvLyBIXHJcbiAgICAvLyAxXHJcbiAgICBbMSwgMjYsIDE5XSxcclxuICAgIFsxLCAyNiwgMTZdLFxyXG4gICAgWzEsIDI2LCAxM10sXHJcbiAgICBbMSwgMjYsIDldLFxyXG4gICAgLy8gMlxyXG4gICAgWzEsIDQ0LCAzNF0sXHJcbiAgICBbMSwgNDQsIDI4XSxcclxuICAgIFsxLCA0NCwgMjJdLFxyXG4gICAgWzEsIDQ0LCAxNl0sXHJcbiAgICAvLyAzXHJcbiAgICBbMSwgNzAsIDU1XSxcclxuICAgIFsxLCA3MCwgNDRdLFxyXG4gICAgWzIsIDM1LCAxN10sXHJcbiAgICBbMiwgMzUsIDEzXSxcclxuICAgIC8vIDRcclxuICAgIFsxLCAxMDAsIDgwXSxcclxuICAgIFsyLCA1MCwgMzJdLFxyXG4gICAgWzIsIDUwLCAyNF0sXHJcbiAgICBbNCwgMjUsIDldLFxyXG4gICAgLy8gNVxyXG4gICAgWzEsIDEzNCwgMTA4XSxcclxuICAgIFsyLCA2NywgNDNdLFxyXG4gICAgWzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcclxuICAgIFsyLCAzMywgMTEsIDIsIDM0LCAxMl0sXHJcbiAgICAvLyA2XHJcbiAgICBbMiwgODYsIDY4XSxcclxuICAgIFs0LCA0MywgMjddLFxyXG4gICAgWzQsIDQzLCAxOV0sXHJcbiAgICBbNCwgNDMsIDE1XSxcclxuICAgIC8vIDdcclxuICAgIFsyLCA5OCwgNzhdLFxyXG4gICAgWzQsIDQ5LCAzMV0sXHJcbiAgICBbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxyXG4gICAgWzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcclxuICAgIC8vIDhcclxuICAgIFsyLCAxMjEsIDk3XSxcclxuICAgIFsyLCA2MCwgMzgsIDIsIDYxLCAzOV0sXHJcbiAgICBbNCwgNDAsIDE4LCAyLCA0MSwgMTldLFxyXG4gICAgWzQsIDQwLCAxNCwgMiwgNDEsIDE1XSxcclxuICAgIC8vIDlcclxuICAgIFsyLCAxNDYsIDExNl0sXHJcbiAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG4gICAgWzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcclxuICAgIFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXHJcbiAgICAvLyAxMFxyXG4gICAgWzIsIDg2LCA2OCwgMiwgODcsIDY5XSxcclxuICAgIFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXHJcbiAgICBbNiwgNDMsIDE5LCAyLCA0NCwgMjBdLFxyXG4gICAgWzYsIDQzLCAxNSwgMiwgNDQsIDE2XSxcclxuICAgIC8vIDExXHJcbiAgICBbNCwgMTAxLCA4MV0sXHJcbiAgICBbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG4gICAgWzQsIDUwLCAyMiwgNCwgNTEsIDIzXSxcclxuICAgIFszLCAzNiwgMTIsIDgsIDM3LCAxM10sXHJcbiAgICAvLyAxMlxyXG4gICAgWzIsIDExNiwgOTIsIDIsIDExNywgOTNdLFxyXG4gICAgWzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuICAgIFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXHJcbiAgICBbNywgNDIsIDE0LCA0LCA0MywgMTVdLFxyXG4gICAgLy8gMTNcclxuICAgIFs0LCAxMzMsIDEwN10sXHJcbiAgICBbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxyXG4gICAgWzgsIDQ0LCAyMCwgNCwgNDUsIDIxXSxcclxuICAgIFsxMiwgMzMsIDExLCA0LCAzNCwgMTJdLFxyXG4gICAgLy8gMTRcclxuICAgIFszLCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG4gICAgWzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuICAgIFsxMSwgMzYsIDE2LCA1LCAzNywgMTddLFxyXG4gICAgWzExLCAzNiwgMTIsIDUsIDM3LCAxM10sXHJcbiAgICAvLyAxNVxyXG4gICAgWzUsIDEwOSwgODcsIDEsIDExMCwgODhdLFxyXG4gICAgWzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuICAgIFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcbiAgICBbMTEsIDM2LCAxMiwgNywgMzcsIDEzXSxcclxuICAgIC8vIDE2XHJcbiAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcbiAgICBbNywgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG4gICAgWzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXHJcbiAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuICAgIC8vIDE3XHJcbiAgICBbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuICAgIFsxMCwgNzQsIDQ2LCAxLCA3NSwgNDddLFxyXG4gICAgWzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXHJcbiAgICBbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuICAgIC8vIDE4XHJcbiAgICBbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcclxuICAgIFs5LCA2OSwgNDMsIDQsIDcwLCA0NF0sXHJcbiAgICBbMTcsIDUwLCAyMiwgMSwgNTEsIDIzXSxcclxuICAgIFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxyXG4gICAgLy8gMTlcclxuICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG4gICAgWzMsIDcwLCA0NCwgMTEsIDcxLCA0NV0sXHJcbiAgICBbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcclxuICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG4gICAgLy8gMjBcclxuICAgIFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG4gICAgWzMsIDY3LCA0MSwgMTMsIDY4LCA0Ml0sXHJcbiAgICBbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcclxuICAgIFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuICAgIC8vIDIxXHJcbiAgICBbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcclxuICAgIFsxNywgNjgsIDQyXSxcclxuICAgIFsxNywgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG4gICAgWzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXHJcbiAgICAvLyAyMlxyXG4gICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcbiAgICBbMTcsIDc0LCA0Nl0sXHJcbiAgICBbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuICAgIFszNCwgMzcsIDEzXSxcclxuICAgIC8vIDIzXHJcbiAgICBbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuICAgIFs0LCA3NSwgNDcsIDE0LCA3NiwgNDhdLFxyXG4gICAgWzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG4gICAgLy8gMjRcclxuICAgIFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG4gICAgWzYsIDczLCA0NSwgMTQsIDc0LCA0Nl0sXHJcbiAgICBbMTEsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXHJcbiAgICBbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcclxuICAgIC8vIDI1XHJcbiAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuICAgIFs4LCA3NSwgNDcsIDEzLCA3NiwgNDhdLFxyXG4gICAgWzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcbiAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcbiAgICAvLyAyNlxyXG4gICAgWzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG4gICAgWzE5LCA3NCwgNDYsIDQsIDc1LCA0N10sXHJcbiAgICBbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuICAgIFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG4gICAgLy8gMjdcclxuICAgIFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG4gICAgWzIyLCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcbiAgICBbOCwgNTMsIDIzLCAyNiwgNTQsIDI0XSxcclxuICAgIFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuICAgIC8vIDI4XHJcbiAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcbiAgICBbMywgNzMsIDQ1LCAyMywgNzQsIDQ2XSxcclxuICAgIFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxyXG4gICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG4gICAgLy8gMjlcclxuICAgIFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG4gICAgWzIxLCA3MywgNDUsIDcsIDc0LCA0Nl0sXHJcbiAgICBbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcclxuICAgIFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuICAgIC8vIDMwXHJcbiAgICBbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXHJcbiAgICBbMTksIDc1LCA0NywgMTAsIDc2LCA0OF0sXHJcbiAgICBbMTUsIDU0LCAyNCwgMjUsIDU1LCAyNV0sXHJcbiAgICBbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXHJcbiAgICAvLyAzMVxyXG4gICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG4gICAgWzIsIDc0LCA0NiwgMjksIDc1LCA0N10sXHJcbiAgICBbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcclxuICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuICAgIC8vIDMyXHJcbiAgICBbMTcsIDE0NSwgMTE1XSxcclxuICAgIFsxMCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuICAgIFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcclxuICAgIFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuICAgIC8vIDMzXHJcbiAgICBbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcbiAgICBbMTQsIDc0LCA0NiwgMjEsIDc1LCA0N10sXHJcbiAgICBbMjksIDU0LCAyNCwgMTksIDU1LCAyNV0sXHJcbiAgICBbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzNFxyXG4gICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG4gICAgWzE0LCA3NCwgNDYsIDIzLCA3NSwgNDddLFxyXG4gICAgWzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcbiAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuICAgIC8vIDM1XHJcbiAgICBbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcbiAgICBbMTIsIDc1LCA0NywgMjYsIDc2LCA0OF0sXHJcbiAgICBbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcbiAgICBbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcbiAgICAvLyAzNlxyXG4gICAgWzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxyXG4gICAgWzYsIDc1LCA0NywgMzQsIDc2LCA0OF0sXHJcbiAgICBbNDYsIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcbiAgICBbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcclxuICAgIC8vIDM3XHJcbiAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcbiAgICBbMjksIDc0LCA0NiwgMTQsIDc1LCA0N10sXHJcbiAgICBbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXHJcbiAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcbiAgICAvLyAzOFxyXG4gICAgWzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG4gICAgWzEzLCA3NCwgNDYsIDMyLCA3NSwgNDddLFxyXG4gICAgWzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG4gICAgWzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG4gICAgLy8gMzlcclxuICAgIFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuICAgIFs0MCwgNzUsIDQ3LCA3LCA3NiwgNDhdLFxyXG4gICAgWzQzLCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxyXG4gICAgWzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxyXG4gICAgLy8gNDBcclxuICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuICAgIFsxOCwgNzUsIDQ3LCAzMSwgNzYsIDQ4XSxcclxuICAgIFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcclxuICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG5dO1xyXG5leHBvcnRzLlJTQmxvY2sgPSBSU0Jsb2NrO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbk5DYkc5amF5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDNKelFteHZZMnN1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzFGUVVGblJUdEJRVVZvUlRzN08wZEJSMGM3UVVGRFNDeE5RVUZoTEU5QlFVODdTVUUwVUdoQ096czdPMDlCU1VjN1NVRkRTQ3haUVVGWkxGVkJRV3RDTEVWQlFVVXNVMEZCYVVJN1VVRkROME1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRPVUlzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhWUVVGclFpeEZRVUZGTEdsQ1FVRnZRenRSUVVNNVJTeE5RVUZOTEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExGVkJRVlVzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xRkJRM1pGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXeERMRTFCUVUwc1NVRkJTU3hIUVVGakxFVkJRVVVzUTBGQlF6dFJRVVV6UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJSVGRDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExFMUJRVTBzVlVGQlZTeEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWEpETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRelZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRha1E3VTBGRFNqdFJRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1EwRkJReXhWUVVGclFpeEZRVUZGTEdsQ1FVRnZRenRSUVVOdVJpeFJRVUZSTEdsQ1FVRnBRaXhGUVVGRk8xbEJRM1pDTEV0QlFVc3NjVU5CUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VJc1QwRkJUeXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hMUVVGTExIRkRRVUZwUWl4RFFVRkRMRU5CUVVNN1owSkJRM0JDTEU5QlFVOHNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VUXNTMEZCU3l4eFEwRkJhVUlzUTBGQlF5eERRVUZETzJkQ1FVTndRaXhQUVVGUExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFdEJRVXNzY1VOQlFXbENMRU5CUVVNc1EwRkJRenRuUWtGRGNFSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4UlFVRlJPMU5CUTFnN1VVRkZSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEN0Q1FVRXJRaXhwUWtGQmFVSXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRlRVVzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGbEJRVms3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHRkJRV0U3VVVGRGFFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRelZDTEVOQlFVTTdPMEZCT1ZSRUxHVkJRV1U3UVVGRFV5eHpRa0ZCWXl4SFFVRmxPMGxCUldwRUxFbEJRVWs3U1VGRFNpeEpRVUZKTzBsQlEwb3NTVUZCU1R0SlFVTktMRWxCUVVrN1NVRkRTaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVldMRWxCUVVrN1NVRkRTaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJWZ3NTVUZCU1R0SlFVTktMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRldDeEpRVUZKTzBsQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVWV0xFbEJRVWs3U1VGRFNpeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRMklzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl4SlFVRkpPMGxCUTBvc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVZZTEVsQlFVazdTVUZEU2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXhKUVVGSk8wbEJRMG9zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFJDTEVsQlFVazdTVUZEU2l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlEySXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRFdpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNSQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl4TFFVRkxPMGxCUTB3c1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1JDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXhMUVVGTE8wbEJRMHdzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYWkNMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRFSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM1pDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZka0lzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVmFMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWFpDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRekZDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6TkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhaQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzBsQlF6RkNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVOMlFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlhoQ0xFdEJRVXM3U1VGRFRDeERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSWGhDTEV0QlFVczdTVUZEVEN4RFFVRkRMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8wbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkRka0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJYaENMRXRCUVVzN1NVRkRUQ3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPMGxCUTJRc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZGtJc1MwRkJTenRKUVVOTUxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmRrSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGZUVJc1MwRkJTenRKUVVOTUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTTdTVUZETTBJc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVU40UWl4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJRM2hDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1NVRkZlRUlzUzBGQlN6dEpRVU5NTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN1NVRkRNMElzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlEzaENMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03U1VGRmVFSXNTMEZCU3p0SlFVTk1MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU03U1VGRE0wSXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRKUVVONFFpeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdRMEZETTBJc1EwRkJRenRCUVhaUVRpd3dRa0ZuVlVNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vcXJcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NNRUpCUVhGQ08wRkJSWEpDTEdkRVFVRXlReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRXJyb3IgY29ycmVjdGlvbiBsZXZlbCB0byB1c2UgZm9yIHRoZSBRUiBDb2RlLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIEVycm9yQ29ycmVjdExldmVsO1xyXG4oZnVuY3Rpb24gKEVycm9yQ29ycmVjdExldmVsKSB7XHJcbiAgICAvKipcclxuICAgICAqIDclXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiTFwiXSA9IDFdID0gXCJMXCI7XHJcbiAgICAvKipcclxuICAgICAqIDE1JVxyXG4gICAgICovXHJcbiAgICBFcnJvckNvcnJlY3RMZXZlbFtFcnJvckNvcnJlY3RMZXZlbFtcIk1cIl0gPSAwXSA9IFwiTVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiAyNSVcclxuICAgICAqL1xyXG4gICAgRXJyb3JDb3JyZWN0TGV2ZWxbRXJyb3JDb3JyZWN0TGV2ZWxbXCJRXCJdID0gM10gPSBcIlFcIjtcclxuICAgIC8qKlxyXG4gICAgICogMzAlXHJcbiAgICAgKi9cclxuICAgIEVycm9yQ29ycmVjdExldmVsW0Vycm9yQ29ycmVjdExldmVsW1wiSFwiXSA9IDJdID0gXCJIXCI7XHJcbn0pKEVycm9yQ29ycmVjdExldmVsID0gZXhwb3J0cy5FcnJvckNvcnJlY3RMZXZlbCB8fCAoZXhwb3J0cy5FcnJvckNvcnJlY3RMZXZlbCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYSnliM0pEYjNKeVpXTjBUR1YyWld3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Ylc5a1pXeHpMMlZ5Y205eVEyOXljbVZqZEV4bGRtVnNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTQ3hKUVVGWkxHbENRVzlDV0R0QlFYQkNSQ3hYUVVGWkxHbENRVUZwUWp0SlFVTjZRanM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1NVRkZURHM3VDBGRlJ6dEpRVU5JTEcxRVFVRkxMRU5CUVVFN1FVRkRWQ3hEUVVGRExFVkJjRUpYTEdsQ1FVRnBRaXhIUVVGcVFpeDVRa0ZCYVVJc1MwRkJha0lzZVVKQlFXbENMRkZCYjBJMVFpSjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBNYXNrIHBhdHRlcm5zIGZvciBRUiBjb2Rlcy5cclxuICogQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2thenVoaWtvYXJhc2UvcXJjb2RlLWdlbmVyYXRvci9cclxuICovXHJcbnZhciBNYXNrUGF0dGVybjtcclxuKGZ1bmN0aW9uIChNYXNrUGF0dGVybikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDAwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAwMFwiXSA9IDBdID0gXCJQQVRURVJOMDAwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAwMDFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMDAxXCJdID0gMV0gPSBcIlBBVFRFUk4wMDFcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDAxMFxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4wMTBcIl0gPSAyXSA9IFwiUEFUVEVSTjAxMFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMDExXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjAxMVwiXSA9IDNdID0gXCJQQVRURVJOMDExXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMDBcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTAwXCJdID0gNF0gPSBcIlBBVFRFUk4xMDBcIjtcclxuICAgIC8qKlxyXG4gICAgICogbWFzayBwYXR0ZXJuIDEwMVxyXG4gICAgICovXHJcbiAgICBNYXNrUGF0dGVybltNYXNrUGF0dGVybltcIlBBVFRFUk4xMDFcIl0gPSA1XSA9IFwiUEFUVEVSTjEwMVwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNrIHBhdHRlcm4gMTEwXHJcbiAgICAgKi9cclxuICAgIE1hc2tQYXR0ZXJuW01hc2tQYXR0ZXJuW1wiUEFUVEVSTjExMFwiXSA9IDZdID0gXCJQQVRURVJOMTEwXCI7XHJcbiAgICAvKipcclxuICAgICAqIG1hc2sgcGF0dGVybiAxMTFcclxuICAgICAqL1xyXG4gICAgTWFza1BhdHRlcm5bTWFza1BhdHRlcm5bXCJQQVRURVJOMTExXCJdID0gN10gPSBcIlBBVFRFUk4xMTFcIjtcclxufSkoTWFza1BhdHRlcm4gPSBleHBvcnRzLk1hc2tQYXR0ZXJuIHx8IChleHBvcnRzLk1hc2tQYXR0ZXJuID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGemExQmhkSFJsY200dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Ylc5a1pXeHpMMjFoYzJ0UVlYUjBaWEp1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0N4SlFVRlpMRmRCZDBOWU8wRkJlRU5FTEZkQlFWa3NWMEZCVnp0SlFVTnVRanM3VDBGRlJ6dEpRVU5JTEhsRVFVRnJRaXhEUVVGQk8wbEJSV3hDT3p0UFFVVkhPMGxCUTBnc2VVUkJRV3RDTEVOQlFVRTdTVUZGYkVJN08wOUJSVWM3U1VGRFNDeDVSRUZCYTBJc1EwRkJRVHRKUVVWc1FqczdUMEZGUnp0SlFVTklMSGxFUVVGclFpeERRVUZCTzBsQlJXeENPenRQUVVWSE8wbEJRMGdzZVVSQlFXdENMRU5CUVVFN1NVRkZiRUk3TzA5QlJVYzdTVUZEU0N4NVJFRkJhMElzUTBGQlFUdEpRVVZzUWpzN1QwRkZSenRKUVVOSUxIbEVRVUZyUWl4RFFVRkJPMGxCUld4Q096dFBRVVZITzBsQlEwZ3NlVVJCUVd0Q0xFTkJRVUU3UVVGRGRFSXNRMEZCUXl4RlFYaERWeXhYUVVGWExFZEJRVmdzYlVKQlFWY3NTMEZCV0N4dFFrRkJWeXhSUVhkRGRFSWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBxckRhdGFNb2RlXzEgPSByZXF1aXJlKFwiLi9xckRhdGFNb2RlXCIpO1xyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3Igc3RvcmluZyBRUiBEYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVJEYXRhQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBRUkRhdGFCYXNlLlxyXG4gICAgICogQHBhcmFtIG1vZGUgVGhlIG1vZGUgZm9yIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1vZGUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9tb2RlID0gbW9kZTtcclxuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkYXRhIG1vZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YSBtb2RlLlxyXG4gICAgICovXHJcbiAgICBnZXRNb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0eXBlTnVtYmVyIFRoZSB0eXBlIG51bWJlciB0byBnZXQgdGhlIGxlbmd0aCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbGVuZ3RoIGluIGJpdHMuXHJcbiAgICAgKi9cclxuICAgIGdldExlbmd0aEluQml0cyh0eXBlTnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVOdW1iZXIgPj0gMSAmJiB0eXBlTnVtYmVyIDwgMTApIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDEwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiA5O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDg7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlICR7dGhpcy5fbW9kZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlTnVtYmVyIDwgMjcpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLm51bWJlcjogcmV0dXJuIDEyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5hbHBoYU51bWVyaWM6IHJldHVybiAxMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUuYnl0ZTg6IHJldHVybiAxNjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGUgJHt0aGlzLl9tb2RlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVOdW1iZXIgPCA0MSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX21vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgcXJEYXRhTW9kZV8xLlFSRGF0YU1vZGUubnVtYmVyOiByZXR1cm4gMTQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHFyRGF0YU1vZGVfMS5RUkRhdGFNb2RlLmFscGhhTnVtZXJpYzogcmV0dXJuIDEzO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBxckRhdGFNb2RlXzEuUVJEYXRhTW9kZS5ieXRlODogcmV0dXJuIDE2O1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW9kZSAke3RoaXMuX21vZGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0eXBlTnVtYmVyICR7dHlwZU51bWJlcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RUkRhdGFCYXNlID0gUVJEYXRhQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY1hKRVlYUmhRbUZ6WlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl0YjJSbGJITXZjWEpFWVhSaFFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNOa05CUVRCRE8wRkJSVEZET3pzN1IwRkhSenRCUVVOSUxFMUJRWE5DTEZWQlFWVTdTVUZOTlVJN096czdUMEZKUnp0SlFVTklMRmxCUVZrc1NVRkJaMElzUlVGQlJTeEpRVUZaTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyeENMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBPMUZCUTFZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRmpSRHM3T3p0UFFVbEhPMGxCUTBrc1pVRkJaU3hEUVVGRExGVkJRV3RDTzFGQlEzSkRMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFTkJRVU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUTNCRExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRhRUlzUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJkQ1FVTnNReXhMUVVGTExIVkNRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEzWkRMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRGFFTTdiMEpCUTBrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEY2tRN1UwRkRTanRoUVVGTkxFbEJRVWtzVlVGQlZTeEhRVUZITEVWQlFVVXNSVUZCUlR0WlFVTjRRaXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUTJoQ0xFdEJRVXNzZFVKQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVNc1MwRkJTeXgxUWtGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU40UXl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1owSkJRMnBETzI5Q1FVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzSkVPMU5CUTBvN1lVRkJUU3hKUVVGSkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEZUVJc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzJkQ1FVTm9RaXhMUVVGTExIVkNRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WjBKQlEyeERMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGVFTXNTMEZCU3l4MVFrRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMmRDUVVOcVF6dHZRa0ZEU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU55UkR0VFFVTktPMkZCUVUwN1dVRkRTQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzWkVPMGxCUTB3c1EwRkJRenREUVVOS08wRkJPVVZFTEdkRFFUaEZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogVGhlIG1vZGUgZm9yIHRoZSBxciBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxudmFyIFFSRGF0YU1vZGU7XHJcbihmdW5jdGlvbiAoUVJEYXRhTW9kZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBudW1iZXJcclxuICAgICAqL1xyXG4gICAgUVJEYXRhTW9kZVtRUkRhdGFNb2RlW1wibnVtYmVyXCJdID0gMV0gPSBcIm51bWJlclwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBhbHBoYWJldCBhbmQgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcImFscGhhTnVtZXJpY1wiXSA9IDJdID0gXCJhbHBoYU51bWVyaWNcIjtcclxuICAgIC8qKlxyXG4gICAgICogOGJpdCBieXRlXHJcbiAgICAgKi9cclxuICAgIFFSRGF0YU1vZGVbUVJEYXRhTW9kZVtcImJ5dGU4XCJdID0gNF0gPSBcImJ5dGU4XCI7XHJcbn0pKFFSRGF0YU1vZGUgPSBleHBvcnRzLlFSRGF0YU1vZGUgfHwgKGV4cG9ydHMuUVJEYXRhTW9kZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSkVZWFJoVFc5a1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dGIyUmxiSE12Y1hKRVlYUmhUVzlrWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3T3p0SFFVZEhPMEZCUTBnc1NVRkJXU3hWUVdWWU8wRkJaa1FzVjBGQldTeFZRVUZWTzBsQlEyeENPenRQUVVWSE8wbEJRMGdzSzBOQlFXVXNRMEZCUVR0SlFVVm1PenRQUVVWSE8wbEJRMGdzTWtSQlFYRkNMRU5CUVVFN1NVRkZja0k3TzA5QlJVYzdTVUZEU0N3MlEwRkJZeXhEUVVGQk8wRkJRMnhDTEVOQlFVTXNSVUZtVnl4VlFVRlZMRWRCUVZZc2EwSkJRVlVzUzBGQlZpeHJRa0ZCVlN4UlFXVnlRaUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAdGFuZ2xlLWZyb3N0L2lvdGEtY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBxckFscGhhTnVtZXJpY18xID0gcmVxdWlyZShcIi4vZGF0YS9xckFscGhhTnVtZXJpY1wiKTtcclxuY29uc3QgcXJCeXRlOF8xID0gcmVxdWlyZShcIi4vZGF0YS9xckJ5dGU4XCIpO1xyXG5jb25zdCBxck51bWJlcl8xID0gcmVxdWlyZShcIi4vZGF0YS9xck51bWJlclwiKTtcclxuY29uc3QgYml0QnVmZmVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL2JpdEJ1ZmZlclwiKTtcclxuY29uc3QgbWF0aEhlbHBlcl8xID0gcmVxdWlyZShcIi4vaGVscGVycy9tYXRoSGVscGVyXCIpO1xyXG5jb25zdCBwb2x5bm9taWFsXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3BvbHlub21pYWxcIik7XHJcbmNvbnN0IHFySGVscGVyXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3FySGVscGVyXCIpO1xyXG5jb25zdCByc0Jsb2NrXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzL3JzQmxvY2tcIik7XHJcbmNvbnN0IGVycm9yQ29ycmVjdExldmVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvZXJyb3JDb3JyZWN0TGV2ZWxcIik7XHJcbi8qKlxyXG4gKiBDbGFzcyB0byBnZW5lcmF0ZXMgUVIgY29kZXMgZnJvbSBkYXRhLlxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va2F6dWhpa29hcmFzZS9xcmNvZGUtZ2VuZXJhdG9yL1xyXG4gKi9cclxuY2xhc3MgUVIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUVIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZU51bWJlciAwIHRvIDQwLCAwIG1lYW5zIGF1dG9kZXRlY3RcclxuICAgICAqIEBwYXJhbSBlcnJvckNvcnJlY3RMZXZlbCAnTCcsJ00nLCdRJywnSCdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodHlwZU51bWJlciA9IDYsIGVycm9yQ29ycmVjdExldmVsID0gZXJyb3JDb3JyZWN0TGV2ZWxfMS5FcnJvckNvcnJlY3RMZXZlbC5MKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHR5cGVOdW1iZXIpIHx8IHR5cGVOdW1iZXIgPCAwIHx8IHR5cGVOdW1iZXIgPiA0MCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIlRoZSB0eXBlTnVtYmVyIHBhcmFtZXRlciBzaG91bGQgYmUgYSBudW1iZXIgPj0gMCBhbmQgPD0gNDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3R5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yQ29ycmVjdExldmVsID0gZXJyb3JDb3JyZWN0TGV2ZWw7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX21vZHVsZXMgPSBbXTtcclxuICAgICAgICBtYXRoSGVscGVyXzEuTWF0aEhlbHBlci5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0ZXh0IGRhdGEgdG8gdGhlIFFSIENvZGUuXHJcbiAgICAgKiBAcGFyYW0gcXJEYXRhIFRoZSBkYXRhIHRvIGFkZC5cclxuICAgICAqL1xyXG4gICAgYWRkVGV4dChxckRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xckRhdGEucHVzaChuZXcgcXJCeXRlOF8xLlFSQnl0ZTgocXJEYXRhKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBudW1iZXIgdG8gdGhlIFFSIENvZGUuXHJcbiAgICAgKiBAcGFyYW0gcXJEYXRhIFRoZSBkYXRhIHRvIGFkZC5cclxuICAgICAqL1xyXG4gICAgYWRkTnVtYmVyKHFyRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FyRGF0YS5wdXNoKG5ldyBxck51bWJlcl8xLlFSTnVtYmVyKHFyRGF0YSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYWxwaGEgbnVtZXJpYyB0byB0aGUgUVIgQ29kZS5cclxuICAgICAqIEBwYXJhbSBxckRhdGEgVGhlIGRhdGEgdG8gYWRkLlxyXG4gICAgICovXHJcbiAgICBhZGRBbHBoYU51bWVyaWMocXJEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcXJEYXRhLnB1c2gobmV3IHFyQWxwaGFOdW1lcmljXzEuUVJBbHBoYU51bWVyaWMocXJEYXRhKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHRoZSBkaXNwbGF5IGJ1ZmZlci5cclxuICAgICAqIEBwYXJhbSBjZWxsU2l6ZSBUaGUgc2l6ZSBvZiB0aGUgY2VsbCB0byBnZW5lcmF0ZS5cclxuICAgICAqIEBwYXJhbSBtYXJnaW4gVGhlIHNpemUgb2YgdGhlIG1hcmdpbnMgdG8gZ2VuZXJhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBCb29sZWFuIGJ1ZmZlciBvZiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvRGV0ZWN0VHlwZU51bWJlcigpO1xyXG4gICAgICAgIHRoaXMubWFrZUltcGwoZmFsc2UsIHRoaXMuZ2V0QmVzdE1hc2tQYXR0ZXJuKCkpO1xyXG4gICAgICAgIGNvbnN0IHBpeGVscyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fbW9kdWxlQ291bnQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX21vZHVsZUNvdW50OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1t4XSA9IHBpeGVsc1t4XSB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHBpeGVsc1t4XVt5XSA9IHRoaXMuaXNEYXJrKHksIHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaXhlbHM7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGlzRGFyayhyb3csIGNvbCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9tb2R1bGVzW3Jvd11bY29sXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kdWxlc1tyb3ddW2NvbF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRCZXN0TWFza1BhdHRlcm4oKSB7XHJcbiAgICAgICAgbGV0IG1pbkxvc3RQb2ludCA9IDA7XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFrZUltcGwodHJ1ZSwgaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvc3RQb2ludCA9IHRoaXMuZ2V0TG9zdFBvaW50KCk7XHJcbiAgICAgICAgICAgIGlmIChpID09PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgbWluTG9zdFBvaW50ID0gbG9zdFBvaW50O1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybiA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG1ha2VJbXBsKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgdGhpcy5fbW9kdWxlQ291bnQgPSB0aGlzLl90eXBlTnVtYmVyICogNCArIDE3O1xyXG4gICAgICAgIHRoaXMuX21vZHVsZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX21vZHVsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlcy5wdXNoKFtdKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9tb2R1bGVDb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW2ldLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLl9tb2R1bGVDb3VudCAtIDcsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCB0aGlzLl9tb2R1bGVDb3VudCAtIDcpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuICAgICAgICB0aGlzLnNldHVwVGltaW5nUGF0dGVybigpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGVOdW1iZXIgPj0gNykge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubWFwRGF0YShkYXRhLCBtYXNrUGF0dGVybik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIG1hcERhdGEoZGF0YSwgbWFza1BhdHRlcm4pIHtcclxuICAgICAgICBsZXQgaW5jID0gLTE7XHJcbiAgICAgICAgbGV0IHJvdyA9IHRoaXMuX21vZHVsZUNvdW50IC0gMTtcclxuICAgICAgICBsZXQgYml0SW5kZXggPSA3O1xyXG4gICAgICAgIGxldCBieXRlSW5kZXggPSAwO1xyXG4gICAgICAgIGNvbnN0IG1hc2tGdW5jID0gcXJIZWxwZXJfMS5RUkhlbHBlci5nZXRNYXNrTWV0aG9kKG1hc2tQYXR0ZXJuKTtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSB0aGlzLl9tb2R1bGVDb3VudCAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIGNvbCAtPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpbGUgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcm93XVtjb2wgLSBjXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFyayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAoKChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXNrID0gbWFza0Z1bmMocm93LCBjb2wgLSBjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcmsgPSAhZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRJbmRleCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpdEluZGV4ID0gNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdyArPSBpbmM7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCB0aGlzLl9tb2R1bGVDb3VudCA8PSByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3cgLT0gaW5jO1xyXG4gICAgICAgICAgICAgICAgICAgIGluYyA9IC1pbmM7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLl90eXBlTnVtYmVyKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcG9zW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gcG9zW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vZHVsZXNbcm93XVtjb2xdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gLTIgfHwgciA9PT0gMiB8fCBjID09PSAtMiB8fCBjID09PSAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAociA9PT0gMCAmJiBjID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4ocm93LCBjb2wpIHtcclxuICAgICAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gNzsgcisrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IHJvdyArIHJcclxuICAgICAgICAgICAgICAgICAgICB8fCBjb2wgKyBjIDw9IC0xIHx8IHRoaXMuX21vZHVsZUNvdW50IDw9IGNvbCArIGMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgoMCA8PSByICYmIHIgPD0gNiAmJiAoYyA9PT0gMCB8fCBjID09PSA2KSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PT0gMCB8fCByID09PSA2KSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFRpbWluZ1BhdHRlcm4oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDg7IHIgPCB0aGlzLl9tb2R1bGVDb3VudCAtIDg7IHIrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9kdWxlc1tyXVs2XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tyXVs2XSA9IHIgJSAyID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBjID0gODsgYyA8IHRoaXMuX21vZHVsZUNvdW50IC0gODsgYysrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2R1bGVzWzZdW2NdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzZdW2NdID0gYyAlIDIgPT09IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFR5cGVOdW1iZXIodGVzdCkge1xyXG4gICAgICAgIGNvbnN0IGJpdHMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEJDSFR5cGVOdW1iZXIodGhpcy5fdHlwZU51bWJlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbfn4oaSAvIDMpXVtpICUgMyArIHRoaXMuX21vZHVsZUNvdW50IC0gOCAtIDNdID1cclxuICAgICAgICAgICAgICAgICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1tpICUgMyArIHRoaXMuX21vZHVsZUNvdW50IC0gOCAtIDNdW35+KGkgLyAzKV0gPVxyXG4gICAgICAgICAgICAgICAgIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xyXG4gICAgICAgIGNvbnN0IGJpdHMgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEJDSFR5cGVJbmZvKGRhdGEpO1xyXG4gICAgICAgIC8vIHZlcnRpY2FsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9ICF0ZXN0ICYmICgoYml0cyA+PiBpKSAmIDEpID09PSAxO1xyXG4gICAgICAgICAgICBpZiAoaSA8IDYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoaSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlc1t0aGlzLl9tb2R1bGVDb3VudCAtIDE1ICsgaV1bOF0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaG9yaXpvbnRhbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2QgPSAhdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMTtcclxuICAgICAgICAgICAgaWYgKGkgPCA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdW3RoaXMuX21vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPCA5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZml4ZWRcclxuICAgICAgICB0aGlzLl9tb2R1bGVzW3RoaXMuX21vZHVsZUNvdW50IC0gOF1bOF0gPSAhdGVzdDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0TG9zdFBvaW50KCkge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZUNvdW50ID0gdGhpcy5fbW9kdWxlQ291bnQ7XHJcbiAgICAgICAgbGV0IGxvc3RQb2ludCA9IDA7XHJcbiAgICAgICAgLy8gTEVWRUwxXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXJrID0gdGhpcy5pc0Rhcmsocm93LCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgciA9IC0xOyByIDw9IDE7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cgKyByIDwgMCB8fCBtb2R1bGVDb3VudCA8PSByb3cgKyByKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gLTE7IGMgPD0gMTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9PT0gMCAmJiBjID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGFyayA9PT0gdGhpcy5pc0Rhcmsocm93ICsgciwgY29sICsgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNhbWVDb3VudCA+IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDJcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3csIGNvbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyayhyb3cgKyAxLCBjb2wgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDAgfHwgY291bnQgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMRVZFTDNcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSA2OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmICF0aGlzLmlzRGFyayhyb3csIGNvbCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93LCBjb2wgKyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdywgY29sICsgMylcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDQpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdywgY29sICsgNSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3csIGNvbCArIDYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0Rhcmsocm93LCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIXRoaXMuaXNEYXJrKHJvdyArIDEsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmlzRGFyayhyb3cgKyAyLCBjb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5pc0Rhcmsocm93ICsgMywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDQsIGNvbClcclxuICAgICAgICAgICAgICAgICAgICAmJiAhdGhpcy5pc0Rhcmsocm93ICsgNSwgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuaXNEYXJrKHJvdyArIDYsIGNvbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTEVWRUw0XHJcbiAgICAgICAgbGV0IGRhcmtDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEYXJrKHJvdywgY29sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhcmtDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gTWF0aC5hYnMoMTAwICogZGFya0NvdW50IC8gbW9kdWxlQ291bnQgLyBtb2R1bGVDb3VudCAtIDUwKSAvIDU7XHJcbiAgICAgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XHJcbiAgICAgICAgcmV0dXJuIGxvc3RQb2ludDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlRGF0YSgpIHtcclxuICAgICAgICBjb25zdCByc0Jsb2NrcyA9IHJzQmxvY2tfMS5SU0Jsb2NrLmdldFJTQmxvY2tzKHRoaXMuX3R5cGVOdW1iZXIsIHRoaXMuX2Vycm9yQ29ycmVjdExldmVsKTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgYml0QnVmZmVyXzEuQml0QnVmZmVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9xckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX3FyRGF0YVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldE1vZGUoKSwgNCk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgZGF0YS5nZXRMZW5ndGhJbkJpdHModGhpcy5fdHlwZU51bWJlcikpO1xyXG4gICAgICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNhbGMgbWF4IGRhdGEgY291bnRcclxuICAgICAgICBsZXQgdG90YWxEYXRhQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBpcyBub3QgZW5vdWdoIHNwYWNlIGluIHRoZSBRUiBjb2RlIHRvIHN0b3JlIHRoZSBkYXRhLCAke2J1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKX0gPiAke3RvdGFsRGF0YUNvdW50ICogOH0sIHRyeSBpbmNyZWFzaW5nIHRoZSB0eXBlTnVtYmVyIGZyb20gJHt0aGlzLl90eXBlTnVtYmVyfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbmRcclxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1dCgwLCA0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcGFkZGluZ1xyXG4gICAgICAgIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwYWRkaW5nXHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChmbGFnKSB7XHJcbiAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWZmZXIucHV0KFFSLlBBRDAsIDgpO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1dChRUi5QQUQxLCA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY3JlYXRlQnl0ZXMoYnVmZmVyLCByc0Jsb2Nrcykge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGxldCBtYXhEY0NvdW50ID0gMDtcclxuICAgICAgICBsZXQgbWF4RWNDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgZGNkYXRhID0gW107XHJcbiAgICAgICAgY29uc3QgZWNkYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBkY2RhdGEucHVzaChbXSk7XHJcbiAgICAgICAgICAgIGVjZGF0YS5wdXNoKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlTnVtQXJyYXkobGVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXHJcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkY0NvdW50ID0gcnNCbG9ja3Nbcl0uZ2V0RGF0YUNvdW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVjQ291bnQgPSByc0Jsb2Nrc1tyXS5nZXRUb3RhbENvdW50KCkgLSBkY0NvdW50O1xyXG4gICAgICAgICAgICBtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XHJcbiAgICAgICAgICAgIG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuICAgICAgICAgICAgZGNkYXRhW3JdID0gY3JlYXRlTnVtQXJyYXkoZGNDb3VudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGNkYXRhW3JdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkY2RhdGFbcl1baV0gPSAweEZGICYgYnVmZmVyLmdldEJ1ZmZlcigpW2kgKyBvZmZzZXRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xyXG4gICAgICAgICAgICBjb25zdCByc1BvbHkgPSBxckhlbHBlcl8xLlFSSGVscGVyLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhd1BvbHkgPSBuZXcgcG9seW5vbWlhbF8xLlBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XHJcbiAgICAgICAgICAgIGVjZGF0YVtyXSA9IGNyZWF0ZU51bUFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldEF0KG1vZEluZGV4KSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvdGFsQ29kZUNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ29kZUNvdW50ICs9IHJzQmxvY2tzW2ldLmdldFRvdGFsQ291bnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGNyZWF0ZU51bUFycmF5KHRvdGFsQ29kZUNvdW50KTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RGNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZGNkYXRhW3JdW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhFY0NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPCBlY2RhdGFbcl0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpbmRleF0gPSBlY2RhdGFbcl1baV07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgYXV0b0RldGVjdFR5cGVOdW1iZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGVOdW1iZXIgPT09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdHlwZU51bWJlciA9IDE7IHR5cGVOdW1iZXIgPD0gNDA7IHR5cGVOdW1iZXIrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnNCbG9ja3MgPSByc0Jsb2NrXzEuUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCB0aGlzLl9lcnJvckNvcnJlY3RMZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgYml0QnVmZmVyXzEuQml0QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3FyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9xckRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldE1vZGUoKSwgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBkYXRhLmdldExlbmd0aEluQml0cyh0eXBlTnVtYmVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS53cml0ZShidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsRGF0YUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5nZXREYXRhQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlTnVtYmVyID09PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgUVIgY29kZSB0byBzdG9yZSB0aGUgZGF0YSwgJHtidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCl9ID4gJHt0b3RhbERhdGFDb3VudCAqIDh9LCB0eXBlTnVtYmVyIGNhbiBub3QgYmUgPiA0MGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5RUi5QQUQwID0gMHhFQztcclxuLyogQGludGVybmFsICovXHJcblFSLlBBRDEgPSAweDExO1xyXG5leHBvcnRzLlFSID0gUVI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Y1hJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEc5R1FVRnBSanRCUVVOcVJpd3dSRUZCZFVRN1FVRkRka1FzTkVOQlFYbERPMEZCUTNwRExEaERRVUV5UXp0QlFVTXpReXh0UkVGQlowUTdRVUZEYUVRc2NVUkJRV3RFTzBGQlEyeEVMSEZFUVVGclJEdEJRVU5zUkN4cFJFRkJPRU03UVVGRE9VTXNLME5CUVRSRE8wRkJRelZETEd0RlFVRXJSRHRCUVVrdlJEczdPMGRCUjBjN1FVRkRTQ3hOUVVGaExFVkJRVVU3U1VGeFFsZzdPenM3VDBGSlJ6dEpRVU5JTEZsQlFWa3NZVUZCY1VJc1EwRkJReXhGUVVGRkxHOUNRVUYxUXl4eFEwRkJhVUlzUTBGQlF5eERRVUZETzFGQlF6RkdMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRNVVVzVFVGQlRTeExRVUZMTEVOQlFVTXNORVJCUVRSRUxFTkJRVU1zUTBGQlF6dFRRVU0zUlR0UlFVTkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVlVGQlZTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dFJRVU0xUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZ1UWl4MVFrRkJWU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6VkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UFFVRlBMRU5CUVVNc1RVRkJZenRSUVVONlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxHbENRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVTBGQlV5eERRVUZETEUxQlFXTTdVVUZETTBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4dFFrRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMR1ZCUVdVc1EwRkJReXhOUVVGak8xRkJRMnBETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzSzBKQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1EwRkJRenRSUVVVMVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSV2hFTEUxQlFVMHNUVUZCVFN4SFFVRmxMRVZCUVVVc1EwRkJRenRSUVVNNVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONFF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRGVFTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRelZDTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UXp0VFFVTktPMUZCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zUjBGQlZ5eEZRVUZGTEVkQlFWYzdVVUZEYmtNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJUdFpRVU5zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRiRU03WVVGQlRUdFpRVU5JTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJoQ08wbEJRMHdzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4clFrRkJhMEk3VVVGRGRFSXNTVUZCU1N4WlFVRlpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM0pDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUlhoQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWFpDTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dFpRVVYwUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzV1VGQldTeEhRVUZITEZOQlFWTXNSVUZCUlR0blFrRkRja01zV1VGQldTeEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkRla0lzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTm1PMU5CUTBvN1VVRkZSQ3hQUVVGUExFOUJRVThzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxGRkJRVkVzUTBGQlF5eEpRVUZoTEVWQlFVVXNWMEZCYlVJN1VVRkRMME1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEYmtJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXk5Q08xTkJRMG83VVVGRlJDeEpRVUZKTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFbEJRVWtzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmVrUXNTVUZCU1N4RFFVRkRMREJDUVVFd1FpeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkZNVUlzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU4yUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlF6bENPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUlM5Q0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM0JETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1QwRkJUeXhEUVVGRExFbEJRV01zUlVGQlJTeFhRVUZ0UWp0UlFVTXZReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTmlMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoRExFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYkVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzYlVKQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRmNrUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZGY2tRc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTllMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRFdqdFpRVVZFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOb1FpeFBRVUZQTEVsQlFVa3NSVUZCUlR0blFrRkZWQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVVjRRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0M1FrRkZkRU1zU1VGQlNTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPM2RDUVVWcVFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk96UkNRVU42UWl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOMlJEdDNRa0ZGUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRmNFTXNTVUZCU1N4SlFVRkpMRVZCUVVVN05FSkJRMDRzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRPM2xDUVVOb1FqdDNRa0ZGUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03ZDBKQlEyNURMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBKQlJXUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlEycENMRk5CUVZNc1JVRkJSU3hEUVVGRE96UkNRVU5hTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN2VVSkJRMmhDTzNGQ1FVTktPMmxDUVVOS08yZENRVVZFTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNN1owSkJSVmdzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzUjBGQlJ5eEZRVUZGTzI5Q1FVTnlReXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETzI5Q1FVTllMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF6dHZRa0ZEV0N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE8ybENRVU5vUWp0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTERCQ1FVRXdRanRSUVVNNVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4dFFrRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVVV4UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVVZxUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZGYWtNc1RVRkJUU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOdVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJXNUNMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhKUVVGSkxFVkJRVVU3YjBKQlEyeERMRk5CUVZNN2FVSkJRMW83WjBKQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVVV4UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlJURkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPeXRDUVVOMlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGT3pSQ1FVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRPM2xDUVVNeFF6czJRa0ZCVFRzMFFrRkRTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPM2xDUVVNelF6dHhRa0ZEU2p0cFFrRkRTanRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMSGxDUVVGNVFpeERRVUZETEVkQlFWY3NSVUZCUlN4SFFVRlhPMUZCUTNSRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXhRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPM1ZDUVVNeFF5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRGJFUXNVMEZCVXp0cFFrRkRXanRuUWtGRlJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdkVUpCUTNaRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03ZFVKQlF6RkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVNelF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8ybENRVU14UXp0eFFrRkJUVHR2UWtGRFNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE8ybENRVU16UXp0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEd0Q1FVRnJRanRSUVVOMFFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE5VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSVHRuUWtGRE9VSXNVMEZCVXp0aFFVTmFPMWxCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVORUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNMVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZPMmRDUVVNNVFpeFRRVUZUTzJGQlExbzdXVUZEUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzSkRPMGxCUTB3c1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeGxRVUZsTEVOQlFVTXNTVUZCWVR0UlFVTnFReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eHRRa0ZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVWNlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRM1pFTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM2hETzFGQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU4yUkN4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU40UXp0SlFVTk1MRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzWVVGQllTeERRVUZETEVsQlFXRXNSVUZCUlN4WFFVRnRRanRSUVVOd1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGRE1VUXNUVUZCVFN4SlFVRkpMRWRCUVVjc2JVSkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZNME1zVjBGQlZ6dFJRVU5ZTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkZla0lzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRk4wTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5RTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUXpkQ08ybENRVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRha003YVVKQlFVMDdaMEpCUTBnc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN1lVRkRkRVE3VTBGRFNqdFJRVVZFTEdGQlFXRTdVVUZEWWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJSWHBDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlJUZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEVUN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0aFFVTnlSRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMlFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGRE1VTTdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRoUVVOMFF6dFRRVU5LTzFGQlJVUXNVVUZCVVR0UlFVTlNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZsQlFWazdVVUZEYUVJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXp0UlFVVjBReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYkVJc1UwRkJVenRSUVVWVUxFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZGZUVNc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZGZUVNc1NVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTnNRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVVXhRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRmRCUVZjc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTzNkQ1FVTjJReXhUUVVGVE8zRkNRVU5hTzI5Q1FVVkVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdDNRa0ZGTVVJc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4WFFVRlhMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJUczBRa0ZEZGtNc1UwRkJVenQ1UWtGRFdqdDNRa0ZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlRzMFFrRkRjRUlzVTBGQlV6dDVRa0ZEV2p0M1FrRkZSQ3hKUVVGSkxFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPelJDUVVONFF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0NVFrRkRaanR4UWtGRFNqdHBRa0ZEU2p0blFrRkZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVWQlFVVTdiMEpCUTJZc1UwRkJVeXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRGNFTTdZVUZEU2p0VFFVTktPMUZCUlVRc1UwRkJVenRSUVVWVUxFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMWxCUXpWRExFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZPMmRDUVVNMVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZCUlN4TFFVRkxMRVZCUVVVc1EwRkJRenRwUWtGQlJUdG5Ra0ZEZGtNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3YjBKQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN2FVSkJRVVU3WjBKQlF6TkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRPMmxDUVVGRk8yZENRVU16UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNN2FVSkJRVVU3WjBKQlF5OURMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPMjlDUVVNMVFpeFRRVUZUTEVsQlFVa3NRMEZCUXl4RFFVRkRPMmxDUVVOc1FqdGhRVU5LTzFOQlEwbzdVVUZGUkN4VFFVRlRPMUZCUlZRc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdFpRVU40UXl4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZETlVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRMnhDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0MVFrRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dDFRa0ZEZWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenQxUWtGRGVrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0MVFrRkRla0lzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzNWQ1FVTXhRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlF6bENMRk5CUVZNc1NVRkJTU3hGUVVGRkxFTkJRVU03YVVKQlEyNUNPMkZCUTBvN1UwRkRTanRSUVVWRUxFdEJRVXNzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhYUVVGWExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdXVUZEZUVNc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdaMEpCUXpWRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8zVkNRVU5zUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdkVUpCUTNwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03ZFVKQlEzcENMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN2RVSkJRM3BDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXp0MVFrRkRNVUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzI5Q1FVTTVRaXhUUVVGVExFbEJRVWtzUlVGQlJTeERRVUZETzJsQ1FVTnVRanRoUVVOS08xTkJRMG83VVVGRlJDeFRRVUZUTzFGQlJWUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV3hDTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1dVRkRlRU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0blFrRkRlRU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEZGtJc1UwRkJVeXhGUVVGRkxFTkJRVU03YVVKQlEyWTdZVUZEU2p0VFFVTktPMUZCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJVeXhIUVVGSExGZEJRVmNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRemRGTEZOQlFWTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSWGhDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNWVUZCVlR0UlFVTmtMRTFCUVUwc1VVRkJVU3hIUVVGakxHbENRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03VVVGRk0wWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3h4UWtGQlV5eEZRVUZGTEVOQlFVTTdVVUZGTDBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGRExFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE4wSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEzUkNPMUZCUlVRc2MwSkJRWE5DTzFGQlEzUkNMRWxCUVVrc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU4yUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU4wUXl4alFVRmpMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMU5CUTJoRU8xRkJSVVFzU1VGQlNTeE5RVUZOTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVjc1kwRkJZeXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExDdEVRVUVyUkN4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFMUJRVTBzWTBGQll5eEhRVUZITEVOQlFVTXNkME5CUVhkRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpsTU8xRkJSVVFzVFVGQlRUdFJRVU5PTEVsQlFVa3NUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNCRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JDTzFGQlJVUXNWVUZCVlR0UlFVTldMRTlCUVU4c1RVRkJUU3hEUVVGRExHVkJRV1VzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRka01zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVONFFqdFJRVVZFTEZWQlFWVTdVVUZEVml4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGFFSXNUMEZCVHl4SlFVRkpMRVZCUVVVN1dVRkRWQ3hKUVVGSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVWQlFVVXNTVUZCU1N4alFVRmpMRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4TlFVRk5PMkZCUTFRN1dVRkRSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmRrSXNTVUZCU1N4TlFVRk5MRU5CUVVNc1pVRkJaU3hGUVVGRkxFbEJRVWtzWTBGQll5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRhRVFzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXp0aFFVTm9RanRwUWtGQlRUdG5Ra0ZEU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRNVUk3VTBGRFNqdFJRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTVUZET1VNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeFhRVUZYTEVOQlFVTXNUVUZCYVVJc1JVRkJSU3hSUVVGdFFqdFJRVU4wUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRlppeEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRia0lzU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlc1Q0xFMUJRVTBzVFVGQlRTeEhRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTTVRaXhOUVVGTkxFMUJRVTBzUjBGQlpTeEZRVUZGTEVOQlFVTTdVVUZGT1VJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZEVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTm9RaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTI1Q08xRkJSVVFzVTBGQlV5eGpRVUZqTEVOQlFVTXNSMEZCVnp0WlFVTXZRaXhOUVVGTkxFTkJRVU1zUjBGQllTeEZRVUZGTEVOQlFVTTdXVUZEZGtJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZETVVJc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTmlPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRFlpeERRVUZETzFGQlJVUXNORUpCUVRSQ08xRkJSVFZDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJSWFJETEUxQlFVMHNUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0WlFVTXpReXhOUVVGTkxFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hGUVVGRkxFZEJRVWNzVDBGQlR5eERRVUZETzFsQlJYUkVMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVNelF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdXVUZGTTBNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRaUVVOd1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdG5Ra0ZEZGtNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRM2hFTzFsQlEwUXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJRenRaUVVWc1FpeE5RVUZOTEUxQlFVMHNSMEZCUnl4dFFrRkJVU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRek5FTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc2RVSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUld4RkxFMUJRVTBzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRGNFTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNaRExFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGRE5VUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYUVVN1UwRkRTanRSUVVWRUxFbEJRVWtzWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjJRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhqUVVGakxFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xTkJRMnBFTzFGQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1kwRkJZeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlF6VkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZrTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha01zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1JETEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpOQ0xFdEJRVXNzUlVGQlJTeERRVUZETzJsQ1FVTllPMkZCUTBvN1UwRkRTanRSUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEYWtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdaMEpCUTNSRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6TkNMRXRCUVVzc1JVRkJSU3hEUVVGRE8ybENRVU5ZTzJGQlEwbzdVMEZEU2p0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc2IwSkJRVzlDTzFGQlEzaENMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZUVJc1MwRkJTeXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVXNWVUZCVlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUlVGQlJUdG5Ra0ZEY2tRc1RVRkJUU3hSUVVGUkxFZEJRVWNzYVVKQlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8yZENRVU14UlN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxIRkNRVUZUTEVWQlFVVXNRMEZCUXp0blFrRkZMMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU14UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRPVUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU12UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJsQ1FVTjBRanRuUWtGRlJDeEpRVUZKTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRM1pDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU4wUXl4alFVRmpMRWxCUVVrc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRTFCUVUwc1EwRkJReXhsUVVGbExFVkJRVVVzU1VGQlNTeGpRVUZqTEVkQlFVY3NRMEZCUXl4RlFVRkZPMjlDUVVOb1JDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRlZCUVZVc1EwRkJRenR2UWtGRE9VSXNUVUZCVFR0cFFrRkRWRHR4UWtGQlRTeEpRVUZKTEZWQlFWVXNTMEZCU3l4RlFVRkZMRVZCUVVVN2IwSkJRekZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc0swUkJRU3RFTEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8ybENRVU5zU3p0aFFVTktPMU5CUTBvN1NVRkRUQ3hEUVVGRE96dEJRV2hyUWtRc1pVRkJaVHRCUVVOVExFOUJRVWtzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZETlVNc1pVRkJaVHRCUVVOVExFOUJRVWtzUjBGQlZ5eEpRVUZKTEVOQlFVTTdRVUZLYUVRc1owSkJhMnRDUXlKOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGhhcyhleHBvcnRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG4iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190YW5nbGVfZnJvc3RfaW90YV9jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9