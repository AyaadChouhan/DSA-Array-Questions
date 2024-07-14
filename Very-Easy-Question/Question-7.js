// ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6];
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2

let [a, b, c, ...d] = arr;
console.log(a === arr[0]); // true
console.log(d); // [4,5,6]
console.log(arr); // [1,2,3,4,5,6];


let A = arr[0]
let B = arr[1]
let C = arr[2]
console.log(C);