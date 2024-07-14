// Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
function findDifference(a1, a2) {
  let n1 = 1;
  let n2 = 1;

  // for (let i = 0; i < a1.length; i++) {
  //     n1 *= a1[i]
  // }
  // for (let i = 0; i < a2.length; i++) {
  //     n2 *= a2[i]
  // }
  // let val = n1 - n2;
  // return val

  let first = a1.reduce((acc, curr) => {
    acc *= curr;
    return acc;
  }, 1);
  
  let sec = a2.reduce((acc, curr) => {
    acc *= curr;
    return acc;
  }, 1);

  return first - sec;
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));
