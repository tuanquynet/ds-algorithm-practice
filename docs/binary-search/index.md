We use this algorithm when list is sorted. It is has constant time is O(log(n)). The general approach is pick the middle point.
Compare the value to the middle element. If it equal, we find the result. If it is greater than the middle element, we will discard the lower half, and we continue with the upper half. If it is lower than the middle element, we will discard the upper half.

[include](../sample-code/binary-search.js)
