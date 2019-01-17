const whatIsInAName = require("./index");

test("whatIsInAName works!", () => {
  expect(
    whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }).length
  ).toEqual(0);
  expect(
    whatIsInAName(
      [
        { apple: 1, bat: 2 },
        { apple: 1 },
        { apple: 1, bat: 2, cookie: 2 },
        { bat: 2 }
      ],
      { apple: 1, bat: 2 }
    ).length
  ).toEqual(2);
});
