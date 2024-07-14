// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

function getLastItem(arr) {
  // let reverseArr = arr.reverse();

  // return reverseArr.shift()

  // return reverseArr[0];

  // return arr[arr.length - 1]

  // return arr.slice(-1).join()

  // return arr.pop()

  //   return arr.at(-1);

  let n;
  for (const val of arr) {
    n = val;
  }
  return n;
}

console.log(getLastItem([1, 2, 3]));
