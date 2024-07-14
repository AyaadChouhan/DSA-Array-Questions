// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(arr) {
  let newArr = [];
  // arr.forEach(element => {
  //     let type = typeof element
  //     newArr.push(type);
  // });

  //    return arr.reduce( (acc, curr) =>{
  //     let type = typeof curr
  //         acc.push(type);
  //         return acc
  //     }, [])

//   for (let i = 0; i < arr.length; i++) {
//         newArr.push(typeof arr[i])
//   }

    for (const val of arr) {
        newArr.push(typeof val)
    }
  return newArr
}

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);
