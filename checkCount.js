/* eslint-disable operator-assignment */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable operator-linebreak */
//To check if given number is prime or not

const CheckCharCount = (input, value) => {
  if (!input || typeof input !== 'string') {
    return 'Enter valid Input';
  }

  const NewInput = input.toLowerCase();
  const NewChar = value.toLowerCase();
  let count = 0;

  for (let i = 0; i < NewInput.length; i++) {
    if (NewInput[i] === NewChar) {
      count += 1;
    }
  }
  return { character: NewChar, count };
};

console.log(CheckCharCount('aasxsdcccccccccCCcsdssds', 'c'));
