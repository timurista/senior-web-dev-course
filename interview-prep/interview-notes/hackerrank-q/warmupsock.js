function sockMerchant(n, ar) {
  let map = {};
  for (let a of ar) {
    map[a] = ++map[a] || 1;
  }
  return Object.values(map)
    .map(v => Math.floor(v / 2))
    .reduce((a, b) => a + b);
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
