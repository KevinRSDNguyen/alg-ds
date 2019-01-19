const Stack = require("./index");

test("push() adds elements to a stack", () => {
  const s = new Stack();
  s.push(1);
  expect(s.data.includes(1)).toBeTruthy();
});

test("pop() removes element from stack and returns removed element.", () => {
  const s = new Stack();
  s.push(1);
  expect(s.pop()).toEqual(1);
  expect(s.data.includes(1)).toBeFalsy();
});

test("peek() returns the next element to be popped but doesnt pop it", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.peek()).toEqual(3);
  expect(s.pop()).toEqual(3);
});

test("Stack has behavior of first in last out", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  expect(s.pop()).toEqual(3);
  expect(s.pop()).toEqual(2);
  expect(s.pop()).toEqual(1);
});
