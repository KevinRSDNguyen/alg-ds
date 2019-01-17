const { getDigit, digitCount, mostDigits, radixSort } = require("./index");

test("getDigit Helper method works", () => {
  expect(getDigit(12345, 0)).toEqual(5); // 5
  expect(getDigit(12345, 1)).toEqual(4); // 4
  expect(getDigit(12345, 2)).toEqual(3); // 3
  expect(getDigit(12345, 3)).toEqual(2); // 2
  expect(getDigit(12345, 4)).toEqual(1); // 1
  expect(getDigit(12345, 5)).toEqual(0); // 0
  expect(getDigit(1, 5)).toEqual(0);
});

test("digitCount Helper method works", () => {
  expect(digitCount(1)).toEqual(1);
  expect(digitCount(25)).toEqual(2);
  expect(digitCount(314)).toEqual(3);
});

test("mostDigits Helper method works", () => {
  expect(mostDigits([1234, 56, 7])).toEqual(4);
  expect(mostDigits([1, 1, 11111, 1])).toEqual(5);
  expect(mostDigits([12, 34, 56, 78])).toEqual(2);
});

test("radix sort works", () => {
  expect(radixSort([23, 345, 5467, 12, 2345, 9852])).toEqual([
    12,
    23,
    345,
    2345,
    5467,
    9852
  ]);
});
