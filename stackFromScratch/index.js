// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop'. Adding an element to the stack should
// store it until it is removed. Hint use a Singly Linked List. Only need this.first
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }
}

module.exports = Stack;
