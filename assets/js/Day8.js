//To print all the numbers from 2 to 100

const printnum = (value1, value2) => {
  const ar = [];
  for (let i = value1; i <= value2; i++) {
    ar.push(i);
  }
  return ar;
};
console.log(printnum(2, 100));
