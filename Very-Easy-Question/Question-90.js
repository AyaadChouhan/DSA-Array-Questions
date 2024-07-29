// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples
// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18

// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

// difference([4, 17, 12, 2, 10, 2]) ➞ 15

function difference(arr) {
  let max = arr[0], min = arr[0];

  return arr.reduce((acc, curr)=>{
    if (curr > max) {
        max = curr
    }
    if (curr < min) {
        min = curr
    }
    acc = max - min;;
    return acc
  })

  //===========================================

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return max - min;

  //=================================

  // const max = Math.max(...arr)
  // const min = Math.min(...arr)
  // return max - min;
}

console.log(difference([4, 17, 12, 2, 10, 2]));
