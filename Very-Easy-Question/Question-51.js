// The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false

// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true

// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].includes(char)) {
    //       return false;
    //     } else return true;
    //   }

    
    // for (const val of arr[i]) {
    //     if (val === char) {
    //         return false;
    //     }
    //     else{
    //         return true
    //     }
    // }
  }
}
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
