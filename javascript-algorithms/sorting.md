## Sorting
arrays and numbers
[23,34,6,12,13] => should return in ascending order.

## Why learn this?
sorting is really common in javascript. Important to know what it is good at and what it is bad at.
Certain situations where some algorithms are better than others.
- interview challenge
- bubble sort
- insertion sort

## built in JS sort
array.sort... 
it take unicode value of item even if number and orders data by it.
negative number then a comes before b. If it returns positive number, b comes after a.

numberCompare(num1, num2) {
  return num1 - num2;
}

## Bubble Sort
compares each item in list and sorts them in 1 pass.

```js
function bubbleSort(arr) {
    var noSwaps; // optimized with noSwaps if data is nearly sorted. Linear time o of n.
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;        
        for (var j = 0; j< i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]) {
                noSwaps = false;
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
```
