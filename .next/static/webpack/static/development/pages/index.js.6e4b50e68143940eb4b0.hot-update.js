webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "styledComponent__Title",
  componentId: "sc-1fpoobx-0"
})(["font-weight:600"]);
var UnorderList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styledComponent__UnorderList",
  componentId: "sc-1fpoobx-1"
})(["list-style-type:none;padding:0px;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "styledComponent__List",
  componentId: "sc-1fpoobx-2"
})(["display:-webkit-box;padding:1rem 1rem;list-style:none;border-bottom:1px solid #CDCDCD;"]);
var LeftImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__LeftImage",
  componentId: "sc-1fpoobx-3"
})(["width:3rem;grid-column:auto;-m-flex-preferred-size:auto;flex-basis:auto;webkit-box-flex:0;ms-flex-positive:0;flex-grow:0;ms-flex-negative:0;flex-shrink:0;ms-grid-row:1;grid-row:1;margin:0 1rem 0 0;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styledComponent__Image",
  componentId: "sc-1fpoobx-4"
})(["  display:inline-block;vertical-align:middle;height:3rem;width:3rem;margin:0 0.5rem 0 0;border-radius:50%;max-width:100%;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__Wrapper",
  componentId: "sc-1fpoobx-5"
})(["margin:-8px;"]);
var UserContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__UserContent",
  componentId: "sc-1fpoobx-6"
})(["-ms-flex-preferred-size:auto;-flex-basis:auto;-webkit-box-flex:1;ms-flex-positive:1;flex-grow:1;ms-flex-negative:1;flex-shrink:1;ms-grid-row:1;grid-row:1;transform:translate(5p 5px);grid-column:span 9;"]);
var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponent__UserInfo",
  componentId: "sc-1fpoobx-7"
})(["margin:0.15rem 0 0"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styledComponent */ "./components/styledComponent.js");
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
  }, getPosts.map(function (post) {
    return __jsx(_components_styledComponent__WEBPACK_IMPORTED_MODULE_1__["List"], {
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
    }, post.time)));
  })));
}

/***/ }),

/***/ "./pages/styledComponent.js":
false

})
//# sourceMappingURL=index.js.6e4b50e68143940eb4b0.hot-update.js.map