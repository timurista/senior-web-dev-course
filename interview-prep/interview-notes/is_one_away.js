// function is_one_away(a, b) {
//   if (Math.abs(b.length - a.length) > 1) return false;
//   let charMap = {};
//   let numEdits = 0;
//   for (let char of a) {
//     charMap[char] = ++charMap[char] || 1;
//   }

//   for (let char of b) {
//     if (numEdits > 1) return false;
//     if (charMap[char] === undefined) charMap[char] = ++charMap[char] || 1;
//     if (charMap[char] !== undefined) charMap[char]--;
//   }
//   let sum = 0;
//   for (let char of Object.keys(charMap)) {
//     sum += Math.abs(charMap[char]);
//   }
//   console.log(charMap);
//   if (sum + numEdits > 1) return false;
//   return true;
// }

function is_one_away(a, b) {
  if (Math.abs(b.length - a.length) > 1) return false;

  // case 2, same length
  if (a.length === b.length) {
    let numEdits = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) numEdits++;
      if (numEdits > 1) return false;
    }

    return true;
  }

  // other cases only 1 length away
  let i = 0;
  let countDiff = 0;
  let s1 = b.length > a.length ? b : a;
  let s2 = b.length > a.length ? a : b;

  while (i < s2.length) {
    // console.log(i, countDiff);
    if (s1[i + countDiff] === s2[i]) {
      i++;
    } else {
      countDiff++;
      if (countDiff > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(is_one_away("abcde", "abfde"));
console.log(is_one_away("abcde", "abde"));
console.log(is_one_away("xyz", "xyaz"));
console.log(is_one_away("xyz", "xyay"));
