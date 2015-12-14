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

	var _createMenu = __webpack_require__(2);

	var _createMenu2 = _interopRequireDefault(_createMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var URL = './data/items.json';

	(0, _http2.default)(URL).get().then(function (data) {
	    return JSON.parse(data);
	}).then(function (data) {
	    var items = (0, _createMenu2.default)(data, 0);
	    document.getElementById('main-menu').insertAdjacentHTML('beforeEnd', items);
	}).catch(console.log.bind(console));

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

	exports.default = $http;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function menuBuilder(items, parentId) {

	  var content = '<ul>';

	  if (parentId !== 0) {
	    content = '<ul ' + 'class=\'submenu\'' + '>';
	  }

	  for (var item in items) {
	    var obj = items[item];

	    if (!obj.parent) {
	      obj.parent = 0;
	    }

	    if (obj.parent === parentId) {
	      content += '<li>' + obj.name + menuBuilder(items, obj.id) + '</li>';
	    }
	  }

	  content += '</ul>';

	  return content.replace(/<ul class=\'submenu\'><\/ul>/g, '');
	}

	exports.default = menuBuilder;

/***/ }
/******/ ]);