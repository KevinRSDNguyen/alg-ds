const anagrams = require("./index.js");

test("anagrams() works if case sensitivity and non word characters NOT taken into account", () => {
  expect(anagrams("earth", "heart")).toBeTruthy();
  expect(anagrams("lol", "lolc")).toBeFalsy();
});

test('anagrams() is case insensitive. "HEART" and "earth" should return true', () => {
  expect(anagrams("HEART", "earth")).toBeTruthy();
  expect(anagrams("lol", "lolc")).toBeFalsy();
});

test('anagrams() only matches word characters. "heart!" and "  earth" should return true', () => {
  expect(anagrams("heart!", "  earth")).toBeTruthy();
  expect(anagrams("lol", "lolc")).toBeFalsy();
});
