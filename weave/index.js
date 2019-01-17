// Create a 'weave' function that takes two queues as
// arguments and combines the contents of both into a new, third queue.
// The third queue should have alternating content of
// the two queues, like a zipper. weave() should also handle
// queues of different lengths without inserting 'undefined'
// if one of the two queues provided "runs out" of elements.
// --- Example
// const one = new Queue();
// one.enqueue(1);
// one.enqueue(2);
// one.enqueue(3);
// one.enqueue(4);
// const two = new Queue();
// two.enqueue("one");
// two.enqueue("two");

// const result = weave(one, two);
// result.dequeue() --> 1
// result.dequeue() --> "one"
// result.dequeue() --> 2
// result.dequeue() --> "two"
// result.dequeue() --> 3
// result.dequeue() --> 4

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {}

module.exports = weave;
