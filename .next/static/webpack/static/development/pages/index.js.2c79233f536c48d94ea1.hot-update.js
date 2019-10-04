webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer/ContactForm.js":
/*!******************************************!*\
  !*** ./components/Footer/ContactForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Input */ "./components/common/Input.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var _common_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Text */ "./components/common/Text.js");
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/ContactForm.scss */ "./components/Footer/ContactForm.scss");
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Footer/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ContactForm = function ContactForm() {
  var options = ["Collaboration", "Inquiry", "Offer", "Suggestion", "Connect", "Other"];
  return __jsx("div", {
    className: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_common_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "something"), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default.a["textarea"],
    type: "textarea",
    placeholder: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default.a["select"],
    type: "select",
    placeholder: "What's this about?",
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "textarea",
    placeholder: "Enter your message here",
    recievedStyle: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default.a["textarea"], _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_4___default.a["textarea__big"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/common/Text.js":
/*!***********************************!*\
  !*** ./components/common/Text.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Text.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Text = function Text(_ref) {
  var type = _ref.type;

  switch (type) {
    case "heading":
      return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        },
        __self: this
      }, children);

    default:
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "text"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      })), __jsx("label", {
        htmlFor: name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, (value.charAt(0).toUpperCase() + value.slice(1) + " ").replace("_", " ")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ })

})
//# sourceMappingURL=index.js.2c79233f536c48d94ea1.hot-update.js.map