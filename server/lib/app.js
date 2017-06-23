module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./app/components/Hero/index.jsx ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./style.scss */ 9);\n\nvar _crayon = __webpack_require__(/*! ./images/crayon.svg */ 12);\n\nvar _crayon2 = _interopRequireDefault(_crayon);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Hero = function Hero() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'hero' },\n    _react2.default.createElement(\n      'div',\n      { className: 'hero__content' },\n      _react2.default.createElement('img', { src: _crayon2.default, className: 'hero__image' }),\n      _react2.default.createElement(\n        'h1',\n        { className: 'hero__title' },\n        'Team Crayon'\n      ),\n      _react2.default.createElement(\n        'h2',\n        { className: 'hero__subtitle' },\n        'Witness the fitness'\n      )\n    )\n  );\n};\nexports.default = Hero;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LmpzeD9hOTk5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgQ3JheW9uSWNvbiBmcm9tICcuL2ltYWdlcy9jcmF5b24uc3ZnJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fY29udGVudFwiPlxuICAgICAgPGltZyBzcmM9eyBDcmF5b25JY29uIH0gY2xhc3NOYW1lPVwiaGVyb19faW1hZ2VcIiAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm9fX3RpdGxlXCI+VGVhbSBDcmF5b248L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImhlcm9fX3N1YnRpdGxlXCI+V2l0bmVzcyB0aGUgZml0bmVzczwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9IZXJvL2luZGV4LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQURBO0FBVUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**********************************************!*\
  !*** ./app/components/Leaderboard/index.jsx ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n__webpack_require__(/*! ./style.scss */ 10);\n\nvar _User = __webpack_require__(/*! ../User */ 7);\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Leaderboard = function Leaderboard(_ref) {\n  var users = _ref.users;\n  return _react2.default.createElement(\n    'div',\n    { className: 'leaderboard' },\n    users && users.length > 0 ? users.map(function (user, index) {\n      return _react2.default.createElement(_User2.default, _extends({ key: index }, user));\n    }) : _react2.default.createElement(\n      'p',\n      null,\n      'No entries'\n    )\n  );\n};\n\nexports.default = Leaderboard;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9MZWFkZXJib2FyZC9pbmRleC5qc3g/ZDYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHR5cGUgeyBVc2VyVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvVHlwZXMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMZWFkZXJib2FyZCA9ICgoeyB1c2VycyB9OiB7IHVzZXJzOiBBcnJheTxVc2VyVHlwZT4gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmRcIj5cbiAgICAgIHtcbiAgICAgICAgdXNlcnMgJiYgdXNlcnMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgdXNlcnMubWFwKCh1c2VyOiBVc2VyVHlwZSwgaW5kZXg6IG51bWJlcikgPT4gIDxVc2VyIGtleT17IGluZGV4IH0geyAuLi51c2VyIH0gLz4pXG4gICAgICAgIDpcbiAgICAgICAgICA8cD5ObyBlbnRyaWVzPC9wPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9MZWFkZXJib2FyZC9pbmRleC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBV0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./app/data/db.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar data = {\n  'users': {\n    'sukh': {\n      'entry1': {\n        'actualAge': 33,\n        'heartAge': 42,\n        'bmi': 31.3,\n        'bodyFat': 25.2,\n        'heartRate': 66,\n        'bpHigh': 140,\n        'bpLow': 83\n      }\n    },\n    'shola': {\n      'entry1': {\n        'actualAge': 10,\n        'heartAge': 24,\n        'bmi': 20.1,\n        'bodyFat': 18.3,\n        'heartRate': 60,\n        'bpHigh': 120,\n        'bpLow': 80\n      },\n      'entry2': {\n        'actualAge': 10,\n        'heartAge': 10,\n        'bmi': 20.1,\n        'bodyFat': 18.3,\n        'heartRate': 60,\n        'bpHigh': 120,\n        'bpLow': 80\n      }\n    },\n    'rich': {\n      'entry1': {\n        'actualAge': 10,\n        'heartAge': 24,\n        'bmi': 20.1,\n        'bodyFat': 18.3,\n        'heartRate': 60,\n        'bpHigh': 120,\n        'bpLow': 80\n      },\n      'entry2': {\n        'actualAge': 10,\n        'heartAge': 12,\n        'bmi': 18,\n        'bodyFat': 18.3,\n        'heartRate': 55,\n        'bpHigh': 120,\n        'bpLow': 80\n      }\n    }\n  }\n};\n\nexports.default = data;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvZGF0YS9kYi5qcz8yNmU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XG4gICd1c2Vycyc6IHtcbiAgICAnc3VraCc6IHtcbiAgICAgICdlbnRyeTEnOiB7XG4gICAgICAgICdhY3R1YWxBZ2UnOiAzMyxcbiAgICAgICAgJ2hlYXJ0QWdlJzogNDIsXG4gICAgICAgICdibWknOiAzMS4zLFxuICAgICAgICAnYm9keUZhdCc6IDI1LjIsXG4gICAgICAgICdoZWFydFJhdGUnOiA2NixcbiAgICAgICAgJ2JwSGlnaCc6IDE0MCxcbiAgICAgICAgJ2JwTG93JzogODNcbiAgICAgIH1cbiAgICB9LFxuICAgICdzaG9sYSc6IHtcbiAgICAgICdlbnRyeTEnOiB7XG4gICAgICAgICdhY3R1YWxBZ2UnOiAxMCxcbiAgICAgICAgJ2hlYXJ0QWdlJzogMjQsXG4gICAgICAgICdibWknOiAyMC4xLFxuICAgICAgICAnYm9keUZhdCc6IDE4LjMsXG4gICAgICAgICdoZWFydFJhdGUnOiA2MCxcbiAgICAgICAgJ2JwSGlnaCc6IDEyMCxcbiAgICAgICAgJ2JwTG93JzogODBcbiAgICAgIH0sXG4gICAgICAnZW50cnkyJzoge1xuICAgICAgICAnYWN0dWFsQWdlJzogMTAsXG4gICAgICAgICdoZWFydEFnZSc6IDEwLFxuICAgICAgICAnYm1pJzogMjAuMSxcbiAgICAgICAgJ2JvZHlGYXQnOiAxOC4zLFxuICAgICAgICAnaGVhcnRSYXRlJzogNjAsXG4gICAgICAgICdicEhpZ2gnOiAxMjAsXG4gICAgICAgICdicExvdyc6IDgwXG4gICAgICB9XG4gICAgfSxcbiAgICAncmljaCc6IHtcbiAgICAgICdlbnRyeTEnOiB7XG4gICAgICAgICdhY3R1YWxBZ2UnOiAxMCxcbiAgICAgICAgJ2hlYXJ0QWdlJzogMjQsXG4gICAgICAgICdibWknOiAyMC4xLFxuICAgICAgICAnYm9keUZhdCc6IDE4LjMsXG4gICAgICAgICdoZWFydFJhdGUnOiA2MCxcbiAgICAgICAgJ2JwSGlnaCc6IDEyMCxcbiAgICAgICAgJ2JwTG93JzogODBcbiAgICAgIH0sXG4gICAgICAnZW50cnkyJzoge1xuICAgICAgICAnYWN0dWFsQWdlJzogMTAsXG4gICAgICAgICdoZWFydEFnZSc6IDEyLFxuICAgICAgICAnYm1pJzogMTgsXG4gICAgICAgICdib2R5RmF0JzogMTguMyxcbiAgICAgICAgJ2hlYXJ0UmF0ZSc6IDU1LFxuICAgICAgICAnYnBIaWdoJzogMTIwLFxuICAgICAgICAnYnBMb3cnOiA4MFxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvZGF0YS9kYi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQWhDQTtBQURBO0FBQ0E7QUF1REEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./app/components/App/style.scss ***!
  \***************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0FwcC9zdHlsZS5zY3NzPzA2YTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL0FwcC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./app/components/App/index.jsx ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./style.scss */ 4);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Hero = __webpack_require__(/*! ../Hero */ 1);\n\nvar _Hero2 = _interopRequireDefault(_Hero);\n\nvar _Leaderboard = __webpack_require__(/*! ../Leaderboard */ 2);\n\nvar _Leaderboard2 = _interopRequireDefault(_Leaderboard);\n\nvar _db = __webpack_require__(/*! ../../data/db */ 3);\n\nvar _db2 = _interopRequireDefault(_db);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: []\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // TODO: fetch data from firebase\n      var users = [];\n      var tempUser = void 0;\n\n      for (var user in _db2.default.users) {\n        var entries = _db2.default.users[user];\n        var tempEntries = [];\n        for (var entry in entries) {\n          tempEntries.push(entries[entry]);\n        }\n        var entriesLastIndex = tempEntries.length - 1;\n        var change = {\n          actualAge: tempEntries[0].actualAge - tempEntries[entriesLastIndex].actualAge,\n          heartAge: tempEntries[0].heartAge - tempEntries[entriesLastIndex].heartAge,\n          bmi: tempEntries[0].bmi - tempEntries[entriesLastIndex].bmi,\n          bodyFat: tempEntries[0].bodyFat - tempEntries[entriesLastIndex].bodyFat,\n          heartRate: tempEntries[0].heartRate - tempEntries[entriesLastIndex].heartRate,\n          bpHigh: tempEntries[0].bpHigh - tempEntries[entriesLastIndex].bpHigh,\n          bpLow: tempEntries[0].bpLow - tempEntries[entriesLastIndex].bpLow\n        };\n        var vals = Object.values(change);\n        var overallScore = vals.reduce(function (prev, next) {\n          return prev + next;\n        }, 0) / vals.length;\n\n        tempUser = {\n          name: user,\n          entries: tempEntries,\n          change: change,\n          overallScore: overallScore\n        };\n        users.push(tempUser);\n      }\n      users.sort(function (a, b) {\n        return b.overallScore - a.overallScore;\n      });\n      this.setState(_extends({}, this.state, { users: users }));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Hero2.default, null),\n        _react2.default.createElement(_Leaderboard2.default, { users: this.state.users })\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9BcHAvaW5kZXguanN4P2VlYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB0eXBlIHsgVXNlclR5cGUsIEVudHJ5VHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvVHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvIGZyb20gJy4uL0hlcm8nO1xuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uL0xlYWRlcmJvYXJkJztcblxuaW1wb3J0IGRhdGFGcm9tREIgZnJvbSAnLi4vLi4vZGF0YS9kYic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlOiB7IHVzZXJzOkFycmF5PFVzZXJUeXBlPiB9ID0ge1xuICAgIHVzZXJzOiBbXVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFRPRE86IGZldGNoIGRhdGEgZnJvbSBmaXJlYmFzZVxuICAgIC8vIFRPRE86IG1ha2UgZGF0YSBpbW11dGFibGVcblxuICAgIGNvbnN0IHVzZXJzOkFycmF5PFVzZXJUeXBlPiA9IFtdO1xuICAgIGxldCB0ZW1wVXNlcjpVc2VyVHlwZTtcblxuICAgIGZvciAobGV0IHVzZXI6c3RyaW5nIGluIGRhdGFGcm9tREIudXNlcnMpIHtcbiAgICAgIGNvbnN0IGVudHJpZXM6T2JqZWN0ID0gZGF0YUZyb21EQi51c2Vyc1t1c2VyXTtcbiAgICAgIGNvbnN0IHRlbXBFbnRyaWVzOkFycmF5PEVudHJ5VHlwZT4gPSBbXTtcbiAgICAgIGZvciAobGV0IGVudHJ5OnN0cmluZyBpbiBlbnRyaWVzKSB7XG4gICAgICAgIHRlbXBFbnRyaWVzLnB1c2goZW50cmllc1tlbnRyeV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZW50cmllc0xhc3RJbmRleDpudW1iZXIgPSB0ZW1wRW50cmllcy5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgY2hhbmdlOkVudHJ5VHlwZSA9IHtcbiAgICAgICAgYWN0dWFsQWdlOiB0ZW1wRW50cmllc1swXS5hY3R1YWxBZ2UgLSB0ZW1wRW50cmllc1tlbnRyaWVzTGFzdEluZGV4XS5hY3R1YWxBZ2UsXG4gICAgICAgIGhlYXJ0QWdlOiB0ZW1wRW50cmllc1swXS5oZWFydEFnZSAtIHRlbXBFbnRyaWVzW2VudHJpZXNMYXN0SW5kZXhdLmhlYXJ0QWdlLFxuICAgICAgICBibWk6IHRlbXBFbnRyaWVzWzBdLmJtaSAtIHRlbXBFbnRyaWVzW2VudHJpZXNMYXN0SW5kZXhdLmJtaSxcbiAgICAgICAgYm9keUZhdDogdGVtcEVudHJpZXNbMF0uYm9keUZhdCAtIHRlbXBFbnRyaWVzW2VudHJpZXNMYXN0SW5kZXhdLmJvZHlGYXQsXG4gICAgICAgIGhlYXJ0UmF0ZTogdGVtcEVudHJpZXNbMF0uaGVhcnRSYXRlIC0gdGVtcEVudHJpZXNbZW50cmllc0xhc3RJbmRleF0uaGVhcnRSYXRlLFxuICAgICAgICBicEhpZ2g6IHRlbXBFbnRyaWVzWzBdLmJwSGlnaCAtIHRlbXBFbnRyaWVzW2VudHJpZXNMYXN0SW5kZXhdLmJwSGlnaCxcbiAgICAgICAgYnBMb3c6IHRlbXBFbnRyaWVzWzBdLmJwTG93IC0gdGVtcEVudHJpZXNbZW50cmllc0xhc3RJbmRleF0uYnBMb3dcbiAgICAgIH07XG4gICAgICBjb25zdCB2YWxzOkFycmF5PG51bWJlcj4gPSAoKE9iamVjdC52YWx1ZXMoY2hhbmdlKTogYW55KTogQXJyYXk8bnVtYmVyPik7XG4gICAgICBjb25zdCBvdmVyYWxsU2NvcmU6bnVtYmVyID0gdmFscy5yZWR1Y2UoKHByZXY6bnVtYmVyLCBuZXh0Om51bWJlcik6IG51bWJlciA9PiAocHJldiArIG5leHQpLCAwKSAvIHZhbHMubGVuZ3RoO1xuXG4gICAgICB0ZW1wVXNlciA9IHtcbiAgICAgICAgbmFtZTogdXNlcixcbiAgICAgICAgZW50cmllczogdGVtcEVudHJpZXMsXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgb3ZlcmFsbFNjb3JlXG4gICAgICB9XG4gICAgICB1c2Vycy5wdXNoKHRlbXBVc2VyKTtcbiAgICB9XG4gICAgdXNlcnMuc29ydCgoYSwgYikgPT4gYi5vdmVyYWxsU2NvcmUgLSBhLm92ZXJhbGxTY29yZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHVzZXJzOiB1c2VycyB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZXJvIC8+XG4gICAgICAgIDxMZWFkZXJib2FyZCB1c2Vycz17IHRoaXMuc3RhdGUudXNlcnMgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7Ozs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFoREE7QUFDQTtBQWtEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./app/components/Entry/index.jsx ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./style.scss */ 8);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Entry = function Entry(_ref) {\n  var actualAge = _ref.actualAge,\n      heartAge = _ref.heartAge,\n      bmi = _ref.bmi,\n      bodyFat = _ref.bodyFat,\n      heartRate = _ref.heartRate,\n      bpHigh = _ref.bpHigh,\n      bpLow = _ref.bpLow,\n      change = _ref.change;\n  return _react2.default.createElement(\n    'tr',\n    { className: 'entry' },\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      actualAge\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      heartAge\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      bmi.toFixed(2)\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      bodyFat.toFixed(2)\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      heartRate\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      bpHigh\n    ),\n    _react2.default.createElement(\n      'td',\n      { className: change && actualAge > 0 ? 'positive' : 'negative' },\n      bpLow\n    )\n  );\n};\n\nexports.default = Entry;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FbnRyeS9pbmRleC5qc3g/ZWQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRW50cnkgPSAoeyBhY3R1YWxBZ2UsIGhlYXJ0QWdlLCBibWksIGJvZHlGYXQsIGhlYXJ0UmF0ZSwgYnBIaWdoLCBicExvdywgY2hhbmdlIH06XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbEFnZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBoZWFydEFnZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBibWk6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYm9keUZhdDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBoZWFydFJhdGU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYnBIaWdoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGJwTG93OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogYm9vbGVhblxuICAgICAgICAgICAgICAgICAgfSkgPT4gKFxuICAgIDx0ciBjbGFzc05hbWU9XCJlbnRyeVwiPlxuICAgICAgPHRkIGNsYXNzTmFtZT17IGNoYW5nZSAmJiBhY3R1YWxBZ2UgPiAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZScgfT57IGFjdHVhbEFnZSB9PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9eyBjaGFuZ2UgJiYgYWN0dWFsQWdlID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnIH0+eyBoZWFydEFnZSB9PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9eyBjaGFuZ2UgJiYgYWN0dWFsQWdlID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnIH0+eyBibWkudG9GaXhlZCgyKSB9PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9eyBjaGFuZ2UgJiYgYWN0dWFsQWdlID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnIH0+eyBib2R5RmF0LnRvRml4ZWQoMikgfTwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPXsgY2hhbmdlICYmIGFjdHVhbEFnZSA+IDAgPyAncG9zaXRpdmUnIDogJ25lZ2F0aXZlJyB9PnsgaGVhcnRSYXRlIH08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT17IGNoYW5nZSAmJiBhY3R1YWxBZ2UgPiAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZScgfT57IGJwSGlnaCB9PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9eyBjaGFuZ2UgJiYgYWN0dWFsQWdlID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnIH0+eyBicExvdyB9PC90ZD5cbiAgICA8L3RyPlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9FbnRyeS9pbmRleC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVhBO0FBQ0E7QUFxQkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 7 */
