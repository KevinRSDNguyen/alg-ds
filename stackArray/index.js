// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and 'peek'.
// 'push' should add element to stack.
// 'pop' should remove top most element in the stack and return it.
// 'peek' should ONLY return the top most element from the stack.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.peek(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }
}

module.exports = Stack;
