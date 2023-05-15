// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
console.log(searchInsert([1, 3, 5, 6], 7));
