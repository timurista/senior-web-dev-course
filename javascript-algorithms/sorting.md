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

## Selection Sort

[ 5, 3, 4, 1, 2]
but smallest item at begining.
[ 5, 3, ...  ] 3 is min
select min and place at beginning
first thing in array is smallest value

```js
function selectionSort(arr) {
    for (var i = 0; i< arr.length; i++) {
        var min = arr[i];
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            // 5 < 3 then set new min
            if (arr[j] < min) {
                minIndex = j;
                min = arr[j];
            }
        }

        if (minIndex !== i) {
            // swap if minIndex changes
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

selectionSort([5,3,4,1,2])
```
