/**
 * @description('How do you find the missing number in a given integer array of *               1 to 100?')
 * input= [1,2,3,4,6,9,10]
 * Output= [5,7,8]
 *
 * Step1: define function with parameter.
 * Step2: define empty array for storing missing numbers.
 * Step3: apply for loop i = 0; i < input.length; i++
 * Step3.1: check if the diff. b/w input[i+1] and input[i]
 * Step3.1.1 :if the diff. is grater than 1, we will calculate the diff b/w them
 * Step3.1.2 :apply for loop let j = 1; j < diff; j++
 * Step3.1.2.1: push the diff b/w input[i + 1] and i to arry
 *
 */

const MissingNumbers = (input) => {
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] - input[i] > 1) {
      const diff = input[i + 1] - input[i]; // 3

      for (let j = 1; j < diff; j++) {
        arr.push(input[i] + j);
      }
    }
  }
  return arr;
};
console.log(MissingNumbers([1, 2, 3, 4, 6, 9, 10])); // o/p:-[5,8,7]
