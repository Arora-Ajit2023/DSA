// Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
// // input
const arr = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f'],
];

// // Output
// ["a", "b", "c", "d", "e", "f"];

const ConverAr = (ar) => {
  const newArr = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar[i].length; j++) {
      newArr.push(ar[i][j]);
    }
  }
  return newArr;
};
console.log(ConverAr(arr));
