webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponent */ "./pages/styledComponent.js");
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

  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "My page title"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("script", {
    src: "https://unpkg.com/styled-components/dist/styled-components.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["UnorderList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, getPosts.map(function (post) {
    return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["List"], {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["LeftImage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: post.image,
      style: userPhoto,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["UserContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["UserInfo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, post.title), " ", post.description), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_2__["Time"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, post.time)));
  })));
}

/***/ }),

/***/ "./pages/styledComponent.js":
/*!**********************************!*\
  !*** ./pages/styledComponent.js ***!
  \**********************************/
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
  componentId: "cui329-0"
})(["font-weight:600"]);
var UnorderList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "styledComponent__UnorderList",
  componentId: "cui329-1"
})(["list-style-type:none;padding:0px;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "styledComponent__List",
  componentId: "cui329-2"
})(["display:-webkit-box;padding:1rem 1rem;list-style:none;border-bottom:1px solid #CDCDCD;"]);
var LeftImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__LeftImage",
  componentId: "cui329-3"
})(["width:3rem;grid-column:auto;-m-flex-preferred-size:auto;flex-basis:auto;webkit-box-flex:0;ms-flex-positive:0;flex-grow:0;ms-flex-negative:0;flex-shrink:0;ms-grid-row:1;grid-row:1;margin:0 1rem 0 0;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styledComponent__Image",
  componentId: "cui329-4"
})(["  display:inline-block;vertical-align:middle;height:3rem;width:3rem;margin:0 0.5rem 0 0;border-radius:50%;max-width:100%;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__Wrapper",
  componentId: "cui329-5"
})(["margin:-8px;"]);
var UserContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponent__UserContent",
  componentId: "cui329-6"
})(["-ms-flex-preferred-size:auto;-flex-basis:auto;-webkit-box-flex:1;ms-flex-positive:1;flex-grow:1;ms-flex-negative:1;flex-shrink:1;ms-grid-row:1;grid-row:1;transform:translate(5p 5px);grid-column:span 9;"]);
var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponent__UserInfo",
  componentId: "cui329-7"
})(["margin:0.15rem 0 0"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styledComponent__Time",
  componentId: "cui329-8"
})(["margin:0;color:#9da4ae;"]);

/***/ })

})
//# sourceMappingURL=index.js.79f508abe2079e64ff52.hot-update.js.map