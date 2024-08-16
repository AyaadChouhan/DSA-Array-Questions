// Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

// Examples
// filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// // Include only numbers with 3 digits.

// filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// // Include only numbers with 1 digit.

// filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// // No numbers with only 1 digit exist => return empty array.

// filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.

function filterDigitLength(arr, digit) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //     let str = String(arr[i])
  //     if (str.length === digit) {
  //         newArr.push(arr[i]);
  //     }
  // }

  // for (let el of arr) {
  //         if (String(el).length === digit) {
  //             newArr.push(el)
  //         }
  //     }
  //     return newArr

//   return arr.filter((val)=>{
//       return String(val).length === digit ? val : ""
//   })

  return arr.map((val) => {
    if (val.toString().length === digit) {
      return val;
    }
  })
  .filter((val) =>{
      return val !== undefined
  })
  
}
console.log(filterDigitLength([5, 6, 8, 9, 3533, 45445], 1));
