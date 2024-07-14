// Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true

function checkSquareAndCube(arr) { 
    // return Math.sqrt(arr[0]) === Math.cbrt(arr[1]) ? true : false
    
    const [num1, num2] = arr; 
    const squareRoot = num1 ** (1/2);
    const cubeRoot = num2 ** (1/3); 
    return squareRoot// === cubeRoot; 
  
 }


 console.log(checkSquareAndCube([4, 8]));