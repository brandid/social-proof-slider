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
// Import registerBlockType() from block building libary
var registerBlockType=wp.blocks.registerBlockType,createElement=wp.element.createElement,__=wp.i18n.__,_wp$editor=wp.editor,AlignmentToolbar=_wp$editor.AlignmentToolbar,BlockControls=_wp$editor.BlockControls,InspectorControls=_wp$editor.InspectorControls,PanelColorSettings=_wp$editor.PanelColorSettings,_wp$components=wp.components,Icon=_wp$components.Icon,ColorPicker=_wp$components.ColorPicker,TextControl=_wp$components.TextControl,SelectControl=_wp$components.SelectControl,ServerSideRender=_wp$components.ServerSideRender;// React.createElement
// Import SCSS files
// SVG icon
var iconEl=function(){return wp.element.createElement(Icon,{icon:wp.element.createElement("svg",null,wp.element.createElement("path",{d:"M10 2C4.478 2 0 5.425 0 9.646c0 1.404.503 2.717 1.366 3.846L.032 18 5.6 16.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 5.425 15.523 2 10 2zm-3.978 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.809 0c-.67 0-1.215-.547-1.215-1.223s.545-1.223 1.215-1.223c.674 0 1.217.547 1.217 1.223s-.543 1.223-1.217 1.223z"}))})};// Register new Block
registerBlockType("social-proof-slider/main",{title:__("SP Testimonials Slider"),description:__("Display a Social Proof Testimonials Slider"),icon:iconEl,category:"common",attributes:{align:{type:"string"},bgcolor:{type:"string"},testimonialtextcolor:{type:"string"},authornamecolor:{type:"string"},authortitlecolor:{type:"string"}},edit:function edit(a){// Update Text Alignment attr
// Update BG Color attr
// Update Testimonials Text Color
// Update Author name Color
// Update Author Title Color
var b=a.attributes,c=a.setAttributes,d=new Event("gutenbergSlick");// Display block preview and UI
return createElement("div",{},[// Trigger event for loading Slick
document.dispatchEvent(d),// Preview a block with a PHP render callback
createElement(ServerSideRender,{block:"social-proof-slider/main",attributes:a.attributes}),// Block Controls
createElement(BlockControls,{},[wp.element.createElement(AlignmentToolbar,{value:b.align,onChange:function onChange(a){c({align:a})}})]),// Inspector Controls
createElement(InspectorControls,{},[wp.element.createElement(PanelColorSettings,{title:__("Background Color"),colorSettings:[{value:b.bgcolor,onChange:function(a){c({bgcolor:a})},label:__("Slider Background Color")}]}),wp.element.createElement(PanelColorSettings,{title:__("Text Colors"),colorSettings:[{value:b.testimonialtextcolor,onChange:function(a){c({testimonialtextcolor:a})},label:__("Testimonial Text Color")},{value:b.authornamecolor,onChange:function(a){c({authornamecolor:a})},label:__("Author Name Color")},{value:b.authortitlecolor,onChange:function(a){c({authortitlecolor:a})},label:__("Author Title Color")}]})])])},save:function save(a){a.attributes;return null}});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJfXyIsImkxOG4iLCJlZGl0b3IiLCJBbGlnbm1lbnRUb29sYmFyIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29tcG9uZW50cyIsIkljb24iLCJDb2xvclBpY2tlciIsIlRleHRDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlNlcnZlclNpZGVSZW5kZXIiLCJpY29uRWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImFsaWduIiwidHlwZSIsImJnY29sb3IiLCJ0ZXN0aW1vbmlhbHRleHRjb2xvciIsImF1dGhvcm5hbWVjb2xvciIsImF1dGhvcnRpdGxlY29sb3IiLCJlZGl0IiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwiY3VzdG9tRXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImJsb2NrIiwibmV4dEFsaWduIiwidmFsdWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFELENBSFQsQ0FYVyxDQUZmLEVBWGhCLENBRFksQ0FwQmtCLENBQVosQ0F5RGpCLENBL0d5QyxDQWdIMUNxQyxJQWhIMEMsaUJBZ0hyQixHQUFkbkIsVUFBYyxDQUNqQixNQUFPLEtBQ1YsQ0FsSHlDLENBQTdCLEM7Ozs7Ozs7Ozs7O0FDekJqQix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSBibG9jayBidWlsZGluZyBsaWJhcnlcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxuLy8gUmVhY3QuY3JlYXRlRWxlbWVudFxuY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vLyBJbXBvcnQgX18gZnJvbSBpMThuIGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8vIEltcG9ydCBjb250cm9scyBmcm9tIGJsb2NrIGJ1aWxkaW5nIGxpYnJhcnlcbmNvbnN0IHsgQWxpZ25tZW50VG9vbGJhciwgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMsIFBhbmVsQ29sb3JTZXR0aW5ncyB9ID0gd3AuZWRpdG9yO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuY29uc3QgeyBJY29uLCBDb2xvclBpY2tlciwgVGV4dENvbnRyb2wsIFNlbGVjdENvbnRyb2wsIFNlcnZlclNpZGVSZW5kZXIgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIEltcG9ydCBTQ1NTIGZpbGVzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBTVkcgaWNvblxuY29uc3QgaWNvbkVsID0gKCkgPT4gKFxuICAgIDxJY29uIGljb249eyA8c3ZnPjxwYXRoIGQ9XCJNMTAgMkM0LjQ3OCAyIDAgNS40MjUgMCA5LjY0NmMwIDEuNDA0LjUwMyAyLjcxNyAxLjM2NiAzLjg0NkwuMDMyIDE4IDUuNiAxNi41MDhjMS4zMjkuNDk5IDIuODE4Ljc4NyA0LjQuNzg3IDUuNTIzIDAgMTAtMy40MjQgMTAtNy42NDhDMjAgNS40MjUgMTUuNTIzIDIgMTAgMnptLTMuOTc4IDguNTFjLS42NzEgMC0xLjIxNi0uNTQ3LTEuMjE2LTEuMjIzcy41NDUtMS4yMjMgMS4yMTYtMS4yMjNjLjY3MyAwIDEuMjE3LjU0NyAxLjIxNyAxLjIyM3MtLjU0NCAxLjIyMy0xLjIxNyAxLjIyM3ptMy43MzEgMGMtLjY3MiAwLTEuMjE3LS41NDctMS4yMTctMS4yMjNzLjU0NS0xLjIyMyAxLjIxNy0xLjIyMyAxLjIxNi41NDcgMS4yMTYgMS4yMjMtLjU0NCAxLjIyMy0xLjIxNiAxLjIyM3ptMy44MDkgMGMtLjY3IDAtMS4yMTUtLjU0Ny0xLjIxNS0xLjIyM3MuNTQ1LTEuMjIzIDEuMjE1LTEuMjIzYy42NzQgMCAxLjIxNy41NDcgMS4yMTcgMS4yMjNzLS41NDMgMS4yMjMtMS4yMTcgMS4yMjN6XCIgLz48L3N2Zz4gfSAvPlxuKTtcblxuLy8gUmVnaXN0ZXIgbmV3IEJsb2NrXG5yZWdpc3RlckJsb2NrVHlwZSgnc29jaWFsLXByb29mLXNsaWRlci9tYWluJywge1xuICAgIHRpdGxlOiBfXyggJ1NQIFRlc3RpbW9uaWFscyBTbGlkZXInICksXG4gICAgZGVzY3JpcHRpb246IF9fKCAnRGlzcGxheSBhIFNvY2lhbCBQcm9vZiBUZXN0aW1vbmlhbHMgU2xpZGVyJyApLFxuICAgIGljb246IGljb25FbCxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBhbGlnbjoge1xuICAgIFx0XHR0eXBlOiAnc3RyaW5nJyxcbiAgICBcdH0sXG4gICAgICAgIGJnY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbHRleHRjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcm5hbWVjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcnRpdGxlY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuXHR9LFxuICAgIGVkaXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgRXZlbnQoICdndXRlbmJlcmdTbGljaycgKTtcblxuICAgICAgICAvLyBVcGRhdGUgVGV4dCBBbGlnbm1lbnQgYXR0clxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBbGlnbm1lbnQodmFsdWUpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBhbGlnbjogdmFsdWUgfSk7XG5cdFx0fVxuXG4gICAgICAgIC8vIFVwZGF0ZSBCRyBDb2xvciBhdHRyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJHQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBiZ2NvbG9yOiB2YWx1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIFRlc3RpbW9uaWFscyBUZXh0IENvbG9yXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRlc3RpbW9uaWFsVGV4dENvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdGVzdGltb25pYWx0ZXh0Y29sb3I6IHZhbHVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgQXV0aG9yIG5hbWUgQ29sb3JcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQXV0aG9yTmFtZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ybmFtZWNvbG9yOiB2YWx1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEF1dGhvciBUaXRsZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JUaXRsZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ydGl0bGVjb2xvcjogdmFsdWUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgYmxvY2sgcHJldmlldyBhbmQgVUlcblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2Jywge30sIFtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZXZlbnQgZm9yIGxvYWRpbmcgU2xpY2tcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50ICksXG5cdFx0XHQvLyBQcmV2aWV3IGEgYmxvY2sgd2l0aCBhIFBIUCByZW5kZXIgY2FsbGJhY2tcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIFNlcnZlclNpZGVSZW5kZXIsIHtcbiAgICAgICAgICAgICAgICBibG9jazogJ3NvY2lhbC1wcm9vZi1zbGlkZXIvbWFpbicsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogcHJvcHMuYXR0cmlidXRlc1xuICAgICAgICAgICAgfSApLFxuICAgICAgICAgICAgLy8gQmxvY2sgQ29udHJvbHNcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIEJsb2NrQ29udHJvbHMsIHt9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLmFsaWdufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRBbGlnbiApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBhbGlnbjogbmV4dEFsaWduIH0gKTtcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcblx0XHRcdC8vIEluc3BlY3RvciBDb250cm9sc1xuXHRcdFx0Y3JlYXRlRWxlbWVudCggSW5zcGVjdG9yQ29udHJvbHMsIHt9LFxuXHRcdFx0XHRbXG5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQ29sb3JTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBfXygnQmFja2dyb3VuZCBDb2xvcicpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2V0dGluZ3M9e1t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYmdjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdXBkYXRlQkdDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ1NsaWRlciBCYWNrZ3JvdW5kIENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICAvPixcblxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oJ1RleHQgQ29sb3JzJykgfVxuICAgICAgICAgICAgICAgICAgICBjb2xvclNldHRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy50ZXN0aW1vbmlhbHRleHRjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVUZXN0aW1vbmlhbFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfXygnVGVzdGltb25pYWwgVGV4dCBDb2xvcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmF1dGhvcm5hbWVjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVBdXRob3JOYW1lQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ0F1dGhvciBOYW1lIENvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9ydGl0bGVjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVBdXRob3JUaXRsZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBdXRob3IgVGl0bGUgQ29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+LFxuXG5cdFx0XHRcdF1cblx0XHRcdCksXG5cdFx0XSApO1xuXG4gICAgfSxcbiAgICBzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=