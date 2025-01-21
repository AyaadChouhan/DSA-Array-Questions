function convertCartesian(x, y) {
    //  const arr = [];
    //  for (let i = 0; i < y.length; i++) {
    //     const temp = []
    //     temp.push(x[i]);
    //     temp.push(y[i]);
    //     arr.push(temp);
    //  }
    //  return arr
  
    return x.reduce((acc, curr, index) => {
      const temp = [];
      temp.push(curr);
      temp.push(y[index]);
      acc.push(temp);
      return acc;
    }, []);
  }
  
  // console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])); //[[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]
  // console.log(convertCartesian([9, 8, 3], [1, 1, 1])); //[[9, 1], [8, 1], [3, 1]]
  