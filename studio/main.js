/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Properties = __webpack_require__(1);

var _Properties2 = _interopRequireDefault(_Properties);

var _jsreportStudio = __webpack_require__(3);

var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jsreportStudio2.default.addPropertiesComponent('html-to-text', _Properties2.default, function (entity) {
  return entity.__entitySet === 'templates' && entity.recipe === 'html-to-text';
});

_jsreportStudio2.default.addApiSpec({
  template: {
    htmlToText: {
      wordWrap: 130
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Properties = function (_Component) {
  _inherits(Properties, _Component);

  function Properties() {
    _classCallCheck(this, Properties);

    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
  }

  _createClass(Properties, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          entity = _props.entity,
          onChange = _props.onChange;

      var recipeProps = entity.htmlToText || {};
      var changeProps = function changeProps(change) {
        return onChange(Object.assign({}, entity, { htmlToText: Object.assign({}, entity.htmlToText, change) }));
      };

      return _react2.default.createElement(
        'div',
        { className: 'properties-section' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'tables'
          ),
          _react2.default.createElement('input', {
            title: 'Comma separated css selectors of tables to pick', placeholder: '#invoice, .address',
            value: recipeProps.tables,
            onChange: function onChange(v) {
              return changeProps({ tables: v.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'word wrap'
          ),
          _react2.default.createElement('input', {
            title: 'Wrap the line after x characters', type: 'number', placeholder: '130', min: '0', max: '1000',
            value: recipeProps.wordwrap,
            onChange: function onChange(v) {
              return changeProps({ wordwrap: parseInt(v.target.value) });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'linkHrefBaseUrl'
          ),
          _react2.default.createElement('input', {
            title: 'linkHrefBaseUrl', placeholder: '/', value: recipeProps.linkHrefBaseUrl,
            onChange: function onChange(v) {
              return changeProps({ linkHrefBaseUrl: v.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'hideLinkHrefIfSameAsText'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.hideLinkHrefIfSameAsText === true, onChange: function onChange(v) {
              return changeProps({ hideLinkHrefIfSameAsText: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'ignoreHref'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.ignoreHref === true, onChange: function onChange(v) {
              return changeProps({ ignoreHref: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'ignoreImage'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.ignoreImage === true, onChange: function onChange(v) {
              return changeProps({ ignoreImage: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'preserveNewlines'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.preserveNewlines === true, onChange: function onChange(v) {
              return changeProps({ preserveNewlines: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'decodeOptions'
          ),
          _react2.default.createElement('input', {
            title: 'decodeOptions',
            value: recipeProps.decodeOptions,
            onChange: function onChange(v) {
              return changeProps({ decodeOptions: v.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'uppercaseHeadings'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.uppercaseHeadings !== false, onChange: function onChange(v) {
              return changeProps({ uppercaseHeadings: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'singleNewLineParagraphs'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.singleNewLineParagraphs === true, onChange: function onChange(v) {
              return changeProps({ singleNewLineParagraphs: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'baseElement'
          ),
          _react2.default.createElement('input', {
            title: 'baseElement',
            value: recipeProps.baseElement,
            onChange: function onChange(v) {
              return changeProps({ baseElement: v.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'returnDomByDefault'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.returnDomByDefault === true, onChange: function onChange(v) {
              return changeProps({ returnDomByDefault: v.target.checked });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'longWordSplitWrapCharacters'
          ),
          _react2.default.createElement('input', {
            title: 'Comma separated characters that may be wrapped on, these are used in order',
            value: recipeProps.longWordSplitWrapCharacters,
            onChange: function onChange(v) {
              return changeProps({ longWordSplitWrapCharacters: v.target.value });
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'longWordSplitForceWrapOnLimit'
          ),
          _react2.default.createElement('input', { type: 'checkbox', checked: recipeProps.longWordSplitForceWrapOnLimit === true, onChange: function onChange(v) {
              return changeProps({ longWordSplitForceWrapOnLimit: v.target.checked });
            } })
        )
      );
    }
  }]);

  return Properties;
}(_react.Component);

exports.default = Properties;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Studio.libraries['react'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Studio;

/***/ })
/******/ ]);