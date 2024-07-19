// Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples
// countUppercase(["SOLO", "hello", "Tea", "wHat"]) ➞ 6

// countUppercase(["little", "lower", "down"]) ➞ 0

// counUppercase(["EDAbit", "Educate", "Coding"]) ➞ 5

function countUppercase(arr) {
  let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === arr[i][j].toUpperCase()) {
//           count++;
//         }
//     }
//   }

//==================================

// for (const val of arr) {
//     for (const newVal of val) {
//         if (newVal === newVal.toUpperCase()) {
//             count++
//         }
//     }
// }
//   return count


}
console.log(countUppercase(["EDAbit", "Educate", "Coding"]));
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));
