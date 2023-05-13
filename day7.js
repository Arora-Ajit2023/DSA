//Finding a missing elements in an array and then add with existing elements.
const findMissing = (ar) => {
  const missing = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i + 1] - ar[i] >= 1) {
      const diff = ar[i + 1] - ar[i];
      for (let j = 1; j < diff; j++) {
        missing.push(ar[i] + j);
      }
    }
  }
  return missing;
};
console.log(findMissing([1, 2, 4, 5, 6, 8, 9]));
