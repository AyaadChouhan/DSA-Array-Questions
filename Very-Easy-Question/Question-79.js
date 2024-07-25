// Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
// findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

// findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

// findBob(["Jimmy", "Layla", "James"]) ➞ -1

function findBob(arr) {
  const bob = "Bob";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === bob) {
//       return i;
//     }
//   }
//   return -1;

return arr.reduce((acc, curr, i)=>{
    if (arr[i] === bob) {
        acc = i
    }
    return i
}, 0)

}
console.log(findBob(["Jimmy", "Layla", "Bob"]));
