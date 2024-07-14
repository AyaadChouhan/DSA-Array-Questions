// // Learn Lodash: _.fill, Fill an Array With New Values
// // According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// // This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// // Arguments
// // array (Array): The array to fill.
// // value (*): The value to fill array with.
// // [start=0] (number): The start position.
// // [end=array.length] (number): The end position.
// // Returns
// // (Array): Returns array.
// // Examples
// var array = [1, 2, 3]

// // fill(array, "a") ➞ ["a", "a", "a"]

// // fill(Array(3), 2) ➞ [2, 2, 2]

// // fill([4, 6, 8, 10], [4, 6, 8, 10]) ➞ [4, "*", "*", 10]

// function fill(v1, v2) {
//     for (let i = 0; i < v1.length; i++) {
//         const element = array[i];

//     }

// }
// console.log(fill([4, 6, 8, 10], [4, 6, 8, 10]));

var findMaxConsecutiveOnes = function (nums) {
  let arr = [];
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] !== 1) {
      arr.push(count);
      count = 0;
    }
  }
  return Math.max(...arr);
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

// var moveZeroes = function (nums) {
//   let count = 0;
//   let newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//     } else {
//       newArr.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     newArr.push(0);
//   }
//   return newArr;
// };

// console.log(moveZeroes([0, 1, 0, 3, 12]));
