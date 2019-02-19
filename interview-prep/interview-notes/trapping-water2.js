var trap = function(height) {
  let ans = 0;
  let start = 0;
  let end = height.length - 1;
  let leftmax = 0;
  let rightmax = 0;

  while (start < end) {
    console.log(start, end, leftmax, rightmax);
    if (height[start] < height[end]) {
      height[start] >= leftmax
        ? (leftmax = height[start])
        : (ans += leftmax - height[start]);
      start++;
    } else {
      height[end] >= rightmax
        ? (rightmax = height[end])
        : (ans += rightmax - height[end]);
      end--;
    }
  }

  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
