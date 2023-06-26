// To find the maximum repetation of the character in a string

// // Output
// {
//     character: 'c',
//     count: 18
// }

const input = 'aaaabbaaccccccccccccccccccde';

const MaxRep = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = count;
    }
  }
  return obj;
};
console.log(MaxRep(input));
