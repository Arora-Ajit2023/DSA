// Converting one dimensional array into n dimensional array using slice.
// const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);

// // Output
// [
//   ["a", "b"],
//   ["c", "d"],
// ];

const covertArryInOneDimension = (ar, num) => {
  const NewAr = [];
  for (let i = 0; i < ar.length; i = i + num) {
    NewAr.push(ar.slice(i, i + num));
  }
  return NewAr;
};
console.log(covertArryInOneDimension(['a', 'b', 'c', 'd', 'e'], 2));
