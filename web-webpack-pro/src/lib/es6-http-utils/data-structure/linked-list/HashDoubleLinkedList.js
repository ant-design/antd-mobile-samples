'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DoubleLinkedList2 = require('./DoubleLinkedList.js');

var _DoubleLinkedList3 = _interopRequireDefault(_DoubleLinkedList2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Kuitos
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @homepage https://github.com/kuitos/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2015-10-22
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var HashDoubleLinkedList = function (_DoubleLinkedList) {
	_inherits(HashDoubleLinkedList, _DoubleLinkedList);

	function HashDoubleLinkedList() {
		_classCallCheck(this, HashDoubleLinkedList);

		var _this = _possibleConstructorReturn(this, (HashDoubleLinkedList.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList)).call(this));

		_this._hashMap = new Map();
		return _this;
	}

	_createClass(HashDoubleLinkedList, [{
		key: 'find',
		value: function find(element) {
			return this._hashMap.get(element) || null;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(beforeBaseElement, element) {
			var node = _get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'insertBefore', this).call(this, beforeBaseElement, element);
			this._hashMap.set(element, node);
			return node;
		}
	}, {
		key: 'insertAfter',
		value: function insertAfter(afterBaseElement, element) {
			var node = _get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'insertAfter', this).call(this, afterBaseElement, element);
			this._hashMap.set(element, node);
			return node;
		}
	}, {
		key: 'insertHead',
		value: function insertHead(element) {
			var node = _get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'insertHead', this).call(this, element);
			this._hashMap.set(element, node);
			return node;
		}
	}, {
		key: 'insertEnd',
		value: function insertEnd(element) {
			var node = _get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'insertEnd', this).call(this, element);
			this._hashMap.set(element, node);
			return node;
		}
	}, {
		key: 'remove',
		value: function remove(element) {
			var node = _get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'remove', this).call(this, element);
			this._hashMap.delete(element);
			return node;
		}
	}, {
		key: 'display',
		value: function display() {

			_get(HashDoubleLinkedList.prototype.__proto__ || Object.getPrototypeOf(HashDoubleLinkedList.prototype), 'display', this).call(this);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this._hashMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var entry = _step.value;


					console.log(entry);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}]);

	return HashDoubleLinkedList;
}(_DoubleLinkedList3.default);

exports.default = HashDoubleLinkedList;