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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

  var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
    displayName: "pages__Title",
    componentId: "sc-1ao6dy1-0"
  })(["font-weight:600"]);
  var UnorderList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
    displayName: "pages__UnorderList",
    componentId: "sc-1ao6dy1-1"
  })(["list-style-type:none;padding:0px;"]);
  var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
    displayName: "pages__List",
    componentId: "sc-1ao6dy1-2"
  })(["display:-webkit-box;padding:1rem 1rem;list-style:none;border-bottom:1px solid #CDCDCD;"]);
  var LeftImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "pages__LeftImage",
    componentId: "sc-1ao6dy1-3"
  })(["width:3rem;grid-column:auto;-m-flex-preferred-size:auto;flex-basis:auto;webkit-box-flex:0;ms-flex-positive:0;flex-grow:0;ms-flex-negative:0;flex-shrink:0;ms-grid-row:1;grid-row:1;margin:0 1rem 0 0;"]);
  var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
    displayName: "pages__Image",
    componentId: "sc-1ao6dy1-4"
  })(["  display:inline-block;vertical-align:middle;height:3rem;width:3rem;margin:0 0.5rem 0 0;border-radius:50%;max-width:100%;"]);
  var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "pages__Wrapper",
    componentId: "sc-1ao6dy1-5"
  })(["margin:-8px;"]);
  var UserContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "pages__UserContent",
    componentId: "sc-1ao6dy1-6"
  })(["-ms-flex-preferred-size:auto;-flex-basis:auto;-webkit-box-flex:1;ms-flex-positive:1;flex-grow:1;ms-flex-negative:1;flex-shrink:1;ms-grid-row:1;grid-row:1;transform:translate(5p 5px);grid-column:span 9;"]);
  var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
    displayName: "pages__UserInfo",
    componentId: "sc-1ao6dy1-7"
  })(["margin:0.15rem 0 0"]);
  var Time = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
    displayName: "pages__Time",
    componentId: "sc-1ao6dy1-8"
  })(["margin:0;color:#9da4ae;"]);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "My page title"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("script", {
    src: "https://unpkg.com/styled-components/dist/styled-components.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(UnorderList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, getPosts.map(function (post) {
    return __jsx(List, {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(LeftImage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(Image, {
      src: post.image,
      style: userPhoto,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    })), __jsx(UserContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(UserInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, post.title), " ", post.description), __jsx(Time, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, post.time)));
  })));
}
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

/***/ })

})
//# sourceMappingURL=index.js.6037e70b66df8950d505.hot-update.js.map