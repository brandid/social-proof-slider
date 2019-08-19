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
registerBlockType("social-proof-slider/main",{title:__("SP Testimonials Slider"),description:__("Display a Social Proof Testimonials Slider"),icon:iconEl,category:"common",attributes:{showarrows:{type:"boolean"},textalign:{type:"string"},bgcolor:{type:"string"},testimonialtextcolor:{type:"string"},authornamecolor:{type:"string"},authortitlecolor:{type:"string"}},edit:function edit(a){// Update Setting - Slider - Show Arrows
// Tooltip - Slider - Show Arrows
// Update BG Color attr
// Update Testimonials Text Color
// Update Author name Color
// Update Author Title Color
var b=a.attributes,c=a.setAttributes,d=new Event("gutenbergSlick");// Display block preview and UI
return createElement("div",{},[// Trigger event for loading Slick
document.dispatchEvent(d),// Preview the block with a PHP render callback
createElement(ServerSideRender,{block:"social-proof-slider/main",attributes:a.attributes}),// Block Controls
createElement(BlockControls,{},[wp.element.createElement(AlignmentToolbar,{value:b.textalign,onChange:function onChange(a){c({textalign:a}),document.dispatchEvent(d)}})]),// Inspector Controls
createElement(InspectorControls,{},[wp.element.createElement(PanelBody,{title:__("Slider Settings"),initialOpen:!1},wp.element.createElement(PanelRow,null,wp.element.createElement(ToggleControl,{label:__("Show Arrows"),checked:!!b.showarrows,onChange:function(){console.log("showarrows WAS: "+b.showarrows),c({showarrows:!b.showarrows}),document.dispatchEvent(d),console.log("showarrows NOW: "+!b.showarrows)},help:function(a){return a?__("Showing the arrows on the Slider."):__("Toggle to show the arrows on both sides of the Slider.")}}))),wp.element.createElement(PanelBody,{title:__("Colors"),initialOpen:!1},wp.element.createElement(PanelColorSettings,{title:__("Background Color"),initialOpen:!1,colorSettings:[{value:b.bgcolor,onChange:function(a){c({bgcolor:a}),document.dispatchEvent(d)},label:__("Slider Background Color")}]}),wp.element.createElement(PanelColorSettings,{title:__("Text Colors"),initialOpen:!1,colorSettings:[{value:b.testimonialtextcolor,onChange:function(a){c({testimonialtextcolor:a}),document.dispatchEvent(d)},label:__("Testimonial Text Color")},{value:b.authornamecolor,onChange:function(a){c({authornamecolor:a}),document.dispatchEvent(d)},label:__("Author Name Color")},{value:b.authortitlecolor,onChange:function(a){c({authortitlecolor:a}),document.dispatchEvent(d)},label:__("Author Title Color")}]}))])])},save:function save(a){a.attributes;return null}});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJfXyIsImkxOG4iLCJlZGl0b3IiLCJBbGlnbm1lbnRUb29sYmFyIiwiQmxvY2tDb250cm9scyIsIkluc3BlY3RvckNvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29tcG9uZW50cyIsIkljb24iLCJDb2xvclBpY2tlciIsIlRleHRDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiUGFuZWxCb2R5IiwiUGFuZWxSb3ciLCJpY29uRWwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNob3dhcnJvd3MiLCJ0eXBlIiwidGV4dGFsaWduIiwiYmdjb2xvciIsInRlc3RpbW9uaWFsdGV4dGNvbG9yIiwiYXV0aG9ybmFtZWNvbG9yIiwiYXV0aG9ydGl0bGVjb2xvciIsImVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJjdXN0b21FdmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiYmxvY2siLCJuZXh0QWxpZ24iLCJjb25zb2xlIiwibG9nIiwiY2hlY2tlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJsYWJlbCIsInNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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bEIsQ0FFQWMsUUFBUSxDQXRFNUIsU0FBZ0NELENBQWhDLENBQXVDLENBQ25DVixDQUFhLENBQUMsQ0FBRUgsZ0JBQWdCLENBQUVhLENBQXBCLENBQUQsQ0FEc0IsQ0FFbkNQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF3QkgsQ0FBeEIsQ0FDSCxDQWlFbUIsQ0FHQVcsS0FBSyxDQUFFM0MsRUFBRSxDQUFDLG9CQUFELENBSFQsQ0FYVyxDQUhmLEVBWkosQ0FiaEIsQ0FGWSxDQXJCa0IsQ0FBWixDQTBFakIsQ0EvSXlDLENBZ0oxQzRDLElBaEowQyxpQkFnSnJCLEdBQWR2QixVQUFjLENBQ2pCLE1BQU8sS0FDVixDQWxKeUMsQ0FBN0IsQzs7Ozs7Ozs7Ozs7QUN6QmpCLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCIvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIGJsb2NrIGJ1aWxkaW5nIGxpYmFyeVxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuXG4vLyBSZWFjdC5jcmVhdGVFbGVtZW50XG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8vIEltcG9ydCBfXyBmcm9tIGkxOG4gaW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeVxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLy8gSW1wb3J0IGNvbnRyb2xzIGZyb20gYmxvY2sgYnVpbGRpbmcgbGlicmFyeVxuY29uc3QgeyBBbGlnbm1lbnRUb29sYmFyLCBCbG9ja0NvbnRyb2xzLCBJbnNwZWN0b3JDb250cm9scywgUGFuZWxDb2xvclNldHRpbmdzIH0gPSB3cC5lZGl0b3I7XG5cbi8vIEltcG9ydCBjb21wb25lbnRzXG5jb25zdCB7IEljb24sIENvbG9yUGlja2VyLCBUZXh0Q29udHJvbCwgU2VsZWN0Q29udHJvbCwgVG9nZ2xlQ29udHJvbCwgU2VydmVyU2lkZVJlbmRlciwgUGFuZWxCb2R5LCBQYW5lbFJvdyB9ID0gd3AuY29tcG9uZW50cztcblxuLy8gSW1wb3J0IFNDU1MgZmlsZXNcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIFNWRyBpY29uXG5jb25zdCBpY29uRWwgPSAoKSA9PiAoXG4gICAgPEljb24gaWNvbj17IDxzdmc+PHBhdGggZD1cIk0xMCAyQzQuNDc4IDIgMCA1LjQyNSAwIDkuNjQ2YzAgMS40MDQuNTAzIDIuNzE3IDEuMzY2IDMuODQ2TC4wMzIgMTggNS42IDE2LjUwOGMxLjMyOS40OTkgMi44MTguNzg3IDQuNC43ODcgNS41MjMgMCAxMC0zLjQyNCAxMC03LjY0OEMyMCA1LjQyNSAxNS41MjMgMiAxMCAyem0tMy45NzggOC41MWMtLjY3MSAwLTEuMjE2LS41NDctMS4yMTYtMS4yMjNzLjU0NS0xLjIyMyAxLjIxNi0xLjIyM2MuNjczIDAgMS4yMTcuNTQ3IDEuMjE3IDEuMjIzcy0uNTQ0IDEuMjIzLTEuMjE3IDEuMjIzem0zLjczMSAwYy0uNjcyIDAtMS4yMTctLjU0Ny0xLjIxNy0xLjIyM3MuNTQ1LTEuMjIzIDEuMjE3LTEuMjIzIDEuMjE2LjU0NyAxLjIxNiAxLjIyMy0uNTQ0IDEuMjIzLTEuMjE2IDEuMjIzem0zLjgwOSAwYy0uNjcgMC0xLjIxNS0uNTQ3LTEuMjE1LTEuMjIzcy41NDUtMS4yMjMgMS4yMTUtMS4yMjNjLjY3NCAwIDEuMjE3LjU0NyAxLjIxNyAxLjIyM3MtLjU0MyAxLjIyMy0xLjIxNyAxLjIyM3pcIiAvPjwvc3ZnPiB9IC8+XG4pO1xuXG4vLyBSZWdpc3RlciBuZXcgQmxvY2tcbnJlZ2lzdGVyQmxvY2tUeXBlKCdzb2NpYWwtcHJvb2Ytc2xpZGVyL21haW4nLCB7XG4gICAgdGl0bGU6IF9fKCAnU1AgVGVzdGltb25pYWxzIFNsaWRlcicgKSxcbiAgICBkZXNjcmlwdGlvbjogX18oICdEaXNwbGF5IGEgU29jaWFsIFByb29mIFRlc3RpbW9uaWFscyBTbGlkZXInICksXG4gICAgaWNvbjogaWNvbkVsLFxuICAgIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIHNob3dhcnJvd3M6IHtcbiAgICBcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuICAgIFx0fSxcbiAgICAgICAgdGV4dGFsaWduOiB7XG4gICAgXHRcdHR5cGU6ICdzdHJpbmcnLFxuICAgIFx0fSxcbiAgICAgICAgYmdjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsdGV4dGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ybmFtZWNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ydGl0bGVjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG5cdH0sXG4gICAgZWRpdChwcm9wcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblx0XHRjb25zdCBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBFdmVudCggJ2d1dGVuYmVyZ1NsaWNrJyApO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBTZXR0aW5nIC0gU2xpZGVyIC0gU2hvdyBBcnJvd3NcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2hvd0Fycm93cygpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93YXJyb3dzIFdBUzogJyArIGF0dHJpYnV0ZXMuc2hvd2Fycm93cyk7XG4gICAgXHRcdHNldEF0dHJpYnV0ZXMoeyBzaG93YXJyb3dzOiAhIGF0dHJpYnV0ZXMuc2hvd2Fycm93cyB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50ICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvd2Fycm93cyBOT1c6ICcgKyAhIGF0dHJpYnV0ZXMuc2hvd2Fycm93cyk7XG4gICAgXHR9XG5cbiAgICAgICAgLy8gVG9vbHRpcCAtIFNsaWRlciAtIFNob3cgQXJyb3dzXG4gICAgXHRmdW5jdGlvbiBnZXRTaG93QXJyb3dzSGVscCggY2hlY2tlZCApIHtcbiAgICBcdFx0cmV0dXJuIGNoZWNrZWQgPyBfXyggJ1Nob3dpbmcgdGhlIGFycm93cyBvbiB0aGUgU2xpZGVyLicgKSA6IF9fKCAnVG9nZ2xlIHRvIHNob3cgdGhlIGFycm93cyBvbiBib3RoIHNpZGVzIG9mIHRoZSBTbGlkZXIuJyApO1xuICAgIFx0fVxuXG4gICAgICAgIC8vIFVwZGF0ZSBCRyBDb2xvciBhdHRyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJHQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBiZ2NvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBUZXN0aW1vbmlhbHMgVGV4dCBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVUZXN0aW1vbmlhbFRleHRDb2xvcih2YWx1ZSkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IHRlc3RpbW9uaWFsdGV4dGNvbG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBBdXRob3IgbmFtZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JOYW1lQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBhdXRob3JuYW1lY29sb3I6IHZhbHVlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEF1dGhvciBUaXRsZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JUaXRsZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ydGl0bGVjb2xvcjogdmFsdWUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGJsb2NrIHByZXZpZXcgYW5kIFVJXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCBbXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50IGZvciBsb2FkaW5nIFNsaWNrXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KCBjdXN0b21FdmVudCApLFxuICAgICAgICAgICAgLy8gUHJldmlldyB0aGUgYmxvY2sgd2l0aCBhIFBIUCByZW5kZXIgY2FsbGJhY2tcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIFNlcnZlclNpZGVSZW5kZXIsIHtcbiAgICAgICAgICAgICAgICBibG9jazogJ3NvY2lhbC1wcm9vZi1zbGlkZXIvbWFpbicsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogcHJvcHMuYXR0cmlidXRlc1xuICAgICAgICAgICAgfSApLFxuICAgICAgICAgICAgLy8gQmxvY2sgQ29udHJvbHNcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoIEJsb2NrQ29udHJvbHMsIHt9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgPEFsaWdubWVudFRvb2xiYXJcblx0XHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLnRleHRhbGlnbn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXh0QWxpZ24gKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgdGV4dGFsaWduOiBuZXh0QWxpZ24gfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoIGN1c3RvbUV2ZW50IClcblx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdC8+XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcblx0XHRcdC8vIEluc3BlY3RvciBDb250cm9sc1xuXHRcdFx0Y3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJbnNwZWN0b3JDb250cm9scywge30sXG5cdFx0XHRcdFtcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBfXyggJ1NsaWRlciBTZXR0aW5ncycgKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZUNvbnRyb2xcbiAgICBcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyBBcnJvd3MnICkgfVxuICAgIFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBhdHRyaWJ1dGVzLnNob3dhcnJvd3MgfVxuICAgIFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdG9nZ2xlU2hvd0Fycm93cyB9XG4gICAgXHRcdFx0XHRcdFx0aGVscD17IGdldFNob3dBcnJvd3NIZWxwIH1cbiAgICBcdFx0XHRcdFx0XHQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+LFxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17IF9fKCAnQ29sb3JzJyApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbENvbG9yU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oJ0JhY2tncm91bmQgQ29sb3InKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2V0dGluZ3M9e1t7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYmdjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdXBkYXRlQkdDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ1NsaWRlciBCYWNrZ3JvdW5kIENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbENvbG9yU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oJ1RleHQgQ29sb3JzJykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclNldHRpbmdzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRlc3RpbW9uaWFsdGV4dGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB1cGRhdGVUZXN0aW1vbmlhbFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ1Rlc3RpbW9uaWFsIFRleHQgQ29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5hdXRob3JuYW1lY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUF1dGhvck5hbWVDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ0F1dGhvciBOYW1lIENvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9ydGl0bGVjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdXBkYXRlQXV0aG9yVGl0bGVDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ0F1dGhvciBUaXRsZSBDb2xvcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG5cdFx0XHRcdF1cblx0XHRcdCksXG5cdFx0XSApO1xuXG4gICAgfSxcbiAgICBzYXZlKHsgYXR0cmlidXRlcyB9KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufSk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=