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
/* harmony import */ var _resources_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/projects */ "./resources/projects.js");
var _jsxFileName = "/Users/hrak/Desktop/code/nextjs-portfolio/components/Portfolio/Portfolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var getProjects = function getProjects() {
  console.log(_resources_projects__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return _resources_projects__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (project) {
    var picture = project.picture;
    return __jsx("div", {
      key: project.id,
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__section"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__box"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h6", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading3"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, project.title), __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__content"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portflio-container__left"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: project.picture,
      alt: "Portfolio-1",
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__img"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__right"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__description"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, project.description), __jsx("div", {
      className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__buttons"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      href: "https://gahackathon-95ace.firebaseapp.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Visit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("a", {
      href: "https://github.com/aBurmeseDev/LA-homelessOutreachPortal-hackathon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Source",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })))))));
  });
};

var Portfolio = function Portfolio() {
  return __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["container-3"],
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("h4", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Portfolio"), __jsx("h5", {
    className: _Portfolio_Portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default.a["portfolio-container__heading2"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Check out my latest projects"), getProjects()));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=work.js.a72b4f697ec4a7a90008.hot-update.js.map