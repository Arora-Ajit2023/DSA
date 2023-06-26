// Implement String Compression (Microsoft, Amazon etc)

// const input = stringCompression("aaaabbcaabbaa");

// // Output
// ("a4b2c1a2b2a2");

/**
 *
 * Step1: define function with one parameter
 * step2:define empty variable to store result.
 * Step3: apply for lop with i=0;i<str.length;i++
 * Step4:
 *
 */

function stringCompression(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(stringCompression('ccccccccccccdddddqwert'));
