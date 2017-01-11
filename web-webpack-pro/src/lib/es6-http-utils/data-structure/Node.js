"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-10-21
 * node structure
 */

var Node = function Node() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var prevNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var nextNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  _classCallCheck(this, Node);

  this.element = element;
  this.prev = prevNode;
  this.next = nextNode;
};

exports.default = Node;