/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
var pourWater = function(heights, V, K) {
  let left = K - 1;
  let right = K + 1;
  while (V > 0) {
    // console.log(heights, left);
    let current = heights[K];
    if (heights[left] && heights[left] < current) {
      heights[left] += 1;
      V--;
      left--;
      if (left < 0) {
        left = K - 1;
      }
    } else if (heights[right] && heights[right] < current) {
      heights[right] += 1;
      V--;
      right++;
      if (right > heights.length - 1) {
        right = K + 1;
      }
    } else {
      heights[K] += 1;
      V--;
    }
  }
  return heights;
};

// console.log(pourWater([2, 1, 1, 2, 1, 2, 2], 4, 3));
// console.log(pourWater([3, 1, 3], 5, 1));
// console.log(pourWater([1, 2, 3, 4], 2, 2));
// console.log(pourWater([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1], 5, 2));
console.log(pourWater([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1], 5, 5));
// [3,4,4,4,3,2,1,2,3,4,3,2,1]
