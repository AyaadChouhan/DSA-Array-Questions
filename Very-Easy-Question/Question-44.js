// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

function sumFive(arr) {
    let count = 0
    const num = 5;
    // for (const val of arr) {
    //     if (val > num) {
    //         count += val
    //     }
    // }

    //  arr.forEach(el => {
    //     if (el > num) {
    //         count += el
    //     }
    // });
    // return count

}
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));