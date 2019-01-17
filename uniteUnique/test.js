const uniteUnique = require("./index");

test("uniteUnique works!", () => {
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]).length).toEqual(5);
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]).join("")).toEqual(
    "13254"
  );
});
