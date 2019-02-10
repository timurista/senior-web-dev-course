/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  // min times A has to be repeated so B is substring of it
  let maxLength = Math.ceil(B.length / A.length);
  // true because A has to appear in length B.
  // lower theoretical bound has to be length of B

  for (let length of [maxLength, maxLength + 1]) {
    if (A.repeat(length).includes(B)) {
      return length;
    }
  }

  return -1;
};

("a");
("aa");

console.log(repeatedStringMatch("abcd", "cdabcdab"));
