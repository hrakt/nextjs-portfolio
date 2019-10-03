webpackHotUpdate("styles",{

/***/ "./components/Portfolio/Portfolio.scss":
/*!*********************************************!*\
  !*** ./components/Portfolio/Portfolio.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container-3":"container-3___2P6AK","portfolio-container":"portfolio-container___5ZEn5","portfolio-container__heading":"portfolio-container__heading___1uK38","portfolio-container__buttons":"portfolio-container__buttons___2heYv","portfolio-container__heading2":"portfolio-container__heading2___1MxhB","portfolio-container__box":"portfolio-container__box___2Ghga","portfolio-container__heading3":"portfolio-container__heading3___1O67E","portfolio-container__img":"portfolio-container__img___1X7tu","portfolio-container__content":"portfolio-container__content___4KKpD","portfolio-container__description":"portfolio-container__description___32Bff","btn":"btn___1Y6jH"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1570044935472");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.19e1613e41c64c2f6a1a.hot-update.js.map