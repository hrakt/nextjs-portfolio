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
/* harmony import */ var _Header_SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/SideNav */ "./components/Header/SideNav.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  var handleResize = function handleResize() {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", handleResize);
  });
  return isMobile ? __jsx(_Header_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }) : __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: _img_favicon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    href: "#about",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "About Me")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("a", {
    href: "#portfolio",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Work")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: "#contact",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/SideNav.js":
/*!**************************************!*\
  !*** ./components/Header/SideNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/SideNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SideNav = function SideNav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ })

})
//# sourceMappingURL=index.js.38bb0767670011f340b6.hot-update.js.map