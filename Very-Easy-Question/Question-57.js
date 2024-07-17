// Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined

function lastItem(para) {
  //   if (typeof para === "object") {
  //     return para.pop();
  //   } else if (typeof para === "string") {
  //     return para.slice(para.length - 1, para.length);
  //   }

  if (Array.isArray(para) && para.length !== 0) {
    return para[para.length - 1]
  } else if (typeof para === "string") {
    return para.slice(para.length - 1, para.length);
  }else{
    return undefined
  }
}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
console.log(lastItem("The quick brown fox jumped over the lazy dog"));
console.log(lastItem([]));
