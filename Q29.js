// Get Students with Names and Top Notes
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

// Examples
// getStudentsWithNamesAndTopNotes([
//   { "name": "John", "notes": [3, 5, 4] },
//   { "name": "Max", "notes": [1, 4, 6] },
//   { "name": "Zygmund", "notes": [1, 2, 3] }
// ])
// ➞ [
//   { "name": "John", "topNote": 5 },
//   { "name": "Max", "topNote": 6 },
//   { "name": "Zygmund", "topNote": 3 }
// ]

function getStudentsWithNamesAndTopNotes(arr) {
  //   for (const obj of arr) {
  //     obj.notes = Math.max(...obj.notes);
  //   }
  //   return arr;

  arr.reduce((acc, curr) => {
    let temp = 0;
    const tempObject = {};
    for (let i = 0; i < curr.notes.length; i++) {
      if (curr.notes[i] > temp) {
        temp = curr.notes[i];
      }
    }

    //==============================
    curr.notes = temp;
    // ==========================
    // tempObject.name = curr.name;
    // tempObject.notes = temp;
    // acc.push(tempObject);
    // return acc;
  }, []);
  return arr;
}

console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Max", notes: [1, 4, 6] },
    { name: "Zygmund", notes: [1, 2, 3] },
  ])
);
