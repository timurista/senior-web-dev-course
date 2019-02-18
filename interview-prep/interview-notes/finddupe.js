/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let max = nums.length - 1;
  while (max > 0) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      let n = nums[i];
      if (n > max) continue;
      if (n === max) count++;
      if (count >= 2) return n;
    }
    max--;
  }
};

var findDuplicate = function(nums) {
  let dupes = new Array(nums.length);
  for (let n of nums) {
    if (dupes[n] > 0) {
      return n;
    } else {
      dupes[n] = 1;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([4, 4, 4, 4, 2]));
