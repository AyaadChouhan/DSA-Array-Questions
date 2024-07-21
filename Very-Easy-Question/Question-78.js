// Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
// divisible([3, 2, 4, 2]) ➞ false

// divisible([4, 2, 6]) ➞ true
// // 4 * 2 * 6 / (4 + 2 + 6)

// divisible([3, 5, 1]) ➞ false

function divisible(arr) {
  let mult = 1;
  let sum = 0;
  
  //   for (let i = 0; i < arr.length; i++) {
  //     mult *= arr[i];
  //     sum += arr[i];
  //   }
  //   return mult % sum === 0 ? true : false;

  return arr.reduce((acc, curr) => {
    mult *= curr;
    sum += curr;
    if (mult % sum === 0) {
      acc = true;
      return acc;
    } else {
      acc = false;
      return acc;
    }
    // return acc
    //   return mult % sum === 0 ? acc = true : acc = false;
  }, false);
}
console.log(divisible([4, 2, 6]));
console.log(divisible([3, 2, 4, 2]));
console.log(divisible([3, 5, 1]));
