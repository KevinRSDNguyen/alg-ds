// For the sort function we have an a and b variable. Think of it as
// previous and next. NOw we also need to return numbers of -1 or 1.
// Think of numbers as on a line. -1 is first, 1 come later.

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

// Sort the inventors by year born, oldest to youngest
const ordered = [...inventors];

// Sort the inventors by years lived, with oldest first
const oldest = [...inventors];

const people = [
  "Blake, William",
  "Blair, Tony",
  "Blair, Robert",
  "Black, Elk",
  "Birrell, Augustine",
  "Biondo, Frank",
  "Billings, Josh",
  "Biko, Steve",
  "Bierce, Ambrose",
  "Biden, Joseph",
  "Bevel, Ken",
  "Bevan, Aneurin",
  "Bethea, Erin",
  "Berry, Halle",
  "Berry, Wendell",
  "Berra, Yogi",
  "Bernhard, Sandra",
  "Berne, Eric",
  "Berlin, Irving",
  "Berle, Milton",
  "Berio, Luciano",
  "Bergman, Ingmar",
  "Berger, Ric",
  "Bentsen, Lloyd",
  "Bent, Silas",
  "Benson, Leana",
  "Bennington, Chester",
  "Benn, Tony",
  "Benjamin, Walter",
  "Benenson, Peter",
  "Benchley, Robert",
  "Ben-Gurion, David",
  "Bellow, Saul",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Beethoven, Ludwig",
  "Beecher, Henry",
  "Beddoes, Mick",
  "Beckett, Samuel",
  "Becker, Carl",
  "Beck, Glenn"
];
// Sort the people alphabetically by last name
const alpha = people;

module.exports = { ordered, oldest, alpha };
