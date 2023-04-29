/**
 * @description{print star pattern}
 * o/p:
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 *
 * Step1:  write function with parameter m.
 * Step1.1:m define lenth of star.
 * Step1.3: if m is not number the throw error.
 * Step2:aplly nested for loop to print star pattern.
 * Step2.1:1st loop start with i=1,i<=m,i++.
 * Step2.2:2nd loop start with j=1,j<=i,j++.
 * Step3:console i in 2nd loop
 */

const starPattern = (m) => {
  if (typeof m !== 'number' || Number.isNaN(m)) {
    return 'Enter Valid Number';
  }

  let str = '';
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= i; j++) {
      str += '* ';
    }
    str += '\n';
  }
  return str;
};

console.log(starPattern(5));

/**
 * @description{ print star pattern}
 * o/p:
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 * * * * * *
 *
 *
 * Step1:define function with parameter m .
 * Step1.1:m define length of star to b printed.
 * Step1.2:check if m is valid Number.Using typeof and isNaN.
 * Step2:define variable to store loop value
 * Step3:aplly nested for loop to print star pattern
 * Step3.1:In 1st loop i=1;i<=m;i++.
 * Step3.2:In 2nd loop j=1;j<=m;j++.
 * Step3.2.1:update variable
 * Step4:return variable
 */

const printStarPattern = (m) => {
  let str = '';
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      str += '* ';
    }
    str += '\n';
  }
  return str;
};

console.log(printStarPattern(5));

/**
 * @description{print start pattern}
 * o/p:
 * * * * * *,
 * * * * *
 * * * *
 * * *
 * *
 *
 * Step1:define function with parameter m.
 * Step1.1:m define lenth for pattern
 * Step1.2:check m is valid number using typeof and isNaN
 * Step2:define variable to store loop value
 * Step3:apply nested for loop .
 * Step 3.1: In 1st loop i=1,i<=m,i++
 * Step3.2:in 2nd loop j=m,j<=i,j--
 * Step4:assign loop value to variable
 * return variable
 */
const printStarPattern1 = (m) => {
  if (typeof m !== 'number' || Number.isNaN(m)) {
    return 'Enter Valid Number';
  }
  let value = '';
  for (let i = 1; i <= m; i++) {
    for (let j = m; j >= i; j--) {
      value += '* ';
    }
    value += '\n';
  }
  return value;
};

console.log(printStarPattern1(5));

/**
 * @description{print Number Pattern}
 * o/p:
 * 1 1 1 1 1
 * 2 2 2 2
 * 3 3 3
 * 4 4
 * 5
 *
 *
 * Step1:define function with parameter m.
 * Step1.1:m define lenth for pattern
 * Step1.2:check m is valid number using typeof and isNaN
 * Step2:define variable to store loop value
 * Step3:apply nested for loop .
 * Step 3.1: In 1st loop i=1,i<=m,i++
 * Step3.2:in 2nd loop j=m,j>=i,j--
 * Step4:assign loop i.e i value to variable
 * return variable
 */

const PrintNumberPattern = (m) => {
  if (typeof m !== 'number' || Number.isNaN(m)) {
    return console.log('enter Valid Number');
  }
  let value = '';
  for (let i = 1; i <= m; i++) {
    for (let j = m; j >= i; j--) {
      value += `${i} `;
    }
    value += '\n';
  }
  return value;
};

console.log(PrintNumberPattern(5));

/**
 * @description{print Number Pattern}
 * o/p:
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 5
 *
 *
 * Step1:define function with parameter m.
 * Step1.1:m define lenth for pattern
 * Step1.2:check m is valid number using typeof and isNaN
 * Step2:define variable to store loop value
 * Step3:apply nested for loop .
 * Step 3.1: In 1st loop i=1,i<=m,i++
 * Step3.2:in 2nd loop j=1,j>=m,j++
 * Step4:assign loop  value i.e j to variable
 * return variable
 */

const PrintNumberPattern2 = (m) => {
  if (typeof m !== 'number' || Number.isNaN(m)) {
    return console.log('enter Valid Number');
  }
  let value = '';
  for (let i = 1; i <= m; i++) {
    for (let j = i; j <= m; j++) {
      value += `${j} `;
    }
    value += '\n';
  }
  return value;
};

console.log(PrintNumberPattern2(5));
