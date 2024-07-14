// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(arr, num) {

//   return arr.indexOf(num)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }

//   return -1

  return arr.reduce((acc, curr, ind) => {
    if (curr === num) {
      acc = ind;
    }
    return acc;
  }, -1);

}

console.log(search([1, 3, 5, 7, 9], 11));
console.log(search([2, 4, 6, 8, 10], 8));
