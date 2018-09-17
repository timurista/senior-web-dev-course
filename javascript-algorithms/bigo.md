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




