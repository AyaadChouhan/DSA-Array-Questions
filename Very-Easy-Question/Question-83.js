// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
// canCapture(["A8", "E8"]) ➞ true

// canCapture(["A1", "B2"]) ➞ false

// canCapture(["H4", "H3"]) ➞ true

// canCapture(["F5", "C8"]) ➞ false

function canCapture(arr) {
  //   if (arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1]) {
  //     return true;
  //   } else {
  //     return false;
  //   }

    return arr[0][0] === arr[1][0] || arr[0][1] === arr[1][1] ? true : false;


}
console.log(canCapture(["F5", "C8"]));
console.log(canCapture(["A8", "E8"]));
