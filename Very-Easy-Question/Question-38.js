// Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"


function spaceMeOut(str) {
    // let string = ""
    // for (let i = 0; i < str.length; i++) {
    //    string += str[i]        
    //    string += " "        
    // }
    // return string

//    return [...str].reduce( (acc, curr)=>{
//     acc += (curr)
//     acc += " "
//     return acc
//     }, " ")

let data = "";
for (const val of str) {
    data += val
    data += " "
}
return data

}

console.log(spaceMeOut("elongated musk"));
console.log(spaceMeOut("space"));