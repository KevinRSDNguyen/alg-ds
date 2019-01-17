const capitalize = require("./index");

test("capitalizes the first letter of each word", () => {
  expect(capitalize("I'm a little tea pot")).toEqual("I'm A Little Tea Pot");
});

test("lowercases the rest of the word", () => {
  expect(capitalize("sHoRt AnD sToUt")).toEqual("Short And Stout");
});
