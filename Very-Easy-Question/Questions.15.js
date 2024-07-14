// Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

function arrBetween(n1, n2, arr) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {

  // if (arr[i] > n1 && arr[i] < n2) {
  //     newArr.push(arr[i])
  // }
  //     (arr[i] > n1 && arr[i] < n2) ? newArr.push(arr[i]) : false ;
  // }

  // for (const val of arr) {
  //      if (val > n1 && val < n2) {
  //          newArr.push(val)
  //      }
  // }

  //   arr.forEach((element) => {
  //     if (element > n1 && element < n2) {
  //       newArr.push(element);
  //     }
  //   });

 return arr.reduce( (acc, curr) =>{
    if (curr > n1 && curr < n2) {
        acc.push(curr);
    }
    return acc
  }, [])
  return newArr;
}

console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));
