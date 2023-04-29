/**
 * @description('Sum of Two Number)
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Step:1 -write function with 2 arguments.
 * Step:1.1 -1st array and 2nd is target value.
 * Step:2 -Applly Nested for loop.
 * Step:2.1 -IN first loop i=0;i<=nums.length;i++
 * Step:2.2 -In 2nd loop we will check if element of array is number
 *           or not using isNaN and typeof
 * Step:2.3 -we will check if num[i]+num[j]===target if is it true  *
 *            then we will push this index to array
 */

const array = [3, 2, 4];
const sumOfNum = (nums, target) => {
  const result = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};
console.log(sumOfNum(array, 6));
