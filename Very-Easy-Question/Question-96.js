// Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

// Examples
// firstLast([5, 10, 15, 20, 25]) ➞ [5, 25]

// firstLast(["edabit", 13, null, false, true]) ➞ ["edabit", true]

// firstLast([undefined, 4, "6", "hello", null]) ➞ [undefined, null]

function firstLast(arr) {
    // const newArr = [];
    // newArr.push(arr[0], arr[arr.length - 1])
    // return newArr

    // return [arr[0], arr[arr.length - 1]]

    // return [arr.at(0), arr.pop()]
}
console.log(firstLast([undefined, 4, "6", "hello", null]));
console.log(firstLast([5, 10, 15, 20, 25]));