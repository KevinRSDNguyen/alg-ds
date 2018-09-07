const L = require("./index");
const List = L.DoubleLinkedList;
const Node = L.Node;

//dont forget to re add .skip
describe.skip("Push, add node to tail", () => {
  test("updates length", () => {
    const l = new List();
    l.push(2);
    expect(l.length).toEqual(1);
    l.push(4);
    expect(l.length).toEqual(2);
  });
  test("Works on empty list and list's head and tail are updated correctly", () => {
    const l = new List();
    l.push(2);
    expect(l.head).toEqual({ val: 2, next: null, prev: null });
    expect(l.tail).toEqual({ val: 2, next: null, prev: null });
  });

  test("works on a non empty list", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    expect(l.tail.val).toEqual(4);
    expect(l.tail.prev.val).toEqual(2);
    expect(l.tail.prev.next.val).toEqual(4);
  });
});

describe.skip("Pop, remove/update tail", () => {
  test("returns undefined if no head", () => {
    const l = new List();
    expect(l.pop()).toBeFalsy();
  });
  test("head and tail reset if pop() executed on list of length 1", () => {
    const l = new List();
    l.push(2);
    l.pop();
    expect(l.head).toBeFalsy();
    expect(l.tail).toBeFalsy();
  });
  test("Works on LinkedList length greater than one", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.pop();
    expect(l.tail.val).toEqual(2);
    expect(l.tail.next).toBeFalsy();
  });
  test("Updates length, returns the node removed, nodeRemoved has prev updated", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.push(5);
    const removedNode = l.pop();
    expect(l.length).toEqual(2);
    expect(l.tail.next).toBeFalsy();
    expect(removedNode.val).toEqual(5);
    expect(removedNode.prev).toBeFalsy();
  });
});

describe.skip("Shift, remove and update head", () => {
  test("returns undefined if length 0", () => {
    const l = new List();
    expect(l.shift()).toBeFalsy();
  });
  test("head and tail reset if pop() executed on list of length 1", () => {
    const l = new List();
    l.push(2);
    l.shift();
    expect(l.head).toBeFalsy();
    expect(l.tail).toBeFalsy();
  });
  test("Works on LinkedList length greater than one", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.shift();
    expect(l.head.val).toEqual(4);
    expect(l.head.prev).toBeFalsy();
  });
  test("Updates length, returns the node removed, nodeRemoved has been updated", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.push(5);
    const removedNode = l.shift();
    expect(l.length).toEqual(2);
    expect(removedNode.val).toEqual(2);
    expect(removedNode.next).toBeFalsy();
  });
});

describe.skip("Unshift, add Node to beginning of LinkedList", () => {
  test("Works on empty list, head and tail updated correctly", () => {
    const l = new List();
    l.unshift(2);
    expect(l.head.val).toEqual(2);
    expect(l.tail.val).toEqual(2);
  });
  test("Works on LinkedList length greater than one", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.unshift(6);
    expect(l.head.val).toEqual(6);
    expect(l.head.next.val).toEqual(2);
    expect(l.head.next.prev.val).toEqual(6);
  });
  test("Updates length", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.push(5);
    l.unshift(10);
    expect(l.length).toEqual(4);
  });
});

describe.skip("Get", () => {
  test("Does not crash on negative or out of bounds index", () => {
    const l = new List();
    l.push(2);
    expect(l.get(-1)).toBeFalsy();
    expect(l.get(1)).toBeFalsy();
  });
  test("Returns node found, optimized for doubles", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.push(6);
    l.push(8);
    l.push(10);
    const node = l.get(3);
    expect(node.val).toEqual(8);
  });
});

describe.skip("Set, set data on a node", () => {
  test("returns false on out of bounds", () => {
    const l = new List();
    l.push(2);
    expect(l.set(10, "meow")).toEqual(false);
  });
  test("Updates node and returns true", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    expect(l.set(1, "meow")).toEqual(true);
    expect(l.tail.val).toEqual("meow");
  });
});

describe.skip("Insert", () => {
  test("returns false on out of bounds", () => {
    const l = new List();
    expect(l.insert(10, "meow")).toEqual(false);
  });
  test("Works for beginning or end of list", () => {
    const l = new List();
    l.push(2);
    l.insert(0, "meow");
    expect(l.head.val).toEqual("meow");
    expect(l.head.next.val).toEqual(2);
    expect(l.head.next.prev.val).toEqual("meow");
    l.insert(2, "woof");
    expect(l.tail.val).toEqual("woof");
    expect(l.tail.prev.val).toEqual(2);
  });
  test("Works, increments length, returns true", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    const res = l.insert(1, 3);
    const fetchedNode = l.get(1);
    expect(fetchedNode.val).toEqual(3);
    expect(fetchedNode.next.val).toEqual(4);
    expect(fetchedNode.prev.val).toEqual(2);
    expect(l.head.next.val).toEqual(3);
    expect(l.tail.prev.val).toEqual(3);
    expect(l.length).toEqual(3);
    expect(res).toEqual(true);
  });
});

describe.skip("Remove", () => {
  test("returns undefined on out of bounds", () => {
    const l = new List();
    expect(l.remove(10)).toEqual(undefined);
    expect(l.remove(-10)).toEqual(undefined);
  });
  test("Works for beginning or end of list", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.remove(0);
    expect(l.head.val).toEqual(4);
    l.push(6);
    l.remove(1);
    expect(l.tail.val).toEqual(4);
  });
  test("Works, decrements length, update removedNode, return removedNode", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    l.push(6);
    const removedNode = l.remove(1);
    expect(removedNode.next).toBeFalsy();
    expect(removedNode.prev).toBeFalsy();
    expect(removedNode.val).toEqual(4);
    expect(l.length).toEqual(2);
    const head = l.get(0);
    const tail = l.get(1);
    expect(head.next.val).toEqual(6);
    expect(tail.prev.val).toEqual(2);
  });
});
