// @ts-nocheck
//To find a first pair from a number array whose sum is zero

// Method 1

// const sunZero = (ar) => {
//   const pair = [];
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = i + 1; j < ar.length; j++) {
//       if (ar[i] * -1 === ar[j]) {
//         pair.push([ar[i], ar[j]]);
//         return pair;
//       }
//     }
//   }
// };

// console.log(sunZero([1, 2, 3, -1, -2, -3]));

//Method 2

// const sumZero = (ar) => {
//   const pair = [];
//   for (let num of ar) {
//     if (!num || ar.length <= 0 || typeof num !== "number") {
//       return "Enter  Valid Data";
//     }
//     for (let i = 0; i < ar.length; i++) {
//       if (num + ar[i] === 0) {
//         pair.push([[num, ar[i]]]);
//       }
//     }
//   }
//   return pair;
// };
// console.log(sumZero([1, 2, 3, -2, -3]));

//Method 3

// const sumZero = (ar) => {
//   const newAr = ar.map((value) => value * -1);
//   const pair = [];
//   console.log(ar, newAr);
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === newAr[i]) {
//       pair.push([ar[i], newAr[i]]);
//     }
//   }
//   return pair;
// };
// console.log(sumZero([1, 2, 3, -2, -3]));
