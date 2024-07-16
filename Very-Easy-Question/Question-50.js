// Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// ]

function makeRug(height, width, val) {
  let arr = [];

  for (let i = 0; i < height; i++) {
    let str = "";
    // arr.push(val.repeat(width));
    // console.log(val.repeat(width));
    for (let j = 0; j < width; j++) {
        str += val;      
        console.log(str);  
    }
    arr.push(str);
  }
  return arr;
}

console.log(makeRug(2, 3, "A"));
