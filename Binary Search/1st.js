// find element in array

const findElem = (arr, MissingElm) => {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = r - l / 2;
    if (arr[mid] === MissingElm) {
      return mid;
    }
    if (arr[mid] > MissingElm) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
console.log(findElem([2, 3, 4, 10, 40], 40));
