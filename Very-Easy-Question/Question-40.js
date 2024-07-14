// First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.

// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples
// determineLever(["e", "f", "l"]) ➞ "first class lever"

// determineLever(["e", "l", "f"]) ➞ "second class lever"

// determineLever(["f", "e", "l"]) ➞ "third class lever"

function determineLever(arr) {
  let levers = {
    firstClassLever: ["e", "f", "l"],
    secondClassLever: ["e", "l", "f"],
    thirdClassLever: ["f", "e", "l"],
  };

  //   for (const key in levers) {
  //     if (JSON.stringify(levers[key]) === JSON.stringify(arr)) {
  //       return key;
  //     } else {
  //       return "Lever not found";
  //     }
  //   }
  let result = "Lever not found";
   Object.keys(levers).forEach((key) => {
    if (JSON.stringify(levers[key]) === JSON.stringify(arr)) {
        result = key;
      }
  });
  return result
  //   return data;
}

console.log(determineLever(["f", "e", "l"]));
console.log(determineLever(["e", "f", "l"]));
