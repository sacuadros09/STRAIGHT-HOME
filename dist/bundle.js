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

/***/ "./src/components/Data/data.ts":
/*!*************************************!*\
  !*** ./src/components/Data/data.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataprofile\": () => (/* binding */ dataprofile)\n/* harmony export */ });\nconst dataprofile = [\n    {\n        name: \"Jayca\",\n        pfp: \"/src/image/Jramirez.jpeg\",\n        message: \"Hey baby, how your doing??\",\n        uploadimage: \"/src/image/Sofia aceptado.png\",\n        hour: \"1 h\",\n        description: \"Opinion\"\n    },\n    {\n        name: \"Julieth\",\n        pfp: \"/src/image/Julieth.jpeg\",\n        message: \"Your so sexy\",\n        uploadimage: \"./src/image/Cuadros aceptado.png\",\n        hour: \"2 h\",\n        description: \"MY ADMV!!!!!\"\n    },\n    {\n        name: \"Avila\",\n        pfp: \"/src/image/Avila.jpeg\",\n        message: \"Visca Barca bro\",\n        uploadimage: \"/src/image/Santiago aceptado.png\",\n        hour: \"3 h\",\n        description: \"My friend is looking for a girlfriend\"\n    },\n    {\n        name: \"Sofia\",\n        pfp: \"/src/image/Sofia.jpeg\",\n        message: \"Real G 4 life\",\n        uploadimage: \"/src/image/Jramirez aceptado.png\",\n        hour: \"4 h\",\n        description: \"My friend is so cuteee!!\"\n    },\n    {\n        name: \"Valentina\",\n        pfp: \"/src/image/Valentina.jpeg\",\n        message: \"Valorant?\",\n        uploadimage: \"/src/image/Anne aceptado.png\",\n        hour: \"5 h\",\n        description: \"She is so bad playing valorant\"\n    },\n    {\n        name: \"Sacuadros09\",\n        pfp: \"/src/image/Cuadros.jpeg\",\n        message: \"I love you\",\n        uploadimage: \"/src/image/Avila aceptar.png\",\n        hour: \"13 h\",\n        description: \"Another year with the love of my life. Luv4 baby!\"\n    },\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Data/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mymessage\": () => (/* reexport safe */ _message_message__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Mypost\": () => (/* reexport safe */ _post_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Myprofile\": () => (/* reexport safe */ _profile_profile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Search\": () => (/* reexport safe */ _searchbar_searchbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _message_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message/message */ \"./src/components/message/message.ts\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/post */ \"./src/components/post/post.ts\");\n/* harmony import */ var _searchbar_searchbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchbar/searchbar */ \"./src/components/searchbar/searchbar.ts\");\n/* harmony import */ var _profile_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile */ \"./src/components/profile/profile.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/message/message.ts":
/*!*******************************************!*\
  !*** ./src/components/message/message.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attribute\": () => (/* binding */ attribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar attribute;\n(function (attribute) {\n    attribute[\"name\"] = \"name\";\n    attribute[\"pfp\"] = \"pfp\";\n    attribute[\"message\"] = \"message\";\n    attribute[\"uploadimage\"] = \"uploadimage\";\n})(attribute || (attribute = {}));\nclass Mymessage extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            pfp: null,\n            message: null,\n            uploadimage: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n    <div class=\"message-container\">\r\n<div class=\"message\">\r\n<div class=\"profile-pic\">\r\n  <img src=\"${this.pfp}\">\r\n</div>\r\n<div class=\"message-content\">\r\n  <div class=\"user-info\">\r\n    <h4 class=\"user-name\">${this.name}</h4>\r\n  </div>\r\n  <p class=\"message-text\">${this.message}</p>\r\n</div>\r\n</div>\r\n<hr class=\"message-separator\">\r\n`;\n        }\n    }\n}\ncustomElements.define(\"my-message\", Mymessage);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mymessage);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/message/message.ts?");

/***/ }),

/***/ "./src/components/post/post.ts":
/*!*************************************!*\
  !*** ./src/components/post/post.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attribut\": () => (/* binding */ attribut),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar attribut;\n(function (attribut) {\n    attribut[\"name\"] = \"name\";\n    attribut[\"pfp\"] = \"pfp\";\n    attribut[\"hour\"] = \"hour\";\n    attribut[\"description\"] = \"description\";\n    attribut[\"uploadimage\"] = \"uploadimage\";\n})(attribut || (attribut = {}));\nclass Mypost extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            pfp: null,\n            hour: null,\n            description: null,\n            uploadimage: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n    <section class=\"maxdiv\">\r\n    <div class=\"post\">\r\n<div class=\"user-info\">\r\n<img src=\"${this.pfp}\" class=\"profile-image\">\r\n<div class=\"user-details\">\r\n  <h3 class=\"username\">${this.name}</h3>\r\n  <p class=\"post-time\">${this.hour}</p>\r\n</div>\r\n</div>\r\n\r\n<div class=\"allpost\">\r\n<div class=\"post-content\">\r\n<p class=\"post-text\">${this.description}</p>\r\n<img src=\"${this.uploadimage}\" class=\"post-image\">\r\n</div>\r\n</div>\r\n</section>\r\n\r\n    `;\n        }\n    }\n}\ncustomElements.define(\"my-post\", Mypost);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mypost);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/post/post.ts?");

/***/ }),

/***/ "./src/components/profile/profile.ts":
/*!*******************************************!*\
  !*** ./src/components/profile/profile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attribu\": () => (/* binding */ attribu),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar attribu;\n(function (attribu) {\n    attribu[\"name\"] = \"name\";\n    attribu[\"pfp\"] = \"pfp\";\n})(attribu || (attribu = {}));\nclass Myprofile extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            pfp: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n         <section class=\"component profile\">\r\n<img src=\"${this.pfp}\" class=\"image pfp\">\r\n  <h3 class=\"username\">${this.name}</h3>\r\n </section>\r\n         `;\n        }\n    }\n}\ncustomElements.define(\"my-profile\", Myprofile);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Myprofile);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/profile/profile.ts?");

/***/ }),

