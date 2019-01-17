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
  ER.enqueue("gunshot wound", 5);
  ER.enqueue("heart attack", 9);
  ER.enqueue("stomach cramp", 11);
  ER.enqueue("migraine", 14);
  ER.enqueue("fever", 18);
  ER.enqueue("back pain", 19);
  ER.enqueue("coughing", 21);
  ER.enqueue("headache", 33);
  ER.enqueue("food poisoning", 17);
  ER.enqueue("sore throat", 27);

  ER.dequeue();
  expect(ER.values.map(node => node.val)).toEqual([
    "heart attack",
    "migraine",
    "stomach cramp",
    "food poisoning",
    "fever",
    "back pain",
    "coughing",
    "headache",
    "sore throat"
  ]);
});
