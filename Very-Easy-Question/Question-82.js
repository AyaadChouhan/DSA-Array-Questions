// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples
// nextElement([3, 5, 7, 9]) ➞ 11

// nextElement([-5, -6, -7]) ➞ -8

// nextElement([2, 2, 2, 2, 2]) ➞ 2

function nextElement(sequence) {
    const commonDifference = sequence[1] - sequence[0];
    let lastElement = sequence[sequence.length - 1];
    return lastElement + commonDifference;

    
}
// console.log(nextElement([3, 5, 7, 9]));
console.log(nextElement([-5, -6, -7]));
