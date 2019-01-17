const chunk = require("./index");

test("chunk() works", () => {
  let arr = ["a", "b", "c", "d"];
  let chunked = chunk(arr, 2);
  expect(chunked).toEqual([["a", "b"], ["c", "d"]]);

  arr = [0, 1, 2, 3, 4, 5];
  chunked = chunk(arr, 4);
  expect(chunked).toEqual([[0, 1, 2, 3], [4, 5]]);
});
