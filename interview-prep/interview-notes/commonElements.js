// [1, 3, 4, 6, 7, 9]
// [1, 2, 4, 5, 9, 10]

function common_elements(a, b) {
  // max(O(n,m))
  let map = {};
  for (let i of a) {
    map[i] = true;
  }
  let found = new Array();
  let max = Math.max(a.length, b.length);
  for (let i of b) {
    if (map[i]) found.push(i);
    else map[i] = true;
  }
  return found;
}

function common_elements(a, b) {
  // max(O(n,m))
  let max = Math.max(a.length, b.length);
  let found = new Array(max);
  let first = 0;
  let second = 0;
  let idx = 0;
  while (first < max && second < max) {
    let aItem = a[first];
    let bItem = b[second];
    if (!aItem) break;
    if (!aItem) break;

    if (aItem === bItem) {
      found[idx] = aItem;
      idx++;
      first++;
      second++;
    } else if (aItem > bItem) {
      second++;
    } else if (aItem < bItem) {
      first++;
    }
  }

  return found.filter(Boolean);
}

console.log(common_elements([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]));
console.log(common_elements([1, 3, 4, 6, 7, 9], [1, 3, 4, 6, 7, 9]));

console.log(
  common_elements(
    [1, 2, 9, 10, 11, 12],
    [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
  )
);
console.log(common_elements([0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]));
