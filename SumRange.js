// @ts-nocheck
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

const Range = (arr, n, k) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum = arr[i] + arr[j];
      if (sum === k) {
        return [i, j];
      }
    }
  }
};
console.log(Range([1, 2, 3, 7, 5], 5, 12));
