/* eslint-disable operator-assignment */
// count all Character in string

const CheckAllChar = (input) => {
  if (typeof input !== 'string' || !input) {
    return 'Enter valid Input';
  }

  const NewInput = input.toLowerCase();

  const countObj = {};
  for (let i = 0; i < NewInput.length; i++) {
    let count = 0;
    for (let j = 0; j < NewInput.length; j++) {
      if (NewInput[i] === NewInput[j]) {
        count += 1;
        countObj[NewInput[i]] = count;
      }
    }
    count = 0;
  }
  return { countObj, NewInput };
};
console.log(CheckAllChar('jhasydsjdsuelaawdjoiebj'));
