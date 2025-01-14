// // Diamond Shaped Array
// // Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// // Examples
// // diamondArrays(1) ➞ [[1]]

// // diamondArrays(2) ➞ [[1], [2, 2], [1]]

// // diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

// function diamondArrays(len) {
//   const stack = [];
//   //   for (let i = 1; i <= len; i++) {
//   //     let nestedArr = [];
//   //     let index = i;
//   //     for (let j = 0; j < i; j++) {
//   //       nestedArr.push(index);
//   //     }
//   //     stack.push(nestedArr);
//   //     nestedArr = [];
//   //   }

//   //   for (let i = len - 1; i >= 1; i--) {
//   //     let nestedArr = [];
//   //     let index = i;
//   //     for (let j = 0; j < i; j++) {
//   //       nestedArr.push(index);
//   //     }
//   //     stack.push(nestedArr);
//   //     nestedArr = [];
//   //   }

//   //=============================================
//   let i = 1;
//   let isActive = true;

//   while (i > 0) {
//     let tempArr = [];
//     for (let j = 0; j < i; j++) {
//       tempArr.push(i);
//     }
//     stack.push(tempArr);

//     if (isActive) {
//       if (i < len) {
//         i++;
//       } else {
//         isActive = false;
//         i--;r
//       }
//     } else {
//       i--;
//     }
//   }
//   return stack;
// }

// console.log(diamondArrays(5));

//==========================================
