const arr1 = "abcx".split("");
const arr2 = "zyc".split("");

// new function common item
// takes array 1 and a2
function containsCommon(a1, a2) {
  let dict = {};
  console.log(a1, a2);

  // think through small steps
  // o a
  for (let a of a1) {
    dict[a] = true;
  }
  // in the second for loop
  // o b
  for (let b of a2) {
    if (dict[b]) return true;
  }
  return false;
}

// solution is o (a + b)

console.log("Contians common", containsCommon(arr1, arr2));
