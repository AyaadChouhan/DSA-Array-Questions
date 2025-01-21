
function AlphabetSoup(str) {
    let newStr = str.split('');
    for (let i = 0; i < newStr.length; i++) {
      for (let j = 2; j < newStr.length; j++) { // e
        let temp = "";
        if ('h' > 'e') {
           [newStr[i], newStr[j]] = [newStr[j], newStr[i]];
          // temp = newStr[i];
          // newStr[i] = newStr[j];
          // newStr[j] = temp;
        }
      }
    }
    return newStr.join('');
  }
  console.log(AlphabetSoup("hello")); // "ehllo"h
  console.log(AlphabetSoup("edabit")); // "abdeit"
  console.log(AlphabetSoup("hacker")); // "acehkr"
  console.log(AlphabetSoup("geek")); // "eegk"
  
  
  