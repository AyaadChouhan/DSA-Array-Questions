// Apples and Bananas
// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// Examples
String.prototype.vreplace = function(el){
    const vowlesLetters = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < this.length; i++) {
        if (vowlesLetters.includes( this[i])) {
            this[i] = el
            // console.log(el)
        }        
    }
    return this
}
console.log("apples and bananas".vreplace("u"));  //➞ "upplus und bununus"
console.log("cheese casserole".vreplace("o"));  //➞ "chooso cossorolo"
console.log("stuffed jalapeno poppers".vreplace("e"));  //➞ "steffed jelepene peppers"

// const vowlesLetters = ["a", "e", "i", "o", "u"];
// console.log(vowlesLetters.includes('a'))

