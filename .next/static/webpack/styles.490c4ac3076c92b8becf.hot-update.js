webpackHotUpdate("styles",{

/***/ "./components/Main/Main.scss":
/*!***********************************!*\
  !*** ./components/Main/Main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"container___13tUu","main-container__heading1":"main-container__heading1___3Zt8P","main-container__heading2":"main-container__heading2___jqLeF","btn":"btn___3ynub"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1569977908484");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.490c4ac3076c92b8becf.hot-update.js.map