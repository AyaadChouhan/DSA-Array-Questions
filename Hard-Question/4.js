// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
  // return arr.flat(Infinity).length

  //=================================

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      count += getLength(arr[i]);
    } else {
      count++;
    }
  }
  
  //=====================================
  //     if (Array.isArray(arr[i])) {
  //         count += getLength(arr[i])
  //     }else{
  //         count++;
  //     }
  // }

  return count;
}
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));


class Teacher {
  constructor(faculty, name){
    this.faculty = faculty;
    this.teachername = name;
  }
  print(){
    return this.teachername;
  }
}

class Student extends Teacher {
constructor(fac, name){
  super(fac, name)
  // this.fac = fac;
  // this.name = name
}
  static getData(){
    return 'hello world'
  }
  result(){
    return getData()
  }

}
let studentData = new Student('Cs', 'asif');
console.log(Student.getData())