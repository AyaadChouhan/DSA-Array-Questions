// Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

function compact(arr) {
    let newArr = [];
    // for (const el of arr) {
    //     if (Boolean(el) === true) {
    //         newArr.push(el);
    //     }
    // }
    // return newArr

    return arr.reduce((acc, curr)=>{
        if(Boolean(curr) === true){
            acc.push(curr);
        }   
        return acc
    }, [])

    // return arr.filter(val =>{
    //     return Boolean(val) === true;
    // })
}
console.log(compact([0, 1, false, 2, "", 3]));console.log(compact([0, 1, false, 2, "", 3]));
