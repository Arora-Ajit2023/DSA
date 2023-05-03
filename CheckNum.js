// To check whether particular word/number present in sentence or not using inbuilt function

/**
 * @description
 * Step 1: Define Function with parameter
 * Step 2: convert string to array
 * Step 3: Define object to store value
 * Step 4: Apply for loop to i=0;i<input.length;i++
 * Step 5:check the value of loop is present in object
 * Step 6: if it is present in object than return that value
 */

const CheckNum = (input, value) => {
  const NewArr = input.split(' ');
  for (let i = 0; i < NewArr.length; i++) {
    if (NewArr[i] === value) {
      return true;
    }
  }
};
console.log(CheckNum('My name is Ajit', 'Ajit'));
