// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []

function invertArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(-arr[i]);
  }
  return newArr;

  //   return arr.map( (val, ind)=>{
  //     return -val
  //     });

}
console.log(invertArray([1, -2, 3, -4, 5]));
