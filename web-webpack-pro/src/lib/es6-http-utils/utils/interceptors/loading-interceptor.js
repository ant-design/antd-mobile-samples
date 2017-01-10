'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.eventEmitter = undefined;

var _fetchHttp = require('./../../http/fetch-http');

var _fetchHttp2 = _interopRequireDefault(_fetchHttp);

var _events = require('events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-11-04
 */

var setTimeout = window.setTimeout;
var interceptorBlackList = _fetchHttp2.default.defaultConfigs.interceptorBlackList;

function isUrlInInterceptorBlackList(url) {
	return !! ~interceptorBlackList.indexOf(url);
}

var counter = 0;
var loading = false;

var eventEmitter = exports.eventEmitter = new _events.EventEmitter();

exports.default = {
	request: function request(_request) {

		if (!isUrlInInterceptorBlackList(_request.url)) {

			counter++;

			if (!loading) {

				setTimeout(function () {

					if (!loading && counter > 0) {
						loading = true;
						eventEmitter.emit('loadingStatusChanged', loading);
					}
				}, 500);
			}
		}

		return _request;
	},
	response: function response(_response) {

		counter--;

		if (counter === 0) {

			if (loading) {
				loading = false;
				eventEmitter.emit('loadingStatusChanged', loading);
			}
		}

		return _response;
	},
	responseError: function responseError(response) {

		counter--;

		if (counter === 0) {

			if (loading) {
				loading = false;
				eventEmitter.emit('loadingStatusChanged', loading);
			}
		}

		return Promise.reject(response);
	}
};