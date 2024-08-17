// Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

// function minusOne(arr) {
//   arr.pop()
//   return arr
// }
// Examples
// x = [1, 2, 3, 4, 5]
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2]  // 3rd time function is called.
// minusOne(x) ➞ [1]  // 4th time function is called.

// // What I want instead:
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.

function minusOne(arr) {
    // let newArr = [...arr];
    // newArr.pop()
    // return newArr
    
    // let newArr = Array(...arr)
    // newArr.pop()
    // return newArr

   let result = arr.reduce((acc, curr)=>{
    acc.push(curr)
    return acc
    }, [])
    result.pop()
    return result

  }
let x = [1, 2, 3, 4, 5]
console.log(minusOne(x))
console.log(minusOne(x))
console.log(minusOne(x))
console.log(minusOne(x))
console.log(minusOne(x))
console.log(minusOne(x))