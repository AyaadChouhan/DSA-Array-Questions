// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

function getOnlyEvens(arr) {
  //    return arr.reduce((acc, curr, i)=>{
  //         if (curr % 2 === 0 && i % 2 === 0) {
  //             acc.push(curr);
  //         }
  //         return acc
  //     }, [])
  //===================================================
  //   const newArr = [];
  //   let i = 0
  //   for (const el of arr) {
  //     if (el % 2 === 0 && i % 2 === 0) {
  //       newArr.push(el);
  //     }
  //     i++;
  //   }
  //   return newArr
  //===================================================
  //   return arr
  //     .map((val, i) => {
  //       if (val % 2 === 0 && i % 2 === 0) {
  //         return val;
  //       }
  //     })
  //     .filter((val) => {
  //       return val !== undefined;
  //     });
  //===================================================
  return arr.filter((val, i) => {
    if (val % 2 === 0 && i % 2 === 0) {
      return val;
    }
  });
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
