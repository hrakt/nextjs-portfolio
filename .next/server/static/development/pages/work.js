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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Portfolio/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Portfolio = () => {
  return __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-3"],
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h4", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Portfolio"), __jsx("h5", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Check out my latest projects"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "LA-HOP"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/LA-HOP.png */ "./img/LA-HOP.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "The initiative behind this project was to create a product that helps one of the biggest issues the City of Los Angeles is facing currently. During a 3 day hackathon a group of 6 people(3 Web Dev/3 UX/UI) were tasked to redesign and create a better solution for the LA-HOP system."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://gahackathon-95ace.firebaseapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Event Scheduling App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Event.png */ "./img/Event.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "The second project at GA was a new but challenging start to my journey. This was when team of 3 was tasked to create full stack MERN application. Our group came up with an idea of creating a web application where a user will be able to create, add update upcoming events such as music festivals, etc."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://still-taiga-70572.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/hrakt/groupProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "Travel Itinerary with Amadeus API"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Planer.png */ "./img/Planer.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "It was the third project that after creating a full stack application I was tasked to not only consume an application implementing full CRUD functionality but also implement a third party API. After days of research I came upon one of the greatest travel information API. But finding the suitable API was only the beggining of this challenge."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://thawing-island-39695.herokuapp.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/hrakt/project3-react-backend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "Photo Portal App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/PhotoPort.png */ "./img/PhotoPort.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, "For the next project I was introduced to switching from Express.js and Node.js to Python and Flask for back-end. For the front end we decided to stick with React and in order to speed up the design portion of the project we implemented React-Boostrap to crunch the one week deadline of learning a new programming language and framework and delivering a MVP.", " "), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx("a", {
    href: "http://immense-plains-23468.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  })), __jsx("a", {
    href: "https://github.com/rbhidalgo/photo-port-react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
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

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Portfolio/Portfolio */ "./components/Portfolio/Portfolio.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/pages/work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Work = () => {
  return __jsx(_components_Portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hrak/Desktop/code/nextjs-portfolio/pages/work.js */"./pages/work.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map