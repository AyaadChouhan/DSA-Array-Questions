// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples
// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

// maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

// maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

function maxTotal(arr, sum = 0) {
//   let val = arr.sort((a, b) => {
//     return b - a;
//   });

let newArr = []
for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }        
    }   
    // newArr.push(temp) 
}

  for (let i = 0; i < 5; i++) {
    sum += arr[i];
  }
  return sum
}
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
