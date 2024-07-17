// Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

function sumMinimums(arr) {
  let sum = 0;

  //   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] <= num) {
//             num = arr[i][j]
//         }
//     }
//     sum += num
// }


for (let i = 0; i < arr.length; i++) {
    let val = Math.min(...arr[i])
    sum += val
}
  return sum;
}


console.log(
  sumMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);
