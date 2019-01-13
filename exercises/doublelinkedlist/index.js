// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

module.exports = { Node, DoubleLinkedList };
