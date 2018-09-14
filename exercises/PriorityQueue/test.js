const { PriorityQueue } = require("./index");

test("Enqueue works", () => {
  let ER = new PriorityQueue();
  ER.enqueue("common cold", 5);
  ER.enqueue("gunshot wound", 1);
  ER.enqueue("high fever", 4);
  ER.enqueue("broken arm", 2);
  ER.enqueue("glass in foot", 3);
  expect(ER.values[0].val).toEqual("gunshot wound");
});

test("Dequeue Works.", () => {
  let ER = new PriorityQueue();
  ER.enqueue("common cold", 5);
  ER.enqueue("gunshot wound", 1);
  ER.enqueue("high fever", 4);
  ER.enqueue("broken arm", 2);
  ER.enqueue("glass in foot", 3);
  ER.dequeue();
  expect(ER.values[0].val).toEqual("broken arm");
});
