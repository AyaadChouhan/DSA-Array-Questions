// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

function getFilename(address) {
  let get = address.split("/").reverse();
  // return get[0]
  // return get.at(0)
  // return get.shift()
  return get.slice(0,1)
}
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));
