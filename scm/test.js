const smallestCommons = require("./index");

test("smallestCommons works!", () => {
  expect(smallestCommons([1, 5])).toEqual(60);
  expect(smallestCommons([5, 1])).toEqual(60);
});
