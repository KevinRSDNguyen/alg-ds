const Queue = require("./index");

test("dequeue() removes element from queue and returns removed element", () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toBeFalsy();
});

test("Queue has behavior of first in first out", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  q.enqueue("Seattle");
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(q.dequeue()).toEqual("Seattle");
});

test("peek() returns next element to be removed from Queue", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  expect(q.peek()).toEqual(1);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
});
