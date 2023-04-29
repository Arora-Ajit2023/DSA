/**
 * @description('Unique values only from 2 arrays i.e. union values')
 * inputA = [1, 2, 3, 4, 5, 1];
 * inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
 * output =[1, 2, 3, 4, 5, 6, 7, 8];
 *
 * Step1: Define  fuction with 2 parameters.
 * Step2: define empty object.
 * Step3: Apply for loop i=0;i<input1.length;i++
 * Step3.1: check if object have input[i] value.
 * Steo3.2: if it is not present than we will add to object.
 * Step4: Apply for loop to 2nd parameter j=0;j<inpu2.length;j++.
 * Step4.1: check if object have input[j].
 * Step4.2: if it is preset than we will not add to object.
 * step5.we will return object.Key()
 */

// method 1

const union = (input1, input2) => {
  const obj = {};
  for (let i = 0; i < input1.length; i++) {
    if (!obj.hasOwnProperty(input1[i])) {
      obj[input1[i]] = i;
    }
  }
  for (let j = 0; j < input2.length; j++) {
    if (!obj.hasOwnProperty(input2[j])) {
      obj[input2[j]] = j;
    }
  }
  const unionAr = Object.keys(obj).map((value) => {
    return +value;
  });

  return unionAr;
};

console.log(union([2, 3, 4, 5, 1, 8, 1], [2, 1, 3, 4, 5, 1, 7, 6, 4, 3]));

// method 2

const union2 = (input1, input2) => {
  const NewInput = input1.concat(input2);
  const unionObj = {};

  for (let i = 0; i < NewInput.length; i++) {
    if (!unionObj.hasOwnProperty(NewInput[i])) {
      unionObj[NewInput[i]] = i;
    }
  }
  const unionAr = Object.keys(unionObj).map((value) => {
    return +value;
  });
  return unionAr;
};

console.log(union2([2, 3, 4, 5, 1, 8, 1], [2, 1, 3, 4, 5, 1, 7, 6, 4, 3, 8]));

/**
 * @description(Unique values only from 2 arrays i.e. intersection values)
 * inputA = [1, 2, 3, 4, 5, 1];
 * inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
 * Output = [1, 2, 3, 4, 5,];
 *
 * Step1: Define  fuction with 2 parameters.
 * Step2: define empty object.
 * Step3: define empty array.
 * Step4: combine two inputs.
 * Step5: Apply for loop i = 0; i < input1.length; i++.
 * Step5.1: check if value is present in object
 * Step5.2: if value is prsent than we will push that value to array
 */

const intersection = (input1, input2) => {
  const NewInput = input1.concat(input2);
  console.log(NewInput);
  const intersectioObj = {};
  const arr = [];
  for (let i = 0; i < NewInput.length; i++) {
    const currentValue = NewInput[i];
    if (!intersectioObj.hasOwnProperty(currentValue)) {
      intersectioObj[currentValue] = i;
    } else {
      arr.push(currentValue);
    }
  }

  return { arr, intersectioObj };
};

console.log(
  intersection([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8])
);
