// Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero three") ➞ ""

// textToNumberBinary("one one") ➞ ""

function textToNumberBinary(numbers) {
  const obj = {
    zero: 0,
    one: 1,
  };
  let result = "";
  const arrOfStringValues = numbers.split(" ");

  for (const el of arrOfStringValues) {
    if (!Object.keys(obj).includes(el.toLowerCase())) {
      return "oops invalid arguments";
    } else {
      result += obj[el.toLowerCase()];
    }
  }

  //   for (let i = 0; i < arrOfStringValues.length; i++) {
  //     if (arrOfStringValues[i] === "zero" && arrOfStringValues[i + 1] !== "one") {
  //       return "";
  //     } else if (
  //       arrOfStringValues[i] === "zero" ||
  //       arrOfStringValues[i] === "one"
  //     ) {
  //       result += arrOfStringValues[i];
  //     }
  //   }

  return result;
}

console.log(textToNumberBinary("Zero one zero ONE zero one zero one"));
console.log(textToNumberBinary("zero one zero one zero one zero three"));
