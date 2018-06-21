// --- Directions
// Make a function that looks through an array of objects (first argument) and
// returns an array of all objects that have matching name and value pairs
// (second argument). Each name and value pair of the source object has to be
// present in the object from the collection if it is to be included in the
// returned array.
// --- Examples:
//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
//   { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1,
//   "bat": 2 })
//   should return
//  [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]

function whatIsInAName(collection, source) {}

module.exports = whatIsInAName;
