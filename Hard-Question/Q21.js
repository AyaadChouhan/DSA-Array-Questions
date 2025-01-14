// Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero three") ➞ ""

// textToNumberBinary("one one") ➞ ""

function textToNumberBinary(str) {
  let result = "";
  let splitVal = str.split(" ");
  const arr = ["zero", "one"];

  for (let i = 0; i < splitVal.length; i++) {
    if (arr.includes(splitVal[i])) {
      if (splitVal[i] === "zero") {
        result += 0;
      } else {
        result += 1;
      }
    } else {
      return " ";
    }
  }
  return !result.includes(0) || !result.includes(1) ? "" : result;

  //   let data = splitVal
  //     .map((val) => {
  //       if (arr.includes(val)) {
  //         if (val === "zero") {
  //           return 0;
  //         } else return 1;
  //       } else {
  //         return "in valid string";
  //       }
  //     })
  //     .join("");

  //   return data.includes("in valid string") ||    !data.includes(1)    !data.includes(0) ||     ? ""
  //     : data;
}
console.log(textToNumberBinary("zero one zero one zero one zero three"));
console.log(textToNumberBinary("zero one zero one zero one zero one"));
console.log(textToNumberBinary("one one"));
