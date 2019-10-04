module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About/About.js":
/*!***********************************!*\
  !*** ./components/About/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_About_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../About/About.scss */ "./components/About/About.scss");
/* harmony import */ var _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_About_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/About/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => {
  return __jsx("div", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-2"],
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h4", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__heading"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "About me"), __jsx("h5", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "If you're interested who I am"), __jsx("div", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__text"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "I'm Hrak, I'm a 22 years old Full-Stack developer from Los Angeles."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "3 years ago I made a decision to move out to Los Angeles and pursue my dreams. So far Ive had the oportunity to study Computer Science at Pasadena City College. Meanwhile, I tried to start a career working at Apple as Specialist and also had the oportuinty to do an internship at Techstars, a startup incubator program."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "In 2018, I got introduced to Web Development through CodeCademy and Reddit and I fell in love. The first time I created a web site it made me realize my passion toward building web applications."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "In 2019, I decided that after completing my classNamees at PCC, I want to put myself into an enviornment that will get my Web Development career started. That was when I discovered General Assembly and decided to take the Software Engineering Immersive course."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Because best way to learn something is just to practice it, I built over 5 projects during my time at GA expanding my knowledge on React, Node.js and Javascript in general."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "I've always strived to do more, be more and never settle learning."), __jsx("p", {
    className: _About_About_scss__WEBPACK_IMPORTED_MODULE_1___default.a["about-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "I\u2019m hard working, super curious, passionate, committed, and also a fast learner!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/About/About.scss":
/*!*************************************!*\
  !*** ./components/About/About.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container-2": "container-2___2_Blp",
	"about-container": "about-container___2NCAL",
	"about-container__heading": "about-container__heading___1Y4gl",
	"about-container__heading2": "about-container__heading2___1KzVy",
	"about-container__content": "about-container__content___2PuXR"
};

/***/ }),

/***/ "./components/Footer/ContactForm.js":
/*!******************************************!*\
  !*** ./components/Footer/ContactForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Input */ "./components/common/Input.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/ContactForm.scss */ "./components/Footer/ContactForm.scss");
/* harmony import */ var _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_mail_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mail-form */ "react-mail-form");
/* harmony import */ var react_mail_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_mail_form__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Footer/ContactForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Contact = () => {
  const options = ["Collaboration", "Inquiry", "Offer", "Suggestion", "Connect", "Other"];
  return __jsx("div", {
    className: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea"],
    type: "textarea",
    placeholder: "Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    recievedStyle: _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["select"],
    type: "select",
    placeholder: "What's this about?",
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(_common_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "textarea",
    placeholder: "Enter your message here",
    recievedStyle: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea"], _Footer_ContactForm_scss__WEBPACK_IMPORTED_MODULE_3___default.a["textarea__big"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer/ContactForm.scss":
/*!********************************************!*\
  !*** ./components/Footer/ContactForm.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___1zH2h",
	"textarea": "textarea___1rFdy",
	"textarea__big": "textarea__big___2qpMS",
	"select": "select___1sLlx"
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer.scss */ "./components/Footer/Footer.scss");
/* harmony import */ var _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_ionicons_svg_logo_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/_ionicons_svg_logo-github.svg */ "./img/_ionicons_svg_logo-github.svg");
/* harmony import */ var _img_ionicons_svg_logo_github_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_ionicons_svg_logo_github_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_ionicons_svg_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/_ionicons_svg_logo-linkedin.svg */ "./img/_ionicons_svg_logo-linkedin.svg");
/* harmony import */ var _img_ionicons_svg_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ionicons_svg_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer_ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/ContactForm */ "./components/Footer/ContactForm.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Footer/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => __jsx("div", {
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-4"],
  id: "contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("h2", {
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container__header1"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Contact Me"), __jsx("h4", {
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container__header2"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "If you would like to talk, you can find me at:"), __jsx("div", {
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container__icons"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.github.com/hrakt/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("img", {
  src: _img_ionicons_svg_logo_github_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container__icon"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("a", {
  href: "https://www.linkedin.com/in/hrakt/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("img", {
  src: _img_ionicons_svg_logo_linkedin_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  className: _Footer_Footer_scss__WEBPACK_IMPORTED_MODULE_1___default.a["contact-container__icon"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/Footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container-4": "container-4___2jDp3",
	"contact-container": "contact-container___nLXwQ",
	"contact-container__header1": "contact-container__header1___1Qmmt",
	"contact-container__header2": "contact-container__header2___DXgjC",
	"contact-container__icons": "contact-container__icons___B_B8P",
	"contact-container__icon": "contact-container__icon___2kCEM"
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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







const Header = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("resize", handleResize);
  });
  return __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_common_Scroller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "hrak.to")), isMobile ? __jsx(_Header_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }) : __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "About Me"))), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Work"))), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("a", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Headers.scss":
