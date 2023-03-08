// 1.To find longest word from a string using custom code

// const stg = "To find longest word from a string using custom code";
// const longestWord = (input) => {
//   if (
//     typeof input === "number" ||
//     input === "" ||
//     typeof input === "undefined" ||
//     input === null
//   ) {
//     console.log("Enter valide input");
//     return;
//   }

//   const arr = input.split(" ");
//   let stgr = "";
//   const obj = {};
//   for (let item of arr) {
//     if (item.length > stgr.length) {
//       stgr = item;
//     }
//     obj[item] = item.length;
//   }
//   console.log(stgr, obj);
// };
// longestWord(stg);

//

//To find longest common string from array of strings

//To find character occurance from the string

// const occurance = (strg, val) => {
//   if (typeof strg !== "string") {
//     console.log("Enter valid String");
//     return;
//   }
//   const strAr = strg.split("");
//   const obj = {};
//   strAr.forEach((el, index) => {
//     if (el === val) {
//       obj[index] = el;
//     } else {
//       console.log("Not found");
//     }
//   });
//   console.log(obj);
// };

// occurance("dsvsgdcjshdj", "q");
