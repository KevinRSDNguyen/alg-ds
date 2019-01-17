const shortenString = require("./index");

test("shortenString works", () => {
  expect(shortenString("aaabccdda")).toEqual("{a3}b{c2}{d2}a");
});