/*!****************************************!*\
  !*** ./components/Header/Headers.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"logo": "logo___3VBbV",
	"navbar": "navbar___2p39K",
	"navbar__item": "navbar__item___1NRHp",
	"navbar__container": "navbar__container___1eqRs",
	"navbar__item-link": "navbar__item-link___39q9j"
};

/***/ }),

/***/ "./components/Header/SideNav.js":
/*!**************************************!*\
  !*** ./components/Header/SideNav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/SideNav.scss */ "./components/Header/SideNav.scss");
/* harmony import */ var _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Header/SideNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SideNav = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const scroll = location => {
    setIsOpen(false);
    window.scrollTo(`#${location}`);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => setIsOpen(!isOpen),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navIcon"], {
      [_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navIcon__clicked"]]: isOpen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navContainer"], {
      [_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navContainer__opened"]]: isOpen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("ul", {
    className: _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navContainer__items"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("li", {
    onClick: scroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "About Me"), __jsx("li", {
    href: "#work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Work"), __jsx("li", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ }),

/***/ "./components/Header/SideNav.scss":
/*!****************************************!*\
  !*** ./components/Header/SideNav.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"navIcon": "navIcon___k4vbz",
	"navIcon__clicked": "navIcon__clicked___1Y6Py",
	"navContainer": "navContainer___3CDlL",
	"navContainer__opened": "navContainer__opened___uN87N",
	"navContainer__items": "navContainer__items___2dY0v"
};

/***/ }),

/***/ "./components/Main/Main.js":
/*!*********************************!*\
  !*** ./components/Main/Main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main/Main.scss */ "./components/Main/Main.scss");
/* harmony import */ var _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Main_Main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Main/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Main = () => {
  return __jsx("div", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container__heading1"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Hi, I'm Hrak \uD83D\uDC4B"), __jsx("h2", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "A passionate web developer"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/Main/Main.scss":
/*!***********************************!*\
  !*** ./components/Main/Main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___13tUu",
	"main-container": "main-container___33RFQ",
	"main-container__heading1": "main-container__heading1___3Zt8P",
	"main-container__heading2": "main-container__heading2___jqLeF",
	"btn": "btn___3ynub"
};

/***/ }),

/***/ "./components/common/Button.js":
/*!*************************************!*\
  !*** ./components/common/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Button.scss */ "./components/common/Button.scss");
