/* eslint-disable no-undef */
/* eslint-disable no-continue */
// @ts-nocheck
/**
 * @description(WAP to add n-numbers.)
 *
 * input:1,2,3,...nth.
 *
 * Step 1: write function.
 * Step 2: define variable to store the ouput.
 * Step 3: Apply For loop.
 * Step 3.1: Check if the i/p value is Number or not using isNaN.
 * Step 3.2 :if it is valid Number then add the number and return the result
 *
 */

// version-1
const AddNthNumber = (nums) => {
  let result = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const num of nums) {
    if (typeof num === 'string' || Number.isNaN(num)) {
      return 'Not Valid Number';
    }
    result += num;
  }
  return result;
};

console.log(AddNthNumber([1, 2, 34, 6, 6, 7, 97, 233]));

// version-2

/**
 * @description(WAP to add Nth number without using parameters)
 *
 * Stet 1: define function.
 * Step 2: define variable to store result
 * Step 3: In function we have Arguments Array.
 * Step 4: Apply For loop on Argumets Array.
 * Step 4.1 :if the value in the array is number but it is ihe form of String,
 *           we have to convert that string to number.using Number()
 * Step 4.2: Check if the Values in Arguments is valid numbers.
 * Step 4.3:if it is valid the add number and then resturn result
 *
 */

function nAdd(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    const currentVal = Number(args[i]);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(currentVal)) {
      sum += currentVal;
    }
  }
  return sum;
}
console.log(nAdd(100, 490, 'ankit', 50, null, 490, '30', 50, '', false));
