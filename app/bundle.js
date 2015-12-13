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

	'use strict';

	var _http = __webpack_require__(1);

	var _http2 = _interopRequireDefault(_http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _http2.default)(url).get().then(function (data) {
		items = JSON.parse(data);
	}).catch(callback.error);

	setTimeout(function () {
		console.log(items);
	}, 100);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function $http(url) {
		var core = {
			ajax: function ajax(method, url) {

				var promise = new Promise(function (resolve, reject) {

					var xhr = new XMLHttpRequest();
					var uri = url;

					xhr.open(method, uri);
					xhr.send();

					xhr.onload = function () {
						if (this.status >= 200 && this.status < 300) {
							resolve(this.response);
						} else {
							reject(this.status);
						}
					};

					xhr.onerror = function () {
						reject(this.status);
					};
				});

				return promise;
			}
		};

		return {
			get: function get() {
				return core.ajax('GET', url);
			}
		};
	}

	var url = 'items.json';

	var callback = {
		success: function success(data) {
			return JSON.parse(data);
		},
		error: function error(data) {}
	};

	exports.default = $http;

/***/ }
/******/ ]);