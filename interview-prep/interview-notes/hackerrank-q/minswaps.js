function minimumSwaps(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    console.log("current", cur);
    while (cur !== i + 1) {
      console.log("i", i, "CURRENT", cur, "INDEX", cur - 1);
      let temp = arr[cur - 1];
      arr[cur - 1] = cur;
      cur = temp;
      swaps++;
    }
  }
  return swaps;
}

let arr = [7, 1, 3, 2, 4, 5, 6];
console.log(minimumSwaps(arr));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
