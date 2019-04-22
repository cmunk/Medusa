(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var vue_async_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-async-computed */ \"./node_modules/vue-async-computed/dist/vue-async-computed.esm.js\");\n/* harmony import */ var vue_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-snotify */ \"./node_modules/vue-snotify/vue-snotify.esm.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-tables-2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-js-modal */ \"./node_modules/vue-js-modal/dist/index.js\");\n/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_js_modal__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-directive-tooltip */ \"./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.js\");\n/* harmony import */ var vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var vue_directive_tooltip_css_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-directive-tooltip/css/index.css */ \"./node_modules/vue-directive-tooltip/css/index.css\");\n/* harmony import */ var vue_directive_tooltip_css_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_directive_tooltip_css_index_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.devtools = true;\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.performance = true;\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_async_computed__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_snotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-tables-2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}, false, 'bootstrap4', 'default');\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_js_modal__WEBPACK_IMPORTED_MODULE_9___default.a);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_10___default.a); // Load x-template components\n\nwindow.components.forEach(function (component) {\n  if (_utils__WEBPACK_IMPORTED_MODULE_8__[\"isDevelopment\"]) {\n    console.debug(\"Registering \".concat(component.name));\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(component.name, component);\n}); // Global components\n\nvar globalComponents = [_components__WEBPACK_IMPORTED_MODULE_12__[\"AnidbReleaseGroupUi\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"AppHeader\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"AppLink\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"Asset\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"Backstretch\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"Config\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"FileBrowser\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"LanguageSelect\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"NamePattern\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"PlotInfo\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"RootDirs\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"ScrollButtons\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"SelectList\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"Show\"], _components__WEBPACK_IMPORTED_MODULE_12__[\"ShowSelector\"]];\nglobalComponents.forEach(function (component) {\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(component.name, component);\n});\nvar app = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  name: 'App',\n  store: _store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  router: _router__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  components: {},\n  data: function data() {\n    return {\n      globalLoading: false,\n      pageComponent: false\n    };\n  },\n  computed: Object.assign(Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapState\"])(['auth', 'config']), {}),\n  mounted: function mounted() {\n    if (_utils__WEBPACK_IMPORTED_MODULE_8__[\"isDevelopment\"]) {\n      console.log('App Mounted!');\n    }\n\n    if (!document.location.pathname.includes('/login')) {\n      var $store = this.$store;\n      $store.dispatch('login', {\n        username: window.username\n      });\n      $store.dispatch('getConfig');\n\n      if (_utils__WEBPACK_IMPORTED_MODULE_8__[\"isDevelopment\"]) {\n        console.log('App Loaded!');\n      }\n    }\n  }\n}).$mount('#vue-wrap');\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

},[["./src/app.js","vendors","medusa-runtime"]]]);