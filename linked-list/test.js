const L = require("./index");
const List = L.LinkedList;
const Node = L.Node;

describe.skip("A Node", () => {
  test('has properties "data" and "next"', () => {
    const node = new Node("a", "b");
    expect(node.data).toEqual("a");
    expect(node.next).toEqual("b");
  });
});

describe.skip("unshift()", () => {
  test("appends a node to the start of the list", () => {
    const l = new List();
    l.unshift(1);
    expect(l.head.data).toEqual(1);
    l.unshift(2);
    expect(l.head.data).toEqual(2);

    expect(l.head.next.data).toEqual(1);
  });
});

describe.skip("Size", () => {
  test("returns the number of items in the linked list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    expect(l.size()).toEqual(4);
  });
});

describe.skip("GetFirst", () => {
  test("returns the first element", () => {
    const l = new List();
    l.unshift(1);
    expect(l.getFirst().data).toEqual(1);
    l.unshift(2);
    expect(l.getFirst().data).toEqual(2);
  });
});

describe.skip("GetLast", () => {
  test("returns the last element", () => {
    const l = new List();
    l.unshift(2);
    expect(l.getLast()).toEqual({ data: 2, next: null });
    l.unshift(1);
    expect(l.getLast()).toEqual({ data: 2, next: null });
  });

  test("returns null on empty linkedlist", () => {
    const l = new List();
    expect(l.getLast()).toEqual(null);
  });
});

describe.skip("Clear", () => {
  test("empties out the list", () => {
    const l = new List();
    expect(l.size()).toEqual(0);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    expect(l.size()).toEqual(4);
    l.clear();
    expect(l.size()).toEqual(0);
  });
});

describe.skip("shift()", () => {
  test("shift() doesnt crash on an empty list", () => {
    expect(() => {
      const l = new List();
      l.shift("a");
    }).not.toThrow();
  });

  test("removes the first node when the list has a size of one", () => {
    const l = new List();
    l.unshift("a");
    l.shift();
    expect(l.size()).toEqual(0);
    expect(l.getFirst()).toEqual(null);
  });

  test("removes the first node and returns it", () => {
    const l = new List();
    l.unshift("c");
    l.unshift("b");
    l.unshift("a");
    expect(l.shift().data).toEqual("a");
    expect(l.size()).toEqual(2);
    expect(l.getFirst().data).toEqual("b");
    expect(l.shift().data).toEqual("b");
    expect(l.size()).toEqual(1);
    expect(l.getFirst().data).toEqual("c");
  });
});

describe.skip("pop()", () => {
  test("pop() removes the last node when list is empty", () => {
    const l = new List();
    expect(() => {
      l.pop();
    }).not.toThrow();
  });

  test("pop() removes the last node when list is length 1", () => {
    const l = new List();
    l.unshift("a");
    l.pop();
    expect(l.head).toEqual(null);
  });

  test("pop() removes the last node AND returns the removed node.", () => {
    const l = new List();
    l.unshift("b");
    l.unshift("a");

    expect(l.pop().data).toEqual("b");

    expect(l.size()).toEqual(1);
    expect(l.head.data).toEqual("a");
  });
});

describe.skip("push()", () => {
  test("adds to the end of the list", () => {
    const l = new List();
    l.unshift("a");

    l.push("b");

    expect(l.size()).toEqual(2);
    expect(l.getLast().data).toEqual("b");
  });

  test("adds to list even if empty", () => {
    const l = new List();

    l.push("b");

    expect(l.size()).toEqual(1);
    expect(l.getLast().data).toEqual("b");
  });
});

describe.skip("get()", () => {
  test("Returns falsy value on negative or out of bounds index", () => {
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
    l.push(4);

    expect(l.get(0).data).toEqual(1);
    expect(l.get(1).data).toEqual(2);
    expect(l.get(2).data).toEqual(3);
    expect(l.get(3).data).toEqual(4);
  });
});

describe.skip("set()", () => {
  test("returns falsy value on out of bounds or negative index", () => {
    const l = new List();
    l.push(2);
    expect(l.set(10, "meow")).toBeFalsy();
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

  test("removes node at index 0 correctly", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(l.get(0).data).toEqual(1);
    l.remove(0);
    expect(l.get(0).data).toEqual(2);
  });

  test("remove deletes the node at the given index", () => {
    const l = new List();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    expect(l.get(1).data).toEqual(2);
    l.remove(1);
    expect(l.get(1).data).toEqual(3);
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
    l.push("a");
    l.push("b");
    l.push("c");
    expect(l.insert(0, "hi")).toEqual(true);
    expect(l.get(0).data).toEqual("hi");
    expect(l.get(1).data).toEqual("a");
    expect(l.get(2).data).toEqual("b");
    expect(l.get(3).data).toEqual("c");
  });

  test("inserts a new node with data at a middle index", () => {
    const l = new List();
    l.push("a");
    l.push("b");
    l.push("c");
    l.push("d");
    l.insert(2, "hi");
    expect(l.get(0).data).toEqual("a");
    expect(l.get(1).data).toEqual("b");
    expect(l.get(2).data).toEqual("hi");
    expect(l.get(3).data).toEqual("c");
    expect(l.get(4).data).toEqual("d");
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

describe.skip("ForEach", () => {
  test("applies a transform to each node", () => {
    const l = new List();

    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);

    l.forEach(node => {
      node.data += 10;
    });

    expect(l.get(0).data).toEqual(11);
    expect(l.get(1).data).toEqual(12);
    expect(l.get(2).data).toEqual(13);
    expect(l.get(3).data).toEqual(14);
  });
});
