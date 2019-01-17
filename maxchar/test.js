const maxChar = require("./index");

test("maxChar() finds the most frequently used character", () => {
  expect(maxChar("a")).toEqual("a");
  expect(maxChar("test")).toEqual("t");
  expect(maxChar("I loveeeeee noodles")).toEqual("e");
  expect(maxChar("1337")).toEqual("3");
});
