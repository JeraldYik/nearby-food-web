module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "../node_modules/semantic-ui-css/semantic.min.css":
/*!********************************************************!*\
  !*** ../node_modules/semantic-ui-css/semantic.min.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9ub2RlX21vZHVsZXMvc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/semantic-ui-css/semantic.min.css\n");

/***/ }),

/***/ "./assets/styles/globals.css":
/*!***********************************!*\
  !*** ./assets/styles/globals.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Fzc2V0cy9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/styles/globals.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/styles/globals.css */ \"./assets/styles/globals.css\");\n/* harmony import */ var assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"../node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stores */ \"./stores/index.tsx\");\n\nvar _jsxFileName = \"/Users/jerald/Desktop/nearby-food-web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(stores__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYXNzZXRzL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcblxuaW1wb3J0IEdsb2JhbFByb3ZpZGVyIGZyb20gJ3N0b3Jlcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxHbG9iYWxQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0dsb2JhbFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducers/GlobalReducer.tsx":
/*!************************************!*\
  !*** ./reducers/GlobalReducer.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst GlobalReducer = (state, action) => {\n  console.log(state, action);\n\n  switch (action.type) {\n    // TODO: to resolve\n    case 'setAddress':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        address: action.payload\n      });\n\n    case 'setType':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        type: action.payload\n      });\n\n    case 'setRating':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        rating: parseFloat(action.payload)\n      });\n\n    case 'setDollar':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        minPrice: parseInt(action.payload[0]),\n        maxPrice: parseInt(action.payload[1])\n      });\n\n    case 'setRadius':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        radius: parseFloat(action.payload) * 1000\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9HbG9iYWxSZWR1Y2VyLnRzeD8yMWU5Il0sIm5hbWVzIjpbIkdsb2JhbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYWRkcmVzcyIsInBheWxvYWQiLCJyYXRpbmciLCJwYXJzZUZsb2F0IiwibWluUHJpY2UiLCJwYXJzZUludCIsIm1heFByaWNlIiwicmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0EsTUFBTUEsYUFBYSxHQUFHLENBQUNDLEtBQUQsRUFBZ0JDLE1BQWhCLEtBQTRDO0FBQ2hFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUFtQkMsTUFBbkI7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDRyxJQUFmO0FBQ0U7QUFDQSxTQUFLLFlBQUw7QUFDRSw2Q0FBWUosS0FBWjtBQUFtQkssZUFBTyxFQUFFSixNQUFNLENBQUNLO0FBQW5DOztBQUNGLFNBQUssU0FBTDtBQUNFLDZDQUFZTixLQUFaO0FBQW1CSSxZQUFJLEVBQUVILE1BQU0sQ0FBQ0s7QUFBaEM7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJPLGNBQU0sRUFBRUMsVUFBVSxDQUFDUCxNQUFNLENBQUNLLE9BQVI7QUFBckM7O0FBQ0YsU0FBSyxXQUFMO0FBQ0UsNkNBQVlOLEtBQVo7QUFBbUJTLGdCQUFRLEVBQUVDLFFBQVEsQ0FBQ1QsTUFBTSxDQUFDSyxPQUFQLENBQWUsQ0FBZixDQUFELENBQXJDO0FBQTBESyxnQkFBUSxFQUFFRCxRQUFRLENBQUNULE1BQU0sQ0FBQ0ssT0FBUCxDQUFlLENBQWYsQ0FBRDtBQUE1RTs7QUFDRixTQUFLLFdBQUw7QUFDRSw2Q0FBWU4sS0FBWjtBQUFtQlksY0FBTSxFQUFFSixVQUFVLENBQUNQLE1BQU0sQ0FBQ0ssT0FBUixDQUFWLEdBQTZCO0FBQXhEOztBQUNGO0FBQ0UsYUFBT04sS0FBUDtBQWJKO0FBZUQsQ0FqQkQ7O0FBbUJlRCw0RUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL0dsb2JhbFJlZHVjZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnc3RvcmVzJztcblxuaW50ZXJmYWNlIElBY3Rpb24ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEdsb2JhbFJlZHVjZXIgPSAoc3RhdGU6IElTdGF0ZSwgYWN0aW9uOiBJQWN0aW9uKTogSVN0YXRlID0+IHtcbiAgY29uc29sZS5sb2coc3RhdGUsIGFjdGlvbik7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvLyBUT0RPOiB0byByZXNvbHZlXG4gICAgY2FzZSAnc2V0QWRkcmVzcyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWRkcmVzczogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdzZXRUeXBlJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0eXBlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgJ3NldFJhdGluZyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmF0aW5nOiBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkKSB9O1xuICAgIGNhc2UgJ3NldERvbGxhcic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWluUHJpY2U6IHBhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzBdKSwgbWF4UHJpY2U6IHBhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzFdKSB9O1xuICAgIGNhc2UgJ3NldFJhZGl1cyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmFkaXVzOiBwYXJzZUZsb2F0KGFjdGlvbi5wYXlsb2FkKSAqIDEwMDAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/GlobalReducer.tsx\n");

/***/ }),

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GlobalReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalReducer */ \"./reducers/GlobalReducer.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_GlobalReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC50c3g/MGVjOCJdLCJuYW1lcyI6WyJHbG9iYWxSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDZUEscUhBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsUmVkdWNlciBmcm9tICcuL0dsb2JhbFJlZHVjZXInO1xuZXhwb3J0IGRlZmF1bHQgR2xvYmFsUmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.tsx\n");

/***/ }),

