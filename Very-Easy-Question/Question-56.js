// Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
// arrayLessThan100([5, 57]) ➞ true

// arrayLessThan100([77, 30]) ➞ false

// arrayLessThan100([0]) ➞ true

function arrayLessThan100(arr) {
    let num = 100;
    // if (arr[0] + arr[1] > 100) {
    //     return false
    // }
    // else{
    //     return true
    // }
   
  return  arr.reduce( (acc, curr)=>{
    acc += curr
        if (acc > num) {
            return false
        }
        else{
            return true
        }
    })
}

console.log(arrayLessThan100([77, 30]));