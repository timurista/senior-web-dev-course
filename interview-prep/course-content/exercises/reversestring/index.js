// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // questions: max str size?
  // sounds like new str is good, no in place reversal
  if (!str.length) return "";
  let reversed = "";
  for (let i = str.length; i >= 0; i--) { // O of n
    reversed += str.charAt(i);
  }
  return reversed;
}

// recursive
function reverse(str) {
  if (!str.length) return "";
  // debugger;
  return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1))
}


// reduce method tos how interviewer you know rev and char
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, "")
// }

// reverse('asdf')

// quick tool to debug

module.exports = reverse;
