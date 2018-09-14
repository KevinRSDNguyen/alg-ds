// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Extra hint have insert and extractMax call bubbleUp and sinkDown respectively
class BinaryHeap {
  constructor() {
    this.values = [];
  }
}

module.exports = { BinaryHeap };
