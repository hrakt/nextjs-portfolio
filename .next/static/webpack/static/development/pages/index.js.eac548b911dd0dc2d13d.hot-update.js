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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
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
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    src: _img_up_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon"], scrollHit ? _common_Scroller_scss__WEBPACK_IMPORTED_MODULE_1___default.a["icon__visible"] : none),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scroller);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

})
//# sourceMappingURL=index.js.eac548b911dd0dc2d13d.hot-update.js.map