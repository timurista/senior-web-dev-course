console.log('hey')
function pushZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i]
    }
  }
  console.log(count)
  let remaining = arr.length - 1 - count;
  while (remaining >= 0) {
    arr[remaining + count] = 0;
    remaining--;
  }
  return arr
}

let arr = [1, 0, 0, 4, 3, 0, 0, 7];
console.log(pushZeroes(arr))