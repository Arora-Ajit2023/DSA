// @ts-nocheck

const DuplicateNum = (input) => {
  const obj = {};
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (!obj.hasOwnProperty(input[i])) {
      obj[input[i]] = input[i];
    } else {
      arr.push((input[i] = 0));
    }
  }
  return input;
};
console.log(DuplicateNum([1, 2, 3, 3, 4, 5, 6, 4, 1]));
