//1.Remove Duplicate characters from String

//method 1
// const stng = "yABCD222YYUU&^%%aaa";
// const removeDuplicatesV2 = (str) => {
//   const obj = {};
//   const strArr = str.split("");
//   let result = "";
//   for (let i = 0; i < strArr.length; i++) {
//     if (!obj.hasOwnProperty(strArr[i])) {
//       result += strArr[i];
//     }
//     obj[strArr[i]] = true;
//   }
//   console.log(obj);
//   return result;
// };
// console.log(removeDuplicatesV2(stng));

//method 2
// const str = "yABCD222YYUU&^%%aaa";
// const CheckDuplicateStr = (stgValue) => {
//   const newStng = stgValue.toLowerCase();
//   if (typeof newStng !== "string") {
//     console.log("Not a string");
//     return;
//   }
//   const strAr = newStng.split("");
//   console.log(strAr);
//   const newArValue = [];
//   strAr.forEach((value, index, array) => {
//     array.indexOf(value) === index && newArValue.push(value);
//   });

//   console.log(newArValue);
// };
// CheckDuplicateStr(str);

//  Remove Duplicate characters from array of element and find the count of an elements using set

// const array = [1, 2, 3, 4, 51, 2, 3, 56, 7];
// const a = { name: "Ajit", age: 25 };

// const removeDuplicate = (value) => {
//   if (!Array.isArray(value)) {
//     return console.log("Not valid input");
//   }
//   if (value.length <= 0) {
//     return console.log("array is emmpty");
//   }
//   const newAr = new Set(value);
//   console.log(newAr);
// };
// removeDuplicate(array);

//Remove Duplicate characters from array of element using filter

// const array = [1, 1, 2, 3, 4, 51, 2, 3, 56, 7];

// const removeDuplicate = (value) => {
//   if (!Array.isArray(value)) {
//     return console.log("Not valid input");
//   }
//   if (value.length <= 0) {
//     return console.log("array is emmpty");
//   }
//   const newAr = value.filter((value, index, array) => {
//     return array.indexOf(value) === index;
//   });
//   console.log(newAr, value);
// };

// removeDuplicate(array);

//String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

// const info = "My name is Ajit";

// const reverse = (value) => {
//   const newAr = value.split("");
//   console.log(newAr);
//   const x = [];
//   for (let i = newAr.length - 1; i >= 0; i--) {
//     for (let j = 0; j < newAr.length - 1; j++) {
//       x.push(newAr[j]);
//     }
//   }
//   console.log(x.join(""));
// };

// reverse(info);
