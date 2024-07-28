// Word Endings
// Create a function that adds a string ending to each member in an array.

// Examples
// addEnding(["clever", "meek", "hurried", "nice"], "ly")
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]

// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]

function addEnding(arr) {
  let newArr = [];
  const concatStr = "ly";
  // for (let i = 0; i < arr.length; i++) {
  //     newArr.push(arr[i].concat(concatStr))
  // }
  // return newArr

  //   return arr.map((val, ind) => {
  //     return val + concatStr;
  //   });

  return arr.reduce((acc, curr) => {
    acc.push(curr.concat(concatStr));
    return acc;
  }, []);
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
