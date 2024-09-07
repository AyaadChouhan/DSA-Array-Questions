// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

function sumOfCubes(arr) {
//   return arr.reduce((acc,curr)=>{
//     for (let i = 0; i < curr; i++) {
//       acc +=  curr * curr
//     }
//     return acc
//     }, 0)

 let result = 0;
  for (const el of arr) {
    for (let i = 0; i < el; i++) {
        result += el * el
    }
  }  
  return result
}
console.log(sumOfCubes([1, 5, 9]))