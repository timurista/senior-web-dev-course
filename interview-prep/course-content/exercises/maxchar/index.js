// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (!str.length) return null;
  const freq = {}
  let maxChar = str.charAt(0);
  let maxLen = 1;

  for (let char of str) {
    freq[char] = freq[char] + 1 || 1;
    if (freq[char] > maxLen) {
      maxChar = char;
      maxLen = freq[char];
    }
  }
  console.log(maxLen, maxChar, freq)
  return maxChar
}

module.exports = maxChar;
