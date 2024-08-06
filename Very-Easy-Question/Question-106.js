// State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full
// Examples
// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
// ➞ ["CA", "NY"]

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
// ➞ ["Arizona", "Nevada"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
// ➞ ["MT", "NJ", "TX", "ID", "IL"]

// filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")

function filterStateNames(arr, val) {
  let newArr = [];
  let newVal = 0;
//   if (val === "abb") {
//     newVal = 2;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length === 2) {
//         newArr.push(arr[i]);
//       }
//     }
//   }
//   else if(val === "full"){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 2) {
//           newArr.push(arr[i]);
//         }
//       }
//   }

//   return newArr;

//=======================
if (val === "full") {
    return arr.filter(val=>{
        return val.length > 2
    })
}
if (val === "abb") {
    return arr.filter(val=>{
        return val.length === 2
    })
}


}
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
