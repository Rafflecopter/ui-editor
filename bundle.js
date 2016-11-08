/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	document.write(__webpack_require__(5));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\npre {\n  width: 100%;\n  height: 100%;\n}\n\n.defaults {\n  display: none;\n}\n\n.windowGroup {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n}\n\n.btn {\n  padding: 0;\n}\n\n.btn--inline {\n  display: block;\n  margin-left: 10px;\n  color: #3F5670;\n  background: none;\n  border: none;\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n  font-size: 0.75rem;\n}\n\n.btn--inline:hover {\n  text-shadow: 1px 0.25px 0 #FBFCFE, -1px 0.25px 0 #FBFCFE, 2px 0 0 #FBFCFE, -2px 0 0 #FBFCFE;\n  box-shadow: inset 0 -1px 0 0 #FBFCFE, inset 0 -2px 0 0 #3F5670;\n}\n\n.btn--inline:hover:focus {\n  outline: none;\n}\n\n.btn--inline:hover:active {\n  box-shadow: inset 0 -2px 1px 0 #FBFCFE, inset 0 -3px 0 0 #3F5670;\n}\n\n.btn--window {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n  padding: 0 6px;\n  color: #7F929D;\n  background: white;\n  border: solid 1px #D5D9E8;\n  text-align: center;\n  font-size: 0.75rem;\n  border-radius: 3px;\n  opacity: 0.8;\n}\n\n.btn--window span {\n  display: inline-block;\n  width: 10px;\n  height: 25px;\n  transform: translateX(2px);\n}\n\n.btn--window span:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 8px;\n  right: 0;\n  border: 4px solid transparent;\n  border-top-color: #3F5670;\n}\n\n.btn--window:hover {\n  opacity: 1;\n}\n\n.btn--window:focus {\n  outline: none;\n}\n\n.btn--window.console-toggle span:after {\n  top: 6px;\n  border-bottom-color: #3F5670;\n  border-top-color: transparent;\n}\n\n.btn--window.console-toggle.btn-active {\n  position: absolute;\n  right: 0;\n  bottom: 102px;\n}\n\n.btn--window.console-toggle.btn-active span:after {\n  top: 10px;\n  border-bottom-color: transparent;\n  border-top-color: #3F5670;\n}\n\n.btn--window:not(:last-child) {\n  margin-right: 4px;\n}\n\n.resize-editor {\n  position: relative;\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n}\n\n.resize-editor--resizing .resizer,\n.resize-editor--resizing .resizer:hover {\n  cursor: -webkit-grabbing;\n}\n\n.resize-editor .editor {\n  width: 100%;\n}\n\n.resizer {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  -webkit-user-select: none;\n}\n\n.resizer:before, .resizer:after {\n  content: '';\n  position: absolute;\n  height: 1px;\n  background: #D5D9E8;\n  transform: rotate(-45deg);\n  z-index: 1;\n}\n\n.resizer:before {\n  width: 6px;\n  right: 2px;\n  bottom: 4px;\n}\n\n.resizer:after {\n  width: 12px;\n  left: -2px;\n  bottom: 6px;\n}\n\n.resizer:hover {\n  cursor: -webkit-grab;\n}\n\n.editor {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n  height: 100%;\n  padding: 0 10px 10px;\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #FBFCFE;\n  border: 1px solid #D5D9E8;\n  border-radius: 3px;\n}\n\n.editor__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 35px;\n}\n\n.editor__body {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  flex-basis: 100%;\n}\n\n.editor-logo {\n  width: 20px;\n}\n\n.editor-logo svg {\n  width: 20px;\n  fill: #3F5670;\n}\n\n.editor-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.window {\n  flex-grow: 1;\n  position: relative;\n  width: 100%;\n  height: calc(33% - (3/2 * 10px));\n  border: 1px solid #D5D9E8;\n  box-shadow: inset rgba(0, 0, 0, 0.05) 0 3px 10px;\n  transition: all 0.2s ease-in-out;\n  appearance: none;\n}\n\n.window:hover {\n  border-color: rgba(127, 146, 157, 0.5);\n}\n\n.window:focus {\n  border-color: #7F929D;\n}\n\n.window:first-child {\n  border-top-left-radius: 3px;\n}\n\n.window:last-child {\n  border-bottom-left-radius: 3px;\n}\n\n.window:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.window--closed {\n  height: 29px;\n  flex-basis: 29px;\n  flex-grow: 0;\n}\n\n.window--closed:after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.85);\n  border-radius: 3px;\n}\n\n.window--closed .btn--window span:after {\n  top: 6px;\n  border-top-color: transparent;\n  border-bottom-color: #3F5670;\n}\n\n.window-btns {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  height: 25px;\n  top: 2px;\n  right: 2px;\n  z-index: 30;\n}\n\n.preview {\n  position: relative;\n  width: 60%;\n  height: 100%;\n  margin-left: 10px;\n  overflow: hidden;\n  appearance: none;\n  background: white;\n  border: 1px solid #D5D9E8;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: inset rgba(63, 86, 112, 0.05) 0 3px 10px;\n  box-sizing: border-box;\n}\n\n.preview .window-btns {\n  top: initial;\n  bottom: 2px;\n}\n\niframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n\n@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0;\n  }\n  to {\n    opacity: 0.0;\n  }\n}\n\n@-moz-keyframes blinker {\n  from {\n    opacity: 1.0;\n  }\n  to {\n    opacity: 0.0;\n  }\n}\n\n@-ms-keyframes blinker {\n  from {\n    opacity: 1.0;\n  }\n  to {\n    opacity: 0.0;\n  }\n}\n\n@-o-keyframes blinker {\n  from {\n    opacity: 1.0;\n  }\n  to {\n    opacity: 0.0;\n  }\n}\n\n.console {\n  position: fixed;\n  display: block;\n  width: calc(60% - 20px);\n  height: 100px;\n  top: calc(100% - 100px - 10px);\n  border-top: 1px solid #D5D9E8;\n  box-shadow: inset rgba(63, 86, 112, 0.05) 0 3px 10px;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n}\n\n.console--closed {\n  top: 100%;\n}\n\n#console {\n  margin: 0;\n}\n\n.jqconsole {\n  padding: 10px;\n  font-family: \"Monaco\", \"Courier New\", monospace;\n  font-size: 12px;\n  /* jqconsole ANSI*/\n}\n\n.jqconsole-cursor {\n  color: #999;\n  border-bottom: 1px solid #999;\n}\n\n.jqconsole-blurred .jqconsole-cursor {\n  border: none;\n}\n\n.jqconsole-header {\n  color: #666;\n  word-wrap: break-word;\n}\n\n.jqconsole-prompt {\n  color: #0d0;\n}\n\n.jqconsole-old-prompt {\n  color: #0b0;\n  font-weight: normal;\n}\n\n.jqconsole-input {\n  color: #dd0;\n}\n\n.jqconsole-old-input {\n  color: #bb0;\n  font-weight: normal;\n}\n\n.jqconsole-composition {\n  background-color: red;\n}\n\n.jqconsole-ansi-bold {\n  font-weight: bold !important;\n}\n\n.jqconsole-ansi-lighter {\n  font-weight: lighter !important;\n}\n\n.jqconsole-ansi-italic {\n  font-style: italic !important;\n}\n\n.jqconsole-ansi-underline {\n  text-decoration: underline !important;\n}\n\n.jqconsole-ansi-blink {\n  -webkit-animation-name: blinker;\n  -moz-animation-name: blinker;\n  -ms-animation-name: blinker;\n  -o-animation-name: blinker;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -ms-animation-iteration-count: infinite;\n  -o-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -ms-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -o-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -moz-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  -o-animation-duration: 1s;\n  -ms-animation-duration: 1s;\n}\n\n.jqconsole-ansi-blink-rapid {\n  -webkit-animation-name: blinker;\n  -moz-animation-name: blinker;\n  -ms-animation-name: blinker;\n  -o-animation-name: blinker;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -ms-animation-iteration-count: infinite;\n  -o-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -ms-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -o-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -moz-animation-timing-function: cubic-bezier(1, 0, 0, 1);\n  -webkit-animation-duration: 0.5s;\n  -moz-animation-duration: 0.5s;\n  -o-animation-duration: 0.5s;\n  -ms-animation-duration: 0.5s;\n}\n\n.jqconsole-ansi-hidden {\n  visibility: hidden !important;\n}\n\n.jqconsole-ansi-line-through {\n  text-decoration: line-through;\n}\n\n.jqconsole-ansi-color-black {\n  color: black !important;\n}\n\n.jqconsole-ansi-color-red {\n  color: red !important;\n}\n\n.jqconsole-ansi-color-green {\n  color: green !important;\n}\n\n.jqconsole-ansi-color-yellow {\n  color: yellow !important;\n}\n\n.jqconsole-ansi-color-blue {\n  color: blue !important;\n}\n\n.jqconsole-ansi-color-magenta {\n  color: magenta !important;\n}\n\n.jqconsole-ansi-color-cyan {\n  color: cyan !important;\n}\n\n.jqconsole-ansi-color-white {\n  color: white !important;\n}\n\n.jqconsole-ansi-background-color-black {\n  background-color: black !important;\n}\n\n.jqconsole-ansi-background-color-red {\n  background-color: red !important;\n}\n\n.jqconsole-ansi-background-color-green {\n  background-color: green !important;\n}\n\n.jqconsole-ansi-background-color-yellow {\n  background-color: yellow !important;\n}\n\n.jqconsole-ansi-background-color-blue {\n  background-color: blue !important;\n}\n\n.jqconsole-ansi-background-color-magenta {\n  background-color: magenta !important;\n}\n\n.jqconsole-ansi-background-color-cyan {\n  background-color: cyan !important;\n}\n\n.jqconsole-ansi-background-color-white {\n  background-color: white !important;\n}\n\n.jqconsole-ansi-framed {\n  border: 1px solid !important;\n}\n\n.jqconsole-ansi-overline {\n  text-decoration: overline !important;\n}\n\n.jqconsole-ansi-background-color-blue {\n  background-color: blue !important;\n}\n\n.jqconsole-ansi-background-color-magenta {\n  background-color: magenta !important;\n}\n\n.jqconsole-ansi-background-color-cyan {\n  background-color: cyan !important;\n}\n\n.jqconsole-ansi-background-color-white {\n  background-color: white !important;\n}\n\n.jqconsole-ansi-framed {\n  border: 1px solid !important;\n}\n\n.jqconsole-ansi-overline {\n  text-decoration: overline !important;\n}\n\n.jqconsole .brace {\n  color: #00f;\n}\n\n.jqconsole .paran {\n  color: #FF00FF;\n}\n\n.jqconsole .bracket {\n  color: #ff6400;\n}\n\n.ace_editor {\n  margin: 0;\n}\n\n.ace_content {\n  height: 100% !important;\n}\n\n.ace_gutter-layer {\n  height: 100% !important;\n}\n\nbody {\n  font-size: 16px;\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n  color: #3F5670;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	module.exports = "It works from content.js.";

/***/ }
/******/ ]);