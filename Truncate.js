//Truncate the string upto specific character. For ex ("I am priya", 3) => "I am..."

const Truncate = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if (i > num) {
      return `${str.slice(0, i)}...`;
    }
  }
  return true;
};

console.log(Truncate('I am priya', 3));
