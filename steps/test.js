const steps = require("./index");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("steps() works", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
  expect(console.log.mock.calls.length).toEqual(3);
});
