const Stack = require("./index");

test("push adds item and updates size", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  expect(s.size).toEqual(2);
  expect(s.first.value).toEqual(2);
});

test("pop removes items and updates size", () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  expect(s.size).toEqual(0);
  s.push(2);
  expect(s.pop()).toEqual(2);
});

test("stack can follows first in, last out", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});
