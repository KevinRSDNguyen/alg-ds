// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Extra hint have enqueue and dequeue call bubbleUp and sinkDown respectively
// Extra hint. You can copy most of the code from Binary Heap!
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
}

module.exports = { PriorityQueue };
