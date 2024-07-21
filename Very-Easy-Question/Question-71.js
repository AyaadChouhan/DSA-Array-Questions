// Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

// deNest([[[[[[[true]]]]]]]) ➞ true

// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"

function deNest(nestedArr) {
    // return nestedArr.join();
    let str = nestedArr.flat(Infinity)
    return str

}
console.log(deNest([[[[[[[[[[[[[[[[[0, 2]]]]]]]]]]]]]]]]]));
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));
