// Applying Discounts
// Create a function that applies a discount d to every number in the array.

// Examples
// getDiscounts([2, 4, 6, 11], "50%") ➞ [1, 2, 3, 5.5]

// getDiscounts([10, 20, 40, 80], "75%") ➞ [7.5, 15, 30, 60]

// getDiscounts([100], "45%") ➞ [45]

function getDiscounts(arr, strVal) {
  let newVal = 100 / parseInt(strVal);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] / newVal;
//   }
//   return arr;

  return arr.map((val)=>{
    return val / newVal
  })
}
console.log(getDiscounts([2, 4, 6, 11], "50%"));
console.log(getDiscounts([10, 20, 40, 80], "75%"))
