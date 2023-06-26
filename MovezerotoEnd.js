// Move all the zeroes at the end of an elements
// const input = [1, 0, 2, 0, 0, 9, 0, 6, 7];

// // Output
// [1, 2, 9, 6, 7, 0, 0, 0, 0];

const arr = [1, 0, 2, 0, 0, 9, 0, 6, 7];
const arr1 = [];
const arr2 = [];
let newAr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr2.push(arr[i]);
  } else {
    arr1.push(arr[i]);
  }
  newAr = [...arr1, ...arr2];
}
console.log(newAr);
