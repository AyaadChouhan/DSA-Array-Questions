// Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// Examples
// minutesToSeconds("01:00") ➞ 60

// minutesToSeconds("13:56") ➞ 836

// minutesToSeconds("10:60") ➞ false

function minutesToSeconds(time) {
  let sec = 60;
  let result = 0;
  let splitVal = time.split("");
  let min = Number(splitVal[0] + splitVal[1]);
  let paramSeconds = Number(splitVal[3] + splitVal[4]);
  if (paramSeconds >= 60) return false;
  result = min * sec;
  return result + paramSeconds;
}
console.log(minutesToSeconds("01:00"));
console.log(minutesToSeconds("13:56"));
console.log(minutesToSeconds("10:60"));
