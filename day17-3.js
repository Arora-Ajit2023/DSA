// Number Pattern
// 11111
// 2222
// 333
// 44
// 5

const stringPattern = (num) => {
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += i + 1;
    }
    str += '\n';
  }
  return str;
};
// console.log(stringPattern(5));

// Star Pattern
// *
// **
// ***
// ****
// *****

const stringPatternV1 = (num) => {
  let str = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
};
console.log(stringPatternV1(5));
