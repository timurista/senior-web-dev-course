## Linear Search
finds items one at a time

loop over array and see if current element is equal to value
if it is, return index for element

Simple search
```js
function linearSearch(arr, value){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}
```
Big O of n in worst and average case

## Binary Search
only works on sorted arrays
divide and conquer

```js
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length -1;
    let middle;
    while (left < right) {
        middle = Math.floor((left + right) / 2);
        console.log('MIDDLE', middle, arr.slice(left,right+1))
        if (arr[middle] === val) return middle;
        else if (arr[middle] > val) right = middle + 1;
        else if (arr[middle] < val) left = middle - 1;
      }
    return -1;
}
```
time complexity, o(nlogn) worst/avg, best case if o of n.


