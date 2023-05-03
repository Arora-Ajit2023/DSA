// @ts-nocheck
// Check if a string is an Palindrm

const Palindrom = (input) => {
  let NewStr;
  if (typeof input === 'string') {
    NewStr = input.toLocaleLowerCase();
  }
  if (typeof input === 'number') {
    NewStr = String(input).split('');
  }
  for (let i = 0; i < NewStr.length / 2; i++) {
    if (NewStr[i] === NewStr[NewStr.length - 1 - i]) {
      return 'String in Palindrom';
    }
  }
  return 'Not Palindrom';
};
console.log(Palindrom('111'));
