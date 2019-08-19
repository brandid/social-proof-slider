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
var registerBlockType=wp.blocks.registerBlockType,createElement=wp.element.createElement,__=wp.i18n.__,_wp$editor=wp.editor,AlignmentToolbar=_wp$editor.AlignmentToolbar,BlockControls=_wp$editor.BlockControls,InspectorControls=_wp$editor.InspectorControls,PanelColorSettings=_wp$editor.PanelColorSettings,_wp$components=wp.components,Icon=_wp$components.Icon,ColorPicker=_wp$components.ColorPicker,TextControl=_wp$components.TextControl,SelectControl=_wp$components.SelectControl,ToggleControl=_wp$components.ToggleControl,ServerSideRender=_wp$components.ServerSideRender,PanelBody=_wp$components.PanelBody,PanelRow=_wp$components.PanelRow;// React.createElement
// Import SCSS files
// SVG icon
var iconEl=function(){return wp.element.createElement(Icon,{icon:wp.element.createElement("svg",null,wp.element.createElement("path",{d:"M10 2C4.478 2 0 5.425 0 9.646c0 1.404.503 2.717 1.366 3.846L.032 18 5.6 16.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 5.425 15.523 2 10 2zm-3.978 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.809 0c-.67 0-1.215-.547-1.215-1.223s.545-1.223 1.215-1.223c.674 0 1.217.547 1.217 1.223s-.543 1.223-1.217 1.223z"}))})};// Register new Block
registerBlockType("social-proof-slider/main",{title:__("SP Testimonials Slider"),description:__("Display a Social Proof Testimonials Slider"),icon:iconEl,category:"common",attributes:{showarrows:{type:"boolean"},showdots:{type:"boolean"},textalign:{type:"string"},bgcolor:{type:"string"},testimonialtextcolor:{type:"string"},authornamecolor:{type:"string"},authortitlecolor:{type:"string"}},edit:function edit(a){/* SLIDER SETTINGS
        --------------------------------------------------------------------- */ // Update Setting - Slider - Show Arrows
// Tooltip - Slider - Show Arrows
// Update Setting - Slider - Show Dots
// Tooltip - Slider - Show Dots
/* COLOR SETTINGS
        --------------------------------------------------------------------- */ // Update BG Color attr
// Update Testimonials Text Color
// Update Author name Color
// Update Author Title Color
var b=a.attributes,c=a.setAttributes,d=new Event("gutenbergSlick");/* ------------------------------------------------------------------ */ // Display block preview and UI
return createElement("div",{},[// Trigger event for loading Slick
document.dispatchEvent(d),// Preview the block with a PHP render callback
createElement(ServerSideRender,{block:"social-proof-slider/main",attributes:a.attributes}),// Block Controls
createElement(BlockControls,{},[wp.element.createElement(AlignmentToolbar,{value:b.textalign,onChange:function onChange(a){c({textalign:a}),document.dispatchEvent(d)}})]),// Inspector Controls
createElement(InspectorControls,{},[wp.element.createElement(PanelBody,{title:__("Slider Settings"),initialOpen:!1},wp.element.createElement(PanelRow,null,wp.element.createElement(ToggleControl,{label:__("Show Arrows"),checked:!!b.showarrows,onChange:function(){c({showarrows:!b.showarrows}),document.dispatchEvent(d)},help:function(a){return a?__("Showing the arrows on the Slider."):__("Toggle to show the arrows on both sides of the Slider.")}})),wp.element.createElement(PanelRow,null,wp.element.createElement(ToggleControl,{label:__("Show Dots"),checked:!!b.showdots,onChange:function(){c({showdots:!b.showdots}),document.dispatchEvent(d)},help:function(a){return a?__("Showing the dot indicators below the Slider."):__("Toggle to show the dot indicators below the Slider.")}}))),wp.element.createElement(PanelBody,{title:__("Colors"),initialOpen:!1},wp.element.createElement(PanelColorSettings,{title:__("Background Color"),initialOpen:!1,colorSettings:[{value:b.bgcolor,onChange:function(a){c({bgcolor:a}),document.dispatchEvent(d)},label:__("Slider Background Color")}]}),wp.element.createElement(PanelColorSettings,{title:__("Text Colors"),initialOpen:!1,colorSettings:[{value:b.testimonialtextcolor,onChange:function(a){c({testimonialtextcolor:a}),document.dispatchEvent(d)},label:__("Testimonial Text Color")},{value:b.authornamecolor,onChange:function(a){c({authornamecolor:a}),document.dispatchEvent(d)},label:__("Author Name Color")},{value:b.authortitlecolor,onChange:function(a){c({authortitlecolor:a}),document.dispatchEvent(d)},label:__("Author Title Color")}]}))])])},save:function save(a){a.attributes;return null}});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJfXyIsImkxOG4iLCJlZGl0b3IiLCJBbGlnbm1lbnRUb29sYmFyIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29tcG9uZW50cyIsIkljb24iLCJDb2xvclBpY2tlciIsIlRleHRDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJpY29uRWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNob3dhcnJvd3MiLCJ0eXBlIiwic2hvd2RvdHMiLCJ0ZXh0YWxpZ24iLCJiZ2NvbG9yIiwidGVzdGltb25pYWx0ZXh0Y29sb3IiLCJhdXRob3JuYW1lY29sb3IiLCJhdXRob3J0aXRsZWNvbG9yIiwiZWRpdCIsInByb3BzIiwic2V0QXR0cmlidXRlcyIsImN1c3RvbUV2ZW50IiwiRXZlbnQiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJibG9jayIsIm5leHRBbGlnbiIsImNoZWNrZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFULENBQXdCSCxDQUF4QixDQUNILENBNkVtQixDQUdBUyxLQUFLLENBQUUxQyxFQUFFLENBQUMsd0JBQUQsQ0FIVCxDQURXLENBTVgsQ0FDQXdDLEtBQUssQ0FBRW5CLENBQVUsQ0FBQ08sZUFEbEIsQ0FFQWEsUUFBUSxDQWpGNUIsU0FBK0JELENBQS9CLENBQXNDLENBQ2xDUixDQUFhLENBQUMsQ0FBRUosZUFBZSxDQUFFWSxDQUFuQixDQUFELENBRHFCLENBRWxDTCxRQUFRLENBQUNDLGFBQVQsQ0FBd0JILENBQXhCLENBQ0gsQ0E0RW1CLENBR0FTLEtBQUssQ0FBRTFDLEVBQUUsQ0FBQyxtQkFBRCxDQUhULENBTlcsQ0FXWCxDQUNBd0MsS0FBSyxDQUFFbkIsQ0FBVSxDQUFDUSxnQkFEbEIsQ0FFQVksUUFBUSxDQWhGNUIsU0FBZ0NELENBQWhDLENBQXVDLENBQ25DUixDQUFhLENBQUMsQ0FBRUgsZ0JBQWdCLENBQUVXLENBQXBCLENBQUQsQ0FEc0IsQ0FFbkNMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QkgsQ0FBeEIsQ0FDSCxDQTJFbUIsQ0FHQVMsS0FBSyxDQUFFMUMsRUFBRSxDQUFDLG9CQUFELENBSFQsQ0FYVyxDQUhmLEVBWkosQ0FyQmhCLENBRlksQ0FyQmtCLENBQVosQ0FrRmpCLENBM0t5QyxDQTRLMUMyQyxJQTVLMEMsaUJBNEtyQixHQUFkdEIsVUFBYyxDQUNqQixNQUFPLEtBQ1YsQ0E5S3lDLENBQTdCLEM7Ozs7Ozs7Ozs7O0FDekJqQix5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSBibG9jayBidWlsZGluZyBsaWJhcnlcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxuLy8gUmVhY3QuY3JlYXRlRWxlbWVudFxuY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vLyBJbXBvcnQgX18gZnJvbSBpMThuIGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8vIEltcG9ydCBjb250cm9scyBmcm9tIGJsb2NrIGJ1aWxkaW5nIGxpYnJhcnlcbmNvbnN0IHsgQWxpZ25tZW50VG9vbGJhciwgQmxvY2tDb250cm9scywgSW5zcGVjdG9yQ29udHJvbHMsIFBhbmVsQ29sb3JTZXR0aW5ncyB9ID0gd3AuZWRpdG9yO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuY29uc3QgeyBJY29uLCBDb2xvclBpY2tlciwgVGV4dENvbnRyb2wsIFNlbGVjdENvbnRyb2wsIFRvZ2dsZUNvbnRyb2wsIFNlcnZlclNpZGVSZW5kZXIsIFBhbmVsQm9keSwgUGFuZWxSb3cgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIEltcG9ydCBTQ1NTIGZpbGVzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBTVkcgaWNvblxuY29uc3QgaWNvbkVsID0gKCkgPT4gKFxuICAgIDxJY29uIGljb249eyA8c3ZnPjxwYXRoIGQ9XCJNMTAgMkM0LjQ3OCAyIDAgNS40MjUgMCA5LjY0NmMwIDEuNDA0LjUwMyAyLjcxNyAxLjM2NiAzLjg0NkwuMDMyIDE4IDUuNiAxNi41MDhjMS4zMjkuNDk5IDIuODE4Ljc4NyA0LjQuNzg3IDUuNTIzIDAgMTAtMy40MjQgMTAtNy42NDhDMjAgNS40MjUgMTUuNTIzIDIgMTAgMnptLTMuOTc4IDguNTFjLS42NzEgMC0xLjIxNi0uNTQ3LTEuMjE2LTEuMjIzcy41NDUtMS4yMjMgMS4yMTYtMS4yMjNjLjY3MyAwIDEuMjE3LjU0NyAxLjIxNyAxLjIyM3MtLjU0NCAxLjIyMy0xLjIxNyAxLjIyM3ptMy43MzEgMGMtLjY3MiAwLTEuMjE3LS41NDctMS4yMTctMS4yMjNzLjU0NS0xLjIyMyAxLjIxNy0xLjIyMyAxLjIxNi41NDcgMS4yMTYgMS4yMjMtLjU0NCAxLjIyMy0xLjIxNiAxLjIyM3ptMy44MDkgMGMtLjY3IDAtMS4yMTUtLjU0Ny0xLjIxNS0xLjIyM3MuNTQ1LTEuMjIzIDEuMjE1LTEuMjIzYy42NzQgMCAxLjIxNy41NDcgMS4yMTcgMS4yMjNzLS41NDMgMS4yMjMtMS4yMTcgMS4yMjN6XCIgLz48L3N2Zz4gfSAvPlxuKTtcblxuLy8gUmVnaXN0ZXIgbmV3IEJsb2NrXG5yZWdpc3RlckJsb2NrVHlwZSgnc29jaWFsLXByb29mLXNsaWRlci9tYWluJywge1xuICAgIHRpdGxlOiBfXyggJ1NQIFRlc3RpbW9uaWFscyBTbGlkZXInICksXG4gICAgZGVzY3JpcHRpb246IF9fKCAnRGlzcGxheSBhIFNvY2lhbCBQcm9vZiBUZXN0aW1vbmlhbHMgU2xpZGVyJyApLFxuICAgIGljb246IGljb25FbCxcbiAgICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBzaG93YXJyb3dzOiB7XG4gICAgXHRcdHR5cGU6ICdib29sZWFuJyxcbiAgICBcdH0sXG4gICAgICAgIHNob3dkb3RzOiB7XG4gICAgXHRcdHR5cGU6ICdib29sZWFuJyxcbiAgICBcdH0sXG4gICAgICAgIHRleHRhbGlnbjoge1xuICAgIFx0XHR0eXBlOiAnc3RyaW5nJyxcbiAgICBcdH0sXG4gICAgICAgIGJnY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuICAgICAgICB0ZXN0aW1vbmlhbHRleHRjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcm5hbWVjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIGF1dGhvcnRpdGxlY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuXHR9LFxuICAgIGVkaXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgRXZlbnQoICdndXRlbmJlcmdTbGljaycgKTtcblxuICAgICAgICAvKiBTTElERVIgU0VUVElOR1NcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgLy8gVXBkYXRlIFNldHRpbmcgLSBTbGlkZXIgLSBTaG93IEFycm93c1xuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTaG93QXJyb3dzKCkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHNob3dhcnJvd3M6ICEgYXR0cmlidXRlcy5zaG93YXJyb3dzIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKTtcbiAgICBcdH1cblxuICAgICAgICAvLyBUb29sdGlwIC0gU2xpZGVyIC0gU2hvdyBBcnJvd3NcbiAgICBcdGZ1bmN0aW9uIGdldFNob3dBcnJvd3NIZWxwKCBjaGVja2VkICkge1xuICAgIFx0XHRyZXR1cm4gY2hlY2tlZCA/IF9fKCAnU2hvd2luZyB0aGUgYXJyb3dzIG9uIHRoZSBTbGlkZXIuJyApIDogX18oICdUb2dnbGUgdG8gc2hvdyB0aGUgYXJyb3dzIG9uIGJvdGggc2lkZXMgb2YgdGhlIFNsaWRlci4nICk7XG4gICAgXHR9XG5cbiAgICAgICAgLy8gVXBkYXRlIFNldHRpbmcgLSBTbGlkZXIgLSBTaG93IERvdHNcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2hvd0RvdHMoKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgc2hvd2RvdHM6ICEgYXR0cmlidXRlcy5zaG93ZG90cyB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50ICk7XG4gICAgXHR9XG5cbiAgICAgICAgLy8gVG9vbHRpcCAtIFNsaWRlciAtIFNob3cgRG90c1xuICAgIFx0ZnVuY3Rpb24gZ2V0U2hvd0RvdHNIZWxwKCBjaGVja2VkICkge1xuICAgIFx0XHRyZXR1cm4gY2hlY2tlZCA/IF9fKCAnU2hvd2luZyB0aGUgZG90IGluZGljYXRvcnMgYmVsb3cgdGhlIFNsaWRlci4nICkgOiBfXyggJ1RvZ2dsZSB0byBzaG93IHRoZSBkb3QgaW5kaWNhdG9ycyBiZWxvdyB0aGUgU2xpZGVyLicgKTtcbiAgICBcdH1cblxuICAgICAgICAvKiBDT0xPUiBTRVRUSU5HU1xuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICAvLyBVcGRhdGUgQkcgQ29sb3IgYXR0clxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVCR0NvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYmdjb2xvcjogdmFsdWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgVGVzdGltb25pYWxzIFRleHQgQ29sb3JcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGVzdGltb25pYWxUZXh0Q29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyB0ZXN0aW1vbmlhbHRleHRjb2xvcjogdmFsdWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgQXV0aG9yIG5hbWUgQ29sb3JcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQXV0aG9yTmFtZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ybmFtZWNvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBBdXRob3IgVGl0bGUgQ29sb3JcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQXV0aG9yVGl0bGVDb2xvcih2YWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGF1dGhvcnRpdGxlY29sb3I6IHZhbHVlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgLy8gRGlzcGxheSBibG9jayBwcmV2aWV3IGFuZCBVSVxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgW1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBldmVudCBmb3IgbG9hZGluZyBTbGlja1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKSxcbiAgICAgICAgICAgIC8vIFByZXZpZXcgdGhlIGJsb2NrIHdpdGggYSBQSFAgcmVuZGVyIGNhbGxiYWNrXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCBTZXJ2ZXJTaWRlUmVuZGVyLCB7XG4gICAgICAgICAgICAgICAgYmxvY2s6ICdzb2NpYWwtcHJvb2Ytc2xpZGVyL21haW4nLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHByb3BzLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgIH0gKSxcbiAgICAgICAgICAgIC8vIEJsb2NrIENvbnRyb2xzXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCBCbG9ja0NvbnRyb2xzLCB7fSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDxBbGlnbm1lbnRUb29sYmFyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YXR0cmlidXRlcy50ZXh0YWxpZ259XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV4dEFsaWduICkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IHRleHRhbGlnbjogbmV4dEFsaWduIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG5cdFx0XHRcdFx0XHR9IH1cblx0XHRcdFx0XHQvPlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG5cdFx0XHQvLyBJbnNwZWN0b3IgQ29udHJvbHNcblx0XHRcdGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsIHt9LFxuXHRcdFx0XHRbXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oICdTbGlkZXIgU2V0dGluZ3MnICkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgQXJyb3dzJyApIH1cbiAgICBcdFx0XHRcdFx0XHRjaGVja2VkPXsgISEgYXR0cmlidXRlcy5zaG93YXJyb3dzIH1cbiAgICBcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHRvZ2dsZVNob3dBcnJvd3MgfVxuICAgIFx0XHRcdFx0XHRcdGhlbHA9eyBnZXRTaG93QXJyb3dzSGVscCB9XG4gICAgXHRcdFx0XHRcdFx0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17IF9fKCAnU2hvdyBEb3RzJyApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgISEgYXR0cmlidXRlcy5zaG93ZG90cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0b2dnbGVTaG93RG90cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD17IGdldFNob3dEb3RzSGVscCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PixcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBfXyggJ0NvbG9ycycgKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IF9fKCdCYWNrZ3JvdW5kIENvbG9yJykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNldHRpbmdzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmJnY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUJHQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdTbGlkZXIgQmFja2dyb3VuZCBDb2xvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IF9fKCdUZXh0IENvbG9ycycpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JTZXR0aW5ncz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy50ZXN0aW1vbmlhbHRleHRjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdXBkYXRlVGVzdGltb25pYWxUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdUZXN0aW1vbmlhbCBUZXh0IENvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9ybmFtZWNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVBdXRob3JOYW1lQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBdXRob3IgTmFtZSBDb2xvcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmF1dGhvcnRpdGxlY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUF1dGhvclRpdGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdBdXRob3IgVGl0bGUgQ29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRdXG5cdFx0XHQpLFxuXHRcdF0gKTtcblxuICAgIH0sXG4gICAgc2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAnLi9ibG9jay9ibG9jayc7XG4iXSwic291cmNlUm9vdCI6IiJ9