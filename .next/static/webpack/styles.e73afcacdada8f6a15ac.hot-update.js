webpackHotUpdate("styles",{

/***/ "./components/Header/Headers.scss":
/*!****************************************!*\
  !*** ./components/Header/Headers.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logo":"logo___3VBbV","navbar":"navbar___2p39K","navbar__item":"navbar__item___1NRHp","navbar__container":"navbar__container___1eqRs","navbar__item-link":"navbar__item-link___39q9j"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1570215317010");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e73afcacdada8f6a15ac.hot-update.js.map