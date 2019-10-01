webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/Scroller.js":
/*!***************************************!*\
  !*** ./components/common/Scroller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/_up_icon.svg */ "./img/_up_icon.svg");
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_up_icon_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Scroller.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Scroller = function Scroller() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return window.addEventListener("scroll", handleScroll);
  });

  var handleScroll = function handleScroll() {
    if (!(window.scrollY < 250)) {
      console.log(window.scrollY);
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ })

})
//# sourceMappingURL=index.js.de178e1be3dcd38eba96.hot-update.js.map