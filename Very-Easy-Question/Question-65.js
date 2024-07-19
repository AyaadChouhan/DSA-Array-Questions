// Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
// moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

// moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]

// moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]) ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function moveZeros(arr) {
  let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 0) {
  //         arr.splice(i,1)
  //         count++
  //     }
  // }
  // for (let i = 0; i < count; i++) {
  //     arr.push(0)
  // }
  // return arr

  //===================================

  let result = arr.reduce((acc, curr) => {
    if (curr === 0) {
      count++;
    } else {
      acc.push(curr);
    }
    return acc
  }, []);
  
  while (count > 0) {
    result.push(0);
    count--;
  }
  return result;
}
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
