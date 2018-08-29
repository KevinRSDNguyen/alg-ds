const exampleStr = "aaabccdda";

const shortenString = str => {
  const splitStr = str.split("");
  let repeat = 1;
  let res = "";

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i + 1]) {
      repeat++;
    } else {
      const shortened = repeat > 1 ? `{${splitStr[i]}${repeat}}` : splitStr[i];
      res += shortened;
      repeat = 1;
    }
  }
  return res;
};

console.log(shortenString(exampleStr));
