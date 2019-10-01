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
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Scroller.scss */ "./components/common/Scroller.scss");
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/_up_icon.svg */ "./img/_up_icon.svg");
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Scroller.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Scroller = function Scroller() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      scrollHit = _useState[0],
      setScrollHit = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return window.addEventListener("scroll", handleScroll);
  });

  var handleScroll = function handleScroll() {
    if (!(window.scrollY < 250)) {
      setScrollHit(true);
    }

    setScrollHit(false);
  };

  return __jsx("div", {
    className: _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: cx(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon"], scrollHit ? _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon__visible"] : none),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false

})
//# sourceMappingURL=index.js.bd24f03c1f4ab42e2014.hot-update.js.map