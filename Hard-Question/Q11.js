// Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

function commonElements(arr, arr2) {
  const newArr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (arr[i] === arr2[j]) {
  //         newArr.push(arr[i]);
  //       }
  //     }
  //   }
  //   return newArr

  return arr.reduce((acc, curr, index) => {
    if (arr2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
