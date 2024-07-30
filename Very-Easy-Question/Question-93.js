// Remove Null from an Array
// Create a function to remove all null values from an array.

// Examples
// removeNull(["a", null, "b", null]) ➞ ["a", "b"]

// removeNull([null, null, null, null, null]) ➞ []

// removeNull([7, 8, null, 9]) ➞ [7, 8, 9]

function removeNull(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] !== "object") {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;

  return arr
    .map((val) => {
      return typeof val !== "object" ? val : undefined;
    })
    .filter((val) => {
      return val !== undefined;
    });
}
console.log(removeNull(["a", null, "b", null]));
console.log(removeNull([null, null, null, null, null]));
