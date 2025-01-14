// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120


function convert(val) {
    const secInMin = 60;
    return val * secInMin
}
console.log(convert(2))
console.log(convert(5))