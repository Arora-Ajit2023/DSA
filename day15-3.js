//To find the second largest number in an array

/**
 * step1:define function with parameter
 * step2:define empty object
 * step3:we will find largest number
 * Step4:after that we will find diff. with each lelment expect largest number .
 * step5:calculate diff .
 * step6:with min diff give 2nd largest.
 *
 */

//method 1

// const largest2nd = (array) => {
//   let maxNum = array[0];
//   let secondMaxNum = Number.MIN_SAFE_INTEGER;

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxNum) {
//       secondMaxNum = maxNum;
//       maxNum = array[i];
//     } else if (array[i] > secondMaxNum && array[i] < maxNum) {
//       secondMaxNum = array[i];
//     }
//   }

//   return secondMaxNum;
// };
// console.log(largest2nd([1, 3, 4, 5, 7, 2, 10, 9, 11, 10]));

//method 2
// [1, 3, 4, 5, 7, 2, 9, 10]
const largest2ndV1 = (arr) => {
  let largest = arr[0];
  let secondlargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    }

    if (arr[i] > secondlargest && arr[i] < largest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;

  // let diff = largest - arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (largest - arr[i] < diff && arr[i] !== largest) {
  //     secondlargest = arr[i];
  //   }
  // }
  // return secondlargest;
};
console.log(largest2ndV1([1, 3, 4, 5, 7, 8, 4, 2, 9, 10]));
