function twoSum(nums, target) {
  let compliments = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (nums[i] in compliments) {
      return [compliments[nums[i]], i];
    } else {
      compliments[compliment] = i;
    }
  }
}

// Given nums = [2, 7, 11, 15], target = 9,
console.log(twoSum([2, 7, 11, 15], 9));

var moveZeroes = function(nums) {
  let i = 0;
  let processed = 0;
  let len = nums.length;
  while (processed < len) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    } else {
      i++;
    }
    processed++;
  }
};

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);

// contains duplicate
var containsDuplicate = function(nums) {
  const m = {};
  for (let n of nums) {
    if (m[n]) return true;
    m[n] = true;
  }
  return false;
};

var rotate = function(nums, k) {
  // if (k == 0) return;
  // let v = k;

  // if (v > 1) v++;

  // function r(arr) {
  //   const shifted = arr.shift();
  //   arr.push(shifted);
  // }

  // while (v--) {
  //   r(nums);
  // }
  let rotations = k % nums.length;
  let temps = nums.slice(rotations);

  console.log(rotations, temps);

  for (let i = 0; i < rotations + 1; i++) {
    let temp = nums[i];
    nums[i] = temps[i];

    nums[nums.length - i - 1] = temp;
  }
};

// var rotate()

let rotated = [1, 2, 3, 4, 5, 6, 7];
rotate(rotated, 3);
console.log(rotated);

let r2 = [1, 2];
rotate(r2, 1);
console.log(r2);
