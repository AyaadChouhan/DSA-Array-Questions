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
// If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr) {
    let result = [];
    let val = 1;
    for (let i = 0; i < arr[i].length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][0] !== arr[i][j]) {
          val = 0;
        }
      }
      if (val === 1) {
        result.push(arr[i]);
      }
    }
    return result;
  
    //===================================================
  
    // for (let i = 0; i < arr.length; i++) {
    //   let newArr = [];
    //   for (let j = 0; j < arr[i].length; j++) {
    //     if (arr[i][0] === arr[i][j]) {
    //       newArr.push(true);
    //     } else {
    //       newArr.push(false);
    //     }
    //   }
    //   if (!newArr.includes(false)) {
    //     result.push(arr[i]);
    //   }
    // }
    // return result;
  
    //=============================================
  
    // return arr.filter((val) => {
    //   return val !== val[0];
    // });
  }
  console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
  console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
  console.log(identicalFilter(["88", "999", "22", "545", "133"]));