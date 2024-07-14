// Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]

// drop([1, 2, 3], 2) ➞ [3]

// drop([1, 2, 3], 5) ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]

// function drop(arr, target) {
//   let newArr = [];

//     return arr.slice(target, arr.length);

//   for (let i = target; i < arr.length; i++) {
//     newArr.push(arr[i])
//   }
//     return newArr
// }
// console.log(drop([1,2,3], 1));
