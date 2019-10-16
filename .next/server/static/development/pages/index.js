module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/styledComponent.js":
/*!***************************************!*\
  !*** ./components/styledComponent.js ***!
  \***************************************/
/*! exports provided: Title, UnorderList, List, LeftImage, Image, Wrapper, UserContent, UserInfo, Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnorderList", function() { return UnorderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftImage", function() { return LeftImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContent", function() { return UserContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styledComponent__Title",
  componentId: "sc-1fpoobx-0"
})(["font-weight:600"]);
const UnorderList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "styledComponent__UnorderList",
  componentId: "sc-1fpoobx-1"
})(["list-style-type:none;padding:0px;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styledComponent__List",
  componentId: "sc-1fpoobx-2"
})(["display:-webkit-box;padding:1rem 1rem;list-style:none;border-bottom:1px solid #CDCDCD;"]);
const LeftImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponent__LeftImage",
  componentId: "sc-1fpoobx-3"
})(["width:3rem;grid-column:auto;-m-flex-preferred-size:auto;flex-basis:auto;webkit-box-flex:0;ms-flex-positive:0;flex-grow:0;ms-flex-negative:0;flex-shrink:0;ms-grid-row:1;grid-row:1;margin:0 1rem 0 0;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styledComponent__Image",
  componentId: "sc-1fpoobx-4"
})(["  display:inline-block;vertical-align:middle;height:3rem;width:3rem;margin:0 0.5rem 0 0;border-radius:50%;max-width:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponent__Wrapper",
  componentId: "sc-1fpoobx-5"
})(["margin:-8px;"]);
const UserContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styledComponent__UserContent",
  componentId: "sc-1fpoobx-6"
})(["-ms-flex-preferred-size:auto;-flex-basis:auto;-webkit-box-flex:1;ms-flex-positive:1;flex-grow:1;ms-flex-negative:1;flex-shrink:1;ms-grid-row:1;grid-row:1;transform:translate(5p 5px);grid-column:span 9;"]);
const UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styledComponent__UserInfo",
  componentId: "sc-1fpoobx-7"
})(["margin:0.15rem 0 0"]);
const Time = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styledComponent__Time",
  componentId: "sc-1fpoobx-8"
})(["margin:0;color:#9da4ae;"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styledComponent */ "./components/styledComponent.js");
var _jsxFileName = "C:\\Users\\Active\\OneDrive\\projects\\hello-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Blog() {
  const {
    0: getPosts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: '1',
    image: '/profile-1.jpg',
    title: 'Paulo Souza ',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '2',
    image: '/profile-2.jpg',
    title: 'Paulo Souza',
    description: 'comentou no seu post',
    time: 'hace 15 horas'
  }, {
    id: '3',
    image: '/profile-3.jpg',
    title: 'Pet Shop do Paulo',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '4',
    image: '/profile-1.jpg',
    title: 'Paulo Souza',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '5',
    image: '/profile-2.jpg',
    title: 'Paulo Souza',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '6',
    image: '/profile-3.jpg',
    title: 'Pet Shop do Paulo',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '7',
    image: '/profile-1.jpg',
    title: 'Paulo Souza',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }, {
    id: '8',
    image: '/profile-3.jpg',
    title: 'Paulo Souza',
    description: 'vizualizou seu perfil',
    time: 'hace 15 horas'
  }]);
  return __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["UnorderList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, getPosts.map(post => __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["List"], {
    key: post.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["LeftImage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: post.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["UserContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["UserInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, post.title), " ", post.description), __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["Time"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, post.time))))));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Active\OneDrive\projects\hello-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map