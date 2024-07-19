// Sum of Even Pairs in Array
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]
// Examples
// oddSum([11, 15, 6, 8, 9, 10]) ➞ [true, false, true, false, false]

// oddSum([12, 21, 5, 9, 65, 32]) ➞ [false, true, true, true, false]

// oddSum([1, 2, 3, 4, 5, 6]) ➞ [false, false, false, false, false]

function oddSum(arr) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //     let sum = arr[i] + arr[i + 1]
  //     if (sum % 2 === 0) {
  //         newArr.push(true);
  //     }else{
  //         newArr.push(false)
  //     }
  // }
  // return newArr

  //==================================

  //   return arr.reduce( (acc, curr, index)=>{
  //     let sum = curr + [index + 1];
  //     acc.push(sum % 2 === 0);
  //     return acc
  //     }, [])

  //====================================
  return arr.map((el, ind) => {
    let sum = el + arr[ind + 1];
    if (sum % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
}
console.log(oddSum([1, 2, 3, 4, 5, 6]));
console.log(oddSum([12, 21, 5, 9, 65, 32]));
