const { ordered, oldest, alpha } = require("./index.js");

test("ordered variable should sort inventors by year born", () => {
  expect(ordered[2].year).toEqual(1571);
  expect(ordered[8].first).toEqual("Marie");
});

test("oldest variable should sort inventors by year born", () => {
  expect(oldest[2].year).toEqual(1643);
  expect(ordered[8].first).toEqual("Marie");
});

test("alpha should sort by last names", () => {
  expect(alpha[2]).toEqual("Beckett, Samuel");
  expect(alpha[8]).toEqual("Bellow, Saul");
});
