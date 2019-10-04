webpackHotUpdate("static/development/pages/work.js",{

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
/* harmony import */ var _common_Scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Scroller */ "./components/common/Scroller.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
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
  return __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_common_Scroller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "hrak.to")), isMobile ? __jsx(_Header_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) : __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "About Me"))), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "#portfolio",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Work"))), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    href: "#contact",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=work.js.f5cabeddcd88eda934cd.hot-update.js.map