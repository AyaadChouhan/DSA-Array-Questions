// Anonymous Functions All the Way Down
// Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".

// Examples
// lambdaDepth(0) ➞ "edabit"

// lambdaDepth(1)() ➞ "edabit"

// lambdaDepth(2)()() ➞ "edabit"

// typeof lambdaDepth(2)() ➞ "function"
// Notes
// num will always be a non-negative integer.
// If num == 0, return "edabit".
// If num > 0, return a function.
// All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.

function lambdaDepth(n) {
  let count = 0;
  for (let i = 0; i < 10; i++) {
    //   count++;
    setTimeout(() => {
      count += i;
    }, 3000);
    console.log(count);
  }
  return count;
}
// console.log(lambdaDepth(2));
const promise2 = new Promise((resolve, rejected) => setTimeout(rejected, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "0"));
// const promise1 = Promise.resolve(0);

const promises = [promise1, promise2, promise3];

// Promise.all(promises).then((value) => console.log(value)).catch(err, => console.log(object));
Promise.any(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
// Promise.allSettled(promises).then((value) => console.log(value));

// Promise.any(promises).then((value) => console.log(value));
// Promise.race(promises).then((value) => console.log(value));
