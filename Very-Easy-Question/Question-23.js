// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arr) {
  let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //     let n = +arr[i];
  //     newArr.push(n);
  // }

  // for (let i = 0; i < arr.length; i++) {
  //     let n = Number(arr[i]);
  //     newArr.push(n)
  // }

  // arr.forEach(element => {
  //     newArr.push(Number(element))
  // });
  // return newArr

  return arr.map((val) => {
    return +val;
  });
}

console.log(toNumberArray(["9.5", "8.8"]));
