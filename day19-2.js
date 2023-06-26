// To find all the missing numbers from an array
//const input = [1, 2, 4, 7, 9, 10, 12];

// // Output
// [3, 4, 5];

const MissingNum = (arr) => {
  const num = [];
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        num.push(arr[i] + j);
      }
    }
  }
  return num;
};

console.log(MissingNum([1, 2, 4, 7, 9, 10, 12]));
