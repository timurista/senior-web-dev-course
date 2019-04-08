/**
 * 
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.


 */

function maxCrossingSum(arr, l, m, h) {
  let sm = 0;
  let left_sum = -1000;

  // left side sum
  for (let i = m; i > l - 1; i--) {
    sm = sm + arr[i];
    if (sm > left_sum) {
      left_sum = sm;
    }
  }
  //  right side
  sm = 0;
  let right_sum = -1000
  for (let i = m + 1; i < h + 1; i++) {
    sm = sm + arr[i];
    if (sm > right_sum) {
      right_sum = sm;
    }
  }
  console.log('MAX', left_sum, right_sum)
  return left_sum + right_sum;
}

function maxSubArraySum(arr, l, h) {
  // only 1 element
  if (l === h) {
    return arr[l];
  }
  console.log('MAX SUB', arr, l, h)
  let m = Math.floor((l + h) / 2)
  return Math.max(
    0,
    maxSubArraySum(arr, l, m),
    maxSubArraySum(arr, m + 1, h),
    maxCrossingSum(arr, l, m, h)
  )
}


let arr = [34, -50, 42, 14, -5, 86]
let n = arr.length

console.log("Maximum contiguous sum is ", maxSubArraySum(arr, 0, n - 1))
console.log("Maximum contiguous sum is ", maxSubArraySum([-5, -1, -8, -9], 0, 3))


// function maxSubArray(arr, n) {
//   if (n <= 0) return 0;
//   let maxSum = arr[0];
//   let sum = arr[0];
//   for (let i = 1; i < n; ++i) {
//     if (sum < 0) // no positive gain for following numbers
//       sum = 0;
//     sum += arr[i];
//     if (sum > maxSum)
//       maxSum = sum;
//   }

//   return maxSum;
// }

// console.log(maxSubArray([34, -50, 42, 14, -5, 86]))