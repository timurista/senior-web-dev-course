
/*
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
*/
var detectCapitalUse = function (word) {
  if (word.length < 2) {
    return true;
  }
  let firstCap = word[0] === word[0].toUpperCase() ? 1 : 0;
  let upper = 0;
  for (let c of word.substring(1)) {
    let code = c.charCodeAt();
    // console.log(code)
    if (code >= 65 && code <= 90) {
      upper++;
    }
  }


  return firstCap + upper === word.length || firstCap > 0 && upper === 0 || !firstCap && !upper;
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("Germany"))
console.log(detectCapitalUse("FlaG"))
console.log(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"))
console.log(detectCapitalUse("ffffffffffffffffffffF"))
console.log(detectCapitalUse("ggg"))

