webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/favicon.png */ "./img/favicon.png");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Headers.scss */ "./components/Header/Headers.scss");
/* harmony import */ var _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  var handleResize = function handleResize() {
    console.log(window.innerWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", handleResize);
  });
  return __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: _img_favicon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: "#about",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "About Me")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("a", {
    href: "#portfolio",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Work")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    href: "#contact",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.52e138ee95e5a05e1387.hot-update.js.map