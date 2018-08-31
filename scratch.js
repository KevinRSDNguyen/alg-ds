const twoSum = (array, sum) => {
  let hashMap = {};
  let res = [];
  array.forEach(num => {
    if (hashMap[num]) {
      res.push([num, hashMap[num]]);
    } else {
      hashMap[sum - num] = num;
    }
  });
  return res;
};

console.log(twoSum([1, 2, 2, 3, 4], 4));
