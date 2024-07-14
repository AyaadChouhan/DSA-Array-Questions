// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1

function search(arr, n) {
    // return arr.indexOf(n)    
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === n) {
    //         return i;
    //     }
    // }

    // return arr.reduce( (acc, curr, index)=>{
    //     if (curr === n) {
    //        return acc = index;
    //     }
    //     return acc
    // }, -1)
    let index = -1;
    arr.forEach((element, ind) => {
        if (element === n) {
            index = ind
        }
    });
    return index
}
console.log(search([1, 2, 3], 4));
console.log(search([9, 8, 3], 3));