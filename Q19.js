// A Simple Pair
// Mubashir needs your help to write a simple algorithm of multiplication.

// Given an array of integers arr and an integer n, find out a pair of numbers [x, y] from a given array such that x * y = n .

// If the pair is not found, return null.

// Examples
// simplePair([1, 2, 3], 3) ➞ [1, 3]

// simplePair([1, 2, 3], 6) ➞ [2, 3]

// simplePair([1, 2, 3], 9) ➞ null

function simplePair(arr, n) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 1; j < arr.length; j++) {
  //       if (arr[i] * arr[j] === n) {
  //         return [arr[i], arr[j]];
  //       }
  //     }
  //   }
  //   return null;

  //================second approach
  const result = [];
  arr.forEach((el) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (el * arr[i] === n) {
        result.push(arr[i]);
        result.push(el);
        // return;
      }
    }
  });
  return result.length ? result : null;
}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));

// simplePair([1, 2, 3], 3) ➞ [1, 3]
// simplePair([1, 2, 3], 6) ➞ [2, 3]
