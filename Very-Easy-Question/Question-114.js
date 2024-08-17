// Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]
// Examples
// evenOddPartition([5, 8, 9, 2, 0]) ➞ [[8, 2, 0], [5, 9]]

// evenOddPartition([1, 0, 1, 0, 1, 0]) ➞ [[0, 0, 0], [1, 1, 1]]

// evenOddPartition([1, 3, 5, 7, 9]) ➞ [[], [1, 3, 5, 7, 9]]

// evenOddPartition([]) ➞ [[], []]

function evenOddPartition(arr) {
  const evenArr = [];
  const oddArr = [];

  //   for (const el of arr) {
  //     if (el % 2 === 0) {
  //       evenArr.push(el);
  //     } else {
  //       oddArr.push(el);
  //     }
  //   }
  //   return [evenArr, oddArr]

  //   return arr.reduce(
  //     (acc, curr) => {
  //       if (curr % 2 !== 0) {
  //         acc[0].push(curr);
  //       } else {
  //         acc[1].push(curr);
  //       }
  //       return acc;
  //     },
  //     [[], []]
  //   );

  return arr.map((val, )=>{
    if (val % 2 === 0) {
        val
    }
  }, [[], []])
}
console.log(evenOddPartition([1, 3, 5, 7, 9, 2, 4, 6]));

