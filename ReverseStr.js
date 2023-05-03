// String reverse without reversing of individual words

const StringReverse = (str) => {
  let NewString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    NewString += str[i];
  }
  return { NewString };
};
console.log(StringReverse('Ajit'));
