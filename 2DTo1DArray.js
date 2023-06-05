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
  for (let i = 0; i > ar.length; i++) {
    console.log('ar', i);
  }
};
console.log(ConverAr(arr));
