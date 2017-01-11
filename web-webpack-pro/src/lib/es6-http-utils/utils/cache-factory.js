/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-11-29
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cacheLruCache = require('../cache/lru-cache');

var _cacheLruCache2 = _interopRequireDefault(_cacheLruCache);

var cacheStores = new Map();

// default cache constructor was LRU cache,you can change it by `cacheStores.defaultCacheConstructor = xxxCache` for free
cacheStores.defaultCacheConstructor = _cacheLruCache2['default'];

exports['default'] = {

  get: function get(key) {
    return cacheStores.get(key);
  },

  create: function create(key) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var cache = new (_bind.apply(cacheStores.defaultCacheConstructor, [null].concat(args)))();
    cacheStores.set(key, cache);
    return cache;
  },

  'delete': function _delete(key) {
    cacheStores['delete'](key);
  },

  clear: function clear() {
    cacheStores.clear();
  }

};
module.exports = exports['default'];