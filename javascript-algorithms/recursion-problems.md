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