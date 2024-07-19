// Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an agesay.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples
// ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"

// ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."

// ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"

function ageDifference(ages) {
  //=====================================

  //   let val  = ages.sort( (a,b)=>{
  //       return b - a;
  //     })
  //     let difference = val[0] - val[1];
  //     return (difference > 0) ? difference : "No age difference between spouses.";

  //===========================================

  let max = Math.max(...ages);
  let index = ages.indexOf(max);
  let val1 = ages.splice(index, 1);

  let sec = Math.max(...ages);
  let index2 = ages.indexOf(sec);
  let val2 = ages.splice(index2, 1);

  const diff = val1 - val2;
  return diff ? diff : "No age difference between spouses.";
}
console.log(ageDifference([25, 4, 2, 6, 25]));



