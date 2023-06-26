// Star Pattern
// *****
// *****
// *****
// *****
// *****

const StarPattern = (num) => {
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
};
console.log(StarPattern(5));
