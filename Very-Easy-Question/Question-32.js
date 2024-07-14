// Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

function rotateByOne(arr) {
  let lastOne = arr[arr.length - 1];
  let first = arr[0];

  let newArr = [];
//   newArr.push(lastOne);
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;

    return arr.map((el, ind) =>{
        return el.pop()
    });
}
console.log(rotateByOne([20, 15, 26, 8, 4]));
