// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []

function parese(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] !== "string") {
  //       let val = `${arr[i]}`;
  //       newArr.push(val);
  //     } else {
  //       newArr.push(arr[i]);
  //     }
  //   }

  // for (const val of arr) {
  //     if (val !== "string") {
  //         let str = `${val}`
  //         newArr.push(str)
  //     }else{
  //         newArr.push(val)
  //     }
  // }

  // return arr.reduce((acc, curr, ind) => {
  //   if (curr !== "string") {
  //     let str = `${curr}`;
  //     acc.push(str);
  //   } else acc.push(curr);
  //   return acc;
  // }, []);

   arr.forEach((el) => {
    if (el !== "string") {
      let str = String(el);
      newArr.push(str);
    } else {
      newArr.push(el);
    }
  });
  
    //  arr.forEach((el) => {
  //   if (el !== "string") {
  //     let str = `${el}`;
  //     newArr.push(str);
  //   } else {
  //     newArr.push(el);
  //   }
  // });

  // return arr.map( (val,ind)=>{
  //   if (val !== "string") {
  //     let str = `${val}`;
  //     return str
  //   }else{
  //    return val
  //   }
  // })
  return newArr;
}
console.log(parese([1, 2, "a", "b"]));
console.log(parese([]));
