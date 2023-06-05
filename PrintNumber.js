// Print of all numbers from start to end given number
// printSeries(1, 4);

// // Output
// 1;
// 2;
// 3;

const printSeries = (start, end) => {
  if (!start || !end) {
    return 'Enter Valid Number';
  }

  if (!Number.isNaN(start) || !Number.isNaN(end)) {
    return 'Enter Valid Number ';
  }
  if (start <= 0 || end < 0) {
    return 'Enter greater value than 0';
  }

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};
console.log(printSeries('1', 4));
