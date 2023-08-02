// Make alternate character to upper case
const input = 'Priya Bagde';

// // Output
// ("PrIyA BaGdE");

let str = '';
for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    str += input[i].toUpperCase();
  } else {
    str += input[i];
  }
}
console.log(str);
