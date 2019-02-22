/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (b.length > a.length) {
    return addBinary(b, a);
  }
  let carry = 0;
  let i = a.length;
  let j = b.length;
  let newString = "";
  while (i > 0) {
    // if (!a[i] && !b[j]) break;
    let num1 = parseInt(a[i] || 0);
    let num2 = parseInt(b[j] || 0);
    let val = (num1 + num2 + carry) % 2;
    carry = num1 + num2 + carry > 1 ? 1 : 0;
    newString = val.toString() + newString;
    i--;
    j--;
  }
  if (carry > 0) {
    newString = "1" + newString;
  }
  return newString;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));

let t1 =
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let t2 =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(t1, t2));
// "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
