const palindrome = require("./index");

test('"bcb" is a palindrome', () => {
  expect(palindrome("bcb")).toBeTruthy();
});

test('" bcb" is not a palindrome', () => {
  expect(palindrome(" bcb")).toBeFalsy();
});

test('"bcb " is not a palindrome', () => {
  expect(palindrome("bcb ")).toBeFalsy();
});

test('"love" is not a palindrome', () => {
  expect(palindrome("love")).toBeFalsy();
});

test('"699996" a palindrome', () => {
  expect(palindrome("699996")).toBeTruthy();
});

test('"Trunk knurt" is not a palindrome', () => {
  expect(palindrome("Trunk knurt")).toBeFalsy();
});

test('"racecar" a palindrome', () => {
  expect(palindrome("racecar")).toBeTruthy();
});
