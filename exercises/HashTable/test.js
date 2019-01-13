const { HashTable } = require("./index");
let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("dupe", "#DDA0DD");

test("set() works and uses seperate-chaining to avoid collisions", () => {
  expect(ht.keyMap[0]).toBeTruthy();
  expect(ht.keyMap[2]).toBeFalsy();
  expect(ht.keyMap[8].length).toEqual(2);
});

test("get() works and returns the value of key, or falsy value on invalid key", () => {
  expect(ht.get("yellow")).toEqual("#FFFF00");
  expect(ht.get("woofwoof")).toBeFalsy();
});

test("keys() returns an array of all key values", () => {
  expect(ht.keys()).toEqual([
    "plum",
    "salmon",
    "dupe",
    "maroon",
    "yellow",
    "olive",
    "lightcoral",
    "mediumvioletred"
  ]);
});

test("values() returns an array of values with no dupes!", () => {
  expect(ht.values()).toEqual([
    "#DDA0DD",
    "#FA8072",
    "#800000",
    "#FFFF00",
    "#808000",
    "#F08080",
    "#C71585"
  ]);
});
