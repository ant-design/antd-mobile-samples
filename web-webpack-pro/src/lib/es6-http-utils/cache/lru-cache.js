'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Kuitos
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @homepage https://github.com/kuitos/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @since 2015-10-20
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * lru cache module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _HashDoubleLinkedList = require('../data-structure/linked-list/HashDoubleLinkedList.js');

var _HashDoubleLinkedList2 = _interopRequireDefault(_HashDoubleLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// update lru entry head node
function updateLRUEntry(element, lruEntry) {
	lruEntry.remove(element);
	lruEntry.insertHead(element);
}

var LRUCache = function () {
	function LRUCache(capacity) {
		_classCallCheck(this, LRUCache);

		this.capacity = capacity || Number.MAX_VALUE;
		this._lruEntry = new _HashDoubleLinkedList2.default();
		this._cache = new Map();
	}

	_createClass(LRUCache, [{
		key: 'get',
		value: function get(key) {

			var value = this._cache.get(key);

			// when capacity less than MAX_VALUE,we need to refresh lru entry
			if (value && this.capacity < Number.MAX_VALUE) {
				updateLRUEntry(key, this._lruEntry);
			}

			return value;
		}
	}, {
		key: 'set',
		value: function set(key, value) {

			if (this.capacity < Number.MAX_VALUE) {
				updateLRUEntry(key, this._lruEntry);
			}

			if (this._cache.size === this.capacity) {
				// eliminate the last node of lru entry
				this._cache.delete(this._lruEntry.removeEnd().element);
			}

			// return cache for invocation chaining
			return this._cache.set(key, value);
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			this._lruEntry.remove(key);
			this._cache.delete(key);
		}
	}, {
		key: 'clear',
		value: function clear() {
			this._lruEntry.clear();
			this._cache.clear();
		}
	}]);

	return LRUCache;
}();

exports.default = LRUCache;