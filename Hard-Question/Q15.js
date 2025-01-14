
// Extending the String Prototype
// Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:

// consonants(word) which returns the number of consonants in a word when called.
// vowels(word) which returns the number of vowels in a word when called.

// Examples

String.prototype.vowels = function () {
    const vowlesLetters = ["a", "e", "i", "o", "u"];
    let count = 0;
    const data = this;
    for (let i = 0; i < vowlesLetters.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (vowlesLetters[i] === data[j]) {
          count++;
        }
      }
    }
    return count;
  };
  
  String.prototype.consonants = function () {
      const vowlesLetters = ["a", "e", "i", "o", "u"];
      let count = 0;
      const data = this;
      for (let i = 0; i < vowlesLetters.length; i++) {
        for (let j = 0; j < data.length; j++) {
          if (vowlesLetters[i] === data[j]) {
            count++;
          }
        }
      }
      return data.length - count;
  };
  
  console.log("hello".consonants()); //➞ 3
  console.log("helloooo".vowels()); //➞ 2
  console.log("greatly".consonants()); //➞ 5
  console.log("greatly".vowels()); //➞ 2
  console.log("Smithsonian".consonants()); //➞ 7
  console.log("Smithsonian".vowels()); //➞ 4
  