webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/SideNav.js":
/*!**************************************!*\
  !*** ./components/Header/SideNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/SideNav.scss */ "./components/Header/SideNav.scss");
/* harmony import */ var _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/SideNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var SideNav = function SideNav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var scroll = function scroll(location) {
    setIsOpen(false);
    window.scrollTo("#".concat(location));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: cs(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navIcon"], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navIcon__clicked"], isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navContainer"], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navContainer__opened"], isOpen)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("ul", {
    className: _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navContainer__items"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("li", {
    onClick: scroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "About Me"), __jsx("li", {
    href: "#work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Work"), __jsx("li", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ })

})
//# sourceMappingURL=index.js.067a1a0844af66e59e50.hot-update.js.map