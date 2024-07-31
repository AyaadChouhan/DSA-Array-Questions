// Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// Examples
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.

// diffMaxMin([44, 32, 86, 19]) ➞ 67
// // Smallest number is 19, biggest is 86.


function diffMaxMin(arr) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }        
        if (arr[i] < max) {
            min = arr[i]
        }        
    }
    return max - min
    // const max = Math.max(...arr)
    // const min = Math.min(...arr)
    // return  max - min
}
console.log(diffMaxMin([44, 32, 86, 19]))