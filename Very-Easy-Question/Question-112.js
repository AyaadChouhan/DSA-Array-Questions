// Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples
// [5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]

// [9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

// [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

// [6, 1], 7 ➞ [6, 1]

// [3, 2, 9], 3 ➞ [0, 2, 0]

// [48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]

function getRemainderVal(arr, n) {

    // for (let i = 0; i < arr.length; i++) {
    //         arr[i] = arr[i] % n    
    // }
    // return arr

    // return arr.reduce((acc, curr)=>{
    //     acc.push(curr % n)
    //     return acc
    // }, [])

    // return arr.map(val=>{
    //     return val % n
    // })
}

console.log(getRemainderVal([17, 11, 99, 55, 23, 1], 5));