// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) {
  // return arr.join("")

  // let str = "";

  // for (const val of arr) {
  //     str += val
  // }
  // return str

  // let i = 0;
  // while (i < arr.length) {
  //     str += arr[i]
  //     i++
  // }
  // return str

  return arr.reduce((acc, val) => {
    return (acc += val);
  }, "");
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
