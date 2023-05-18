/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable no-unreachable-loop */
// Uppercase of each first letter of a wordss

const uppercase = (str) => {
  const NewStr = str.split(' ');
  let x = ' ';

  for (let i of NewStr) {
    x += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() + ' ';
  }
  return x;
};
console.log(uppercase('hii my name is ajit'));
