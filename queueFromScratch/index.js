// Create a queue data structure.  The queue should
// have methods 'enqueue' and 'dequeue'. 'enqueue' should add
// to Queue while 'dequeue' removes from the queue AND returns
// the removed element. Make sure the Queue follows 'first-in first-out'
// --- Examples
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.dequeue() --> 1;

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
