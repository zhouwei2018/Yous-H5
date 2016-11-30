(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mui"] = factory();
	else
		root["mui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		alert : __webpack_require__(20),
		confirm : __webpack_require__(28),
		prompt : __webpack_require__(34),
		actions : __webpack_require__(42),
		panel : __webpack_require__(52),
		accordion : __webpack_require__(60),
		tabpanel : __webpack_require__(68),
		btn : __webpack_require__(76),
		switchbtn : __webpack_require__(82),
		progress : __webpack_require__(88),
		slide : __webpack_require__(98),
		menubar : __webpack_require__(106)
	}


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(21)
	__vue_script__ = __webpack_require__(23)
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36d870cc&file=alert.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36d870cc&file=alert.vue&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n\t.mui-h3[_v-36d870cc], h3[_v-36d870cc] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n", "", {"version":3,"sources":["/./src/components/alert.vue.style"],"names":[],"mappings":";CACA;EACA,gBAAA;EACA","file":"alert.vue","sourcesContent":["<style scoped>\r\n\t.mui-h3, h3 {\r\n\t\tfont-size: 18px;\r\n\t}\r\n</style>\r\n<template>\r\n<div class=\"t-dimmer\" v-show=\"show\"></div>\r\n<div class=\"t-modal\" v-show=\"show\">\r\n\t<div class=\"t-modal__header\">\r\n\t\t<h3 class=\"t-modal__header--tt\" \r\n\t\t\tv-show=\"title!==''\" \r\n\t\t\tv-text=\"title\"></h3>\r\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\r\n\t</div>\r\n\t<div class=\"t-modal__footer\">\r\n\t\t<a class=\"t-modal__footer--btn\" @click.prevent=\"show=false\">确定</a>\r\n\t</div>\r\n</div>\r\n</template>\r\n<script>\r\nexport default {\r\n\tprops : {\r\n\t\tshow : {\r\n\t\t\ttype : Boolean,\r\n\t\t\tdefault : false,\r\n\t\t\ttwoWay : true\r\n\t\t},\r\n\t\ttitle : {\r\n\t\t\ttype : String\r\n\t\t},\r\n\t\tcontent : {\r\n\t\t\ttype : String\r\n\t\t}\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style scoped>
	// 	.mui-h3, h3 {
	// 		font-size: 18px;
	// 	}
	// </style>
	// <template>
	// <div class="t-dimmer" v-show="show"></div>
	// <div class="t-modal" v-show="show">
	// 	<div class="t-modal__header">
	// 		<h3 class="t-modal__header--tt" 
	// 			v-show="title!==''" 
	// 			v-text="title"></h3>
	// 		<p class="t-modal__header--ct" v-text="content"></p>
	// 	</div>
	// 	<div class="t-modal__footer">
	// 		<a class="t-modal__footer--btn" @click.prevent="show=false">确定</a>
	// 	</div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		props: {
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			title: {
				type: String
			},
			content: {
				type: String
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"t-dimmer\" v-show=\"show\" _v-36d870cc=\"\"></div>\n<div class=\"t-modal\" v-show=\"show\" _v-36d870cc=\"\">\n\t<div class=\"t-modal__header\" _v-36d870cc=\"\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title!==''\" v-text=\"title\" _v-36d870cc=\"\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\" _v-36d870cc=\"\"></p>\n\t</div>\n\t<div class=\"t-modal__footer\" _v-36d870cc=\"\">\n\t\t<a class=\"t-modal__footer--btn\" @click.prevent=\"show=false\" _v-36d870cc=\"\">确定</a>\n\t</div>\n</div>\n";

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\confirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="t-dimmer" v-show="show"></div>
	// <div class="t-modal" v-show="show">
	// 	<div class="t-modal__header">
	// 		<h3 class="t-modal__header--tt" 
	// 			v-show="title!==''" 
	// 			v-text="title"></h3>
	// 		<p class="t-modal__header--ct" v-text="content"></p>
	// 	</div>
	// 	<div class="t-modal__footer">
	// 		<a class="t-modal__footer--btn" 
	// 		   @click.prevent="notify('cancel')">取消</a>
	// 		<a class="t-modal__footer--btn" 
	// 		   @click.prevent="notify('confirm')">确定</a>
	// 	</div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		props: {
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			title: {
				type: String
			},
			content: {
				type: String
			}
		},
		methods: {
			notify: function notify(type) {
				this.show = false;
				this.$dispatch(type);
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-dimmer\" v-show=\"show\"></div>\r\n<div class=\"t-modal\" v-show=\"show\">\r\n\t<div class=\"t-modal__header\">\r\n\t\t<h3 class=\"t-modal__header--tt\" \r\n\t\t\tv-show=\"title!==''\" \r\n\t\t\tv-text=\"title\"></h3>\r\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\r\n\t</div>\r\n\t<div class=\"t-modal__footer\">\r\n\t\t<a class=\"t-modal__footer--btn\" \r\n\t\t   @click.prevent=\"notify('cancel')\">取消</a>\r\n\t\t<a class=\"t-modal__footer--btn\" \r\n\t\t   @click.prevent=\"notify('confirm')\">确定</a>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\prompt.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7150d224&file=prompt.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./prompt.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7150d224&file=prompt.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./prompt.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".t-prompt-ipt {\n  padding: 0 20px 20px;\n}\n.t-prompt-ipt input {\n  width: 100%;\n  line-height: 26px;\n  padding: 3px 10px;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n}\n", "", {"version":3,"sources":["/./src/components/prompt.vue.style"],"names":[],"mappings":"AAAA;EACE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;CACxB","file":"prompt.vue","sourcesContent":[".t-prompt-ipt {\n  padding: 0 20px 20px;\n}\n.t-prompt-ipt input {\n  width: 100%;\n  line-height: 26px;\n  padding: 3px 10px;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	// .t-prompt-ipt{
	// 	padding: 0 20px 20px;
	// 	input{
	// 		width: 100%;
	// 		line-height: 26px;
	// 		padding: 3px 10px;
	// 		border: 1px solid #ddd;
	// 		box-sizing: border-box;
	// 	}
	// }
	// </style>
	// <template>
	// <div class="t-dimmer" v-show="show"></div>
	// <div class="t-modal" v-show="show">
	// 	<div class="t-modal__header">
	// 		<h3 class="t-modal__header--tt" 
	// 			v-show="title !== ''" 
	// 			v-text="title"></h3>
	// 		<p class="t-modal__header--ct" v-text="content"></p>
	// 	</div>
	// 	<div class="t-prompt-ipt">
	// 		<input type="text" v-model="key">
	// 	</div>
	// 	<div class="t-modal__footer">
	// 		<a class="t-modal__footer--btn" 
	// 		   @click.prevent="notify('cancel')">取消</a>
	// 		<a class="t-modal__footer--btn" 
	// 		   @click.prevent="notify('confirm')">确定</a>
	// 	</div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				key: ''
			};
		},
	
		props: {
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			title: {
				type: String
			},
			content: {
				type: String
			}
		},
		methods: {
			notify: function notify(type) {
				this.show = false;
				this.$dispatch(type, this.key);
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-dimmer\" v-show=\"show\"></div>\r\n<div class=\"t-modal\" v-show=\"show\">\r\n\t<div class=\"t-modal__header\">\r\n\t\t<h3 class=\"t-modal__header--tt\" \r\n\t\t\tv-show=\"title !== ''\" \r\n\t\t\tv-text=\"title\"></h3>\r\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\r\n\t</div>\r\n\t<div class=\"t-prompt-ipt\">\r\n\t\t<input type=\"text\" v-model=\"key\">\r\n\t</div>\r\n\t<div class=\"t-modal__footer\">\r\n\t\t<a class=\"t-modal__footer--btn\" \r\n\t\t   @click.prevent=\"notify('cancel')\">取消</a>\r\n\t\t<a class=\"t-modal__footer--btn\" \r\n\t\t   @click.prevent=\"notify('confirm')\">确定</a>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(43)
	__vue_script__ = __webpack_require__(45)
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\actions.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8d21bc26&file=actions.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actions.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8d21bc26&file=actions.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actions.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".actions-transition {\n  -webkit-transition: all ease .3s;\n  transition: all ease .3s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.actions-enter,\n.actions-leave {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n", "", {"version":3,"sources":["/./src/components/actions.vue.style"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,wCAAwC;EACxC,gCAAgC;CACjC;AACD;;EAEE,2CAA2C;EAC3C,mCAAmC;CACpC","file":"actions.vue","sourcesContent":[".actions-transition {\n  -webkit-transition: all ease .3s;\n  transition: all ease .3s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.actions-enter,\n.actions-leave {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	// .actions-transition{
	// 	-webkit-transition : all ease .3s;
	// 	transition : all ease .3s;
	// 	-webkit-transform: translate3d(0,0,0);
	// 	transform: translate3d(0,0,0);
	// }
	// .actions-enter,.actions-leave{
	// 	-webkit-transform: translate3d(0, 100%,0);
	// 	transform: translate3d(0, 100%,0);
	// }
	// </style>
	// <template>
	// <div class="t-dimmer" v-show="show"></div>
	// <div class="t-actions" v-show="show" transition="actions">
	// 	<ul class="t-actions__list">
	// 		<li class="t-actions__list--tt" v-if="title" v-text="title"></li>
	// 		<slot></slot>
	// 	</ul>
	// 	<a class="t-actions__cancel" @click.prevent="show=false">取消</a>
	// </div>
	// </template>
	// <script>
	exports.default = {
		props: {
			show: {
				type: Boolean,
				default: false,
				twoWay: true
			},
			title: {
				type: String,
				default: ''
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-dimmer\" v-show=\"show\"></div>\r\n<div class=\"t-actions\" v-show=\"show\" transition=\"actions\">\r\n\t<ul class=\"t-actions__list\">\r\n\t\t<li class=\"t-actions__list--tt\" v-if=\"title\" v-text=\"title\"></li>\r\n\t\t<slot></slot>\r\n\t</ul>\r\n\t<a class=\"t-actions__cancel\" @click.prevent=\"show=false\">取消</a>\r\n</div>\r\n";

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(53)
	__vue_script__ = __webpack_require__(55)
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-35a65d74&file=panel.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./panel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-35a65d74&file=panel.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".toggle-transition {\n  -webkit-transition: height .3s ease;\n  transition: height .3s ease;\n  overflow: hidden;\n}\n.toggle-enter,\n.toggle-leave {\n  height: 0!important;\n}\n", "", {"version":3,"sources":["/./src/components/panel.vue.style"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;CACrB","file":"panel.vue","sourcesContent":[".toggle-transition {\n  -webkit-transition: height .3s ease;\n  transition: height .3s ease;\n  overflow: hidden;\n}\n.toggle-enter,\n.toggle-leave {\n  height: 0!important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	// .toggle-transition{
	// 	-webkit-transition: height .3s ease;
	// 	transition: height .3s ease;
	// 	overflow: hidden;
	// }
	// .toggle-enter,
	// .toggle-leave{
	// 	height : 0!important;
	// }
	// </style>
	// <template>
	// <div class="t-panel">
	// 	<header class="t-panel__hd" @click="toggle" v-text="title"></header>
	// 	<div class="t-panel__bd" v-el:panel v-show="show" transition="toggle">
	// 		<div class="t-panel__bd--ct">
	// 			<slot></slot>
	// 		</div>
	// 	</div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				height: ''
			};
		},
	
		props: {
			type: {
				type: String,
				default: 'normal' // normal || fold
			},
			show: {
				type: Boolean,
				default: true
			},
			title: {
				type: String
			}
		},
		ready: function ready() {
			this.init();
		},
	
		methods: {
			toggle: function toggle() {
				if (this.type !== 'normal') {
					this.show = !this.show;
					//send event for accordion
					this.$dispatch('toggle', this);
				}
			},
			init: function init() {
				if (this.type === 'normal') {
					this.show = true;
				} else {
					var target = this.$els.panel;
	
					target.style.display = 'block';
					target.style.height = target.getBoundingClientRect().height + 'px';
	
					if (!this.show) target.style.display = 'none';
				}
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-panel\">\r\n\t<header class=\"t-panel__hd\" @click=\"toggle\" v-text=\"title\"></header>\r\n\t<div class=\"t-panel__bd\" v-el:panel v-show=\"show\" transition=\"toggle\">\r\n\t\t<div class=\"t-panel__bd--ct\">\r\n\t\t\t<slot></slot>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(61)
	__vue_script__ = __webpack_require__(63)
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\accordion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07d6aa90&file=accordion.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-07d6aa90&file=accordion.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".t-accordion .t-panel + .t-panel {\n  border-top: 0;\n}\n", "", {"version":3,"sources":["/./src/components/accordion.vue.style"],"names":[],"mappings":"AAAA;EACE,cAAc;CACf","file":"accordion.vue","sourcesContent":[".t-accordion .t-panel + .t-panel {\n  border-top: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	// .t-accordion{
	// 	.t-panel+.t-panel{
	// 		border-top: 0;
	// 	}
	// }
	// </style>
	// <template>
	// <div class="t-accordion">
	// 	<slot></slot>
	// </div>
	// </template>
	// <script>
	exports.default = {
		ready: function ready() {
			this.init();
			this.listen();
		},
	
		methods: {
			init: function init() {
				this.$children.forEach(function (x, i) {
					if (i > 0) {
						x.show = false;
					}
				});
			},
			listen: function listen() {
				var that = this;
				that.$on('toggle', function (child) {
					that.$children.forEach(function (x) {
						if (child !== x) {
							x.show = false;
						}
					});
				});
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-accordion\">\r\n\t<slot></slot>\r\n</div>\r\n";

/***/ },
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(71)
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\tabPanel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7216e0af&file=tabPanel.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabPanel.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7216e0af&file=tabPanel.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabPanel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.t-tab__bd{\r\n\tdisplay: block;\r\n}\r\n", "", {"version":3,"sources":["/./src/components/tabPanel.vue.style"],"names":[],"mappings":";AACA;CACA,eAAA;CACA","file":"tabPanel.vue","sourcesContent":["<style>\r\n.t-tab__bd{\r\n\tdisplay: block;\r\n}\r\n</style>\r\n<template>\r\n<section class=\"t-tab\">\r\n\t<nav>\r\n\t\t<a v-for=\"its in list\" v-text=\"its.title\" :class=\"{'current':index===$index}\" @click.prevent=\"index=$index\"></a>\r\n\t</nav>\r\n\t<div class=\"t-tab__bd\" v-for=\"its in list\" v-show=\"index===$index\">\r\n\t\t<p v-html=\"its.content\"></p>\r\n\t</div>\r\n</section>\r\n</template>\r\n<script>\r\nexport default {\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\tindex : 0\r\n\t\t}\r\n\t},\r\n\tprops : {\r\n\t\tlist : {\r\n\t\t\ttype : Array\r\n\t\t}\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style>
	// .t-tab__bd{
	// 	display: block;
	// }
	// </style>
	// <template>
	// <section class="t-tab">
	// 	<nav>
	// 		<a v-for="its in list" v-text="its.title" :class="{'current':index===$index}" @click.prevent="index=$index"></a>
	// 	</nav>
	// 	<div class="t-tab__bd" v-for="its in list" v-show="index===$index">
	// 		<p v-html="its.content"></p>
	// 	</div>
	// </section>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				index: 0
			};
		},
	
		props: {
			list: {
				type: Array
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "\r\n<section class=\"t-tab\">\r\n\t<nav>\r\n\t\t<a v-for=\"its in list\" v-text=\"its.title\" :class=\"{'current':index===$index}\" @click.prevent=\"index=$index\"></a>\r\n\t</nav>\r\n\t<div class=\"t-tab__bd\" v-for=\"its in list\" v-show=\"index===$index\">\r\n\t\t<p v-html=\"its.content\"></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\btn.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <a class="t-btn" :class="['t-btn--'+type]"
	// 				 @click.prevent="callback"><slot></slot></a>
	// </template>
	// <script>
	exports.default = {
		props: {
			type: {
				type: String,
				default: 'default'
			},
			cb: {
				type: Function
			},
			opt: {
				type: null,
				default: ''
			}
		},
		methods: {
			callback: function callback() {
				this.opt === '' ? this.cb() : this.cb(this.opt);
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\r\n<a class=\"t-btn\" :class=\"['t-btn--'+type]\"\r\n\t\t\t\t @click.prevent=\"callback\"><slot></slot></a>\r\n";

/***/ },
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(83)
	__vue_template__ = __webpack_require__(84)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="t-switch" :class="{'open':status}"
	// 					  @click="status=!status">
	// 	<div class="t-switch__btn"></div>
	// </div>
	// </template>
	// <script>
	exports.default = {
		props: {
			status: {
				type: Boolean,
				default: false,
				toWay: true
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-switch\" :class=\"{'open':status}\"\r\n\t\t\t\t\t  @click=\"status=!status\">\r\n\t<div class=\"t-switch__btn\"></div>\r\n</div>\r\n";

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	__vue_template__ = __webpack_require__(92)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\progress.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1283446d&file=progress.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1283446d&file=progress.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "\r\n.t-progress-bar{\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth: 100%;\r\n\theight:2px;\r\n\tz-index: 999;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\r\n", "", {"version":3,"sources":["/./src/components/progress.vue.style"],"names":[],"mappings":";AACA;CACA,gBAAA;CACA,MAAA;CACA,OAAA;CACA,YAAA;CACA,WAAA;CACA,aAAA;CACA,mCAAA;CACA,2BAAA;CACA","file":"progress.vue","sourcesContent":["<style>\r\n.t-progress-bar{\r\n\tposition: fixed;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth: 100%;\r\n\theight:2px;\r\n\tz-index: 999;\r\n\t-webkit-transition: all 200ms ease;\r\n\ttransition: all 200ms ease;\r\n}\r\n</style>\r\n<template>\r\n<div class=\"t-progress-bar\" :show=\"show\" :style=\"{backgroundColor:color,transform:'translate3d(-100%,0,0)'}\"></div>\r\n</template>\r\n<script>\r\nexport default {\r\n\tdata() {\r\n\t\treturn {\r\n\t\t\ttimer : null,\r\n\t\t\tsize : 100,\r\n\t\t\tshow : false\r\n\t\t}\r\n\t},\r\n\tprops : {\r\n\t\tcolor : {\r\n\t\t\ttype : String,\r\n\t\t\tdefault : '#4c9cee'\r\n\t\t},\r\n\t\tstatus : {\r\n\t\t\ttype : String, //hide start done\r\n\t\t\tdefault : 'hide'\r\n\t\t},\r\n\t\tnum : {\r\n\t\t\ttype : Number,\r\n\t\t\tdefault : 100\r\n\t\t}\r\n\t},\r\n\twatch : {\r\n\t\tstatus(val) {\r\n\t\t\tlet that = this\r\n\t\t\treturn {\r\n\t\t\t\t'hide' : that.hide,\r\n\t\t\t\t'start' : that.start,\r\n\t\t\t\t'done' : that.done\r\n\t\t\t}[val].call(that)\r\n\t\t},\r\n\t\t/**\r\n\t\t * [if the num change, set progress bar size ,restart progress bar]\r\n\t\t * @param  {[type]} val [description]\r\n\t\t * @return {[type]}     [description]\r\n\t\t */\r\n\t\tnum(val) {\r\n\t\t\tif (val !== 100) {\r\n\t\t\t\tclearInterval(this.timer);\r\n\t\t\t\tthis.size = 100 - this.num; //get size by num\r\n\t\t\t\tthis.setSize(this.size);\r\n\t\t\t\tthis.start();\r\n\t\t\t} else {\r\n\t\t\t\tthis.done();\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\tmethods : {\r\n\t\tstart() {\r\n\t\t\tlet that = this,\r\n\t\t\t\tcount = that.size\r\n\r\n\t\t\tthat.show = true\r\n\r\n\t\t\tthat.timer = setInterval(() => {\r\n\t\t\t\tif (count > 10) {\r\n\t\t\t\t\tcount -= 1\r\n\t\t\t\t\tthat.setSize.call(that, count)\r\n\t\t\t\t} else {\r\n\t\t\t\t\tclearInterval(that.timer)\r\n\t\t\t\t}\r\n\t\t\t}, 1000)\r\n\t\t},\r\n\t\tdone() {\r\n\t\t\tlet that = this\r\n\r\n\t\t\tthat.setSize.call(that, 0)\r\n\t\t\tclearInterval(this.timer)\r\n\t\t\tsetTimeout(() => {\r\n\r\n\t\t\t\tthat.show = false\r\n\t\t\t\tthat.setSize.call(that, 100) // fix position\r\n\t\t\t\tthat.size = 100\r\n\t\t\t}, 200)\r\n\t\t},\r\n\t\thide() {\r\n\t\t\tthis.show = false\r\n\t\t},\r\n\t\tsetSize(val) {\r\n\t\t\tthis.$el.style.transform = 'translate3d(-'+ val +'%,0,0)'\r\n\t\t\tthis.$el.style.webkitTransform = 'translate3d(-'+ val +'%,0,0)'\r\n\t\t}\r\n\t}\r\n}\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style>
	// .t-progress-bar{
	// 	position: fixed;
	// 	top:0;
	// 	left:0;
	// 	width: 100%;
	// 	height:2px;
	// 	z-index: 999;
	// 	-webkit-transition: all 200ms ease;
	// 	transition: all 200ms ease;
	// }
	// </style>
	// <template>
	// <div class="t-progress-bar" :show="show" :style="{backgroundColor:color,transform:'translate3d(-100%,0,0)'}"></div>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				timer: null,
				size: 100,
				show: false
			};
		},
	
		props: {
			color: {
				type: String,
				default: '#4c9cee'
			},
			status: {
				type: String, //hide start done
				default: 'hide'
			},
			num: {
				type: Number,
				default: 100
			}
		},
		watch: {
			status: function status(val) {
				var that = this;
				return {
					'hide': that.hide,
					'start': that.start,
					'done': that.done
				}[val].call(that);
			},
	
			/**
	   * [if the num change, set progress bar size ,restart progress bar]
	   * @param  {[type]} val [description]
	   * @return {[type]}     [description]
	   */
			num: function num(val) {
				if (val !== 100) {
					clearInterval(this.timer);
					this.size = 100 - this.num; //get size by num
					this.setSize(this.size);
					this.start();
				} else {
					this.done();
				}
			}
		},
		methods: {
			start: function start() {
				var that = this,
				    count = that.size;
	
				that.show = true;
	
				that.timer = setInterval(function () {
					if (count > 10) {
						count -= 1;
						that.setSize.call(that, count);
					} else {
						clearInterval(that.timer);
					}
				}, 1000);
			},
			done: function done() {
				var that = this;
	
				that.setSize.call(that, 0);
				clearInterval(this.timer);
				setTimeout(function () {
	
					that.show = false;
					that.setSize.call(that, 100); // fix position
					that.size = 100;
				}, 200);
			},
			hide: function hide() {
				this.show = false;
			},
			setSize: function setSize(val) {
				this.$el.style.transform = 'translate3d(-' + val + '%,0,0)';
				this.$el.style.webkitTransform = 'translate3d(-' + val + '%,0,0)';
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"t-progress-bar\" :show=\"show\" :style=\"{backgroundColor:color,transform:'translate3d(-100%,0,0)'}\"></div>\r\n";

/***/ },
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(99)
	__vue_script__ = __webpack_require__(101)
	__vue_template__ = __webpack_require__(102)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\slide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e89f2a1&file=slide.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slide.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5e89f2a1&file=slide.vue!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./slide.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".slide {\n  position: relative;\n  width: 100%;\n  /*height: (@base-width * 7 / 12);*/\n  height: 12rem;\n  overflow: hidden;\n}\n.slide-detail {\n  height: 16rem;\n}\n.slide__inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.slide__inner--img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.slide__inner img {\n  width: 100%;\n}\n.slide__indicator {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.slide__indicator span {\n  display: inline-block;\n  width: 5px;\n  height: 5px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background-color: #eee;\n}\n.slide__indicator span.current {\n  background-color: #4c9;\n}\n.slide__inner {\n  -webkit-transition: -webkit-transform .5s linear;\n  transition: -webkit-transform .5s linear;\n  transition: transform .5s linear;\n  transition: transform .5s linear, -webkit-transform .5s linear;\n}\n", "", {"version":3,"sources":["/./src/components/slide.vue.style"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,mCAAmC;EACnC,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iDAAiC;EAAjC,yCAAiC;EAAjC,iCAAiC;EAAjC,+DAAiC;CAClC","file":"slide.vue","sourcesContent":[".slide {\n  position: relative;\n  width: 100%;\n  /*height: (@base-width * 7 / 12);*/\n  height: 12rem;\n  overflow: hidden;\n}\n.slide-detail {\n  height: 16rem;\n}\n.slide__inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.slide__inner--img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.slide__inner img {\n  width: 100%;\n}\n.slide__indicator {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n.slide__indicator span {\n  display: inline-block;\n  width: 5px;\n  height: 5px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background-color: #eee;\n}\n.slide__indicator span.current {\n  background-color: #4c9;\n}\n.slide__inner {\n  transition: transform .5s linear;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style lang="less">
	// @base-width:100%;
	// @base-height:12rem;
	// @color-gray:#eee;
	// @color-green:#4c9;
	//
	// .slide{
	// 	position: relative;
	// 	width: @base-width;
	// 	/*height: (@base-width * 7 / 12);*/
	// 	height:@base-height;
	// 	overflow: hidden;
	// 	&-detail{
	// 		height: 16rem;
	// 	}
	// 	&__inner{
	// 		position: relative;
	// 		width: @base-width;
	// 		height: 100%;
	// 		&--img{
	// 			position: absolute;
	// 			top: 0;
	// 			width: 100%;
	// 			height: 100%;
	// 		}
	// 		img{
	// 			width: 100%;
	// 		}
	// 	}
	// 	&__indicator{
	// 		position: absolute;
	// 		right: 10px;
	// 		bottom: 10px;
	// 		span{
	// 			display: inline-block;
	// 			width: 5px;
	// 			height: 5px;
	// 			margin-right: 5px;
	// 			border-radius: 50%;
	// 			background-color: @color-gray;
	// 			&.current{
	// 				background-color: @color-green;
	// 			}
	// 		}
	// 	}
	// 	&__inner{
	// 		transition: transform .5s linear;
	// 	}
	// }
	// </style>
	// <template>
	// <section class="slide" :class="{'slide-detail':detail}">
	// 	<ul class="slide__inner" @touchstart.prevent="start" @touchmove.prevent="move" @touchend.prevent="end" :style="{transform:'translate3d('+position+'px,0,0)'}">
	// 		<li v-for="its in list" class="slide__inner--img" :style="{left : $index * width + 'px'}">
	// 			<a :href="its.link">
	// 				<img :src="its.img">
	// 			</a>
	// 		</li>
	// 	</ul>
	// 	<div class="slide__indicator">
	// 		<span v-for="its in list" :class="{'current':$index===index}"></span>
	// 	</div>
	// </section>
	// </template>
	// <script>
	exports.default = {
		data: function data() {
			return {
				index: 0,
				width: 0,
				position: 0, //inner移动距离
				tmp: 0,
				xy: 0,
				zz: 0
			};
		},
	
		props: {
			detail: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array
			}
		},
		ready: function ready() {
			this.width = document.documentElement.getBoundingClientRect().width;
		},
	
		methods: {
			start: function start(e) {
				this.xy = e.touches[0].clientX;
			},
			move: function move(e) {
				this.zz = e.touches[0].clientX - this.xy;
				this.position = this.zz + this.tmp;
			},
			end: function end(e) {
	
				if (this.zz < -100) {
					//right
					if (this.index < this.list.length - 1) {
						this.index++;
					}
				} else if (this.zz > 100) {
					//left
					if (this.index > 0) {
						this.index--;
					}
				}
	
				this.tmp = this.position = -this.index * this.width;
			}
		}
	};
	// </script>
	//
	/* generated by vue-loader */

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "\r\n<section class=\"slide\" :class=\"{'slide-detail':detail}\">\r\n\t<ul class=\"slide__inner\" @touchstart.prevent=\"start\" @touchmove.prevent=\"move\" @touchend.prevent=\"end\" :style=\"{transform:'translate3d('+position+'px,0,0)'}\">\r\n\t\t<li v-for=\"its in list\" class=\"slide__inner--img\" :style=\"{left : $index * width + 'px'}\">\r\n\t\t\t<a :href=\"its.link\">\r\n\t\t\t\t<img :src=\"its.img\">\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class=\"slide__indicator\">\r\n\t\t<span v-for=\"its in list\" :class=\"{'current':$index===index}\"></span>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(107)
	__vue_template__ = __webpack_require__(108)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "d:\\Yous-H5\\src\\components\\menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <ul class="t-menu">
	// 	<li v-for="its in list">
	// 		<a v-text="its.name" @click.prevent="handle($event,its.link)"></a>
	// 		<ul class="t-menu__child" v-if="its.child">
	// 			<li v-for="items in its.child">
	// 				<a :href="items.link" v-text="items.name"></a>
	// 			</li>
	// 		</ul>
	// 	</li>
	// </ul>
	// </template>
	// <script>
	exports.default = {
		props: {
			list: {
				type: Array
			}
		},
		methods: {
			handle: function handle(e, link) {
				if (link) {
					window.location.href = link;
				} else {
					e.target.classList.toggle('current');
				}
			}
		}
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "\r\n<ul class=\"t-menu\">\r\n\t<li v-for=\"its in list\">\r\n\t\t<a v-text=\"its.name\" @click.prevent=\"handle($event,its.link)\"></a>\r\n\t\t<ul class=\"t-menu__child\" v-if=\"its.child\">\r\n\t\t\t<li v-for=\"items in its.child\">\r\n\t\t\t\t<a :href=\"items.link\" v-text=\"items.name\"></a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</li>\r\n</ul>\r\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mui.js.map