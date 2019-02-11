/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  let combos = [];

  const backtrack = (combo, nextDigits) => {
    if (!nextDigits.length) {
      combos.push(combo);
    } else {
      let digit = nextDigits.substring(0, 1);
      let letters = map[digit];

      for (letter of letters) {
        console.log(combo, letter, digit);
        backtrack(combo + letter, nextDigits.substring(1));
      }

      // for (let i = 0; i < letters.length; i++) {
      //   letter = letters.substring(i, i + 1);
      //   backtrack(combo + letter, nextDigits.substring(1));
      // }
    }
  };

  if (digits.length) {
    backtrack("", digits);
  }
  return combos;
};

console.log(letterCombinations("23"));
