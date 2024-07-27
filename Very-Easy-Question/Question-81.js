// Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples
// correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ) ➞ [1, 1, -1]

// correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ) ➞ [1, -1, 1, 1, 1]

function correctStream(arr1, arr2) {
  let newArr = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] === arr2[i]) {
  //       newArr.push(1);
  //     } else {
  //       newArr.push(-1);
  //     }
  //   }
  //   return newArr;
  
  //===================================

  return arr1.reduce((acc, curr, index) => {
    if (curr === arr2[index]) {
      acc.push(1);
    } else {
      acc.push(-1);
    }
    return acc;
  }, []);

  //=====================================

  //   return arr1.map((val, ind) => {
  //     if (val === arr2[ind]) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
}
console.log(
  correctStream(
    ["april", "showrs", "bring", "may", "flowers"],
    ["april", "showers", "bring", "may", "flowers"]
  )
);
