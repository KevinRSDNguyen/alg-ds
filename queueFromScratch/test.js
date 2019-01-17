const Queue = require("./index");

test("enqueue() correctly sets head and tail on empty queue", () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.head.value).toEqual(1);
  expect(q.tail.value).toEqual(1);
});

test("enqueue() adds elements to queue and updates size", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.size).toEqual(3);

  //Ensure linkedlist within queue updated correctly
  expect(q.head.next.value).toEqual(2);
});

test("dequeue() returns removed node and updates size", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  const removedNode = q.dequeue();
  expect(q.size).toEqual(1);
  expect(removedNode.value).toEqual(1);
});

test("dequeue() resets head and tail once queue is empty", () => {
  const q = new Queue();
  q.enqueue(1);
  q.dequeue();
  expect(q.head).toBeFalsy();
  expect(q.tail).toBeFalsy();
});

test("dequeue() returns null on empty queue", () => {
  const q = new Queue();
  expect(q.dequeue()).toBeFalsy();
});

test("Queue has behavior of first in first out", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue().value).toEqual(1);
  expect(q.dequeue().value).toEqual(2);
  expect(q.dequeue().value).toEqual(3);
  expect(q.dequeue()).toBeFalsy();
});
