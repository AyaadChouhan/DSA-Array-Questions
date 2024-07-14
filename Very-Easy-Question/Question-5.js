// Reverse an Array
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

function reverseArr(arr) {
  //   return arr.reverse();

  let newArr = [];

  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     newArr.push(arr[i]);
  //   }
  //   return newArr;

    return inner(arr);
}

function inner(val) {
  let newArr = [];

  for (let i = val.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

let arr = [1, 2, 3, 4];
console.log(reverseArr(arr));
