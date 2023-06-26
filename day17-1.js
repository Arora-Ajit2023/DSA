// Star Pattern
// *****
// ****
// ***
// **
// *

const Starpattern = (num) => {
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += '*';
    }
    str += '\n';
  }
  return str;
};

console.log(Starpattern(5));
