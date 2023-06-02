//Converting one dimensional array into n dimensional array using slice.

//const input = covertArryInOneDimension(['a', 'b', 'c', 'd'], 2);

// Output
// [
//   ['a', 'b'],
//   ['c', 'd'],
// ];

const covertArryInOneDimension = (ar, num) => {
  const result = [];
  if (ar.length <= num) {
    result.push(ar);
    return result;
  }

  for (let i = 0; i < ar.length; i++) {
    result.push(ar.splice(i, num));
  }
  return result;
};

console.log(covertArryInOneDimension(['a', 'b', 'c', 'd'], 2));
