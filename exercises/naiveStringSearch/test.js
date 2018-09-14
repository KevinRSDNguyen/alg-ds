const { naiveStringSearch } = require("./index");

test("naiveStringSearch works", () => {
  expect(naiveStringSearch("lorie loled", "lol")).toEqual(1);
});
