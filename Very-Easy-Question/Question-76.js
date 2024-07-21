// String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]

// stringPairs("edabit") ➞ ["ed", "ab", "it"]

// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]

function stringPairs(str) {
  let arr = [];
  //   for (let i = 0; i < str.length; i += 2) {
  //     if (str[i + 1]) {
  //       arr.push(str[i].concat(str[i + 1]));
  //     } else {
  //       arr.push(str[i].concat("*"));
  //     }
  //   }
  //   return arr;

  //====================================

  //  return str.split("").reduce((acc, curr, index, arr) => {
  //     if (index % 2 === 0) {
  //       acc.push(curr + (arr[index + 1] || "*"));
  //     }
  //     return acc;
  //   }, []);

  //========================================

  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1]) {
      arr.push(str.slice(i, i + 2));
    } else {
      arr.push(str[i] + "*");
    }
  }
  return arr;
}
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));
