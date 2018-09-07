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
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
}

const l = new DoubleLinkedList();
l.push(2);
l.push(4);
console.log(l);
// console.log(l.tail.val);
// console.log(l.tail.prev.val);
// console.log(l.tail.prev.next.val);
