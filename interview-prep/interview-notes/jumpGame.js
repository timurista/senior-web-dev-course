/** 
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
*/

function jump(arr, steps = 0, min = Infinity) {
  // dfs, jump by max of the first item, then jump by 1 less
  let first = arr[0];
  for (let i = first; i > 0; i--) {
    if (i > arr.length - 1) continue;
    console.log(first, i)
    if (i === arr.length - 1) {
      console.log('steps', arr, steps + 1)
      return steps + 1;
    }
    min = Math.min(min, jump(arr.slice(i), steps + 1, min));
  }
  return min;
}

console.log(jump([2, 3, 1, 1, 4]))

console.log(jump([5, 3, 1, 1, 4]))
console.log('JUMP LAST')
console.log(jump([4, 3, 1, 1, 4, 2, 3]))