/***/ "./src/components/searchbar/searchbar.ts":
/*!***********************************************!*\
  !*** ./src/components/searchbar/searchbar.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Search extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"./src/components/searchbar/searchbar.css\">\r\n        <div class=\"searchbar\">\r\n        <div class=\"composer-container\">\r\n      <div class=\"composer-header\">\r\n    <div class=\"profile-pic\">\r\n      <img src=\"/src/image/Cuadros.jpeg\">\r\n    </div>\r\n    <div class=\"composer-input-container\">\r\n      <input type=\"text\" placeholder=\"What are you thinking?\">\r\n    </div>\r\n    <img class=\"campana\" src=\"/src/image/Icono de imagen.png\">\r\n    <img src=\"/src/image/Icono de campana.png\">\r\n    <div class=\"separator\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"my-search\", Search);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/searchbar/searchbar.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dashboard\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_Data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Data/data */ \"./src/components/Data/data.ts\");\n/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/message/message */ \"./src/components/message/message.ts\");\n/* harmony import */ var _components_post_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/post/post */ \"./src/components/post/post.ts\");\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            const countainer = this.ownerDocument.createElement(\"section\");\n            countainer.className = \"all\";\n            const leftmessage = this.ownerDocument.createElement(\"section\");\n            leftmessage.className = \"left\";\n            const rightpost = this.ownerDocument.createElement(\"section\");\n            rightpost.className = \"right\";\n            const searchBar = this.ownerDocument.createElement(\"my-search\");\n            searchBar.className = \"top\";\n            rightpost.appendChild(searchBar);\n            // dataprofile.forEach((dat)=>{\n            //  const profile = this.ownerDocument.createElement(\"my-profile\");\n            // profile.setAttribute(attribu.name, dat.name);\n            // profile.setAttribute(attribu.pfp, dat.pfp);\n            //  leftmessage.appendChild(profile)\n            //  });\n            _components_Data_data__WEBPACK_IMPORTED_MODULE_1__.dataprofile.forEach((dat) => {\n                const message = this.ownerDocument.createElement(\"my-message\");\n                message.setAttribute(_components_message_message__WEBPACK_IMPORTED_MODULE_2__.attribute.name, dat.name);\n                message.setAttribute(_components_message_message__WEBPACK_IMPORTED_MODULE_2__.attribute.pfp, dat.pfp);\n                message.setAttribute(_components_message_message__WEBPACK_IMPORTED_MODULE_2__.attribute.message, dat.message);\n                message.setAttribute(_components_message_message__WEBPACK_IMPORTED_MODULE_2__.attribute.uploadimage, dat.uploadimage);\n                leftmessage.appendChild(message);\n            });\n            _components_Data_data__WEBPACK_IMPORTED_MODULE_1__.dataprofile.forEach((dat) => {\n                const post = this.ownerDocument.createElement(\"my-post\");\n                post.setAttribute(_components_post_post__WEBPACK_IMPORTED_MODULE_3__.attribut.name, dat.name);\n                post.setAttribute(_components_post_post__WEBPACK_IMPORTED_MODULE_3__.attribut.pfp, dat.pfp);\n                post.setAttribute(_components_post_post__WEBPACK_IMPORTED_MODULE_3__.attribut.hour, dat.hour);\n                post.setAttribute(_components_post_post__WEBPACK_IMPORTED_MODULE_3__.attribut.description, dat.description);\n                post.setAttribute(_components_post_post__WEBPACK_IMPORTED_MODULE_3__.attribut.uploadimage, dat.uploadimage);\n                rightpost.appendChild(post);\n            });\n            countainer.appendChild(leftmessage);\n            countainer.appendChild(rightpost);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(countainer);\n        }\n    }\n}\ncustomElements.define(\"app-dashboard\", Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;