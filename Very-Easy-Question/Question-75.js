// Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// Examples
// unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

// unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

// unlucky13([104, 351, 455, 806, 871]) ➞ []
// All numbers in the array are divisible by 13.

function unlucky13(arr) {
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 13 !== 0)    {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr

   return arr.reduce((acc, curr)=>{
        if (curr % 13 !== 0) {
            acc.push(curr)
        }
        return acc
    }, [])
}

console.log(unlucky13([104, 351, 455, 806, 871]));
console.log(unlucky13([53, 182, 435, 591, 637]));