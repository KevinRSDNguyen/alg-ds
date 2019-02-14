const fromLast = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

test("fromLast() works", () => {
  const l = new List();

  l.push(1);
  l.push(2);
  l.push(3);
  l.push(4);
  l.push(5);

  expect(fromLast(l, 3).data).toEqual(2);
});

test("fromLast(list, steps) returns null on out of bound steps", () => {
  const l = new List();

  l.push("A");
  l.push("B");
  l.push("C");
  l.push("D");
  l.push("E");

  expect(fromLast(l, 1000)).toBeFalsy();
});
