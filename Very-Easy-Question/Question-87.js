// Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]

// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]

// negate([]) ➞ []

function negate(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     newArr.push(-arr[i]);
  //   }
  //   return newArr;

  //===================================
  
  return arr.map((val) => {
    return -val;
  });
}

console.log(negate([-1, -2, -3, 4]));
console.log(negate([]));
