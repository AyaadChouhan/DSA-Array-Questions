// Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples
// nthSmallest([1, 3, 5, 7], 1) ➞ 1

// nthSmallest([1, 3, 5, 7], 3) ➞ 5

// nthSmallest([1, 3, 5, 7], 5) ➞ null

// nthSmallest([7, 3, 5, 1], 2) ➞ 3

function nthSmallest(arr, val) {
    // return arr.at(val - 1)

   return arr.reduce((acc, curr, ind)=>{
        if (ind === val - 1) {
            acc = curr
        } return acc
    }, null)
}
console.log(nthSmallest([7, 3, 5, 1], 2))
console.log(nthSmallest([1, 3, 5, 7], 
    5))