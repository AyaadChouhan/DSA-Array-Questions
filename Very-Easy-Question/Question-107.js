// Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// Examples
// formatDate("11/12/2019") ➞ "20191211"

// formatDate("12/31/2019") ➞ "20193112"

// formatDate("01/15/2019") ➞ "20191501"

function formatDate(date) {
  let arr = [];
  let str = "";
  // for (let i = 0; i < date.length + 1; i++) {
  //   if (date[i] !== "/" && date[i] !== undefined) {
  //     str += date[i];
  //   } else if (date[i] === "/" || date[i] === undefined) {
  //     arr.push(str);
  //     str = "";
  //   }
  // }
  // return arr.reverse().join("");
  // console.log( Number("A"))

  // let str = "";
  return date.split("").reduce((acc, curr) => {
    let val = Number(curr);
    if (!isNaN(val)) {
      str += curr;
    } else if (isNaN(val)) {
        acc.push(str);
        str = "";    
    }
    return acc
  }, []).reverse().join('');
}
console.log(formatDate("01/15/2019/"));
