function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function last(arr) { return arr[arr.length - 1] }

function merge(left, right) {
  let newArr = [];
  let currLeft = 0;
  let currRight = 0;

  while (currLeft < left.length && currRight < right.length) {
    if (left[currLeft] <= right[currRight]) {
      newArr.push(left[currLeft])
      currLeft++;
    } else {
      newArr.push(right[currRight])
      currRight++;
    }
  }
  if (currLeft < left.length) newArr.push(...left.slice(currLeft));
  if (currRight < right.length) newArr.push(...right.slice(currRight));

  console.log('MERGE LEFT/RIGHT', newArr)
  return newArr;
}

console.log(mergeSort([4, 3, 20, 6, 5]))