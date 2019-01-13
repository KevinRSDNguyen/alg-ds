// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'enqueue' and 'dequeue'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.enqueue(1);
//     q.dequeue(); // returns 1;

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    //Think of first and last in terms of linkedlist NOT a queue
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

module.exports = Queue;
