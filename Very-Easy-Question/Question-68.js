// Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
// arraySum([1, 3, 3, 1, 10]) ➞ 105.46

// arraySum([2, 3, 4, 5]) ➞ 23.97

// arraySum([1, 31, 3, 11, 0]) ➞ 11.62

function arraySum(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       sum += Math.pow(arr[i], 2);
  //     } else {
  //       sum += Math.sqrt(arr[i]);
  //     }
  //   }
  //   return sum.toFixed(2);

  return arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      acc += Math.pow(curr, 2);
    } else {
      acc += Math.sqrt(curr);
    }

    return Number(acc.toFixed(2));
  }, 0);
}
console.log(arraySum([2, 3, 4, 5]));
console.log(arraySum([1, 3, 3, 1, 10]));
