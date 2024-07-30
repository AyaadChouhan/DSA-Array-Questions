// Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.

// Examples
// noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]

// noOdds([43, 65, 23, 89, 53, 9, 6]) ➞ [6]

// noOdds([718, 991, 449, 644, 380, 440]) ➞ [718, 644, 380, 440]

function noOdds(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }

  //=====================================

  // arr.forEach((val)=>{
  //     if (val % 2 === 0) {
  //         newArr.push(val)
  //     }
  // })

  //=====================================

  return arr
    .map((val) => {
      if (val % 2 === 0) {
        return val;
      }
    })
    .filter((val) => {
      return val !== undefined;
    });

  //====================================

  //  return arr.reduce((acc, curr)=>{
  //     if (curr % 2 === 0) {
  //         acc.push(curr)
  //     }
  //     return acc
  //   }, [])
  //   return newArr;
}

console.log(noOdds([718, 991, 449, 644, 380, 440]));
