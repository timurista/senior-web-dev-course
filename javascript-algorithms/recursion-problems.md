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

## Capitalizes first letter recursively in array of strings
['banana', 'john', 'smith'] => ['Banana', 'John', 'Smith']

```js
function capitalizeFirst(arr) {
    if (!arr.length) return []
    let first = arr[0][0].toUpperCase();
    let capitazlied = first + arr[0].slice(1)
    return [capitazlied].concat(capitalizeFirst(arr.slice(1)))
}
```


## Nested Even Sum
Here we return the sum of values deeply nested inside an object by traversing it and then spitting out whether it is even or not and then summing it.

```js
function nestedEvenSum (obj) {
    let sum = 0;
    
    (function recursive(obj) {
        if (typeof obj === 'number' && obj%2 === 0) {          
            sum += obj;
            return;
        }
        else if (typeof obj === 'object') {
            for (let key of Object.keys(obj)) {
                recursive(obj[key]);
            }
        }
    })(obj)
    console.log(sum)
    return sum;
}
```

## Capitalize Words
Recursively do this...
```js
function capitalizeWords(w) {
    if (!w.length) return [];
    return [w[0].toUpperCase()].concat(capitalizeWords(w.slice(1)))
}
```

## StringifyNumbers

```js
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) { // iterate over keys
        if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString(); // set new obj to string if number
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) { // also check if it is an array
        newObj[key] = stringifyNumbers(obj[key]);
        } else {
        newObj[key] = obj[key];
        }
    }
    return newObj;
}
```

## Collect Strings Recursively
```js
var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let arr = [];

    function collect(o) {
        for (let k in o) {
            if (typeof o[k] === 'string') {
                arr.push(o[k]) // in pure solution you push here also
            }
            if (typeof o[k] === 'object') {
                collect(o[k]) // in pure solution you concat to arr
            }
        }
    }
    collect(obj)
    return arr;
}

collectStrings(obj) // ["foo", "bar", "baz"])
```