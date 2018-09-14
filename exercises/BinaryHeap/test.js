const { BinaryHeap } = require("./index");

describe.skip("Insert", () => {
  test("Works. Hint use a bubbleup helper method in same class", () => {
    const BH = new BinaryHeap();
    BH.insert(41);
    BH.insert(39);
    BH.insert(33);
    BH.insert(18);
    BH.insert(27);
    BH.insert(12);
    BH.insert(55);
    expect(BH.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });
});

describe.skip("ExtractMax. Hint use a sinkDown helper method in same class", () => {
  test("Works.", () => {
    const BH = new BinaryHeap();
    BH.insert(41);
    BH.insert(39);
    BH.insert(33);
    BH.insert(18);
    BH.insert(27);
    BH.insert(12);
    BH.extractMax();
    expect(BH.values).toEqual([39, 27, 33, 18, 12]);
  });
});
