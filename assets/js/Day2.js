// @ts-nocheck
// 1.String reverse without using inbult function
// const reverse = (strg) => {
//   const newStr = strg.split("");
//   console.log(newStr);
//   console.log(newStr.reverse().join(""));
// };
// reverse("My name is Ajit");

//2.Find factorial of user input number

// const factorial = (inputvalue) => {
//   if (typeof inputvalue !== "number") {
//     console.log("ENTER VALID NUMBER");
//   } else if (inputvalue < 0) {
//     console.log("cannot find factorial of negative number");
//   }
//   if (inputvalue > 1) {
//     let fact = 1;
//     for (let i = 1; i <= inputvalue; i++) {
//       fact *= i;
//     }
//     return fact;
//   }
// };
// console.log(factorial(5));

//3.Check if a string is an Anagram

// const checkAnagram = (value1, value2) => {
//   if (typeof value1 !== "string" && typeof value2 !== "string") {
//     console.log("Enter valid value");
//   }
//   const arr1 = value1.split("");
//   const arr2 = value2.split("");
//   console.log(arr1, arr2);
//   if (arr1.length != arr2.length) {
//     console.log("String is not anagram");
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       console.log("String is  anagram");
//     } else {
//       console.log("String is not  anagram");
//       return;
//     }
//   }
// };
// checkAnagram("car", "rca");

//4.Swapping of 2 numbers with third variable

// let a = 4;
// let b = 5;
// let c;

// c = a;
// a = b;
// b = c;
// console.log(a, b, c);

//5.Swapping of 2 numbers without third variable
