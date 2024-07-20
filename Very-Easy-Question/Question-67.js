// Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples
// countCharacters([
//   "###",
//   "###",
//   "###"
// ]) ➞ 9

// countCharacters([
//   "22222222",
//   "22222222",
// ]) ➞ 16

// countCharacters([
//   "------------------"
// ]) ➞ 18

// countCharacters([]) ➞ 0

// countCharacters(["", ""]) ➞ 0

function countCharacters(arr) {
  let count = 0;
  //   let joinedArr = arr.join("");
  //   for (let i = 0; i < joinedArr.length; i++) {
  //     count++;
  //   }

  //
  // let str = ""
  // for (let i = 0; i < arr.length; i++) {
  //     str += arr[i]
  // }
  //   return str.length;

  //
  return arr.flat().reduce((acc, curr) => {
    if (typeof curr === "string") {
      acc += curr.length
    }
    return acc;
  }, 0);
}

console.log(countCharacters(["###", "###", "###"]));
console.log(countCharacters(["22222222", "22222222"]));
