webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/Portfolio/Portfolio.js":
/*!*******************************************!*\
  !*** ./components/Portfolio/Portfolio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portfolio/Portfolio.scss */ "./components/Portfolio/Portfolio.scss");
/* harmony import */ var _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Portfolio/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var data = __webpack_require__(/*! ../../resources/projects.json */ "./resources/projects.json");

var getJson = function getJson() {
  console.log("being calleds");
  data.map(function (project) {
    return console.log(project.title);
  });
};

var Portfolio = function Portfolio() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return getJson;
  });
  return __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-3"],
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h4", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Portfolio"), __jsx("h5", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Check out my latest projects"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "LA-HOP"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/LA-HOP.png */ "./img/LA-HOP.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "The initiative behind this project was to create a product that helps one of the biggest issues the City of Los Angeles is facing currently. During a 3 day hackathon a group of 6 people(3 Web Dev/3 UX/UI) were tasked to redesign and create a better solution for the LA-HOP system."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("a", {
    href: "https://gahackathon-95ace.firebaseapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Event Scheduling App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Event.png */ "./img/Event.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "The second project at GA was a new but challenging start to my journey. This was when team of 3 was tasked to create full stack MERN application. Our group came up with an idea of creating a web application where a user will be able to create, add update upcoming events such as music festivals, etc."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("a", {
    href: "https://still-taiga-70572.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/hrakt/groupProject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Travel Itinerary with Amadeus API"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/Planer.png */ "./img/Planer.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "It was the third project that after creating a full stack application I was tasked to not only consume an application implementing full CRUD functionality but also implement a third party API. After days of research I came upon one of the greatest travel information API. But finding the suitable API was only the beggining of this challenge."), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("a", {
    href: "https://thawing-island-39695.herokuapp.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/hrakt/project3-react-backend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }))))))), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("h6", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Photo Portal App"), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../img/PhotoPort.png */ "./img/PhotoPort.png"),
    alt: "Portfolio-1",
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  })), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "For the next project I was introduced to switching from Express.js and Node.js to Python and Flask for back-end. For the front end we decided to stick with React and in order to speed up the design portion of the project we implemented React-Boostrap to crunch the one week deadline of learning a new programming language and framework and delivering a MVP.", " "), __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("a", {
    href: "http://immense-plains-23468.herokuapp.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Visit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  })), __jsx("a", {
    href: "https://github.com/rbhidalgo/photo-port-react",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Source",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=work.js.3c8913e132204d6c3020.hot-update.js.map