// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4

function totalAmountAdjectives(obj) {
  let count = 0;
  let myObj = Object.values(obj);

  //   for (let i = 0; i < myObj.length; i++) {
  //     count++;
  //   }
  //   return count;

  // return myObj.reduce( (acc, curr)=>{
  //     acc++;
  //     return acc
  // }, 0)

  return myObj.length;
}

console.log(
  totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })
);
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));
