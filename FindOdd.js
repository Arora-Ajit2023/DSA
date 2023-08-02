/**
 * FIND THE FIRST MISSING ELEMENT FROM GIVEN ARRAY
*  [5,7,9,11,15,17]

 * step1:define func with parameter 
 * step2:define variable to store result
 * Step3:apply for-loop i=0;i<arr.lem;i++
 * step4:calculate diff nexelm-prvelm
 * if(diff>2)
 * Step5:for loop with j=1 j>diff j++
 * Step6:result=arr[i]+j
 * 
 */

const MissingElm = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff > 2) {
      return arr[i] + 2;
    }
  }
};

console.log(MissingElm([5, 7, 9, 11, 15, 17]));
