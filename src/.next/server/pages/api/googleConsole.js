module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/googleConsole.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api/call.ts":
/*!*************************!*\
  !*** ./lib/api/call.ts ***!
  \*************************/
/*! exports provided: generateURL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateURL\", function() { return generateURL; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  publicRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\nconst baseURL = publicRuntimeConfig.BASE_URL || '';\nconst corsBypassURL = publicRuntimeConfig.CORS_BYPASS_URL || '';\nconst API = {\n  get: async (internal, path, params, queries, body) => {\n    try {\n      const url = generateURL(internal, path, params, queries);\n      console.log('url in call ', url); // TODO: use middleware approach to enable CORS\n\n      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url); // const response = await axios.get(corsBypassURL + baseURL + path);\n\n      console.log(response);\n      return response.data;\n    } catch (error) {\n      if (error.response) {\n        // The request was made and the server responded with a status code\n        // that falls out of the range of 2xx\n        throw error.response;\n      } else if (error.request) {\n        // The request was made but no response was received\n        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of\n        // http.ClientRequest in node.js\n        throw error.request;\n      } else {\n        // Something happened in setting up the request that triggered an Error\n        throw error.message;\n      }\n    }\n  }\n};\nconst generateURL = (internal, path, params, queries) => {\n  let finalURL = '';\n\n  if (internal) {\n    finalURL = corsBypassURL + baseURL + (path.charAt(0) === '/' ? path : '/' + path);\n  } else {\n    finalURL = path;\n  }\n\n  console.log(internal, finalURL);\n\n  if (params) {\n    const paramKeys = Object.getOwnPropertyNames(params);\n\n    for (const p of paramKeys) {\n      finalURL = finalURL.replace(`:${p}`, params[p]);\n    }\n  }\n\n  if (queries) {\n    const queryKeys = Object.getOwnPropertyNames(queries);\n    const cleanedQueries = queryKeys.filter(k => {\n      return queries[k] !== undefined && queries[k] !== null;\n    });\n\n    if (0 === cleanedQueries.length) {\n      return finalURL;\n    }\n\n    finalURL += '?';\n\n    for (const q of cleanedQueries) {\n      finalURL += `${q}=${queries[q]}&`;\n    }\n  }\n\n  return finalURL.slice(0, -1);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (API);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpL2NhbGwudHM/NmMxNSJdLCJuYW1lcyI6WyJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiYmFzZVVSTCIsIkJBU0VfVVJMIiwiY29yc0J5cGFzc1VSTCIsIkNPUlNfQllQQVNTX1VSTCIsIkFQSSIsImdldCIsImludGVybmFsIiwicGF0aCIsInBhcmFtcyIsInF1ZXJpZXMiLCJib2R5IiwidXJsIiwiZ2VuZXJhdGVVUkwiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJheGlvcyIsImRhdGEiLCJlcnJvciIsInJlcXVlc3QiLCJtZXNzYWdlIiwiZmluYWxVUkwiLCJjaGFyQXQiLCJwYXJhbUtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicCIsInJlcGxhY2UiLCJxdWVyeUtleXMiLCJjbGVhbmVkUXVlcmllcyIsImZpbHRlciIsImsiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJxIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBMEJDLGtEQUFTLEVBQXpDO0FBQ0EsTUFBTUMsT0FBZSxHQUFHRixtQkFBbUIsQ0FBQ0csUUFBcEIsSUFBZ0MsRUFBeEQ7QUFDQSxNQUFNQyxhQUFxQixHQUFHSixtQkFBbUIsQ0FBQ0ssZUFBcEIsSUFBdUMsRUFBckU7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsS0FBRyxFQUFFLE9BQWlCQyxRQUFqQixFQUFvQ0MsSUFBcEMsRUFBa0RDLE1BQWxELEVBQWdFQyxPQUFoRSxFQUErRUMsSUFBL0UsS0FBNkg7QUFDaEksUUFBSTtBQUNGLFlBQU1DLEdBQUcsR0FBR0MsV0FBVyxDQUFDTixRQUFELEVBQVdDLElBQVgsRUFBaUJDLE1BQWpCLEVBQXlCQyxPQUF6QixDQUF2QjtBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCSCxHQUE1QixFQUZFLENBR0Y7O0FBQ0EsWUFBTUksUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNYLEdBQU4sQ0FBVU0sR0FBVixDQUF2QixDQUpFLENBS0Y7O0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaO0FBQ0EsYUFBT0EsUUFBUSxDQUFDRSxJQUFoQjtBQUNELEtBUkQsQ0FRRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFJQSxLQUFLLENBQUNILFFBQVYsRUFBb0I7QUFDbEI7QUFDQTtBQUNBLGNBQU1HLEtBQUssQ0FBQ0gsUUFBWjtBQUNELE9BSkQsTUFJTyxJQUFJRyxLQUFLLENBQUNDLE9BQVYsRUFBbUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsY0FBTUQsS0FBSyxDQUFDQyxPQUFaO0FBQ0QsT0FMTSxNQUtBO0FBQ0w7QUFDQSxjQUFNRCxLQUFLLENBQUNFLE9BQVo7QUFDRDtBQUNGO0FBQ0Y7QUF6QlMsQ0FBWjtBQTRCTyxNQUFNUixXQUFXLEdBQUcsQ0FBQ04sUUFBRCxFQUFvQkMsSUFBcEIsRUFBa0NDLE1BQWxDLEVBQWdEQyxPQUFoRCxLQUEwRTtBQUNuRyxNQUFJWSxRQUFnQixHQUFHLEVBQXZCOztBQUNBLE1BQUlmLFFBQUosRUFBYztBQUNaZSxZQUFRLEdBQUduQixhQUFhLEdBQUdGLE9BQWhCLElBQTJCTyxJQUFJLENBQUNlLE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLEdBQXlCZixJQUF6QixHQUFnQyxNQUFNQSxJQUFqRSxDQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xjLFlBQVEsR0FBR2QsSUFBWDtBQUNEOztBQUNETSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWixFQUFzQmUsUUFBdEI7O0FBQ0EsTUFBSWIsTUFBSixFQUFZO0FBQ1YsVUFBTWUsU0FBUyxHQUFHQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCakIsTUFBM0IsQ0FBbEI7O0FBQ0EsU0FBSyxNQUFNa0IsQ0FBWCxJQUFnQkgsU0FBaEIsRUFBMkI7QUFDekJGLGNBQVEsR0FBR0EsUUFBUSxDQUFDTSxPQUFULENBQWtCLElBQUdELENBQUUsRUFBdkIsRUFBMEJsQixNQUFNLENBQUNrQixDQUFELENBQWhDLENBQVg7QUFDRDtBQUNGOztBQUNELE1BQUlqQixPQUFKLEVBQWE7QUFDWCxVQUFNbUIsU0FBUyxHQUFHSixNQUFNLENBQUNDLG1CQUFQLENBQTJCaEIsT0FBM0IsQ0FBbEI7QUFDQSxVQUFNb0IsY0FBYyxHQUFHRCxTQUFTLENBQUNFLE1BQVYsQ0FBa0JDLENBQUQsSUFBZTtBQUNyRCxhQUFPdEIsT0FBTyxDQUFDc0IsQ0FBRCxDQUFQLEtBQWVDLFNBQWYsSUFBNEJ2QixPQUFPLENBQUNzQixDQUFELENBQVAsS0FBZSxJQUFsRDtBQUNELEtBRnNCLENBQXZCOztBQUlBLFFBQUksTUFBTUYsY0FBYyxDQUFDSSxNQUF6QixFQUFpQztBQUMvQixhQUFPWixRQUFQO0FBQ0Q7O0FBRURBLFlBQVEsSUFBSSxHQUFaOztBQUNBLFNBQUssTUFBTWEsQ0FBWCxJQUFnQkwsY0FBaEIsRUFBZ0M7QUFDOUJSLGNBQVEsSUFBSyxHQUFFYSxDQUFFLElBQUd6QixPQUFPLENBQUN5QixDQUFELENBQUksR0FBL0I7QUFDRDtBQUNGOztBQUVELFNBQU9iLFFBQVEsQ0FBQ2MsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBQyxDQUFuQixDQUFQO0FBQ0QsQ0EvQk07QUFpQ1EvQixrRUFBZiIsImZpbGUiOiIuL2xpYi9hcGkvY2FsbC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcbmNvbnN0IGJhc2VVUkw6IHN0cmluZyA9IHB1YmxpY1J1bnRpbWVDb25maWcuQkFTRV9VUkwgfHwgJyc7XG5jb25zdCBjb3JzQnlwYXNzVVJMOiBzdHJpbmcgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkNPUlNfQllQQVNTX1VSTCB8fCAnJztcblxuY29uc3QgQVBJID0ge1xuICBnZXQ6IGFzeW5jIDxSZXNwb25zZT4oaW50ZXJuYWw6IGJvb2xlYW4sIHBhdGg6IHN0cmluZywgcGFyYW1zPzogYW55LCBxdWVyaWVzPzogYW55LCBib2R5PzogYW55KTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBnZW5lcmF0ZVVSTChpbnRlcm5hbCwgcGF0aCwgcGFyYW1zLCBxdWVyaWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKCd1cmwgaW4gY2FsbCAnLCB1cmwpO1xuICAgICAgLy8gVE9ETzogdXNlIG1pZGRsZXdhcmUgYXBwcm9hY2ggdG8gZW5hYmxlIENPUlNcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChjb3JzQnlwYXNzVVJMICsgYmFzZVVSTCArIHBhdGgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAvLyBUaGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlXG4gICAgICAgIC8vIHRoYXQgZmFsbHMgb3V0IG9mIHRoZSByYW5nZSBvZiAyeHhcbiAgICAgICAgdGhyb3cgZXJyb3IucmVzcG9uc2U7XG4gICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2FzIG1hZGUgYnV0IG5vIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxuICAgICAgICAvLyBgZXJyb3IucmVxdWVzdGAgaXMgYW4gaW5zdGFuY2Ugb2YgWE1MSHR0cFJlcXVlc3QgaW4gdGhlIGJyb3dzZXIgYW5kIGFuIGluc3RhbmNlIG9mXG4gICAgICAgIC8vIGh0dHAuQ2xpZW50UmVxdWVzdCBpbiBub2RlLmpzXG4gICAgICAgIHRocm93IGVycm9yLnJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICB0aHJvdyBlcnJvci5tZXNzYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVVJMID0gKGludGVybmFsOiBib29sZWFuLCBwYXRoOiBzdHJpbmcsIHBhcmFtcz86IGFueSwgcXVlcmllcz86IGFueSk6IHN0cmluZyA9PiB7XG4gIGxldCBmaW5hbFVSTDogc3RyaW5nID0gJyc7XG4gIGlmIChpbnRlcm5hbCkge1xuICAgIGZpbmFsVVJMID0gY29yc0J5cGFzc1VSTCArIGJhc2VVUkwgKyAocGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoKTtcbiAgfSBlbHNlIHtcbiAgICBmaW5hbFVSTCA9IHBhdGg7XG4gIH1cbiAgY29uc29sZS5sb2coaW50ZXJuYWwsIGZpbmFsVVJMKTtcbiAgaWYgKHBhcmFtcykge1xuICAgIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmFtcyk7XG4gICAgZm9yIChjb25zdCBwIG9mIHBhcmFtS2V5cykge1xuICAgICAgZmluYWxVUkwgPSBmaW5hbFVSTC5yZXBsYWNlKGA6JHtwfWAsIHBhcmFtc1twXSk7XG4gICAgfVxuICB9XG4gIGlmIChxdWVyaWVzKSB7XG4gICAgY29uc3QgcXVlcnlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocXVlcmllcyk7XG4gICAgY29uc3QgY2xlYW5lZFF1ZXJpZXMgPSBxdWVyeUtleXMuZmlsdGVyKChrOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiBxdWVyaWVzW2tdICE9PSB1bmRlZmluZWQgJiYgcXVlcmllc1trXSAhPT0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmICgwID09PSBjbGVhbmVkUXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmaW5hbFVSTDtcbiAgICB9XG5cbiAgICBmaW5hbFVSTCArPSAnPyc7XG4gICAgZm9yIChjb25zdCBxIG9mIGNsZWFuZWRRdWVyaWVzKSB7XG4gICAgICBmaW5hbFVSTCArPSBgJHtxfT0ke3F1ZXJpZXNbcV19JmA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsVVJMLnNsaWNlKDAsIC0xKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api/call.ts\n");

/***/ }),

