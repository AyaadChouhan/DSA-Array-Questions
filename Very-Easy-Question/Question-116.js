// Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// Examples
// checkFactors([2, 3, 4], 12) ➞ true
// // Since 2, 3, and 4 are all factors of 12.

// checkFactors([1, 2, 3, 8], 12) ➞ false
// // 8 is not a factor of 12.

// checkFactors([1, 2, 50], 100) ➞ true

// checkFactors([3, 6], 9) ➞ false

function checkFactors(arr, val) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (val % arr[i] !== 0) {
    //         return false;
    //     }
    // }
    // return true
    
    return arr.reduce((acc, curr)=>{
        if (val % curr !== 0) {
            acc = false
        }
        return acc
    }, true)
}
console.log(checkFactors([3, 6], 9))
console.log(checkFactors([2, 3, 4], 12))