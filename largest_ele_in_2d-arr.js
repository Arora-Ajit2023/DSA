//To find the largest elements fro the 2 dimensional array.
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

// o/p:[4, 9, 76, 90];

const largesrElem = (value) => {
  const result = [];
  for (let i = 0; i < value.length; i++) {
    let largestNum = 0;
    for (let j = 0; j < value[i].length; j++) {
      if (largestNum < value[i][j]) {
        largestNum = value[i][j];
      }
    }
    result.push(largestNum);
  }
  return result;
};
console.log(largesrElem(input));
