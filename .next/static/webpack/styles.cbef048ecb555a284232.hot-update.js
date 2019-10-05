webpackHotUpdate("styles",{

/***/ "./components/Footer/Footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container-4":"container-4___2jDp3","contact-container":"contact-container___nLXwQ","contact-container__header1":"contact-container__header1___1Qmmt","contact-container__header2":"contact-container__header2___DXgjC","contact-container__icons":"contact-container__icons___B_B8P","contact-container__icon":"contact-container__icon___2kCEM"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1570229659821");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.cbef048ecb555a284232.hot-update.js.map