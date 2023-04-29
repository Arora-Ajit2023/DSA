/* eslint-disable no-prototype-builtins */
/**
 * @description('To find a first pair from a number array whose sum is X')
 * i/p:arr = [1,2,3,4,5,6] x=5
 * o/p:[2,3]
 *
 * Step1: Define function with 2 parameter function(input,target).
 * Step2: define on empty array to store sum pair.
 * Step3: Apply for loop i=0;i<=arr.length;i++
 * Step3.1: Apply for loop j=0;j<arr.length;j++
 * Step3.2: we will chaeck if sum of arr[i]+arr[j]===0,if it true than we will
 *         break te loop
 */
// Method 1

const SumPair = (input, target) => {
  const pairArr = [];
  for (let i = 0; i < input.length; i++) {
    if (typeof input[1] !== 'number' || Number.isNaN(input[i])) {
      return 'Not valid number';
    }
    for (let j = i + 1; j <= input.length; j++) {
      if (input[i] + input[j] === target) {
        pairArr.push([i, j]);
        // return pairArr;  => for first pair
      }
    }
  }
  return pairArr; // for all pair
};

console.log(SumPair([1, 2, 3, 4, 5, 6], 5));

// Method 2

/**
 * Step1: Define function with 2 parameter function(input,target).
 * Step2: Define empty object.
 * Step3: Apply for loop.
 * Step3.1: store the value of array in object.
 *
 */

const SumPairV2 = (input, target) => {
  const pairObj = {};
  for (let i = 0; i < input.length; i++) {
    if (!pairObj.hasOwnProperty(input[i])) {
      pairObj[i] = input[i];
    }
  }

  return pairObj;
};

console.log(SumPairV2([1, 2, 3, 4, 5, 6], 5));

/**
 * @description('To find a first three elements from a number array whose sum is X')
 * i/p: [1,2,3,4,5,6]
 * o/p: 1,2,3
 *
 * Step1: define function with 2 parameter
 * Step2:
 */
// Method 1

const SumPairV3 = (input, target) => {
  const pairArr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      for (let k = j + 1; k <= input.length; k++) {
        if (input[i] + input[j] + input[k] === target) {
          pairArr.push([i, j, k]);
          // return pairArr;  => for first pair
        }
      }
    }
  }
  return pairArr; // for all pairs
};

console.log(SumPairV3([1, 2, 3, 4, 5, 6], 10));

// Method 2
