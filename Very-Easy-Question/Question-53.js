// Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Examples
// birthdayCakeCandles([4, 4, 1, 3]) ➞ 2
// // The maximum height candles are four units high.
// // There are two of them, so you return 2.

// birthdayCakeCandles([3, 2, 1, 3]) ➞ 2

// birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) ➞ 4

function birthdayCakeCandles(arr) {
  let count = 0;
  let max = Math.max(...arr);

  //   createing a function for find maximum number
  let n = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      n = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      count++;
    }
  }
  return count;
}
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));
