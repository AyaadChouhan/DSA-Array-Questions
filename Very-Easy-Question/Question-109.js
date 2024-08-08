// Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

// Examples
// returnOnlyInteger([9, 2, "space", "car", "lion", 16]) ➞ [9, 2, 16]

// returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]) ➞ [81, 123]

// returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ➞ [10, 56, 20, 3]

// returnOnlyInteger(["String",  true,  3.3,  1]) ➞ [1]

function returnOnlyInteger(arr) {
    // return arr.filter((val)=>{
    //     return typeof val === "number"
    // })

    //========================================

    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr[i] === 'number') {
    //         newArr.push(arr[i])
    //     }        
    // }
    // return newArr

    //========================================

    return arr.map(val=>{
        if(typeof val === 'number'){
            return val
        }
    }).filter(val =>{
        return val !== undefined
    })

}

console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]));