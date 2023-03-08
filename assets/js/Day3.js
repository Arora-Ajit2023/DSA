// // 1.To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

// const isPalindrome = (input) => {
//   let newAr;
//   if (typeof input !== "string") {
//     let newInput = input.toString();
//     newAr = newInput.split("");
//   } else {
//     newAr = input.split("");
//   }
//   console.log(newAr);
//   const newInputAr = [];
//   for (let i = newAr.length - 1; i >= 0; i--) {
//     newInputAr.push(newAr[i]);
//   }
//   for (let i = 0; i < newAr.length; i++) {
//     newAr[i] === newInputAr[i]
//       ? console.log("Given input is Palindrome")
//       : console.log("Given input is not a Palindrome");
//   }
// };

// isPalindrome("121");

// 2.To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing

// const isPalindrome = (input) => {
//   let newAr;
//   if (typeof input !== "string") {
//     let newInput = input.toString();
//     newAr = newInput.split("");
//   } else {
//     newAr = input.split("");
//   }
//   let centerValue = Math.ceil(newAr.length / 2);
//   for (let i = 0; i < centerValue; i++) {
//     if (newAr.length % 2 === 0) {
//       newAr[i] === newAr[newAr.length - 1 - i]
//         ? console.log("Given input is Palindrome")
//         : console.log("Given input is not a Palindrome");
//     } else {
//       newAr[centerValue - 1 - i - 1] === newAr[centerValue - 1 + i + 1]
//         ? console.log("Given input is Palindrome")
//         : console.log("Given input is not a Palindrome");
//     }
//   }
// };
// isPalindrome("1223221");

// 3.To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

// let stg = "Hello My Name is Ajit Arora";

// const newAr = stg.split(" ");
// let logest_word = " ";
// let count = 0;
// for (let value of newAr) {
//   if (value.length > count || value.length === count) {
//     count = value.length;
//     logest_word = value;
//   } else {
//     count;
//   }
// }
// console.log(count, logest_word);

//4.To find longest word from a string using functions

// let info = "To check the string or number is palindrome";
// const logestWord = (input) => {
//   if (typeof input !== "string") {
//     console.log("Invalid Input");
//   }
//   const arr = input.split(" ");
//   let logest_word = " ";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > logest_word.length) {
//       logest_word = arr[i];
//     }
//   }
//   console.log(logest_word);
// };

// logestWord(info);
