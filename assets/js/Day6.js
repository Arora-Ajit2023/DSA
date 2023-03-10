// @ts-nocheck
//To find the index of an element from an array
const indexNum = (ar, value) => {
  if (value === "" || typeof value === NaN || !value) {
    return "Enter Valid Value";
  }
  ar.forEach((element, index) => {
    if (element === value) {
      console.log("Index of value is ", index);
      return;
    } else {
      console.log("Not Found");
    }
  });
};
indexNum([1, "p", 3, 5, "w"], "4");
