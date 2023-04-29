/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// @ts-nocheck
/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/**
 * @description(-Largest Palindrome in a given string
 *              - All Palindrome in a string.   )
 *
 * Step1: Define Function with parameter.
 * Step2: we will convert that string to array and conver sting to lowercare.
 *        and remove special charecters from string.
 * Step3: declare one empty array.
 * Step4: declare variable with value of empty string.
 * Step5: Apply for of loop to array.
 * Step6: we will check if the length of array  elemnet shoud be > 0.
 * Step7: we will apply for loop  and store the value to string variable.
 * Step8: if the value are same than we will push that value to array.
 * Step9: for lagrgest Palindrome string we will check the length of array.
 */

const strg =
  'Hello Mam, how are you. Madam, do you know racecar? saippuakivikauppias';

const Palindrome = (input) => {
  // All Palindrome in a string
  const NewInput = input
    .toLowerCase()
    .replace(/[&\\,.?'']/g, '')
    .split(' ');
  const PalindromeArr = [];
  for (let str of NewInput) {
    let NewStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      NewStr += str[i];
    }
    if (str === NewStr) {
      PalindromeArr.push(NewStr);
    }
  }

  // For Largest Palindrome

  const LargestPalindrom = {};
  for (let str of PalindromeArr) {
    let long = 'longest';
    if (str.length > 0) {
      LargestPalindrom[long] = str;
    }
  }

  return {
    'All Palindrom in String': PalindromeArr,
    'Largest Palindrom String': LargestPalindrom.longest,
  };
};

console.log(Palindrome(strg));

/**
 * @description('Remove Duplicate characters from String')
 *
 * Step1: Define Function with parameter.
 * Step2: Check edage case for,if input is not string or empty string.
 * Step3: Apply for loop i=0;i<input.length;i++
 * Step3.1: Define empty object.
 * Step3.2: Define empty string.
 * Step3.3: we will  check if the value is in object using hasOwnProperty.
 *          if it is not in object the we will add it.
 * Step3.4: if value is present in object then we will add to string.
 * Step4: return object
 */

const DuplicateString = (str) => {
  if (typeof str !== 'string' || !str) {
    return 'Not valid String';
  }
  const NewStr = str.toLowerCase();
  const StrObj = {};
  let Value = '';
  for (let i = 0; i < NewStr.length; i++) {
    if (!StrObj.hasOwnProperty[NewStr[i]]) {
      StrObj[NewStr[i]] = i;
    }
  }
  return Object.keys(StrObj).join('');
};

console.log(DuplicateString('dsdsdcssdad'));
