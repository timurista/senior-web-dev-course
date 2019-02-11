/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, k) {
  // how many groups depends on how many times k goes into length S
  const s = S.replace(/-+/g, "").toUpperCase();
  let newS = "";
  for (let i = 0; i < s.length; i++) {
    let letter = s.substring(i, i + 1);
    if (i > 0 && (s.length - i) % k === 0) {
      // console.log(i, k);
      newS += "-" + letter;
    } else {
      newS += letter;
    }
  }
  return newS;
};

// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W"

//
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
