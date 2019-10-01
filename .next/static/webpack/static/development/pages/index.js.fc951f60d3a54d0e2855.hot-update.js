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
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/ContactForm.scss */ "./components/Footer/ContactForm.scss");
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_mail_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mail-form */ "./node_modules/react-mail-form/dist/react-mail-form.js");
/* harmony import */ var react_mail_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_mail_form__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Footer/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Contact = function Contact() {
  var options = ["Collaboration", "Inquiry", "Offer", "Suggestion", "Connect", "Other"];
  return __jsx("div", {
    className: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_mail_form__WEBPACK_IMPORTED_MODULE_5___default.a, {
    to: "address@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea"],
    type: "textarea",
    placeholder: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["select"],
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
    recievedStyle: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea"], _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea__big"]),
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
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./node_modules/react-mail-form/dist/react-mail-form.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-mail-form/dist/react-mail-form.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(1)),u=function(e){function t(t){var n=e.call(this,t)||this;n.state={title:"",contents:""},n.handleTitle=function(e){n.setState({title:e.target.value})},n.handleContents=function(e){n.setState({contents:e.target.value})};var r=n.props.to;if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r))throw new Error("Invalid email address");return n}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.className,r=void 0===n?"":n,o=e.titleMaxLength,a=void 0===o?50:o,u=e.titlePlaceholder,l=void 0===u?"Title...":u,c=e.contentsRows,s=void 0===c?8:c,f=e.contentsMaxLength,d=void 0===f?500:f,p=e.contentsPlaceholder,h=void 0===p?"Contents...":p,m=e.buttonText,v=void 0===m?"Send E-mail":m,y=this.state,b=y.title,_=y.contents;return i.default.createElement("div",{className:r},i.default.createElement("input",{type:"email",value:b,onChange:this.handleTitle,maxLength:Number(a),placeholder:l}),i.default.createElement("textarea",{value:_,onChange:this.handleContents,rows:Number(s),maxLength:Number(d),placeholder:h}),i.default.createElement("a",{href:"mailto:"+t+"?subject="+b+"&body="+_.replace(/\n/g,"%0D%0A")},v))},t}(i.default.Component);t.default=u},function(t,n){t.exports=e}])});

/***/ })

})
//# sourceMappingURL=index.js.fc951f60d3a54d0e2855.hot-update.js.map