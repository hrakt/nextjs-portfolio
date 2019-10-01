webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Input = function Input(_ref) {
  var type = _ref.type,
      placeholder = _ref.placeholder,
      recievedStyle = _ref.recievedStyle,
      options = _ref.options;

  var returnOptions = function returnOptions(arr) {
    arr.map(function (item) {
      return item;
    });
  };

  switch (type) {
    case "textarea":
      return __jsx("textarea", {
        type: "text",
        placeholder: placeholder,
        className: recievedStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });

    case "select":
      return __jsx("select", {
        className: recievedStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("option", {
        value: "",
        disabled: true,
        selected: true,
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, placeholder), "returnOptions(", options, ");");

    default:
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "text"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.f545cd7956cb6ad19836.hot-update.js.map