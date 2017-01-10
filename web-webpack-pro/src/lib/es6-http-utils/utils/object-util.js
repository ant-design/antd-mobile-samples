'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isString = isString;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isDate = isDate;
exports.isFile = isFile;
exports.isBlob = isBlob;
exports.isFormData = isFormData;
exports.toJson = toJson;
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-14
 */

var toString = Object.prototype.toString;

function isString(string) {
	return typeof string === 'string';
}

function isObject(value) {
	return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function isFunction(fn) {
	return typeof fn === 'function';
}

function isDate(date) {
	return toString.call(date) === '[object Date]';
}

function isFile(obj) {
	return toString.call(obj) === '[object File]';
}

function isBlob(obj) {
	return toString.call(obj) === '[object Blob]';
}

function isFormData(obj) {
	return toString.call(obj) === '[object FormData]';
}

function toJson(obj) {
	if (obj !== undefined) {
		return JSON.stringify(obj);
	}
}