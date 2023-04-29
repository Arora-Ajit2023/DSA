/**
 * @description {Method to print Number. o/p: 1 1 1 2 2 2 3 3 3 4 4 4}
 *
 *step 1: write function with prameter m and n.
 *step 1.1 : m define length of number.
 *step 1.2 : n define how many times number will be repeated.
 *step 2  : Apply nested for loop to print repeated number .
 *step 2.2 :In 1st loop i=0 ,i<=m,i++
 *step 2.3 :In 2nd loop j=0 ,j<=n,j++.
 *step 3   :console i in second loop.
 */

const printNumber1 = (m, n) => {
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i);
    }
  }
};

printNumber1(4, 3);

/**
 * @description{Method to print Number. o/p:-0 1 2 3 4 0 1 2 3 4 0 1 2 3 4}
 * step1: declare a function with 2 parameter m and n.
 * step1.1: m denote number of repetation .
 * step1.2 : n denote length of number.
 * step2 : apply nested for loop to print number
 * step2.1: 1st loop start with i=0 and i<m and i++
 * step2.2 : 2nd loop start with j=0 and j<=n and j++
 * step2.3: console j in loop 2
 */

const printNumber2 = (m, n) => {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(j);
    }
  }
};
printNumber2(3, 4);
