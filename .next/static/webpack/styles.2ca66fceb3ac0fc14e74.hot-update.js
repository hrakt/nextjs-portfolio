webpackHotUpdate("styles",{

/***/ "./components/About/About.scss":
/*!*************************************!*\
  !*** ./components/About/About.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container-2":"container-2___2_Blp","about-container":"about-container___2NCAL","about-container__heading":"about-container__heading___1Y4gl","about-container__heading2":"about-container__heading2___1KzVy","about-container__content":"about-container__content___2PuXR"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1569545321486");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2ca66fceb3ac0fc14e74.hot-update.js.map