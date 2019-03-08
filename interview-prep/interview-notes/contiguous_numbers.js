function max_contig_numbers(arr) {
  let k = Math.floor(arr.length / 2)
  let startArr = [arr[k]]
  let cache = {}
  let max_val = -Infinity

  function recurisve_max(arr, startArr, k, cache, max_val) {
    if (k < 0 || k > arr.length) return max_val;
    if (startArr.length >= arr.length) return max_val
    if (cache[startArr]) return cache[startArr]

    let getSum = arry => {
      if (arry.length > 0) return arry.reduce((a, b) => a + b)
      return 0;
    }
    let vals1 = [];
    let vals2 = [];
    vals1 = [arr[k - 1]].concat(startArr)
    vals2 = startArr.concat([arr[k + 1]])
    // console.log(vals1, vals2)
    let sum1 = getSum(vals1)
    let sum2 = getSum(vals2)
    console.log(sum1, sum2, cache)
    recurisve_max(arr, vals1, k - 1, cache, max_val)
    recurisve_max(arr, vals2, k + 1, cache, max_val)
    cache[vals1] = sum1;
    cache[vals2] = sum2;
    max_val = Math.max(sum1 || -Infinity, sum2 || -Infinity, max_val);
    return max_val
  }

  return recurisve_max(arr, startArr, k, cache, max_val)
}

function max_contig_numbers(arr) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    // console.log(arr[i], sum)
    if (max < sum) {
      max = sum
    } else {
      sum = 0;
    }
  }
  return max
}

console.log(max_contig_numbers([-1, 1, 2]))
console.log(max_contig_numbers([0, 1]))
console.log(max_contig_numbers([2, -8, 3, -2, 4, -10]))