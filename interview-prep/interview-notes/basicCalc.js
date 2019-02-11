/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
  let operands = [];

  let breakdown = s => {
    if (!s.match(/[+-]/)) {
      let digits = s.match(/\d+/);
      return digits ? parseInt(digits) : 0;
    }

    let digits = s.match(/\d+/);
    digits = digits ? parseInt(digits) : 0;
    let index = s.indexOf("+");

    console.log("digits", s);
    let operand = 1;
    if (s.indexOf("-") > -1 && s.indexOf("-") < s.indexOf("+")) {
      console.log("INDEXES", s.indexOf("-"), s.indexOf("+"));
      index = s.indexOf("-");
      operand = -1;
    }

    // let firstIndex =
    //   s.indexOf("+") < s.indexOf("-") && s.indexOf("-")
    //     ? s.indexOf("+")
    //     : s.indexOf("-");
    return digits + operand * breakdown(s.substring(index + 1));
  };

  if (str.length) return breakdown(str);
  // base case
};

// Input: "(1+(4+5+2)-3)+(6+8)"
// Output: 23
console.log(calculate("1 + 1"));
console.log(calculate(" 2-1 + 2 "));

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
