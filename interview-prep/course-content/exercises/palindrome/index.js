// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my solution
function palindrome(str) {
  if (str.length < 1) return false;

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return str === reversed;
}

function palindrome(str) {
  return str.split('').every(
    (char, i) =>
      char === str[str.length - i - 1]
  )
}

// give alternate solutions
// be aware of all ways


module.exports = palindrome;
