function non_repeating(str) {
  if (!str.length) return null;
  let map = {};
  let queue = [];
  for (let c of str) {
    let idx = queue.indexOf(c);
    if (idx > -1 && map[c]) {
      queue.splice(idx, 1);
    } else if (!map[c]) {
      queue.push(c);
    }
    map[c] = true;
  }
  // console.log(queue);
  return queue[0] ? queue[0] : null;
}

// SIMPLE
function non_repeating(str) {
  if (!str.length) return null;
  let map = {};
  let queue = [];
  for (let c of str) {
    map[c] = ++map[c] || 1;
  }
  for (let c of str) {
    if (map[c] === 1) return c;
  }
  return null;
}

console.log(non_repeating("aabcb"));
console.log(non_repeating("abcab"));
console.log(non_repeating("xxyz"));
console.log(non_repeating("aabb"));
console.log(non_repeating("aabbbc"));
console.log(non_repeating("aabbdbc"));
// non_repeating("aabbbc");
