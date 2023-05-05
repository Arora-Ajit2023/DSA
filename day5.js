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
  const pair = [];
  let largestValue = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] + input[j] < largestValue) {
        largestValue = input[i] + input[j];
        pair.push(input[i], input[j]);
      }
    }
  }
  return pair;
};
console.log(LargestPair([1, 2, 7, 5, 4, 7, 9]));
