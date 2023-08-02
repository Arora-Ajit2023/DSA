//Write a program to reverse digits of a number

const reverse = (num) => {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
};
console.log(reverse(4566542));
