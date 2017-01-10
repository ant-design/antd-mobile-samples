'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fetchHttp = require('./fetch-http.js');

var _fetchHttp2 = _interopRequireDefault(_fetchHttp);

var _httpConstants = require('../constants/http-constants.js');

var _urlUtil = require('../utils/url-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @author Kuitos
                                                                                                                                                           * @homepage https://github.com/kuitos/
                                                                                                                                                           * @since 2015-10-14
                                                                                                                                                           * restful like use fetch api,inspired by ngResource
                                                                                                                                                           */

/**
 * use params to fill the url template
 * @param urlTemplate
 * @param params
 * @returns filled url template
 */
function genUrlFromTemplate(urlTemplate, params) {

	var generatedUrl = urlTemplate.replace(/:\w+/g, function (match) {
		var key = match.substr(1);
		return params[key] !== undefined ? (0, _urlUtil.encodeUriSegment)(params[key]) : '';
	});

	generatedUrl = generatedUrl.replace(/https?:\/\//, '$&//').replace(/\/\//g, '/');

	return generatedUrl;
}

/**
 * get the rest params after url template use up
 * @param urlTemplate
 * @param params
 * @returns rest params
 */
function getRestParamsFromUrlTemplate(urlTemplate, params) {

	var restParams = Object.assign({}, params);

	(urlTemplate.match(/:\w+/g) || []).forEach(function (key) {
		delete restParams[key.substr(1)];
	});

	return restParams;
}

var FetchHttpResource =

/**
 * Resource Constructor
 * @param urlTemplate
 * @param defaultParams
 * @param actions
 *          {get:{method:...,headers:....}} see fetch api config
 * @returns {} resource instance
 */
function FetchHttpResource(urlTemplate, defaultParams) {
	var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	_classCallCheck(this, FetchHttpResource);

	var resource = {};
	// POST|PUT|PATCH can have request body according to rest specification
	var methodsCanHaveBody = [_httpConstants.REQUEST_METHODS.POST, _httpConstants.REQUEST_METHODS.PUT, _httpConstants.REQUEST_METHODS.PATCH];

	Object.keys(Object.assign(actions, FetchHttpResource.defaults.actions)).forEach(function (actionName) {

		/**
   * generate resource method
   * @returns {Promise.<response>}
   */
		resource[actionName] = function () {

			var configs = {};
			var action = actions[actionName];
			var method = action.method;
			var hasBody = !! ~methodsCanHaveBody.indexOf(method);
			var params = void 0;

			switch (arguments.length) {

				case 2:
					params = arguments.length <= 0 ? undefined : arguments[0];
					configs.data = arguments.length <= 1 ? undefined : arguments[1];
					break;

				case 1:
					if (hasBody) {
						configs.data = arguments.length <= 0 ? undefined : arguments[0];
					} else {
						params = arguments.length <= 0 ? undefined : arguments[0];
					}
					break;

				case 0:
					break;

				default:
					throw new Error('unexpected arguments!');

			}

			// fill configs from action
			Object.keys(action).forEach(function (prop) {

				if (prop !== 'isArray') {
					configs[prop] = action[prop];
				}
			});

			var extractParams = Object.assign({}, defaultParams, params);
			var url = genUrlFromTemplate(urlTemplate + (configs.url || ''), extractParams);

			// strip trailing slashes and set the url (unless this behavior is specifically disabled)
			if (FetchHttpResource.defaults.stripTrailingSlashes) {
				url = url.replace(/\/+$/, '') || '/';
			}

			configs.params = getRestParamsFromUrlTemplate(urlTemplate, extractParams);

			return (0, _fetchHttp2.default)(url, method, configs).then(function (response) {
				return Promise.resolve(response);
				// return response.data.then(function (data) {
				// 	if (!!action.isArray !== Array.isArray(data)) {
				// 		throw new Error(method + ' request to url:' + response.url + ' occurred an error in resource configuration for action ' + actionName + '.' + ('Expected response to contain an ' + (action.isArray ? 'array' : 'object') + ' but got an ' + (Array.isArray(response.data) ? 'array' : 'object')));
				// 	}

				// 	return data;
				// });
			}, function (response) {
				return Promise.reject(response);
			});
		};
	});

	return resource;
};

// resource defaults configurations


FetchHttpResource.defaults = {

	actions: {
		'get': { method: _httpConstants.REQUEST_METHODS.GET }, // query return object
		'query': { method: _httpConstants.REQUEST_METHODS.GET, isArray: true }, // query return array
		'save': { method: _httpConstants.REQUEST_METHODS.POST }, // save
		'update': { method: _httpConstants.REQUEST_METHODS.PUT }, // batch update
		'patch': { method: _httpConstants.REQUEST_METHODS.PATCH }, // part update
		'delete': { method: _httpConstants.REQUEST_METHODS.DELETE }, // physical delete
		'remove': { method: _httpConstants.REQUEST_METHODS.DELETE } // logical delete
	},

	stripTrailingSlashes: true

};

exports.default = FetchHttpResource;