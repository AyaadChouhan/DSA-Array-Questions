// Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]


function wordLengths(arr) {
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     newArr.push(arr[i].length)
    // }
    // return newArr

//    return arr.reduce( (acc, curr)=>{
//         acc.push(curr.length)
//         return acc
//     }, [])

    return arr.map((val, ind)=>{
        return val.length
    })
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));