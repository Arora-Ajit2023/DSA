// @ts-nocheck
//Reverse of a nuber using converting into string with or withour builtin methods

const reverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
