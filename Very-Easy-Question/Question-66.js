// Array Index
// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"],
];

idx = [1, 3, 5, 8];
// You have to find the characters in these indexes of the given list if you think of the indexes as:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
function indexes(arr, idx) {
  // let flatedArr = arr.flat();
  // console.log(flatedArr);
  // let str = '';
  // for (let i = 0 ; i < idx.length; i++) {
  //     str += (flatedArr[idx[i] - 1]);
  // }
  // return str

  let i = 0;
  return arr.flat().reduce((acc, curr, ind) => {
    if (ind === idx[i] - 1) {
      i++;
      acc += curr;
    }
    return acc;
  }, "");
}
console.log(indexes(arr, idx));