/* harmony import */ var _common_Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_Button_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = ({
  title,
  type
}) => {
  const handleClick = e => {
    console.log(e.target);
  };

  return __jsx("div", {
    className: _common_Button_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("button", {
    className: _common_Button_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn"],
    type: type,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/common/Button.scss":
/*!***************************************!*\
  !*** ./components/common/Button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___-j92G",
	"btn": "btn___11a68"
};

/***/ }),

/***/ "./components/common/Input.js":
/*!************************************!*\
  !*** ./components/common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Input = ({
  type,
  placeholder,
  recievedStyle,
  options
}) => {
  const returnOptions = arr => {
    let optionArr = [];
    arr.map(item => {
      optionArr.push(__jsx("option", {
        value: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: undefined
      }, item));
    });
    return optionArr;
  };

  switch (type) {
    case "textarea":
      return __jsx("textarea", {
        type: "text",
        placeholder: placeholder,
        className: recievedStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: undefined
      });

    case "select":
      return __jsx("select", {
        className: recievedStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      }, __jsx("option", {
        value: "",
        disabled: true,
        selected: true,
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }, placeholder), returnOptions(options));

    default:
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: undefined
      }, __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        type: "text"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: undefined
      })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/common/Scroller.js":
/*!***************************************!*\
  !*** ./components/common/Scroller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Scroller.scss */ "./components/common/Scroller.scss");
/* harmony import */ var _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/_up_icon.svg */ "./img/_up_icon.svg");
/* harmony import */ var _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/common/Scroller.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Scroller = () => {
  const {
    0: scrollHit,
    1: setScrollHit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const visibleStyle = _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon__visible"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => window.addEventListener("scroll", handleScroll));

  const handleScroll = () => {
    if (!(window.scrollY < 250)) {
      setScrollHit(true);
    } else {
      setScrollHit(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return __jsx("div", {
    onClick: scrollTop,
    className: _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    src: _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon"], {
      [_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon__visible"]]: scrollHit
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ }),

/***/ "./components/common/Scroller.scss":
/*!*****************************************!*\
  !*** ./components/common/Scroller.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___1xbTH",
	"icon": "icon___18_SR",
	"icon__visible": "icon__visible___32OFb",
	"empty": "empty___2nUVZ"
};

/***/ }),

/***/ "./img/_ionicons_svg_logo-github.svg":
/*!*******************************************!*\
  !*** ./img/_ionicons_svg_logo-github.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMyQzEzMi4zIDMyIDMyIDEzNC45IDMyIDI2MS43YzAgMTAxLjUgNjQuMiAxODcuNSAxNTMuMiAyMTcuOSAxLjQuMyAyLjYuNCAzLjguNCA4LjMgMCAxMS41LTYuMSAxMS41LTExLjQgMC01LjUtLjItMTkuOS0uMy0zOS4xLTguNCAxLjktMTUuOSAyLjctMjIuNiAyLjctNDMuMSAwLTUyLjktMzMuNS01Mi45LTMzLjUtMTAuMi0yNi41LTI0LjktMzMuNi0yNC45LTMzLjYtMTkuNS0xMy43LS4xLTE0LjEgMS40LTE0LjFoLjFjMjIuNSAyIDM0LjMgMjMuOCAzNC4zIDIzLjggMTEuMiAxOS42IDI2LjIgMjUuMSAzOS42IDI1LjEgMTAuNSAwIDIwLTMuNCAyNS42LTYgMi0xNC44IDcuOC0yNC45IDE0LjItMzAuNy00OS43LTUuOC0xMDItMjUuNS0xMDItMTEzLjUgMC0yNS4xIDguNy00NS42IDIzLTYxLjYtMi4zLTUuOC0xMC0yOS4yIDIuMi02MC44IDAgMCAxLjYtLjUgNS0uNSA4LjEgMCAyNi40IDMuMSA1Ni42IDI0LjEgMTcuOS01LjEgMzctNy42IDU2LjEtNy43IDE5IC4xIDM4LjIgMi42IDU2LjEgNy43IDMwLjItMjEgNDguNS0yNC4xIDU2LjYtMjQuMSAzLjQgMCA1IC41IDUgLjUgMTIuMiAzMS42IDQuNSA1NSAyLjIgNjAuOCAxNC4zIDE2LjEgMjMgMzYuNiAyMyA2MS42IDAgODguMi01Mi40IDEwNy42LTEwMi4zIDExMy4zIDggNy4xIDE1LjIgMjEuMSAxNS4yIDQyLjUgMCAzMC43LS4zIDU1LjUtLjMgNjMgMCA1LjQgMy4xIDExLjUgMTEuNCAxMS41IDEuMiAwIDIuNi0uMSA0LS40QzQxNS45IDQ0OS4yIDQ4MCAzNjMuMSA0ODAgMjYxLjcgNDgwIDEzNC45IDM3OS43IDMyIDI1NiAzMnoiLz48L3N2Zz4="

/***/ }),

/***/ "./img/_ionicons_svg_logo-linkedin.svg":
/*!*********************************************!*\
  !*** ./img/_ionicons_svg_logo-linkedin.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDE3LjIgNjRIOTYuOEM3OS4zIDY0IDY0IDc2LjYgNjQgOTMuOVY0MTVjMCAxNy40IDE1LjMgMzIuOSAzMi44IDMyLjloMzIwLjNjMTcuNiAwIDMwLjgtMTUuNiAzMC44LTMyLjlWOTMuOUM0NDggNzYuNiA0MzQuNyA2NCA0MTcuMiA2NHpNMTgzIDM4NGgtNTVWMjEzaDU1djE3MXptLTI1LjYtMTk3aC0uNGMtMTcuNiAwLTI5LTEzLjEtMjktMjkuNSAwLTE2LjcgMTEuNy0yOS41IDI5LjctMjkuNXMyOSAxMi43IDI5LjQgMjkuNWMwIDE2LjQtMTEuNCAyOS41LTI5LjcgMjkuNXpNMzg0IDM4NGgtNTV2LTkzLjVjMC0yMi40LTgtMzcuNy0yNy45LTM3LjctMTUuMiAwLTI0LjIgMTAuMy0yOC4yIDIwLjMtMS41IDMuNi0xLjkgOC41LTEuOSAxMy41VjM4NGgtNTVWMjEzaDU1djIzLjhjOC0xMS40IDIwLjUtMjcuOCA0OS42LTI3LjggMzYuMSAwIDYzLjQgMjMuOCA2My40IDc1LjFWMzg0eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./img/_up_icon.svg":
/*!**************************!*\
  !*** ./img/_up_icon.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDEyLjYgMjI3LjFMMjc4LjYgODljLTUuOC02LTEzLjctOS0yMi40LTloLS40Yy04LjcgMC0xNi42IDMtMjIuNCA5bC0xMzQgMTM4LjFjLTEyLjUgMTItMTIuNSAzMS4zIDAgNDMuMiAxMi41IDExLjkgMzIuNyAxMS45IDQ1LjIgMGw3OS40LTgzdjIxNGMwIDE2LjkgMTQuMyAzMC42IDMyIDMwLjYgMTggMCAzMi0xMy43IDMyLTMwLjZ2LTIxNGw3OS40IDgzYzEyLjUgMTEuOSAzMi43IDExLjkgNDUuMiAwczEyLjUtMzEuMiAwLTQzLjJ6Ii8+PC9zdmc+"

/***/ }),

/***/ "./img/favicon.png":
/*!*************************!*\
  !*** ./img/favicon.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/layouts/main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), children, __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.js");
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_components_About_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hrak/Desktop/code/nextjs-portfolio/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mail-form":
/*!**********************************!*\
  !*** external "react-mail-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mail-form");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map