// Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die.
//  If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

function possibleBonus(a) {
  const emailValidation = "@gmail.com";
  const splitedEmail = a.split("@");

  if ("@" + splitedEmail[1] === emailValidation) {
    return true;
  }
  return false;
}
// console.log(possibleBonus("ayaadchouhan@gmail.com"));
// console.log(possibleBonus("fayaazurrehman@gmail.com"));
// console.log(possibleBonus("fayaazurrehman@gmail.con"));
// console.log(possibleBonus("@gmail.con"));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(3, 7));

function validParenthesis(string) {
  const parenthesis = ["(", ")", "[", "]", "{", "}"];
  const splitedString = string.split("");
  let count = 0;
  for (let i = 0; i < parenthesis.length; i++) {
    for (let j = 0; j < splitedString.length; j++) {
      if (
        splitedString.includes(parenthesis[j]) &&
        parenthesis[i] === splitedString[j]
      ) {
        count++;
      }
    }
    console.log(count);
    count = 0
  }
}
console.log(validParenthesis("(())[]{}"));
// console.log(validParenthesis("()[]{{}{"));
// Input: s = "()[]{}"
