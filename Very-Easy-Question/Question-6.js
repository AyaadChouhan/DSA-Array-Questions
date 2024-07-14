// Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

function incrementItems(arr) {
  const newArr = [];

  // arr.forEach(element => {
  //     newArr.push(element + 1);
  // });
  // return newArr

  // return arr.map( (el)=>{
  //     return el + 1
  //  })

  // for (const val of arr) {
  //     newArr.push(val + 1)
  // }
  // return newArr

  //   return arr.reduce((acc, val, ind) => {
  //     acc.push(val + 1);
  //     return acc;
  //   }, []);

  let i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + 1);
    i++;
  }
  return newArr;
}

console.log(incrementItems([0, 1, 2, 3]));
