## Master common patterns for solving patterns

archetypes but not covering all possible scenarios. 1 out of 10

## Patterns
Frequency COunter
Multiple Pointers
Sliding Window
Divide and Conquer
Dynamic Programming
Greedy Algorithms
Backtracking

## Frequency Counter
object to collect values and frequencies and you need to compare them 2 or more inputs.

this can avoid o(n^2) time. Usually o of n time.

## Same example
same([1,2,3], [4,1,9]) // true
[1,2,1], [4,4,1] // false

quadratic time squared
### Avoid nested loops
loop over each array individually. 2 loops better than 1 loop and inner loop

This is the better solution of o(2n) or o(n) not using a nested loop.

```js
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var frequencyCounter1 = {}; // counts freq in array
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        // should have same freq and number in there
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;

}

same([1,2,3,2,5], [9,1,4,4,11])
```

## Another example with anagrams

```js
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let letter of str1) {
        lookup[letter] = ++lookup[letter] || 1; // if there then add 1, else set to 1
    }
    for (let letter of str2) {
        if (!lookup[letter]) {
            return false // if not there or 0 return false
        } else {
            lookup[letter] -=1; // decrement lookup table
            // at the end you should have a map of keys with 0 value or else it quits.
        }
    }
    return true;
}
```