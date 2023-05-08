//To find the index of an element from an array

const CheckIndex = (arr, value) => {
  if (!Array.isArray(arr) || !arr) {
    return 'Enter valid Input';
  }

  if (!value) {
    return 'Enter valid Input';
  }
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result = i;
    } else {
      result = 'Value Not found';
    }
  }
  return result;
};

console.log(CheckIndex([1, 2, 3, 4, 57, 8, 9, 'Ajit'], 'Ajit'));

//Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array

const Fibonacci = (num) => {
  let currentValue = 0;
  let nextValue = 1;
  let nthvalue;
  for (let i = 0; i < num; i++) {
    console.log(currentValue);
    nthvalue = currentValue + nextValue;
    currentValue = nextValue;
    nextValue = nthvalue;
  }
};
console.log(Fibonacci(4));
