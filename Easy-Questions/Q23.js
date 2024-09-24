// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

// Examples
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false

function isOmnipresent(arr, val) {
  // let result = false;
  // for (const el of arr) {
  //     if (!el.includes(val)) {
  //         return false
  //     }
  // }
  // return true
  return arr.reduce((acc, curr) => {
    let count = 0;
    let i = 0;
    while (i < curr.length) {
      if (curr[i] === val) {
        count++;
      }
      i++;
    }
    if (count < 1) {
      return false;
    }
    return acc;
  }, true);
}
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));
