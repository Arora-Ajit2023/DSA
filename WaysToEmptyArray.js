// @ts-nocheck
//4 Ways to empty an array. You need to comeup with 4 different approaches

const arr = [1, 2, 3, 4, 5, 6];
// methood 1 splice method

const newArr = arr.splice(0);
console.log(arr);

// method 2 array length property

arr.length = 0;
console.log(arr);

// method 3 for loop using pop()

for (let i = arr.length - 1; i >= 0; i--) {
  arr.pop();
}
console.log(arr);

// method 3 for loop using shift()

for (let i = arr.length - 1; i >= 0; i--) {
  arr.shift();
}

console.log(arr);