/* no static exports found */
/* all exports used */
/*!***************************************!*\
  !*** ./app/components/User/index.jsx ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n__webpack_require__(/*! ./style.scss */ 11);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Entry = __webpack_require__(/*! ../Entry */ 6);\n\nvar _Entry2 = _interopRequireDefault(_Entry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar User = function User(_ref) {\n  var name = _ref.name,\n      entries = _ref.entries,\n      change = _ref.change,\n      overallScore = _ref.overallScore;\n  return _react2.default.createElement(\n    'div',\n    { className: 'user' },\n    _react2.default.createElement(\n      'div',\n      { className: 'user__header' },\n      _react2.default.createElement(\n        'h3',\n        { className: 'user__name' },\n        name\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'user__score' },\n        _react2.default.createElement(\n          'span',\n          null,\n          overallScore.toFixed(2)\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'user__entries' },\n      _react2.default.createElement(\n        'table',\n        null,\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'actualAge' },\n              '\\uD83D\\uDD53'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'heartAge' },\n              '\\u2764\\uFE0F\\uD83D\\uDD53'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'bmi' },\n              '\\uD83D\\uDE11'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'bodyFat' },\n              '\\uD83C\\uDF54%'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'heartRate' },\n              '\\uD83D\\uDC97'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'bpHigh' },\n              '\\uD83D\\uDC89\\u2B06\\uFE0F'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'bpLow' },\n              '\\uD83D\\uDC89\\u2B07\\uFE0F'\n            )\n          ),\n          entries && entries.length > 0 ? entries.map(function (entry, index) {\n            return _react2.default.createElement(_Entry2.default, _extends({ key: index }, entry, { change: 'false' }));\n          }) : _react2.default.createElement(\n            'p',\n            null,\n            'No entries'\n          ),\n          change ? _react2.default.createElement(_Entry2.default, _extends({ change: 'true' }, change)) : _react2.default.createElement('span', null)\n        )\n      )\n    ),\n    _react2.default.createElement('div', { className: 'user__change' })\n  );\n};\n\nexports.default = User;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Vc2VyL2luZGV4LmpzeD8xMDZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgdHlwZSB7IFVzZXJUeXBlLCBFbnRyeVR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL1R5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vRW50cnknO1xuXG5jb25zdCBVc2VyID0gKHsgbmFtZSwgZW50cmllcywgY2hhbmdlLCBvdmVyYWxsU2NvcmUgfTogVXNlclR5cGUpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faGVhZGVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1c2VyX19uYW1lXCI+eyBuYW1lIH08L2gzPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidXNlcl9fc2NvcmVcIj48c3Bhbj57IG92ZXJhbGxTY29yZS50b0ZpeGVkKDIpIH08L3NwYW4+PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19lbnRyaWVzXCI+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJhY3R1YWxBZ2VcIj7wn5WTPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYXJ0QWdlXCI+4p2k77iP8J+VkzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJibWlcIj7wn5iRPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvZHlGYXRcIj7wn42UJTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFydFJhdGVcIj7wn5KXPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJwSGlnaFwiPvCfkonirIbvuI88L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYnBMb3dcIj7wn5KJ4qyH77iPPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVudHJpZXMgJiYgZW50cmllcy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICBlbnRyaWVzLm1hcCgoZW50cnk6RW50cnlUeXBlLCBpbmRleDpudW1iZXIpID0+IDxFbnRyeSBrZXk9eyBpbmRleCB9IHsgLi4uZW50cnkgfSBjaGFuZ2U9XCJmYWxzZVwiIC8+KVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPHA+Tm8gZW50cmllczwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgY2hhbmdlID8gPEVudHJ5IGNoYW5nZT1cInRydWVcIiB7IC4uLmNoYW5nZSB9IC8+IDogPHNwYW4+PC9zcGFuPiB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19jaGFuZ2VcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL1VzZXIvaW5kZXguanN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBaEJBO0FBREE7QUFEQTtBQXNCQTtBQTNCQTtBQURBO0FBQ0E7QUFnQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 8 */
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./app/components/Entry/style.scss ***!
  \*****************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0VudHJ5L3N0eWxlLnNjc3M/NThiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvRW50cnkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 9 */
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./app/components/Hero/style.scss ***!
  \****************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlcm8vc3R5bGUuc2Nzcz9jYmJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9IZXJvL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 10 */
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/components/Leaderboard/style.scss ***!
  \***********************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9MZWFkZXJib2FyZC9zdHlsZS5zY3NzPzc1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL0xlYWRlcmJvYXJkL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 11 */
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./app/components/User/style.scss ***!
  \****************************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Vc2VyL3N0eWxlLnNjc3M/YmExMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvVXNlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 12 */
/* no static exports found */
/* all exports used */
/*!***********************************************!*\
  !*** ./app/components/Hero/images/crayon.svg ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/crayon.f3b7783bfabe86069aa1f506f602496a.svg\";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZXJvL2ltYWdlcy9jcmF5b24uc3ZnPzA0ZTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2NyYXlvbi5mM2I3NzgzYmZhYmU4NjA2OWFhMWY1MDZmNjAyNDk2YS5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL0hlcm8vaW1hZ2VzL2NyYXlvbi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);