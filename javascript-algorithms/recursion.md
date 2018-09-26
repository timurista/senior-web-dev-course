## Recursion
Short story of idea behind recursion. Write solution iteratively and then recusrive way.

## Objectives
define what it is why its crucial.
Call stack and how it relates to call stack.
Helper method recursion and pure recursion

What is recursion why is it worth it?
1. process to call itself

JSON.parse or JSON.stringify are recursive functions
DOM traversal algorithms, nested things. Searching through all of them does it recursively.

Sometimes its cleaner and easier to understand.

## Call stack
In almost all computer programs, theres a datastructure which manages calling of function. Call stack, function is pushed on top of call stack. Pop is remove it from top.
FILO. (first in last out). As thing returns it is removed from call stack.

## Why do we care?
We keep pushing new functions or same function onto the call stack. And it has to end somewhere... it ends with the base case. Base case is where function stops.

Call it again with a different list of data, chopped off until you hit an empty list.

```js
function countDown(num) {
  if (num <= 0) return 0;
  console.log(num);
  num --;
  countDown(num);
}
