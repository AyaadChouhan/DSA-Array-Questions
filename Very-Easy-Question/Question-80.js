// Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
// findLargestNum([4, 5, 1, 3]) ➞ 5

// findLargestNum([300, 200, 600, 150]) ➞ 600

// findLargestNum([1000, 1001, 857, 1]) ➞ 1001

function findLargestNum(arr) {
  //    let val = arr.sort((a, b)=>{
  //        return b - a
  //     })
  //     return val[0]
  
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
        num = arr[i]
    }
  }
  return num
}
console.log(findLargestNum([1000, 1001, 857, 1]));
console.log(findLargestNum([4, 5, 1, 3]));
