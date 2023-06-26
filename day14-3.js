// @ts-nocheck
// Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
// // input
const arr = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f'],
];

// // Output
// ["a", "b", "c", "d", "e", "f"];

const newArr = (input) => {
  const newAr = input.reduce((acc, crr) => {
    for (let i = 0; i < crr.length; i++) {
      acc.push(crr[i]);
    }
    return acc;
  }, []);
  return newAr;
};
console.log(newArr(arr));
