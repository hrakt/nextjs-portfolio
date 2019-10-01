webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/favicon.png */ "./img/favicon.png");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Headers.scss */ "./components/Header/Headers.scss");
/* harmony import */ var _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header() {
  var _useState = useState(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isMobile = _useState2[0],
      setIsMobile = _useState2[1];

  var handleResize = function handleResize() {
    console.log(window.innerWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("resize", handleResize);
  });
  return __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: _img_favicon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    href: "#about",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "About Me")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "#portfolio",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Work")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "#contact",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_3___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.b318f216a02cc8e7354a.hot-update.js.map