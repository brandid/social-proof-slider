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
var registerBlockType=wp.blocks.registerBlockType,createElement=wp.element.createElement,__=wp.i18n.__,_wp$editor=wp.editor,InspectorControls=_wp$editor.InspectorControls,PanelColorSettings=_wp$editor.PanelColorSettings,_wp$components=wp.components,Icon=_wp$components.Icon,ColorPicker=_wp$components.ColorPicker,TextControl=_wp$components.TextControl,SelectControl=_wp$components.SelectControl,ServerSideRender=_wp$components.ServerSideRender;// React.createElement
// Import SCSS files
// SVG icon
var iconEl=function(){return wp.element.createElement(Icon,{icon:wp.element.createElement("svg",null,wp.element.createElement("path",{d:"M10 2C4.478 2 0 5.425 0 9.646c0 1.404.503 2.717 1.366 3.846L.032 18 5.6 16.508c1.329.499 2.818.787 4.4.787 5.523 0 10-3.424 10-7.648C20 5.425 15.523 2 10 2zm-3.978 8.51c-.671 0-1.216-.547-1.216-1.223s.545-1.223 1.216-1.223c.673 0 1.217.547 1.217 1.223s-.544 1.223-1.217 1.223zm3.731 0c-.672 0-1.217-.547-1.217-1.223s.545-1.223 1.217-1.223 1.216.547 1.216 1.223-.544 1.223-1.216 1.223zm3.809 0c-.67 0-1.215-.547-1.215-1.223s.545-1.223 1.215-1.223c.674 0 1.217.547 1.217 1.223s-.543 1.223-1.217 1.223z"}))})};// Register new Block
registerBlockType("social-proof-slider/main",{title:__("SP Testimonials Slider"),description:__("Display a Social Proof Testimonials Slider"),icon:iconEl,category:"common",attributes:{bgcolor:{type:"string"},testimonialtextcolor:{type:"string"},authornamecolor:{type:"string"},authortitlecolor:{type:"string"}},edit:function edit(a){// Update BG Color attr
// Update Testimonials Text Color
// Update Author name Color
// Update Author Title Color
var b=a.attributes,c=a.setAttributes,d=new Event("gutenbergSlick");//Display block preview and UI
return createElement("div",{},[document.dispatchEvent(d),//Preview a block with a PHP render callback
createElement(ServerSideRender,{block:"social-proof-slider/main",attributes:a.attributes}),//Block inspector
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJfXyIsImkxOG4iLCJlZGl0b3IiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsQ29sb3JTZXR0aW5ncyIsImNvbXBvbmVudHMiLCJJY29uIiwiQ29sb3JQaWNrZXIiLCJUZXh0Q29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJTZXJ2ZXJTaWRlUmVuZGVyIiwiaWNvbkVsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJiZ2NvbG9yIiwidHlwZSIsInRlc3RpbW9uaWFsdGV4dGNvbG9yIiwiYXV0aG9ybmFtZWNvbG9yIiwiYXV0aG9ydGl0bGVjb2xvciIsImVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJjdXN0b21FdmVudCIsIkV2ZW50IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiYmxvY2siLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibGFiZWwiLCJzYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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QUMsYUFBRCxDQURWLENBRUEsYUFBYSxDQUFFLENBQ1gsQ0FDQThCLEtBQUssQ0FBRWQsQ0FBVSxDQUFDRyxvQkFEbEIsQ0FFQVksUUFBUSxDQXhDeEIsU0FBb0NELENBQXBDLENBQTJDLENBQ3ZDTixDQUFhLENBQUMsQ0FBRUwsb0JBQW9CLENBQUVXLENBQXhCLENBQUQsQ0FDaEIsQ0FvQ2UsQ0FHQUUsS0FBSyxDQUFFaEMsRUFBRSxDQUFDLHdCQUFELENBSFQsQ0FEVyxDQU1YLENBQ0E4QixLQUFLLENBQUVkLENBQVUsQ0FBQ0ksZUFEbEIsQ0FFQVcsUUFBUSxDQXhDeEIsU0FBK0JELENBQS9CLENBQXNDLENBQ2xDTixDQUFhLENBQUMsQ0FBRUosZUFBZSxDQUFFVSxDQUFuQixDQUFELENBQ2hCLENBb0NlLENBR0FFLEtBQUssQ0FBRWhDLEVBQUUsQ0FBQyxtQkFBRCxDQUhULENBTlcsQ0FXWCxDQUNBOEIsS0FBSyxDQUFFZCxDQUFVLENBQUNLLGdCQURsQixDQUVBVSxRQUFRLENBeEN4QixTQUFnQ0QsQ0FBaEMsQ0FBdUMsQ0FDbkNOLENBQWEsQ0FBQyxDQUFFSCxnQkFBZ0IsQ0FBRVMsQ0FBcEIsQ0FBRCxDQUNoQixDQW9DZSxDQUdBRSxLQUFLLENBQUVoQyxFQUFFLENBQUMsb0JBQUQsQ0FIVCxDQVhXLENBRmYsRUFYaEIsQ0FEWSxDQVJrQixDQUFaLENBNkNqQixDQTNGeUMsQ0E0RjFDaUMsSUE1RjBDLGlCQTRGckIsR0FBZGpCLFVBQWMsQ0FDakIsTUFBTyxLQUNWLENBOUZ5QyxDQUE3QixDOzs7Ozs7Ozs7OztBQ3pCakIseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsIi8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gYmxvY2sgYnVpbGRpbmcgbGliYXJ5XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbi8vIFJlYWN0LmNyZWF0ZUVsZW1lbnRcbmNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudDtcblxuLy8gSW1wb3J0IF9fIGZyb20gaTE4biBpbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vLyBJbXBvcnQgY29udHJvbHMgZnJvbSBibG9jayBidWlsZGluZyBsaWJyYXJ5XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBQYW5lbENvbG9yU2V0dGluZ3MgfSA9IHdwLmVkaXRvcjtcblxuLy8gSW1wb3J0IGNvbXBvbmVudHNcbmNvbnN0IHsgSWNvbiwgQ29sb3JQaWNrZXIsIFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sLCBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBJbXBvcnQgU0NTUyBmaWxlc1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gU1ZHIGljb25cbmNvbnN0IGljb25FbCA9ICgpID0+IChcbiAgICA8SWNvbiBpY29uPXsgPHN2Zz48cGF0aCBkPVwiTTEwIDJDNC40NzggMiAwIDUuNDI1IDAgOS42NDZjMCAxLjQwNC41MDMgMi43MTcgMS4zNjYgMy44NDZMLjAzMiAxOCA1LjYgMTYuNTA4YzEuMzI5LjQ5OSAyLjgxOC43ODcgNC40Ljc4NyA1LjUyMyAwIDEwLTMuNDI0IDEwLTcuNjQ4QzIwIDUuNDI1IDE1LjUyMyAyIDEwIDJ6bS0zLjk3OCA4LjUxYy0uNjcxIDAtMS4yMTYtLjU0Ny0xLjIxNi0xLjIyM3MuNTQ1LTEuMjIzIDEuMjE2LTEuMjIzYy42NzMgMCAxLjIxNy41NDcgMS4yMTcgMS4yMjNzLS41NDQgMS4yMjMtMS4yMTcgMS4yMjN6bTMuNzMxIDBjLS42NzIgMC0xLjIxNy0uNTQ3LTEuMjE3LTEuMjIzcy41NDUtMS4yMjMgMS4yMTctMS4yMjMgMS4yMTYuNTQ3IDEuMjE2IDEuMjIzLS41NDQgMS4yMjMtMS4yMTYgMS4yMjN6bTMuODA5IDBjLS42NyAwLTEuMjE1LS41NDctMS4yMTUtMS4yMjNzLjU0NS0xLjIyMyAxLjIxNS0xLjIyM2MuNjc0IDAgMS4yMTcuNTQ3IDEuMjE3IDEuMjIzcy0uNTQzIDEuMjIzLTEuMjE3IDEuMjIzelwiIC8+PC9zdmc+IH0gLz5cbik7XG5cbi8vIFJlZ2lzdGVyIG5ldyBCbG9ja1xucmVnaXN0ZXJCbG9ja1R5cGUoJ3NvY2lhbC1wcm9vZi1zbGlkZXIvbWFpbicsIHtcbiAgICB0aXRsZTogX18oICdTUCBUZXN0aW1vbmlhbHMgU2xpZGVyJyApLFxuICAgIGRlc2NyaXB0aW9uOiBfXyggJ0Rpc3BsYXkgYSBTb2NpYWwgUHJvb2YgVGVzdGltb25pYWxzIFNsaWRlcicgKSxcbiAgICBpY29uOiBpY29uRWwsXG4gICAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgYmdjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIHRlc3RpbW9uaWFsdGV4dGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ybmFtZWNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9ydGl0bGVjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG5cdH0sXG4gICAgZWRpdChwcm9wcykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcztcblx0XHRjb25zdCBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBFdmVudCggJ2d1dGVuYmVyZ1NsaWNrJyApO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBCRyBDb2xvciBhdHRyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUJHQ29sb3IodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBiZ2NvbG9yOiB2YWx1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIFRlc3RpbW9uaWFscyBUZXh0IENvbG9yXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRlc3RpbW9uaWFsVGV4dENvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgdGVzdGltb25pYWx0ZXh0Y29sb3I6IHZhbHVlIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgQXV0aG9yIG5hbWUgQ29sb3JcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQXV0aG9yTmFtZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ybmFtZWNvbG9yOiB2YWx1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEF1dGhvciBUaXRsZSBDb2xvclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdXRob3JUaXRsZUNvbG9yKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9ydGl0bGVjb2xvcjogdmFsdWUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRGlzcGxheSBibG9jayBwcmV2aWV3IGFuZCBVSVxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7fSwgW1xuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCggY3VzdG9tRXZlbnQgKSxcblx0XHRcdC8vUHJldmlldyBhIGJsb2NrIHdpdGggYSBQSFAgcmVuZGVyIGNhbGxiYWNrXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCBTZXJ2ZXJTaWRlUmVuZGVyLCB7XG4gICAgICAgICAgICAgICAgYmxvY2s6ICdzb2NpYWwtcHJvb2Ytc2xpZGVyL21haW4nLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHByb3BzLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgIH0gKSxcblx0XHRcdC8vQmxvY2sgaW5zcGVjdG9yXG5cdFx0XHRjcmVhdGVFbGVtZW50KCBJbnNwZWN0b3JDb250cm9scywge30sXG5cdFx0XHRcdFtcblxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxDb2xvclNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsgX18oJ0JhY2tncm91bmQgQ29sb3InKSB9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2V0dGluZ3M9e1t7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5iZ2NvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUJHQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ1NsaWRlciBCYWNrZ3JvdW5kIENvbG9yJylcbiAgICAgICAgICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAgICAgICAgIC8+LFxuXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbENvbG9yU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyBfXygnVGV4dCBDb2xvcnMnKSB9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2V0dGluZ3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRlc3RpbW9uaWFsdGV4dGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZVRlc3RpbW9uaWFsVGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdUZXN0aW1vbmlhbCBUZXh0IENvbG9yJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9ybmFtZWNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUF1dGhvck5hbWVDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfXygnQXV0aG9yIE5hbWUgQ29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5hdXRob3J0aXRsZWNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHVwZGF0ZUF1dGhvclRpdGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX18oJ0F1dGhvciBUaXRsZSBDb2xvcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz4sXG5cblx0XHRcdFx0XVxuXHRcdFx0KSxcblx0XHRdICk7XG5cbiAgICB9LFxuICAgIHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59KTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==