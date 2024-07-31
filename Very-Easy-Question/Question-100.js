// Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.Examples

// checkAllEven([1, 2, 3, 4]) ➞ false

// checkAllEven([2, 4, 6]) ➞ true

// checkAllEven([5, 6, 8, 10]) ➞ false

// checkAllEven([-2, 2, -2, 2]) ➞ true

function checkAllEven(arr) {
  //  for (const val of arr) {
  //     if (val % 2 !== 0) {
  //         return false
  //     }
  //  }

  //===========================

//   let val = true;
//   arr.forEach((element) => {
//     if (element % 2 !== 0) {
//       val = false;
//     }
//   });
//   return val;

//============================

return arr.reduce((acc, curr)=>{
    if (curr % 2 !== 0) {
        acc = false
    }
    return acc
}, true)
}
console.log(checkAllEven([-2, 2, -2, 2]));
console.log(checkAllEven([5, 6, 8, 10]));
