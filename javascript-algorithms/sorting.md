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

## Insertion Sort
how it works?
it takes each element and places where it should go in sorted half.

[ 5, 3, 5, 1, 2]
[ 3, 5, 4]
we gradually build up sorted array by placing it where it should belong in left part of array

pick second element in array
swap them left if need to


```js
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        // only loop back until you get
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(arr);
            // while item at j or the one behind is greater than
            // the current value
            // then you set the next
            // to be j + 1
            // you do this until you get to 0, starting from
            // current index
            // this is just shifting item
            arr[j + 1] = arr[j];
        }
        // this is setting currentVal to be 
        arr[j + 1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
```

if data is nearly sorted, then insertion sorted is best.
GOod case where you get feed from live data. Insertion sort doesn't matter what number comes in, we can place where we need.
## When this works well
works well when data is streaming and you need to sort it at moments notice.

## Time complexity
insertion sort time complexity of n in best case.
bubble and insertion sort for nearly sorted data. Space complexity is o(1) for these.
bubble, selection and insertion sort are roughly equivalent. avg quadratic time complexity... less intuitive


