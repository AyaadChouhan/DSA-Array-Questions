// Longest Word in a 7 Segment Display
// Given an array of words, return the longest word which can fit on a 7 segment display.

// Imadesxa bng

// Letters which do not fit on a 7 segment display are k, m, v, w and x.
// Therefore, do not count words which include these letters.
// Examples
// longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

// longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

// longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""

function longest7SegmentWord(arr) {
  const arrOfEl = ["k", "m", "v", "w", "x"];
  // for (const el of arr) {
  //     if (!el.includes(...arrOfEl) && el.length > 7) {
  //         return el
  //     }
  // }
  // ============================================================
  //   let result;
  //   arr.forEach((element) => {
  //     if (!element.includes(...arrOfEl) && element.length > 7) {
  //       result = element;
  //     }
  //   });
  //   return result;
  // ============================================================

  const result = arr.reduce((acc, curr) => {
    if (!curr.includes(...arrOfEl) && curr.length > 7) {
      acc = curr;
      console.log(acc);
    }
    return acc;
  }, null);
  return result;
}

console.log(
  longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])
);
