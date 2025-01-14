// Combined Consecutive Sequence
// Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

// Examples
// consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) ➞ true

// consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9]) ➞ false

// consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10]) ➞ false

// consecutiveCombo([44, 46], [45]) ➞ true

function consecutiveCombo(arr1, arr2) {
//   let concat = arr1.concat(arr2);
//   let ConsecutiveSequence = concat.sort((a, b) => {
//     return a - b;
//   });

//   let temp = ConsecutiveSequence[0];

//   for (let i = 0; i < ConsecutiveSequence.length; i++) {
//     if (temp !== ConsecutiveSequence[i]) {
//       return false;
//     } else {
//       temp++;
//     }
//   }
//   return true;
// [ 44, 46, 99, 45 ]
let newArr = arr1.concat(arr2);
for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[i] > newArr[j]) {
            let temp = newArr[i]
            newArr[i] = newArr[j]
            newArr[j] = temp
        }        
    }
}
return newArr
}
console.log(consecutiveCombo([44, 46, 99], [45]));
