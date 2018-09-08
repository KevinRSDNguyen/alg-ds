const Queue = require("./index");

test("enqueue adds elements to a queue and updates size", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.size).toEqual(3);

  //Ensure linkedlist within queue updated correctly
  expect(q.first.next.value).toEqual(2);
  expect(q.last.value).toEqual(3);
});

test("can remove elements from a queue", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  const removedVal = q.dequeue();
  expect(q.size).toEqual(1);
  expect(removedVal).toEqual(1);
});

test("Order of elements is maintained", () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(q.dequeue()).toBeFalsy();
});
