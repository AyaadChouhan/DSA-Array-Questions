// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function filterArray(arr) {
  let newArr = [];
  
//   for (const val of arr) {
//     if (typeof val === "number") {
//       newArr.push(val);
//     }
//   }
//   return newArr;


for (const el of arr) {
    let coercion = Number(el);
    if (!isNaN(coercion)) {
        newArr.push(el)
    }
}
return newArr.filter((val)=>{
  return typeof val !== 'string'  
})
}
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
