function findMin(arr) {
  let min = arr[0];
  let index = arr.length;
  while (index--) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }

  return min;
}

// console.log(findMin([2,5,7,4]));//output: 2
// console.log(findMin([6,5,7,4]));//output: 4

module.exports.findMin = findMin;
