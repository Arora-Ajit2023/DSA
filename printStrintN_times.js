//Print string n times using inbuilt function.

const PrintString = (str, num) => {
  for (let i = 0; i < num; i++) {
    console.log(`${i} : ${str}`);
  }
};

console.log(PrintString('Ajit', 10));
