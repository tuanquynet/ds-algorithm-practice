function findMax(arr) {
  let max = arr[0];
  let index = arr.length;
  while (index--) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }

  return max;
}

// console.log(findMax([2,5,7,4]));//output: 7
// console.log(findMax([6,5,2,4]));//output: 6

module.exports.findMax = findMax;
