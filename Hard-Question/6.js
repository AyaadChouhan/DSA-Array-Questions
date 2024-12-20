// Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false

function isPositiveDominant(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         return true
    //     }        
    // }
    // return false

    return arr.reduce((acc, curr)=>{
        if(curr > 0) acc = true;
        return acc
    }, false)
}
console.log(isPositiveDominant([5, 99, 832, -3, -4]))
console.log(isPositiveDominant([0, -4, -1]))