(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CActive%5COneDrive%5Cprojects%5Chello-next%5Cpages%5Cindex.js!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CActive%5COneDrive%5Cprojects%5Chello-next%5Cpages%5Cindex.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_b35e09dc2ca94ac6d9c1 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b35e09dc2ca94ac6d9c1 */ "dll-reference dll_b35e09dc2ca94ac6d9c1"))("./node_modules/react/index.js");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Active\\OneDrive\\projects\\hello-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Blog() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
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
  }]),
      getPosts = _useState[0],
      setPosts = _useState[1];

  return __jsx("div", {
    style: main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    style: ulStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, getPosts.map(function (post) {
    return __jsx("li", {
      key: post.id,
      style: listStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      style: imgLeft,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("img", {
      src: post.image,
      style: userPhoto,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), __jsx("div", {
      style: userContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("p", {
      style: userInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      style: nameStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, post.title), " ", post.description), __jsx("p", {
      style: timeStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, post.time)));
  })));
}
var main = {
  margin: '-8px'
};
var ulStyle = {
  listStyleType: 'none',
  padding: '0px'
};
var listStyle = {
  display: '-webkit-box',
  padding: '1rem 1rem',
  listStyle: 'none',
  borderBottom: '1px solid #CDCDCD'
};
var imgLeft = {
  width: '3rem',
  gridColumn: 'auto',
  mFflexPreferredSize: 'auto',
  flexBasis: 'auto',
  webkitBoxFlex: '0',
  msFlexPositive: '0',
  flexGrow: '0',
  msFlexNegative: '0',
  flexShrink: '0',
  msGridRow: '1',
  gridRow: '1',
  margin: '0 1rem 0 0'
};
var userPhoto = {
  display: 'inline-block',
  verticalAlign: 'middle',
  height: '3rem',
  width: '3rem',
  margin: '0 0.5rem 0 0',
  borderRadius: '50%',
  maxWidth: '100%'
};
var userContent = {
  msFlexPreferredSize: 'auto',
  flexBasis: 'auto',
  webkitBoxFlex: '1',
  msFlexPositive: '1',
  flexGrow: '1',
  msFlexNegative: '1',
  flexShrink: '1',
  msGridRow: '1',
  gridRow: '1',
  transform: 'translate(5px, 5px)',
  gridColumn: 'span 9'
};
var userInfo = {
  margin: '0.15rem 0 0'
};
var nameStyle = {
  fontWeight: '600'
};
var timeStyle = {
  margin: '0',
  color: '#9da4ae'
};

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CActive%5COneDrive%5Cprojects%5Chello-next%5Cpages%5Cindex.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CActive%5COneDrive%5Cprojects%5Chello-next%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CActive%5COneDrive%5Cprojects%5Chello-next%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_b35e09dc2ca94ac6d9c1":
/*!*******************************************!*\
  !*** external "dll_b35e09dc2ca94ac6d9c1" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b35e09dc2ca94ac6d9c1;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map