/***/ "./pages/api/googleConsole.ts":
/*!************************************!*\
  !*** ./pages/api/googleConsole.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_api_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/api/call */ \"./lib/api/call.ts\");\n// import { NextApiRequest, NextApiResponse } from 'next';\n// import runMiddlewares from 'lib/api/middlewares';\n //   // Initialize the cors middleware\n//   const cors = initMiddleware(\n//     // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options\n//     Cors()\n//   );\n//   // // Run cors\n//   await cors(req, res);\n//   // // Rest of the API logic\n//   res.json({ message: 'Hello Everyone!' });\n//   // await runMiddlewares(req, res);\n//   // res.statusCode = 200;\n//   // res.json({ hello: 'world' });\n// };\n// function initMiddleware(middleware) {\n//   return (req, res) =>\n//     new Promise((resolve, reject) => {\n//       middleware(req, res, (result) => {\n//         if (result instanceof Error) {\n//           return reject(result);\n//         }\n//         return resolve(result);\n//       });\n//     });\n// }\n\n// import nextConnect from 'next-connect';\n\n\nconst testMiddleware = (req, res, next) => {\n  cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, result => {\n    console.log(result);\n  });\n  console.log('middleware');\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  console.log(req.query);\n  const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';\n  const response = await lib_api_call__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(false, baseURL, null, req.query, null);\n  res.send(response);\n}); // const handler = nextConnect()\n//   // .use(testMiddleware)\n//   .get(\n//     async (req: NextApiRequest, res: NextApiResponse): Promise<Response | void> => {\n//       console.log(req.query);\n//       const baseURL = 'https://maps.googleapis.com/maps/api/geocode/json';\n//       const response = await API.get(false, baseURL, null, req.query, null);\n//       res.send(response);\n//     }\n//   );\n// export default handler;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ29vZ2xlQ29uc29sZS50cz8xYTRjIl0sIm5hbWVzIjpbInRlc3RNaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dCIsImNvcnMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJiYXNlVVJMIiwicmVzcG9uc2UiLCJBUEkiLCJnZXQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDekNDLDZDQUFJLENBQUNILEdBQUQsRUFBTUMsR0FBTixFQUFZRyxNQUFELElBQVk7QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0QsR0FGRyxDQUFKO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQUosTUFBSTtBQUNMLENBTkQ7O0FBUWUsc0VBQU9GLEdBQVAsRUFBNEJDLEdBQTVCLEtBQStFO0FBQzVGSSxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sR0FBRyxDQUFDTyxLQUFoQjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxtREFBaEI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsb0RBQUcsQ0FBQ0MsR0FBSixDQUFRLEtBQVIsRUFBZUgsT0FBZixFQUF3QixJQUF4QixFQUE4QlIsR0FBRyxDQUFDTyxLQUFsQyxFQUF5QyxJQUF6QyxDQUF2QjtBQUNBTixLQUFHLENBQUNXLElBQUosQ0FBU0gsUUFBVDtBQUNELENBTEQsRSxDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ29vZ2xlQ29uc29sZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0Jztcbi8vIGltcG9ydCBydW5NaWRkbGV3YXJlcyBmcm9tICdsaWIvYXBpL21pZGRsZXdhcmVzJztcblxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbi8vICAgLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXG4vLyAgIGNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbi8vICAgICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuLy8gICAgIENvcnMoKVxuLy8gICApO1xuXG4vLyAgIC8vIC8vIFJ1biBjb3JzXG4vLyAgIGF3YWl0IGNvcnMocmVxLCByZXMpO1xuXG4vLyAgIC8vIC8vIFJlc3Qgb2YgdGhlIEFQSSBsb2dpY1xuLy8gICByZXMuanNvbih7IG1lc3NhZ2U6ICdIZWxsbyBFdmVyeW9uZSEnIH0pO1xuXG4vLyAgIC8vIGF3YWl0IHJ1bk1pZGRsZXdhcmVzKHJlcSwgcmVzKTtcbi8vICAgLy8gcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4vLyAgIC8vIHJlcy5qc29uKHsgaGVsbG86ICd3b3JsZCcgfSk7XG4vLyB9O1xuXG4vLyBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4vLyAgIHJldHVybiAocmVxLCByZXMpID0+XG4vLyAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuLy8gICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbi8vICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbi8vICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gfVxuXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG4vLyBpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcbmltcG9ydCBBUEkgZnJvbSAnbGliL2FwaS9jYWxsJztcblxuY29uc3QgdGVzdE1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29ycyhyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH0pO1xuICBjb25zb2xlLmxvZygnbWlkZGxld2FyZScpO1xuICBuZXh0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4gPT4ge1xuICBjb25zb2xlLmxvZyhyZXEucXVlcnkpO1xuICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFQSS5nZXQoZmFsc2UsIGJhc2VVUkwsIG51bGwsIHJlcS5xdWVyeSwgbnVsbCk7XG4gIHJlcy5zZW5kKHJlc3BvbnNlKTtcbn07XG5cbi8vIGNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXG4vLyAgIC8vIC51c2UodGVzdE1pZGRsZXdhcmUpXG4vLyAgIC5nZXQoXG4vLyAgICAgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+ID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeSk7XG4vLyAgICAgICBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUEkuZ2V0KGZhbHNlLCBiYXNlVVJMLCBudWxsLCByZXEucXVlcnksIG51bGwpO1xuLy8gICAgICAgcmVzLnNlbmQocmVzcG9uc2UpO1xuLy8gICAgIH1cbi8vICAgKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/googleConsole.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ })

/******/ });