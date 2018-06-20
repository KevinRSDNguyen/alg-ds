const objectDive = require("./index");

const testObj = {
  username: "Sally",
  profile: {
    name: "Sally Clojurian",
    address: {
      city: "Austin",
      state: "TX"
    }
  }
};

test("objectDive finds a valid value", () => {
  expect(objectDive(testObj, ["profile", "name"])).toEqual("Sally Clojurian");
});

test("objectDive can handle wrong keys", () => {
  expect(objectDive(testObj, ["profile", "address", "zip-code"])).toEqual(
    "No zip-code"
  );
});
