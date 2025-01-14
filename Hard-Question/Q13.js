// Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

function findBrokenKeys(correctPhrase, incorrectTyped, stack = []) {
  //   for (let i = 0; i < correctPhrase.length; i++) {
  //     console.log(correctPhrase[i])
  //     if (correctPhrase[i] !== incorrectTyped[i] && !stack.includes(correctPhrase[i])) {
  //       stack.push(correctPhrase[i]);
  //     }
  //   }

  const splitedEl = correctPhrase.split("");
  return splitedEl.reduce((acc, curr, index) => {
    if (curr !== incorrectTyped[index] && !acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"))// ➞ ["y", "n"]));
