const midpoint = require("./index");
const L = require("./linkedlist");
const Node = L.Node;
const LinkedList = L.LinkedList;

describe("Returns the middle node of list with odd number of nodes", () => {
  test("on list with 5 nodes.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    l.push(5);
    expect(midpoint(l).data).toEqual(3);
  });
});

describe("Returns the middle node of list with even number of nodes", () => {
  test("on list with 4 nodes.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(midpoint(l).data).toEqual(2);
  });
});
