function maxSubsetSum(arr) {
  let dp = [];
  dp.push(arr[0]);
  dp.push(Math.max(...arr.slice(0, 2)));
  let ans = Math.max(...dp);
  // console.log(ans);
  for (let a of arr.slice(2)) {
    // get max of second to last and a
    console.log("DP END", dp[dp.length - 2], a);
    let maxEnd = Math.max(dp[dp.length - 2] + a, a);
    // console.log("MAX END", a, dp, maxEnd, Math.max(maxEnd, ans));
    dp.push(Math.max(maxEnd, ans));
    ans = Math.max(ans, dp[dp.length - 1]);
  }
  return ans;
}

function maxSubsetSum(arr) {
  let inclusive = 0;
  let exclusive = inclusive;
  for (let i = 0; i < arr.length; i++) {
    console.log("inclusive", inclusive, "exclusive", exclusive, arr[i]);
    let temp = inclusive;
    inclusive = Math.max(inclusive, exclusive + arr[i]);
    exclusive = temp;
  }
  return inclusive;
}

// dynamic programming is caching

// console.log(maxSubsetSum([3, 5, -7, 8, 10]));
console.log(maxSubsetSum([-2, 1, 3, -4, 5]));