/***/ "./stores/GlobalStore.tsx":
/*!********************************!*\
  !*** ./stores/GlobalStore.tsx ***!
  \********************************/
/*! exports provided: EateryTypes, GlobalContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EateryTypes\", function() { return EateryTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalContext\", function() { return GlobalContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ \"./reducers/index.tsx\");\n\nvar _jsxFileName = \"/Users/jerald/Desktop/nearby-food-web/src/stores/GlobalStore.tsx\";\n\n\nlet EateryTypes;\n\n(function (EateryTypes) {\n  EateryTypes[\"Restaurant\"] = \"restaurant\";\n  EateryTypes[\"Caf\\xE9\"] = \"cafe\";\n})(EateryTypes || (EateryTypes = {}));\n\nconst initialState = {\n  address: '',\n  type: Object.values(EateryTypes)[0],\n  rating: 3.5,\n  minPrice: 1,\n  maxPrice: 2,\n  radius: 2000\n};\nconst GlobalContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(initialState);\n\nconst GlobalProvider = ({\n  children\n}) => {\n  // <(IState, IAction) => IState, IState>\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState); // TODO: to resolve\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalContext.Provider, {\n    value: [state, dispatch],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZXMvR2xvYmFsU3RvcmUudHN4PzU5OGIiXSwibmFtZXMiOlsiRWF0ZXJ5VHlwZXMiLCJpbml0aWFsU3RhdGUiLCJhZGRyZXNzIiwidHlwZSIsIk9iamVjdCIsInZhbHVlcyIsInJhdGluZyIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJyYWRpdXMiLCJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIkdsb2JhbFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBS0EsV0FBWjs7V0FBWUEsVztBQUFBQSxhO0FBQUFBLGE7R0FBQUEsVyxLQUFBQSxXOztBQWNaLE1BQU1DLFlBQW9CLEdBQUc7QUFDM0JDLFNBQU8sRUFBRSxFQURrQjtBQUUzQkMsTUFBSSxFQUFFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsV0FBZCxFQUEyQixDQUEzQixDQUZxQjtBQUczQk0sUUFBTSxFQUFFLEdBSG1CO0FBSTNCQyxVQUFRLEVBQUUsQ0FKaUI7QUFLM0JDLFVBQVEsRUFBRSxDQUxpQjtBQU0zQkMsUUFBTSxFQUFFO0FBTm1CLENBQTdCO0FBU08sTUFBTUMsYUFBOEIsZ0JBQUdDLDJEQUFhLENBQVNWLFlBQVQsQ0FBcEQ7O0FBRVAsTUFBTVcsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQTBFO0FBQy9GO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyx3REFBVSxDQUFDQyxnREFBRCxFQUFnQmhCLFlBQWhCLENBQXBDLENBRitGLENBSS9GOztBQUNBLHNCQUFPLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRSxDQUFDYSxLQUFELEVBQVFDLFFBQVIsQ0FBL0I7QUFBQSxjQUFtREY7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FORDs7QUFRZUQsNkVBQWYiLCJmaWxlIjoiLi9zdG9yZXMvR2xvYmFsU3RvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHbG9iYWxSZWR1Y2VyIGZyb20gJ3JlZHVjZXJzJztcblxuZXhwb3J0IGVudW0gRWF0ZXJ5VHlwZXMge1xuICBSZXN0YXVyYW50ID0gJ3Jlc3RhdXJhbnQnLFxuICBDYWbDqSA9ICdjYWZlJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgdHlwZTogRWF0ZXJ5VHlwZXM7XG4gIHJhdGluZzogbnVtYmVyO1xuICBtaW5QcmljZTogbnVtYmVyO1xuICBtYXhQcmljZTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJU3RhdGUgPSB7XG4gIGFkZHJlc3M6ICcnLFxuICB0eXBlOiBPYmplY3QudmFsdWVzKEVhdGVyeVR5cGVzKVswXSxcbiAgcmF0aW5nOiAzLjUsXG4gIG1pblByaWNlOiAxLFxuICBtYXhQcmljZTogMixcbiAgcmFkaXVzOiAyMDAwXG59O1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dDogQ29udGV4dDxJU3RhdGU+ID0gY3JlYXRlQ29udGV4dDxJU3RhdGU+KGluaXRpYWxTdGF0ZSk7XG5cbmNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXSB8IEpTWC5FbGVtZW50IH0pOiBKU1guRWxlbWVudCA9PiB7XG4gIC8vIDwoSVN0YXRlLCBJQWN0aW9uKSA9PiBJU3RhdGUsIElTdGF0ZT5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKEdsb2JhbFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgLy8gVE9ETzogdG8gcmVzb2x2ZVxuICByZXR1cm4gPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT57Y2hpbGRyZW59PC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./stores/GlobalStore.tsx\n");

/***/ }),

/***/ "./stores/index.tsx":
/*!**************************!*\
  !*** ./stores/index.tsx ***!
  \**************************/
/*! exports provided: EateryTypes, GlobalContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GlobalStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStore */ \"./stores/GlobalStore.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EateryTypes\", function() { return _GlobalStore__WEBPACK_IMPORTED_MODULE_0__[\"EateryTypes\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GlobalContext\", function() { return _GlobalStore__WEBPACK_IMPORTED_MODULE_0__[\"GlobalContext\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _GlobalStore__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZXMvaW5kZXgudHN4P2Q5NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3RvcmVzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vR2xvYmFsU3RvcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR2xvYmFsU3RvcmUnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./stores/index.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });