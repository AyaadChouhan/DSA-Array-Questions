// Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// Examples
// getSequence(1, 5) ➞ [1, 2, 3, 4, 5]

// getSequence(98, 100) ➞ [98, 99, 100]

// getSequence(1000, 1000) ➞ [1000]

function getSequence(n1, n2) {
  let newArr = [];
  const diff = n2 - n1;
//   for (let i = 0; i <= diff; i++) {
//     newArr.push(n1 + i);
//   }

//=======================================
let i = 0;
    while(i <= diff) {
        newArr.push(n1 + i)
        i++
    }
  return newArr;
}

console.log(getSequence(1, 5));
console.log(getSequence(98, 100));
console.log(getSequence(1000, 1000));
