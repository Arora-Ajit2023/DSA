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
