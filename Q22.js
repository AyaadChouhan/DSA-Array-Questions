// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === true) {
  //         count++
  //     }
  // }
  // return count
  // ==========================================
  //   return arr.reduce((acc, curr) => {
  //     if (curr !== false) {
  //       acc++;
  //     }
  //     return acc;
  //   }, 0);
  //===========================================
  let count = 0;
  arr.forEach((element) => {
    if (element === true) {
      count++;
    }
  });
  return count;
}
console.log(countTrue([true, false, false, true, false]));
