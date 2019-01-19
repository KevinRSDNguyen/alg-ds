// --- Directions
// Create a Queue data structure using two stacks. The queue
// should have methods 'enqueue' and 'dequeue' which add / remove
// elements from the queue AND also maintain 'first-in first-out'
// The Queue should also have a 'peek' method that shows next item
// to be dequeued from Queue, but does NOT dequeue.
// --- Examples
//     const q = new Queue();
//     q.enqueue(1);
//     q.enqueue(2);
//     q.peek();  // returns 1
//     q.dequeue(); // returns 1
//     q.dequeue(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
}

module.exports = Queue;
