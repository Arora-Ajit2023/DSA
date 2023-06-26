//Converting one dimensional array into n dimensional array using slice.

//const input = covertArryInOneDimension(['a', 'b', 'c', 'd'], 2);

// Output
// [
//   ['a', 'b'],
//   ['c', 'd'],
// ];

const covertArryInOneDimension = (ar, num) => {
  const result = [];

  for (let i = 0; i < ar.length; i + num) {
    result.push(ar.splice(i, num));
  }
  return result;
};

console.log(covertArryInOneDimension(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));
