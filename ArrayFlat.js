// @ts-nocheck
const flatAnArray = (array) => {
  let result = [];

  // Todo : Define a level

  const recursiveFunction = (arr) => {
    for (const key in arr) {
      if (Array.isArray(arr[key])) {
        recursiveFunction(arr[key]);
      } else {
        result.push(arr[key]);
      }
    }
  };
  recursiveFunction(array);
  return result;
};
console.log(flatAnArray([1, 2, [3, [4], [5, 6]], [7]]));
