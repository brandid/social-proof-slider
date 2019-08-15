/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
// Import __ from i18n internationalization library
var __=wp.i18n.__,_wp$editor=wp.editor,RichText=_wp$editor.RichText,MediaUpload=_wp$editor.MediaUpload,PlainText=_wp$editor.PlainText,registerBlockType=wp.blocks.registerBlockType,Button=wp.components.Button;// Import controls from block building library
// Import SCSS files
// // SVG icon path
// const iconEl = el('svg', { width: 20, height: 16 },
//   el('path', { d="M10 0C4.478 0 0 3.425 0 7.646c0 1.405.503 2.717 1.366 3.846L.032 16 5.6 14.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 3.425 15.523 0 10 0zM6.022 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223S6.695 8.51 6.022 8.51zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.81 0c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223z" } )
// );
// Register new Block
registerBlockType("social-proof-slider/main",{title:"SP Testimonials Slider",// icon: iconEl,
icon:"format-chat",category:"common",attributes:{title:{source:"text",selector:".card__title"},body:{type:"array",source:"children",selector:".card__body"},imageAlt:{attribute:"alt",selector:".card__image"},imageUrl:{attribute:"src",selector:".card__image"}},edit:function edit(a){var b=a.attributes,c=a.className,d=a.setAttributes,e=function(a){return b.imageUrl?wp.element.createElement("img",{src:b.imageUrl,onClick:a,className:"image"}):wp.element.createElement("div",{className:"button-container"},wp.element.createElement(Button,{onClick:a,className:"button button-large"},"Pick an image"))};return wp.element.createElement("div",{className:"container"},wp.element.createElement(MediaUpload,{onSelect:function onSelect(a){d({imageAlt:a.alt,imageUrl:a.url})},type:"image",value:b.imageID,render:function render(a){var b=a.open;return e(b)}}),wp.element.createElement(PlainText,{onChange:function onChange(a){return d({title:a})},value:b.title,placeholder:"Your card title",className:"heading"}),wp.element.createElement(RichText,{onChange:function onChange(a){return d({body:a})},value:b.body,multiline:"p",placeholder:"Your card text"}))},save:function save(a){var b=a.attributes;return wp.element.createElement("div",{className:"card"},function cardImage(a,b){return a?b?wp.element.createElement("img",{className:"card__image",src:a,alt:b}):wp.element.createElement("img",{className:"card__image",src:a,alt:"","aria-hidden":"true"}):null;// No alt set, so let's hide it from screen readers
}(b.imageUrl,b.imageAlt),wp.element.createElement("div",{className:"card__content"},wp.element.createElement("h3",{className:"card__title"},b.title),wp.element.createElement("div",{className:"card__body"},b.body)))}});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block */ "./blocks/src/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXRvciIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJzZWxlY3RvciIsImJvZHkiLCJ0eXBlIiwiaW1hZ2VBbHQiLCJhdHRyaWJ1dGUiLCJpbWFnZVVybCIsImVkaXQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJtZWRpYSIsImFsdCIsInVybCIsImltYWdlSUQiLCJvcGVuIiwiY29udGVudCIsInNhdmUiLCJjYXJkSW1hZ2UiLCJzcmMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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Q0csSUFGdkIsQ0FHSSxTQUFTLENBQUMsR0FIZCxDQUlJLFdBQVcsQ0FBQyxnQkFKaEIsRUFiSixDQXNCUCxDQXhFeUMsQ0F5RTFDZ0IsSUF6RTBDLGlCQXlFckIsSUFBZG5CLEVBQWMsR0FBZEEsVUFBYyxDQTBCakIsTUFDSSxpQ0FBSyxTQUFTLENBQUMsTUFBZixFQXpCYyxRQUFab0IsVUFBWSxDQUFDQyxDQUFELENBQU1QLENBQU4sQ0FBYyxPQUN4Qk8sRUFEd0IsQ0FHekJQLENBSHlCLENBS3BCLGdDQUNJLFNBQVMsQ0FBQyxhQURkLENBRUksR0FBRyxDQUFHTyxDQUZWLENBR0ksR0FBRyxDQUFHUCxDQUhWLEVBTG9CLENBZXhCLGdDQUNJLFNBQVMsQ0FBQyxhQURkLENBRUksR0FBRyxDQUFHTyxDQUZWLENBR0ksR0FBRyxDQUFDLEVBSFIsQ0FJSSxjQUFZLE1BSmhCLEVBZndCLENBQ1osSUFEWSxDQWE1QjtBQVNILENBSVMsQ0FBVXJCLENBQVUsQ0FBQ08sUUFBckIsQ0FBK0JQLENBQVUsQ0FBQ0ssUUFBMUMsQ0FETixDQUVJLGdDQUFLLFNBQVMsQ0FBQyxlQUFmLEVBQ0ksK0JBQUksU0FBUyxDQUFDLGFBQWQsRUFBOEJMLENBQVUsQ0FBQ0gsS0FBekMsQ0FESixDQUVJLGdDQUFLLFNBQVMsQ0FBQyxZQUFmLEVBQ01HLENBQVUsQ0FBQ0csSUFEakIsQ0FGSixDQUZKLENBV1AsQ0EvR3lDLENBQTdCLEM7Ozs7Ozs7Ozs7O0FDdEJqQix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiLy8gSW1wb3J0IF9fIGZyb20gaTE4biBpbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vLyBJbXBvcnQgY29udHJvbHMgZnJvbSBibG9jayBidWlsZGluZyBsaWJyYXJ5XG5jb25zdCB7IFJpY2hUZXh0LCBNZWRpYVVwbG9hZCwgUGxhaW5UZXh0IH0gPSB3cC5lZGl0b3I7XG5cbi8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gYmxvY2sgYnVpbGRpbmcgbGliYXJ5XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8vIEdldCBidXR0b24gZnJvbSBkZWZhdWx0IGNvbXBvbmVudHNcbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBJbXBvcnQgU0NTUyBmaWxlc1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gLy8gU1ZHIGljb24gcGF0aFxuLy8gY29uc3QgaWNvbkVsID0gZWwoJ3N2ZycsIHsgd2lkdGg6IDIwLCBoZWlnaHQ6IDE2IH0sXG4vLyAgIGVsKCdwYXRoJywgeyBkPVwiTTEwIDBDNC40NzggMCAwIDMuNDI1IDAgNy42NDZjMCAxLjQwNS41MDMgMi43MTcgMS4zNjYgMy44NDZMLjAzMiAxNiA1LjYgMTQuNTA4YzEuMzI5LjQ5OSAyLjgxOC43ODcgNC40Ljc4NyA1LjUyMyAwIDEwLTMuNDI0IDEwLTcuNjQ4QzIwIDMuNDI1IDE1LjUyMyAwIDEwIDB6TTYuMDIyIDguNTFjLS42NzEgMC0xLjIxNi0uNTQ3LTEuMjE2LTEuMjIzcy41NDUtMS4yMjMgMS4yMTYtMS4yMjNjLjY3MyAwIDEuMjE3LjU0NyAxLjIxNyAxLjIyM1M2LjY5NSA4LjUxIDYuMDIyIDguNTF6bTMuNzMxIDBjLS42NzIgMC0xLjIxNy0uNTQ3LTEuMjE3LTEuMjIzcy41NDUtMS4yMjMgMS4yMTctMS4yMjMgMS4yMTYuNTQ3IDEuMjE2IDEuMjIzLS41NDQgMS4yMjMtMS4yMTYgMS4yMjN6bTMuODEgMGMtLjY3MSAwLTEuMjE2LS41NDctMS4yMTYtMS4yMjNzLjU0NS0xLjIyMyAxLjIxNi0xLjIyM2MuNjczIDAgMS4yMTcuNTQ3IDEuMjE3IDEuMjIzcy0uNTQ0IDEuMjIzLTEuMjE3IDEuMjIzelwiIH0gKVxuLy8gKTtcblxuLy8gUmVnaXN0ZXIgbmV3IEJsb2NrXG5yZWdpc3RlckJsb2NrVHlwZSgnc29jaWFsLXByb29mLXNsaWRlci9tYWluJywge1xuICAgIHRpdGxlOiAnU1AgVGVzdGltb25pYWxzIFNsaWRlcicsXG4gICAgLy8gaWNvbjogaWNvbkVsLFxuICAgIGljb246ICdmb3JtYXQtY2hhdCcsXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuY2FyZF9fdGl0bGUnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICAgICAgICBzZWxlY3RvcjogJy5jYXJkX19ib2R5J1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZUFsdDoge1xuICAgICAgICAgICAgYXR0cmlidXRlOiAnYWx0JyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZVVybDoge1xuICAgICAgICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuICAgICAgICBjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBhdHRyaWJ1dGVzLmltYWdlVXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2sgYW4gaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7IH0gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaW1hZ2VJRCB9XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBsYWluVGV4dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGNhcmQgdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGJvZHk6IGNvbnRlbnQgfSkgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG4gICAgICAgICAgICAgICAgICAgIG11bHRpbGluZT1cInBcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9LFxuICAgIHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuICAgICAgICBjb25zdCBjYXJkSW1hZ2UgPSAoc3JjLCBhbHQpID0+IHtcbiAgICAgICAgICAgIGlmKCFzcmMpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBpZihhbHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyBzcmMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXsgYWx0IH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBObyBhbHQgc2V0LCBzbyBsZXQncyBoaWRlIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17IHNyYyB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIHsgY2FyZEltYWdlKGF0dHJpYnV0ZXMuaW1hZ2VVcmwsIGF0dHJpYnV0ZXMuaW1hZ2VBbHQpIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCI+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cmlidXRlcy5ib2R5IH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=