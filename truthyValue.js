// To find only truthy values from an array.
// const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

// // Output
// ["priya", "ate", 9];

const truthy = (ar) => {
  const truthyAr = [];

  for (let item of ar) {
    if (item) {
      truthyAr.push(item);
    }
  }
  return truthyAr;
};
console.log(truthy(['priya', 0, '', false, null, undefined, 'ate', NaN, 9]));

// for falsy value

const falsy = (ar) => {
  const falseAr = [];

  for (let item of ar) {
    if (!item) {
      falseAr.push(item);
    }
  }
  return falseAr;
};
console.log(falsy(['priya', 0, '', false, null, undefined, 'ate', NaN, 9]));
