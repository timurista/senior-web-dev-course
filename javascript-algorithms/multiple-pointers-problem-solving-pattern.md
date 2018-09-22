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
