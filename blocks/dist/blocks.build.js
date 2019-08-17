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
var registerBlockType=wp.blocks.registerBlockType,createElement=wp.element.createElement,__=wp.i18n.__,_wp$editor=wp.editor,AlignmentToolbar=_wp$editor.AlignmentToolbar,BlockControls=_wp$editor.BlockControls,InspectorControls=_wp$editor.InspectorControls,PanelColorSettings=_wp$editor.PanelColorSettings,_wp$components=wp.components,Icon=_wp$components.Icon,ColorPicker=_wp$components.ColorPicker,TextControl=_wp$components.TextControl,SelectControl=_wp$components.SelectControl,ServerSideRender=_wp$components.ServerSideRender,PanelBody=_wp$components.PanelBody;// React.createElement
// Import SCSS files
// SVG icon
var iconEl=function(){return wp.element.createElement(Icon,{icon:wp.element.createElement("svg",null,wp.element.createElement("path",{d:"M10 2C4.478 2 0 5.425 0 9.646c0 1.404.503 2.717 1.366 3.846L.032 18 5.6 16.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 5.425 15.523 2 10 2zm-3.978 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.809 0c-.67 0-1.215-.547-1.215-1.223s.545-1.223 1.215-1.223c.674 0 1.217.547 1.217 1.223s-.543 1.223-1.217 1.223z"}))})};// Register new Block
registerBlockType("social-proof-slider/main",{title:__("SP Testimonials Slider"),description:__("Display a Social Proof Testimonials Slider"),icon:iconEl,category:"common",attributes:{align:{type:"string"},bgcolor:{type:"string"},testimonialtextcolor:{type:"string"},authornamecolor:{type:"string"},authortitlecolor:{type:"string"}},edit:function edit(a){// Update BG Color attr
// Update Testimonials Text Color
// Update Author name Color
// Update Author Title Color
var b=a.attributes,c=a.setAttributes,d=new Event("gutenbergSlick");// Display block preview and UI
return createElement("div",{},[// Trigger event for loading Slick
document.dispatchEvent(d),// Preview the block with a PHP render callback
createElement(ServerSideRender,{block:"social-proof-slider/main",attributes:a.attributes}),// Block Controls
createElement(BlockControls,{},[wp.element.createElement(AlignmentToolbar,{value:b.align,onChange:function onChange(a){c({align:a}),document.dispatchEvent(d)}})]),// Inspector Controls
createElement(InspectorControls,{},[wp.element.createElement(PanelBody,{title:__("Colors"),initialOpen:!1},wp.element.createElement(PanelColorSettings,{title:__("Background Color"),initialOpen:!1,colorSettings:[{value:b.bgcolor,onChange:function(a){c({bgcolor:a}),document.dispatchEvent(d)},label:__("Slider Background Color")}]}),wp.element.createElement(PanelColorSettings,{title:__("Text Colors"),initialOpen:!1,colorSettings:[{value:b.testimonialtextcolor,onChange:function(a){c({testimonialtextcolor:a}),document.dispatchEvent(d)},label:__("Testimonial Text Color")},{value:b.authornamecolor,onChange:function(a){c({authornamecolor:a}),document.dispatchEvent(d)},label:__("Author Name Color")},{value:b.authortitlecolor,onChange:function(a){c({authortitlecolor:a}),document.dispatchEvent(d)},label:__("Author Title Color")}]}))])])},save:function save(a){a.attributes;return null}});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJfXyIsImkxOG4iLCJlZGl0b3IiLCJBbGlnbm1lbnRUb29sYmFyIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29tcG9uZW50cyIsIkljb24iLCJDb2xvclBpY2tlciIsIlRleHRDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlNlcnZlclNpZGVSZW5kZXIiLCJQYW5lbEJvZHkiLCJpY29uRWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImFsaWduIiwidHlwZSIsImJnY29sb3IiLCJ0ZXN0aW1vbmlhbHRleHRjb2xvciIsImF1dGhvcm5hbWVjb2xvciIsImF1dGhvcnRpdGxlY29sb3IiLCJlZGl0IiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwiY3VzdG9tRXZlbnQiLCJFdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsImJsb2NrIiwibmV4dEFsaWduIiwidmFsdWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztR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QWUsQ0FBRVcsQ0FBbkIsQ0FBRCxDQURxQixDQUVsQ0osUUFBUSxDQUFDQyxhQUFULENBQXdCSCxDQUF4QixDQUNILENBdURtQixDQUdBUSxLQUFLLENBQUVyQyxFQUFFLENBQUMsbUJBQUQsQ0FIVCxDQU5XLENBV1gsQ0FDQW1DLEtBQUssQ0FBRWhCLENBQVUsQ0FBQ00sZ0JBRGxCLENBRUFXLFFBQVEsQ0EzRDVCLFNBQWdDRCxDQUFoQyxDQUF1QyxDQUNuQ1AsQ0FBYSxDQUFDLENBQUVILGdCQUFnQixDQUFFVSxDQUFwQixDQUFELENBRHNCLENBRW5DSixRQUFRLENBQUNDLGFBQVQsQ0FBd0JILENBQXhCLENBQ0gsQ0FzRG1CLENBR0FRLEtBQUssQ0FBRXJDLEVBQUUsQ0FBQyxvQkFBRCxDQUhULENBWFcsQ0FIZixFQWJKLENBRGhCLENBRlksQ0FyQmtCLENBQVosQ0ErRGpCLENBcEh5QyxDQXFIMUNzQyxJQXJIMEMsaUJBcUhyQixHQUFkbkIsVUFBYyxDQUNqQixNQUFPLEtBQ1YsQ0F2SHlDLENBQTdCLEM7Ozs7Ozs7Ozs7O0FDekJqQix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSBibG9jayBidWlsZGluZyBsaWJhcnlcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxuLy8gUmVhY3QuY3JlYXRlRWxlbWVudFxuY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vLyBJbXBvcnQgX18gZnJvbSBpMThuIGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8vIEltcG9ydCBjb250cm9scyBmcm9tIGJsb2NrIGJ1aWxkaW5nIGxpYnJhcnlcbmNvbnN0IHsgQWxpZ25tZW50VG9vbGJhciwgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMsIFBhbmVsQ29sb3JTZXR0aW5ncyB9ID0gd3AuZWRpdG9yO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuY29uc3QgeyBJY29uLCBDb2xvclBpY2tlciwgVGV4dENvbnRyb2wsIFNlbGVjdENvbnRyb2wsIFNlcnZlclNpZGVSZW5kZXIsIFBhbmVsQm9keSB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gSW1wb3J0IFNDU1MgZmlsZXNcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIFNWRyBpY29uXG5jb25zdCBpY29uRWwgPSAoKSA9PiAoXG4gICAgPEljb24gaWNvbj17IDxzdmc+PHBhdGggZD1cIk0xMCAyQzQuNDc4IDIgMCA1LjQyNSAwIDkuNjQ2YzAgMS40MDQuNTAzIDIuNzE3IDEuMzY2IDMuODQ2TC4wMzIgMTggNS42IDE2LjUwOGMxLjMyOS40OTkgMi44MTguNzg3IDQuNC43ODcgNS41MjMgMCAxMC0zLjQyNCAxMC03LjY0OEMyMCA1LjQyNSAxNS41MjMgMiAxMCAyem0tMy45NzggOC41MWMtLjY3MSAwLTEuMjE2LS41NDctMS4yMTYtMS4yMjNzLjU0NS0xLjIyMyAxLjIxNi0xLjIyM2MuNjczIDAgMS4yMTcuNTQ3IDEuMjE3IDEuMjIzcy0uNTQ0IDEuMjIzLTEuMjE3IDEuMjIzem0zLjczMSAwYy0uNjcyIDAtMS4yMTctLjU0Ny0xLjIxNy0xLjIyM3MuNTQ1LTEuMjIzIDEuMjE3LTEuMjIzIDEuMjE2LjU0NyAxLjIxNiAxLjIyMy0uNTQ0IDEuMjIzLTEuMjE2IDEuMjIzem0zLjgwOSAwYy0uNjcgMC0xLjIxNS0uNTQ3LTEuMjE1LTEuMjIzcy41NDUtMS4yMjMgMS4yMTUtMS4yMjNjLjY3NCAwIDEuMjE3LjU0NyAxLjIxNyAxLjIyM3MtLjU0MyAxLjIyMy0xLjIxNyAxLjIyM3pcIiAvPjwvc3ZnPiB9IC8+XG4pO1xuXG4vLyBSZWdpc3RlciBuZXcgQmxvY2tcbnJlZ2lzdGVyQmxvY2tUeXBlKCdzb2NpYWwtcHJvb2Ytc2xpZGVyL21haW4nLCB7XG4gICAgdGl0bGU6IF9fKCAnU1AgVGVzdGltb25pYWxzIFNsaWRlcicgKSxcbiAgICBkZXNjcmlwdGlvbjogX18oICdEaXNwbGF5IGEgU29jaWFsIFByb29mIFRlc3RpbW9uaWFscyBTbGlkZXInICksXG4gICAgaWNvbjogaWNvbkVsLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGFsaWduOiB7XG4gICAgXHRcdHR5cGU6ICdzdHJpbmcnLFxuICAgIFx0fSxcbiAgICAgICAgYmdjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsdGV4dGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ybmFtZWNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ydGl0bGVjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG5cdH0sXG4gICAgZWRpdChwcm9wcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblx0XHRjb25zdCBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBFdmVudCggJ2d1dGVuYmVyZ1NsaWNrJyApO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBCRyBDb2xvciBhdHRyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJHQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBiZ2NvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBUZXN0aW1vbmlhbHMgVGV4dCBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUZXN0aW1vbmlhbFRleHRDb2xvcih2YWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHRlc3RpbW9uaWFsdGV4dGNvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBBdXRob3IgbmFtZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JOYW1lQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBhdXRob3JuYW1lY29sb3I6IHZhbHVlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEF1dGhvciBUaXRsZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JUaXRsZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ydGl0bGVjb2xvcjogdmFsdWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGJsb2NrIHByZXZpZXcgYW5kIFVJXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCBbXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50IGZvciBsb2FkaW5nIFNsaWNrXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApLFxuICAgICAgICAgICAgLy8gUHJldmlldyB0aGUgYmxvY2sgd2l0aCBhIFBIUCByZW5kZXIgY2FsbGJhY2tcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIFNlcnZlclNpZGVSZW5kZXIsIHtcbiAgICAgICAgICAgICAgICBibG9jazogJ3NvY2lhbC1wcm9vZi1zbGlkZXIvbWFpbicsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogcHJvcHMuYXR0cmlidXRlc1xuICAgICAgICAgICAgfSApLFxuICAgICAgICAgICAgLy8gQmxvY2sgQ29udHJvbHNcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIEJsb2NrQ29udHJvbHMsIHt9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLmFsaWdufVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5leHRBbGlnbiApID0+IHtcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBhbGlnbjogbmV4dEFsaWduIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG5cdFx0XHQvLyBJbnNwZWN0b3IgQ29udHJvbHNcblx0XHRcdGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsIHt9LFxuXHRcdFx0XHRbXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oICdDb2xvcnMnICkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IF9fKCdCYWNrZ3JvdW5kIENvbG9yJykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNldHRpbmdzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmJnY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUJHQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdTbGlkZXIgQmFja2dyb3VuZCBDb2xvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IF9fKCdUZXh0IENvbG9ycycpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTZXR0aW5ncz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy50ZXN0aW1vbmlhbHRleHRjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdXBkYXRlVGVzdGltb25pYWxUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdUZXN0aW1vbmlhbCBUZXh0IENvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9ybmFtZWNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVBdXRob3JOYW1lQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBdXRob3IgTmFtZSBDb2xvcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmF1dGhvcnRpdGxlY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUF1dGhvclRpdGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBdXRob3IgVGl0bGUgQ29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRdXG5cdFx0XHQpLFxuXHRcdF0gKTtcblxuICAgIH0sXG4gICAgc2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAnLi9ibG9jay9ibG9jayc7XG4iXSwic291cmNlUm9vdCI6IiJ9