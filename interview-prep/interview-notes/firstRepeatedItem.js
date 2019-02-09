// Google QUestion
function recurring(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (map[item]) return item;
    map[item] = true;
  }
}

console.log(recurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurring([2, 3, 4, 5]));

// 9 -> 9
// 1

// 1 + 9

// 0 -> 1
// 0 -> 9
