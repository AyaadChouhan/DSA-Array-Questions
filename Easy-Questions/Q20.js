// Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

function societyName(arr, str = "") {
  //   arr.forEach((el, index) => {
  //     str += el[0];
  //   });
  //   let sortedArr = str.split("");
  //   return sortedArr.sort().join('');

  let values = arr.map(val => {
    return val[0];
  });

  return values.sort().join("");
}
console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
);
