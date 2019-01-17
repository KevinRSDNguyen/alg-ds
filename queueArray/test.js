const Queue = require("./index");

test("enqueue() adds elements to a queue", () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.data.includes(1)).toBeTruthy();
});

test("dequeue() removes element from queue and returns removed element", () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.dequeue()).toEqual(1);
  expect(q.data.includes(1)).toBeFalsy();
});

test("Queue has behavior of first in first out", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(q.dequeue()).toEqual(undefined);
});
