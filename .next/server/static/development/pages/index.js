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
}, "Contact Me"), __jsx(_Footer_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("h4", {
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
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    src: _img_favicon_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["logo"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), isMobile ? __jsx(_Header_SideNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }) : __jsx("nav", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    href: "#about",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "About Me")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("a", {
    href: "#portfolio",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Work")), __jsx("div", {
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    href: "#contact",
    className: _Header_Headers_scss__WEBPACK_IMPORTED_MODULE_2___default.a["navbar__item-link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Contact"))));
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
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => setIsOpen(!isOpen),
    className: _Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navIcon"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navContainer"], {
      [_Header_SideNav_scss__WEBPACK_IMPORTED_MODULE_1___default.a["navContainer__opened"]]: isOpen
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "About Me")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    href: "#work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Work")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    href: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Contact")))));
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
	"navContainer": "navContainer___3CDlL",
	"navContainer__opened": "navContainer__opened___uN87N"
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
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Main/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Main = () => {
  return __jsx("div", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container__heading1"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Hi, I'm Hrak \uD83D\uDC4B"), __jsx("h2", {
    className: _Main_Main_scss__WEBPACK_IMPORTED_MODULE_1___default.a["main-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "A passionate web developer"), __jsx("a", {
    href: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
	"main-container__heading1": "main-container__heading1___3Zt8P",
	"main-container__heading2": "main-container__heading2___jqLeF",
	"btn": "btn___3ynub"
};

/***/ }),

/***/ "./components/Portfolio/Portfolio.js":
/*!*******************************************!*\
  !*** ./components/Portfolio/Portfolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portfolio/Portfolio.scss */ "./components/Portfolio/Portfolio.scss");
/* harmony import */ var _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Portfolio/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Portfolio = () => {
  return __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-3"],
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h4", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Portfolio"), __jsx("h5", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Check out my latest projects"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "LA-HOP"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/LA-HOP.png */ "./img/LA-HOP.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "The initiative behind this project was to create a product that helps one of the biggest issues the City of Los Angeles is facing currently. During a 3 day hackathon a group of 6 people(3 Web Dev/3 UX/UI) were tasked to redesign and create a better solution for the LA-HOP system."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://gahackathon-95ace.firebaseapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Event Scheduling App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Event.png */ "./img/Event.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "The second project at GA was a new but challenging start to my journey. This was when team of 3 was tasked to create full stack MERN application. Our group came up with an idea of creating a web application where a user will be able to create, add update upcoming events such as music festivals, etc."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://still-taiga-70572.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/hrakt/groupProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Travel Itinerary with Amadeus API"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Planer.png */ "./img/Planer.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, "It was the third project that after creating a full stack application I was tasked to not only consume an application implementing full CRUD functionality but also implement a third party API. After days of research I came upon one of the greatest travel information API. But finding the suitable API was only the beggining of this challenge."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://thawing-island-39695.herokuapp.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/hrakt/project3-react-backend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, "Photo Portal App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/PhotoPort.png */ "./img/PhotoPort.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, "For the next project I was introduced to switching from Express.js and Node.js to Python and Flask for back-end. For the front end we decided to stick with React and in order to speed up the design portion of the project we implemented React-Boostrap to crunch the one week deadline of learning a new programming language and framework and delivering a MVP.", " "), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("a", {
    href: "http://immense-plains-23468.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/rbhidalgo/photo-port-react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/Portfolio/Portfolio.scss":
/*!*********************************************!*\
  !*** ./components/Portfolio/Portfolio.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container-3": "container-3___2P6AK",
	"portfolio-container": "portfolio-container___5ZEn5",
	"portfolio-container__heading": "portfolio-container__heading___1uK38",
	"portfolio-container__buttons": "portfolio-container__buttons___2heYv",
	"portfolio-container__heading2": "portfolio-container__heading2___1MxhB",
	"portfolio-container__box": "portfolio-container__box___2Ghga",
	"portfolio-container__heading3": "portfolio-container__heading3___1O67E",
	"portfolio-container__img": "portfolio-container__img___1X7tu",
	"portfolio-container__content": "portfolio-container__content___4KKpD",
	"portfolio-container__description": "portfolio-container__description___32Bff",
	"btn": "btn___1Y6jH"
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
  return __jsx("div", {
    className: _common_Button_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("button", {
    className: _common_Button_scss__WEBPACK_IMPORTED_MODULE_1___default.a["btn"],
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
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
	"icon__visible": "icon__visible___32OFb"
};

/***/ }),

/***/ "./img/Event.png":
/*!***********************!*\
  !*** ./img/Event.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Event-4fe253d342b1b64a2db98b2b738b1d53.png";

/***/ }),

/***/ "./img/LA-HOP.png":
/*!************************!*\
  !*** ./img/LA-HOP.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/LA-HOP-3c9f943e04fa1fd5b1b341f43ff1fbc9.png";

/***/ }),

/***/ "./img/PhotoPort.png":
/*!***************************!*\
  !*** ./img/PhotoPort.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/PhotoPort-70ecb67cee59fa039f8b448367802d2d.png";

/***/ }),

/***/ "./img/Planer.png":
/*!************************!*\
  !*** ./img/Planer.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Planer-7f84156e27239c0ac03b2dd55fe8065d.png";

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/About/About */ "./components/About/About.js");
/* harmony import */ var _components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portfolio/Portfolio */ "./components/Portfolio/Portfolio.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_common_Scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/common/Scroller */ "./components/common/Scroller.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const index = () => __jsx("div", {
  className: "jsx-2085888330",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_common_Scroller__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_components_About_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ocmFrL0Rlc2t0b3AvY29kZS9uZXh0anMtcG9ydGZvbGlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWUyQiIsImZpbGUiOiIvVXNlcnMvaHJhay9EZXNrdG9wL2NvZGUvbmV4dGpzLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbi9NYWluXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXQvQWJvdXRcIjtcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9ydGZvbGlvL1BvcnRmb2xpb1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XG5pbXBvcnQgU2Nyb2xsZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL1Njcm9sbGVyXCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxTY3JvbGxlciAvPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8UG9ydGZvbGlvIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/hrak/Desktop/code/nextjs-portfolio/pages/index.js */"));

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

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-mail-form":
/*!**********************************!*\
  !*** external "react-mail-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mail-form");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map