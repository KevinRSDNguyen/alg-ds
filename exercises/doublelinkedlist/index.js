// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
