const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

const ransomNote = (note, magazine) => {
  const magazineWords = magazine.split(" ");
  let hashMap = {};
  for (let i = 0; i < magazineWords.length; i++) {
    hashMap[magazineWords[i]] = hashMap[magazineWords[i]] + 1 || 1;
  }

  const noteWords = note.split(" ");
  for (let i = 0; i < noteWords.length; i++) {
    if (hashMap[noteWords[i]] > 0) {
      hashMap[noteWords[i]] = hashMap[noteWords[i]] - 1;
    } else {
      return false;
    }
  }
};
