/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  // A = 65
  // Z = 90

  let s = "";
  while (n != 0) {
    let char = 65 + ((n - 1) % 26);
    s = String.fromCharCode(char) + s;
    n = ~~(n - ((n - 1) % 26) - 1) / 26;
  }
  return s;
};

console.log(convertToTitle(1));
console.log(convertToTitle(25));
console.log(convertToTitle(26));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
