webpackHotUpdate("styles",{

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logo":"logo___4LlGj","navbar":"navbar___1vd5F","navbar__item":"navbar__item___2qvn0","navbar__item-link":"navbar__item-link___3zXZ7","main-container__heading1":"main-container__heading1___39H33","main-container__heading2":"main-container__heading2___2XF4O","portfolio-container":"portfolio-container___3YjUI","portfolio-container__heading":"portfolio-container__heading___pMYRs","portfolio-container__heading2":"portfolio-container__heading2___Nkuyt","portfolio-container__box":"portfolio-container__box___Ad4fF","portfolio-container__heading3":"portfolio-container__heading3___3sMtI","portfolio-container__img":"portfolio-container__img___1LoTu","portfolio-container__content":"portfolio-container__content___2N8_J","btn":"btn___1R9MZ","container":"container___2ObeQ","container-3":"container-3___diBZK","header":"header___14YjC"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1569538126552");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d6d5262dacf51c0a7430.hot-update.js.map