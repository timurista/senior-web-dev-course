function getMax(arry) {
  let max = -Infinity
  for (let item of arry) {
    max = Math.max(item, max)
  }
  return max;
}

function max_find(arr, k) {
  let count = arr.length - k + 1;
  let end = arr.length;
  arr.reverse();
  while (count > 0) {
    let temp = arr.slice(end - k, end);
    let maxVal = getMax(temp);
    console.log(maxVal, temp);
    // arr.splice(end, 1);
    // arr.push(maxVal);
    end--;
    count--;
  }
  // arr.splice(0, k)
  return arr;
}

function getMaxInArr(arry) {
  let max = -Infinity;
  for (let item of arry) {
    max = Math.max(max, item)
  }
  return max;
}

function max_find(arr, k) {
  let start = 0;
  let count = arr.length - k + 1;
  let originalLength = arr.length;
  while (count > 0) {
    let temp = arr.slice(start, start + k);
    let maxVal = getMaxInArr(temp);
    console.log(maxVal);
    arr.push(maxVal)
    start++;
    count--;
  }
  arr.splice(0, originalLength);
  return arr;
}


console.log(max_find([10, 5, 2, 7, 8, 7], 3))
console.log(max_find([1, 2, 3], 2))
console.log(max_find([null], 1))
