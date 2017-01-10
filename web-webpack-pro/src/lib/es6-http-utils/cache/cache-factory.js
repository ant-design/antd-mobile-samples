'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lruCache = require('./lru-cache');

var _lruCache2 = _interopRequireDefault(_lruCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cacheStores = new Map();

// default cache constructor was LRU cache,you can change it by `cacheStores.defaultCacheConstructor = xxxCache` for free
/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-11-29
 */
cacheStores.defaultCacheConstructor = _lruCache2.default;

exports.default = {
	'get': function get(key) {
		return cacheStores.get(key);
	},
	create: function create(key) {
		var Cache = cacheStores.defaultCacheConstructor;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		var cache = new (Function.prototype.bind.apply(Cache, [null].concat(args)))();
		cacheStores.set(key, cache);
		return cache;
	},
	'delete': function _delete(key) {
		cacheStores.delete(key);
	},
	clear: function clear() {
		cacheStores.clear();
	}
};