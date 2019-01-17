const reverseInt = require("./index");

test("reverseInt() works on positive numbers", () => {
  expect(reverseInt(3)).toEqual(3);
  expect(reverseInt(13)).toEqual(31);
  expect(reverseInt(100)).toEqual(1);
  expect(reverseInt(1408)).toEqual(8041);
});

test("reverseInt() works on negative numbers", () => {
  expect(reverseInt(-3)).toEqual(-3);
  expect(reverseInt(-13)).toEqual(-31);
  expect(reverseInt(-100)).toEqual(-1);
  expect(reverseInt(-1408)).toEqual(-8041);
});
