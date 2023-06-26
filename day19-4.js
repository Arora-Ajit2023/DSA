// Create a new array by adding one to each elements of the existing array
const input = [1, 2, 3, 4];

// // Output
// [2, 3, 4, 5]

const NewArr = (ar) => {
  const NewArr = [];
  for (let i = 0; i < ar.length; i++) {
    NewArr.push(ar[i] * 3);
  }
  return NewArr;
};
console.log(NewArr(input));
