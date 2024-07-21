// CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
// cmsSelector(["WordPress", "Joomla", "Drupal"], "w") ➞ ["WordPress"]

// cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ➞ ["Drupal"]

// cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]

function cmsSelector(arr, word) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].toLowerCase().includes(word)) {
  //       newArr.push(arr[i]);
  //     }
  //   }

  //==============================================

  //   for (let i = 0; i < arr.length; i++) {
  //     let val = arr[i].toLowerCase();

  //     for (let j = 0; j < val.length; j++) {
  //       if (val[j] + val[j + 1] == word) {
  //         newArr.push(arr[i]);
  //       }
  //     }
  //   }
  //   return newArr;

  //============================================================
  
  return arr.reduce((acc, curr) => {
    if (curr.toLowerCase().includes(word)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "dr"));
