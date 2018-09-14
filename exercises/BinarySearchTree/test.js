const { BinarySearchTree } = require("./index");

describe.skip("Insert", () => {
  test("Does not insert if value is equal to another value in BST", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(5);
    BST.insert(15);
    BST.insert(17);
    BST.insert(17);

    expect(BST.root.left.value).toEqual(5);
    expect(BST.root.right.value).toEqual(15);
    expect(BST.root.right.right.value).toEqual(17);
    expect(BST.root.right.right.right).toBeFalsy();
    expect(BST.root.right.right.left).toBeFalsy();
  });

  test("Inserts correctly", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(5);
    BST.insert(15);
    BST.insert(17);

    expect(BST.root.left.value).toEqual(5);
    expect(BST.root.right.value).toEqual(15);
    expect(BST.root.right.right.value).toEqual(17);
  });
});

describe.skip("Find", () => {
  test("Find returns node with the same data", () => {
    const node = new BinarySearchTree();
    node.insert(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    const three = node.root.left.left.right;
    expect(node.find(3)).toEqual(three);
  });

  test("Find returns falsy value if value not found", () => {
    const node = new BinarySearchTree();
    node.insert(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    expect(node.find(9999)).toBeFalsy();
  });
});

describe.skip("BFS", () => {
  test("Works on empty tree", () => {
    const BST = new BinarySearchTree();
    expect(BST.BFS()).toEqual([]);
  });
  test("Can traverse bf", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(15);
    BST.insert(6);
    BST.insert(8);
    BST.insert(3);
    BST.insert(20);
    const res = BST.BFS();

    expect(res).toEqual([10, 6, 15, 3, 8, 20]);
  });
});

describe.skip("DFS", () => {
  test("Works on empty tree", () => {
    const BST = new BinarySearchTree();
    expect(BST.DFS()).toEqual([]);
  });
  test("Can traverse df", () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(15);
    BST.insert(6);
    BST.insert(8);
    BST.insert(3);
    BST.insert(20);
    const res = BST.DFS();

    expect(res).toEqual([10, 6, 3, 8, 15, 20]);
  });
});
