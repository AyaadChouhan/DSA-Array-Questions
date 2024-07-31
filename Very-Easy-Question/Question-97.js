// Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// Examples
// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]\

function getFillings(arr) {
  //   let newArr = [];
  //   let i = 1;
  //   while (i < arr.length - 1) {
  //     newArr.push(arr[i]);
  //     i++
  //   }
  //   return newArr

  //==================================================

  //   return arr
  //     .map((val, ind) => {
  //       if (ind !== 0 && ind !== arr.length - 1) {
  //         return val;
  //       }
  //     })
  //     .filter((val) => {
  //       return val !== undefined;
  //     });

  //==================================================

  //   return arr.filter((val, ind) => {
  //     if (ind !== 0 && ind !== arr.length - 1) {
  //       return val;
  //     }
  //   });
}
console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));
