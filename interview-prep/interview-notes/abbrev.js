// Complete the abbreviation function below.
function abbreviation(a, b) {
  if (a.length < b.length) return false;
  // assume b is target
  let startIdx = a.indexOf(b[0]) > -1 ? a.indexOf(b[0]) : 0;
  let aIdx = startIdx;
  if (a.length - startIdx < b.length) return false;

  let isUpper = (str1) => str1.toUpperCase() === str1;
  let isLower = (str1) => str1.toLowerCase() === str1;

  a = a.substring(startIdx)

  while (a.length && b.length) {
    console.log("a string:" + a, "b string: " + b)
    let item = a[0];
    let item2 = b[0];
    if (item !== item2) {
      if (isUpper(item)) {
        return "NO";
      }
      if (isLower(item)) {
        // check if it 
        if (item.toUpperCase() === item2) {
          b = b.substring(1)
        }
        a = a.substring(1)
      }
    } else {
      b = b.substring(1)
      a = a.substring(1)
    }
  }

  if (a.split('').some(c => isUpper(c))) return "NO"
  return !b.length ? "YES" : "NO";
}

console.log(abbreviation("daBcd", "ABC")) // true
console.log(abbreviation("adaBcd", "ABC"))// true
console.log(abbreviation("adaDcd", "ABC"))// false
console.log(abbreviation("adaefc", "ABC"))// false
console.log(abbreviation("aerererebrererc", "ABC"))// true
console.log(abbreviation("erereraebrererc", "ABC"))// true


