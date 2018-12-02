// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const letters = /^[A-Za-z]+$/;

  function stringMap(str) {
    let map = {}
    for (let s of str.toLowerCase()) {
      if (s.match(letters)) {
        map[s] = map[s] + 1 || 1;
      }
    }
    return map;
  }

  const freq = stringMap(stringA)
  const freq2 = stringMap(stringB)

  if (Object.keys(freq).length !== Object.keys(freq2).length) {
    return false;
  }
  // console.log('freq', freq, 'fre2', freq2)

  for (let key in freq) {
    if (freq[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

// sort string solution 2
function anagramsWSort(strA, strB) {
  const clean = (str) => str
    .toLowerCase()
    .replace(/[^\w]+/g, '')
    .split('')
    .sort()
    .join('')
  return clean(strA) === clean(strB)
}



module.exports = anagrams;
