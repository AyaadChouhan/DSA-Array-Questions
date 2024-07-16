// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
// cleanUpArray(["8"]) ➞ [[8], []]

// cleanUpArray(["11"]) ➞ [[], [11]]

// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]

function cleanUpArray(arr) {
  let evenNumArr = [];
  let oddArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //         let val = Number(arr[i]);
  //     //     if (val % 2 === 0) {
  //     //       evenNumArr.push(val);
  //     //     } else {
  //     //       oddArr.push(val);
  //     //     }
  //     val % 2 === 0 ? evenNumArr.push(val) : oddArr.push(val);
  //   }

  //   return Array(evenNumArr, oddArr);

  arr.forEach((val) => {
    let num = Number(val)
    if (num % 2 === 0) {
        evenNumArr.push(num)
    }else{
        oddArr.push(num)
    }
    
});
return [evenNumArr, oddArr]
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));
