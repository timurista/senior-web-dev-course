## Quick Sort
like merge sort, but you pick a pivot point to move elements less than it to right then other elements greater than to right.

move things to the left that are less than pivot and then move things to right that are greater than it.

should be middle value of data set. you could pivot on different things.

## Partition or Pivot
less than pivot on left, helper does it in place, returns index of pivot. Loop through every element.

```js
function pivot(arr, start=0, end=arr.length+1) {

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start]; // start with pivot
    var swapIdx = start;
    for (var i = start+1; i < arr.length; i++) {
        if (pivot > arr[i]) { // compare everything < pivot
            swapIdx++;
            // and basically update the index we swap it starting from start and swap it if
            // that item is less than the pivot
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)

    return swapIdx;
}

console.log(pivot([9,5,34,3,4,40]))
```
