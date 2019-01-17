const reverse = require("./index");

test("reverse() correctly reverses string", () => {
  expect(reverse("ffaa")).toEqual("aaff");
  expect(reverse("  aaff")).toEqual("ffaa  ");
});
