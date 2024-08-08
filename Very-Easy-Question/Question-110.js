// Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]
// Examples
// calcDeterminant([
//   [1, 2],
//   [3, 4]
// ]) ➞ -2

// calcDeterminant([
//   [5, 3],
//   [3, 1]
// ]) ➞ -4

// calcDeterminant([
//   [1, 1],
//   [1, 1]
// ]) ➞ 0

function calcDeterminant(arr) {
    const [[a, b], [c, d]] = arr
    return (a * d) - (b * c);

//    return (arr[0][0] * arr[1][1]) - (arr[0][1] * arr[1][0]) 

}
console.log(calcDeterminant([
    [1, 2],
    [3, 4]
  ]));