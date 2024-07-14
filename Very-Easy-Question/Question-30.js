// Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

function getMultipliedArr(arr) {
  let newArr = [];
//   for (let val of arr) {
//     newArr.push(val * 2);
//   }

// arr.forEach(element => {
//     newArr.push(element * 2)
// });

//  return arr.map((elementOrValue) => {
//    return elementOrValue * 2
// });

return arr.reduce( (acc, curr)=>{
    acc.push(curr * 2)
    return acc
}, [])
  return newArr;
}
console.log(getMultipliedArr([5, 382, 0]));
console.log(getMultipliedArr([1, 322, -5]));
