// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105

function getSumOfItems(arr) {
  let sum = 0;
  //   return  arr.reduce( (acc,curr)=>{
  //         acc += curr;
  //         return acc
  //     })

//   let i = 0;
//   while (i < arr.length) {
//     sum += arr[i];
//     i++;
//   }

arr.forEach(element => {
    sum += element
});
  return sum;
}
console.log(getSumOfItems([-2, 84, 23]));
