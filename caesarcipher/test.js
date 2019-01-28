const caeserCipher = require("./index.js");

test("caeserCipher() shifts letters correctly.", () => {
  expect(caeserCipher("abcd", 1)).toEqual("bcde");
  expect(caeserCipher("yz", 1)).toEqual("za");
  expect(caeserCipher("abcd", 100)).toEqual("wxyz");
});

test("caeserCipher() does not shift digits or other characters such as '!'.", () => {
  expect(caeserCipher("gurer ner 9 qbtf!", 13)).toEqual("there are 9 dogs!");
});

test("caeserCipher() is case sensitive, and properly capitalizes the right words.", () => {
  expect(caeserCipher("V ybir WninFpevcg!", 13)).toEqual("I love JavaScript!");
});
