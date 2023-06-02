// @ts-nocheck
const KthElem = (ar, num) => {
  const obj = {};
  //   let count;
  //   for (let i = 0; i < ar.length; i++) {
  //     let currentValue = ar[i];
  //     if (!obj.hasOwnProperty(currentValue)) {
  //       count = 1;
  //       obj[currentValue] = count;
  //     } else {
  //       count = obj[currentValue];
  //       count += 1;
  //       obj[currentValue] = count;
  //     }
  //   }
  for (let i = 0; i < ar.length; i++) {
    const currentValue = ar[i];
    let count = 1;
    if (!obj.hasOwnProperty(currentValue)) {
      obj[currentValue] = count;
    } else {
      count = obj[currentValue];
      obj[currentValue] = count + 1;
    }
  }
  return obj;
};
console.log(KthElem([1, 1, 1, 2, 2, 3], 2));
