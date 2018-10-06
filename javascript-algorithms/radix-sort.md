
## Comparison sort
  less than vs greater than
  avg time complexity
  merge and quick sort avg is o n log n

## Can we do better?
  yes but not by making comparisons
  best avg case in any comparison is n log n
    mathematical bound to comparison

## Algorithms take advantage of sorting data
Radix Sort, never comparing two things
works on numbers, binary or strings / images in binary
size of number is encoded in size of digit
we take the size of digits in the integer and place them in buckets.
all numbers ending in 0 go in 0 bucket, all numbers ending in 1 go in 1 bucket. Then we return elements in those buckets as a list. That list is then placed back into buckets and resorted.

## Radix digit count

```js
function getDigit(num, i = 0) {
    return Math.floor(Math.abs(num) / (10 ** i)) % 10;
}

getDigit(12345, 4)

// digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(Math.log10(423))

digitCount(1234)
```

## Radix sort
deifne function that accepts a list of numbers. Most digits and figure out what is largest number of digits in any thing.

figure out largest number
loop for each digits
make a bucket
    10 sub arrays
    take each number put it there based on it's kth number
    then reorder them a bit.
        reformat
        contact into new array
    return that list

```js
function getDigit(num, i = 0) {
    return Math.floor(Math.abs(num) / (10 ** i)) % 10;
}

getDigit(12345, 4)

// digits in a number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(Math.log10(num))

digitCount(1234)

function getMaxDigit(arr) {
    let maxDigit = 0;
    for (let i of arr) {
        if (digitCount(i) > maxDigit) {
            maxDigit = digitCount(i);
        }
    }
    return maxDigit;
}

function radixSort(oldArr) {
    let arr = oldArr;
    let maxDigit = getMaxDigit(arr);
    for (let i of arr) {
        if (digitCount(i) > maxDigit) {
            maxDigit = digitCount(i);
        }
    }
    for (let i = 0; i < maxDigit; i++ ) {
        var tempBucket = Array.from({ length: 10 }, () => []);
        
        for (let item of arr) {
            let digit = getDigit(item, i);
            tempBucket[digit].push(item);
        }

        console.log('BUCKET at digit ',i,tempBucket)
        // reformat array
        arr = [].concat(...tempBucket);
    }
    return arr;

}

radixSort([20,10,4,6,7,30,4, 700, 355, 220])
```
above we have our helper methods to find the digits and also get the max digit for each number in the array.
then we make buckets for each number and place each number into it. Concating them together at the end.

