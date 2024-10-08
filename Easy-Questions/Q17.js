// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

// set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]

function set(arr) {
  let result = [];
  for (const el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result.sort();
}
console.log(set([3, 3, 3, 2, 1]));
