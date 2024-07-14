// Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15

// sumArray([-1, 0, 1]) ➞ 0

// sumArray([0, 4, 8, 12]) ➞ 24

function sumArray(arr) {
  let val = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     val += arr[i];
  // }

  //   return arr.reduce((acc, curr) => {
  //     return (acc += curr);
  //   }, 0);

  // arr.forEach(element => {
  //     val += element
  // });

  return val;
}
console.log(sumArray([0, 4, 8, 12]));
