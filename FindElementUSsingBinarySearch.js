const FindElement = (ar, el) => {
  let leftIndex = 0;
  let rightIndex = ar.length - 1;

  while (leftIndex <= rightIndex) {
    const mid = leftIndex + rightIndex / 2; // 5 ,8

    if (ar[mid] === el) {
      // ar[5]=23 ,ar[8]=56
      return mid;
    } else if (ar[mid] < el) {
      // ar[5]<25,ar[8]<25
      leftIndex = mid + 1; // leftIndex=6
    } else {
      rightIndex = mid - 1;
    }
  }
  return -1;
};

const result = FindElement([2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91], 20);

if (result !== -1) {
  console.log(`Target found at index ${result}`);
} else {
  console.log('Target not found in the array.');
}
