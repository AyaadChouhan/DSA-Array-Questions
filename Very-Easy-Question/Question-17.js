// Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

function valueAt(arr, n1, n2) {
    let val = Math.floor(n1 / n2);
    
    // return val

    // return arr[val]

    return arr.at(val)
    
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 , 2));