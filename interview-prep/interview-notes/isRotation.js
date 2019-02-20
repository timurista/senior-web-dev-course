function is_rotation(a, b) {
  if (a.length !== b.length) return false;
  let idx = b.indexOf(a[0]);
  if (idx < 0) return false;
  for (let i = 0; i < b.length; i++) {
    let rotatedIdx = (i + idx) % b.length;
    if (a[i] !== b[rotatedIdx]) return false;
  }
  return true;
}

console.log(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 8, 1, 2, 3]));
console.log(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]));
console.log(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 3, 2, 3]));

console.log(is_rotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 9, 1, 2, 3]));
console.log(is_rotation([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]));
