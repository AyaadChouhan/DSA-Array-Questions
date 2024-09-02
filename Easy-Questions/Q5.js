// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

function numberSplit(num) {
  if (num % 2 === 0) {
    const div = num / 2;
    return [div, div];
  } else if (num % 2 !== 0) {
    if (num < 0) {
        const div = num / 2;
        const remainder = div % 2;
        return [Math.floor(div + remainder), Math.floor(div - remainder)];
    }else{
    const div = num / 2;
    const remainder = div % 2;
    return [Math.floor(div), Math.floor(Math.floor(div) + remainder)];
    }
  }
}
console.log(numberSplit(-9));
console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(10));
