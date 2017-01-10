'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cacheFactory = require('../cache/cache-factory');

var _cacheFactory2 = _interopRequireDefault(_cacheFactory);

var _fetchHttpResource = require('../http/fetch-http-resource');

var _fetchHttpResource2 = _interopRequireDefault(_fetchHttpResource);

var _httpConstants = require('../constants/http-constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceUtils = {

	API_PREFIX: '',

	DEFAULT_REST_CACHE: _cacheFactory2.default.create('defaultRestCache', 50),

	genResource: function genResource(urlTemplate, cache, defaultParams, additionalActions) {

		var restHttpCache = cache === undefined ? this.DEFAULT_REST_CACHE : cache;

		var DEFAULT_ACTIONS = {
			'get': { method: _httpConstants.REQUEST_METHODS.GET, cache: restHttpCache }, // query return object
			'query': { method: _httpConstants.REQUEST_METHODS.GET, cache: restHttpCache, isArray: true }, // query return array
			'save': { method: _httpConstants.REQUEST_METHODS.POST, cache: restHttpCache }, // save
			'update': { method: _httpConstants.REQUEST_METHODS.PUT, cache: restHttpCache }, // batch update
			'patch': { method: _httpConstants.REQUEST_METHODS.PATCH, cache: restHttpCache }, // part update
			'delete': { method: _httpConstants.REQUEST_METHODS.DELETE, cache: restHttpCache }, // physical delete
			'remove': { method: _httpConstants.REQUEST_METHODS.DELETE, cache: restHttpCache } // logical delete
		};

		return new _fetchHttpResource2.default(this.API_PREFIX + urlTemplate, defaultParams, Object.assign({}, DEFAULT_ACTIONS, additionalActions));
	}
}; /**
    * @author Kuitos
    * @homepage https://github.com/kuitos/
    * @since 2015-11-29
    */


ResourceUtils.genResource = ResourceUtils.genResource.bind(ResourceUtils);

exports.default = ResourceUtils;