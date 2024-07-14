// Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false


function hasSameBread(arr1, arr2) {
  // if(arr1[0] === arr2[0] && arr1[2] === arr2[2]) {
  //   return true
  // } else {
  //   return false
  // }

  // return (arr1[0] === arr2[0] && arr1[2] === arr2[2]) ? true : false;

  // let arr1Val = arr1.slice(0, 1);
  // let arr2Val = arr2.slice(0, 1);
  // let arr1LastVal = arr1.slice(2, 3);
  // let arr2LastVal = arr2.slice(2, 3);
  // return (
  //   arr1Val.join() == arr2Val.join() &&
  //   arr1LastVal.join() === arr2LastVal.join()
  // );

  let [firstBread, topings1, firstBread2] =  arr1;
  let [secBread, topings, secBread2] =  arr2;

  return firstBread === secBread && secBread2 === firstBread2;
}
console.log(
  hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
);

console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  )
);
