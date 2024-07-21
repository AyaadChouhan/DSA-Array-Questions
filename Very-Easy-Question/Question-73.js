// Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// Examples
// monthName(3) ➞ "March"

// monthName(12) ➞ "December"

// monthName(6) ➞ "June"

function monthName(num) {

//   let obj = {
//     1: "January",
//     2: "February",
//     3: "March",
//     4: "April",
//     5: "May",
//     6: "June",
//     7: "July",
//     8: "August",
//     9: "September",
//     10: "October",
//     11: "November",
//     12: "December",
// };
// return num <= 12 && num > 0 ? obj[num] : "pls write a valid number";

//=======================================

  let arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
return arr[num - 1]
}

console.log(monthName(12));
