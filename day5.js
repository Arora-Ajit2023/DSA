/**
 * @description(To find the largest pair of the 2 elements using indexing with * unsorted elements)
 *
 * input=[1,2,7,5,4,7,9]
 * output=[7,9]
 *
 *
 */
const LargestPair = (input) => {
  if (!Array.isArray(input)) {
    return 'Enter Valid Input';
  }

  const pairObj = {};
  let largestSum = 0;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] > largestSum) {
        pairObj.pair = [i, j];
        largestSum = input[i] + input[j];
      }
    }
  }
  return pairObj.pair;
};
console.log(LargestPair([5, 7, 8, 9, 2, 4, 5, 4, 4]));

/**
 * @description(To find a first pair from a number array whose sum is zero)
 *
 * Step1:define function.
 * Step2:define empty array to store the pair
 * Step3:Apply for loop i=0;i<ar.length;i++
 * Step3.1:Apply for loop j=0;j<ar.length;j++
 * Step3.2:check if Sum of i and j is zero
 * Step3.3:If true push that pair to array.
 *
 */
//method 1
const SumPair = (ar) => {
  const arr = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] + ar[j] === 0) {
        arr.push([ar[i], ar[j]]);
      }
    }
  }
  return arr;
};
console.log(SumPair([1, 2, -2, 7, -7, -2]));
