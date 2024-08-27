// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"])
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞ []
// Notes
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr) {
    let newArr = [];
    let booleanVal = true;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let firstVal = arr[i][0];
        if (arr[i][j] === firstVal) {
          booleanVal = true;
        } else if (arr[i][j] !== firstVal) {
          booleanVal = false;
          break;
        }
      }
      // let lastVal = arr[i][arr[i].length - 1];
      booleanVal ? newArr.push(arr[i]) : '';
    }
    return newArr;
  }
  console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
  console.log(identicalFilter(["88", "999", "22", "545", "133"]));
  console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
  