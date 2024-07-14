// ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.


const arr = ["eyes", "nose", "lips", "ears"];
let [eyes, , , ears] = arr;

console.log(eyes); 
console.log(ears); 