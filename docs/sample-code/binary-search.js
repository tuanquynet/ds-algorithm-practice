function doBinarySearch(arr, value) {
  let endPos = arr.length - 1;
  let beginPos = 0;
  let midPos;

  while (beginPos <= endPos) {
    midPos = Math.floor((endPos + beginPos) / 2);
    if (value === arr[midPos]) {
      return midPos;
    } else if (value > arr[midPos]) {
      beginPos = midPos + 1;
    } else if (value < arr[midPos]) {
      endPos = midPos - 1;
    }
  }

  return -1;
}

module.exports.doBinarySearch = doBinarySearch;
