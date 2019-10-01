webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/Scroller.js":
/*!***************************************!*\
  !*** ./components/common/Scroller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Scroller.scss */ "./components/common/Scroller.scss");
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/_up_icon.svg */ "./img/_up_icon.svg");
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_up_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Scroller.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Scroller = function Scroller() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      scrollHit = _useState[0],
      setScrollHit = _useState[1];

  var visibleStyle = _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2___default.a["icon__visible"];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return window.addEventListener("scroll", handleScroll);
  });

  var handleScroll = function handleScroll() {
    if (!(window.scrollY < 250)) {
      setScrollHit(true);
    }
  };

  return __jsx("div", {
    className: _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2___default.a["icon"], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_2___default.a["icon__visible"], scrollHit)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ })

})
//# sourceMappingURL=index.js.1177de4f8f17b4d5a339.hot-update.js.map