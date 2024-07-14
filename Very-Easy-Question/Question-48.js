// True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]

function integerBoolean(str) {
    let val = str.split("")
    // let arr = [];
    // for (let i = 0; i < val.length; i++) {
    //     arr.push(Boolean(Number(val[i])))
    // }
    // return arr
    
   return val.reduce( (acc, curr)=>{
            acc.push(Boolean(Number(curr)))
            return acc
    }, [])
}

console.log(integerBoolean("001"));