// Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"

function nSidedShape(num) {
  let shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };

  let val;

  //   for (const key in shapes) {
  //     if (key === String(num)) {
  //       val = shapes[key];
  //     }
  //   }
  //   return val;

  return Object.entries(shapes).reduce((acc, [key, value]) => {
    if (parseInt(key, 10) === num) {
      acc = value;
    }
    return acc;
  }, null);
}

// return shapes[num]

console.log(nSidedShape(3));
