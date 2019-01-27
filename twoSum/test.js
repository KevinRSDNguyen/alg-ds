const twoSum = require("./index");

test("twoSum([7, 0, -4, 5, 2, 3], 5) works.", () => {
  const expected1 = [0, 5];
  const expected2 = [3, 2];

  expect(twoSum([7, 0, -4, 5, 2, 3], 5)[0]).toEqual(
    expect.arrayContaining(expected1)
  );

  expect(twoSum([7, 0, -4, 5, 2, 3], 5)[1]).toEqual(
    expect.arrayContaining(expected2)
  );

  expect(twoSum([7, 0, -4, 5, 2, 3], 5).length).toEqual(2);
});

test("twoSum([3, 5, 2, -4, 8, 11], 7) works.", () => {
  const expected1 = [2, 5];
  const expected2 = [11, -4];

  expect(twoSum([3, 5, 2, -4, 8, 11], 7)[0]).toEqual(
    expect.arrayContaining(expected1)
  );

  expect(twoSum([3, 5, 2, -4, 8, 11], 7)[1]).toEqual(
    expect.arrayContaining(expected2)
  );

  expect(twoSum([3, 5, 2, -4, 8, 11], 7).length).toEqual(2);
});

test("twoSum([2], 4) works.", () => {
  expect(twoSum([2], 4).length).toEqual(0);
});
