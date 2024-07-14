// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]


function skipTooMuchSugarDrinks(arr) { 
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] === "water"){
    //      newArr.push("water")
    //     } 
    // }
    // return newArr

    return arr.reduce( (acc, curr)=>{
        if (curr === "water") {
          acc.push(curr)  
        }
        return acc
    }, [])
 }
 console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));