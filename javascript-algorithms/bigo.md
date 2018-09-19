## Big O Notation

Time and Space Complexity
How do we know which one is best?
Comparing code and which one works.
Technical interview or huge data set, performance matters and there is a best solution. Performance and discussing tradeoffs between approaches. Helps identify inefficient points in code.

## Example
sum 1 -> n, plugging 3 in should lead to 6.

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

## What does better mean?
How much memory used?
How fast is it?
Readabiliy does that matter?
- Maintainability

## Problem with Time
different machines record diff times. Time you get will be different. Margins and measurements will be different. And same machine will record different times. And fast algorithms might not be good enough to tell which one is better.

## Not time, then operatins to do
count number of operations to run.
n * (n + 1) / 2
3: operations, *, +, /
n in loop, so it's not one operation it's n operations / additions.
All that matters is general growth of algorithm.

## Big O
formalized fuzzy counting. Relationship of how Runtime grows as input size grows.
`O(f(n))`, f(n) input and runtime
linear
quadratic
contstant
or something different

## Big picture
We drop off constants and care about shape of n, order of magnitude. So as n grows by constant increasing factor we say O(n). However for nested for loops, we get O(n^2) as you do operations of n * n inside the outer and inner for loop.

## Counting is hard to do
Simplifying Big O expressions
Rules of thumb
1) constants don't matter
2) o 500 is o(1)

Smaller terms don't matter
O(n^2 + 5n + 8)
really just n^2 at level of 5biliion

arithmetic is constant
variable assignment is constant
accessing elements in array is constant
look, complexity is length of loop * complexity of whatever happens inside the loop

## Space Complexity
AS n, grows size of input grows. Auxiliary space complexity... the space taken up by the algorithm itself. Not the complexity of the input size.

Most primitives are constant space.

Strings require O(n) where n is string length

Arrays and reference types, objects. O(n). Twice as much space

Example

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}
```
Constant space, O(1) space. Constant space

```js
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
```
this has an O(1) space complexity because it is not allocating new arrays inside the function. It just uses a primitive and prints that out. On each iteration of the for loop no new variable is added, only incremented.

```js
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
```
this has O(n) since you add a new array each time you run this function as you make an array of the same size as original array which can be length n.

## Logarithms

inverse of exponentiation. Log_2(8) = 3. 2 to what power is 8?. It's 3. 2^3 = 8. Big picture, log === log_2 for our purposes. Number of times you can divide by (base) 2 until you get 1.
log(8) => 3, since `8, 4, 2, 1` takes 3 divisions of 2 to get to 1.

## Who cares about logarithms?
Efficient sorting algorithms involve logs. Recursion. Etc. care about this.

## Objects
when you need fast access and don't care about the order of results returned

BigO of objects / hashmaps
insertion O(1)
removal O(1)
searching O(n)
access O(1)

no beginning no end, so doesn' matter where you begin accessing it.

But searching you have to look through it sequentially.


// Object.keys of o(n)
// Object.entries o(n)


hasOwnProperty is constant time O(1)

## Arrays
ordered lists
use when you need to preserve order.

access is o of 1, still very quick
insertion pushing is o of 1 is constant time

problem comes when trying to get at beginning of array

adding at end of array is most efficient
adding at beginning requires you shift index for other elements.

built in array methods

push o 1
pop o 1
shift o n
unshit o n
concat o n
concat o n
slice o n
splice o n
sort o n * nlogn
for each map o n

