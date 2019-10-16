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

/***/ })

})
//# sourceMappingURL=index.js.61e8b767b0fe990865e4.hot-update.js.map