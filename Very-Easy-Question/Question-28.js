// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]


function halfQuarterEighth(val) {
    let newArr = [];
    // if (true) {
    //     newArr.push(val / 2)
    //     newArr.push((val / 2) / 2)
    //     newArr.push(val / 8)
    // }
    // return newArr
    
    return val ? [val / 2, val / 2 / 2, val / 8] : [];
}
console.log(halfQuarterEighth(22));