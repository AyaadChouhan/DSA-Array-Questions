// The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

function chosenWine(arrOfObj, tempPrice = null) {
  if (arrOfObj.length === 1) return arrOfObj[0].name;
  if (arrOfObj.length === 0) return [];

  for (let i = 0; i < arrOfObj.length; i++) {
    for (let j = i + 1; j < arrOfObj.length; j++) {
      if (arrOfObj[i].price > arrOfObj[j].price) {
        tempPrice = arrOfObj[i];
        arrOfObj[i] = arrOfObj[j];
        arrOfObj[j] = tempPrice;
      }
    }
  }
  return arrOfObj[1].name;

  // ================================

  // let isSorted = obj.sort((a, b)=>{
  //     return a.price - b.price
  // })
  // return isSorted[1]
}

console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));
console.log(chosenWine([]));
console.log(
  chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 },
  ])
);
