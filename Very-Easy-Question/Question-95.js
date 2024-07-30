// Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples
// findSmallestNum([34, 15, 88, 2]) ➞ 2

// findSmallestNum([34, -345, -1, 100]) ➞ -345

// findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

// findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999

// findSmallestNum([7, 7, 7]) ➞ 7


function findSmallestNum(arr) {
    // let newArr = arr.sort((a, b)=>{
    //     return a - b
    // })
    // return newArr[0]

    // let num = 0
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < num) {
    //         num = arr[i]
    //     }
    // }
    // return num

    return arr.reduce((acc, curr)=>{
        if (curr < acc) {
            acc = curr
        }
        return acc
    }, 0)
}
console.log(findSmallestNum([34, -345, -1, 100]));