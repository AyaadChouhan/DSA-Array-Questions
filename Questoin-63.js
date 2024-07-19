// Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
// outlierNumber([2, 3, 4]) ➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.

// outlierNumber([1, 2, 3]) ➞ 2

// outlierNumber([4, 1, 3, 5, 9]) ➞ 4

function outlierNumber(arr) {
  // for (let i = 0; i < arr.length; i++) {
  // if (arr[i] % 2 === 0) {
  //     return arr[i]
  // }
  // }

  //=============================/

  //    return arr.reduce( (acc, curr)=>{
  //         if (curr % 2 === 0) {
  //             acc = curr
  //         }
  //         return acc
  //     })

  let val = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      val = arr.indexOf(element);
    }
  });
  return arr[val];
}
console.log(outlierNumber([4, 1, 3, 5, 9]));
console.log(outlierNumber([1, 2, 3]));
