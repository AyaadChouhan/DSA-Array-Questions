// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16

function length(str) {
    let arr = Array(...str);
    // return arr
    let count = 0;

    arr.forEach((el) => {
        count++
    });
    
//    return arr.reduce((acc) => {
//         acc++
//         return acc
//     }, 0);
    return count
}
console.log(length("wash your hands!"));