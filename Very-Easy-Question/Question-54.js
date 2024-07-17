// Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
// largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

// largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

// largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

// largestNumbers(0, [1, 3, 4, 2]) ➞ []

function largestNumbers(constNum, arr) {
  let newArr = [];

  // for (const el of arr) {
  //     if (el > constNum) {
  //         newArr.push(el)
  //     }
  // }

  //============================

  //   arr.forEach((element) => {
  //     if (element > constNum) {
  //       newArr.push(element);
  //     }
  //   });
  //   return newArr;

  //============================

  //  return arr.reduce( (acc, curr)=>{
  //           if (curr > constNum) {
  //             acc.push(curr)
  //         }
  //         return acc
  //   }, [])

  //============================

  return arr.filter((val) => {
    return val > constNum;
  });
}
console.log(largestNumbers(2, [4, 3, 2, 1]));
