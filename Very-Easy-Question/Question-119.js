// Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// Examples
// oddProduct([3, 4, 1, 1, 5]) ➞ 15

// oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25

// oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1

function oddProduct(arr) {
    let n = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            n *= arr[i]
        }
    }
    return n
}
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));
console.log(oddProduct([5, 5, 8, 2, 4, 32]));