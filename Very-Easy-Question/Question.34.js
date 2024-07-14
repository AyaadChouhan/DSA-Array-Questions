// Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"


function evenOrOdd(arr) {
    let num = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     num += arr[i];
    // }

    // for (const val of arr) {
    //     num += val;
    // }
    // return num % 2 === 0 ? true : false;

   return arr.reduce( (acc, curr)=>{
        acc += curr;
        if (acc % 2 === 0) {
            return true;
        }else{
        return false
        }
    }, 0);
}
console.log(evenOrOdd([0, 1, 5]));
console.log(evenOrOdd([1]));