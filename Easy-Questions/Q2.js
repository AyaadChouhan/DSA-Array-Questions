// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function canNest(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       return false;
//     }
//   }
//   return true;

// return arr1.reduce((acc, curr)=>{
//     if (arr2.includes(curr)) {
//         acc = false
//     }
//     return acc
// }, true)
}
// console.log(canNest([1, 2, 3, 4], [2, 3]));
// console.log(canNest([3, 1], [4, 0]));


class canNest2{
    constructor(arr1, arr2){
        this.arr1 = arr1;
        this.arr2 = arr2;
    }
    result(){
        for (const val of this.arr1) {
            if (this.arr2.includes(val)) {
                return false
            }
        }
        return true
    }
}
const data = new canNest2([3, 1], [4, 0]);
const data2 = new canNest2([1, 2, 3, 4], [2, 3]);
console.log(data.result())
console.log(data2.result())
