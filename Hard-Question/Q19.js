// // Apples and Bananas
// // Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// // Examples
// String.prototype.vreplace = function(el){
//     const vowlesLetters = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < this.length; i++) {
//         if (vowlesLetters.includes( this[i])) {
//             this[i] = el
//             // console.log(el)
//         }
//     }
//     return this
// }
// console.log("apples and bananas".vreplace("u"));  //➞ "upplus und bunurnus"
// console.log("cheese casserole".vreplace("o"));  //➞ "chooso cossorolo"
// console.log("stuffed jalapeno poppers".vreplace("e"));  //➞ "steffed jelepene peppers"

// // const vowlesLetters = ["a", "e", "i", "o", "u"];
// // console.log(vowlesLetters.includes('a'))

// let val = [[[[[[[[[[[[3]]]]]]]]]]]].flat(Infinity)
// console.log(val[0])

// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// function binaryToDecimal(binary) {}
// console.log(binaryToDecimal([0, 0, 0, 1])); // 1
// console.log(binaryToDecimal([0, 0, 1, 0])); // 2
// console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])); // 1005

var longestCommonPrefix = function (strs) {
  let result = "";
  let temp = "";
  if (strs.length === 0) {
    return temp;
  } else if (strs.length === 1) {
    return strs[0];
  }

  for (let j = 0; j < strs[0].length; j++) {
    temp += strs[0][j];
    // if (strs.length >= 1) {
    let isCommon = true;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j]) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) {
      result = temp;
    } else break;
    // }
  }
  return result;
};

// const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["a"]));
// console.log(longestCommonPrefix([]));

var addTwoNumbers = function (l1, l2) {
  let joinNum1 = "";
  let joinNum2 = "";

  let greaterLength = Math.max(l1.length, l2.length);

  for (let i = 0; i < greaterLength; i++) {
    if (i < l1.length && !isNaN(l1[i])) {
      joinNum1 += l1[i];
    } else {
      joinNum1 += "0";
    }

    if (i < l2.length && !isNaN(l2[i])) {
      joinNum2 += l2[i];
    } else {
      joinNum2 += "0";
    }
  }

  let conversion1 = Number(joinNum1);
  let conversion2 = Number(joinNum2);
  let joinedValue = String(conversion1 + conversion2);

  let newArr = joinedValue.split("").reverse();

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Number(newArr[i]);
  }

  return newArr;
};

// console.log(addTwoNumbers([2,4,3],[5,6,4]))
// console.log(addTwoNumbers([0],[0]))
// console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))

function arithmeticProgression(initialvalue, iniciment, length) {
  let str = "";
  for (let i = 0; i < length - 1; i++) {
    let temp = 0;
    if (i <= 0) {
      str += initialvalue;
    }
    temp = initialvalue += iniciment;
    str += temp;
  }
  return str;
}

// console.log(arithmeticProgression(1, 2, 5)); // "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5)); // "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10));

// console.log(typ)


let obj = {
  a : 'ayaad',
  b: {
    city: 'jodhpur',
    
  }
}