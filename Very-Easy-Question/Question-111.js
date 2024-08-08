// Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples
// existsHigher([5, 3, 15, 22, 4], 10) ➞ true

// existsHigher([1, 2, 3, 4, 5], 8) ➞ false

// existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true

// existsHigher([], 5) ➞ false

function existsHigher(arr, n) {
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] >= n) {
  //       return true
  //     }
  // }
  // return false

  let val = false
   arr.forEach((el) => {
    if (el >= n) {
      val = true;
    }
  });
  return val ? true : false;
}
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));
