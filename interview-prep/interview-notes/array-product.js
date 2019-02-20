// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// Upgrade to premium and get in-depth solutions to every problem. Since you were referred by one of our affiliates, you'll get a 10% discount on checkout!

// If you liked this problem, feel free to forward it along so they can subscribe here! As always, shoot us an email if there's anything we can help with!

var productArray = arr => {
  let map = {};
  let total = 1;
  for (let i of arr) {
    total *= i;
  }
  console.log("TOTAL", total);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = total / arr[i];
  }
  return arr;
};

var productArray = arr => {
  let map = {};
  let total = arr.reduce((a, b) => a * b);

  // division
  function divide(dividend, divisor) {
    let quotient = 0;
    while (dividend >= divisor) {
      dividend -= divisor;
      ++quotient;
    }
    return quotient;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = divide(total, arr[i]);
  }
  return arr;
};

console.log(productArray([3, 2, 1]));
console.log(productArray([1, 2, 3, 4, 5]));
