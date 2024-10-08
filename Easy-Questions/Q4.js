// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

function tuckIn([val1, val2], arr2) {
  let newArr = [];
  newArr.push(val1);
  newArr.push(...arr2);
  newArr.push(val2);
  return newArr;
}

console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);
console.log(
  tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));