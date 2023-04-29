/**
 * @description(Find the Index of the First Occurrence in a String)
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 *              The first occurrence is at index 0, so we return 0.
 *
 * Step1: define a function with 2 parameters.
 * Step1.1: parameters are string and 2nd parameter is required value.
 * Step2: Define a variable to store result.
 * Step3: Apply for loop i=0;i<str.length;i++.
 * Step3.1: check condition if haystack.substr(i, needle.length) === needle is
 *          true the result=i and if it is flase then result=-1
 */

const strStr = (haystack, needle) => {
  let result;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      result = i;
      return result;
    }
    result = -1;
  }
  return result;
};

console.log(strStr('hello', 'll'));
