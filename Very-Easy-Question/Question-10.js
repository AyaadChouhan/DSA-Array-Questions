// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function concat(...arr1) {
  // return arr1.flat()

  // return arr1.concat(arr2)

  //  return [...arr1, ...arr2]

  return arr1.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  
}
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
