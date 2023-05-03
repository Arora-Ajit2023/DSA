// Remove Duplicate characters from String

const RemoveDuplicateChar = (str) => {
  if (typeof str !== 'string' || !str) {
    return 'Not Valid Input';
  }
  const obj = {};
  let NewStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = i;
      NewStr += str[i];
    }
  }
  return { NewStr, obj };
};
console.log(RemoveDuplicateChar('hello'));
