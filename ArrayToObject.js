// Convert an Array into an object
// const input = ["John", "Peter", "Sally", "Jane"];

// // Output
// { 0: "John", 1: "Peter", 2: "Sally", 3: "Jane" }
const input = ['John', 'Peter', 'Sally', 'Jane'];

// Method 1 Spread operator
// const obj = { ...input };
// console.log(obj);

// Method 2 For loop

// let obj = {};
// for (let i = 0; i < input.length; i++) {
//   obj[i] = input[i];
// }
// console.log(obj);

// methode 3 reduce

const newObj = input.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log(newObj);
