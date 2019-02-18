var isPowerOfFour = function(n) {
  while (n != 1) {
    if (n % 4 != 0) {
      return false;
    }
    n = n / 4;
  }
  return true;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(20));
console.log(isPowerOfFour(-2147483648));
console.log(isPowerOfFour(64));
