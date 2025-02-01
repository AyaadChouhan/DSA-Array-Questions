// Reorder Digits
// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

// Examples
// reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]

// reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]

// reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]

// reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]

// reorderDigits([1, 2, 3, 4], "asc")  ➞ [1, 2, 3, 4]

// reorderDigits([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]
function innerFunc(params) {}

function reorderDigits(arr, str) {
  if (arr.length < 0) return "you passed a empty array";

  if (str === "asc") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length <= 1) {
        continue;
      } else {
        const splitedArrVal = String(arr[i]).split("");

        let result = splitedArrVal.sort((a, b) => {
          return Number(a) - Number(b);
        });
        arr[i] = Number(result.join(""));
      }
    }
  } else if (str === "desc") {
    for (let i = 0; i < arr.length; i++) {
      const splitedArrVal = String(arr[i]).split("");
      if (splitedArrVal.length > 1) {
        let result = splitedArrVal.sort((a, b) => {
          return Number(b) - Number(a);
        });
        arr[i] = Number(result.join(""));
      } else {
        continue;
      }
    }
  }

  return arr;
}
console.log(reorderDigits([63251, 78221], "desc"));
console.log(reorderDigits([1, 2, 3, 4], "desc"));
console.log(reorderDigits([63251, 78221], "asc"));
console.log(reorderDigits([1, 2, 3, 4], "asc"));
