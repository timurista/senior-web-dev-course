/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let H = height.length;
  let ans = 0;

  for (let i = 0; i < H; i++) {
    let max_left = 0;
    let max_right = 0;

    for (let j = i; j >= 0; j--) {
      max_left = Math.max(max_left, height[j]);
    }
    for (let j = i; j < H; j++) {
      max_right = Math.max(max_right, height[j]);
    }

    ans += Math.min(max_right, max_left) - height[i];
  }
  return ans;
};

var trap = function(height) {
  let result = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    if (height[start] <= height[end]) {
      let current = height[start];
      // check everything until from the value but that is less
      while (height[++start] < current) {
        console.log(
          "start",
          start,
          end,
          current,
          height[start],
          current - height[start]
        );
        result += current - height[start];
      }
    } else {
      let current = height[end];
      // back track and check everything until you hit a valley
      while (height[--end] < current) {
        console.log(
          "start is end",
          current,
          height[end],
          current - height[end]
        );
        result += current - height[end];
      }
    }
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
