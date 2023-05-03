// To find longest word from a string using (for of Loop) means iterate by an
//elements not by indexing

const logestStr = (input) => {
  if (typeof input !== 'string' || !input) {
    return 'Not valid Input';
  }

  const newStr = input.split(' ');
  let logestStr1 = 0;
  let logestWord = '';
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > logestStr1) {
      logestWord = newStr[i];
      logestStr1 = newStr[i].length;
    }
  }
  return { logestStr1, logestWord };
};
console.log(logestStr('Hii My Name is Ajit_Arora'));
