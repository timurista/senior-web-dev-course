// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = arr[i - 1];
//     const b = arr[i - 2];
//     arr.push(a + b)
//   }
//   return arr[n];
// }

// recursive
// 2 types of engineer
// who could solve it and who couldnt
function fib(n) {
  if (n < 2) {
    return n;
  }
  // memoization here
  // how can we improve performance
  return fib(n - 2) + fib(n - 1)
}

// slow function --> fast function
function memoize(fn) {
  const cache = {}; // results of call
  // ...args to recieve array of arguments
  return function (...args) {
    if (cache[args])
      return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }

}

fib = memoize(fib);

// time complexity
// 27 calls for fib 6
// exponential run time
// we get dramatic increase in processing power

// runtime is exponential every increase in n
// dramatic increase in runtime

// improve runtime of algorithm?
// function called multiple times with same arguments
// we can cache the calls to each 
// memoization a function
// record arguments of each function call
// little table in memory



module.exports = fib;
