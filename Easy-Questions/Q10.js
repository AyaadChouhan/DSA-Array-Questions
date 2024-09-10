// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]

function sortByLength(strArr) {
  //    let result = strArr.sort((a, b)=>{
  //         return a.length - b.length
  //     })
  //     return result
  //===========================================
  //   let newArr = [];
  //   for (let i = 0; i < strArr.length; i++) {
  //     newArr.push(strArr[i].length);
  //   }

  //   let val = newArr.sort((a, b) => a - b);

  //   const result = [];
  //   for (let i = 0; i < val.length; i++) {
  //     for (let j = 0; j < strArr.length; j++) {
  //       if (newArr[i] === strArr[j].length) {
  //         result.push(strArr[j]);
  //       }
  //     }
  //   }
  //   return result;
  //===========================================
  let newArr = [...strArr];
  for (let i = 0; i < strArr.length; i++) {
    for (let j =  i + 1; j < strArr.length; j++) {
      if (strArr[i].length > strArr[j].length) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
}
console.log(sortByLength(["Turing", "Einstein", "Jung"]));

// for (let j = i; j < strArr.length; j++) {
//   if (strArr[i] > strArr[j]) {
//     newArr.push(strArr[i]);
//   }
// }
