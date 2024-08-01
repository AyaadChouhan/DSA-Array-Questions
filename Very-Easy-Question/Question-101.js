// X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// Examples
// convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
// ➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// convertCartesian([9, 8, 3], [1, 1, 1])
// ➞ [[9, 1], [8, 1], [3, 1]]

function convertCartesian(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let val = [arr1[i], arr2[i]];
//     newArr.push(val);
//   }
//   return newArr;

//=================================

// return arr1.map((val, ind)=>{
//     return [val, arr2[ind]]
// })

//=================================

return arr1.reduce((acc, curr, ind)=>{
    acc.push([curr, arr2[ind]])
    return acc
}, [])
}

console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
