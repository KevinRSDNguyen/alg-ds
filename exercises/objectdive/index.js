// --- Directions
// Create a function thats takes in an object and an array of strings
// THe function then finds the value for the key of the last string in the array
// If key does not exist, return a string of "No (KEYNAME)"
// --- Examples:
// const testObj = {
//   username: "Sally",
//   profile: {
//     name:"Sally Clojurian",
//     address: {
//       city: "Austin",
//       state: "TX"
//     }
//   }
// };
// objectDive(testObj, ['profile', 'address', 'zip-code']) === 'No zip-code'
// objectDive(testObj, ['profile', 'address', 'city']) === 'Austin'

function objectDive(obj, keyArr) {}

module.exports = objectDive;
