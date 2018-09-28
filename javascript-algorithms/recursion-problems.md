## Basic Case
```js
function power(base, exponent){
    if (exponent <= 0) return 1;
    return base * power(base, exponent - 1)
}

power(2,3) // 8
```
caclulates exponent recursively.

## Product of array examples
```
function recursiveRange(x){
   if (x <= 0) { 
       return 0;
   }
   return x + recursiveRange(x-1)
}

function fib(n){
    if (n<= 2) return 1;
    return fib(n-1) + fib(n-2)
  // add whatever parameters you deem necessary - good luck!  
}

fib(35)
```

## Reverse recursively
```js
function reverse(str){
    if (!str) return ''
    return str[str.length-1] + reverse(str.substring(0,str.length-1))
}
```

## Palindrome
```js
function isPalindrome(str){
    if (!str.length || str.length === 1) return true
    return (str[0] === str[str.length - 1]) && isPalindrome(str.slice(1, str.length-1))
}
```

## Some recursive

```js
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
    if (!arr.length) return false;
    return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}
```
The above works by taking sample recursive values from array and checking the condition is true at some point. We can use || to short circuit early if something is true and returned.

## Is sub array
we go through the old array and check if it contains an array
if so we flatten that array and concat it to this array
else we just push that element in
```js
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
            if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
            } else {
                newArr.push(oldArr[i])
            }
    } 
    return newArr;
}
```