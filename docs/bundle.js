/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.greeting__title {\n  color: #000000;\n  font-family: Josefin Sans;\n  font-size: 63px;\n  font-weight: 700;\n  line-height: 63px;\n}\n\n.content-text__title {\n  color: #000000;\n  font-family: \"Josefin Sans\";\n  font-size: 38px;\n  font-weight: 700;\n  line-height: 38px;\n}\n\n.address-info__title, .card__title {\n  color: #000000;\n  font-family: Josefin Sans;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 28px;\n}\n\n.copy__text, .address__text, .card__text, .content-text__text {\n  color: #444A4A;\n  font-family: Alegreya Sans;\n  font-size: 19px;\n  font-weight: 400;\n  line-height: 36px;\n  letter-spacing: 0.1%;\n}\n\n.figure__figcaption_takeoff, .figure__figcaption_cap, .greeting__text {\n  color: #444A4A;\n  font-family: Cedarville Cursive;\n  font-size: 28px;\n  font-weight: 400;\n  line-height: 53px;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nul[class],\nol[class] {\n  padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul,\nol,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\nul[class] {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  position: relative;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100vw;\n  padding: 0 4vw 0;\n  max-width: 1200px;\n  height: 100vh;\n}\n\n.button {\n  color: #FFFFFF;\n  font-family: Josefin Sans;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0%;\n  text-align: center;\n  cursor: pointer;\n  text-wrap: nowrap;\n}\n.button_size_s {\n  font-size: 16px;\n  width: 135px;\n  height: 43px;\n  border: none;\n  border-radius: 5px;\n  background: #2D635E;\n}\n.button_size_m {\n  font-size: 20px;\n  width: 235px;\n  height: 54px;\n  border: none;\n  border-radius: 5px;\n  background: #2D635E;\n}\n.button:hover {\n  opacity: 0.8;\n}\n\n.menu {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.menu__bar {\n  width: 40px;\n  height: 2px;\n  background-color: black;\n}\n@media screen and (max-width: 992px) {\n  .menu {\n    display: flex;\n  }\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 30px;\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 30px;\n  max-width: 480px;\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  .nav {\n    display: none;\n  }\n}\n\n.nav-list {\n  gap: 40px;\n  display: flex;\n  align-items: center;\n}\n.nav-list__link {\n  text-wrap: nowrap;\n  text-decoration: none;\n  color: #000000;\n  font-family: Josefin Sans;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0%;\n  text-align: justify;\n}\n.nav-list__link:hover {\n  opacity: 0.8;\n}\n\n@media screen and (max-width: 992px) {\n  .logo {\n    margin-right: 35vw;\n  }\n}\n@media screen and (max-width: 768px) {\n  .logo {\n    margin-right: 33vw;\n  }\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.greeting {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  text-wrap: nowrap;\n}\n.greeting__view {\n  display: flex;\n  flex-direction: column;\n  margin-top: 155px;\n  align-items: center;\n}\n.greeting__text {\n  margin-bottom: 26px;\n}\n.greeting__title {\n  margin-bottom: 26px;\n}\n@media screen and (max-width: 992px) {\n  .greeting {\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n\n.greeting-container {\n  display: flex;\n  margin-top: 50px;\n}\n@media screen and (max-width: 992px) {\n  .greeting-container {\n    display: none;\n  }\n}\n\n.exposition {\n  position: relative;\n  background-color: #E3EBE7;\n  min-width: 410px;\n  min-height: 466px;\n}\n.exposition__image {\n  position: absolute;\n  min-width: 344px;\n  min-height: 373px;\n  top: 140px;\n  left: 39px;\n}\n\n.aside {\n  max-width: 50px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  row-gap: 14px;\n}\n.aside__text {\n  margin-top: 130px;\n  text-wrap: nowrap;\n  color: #444A4A;\n  font-family: Josefin Sans;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 28px;\n  transform-origin: left top;\n  transform: rotate(-90deg);\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  margin-top: 197px;\n}\n\n.content-desc {\n  display: flex;\n  margin-bottom: 140px;\n}\n@media screen and (max-width: 992px) {\n  .content-desc {\n    flex-direction: column;\n    margin-bottom: 95px;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  .content-desc_second {\n    flex-direction: column-reverse;\n  }\n}\n\n.figure {\n  position: relative;\n}\n\n.figure_cap {\n  background-color: #FAE9E0;\n  min-width: 380px;\n  min-height: 287px;\n}\n\n.figure__image_cap {\n  position: absolute;\n  left: 27px;\n  top: 87px;\n}\n@media screen and (max-width: 992px) {\n  .figure__image_cap {\n    position: absolute;\n    top: 38%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.figure__figcaption_cap {\n  position: absolute;\n  top: 28%;\n  left: -4%;\n  transform-origin: left top;\n  transform: rotate(-90deg);\n}\n@media screen and (max-width: 992px) {\n  .figure__figcaption_cap {\n    display: none;\n  }\n}\n\n.figure_takeoff {\n  min-width: 410px;\n  width: 410px;\n  min-height: 276px;\n  height: 276px;\n  background-color: #E3EBE7;\n}\n@media screen and (max-width: 992px) {\n  .figure_takeoff {\n    width: 100%;\n  }\n}\n\n.figure__image_takeoff {\n  position: absolute;\n  min-width: 236px;\n  min-height: 320px;\n  left: 72px;\n  top: -10%;\n}\n@media screen and (max-width: 992px) {\n  .figure__image_takeoff {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.figure__figcaption_takeoff {\n  position: absolute;\n  transform-origin: left top;\n  transform: rotate(-90deg);\n  top: 30%;\n  right: -20%;\n}\n@media screen and (max-width: 992px) {\n  .figure__figcaption_takeoff {\n    display: none;\n  }\n}\n\n.content-text__title {\n  margin-bottom: 25px;\n}\n\n.content-text_first {\n  margin-left: 103px;\n}\n@media screen and (max-width: 992px) {\n  .content-text_first {\n    margin-left: 0;\n    margin-top: 30px;\n  }\n}\n\n.content-text_second {\n  margin-right: 103px;\n}\n.content-text_second .button {\n  margin-top: 24px;\n}\n@media screen and (max-width: 992px) {\n  .content-text_second {\n    margin-right: 0;\n    margin-top: 30px;\n  }\n  .content-text_second .button {\n    display: none;\n  }\n}\n\n.shop {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 65px;\n}\n.shop::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 55%;\n  background-color: #2D635E;\n  opacity: 0.05;\n  z-index: -1;\n}\n@media screen and (max-width: 992px) {\n  .shop {\n    margin-top: 0;\n  }\n  .shop::before {\n    content: none;\n  }\n}\n\n.cards {\n  display: flex;\n  flex-direction: row;\n}\n@media screen and (max-width: 992px) {\n  .cards {\n    flex-direction: column;\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 3vw;\n  padding: 45px 2vw 45px 2vw;\n  max-width: 340px;\n  min-height: 458px;\n  border-radius: 25px;\n  box-shadow: 0px 23px 34px 0px rgba(35, 57, 55, 0.17);\n  background-color: #FFFFFF;\n  text-wrap: wrap;\n}\n.card:last-child {\n  margin-right: 0;\n}\n.card .button {\n  margin-top: auto;\n}\n.card__text {\n  margin-top: 25px;\n}\n@media screen and (max-width: 992px) {\n  .card {\n    margin-right: 0;\n    margin-top: 30px;\n  }\n  .card:first-child {\n    margin-top: 0;\n  }\n}\n\n.arrow {\n  cursor: pointer;\n}\n.arrow:hover {\n  opacity: 0.8;\n}\n@media screen and (max-width: 992px) {\n  .arrow {\n    display: none;\n  }\n}\n\n.arrow-left {\n  margin-right: 1.5%;\n}\n\n.arrow-right {\n  margin-left: 1.5%;\n}\n\n.footer {\n  display: flex;\n  flex-direction: column;\n  margin-top: 130px;\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  .footer {\n    margin-top: 95px;\n  }\n}\n\n.contacts {\n  display: flex;\n  align-items: center;\n  margin-left: 100px;\n}\n@media screen and (max-width: 992px) {\n  .contacts {\n    flex-direction: column;\n    margin-left: 0px;\n  }\n}\n\n.address-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-wrap: nowrap;\n  height: 100%;\n  margin-left: 175px;\n}\n.address-info__title {\n  margin-bottom: 21px;\n  position: relative;\n}\n.address-info__title::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -125px;\n  background-color: black;\n  width: 100px;\n  height: 2px;\n}\n@media screen and (max-width: 992px) {\n  .address-info {\n    margin-left: 0;\n    margin-top: 30px;\n    width: 100%;\n    flex-direction: row;\n    height: 10%;\n    justify-content: center;\n  }\n  .address-info__title::before {\n    content: none;\n  }\n  .address-info__title::after {\n    content: \":\";\n  }\n  .address-info__title {\n    padding-right: 1vw;\n    margin-bottom: 10px;\n    padding-top: 2px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .address-info {\n    margin-top: 30px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: auto;\n  }\n}\n\n.address__text {\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 992px) {\n  .address {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .address__text {\n    margin-left: 7px;\n  }\n  .address__text::after {\n    content: \",\";\n  }\n  .address__text:last-child::after {\n    content: \"\";\n  }\n}\n@media screen and (max-width: 768px) {\n  .address {\n    flex-direction: column;\n  }\n}\n\n.map {\n  border: none;\n  max-width: 646px;\n  width: 50vw;\n  max-height: 351px;\n  height: 50vw;\n}\n\n.copy {\n  margin-top: 90px;\n}\n.copy__text {\n  font-weight: 700;\n  width: 100%;\n  text-align: center;\n}\n@media screen and (max-width: 992px) {\n  .copy {\n    margin-top: 10px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bandler-templates/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://bandler-templates/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bandler-templates/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bandler-templates/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bandler-templates/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\r\n\r\n\r\n// Slider behavior \r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    const leftArrow = document.querySelector(\".arrow-left\");\r\n    const rightArrow = document.querySelector(\".arrow-right\");\r\n\r\n    function nextSlide() {\r\n        const sliderItems = document.getElementsByClassName(\"card\");\r\n        const lastItem = sliderItems[sliderItems.length - 1];\r\n        lastItem.parentNode.prepend(lastItem);\r\n    }\r\n\r\n    function prevSlide() {\r\n        const sliderItems = document.getElementsByClassName(\"card\");\r\n        const firstItem = sliderItems[0];\r\n        firstItem.parentNode.append(firstItem);\r\n    }\r\n\r\n    leftArrow.addEventListener(\"click\", prevSlide);\r\n    rightArrow.addEventListener(\"click\", nextSlide);\r\n});\r\n\n\n//# sourceURL=webpack://bandler-templates/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;