const L = require("./index");
const List = L.LinkedList;
const Node = L.Node;

describe.skip("A Node", () => {
  test("has properties 'data' and 'next'", () => {
    const node = new Node(1, 2);
    expect(node.data).toEqual(1);
    expect(node.next).toEqual(2);
  });
});

describe.skip("unshift()", () => {
  test("adds node to start of list and correctly sets 'next' property", () => {
    const l = new List();
    l.unshift(1);
    expect(l.head.data).toEqual(1);
    l.unshift(2);
    expect(l.head.data).toEqual(2);

    expect(l.head.next.data).toEqual(1);
  });
});

describe.skip("size()", () => {
  test("returns number of nodes in linked list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.unshift("a");
    expect(l.size()).toEqual(1);
    l.unshift("b");
    expect(l.size()).toEqual(2);
    l.unshift("c");
    expect(l.size()).toEqual(3);
  });
});

describe.skip("getFirst()", () => {
  test("returns the first node in linked list", () => {
    const l = new List();
    expect(l.getFirst()).toBeFalsy();
    l.unshift(1);
    expect(l.getFirst().data).toEqual(1);
    l.unshift(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe.skip("getLast()", () => {
  test("does not crash AND returns falsy value on empty list.", () => {
    const l = new List();
    expect(l.getLast()).toEqual(null);
  });
  test("returns the last node in linked list.", () => {
    const l = new List();
    l.unshift(1);
    expect(l.getLast().data).toEqual(1);
    l.unshift(2);
    expect(l.getLast().data).toEqual(1);
  });
});

describe.skip("clear()", () => {
  test("clears out the linked list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    expect(l.size()).toEqual(3);
    l.clear();
    expect(l.size()).toEqual(0);
    expect(l.head).toBeFalsy();
  });
});

describe.skip("shift()", () => {
  test("does not crash AND returns falsy value on empty list", () => {
    const l = new List();
    expect(l.shift()).toBeFalsy();
  });

  test("removes the first node AND returns it when linked list has only one node.", () => {
    const l = new List();
    l.unshift(1);
    expect(l.shift().data).toEqual(1);
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toBeFalsy();
  });

  test("removes the first node and returns it", () => {
    const l = new List();
    l.unshift(3);
    l.unshift(2);
    l.unshift(1);
    expect(l.shift().data).toEqual(1);
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual(2);
    expect(l.shift().data).toEqual(2);
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual(3);
  });
});

describe.skip("pop()", () => {
  test("does not crash AND returns null on empty list", () => {
    const l = new List();
    expect(l.pop()).toEqual(null);
  });

  test("removes last node correctly AND returns it on linked-list with only one node", () => {
    const l = new List();
    l.unshift(1);
    expect(l.pop().data).toEqual(1);
    expect(l.head).toEqual(null);
  });

  test("removes the last node AND returns the removed node.", () => {
    const l = new List();
    l.unshift("b");
    l.unshift("a");

    expect(l.pop().data).toEqual("b");

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual("a");
  });
});

describe.skip("push()", () => {
  test("adds to end of empty list without crashing", () => {
    const l = new List();

    l.push(1);

    expect(l.size()).toEqual(1);
    expect(l.getLast().data).toEqual(1);
  });
  test("adds to the end of the list", () => {
    const l = new List();
    l.unshift(1);

    l.push(2);

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual(2);
  });
});

describe.skip("get()", () => {
  test("returns falsy value on negative or out of bounds index", () => {
    const l = new List();
    l.push(2);
    expect(l.get(-1)).toBeFalsy();
    expect(l.get(1)).toBeFalsy();
  });

  test("returns the node at given index", () => {
    const l = new List();

    l.push(1);
    l.push(2);
    l.push(3);

    expect(l.get(0).data).toEqual(1);
    expect(l.get(1).data).toEqual(2);
    expect(l.get(2).data).toEqual(3);
  });
});

describe.skip("set()", () => {
  test("returns falsy value on out of bounds or negative index", () => {
    const l = new List();
    l.push(2);
    expect(l.set(1, "meow")).toBeFalsy();
    expect(l.set(-10, "meow")).toBeFalsy();
  });
  test("Updates node and returns true", () => {
    const l = new List();
    l.push(2);
    l.push(4);
    expect(l.set(1, "meow")).toEqual(true);
    expect(l.getLast().data).toEqual("meow");
  });
});

describe.skip("remove()", () => {
  test("returns falsy value on out of bounds OR negative index", () => {
    const l = new List();
    l.push(2);
    expect(l.remove(-1)).toBeFalsy();
    expect(l.remove(1)).toBeFalsy();
  });

  test("removes node at index 0 AND returns removed node.", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(l.get(0).data).toEqual(1);
    expect(l.remove(0).data).toEqual(1);
    expect(l.get(0).data).toEqual(2);
  });

  test("removes the node and returns it at given index", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(l.get(3).data).toEqual(4);
    expect(l.remove(3).data).toEqual(4);
    expect(l.get(3)).toBeFalsy();
  });
});

describe.skip("insert()", () => {
  test("returns false on index greater than length or negative index", () => {
    const l = new List();
    expect(l.insert(1, "meow")).toEqual(false);
    expect(l.insert(-10, "meow")).toEqual(false);
  });

  test("inserts node at 0 index correctly and returns true", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    expect(l.insert(0, "kevin")).toEqual(true);
    expect(l.get(0).data).toEqual("kevin");
    expect(l.get(1).data).toEqual(1);
    expect(l.get(2).data).toEqual(2);
    expect(l.get(3).data).toEqual(3);
  });

  test("inserts a new node at given index and returns true", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(l.insert(2, "kevin")).toEqual(true);
    expect(l.get(0).data).toEqual(1);
    expect(l.get(1).data).toEqual(2);
    expect(l.get(2).data).toEqual("kevin");
    expect(l.get(3).data).toEqual(3);
    expect(l.get(4).data).toEqual(4);
  });
});

describe.skip("reverse()", () => {
  test("reverses the list", () => {
    const l = new List();

    l.push(1);
    l.push(2);
    l.push(3);

    l.reverse();

    expect(l.get(0).data).toEqual(3);
    expect(l.get(1).data).toEqual(2);
    expect(l.get(2).data).toEqual(1);
  });
});

describe.skip("forEach()", () => {
  test("calls function provided to it on each node", () => {
    const l = new List();

    l.push(1);
    l.push(2);
    l.push(3);

    l.forEach(node => {
      node.data += 1;
    });

    expect(l.get(0).data).toEqual(2);
    expect(l.get(1).data).toEqual(3);
    expect(l.get(2).data).toEqual(4);
  });
});
