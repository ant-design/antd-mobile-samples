'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Kuitos
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @homepage https://github.com/kuitos/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @since 2015-10-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Node = require('./../Node.js');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoubleLinkedList = function () {
	function DoubleLinkedList() {
		_classCallCheck(this, DoubleLinkedList);

		this._headNode = new _Node2.default();
		this._endNode = new _Node2.default();
	}

	/**
  * @returns Node or null
  */


	_createClass(DoubleLinkedList, [{
		key: 'find',
		value: function find(element) {

			var currentNode = this._headNode;

			while (currentNode && currentNode.element !== element) {
				currentNode = currentNode.next;
			}

			return currentNode;
		}
	}, {
		key: 'findHead',
		value: function findHead() {
			return this._headNode;
		}
	}, {
		key: 'findEnd',
		value: function findEnd() {
			return this._endNode;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(beforeBaseElement, element) {

			var beforeBaseNode = this.find(beforeBaseElement);

			if (beforeBaseNode === null || beforeBaseNode === this._headNode || beforeBaseNode.prev.element === null) {
				return this.insertHead(element);
			} else {

				var node = new _Node2.default(element);
				node.next = beforeBaseNode;
				node.prev = beforeBaseNode.prev;
				beforeBaseNode.prev = node;
				node.prev.next = node;

				return node;
			}
		}
	}, {
		key: 'insertAfter',
		value: function insertAfter(afterBaseElement, element) {

			var afterBaseNode = this.find(afterBaseElement);

			if (afterBaseNode === null || afterBaseNode === this._endNode || afterBaseNode.next.element === null) {
				return this.insertEnd(element);
			} else {

				var node = new _Node2.default(element);

				node.prev = afterBaseNode;
				node.next = afterBaseNode.next;
				afterBaseNode.next = node;
				node.next.prev = node;

				return node;
			}
		}
	}, {
		key: 'insertHead',
		value: function insertHead(element) {

			var node = new _Node2.default(element);

			if (this._headNode.element === null) {

				this._headNode = node;
				this._headNode.next = this._endNode;
				this._endNode.prev = this._headNode;
			} else {

				node.next = this._headNode;
				this._headNode.prev = node;
				this._headNode = node;

				if (this._endNode.element === null) {
					this.insertEnd(this._endNode.prev.element);
				}
			}

			return node;
		}
	}, {
		key: 'insertEnd',
		value: function insertEnd(element) {

			var node = new _Node2.default(element);

			if (this._endNode.element === null) {

				this._endNode = node;
				this._endNode.prev = this._headNode;
				this._headNode.next = this._endNode;
			} else {

				node.prev = this._endNode;
				this._endNode.next = node;
				this._endNode = node;

				if (this._headNode.element === null) {
					this.insertHead(this._headNode.next.element);
				}
			}

			return node;
		}
	}, {
		key: 'remove',
		value: function remove(element) {

			var node = this.find(element);

			if (node !== null) {

				if (node === this._headNode) {

					// remove head
					this._headNode = this._headNode.next;
					this._headNode.prev = null;
				} else if (node === this._endNode) {

					// remove end
					this._endNode = this._endNode.prev;
					this._endNode.next = null;
				} else {

					var prevNode = node.prev;
					var nextNode = node.next;
					prevNode.next = nextNode;
					nextNode.prev = prevNode;
				}
			}

			return node;
		}
	}, {
		key: 'removeHead',
		value: function removeHead() {
			return this.remove(this._headNode.element);
		}
	}, {
		key: 'removeEnd',
		value: function removeEnd() {
			return this.remove(this._endNode.element);
		}
	}, {
		key: 'clear',
		value: function clear() {
			this._headNode = new _Node2.default();
			this._endNode = new _Node2.default();
		}
	}, {
		key: 'display',
		value: function display() {

			var currentNode = this._headNode;

			while (currentNode) {
				console.log(currentNode);
				currentNode = currentNode.next;
			}
		}
	}]);

	return DoubleLinkedList;
}();

exports.default = DoubleLinkedList;