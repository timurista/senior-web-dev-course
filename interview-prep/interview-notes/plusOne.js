/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    }
    digits[i] += carry;

    if (digits[i] >= 10) {
      carry = 1;
      digits[i] = digits[i] % 10;
    } else {
      carry = 0;
    }
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
};

console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
