const twoSum = require("./index");

test("twoSum works", () => {
  expect(twoSum([1, 2, 2, 3, 4], 4)[0][1]).toEqual(2);
  expect(twoSum([1, 2, 2, 3, 4], 4).length).toEqual(2);
});
