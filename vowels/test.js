const vowels = require("./index");

test("vowels() gets correct vowel count", () => {
  expect(vowels("What")).toEqual(1);
  expect(vowels("Why")).toEqual(0);
});

test("vowels('aEiOu') is case insensitive and should return 5", () => {
  expect(vowels("aEiOu")).toEqual(5);
  expect(vowels("I am a world-class developer using iterations")).toEqual(16);
});
