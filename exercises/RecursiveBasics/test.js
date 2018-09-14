const { power, factorial, productOfArray, reverse } = require("./index");

test("power works", () => {
  expect(power(2, 0)).toEqual(1);
  expect(power(2, 2)).toEqual(4);
  expect(power(2, 4)).toEqual(16);
});

test("factorial works", () => {
  expect(factorial(3)).toEqual(6);
  expect(factorial(6)).toEqual(720);
});

test("productOfArray works", () => {
  expect(productOfArray([1, 2, 3])).toEqual(6);
  expect(productOfArray([1, 2, 3, 10])).toEqual(60);
});

test("reverse works", () => {
  expect(reverse("racecar")).toEqual("racecar");
  expect(reverse("abc")).toEqual("cba");
});
