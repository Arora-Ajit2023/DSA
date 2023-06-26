// Print consecutive numbers
// const input =
//   getConsecutiveNumbers(10)[
//     // Output
//     (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//   ];

function getConsecutiveNumbers(input) {
  let arr = [];
  for (let i = 1; i < input; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(getConsecutiveNumbers(10));
