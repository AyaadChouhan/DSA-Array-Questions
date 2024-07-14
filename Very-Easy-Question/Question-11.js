// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex(arr, target) {
  //    for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === target) {
  //        return i
  //     }
  //    }

  // let i = -1;
  // arr.forEach((element, ind) => {
  //   if (element === target) {
  //     i = ind;
  //   }
  // });
  // return i

  //   return arr.findIndex( (el, val)=>{
  //     if(el === target){
  //         return el
  //     }
  //   })

  return arr.reduce((acc, curr, ind) => {
    return curr === target && acc === -1 ? ind : acc;
  },-1);

  //  return arr.indexOf(target);
}
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Orange"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
