// N = 5
// arr[] = {1 2 3 4 5}
// K = 4
// Output: 3
// Explanation: 4 appears at index 3.

// method 1
const findNum = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
};

console.log('Method 1=>', findNum([1, 2, 3, 4, 5, 6], 7));

//Method 2
const findNumV2 = (arr, k) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = r - l / 2;
    if (arr[mid] === k) return arr[mid];
    if (arr[mid] > k) {
      l = mid - 1;
    } else {
      r = mid + 1;
    }
  }
  return -1;
};
console.log('method 2=>', findNumV2([1, 2, 3, 4, 5, 6], 6));
