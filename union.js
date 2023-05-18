/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
// To find unique values from 2 arrays and keep into one array. i.e. Union.

const union = (ar1, ar2) => {
  if (!ar1 || !ar2 || !Array.isArray(ar1) || !Array.isArray(ar2)) {
    return 'Enter valid Input';
  }
  const arr = [...ar1];
  for (let i = 0; i < ar2.length; i++) {
    if (!arr.includes(ar2[i])) {
      arr.push(ar2[i]);
    }
  }
  return { union: arr };
};
console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 6]));

// union Method 2

const unionV2 = (ar1, ar2) => {
  const obj = {};
  for (let i of ar1) {
    if (!obj.hasOwnProperty(i)) {
      obj[i] = i;
    }
  }
  for (let x of ar2) {
    if (!obj.hasOwnProperty(x)) {
      obj[x] = x;
    }
  }
  return { unionV2: Object.values(obj) };
};
console.log(unionV2([1, 2, 3, 4], [2, 3, 4, 5, 6]));

// intersection

const intersection = (ar1, ar2) => {
  const newar = [];
  for (let x of ar2) {
    if (ar1.includes(x)) {
      newar.push(x);
    }
  }
  return {
    intersection: newar,
  };
};
console.log(intersection([1, 2, 3, 4], [2, 3, 4, 5, 6]));

// method 2
const intersectionV2 = (ar1, ar2) => {
  const obj = {};
  const result = [];
  for (let i = 0; i < ar1.length; i++) {
    if (!obj.hasOwnProperty(ar1[i])) {
      obj[ar1[i]] = i;
    }
  }
  for (let x of ar2) {
    if (obj.hasOwnProperty(x)) {
      result.push(x);
    }
  }
  return { intersectionV2: result };
};
console.log(intersectionV2([1, 2, 3, 4], [2, 3, 4, 5, 6]));
