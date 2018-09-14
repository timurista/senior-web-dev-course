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





