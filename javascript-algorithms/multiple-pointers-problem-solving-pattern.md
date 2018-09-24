## Multiple Pointers

```js
// [-4,-3....1,2,5]
"alks....ks"
```

2 pointers where we work in to each others.

## Example
Write a function sumZero that accepts a sorted array of integers. Function should find the first pair where sum is 0. Return an array which includes both values that sum to zero or undefined if a pair does not exist.

sumZero([ -3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

given: sorted list
NAIVE solution 
2 loops
starts pointer negative 3, then it looks for something that adds 3 and finds it.

Better SOlution
```
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))
```
Above, you move pointer left and right checking if those things sum to 0. If they do, then you exit and you are done.

## 2 Pointers Lookahead
countUnique example

countUniqueValues([1,1,1,1,1,2]) // 2 unique numbers

here's solution
```js
function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      } else {
        i++;
        arr[i] = arr[j]; 
      }
    }
    return i + 1;
}

//shorter
function countUniqueValues(arr) {
    if (!arr.length) return 0;
    let i = 0;
    for (let j = 1;  j < arr.length; j ++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j]; 
      }
    }
    return i + 1;
}
```

## Sliding Window
Continuos String
"hellothere"
Finding a longest string of unique characters
single variable we slide it up from left to right.

Useful when keeping track of subst of data in larger data.

Keep value of the first three
then just subtract or add 

## Looking for continous subset
We take a window and look behind and ahead. Max sum of n elements in the array. The window is the starting range or sum of elements and then we append and remove values to it.

```js
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    
    for (let i = 0; i < num; i ++) {
        maxSum += arr[i]; // basically go through and set initial max sum to the first block or window in our array.
    }
    tempSum = maxSum;
    for( let i = num; i < arr.length; i ++) {
        // [2,3,4,5]
        // where [2,3,4] is initial block
        // we make 1 window that push in new value and 
        // removes old value from it
        // [3,4,5] is the new block
        // and we do this by just adding 
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
```

## Divide and Conquer
pattern involves taking larger set of data, array and start by dividing it into smaller pieces then divide into smaller chunks.

## Search
Binary Search, has to be sorted. What you do is work your way in by dividing the problem into smaller sub sections.

## Frequency Counter Example 1
```js
function sameFrequency(a, b){    
  if (a.toString().length !== b.toString().length) return false;

  let freq = {}
  
  for (let d of a.toString()) {
      freq[d] = ++freq[d] || 1
  }
  for (let d2 of b.toString()) {
      if (freq[d2]) {
          if (freq[d2] === 0) return false
          freq[d2]--
      } else {
          return false;
      }
  }
  return true;
}


// we check that frequency of digits is same between digit a and digit b
console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))
```

## Frequency counter mult pointers
```js
function areThereDuplicates() {
  const seen = {}
  let i = 0;
  let j = arguments.length;

  while (i < j) {
      let arg1 = arguments[i];
      let arg2 = arguments[j];

      if(seen[arg1]) return true;
      seen[arg1] = 1

      if(seen[arg2]) return true;
      seen[arg2] = 1

      i++;
      j--;
  }
  return false;
}

// another solution one line
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// we check if arg1 has been seen and we increment i from the right and j from the left
// until they overlap i > j
console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
```

## Multiple Pointers AVG
```js
function averagePair(arr, avg) {
    if (!arr.length) return false;
    let start = 0;
    let end = arr.length - 1
    while (start < end) {
        let avg2 = (arr[start] + arr[end]) / 2;
        if (avg2 === avg) return true; // if avg are same return true
        else if (avg2 < avg ) start ++; // [1,2,3] if avg of 1 and 3 is less than avg then increase start
        else end--; // if the avg of [1,2,3] of 1,3 is too big, then decrease the end. And end if they overlap
    }
    return false;
}

averagePair([1,2,3], 2.5)
```

## isSubsequence Check

The key to this one is to notice that you first return if there is no string. But as you go through you check that the character in position matches next character in j. You keep looping over j until you find that the next character in first string matches the character in j.

abc ===> a,d,e,f,*b*,s,*c*
we keep incrementing j until we have come to the end of the list or we have iterated over the fist substring.

otherwise no match is found and we return false

```js
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++
        if (i === str1.length) return true
        else j++
    }
    return false
}
```

