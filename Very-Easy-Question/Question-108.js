// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

// repeat("7", 2) ➞ ["7", "7"]

// repeat(0, 0) ➞ []


function repeat(val, times) {
    const arr = []
//    for (let i = 0; i < times; i++) {
//         arr.push(val)    
//    }
//     return arr

let i = 0;
while (i < times) {
    arr.push(val)
    i++
}
return arr
}
console.log(repeat("7", 2));
console.log(repeat("edabit", 3));
