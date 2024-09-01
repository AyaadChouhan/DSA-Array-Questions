var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums}]`;
};
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2) // 10
// console.log(String(obj1)); // "[1,2]"
// console.log(String(obj2)); // "[3,4]"

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj instanceof classFunction) {
    return true;
  }
  return false
};
class Animal {}
class Dog extends Animal{}
console.log(checkIfInstanceOf(new Dog(), Animal));
