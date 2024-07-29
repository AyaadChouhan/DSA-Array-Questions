// Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples
// isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]

// isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]

// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]



function isFourLetters(arr) {
    let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length === 4) {
    //         newArr.push(arr[i])
    //     }        
    // }
    //=================================

    // for (const val of arr) {
    //     if (val.length === 4) {
    //         newArr.push(val)
    //     }
    // }
    //==================================

    // arr.forEach(el => {
    // if (el.length === 4){
    //     newArr.push(el)
    //   }
    // });
    // return newArr
    //==================================

    // return arr.reduce((acc, curr)=>{
    //     if (curr.length === 4) {
    //         acc.push(curr)
    //     }
    //     return acc
    // }, [])
    //==================================
    
    return arr.filter((val, ind)=>{
        return val.length === 4
    })
}

console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));