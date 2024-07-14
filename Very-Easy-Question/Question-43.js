// Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

function rangeOfNum(n1, n2) {
    let newArr = [];
    // for (let i = n1 + 1; i < n2; i++) {
    //     newArr.push(i)
    // }
    let i = n1 + 1;
    while (i <= n2) {
        newArr.push(i)
        i++
    }
    return newArr
}
console.log(rangeOfNum(2, 11));
