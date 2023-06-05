//Remove or Delete elements from an array using various ways

// Method 1

const array = [1, 2, 3, 4, 5, 6, 7];

array.pop();
console.log({ method1: array });

// Method 2

const array2 = [1, 2, 3, 4, 5, 6, 7];

array2.shift();
console.log({ Method2: array2 });

// Method 3

const array3 = [1, 2, 3, 4, 5, 6, 7];
delete array3[3]; // Not good way to delete element in array
console.log({ method3: array3 });

// Method 4
const array4 = [1, 2, 3, 4, 5, 6, 7];

const Newar = array4.slice(1, 3);
console.log({ Method4: Newar });

//Method 5
const array5 = [1, 2, 3, 4, 5, 6, 7];
array5.splice(0);
console.log({ Method5: array5 });

//Method 6
const array6 = [1, 2, 3, 4, 5, 6, 7];
array6.length = 0;
console.log({ Method6: array6 });
