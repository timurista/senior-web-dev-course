function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = Date.now()
console.log(addUpTo(10000000000000));
let t2 = Date.now()
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`);

function addUpTo(n) {
  return n * (n + 1) / 2;
}

let t3 = Date.now()
console.log(addUpTo(1000000000000));
let t4 = Date.now()
console.log(`Time elapsed: ${(t4-t3) / 1000} seconds.`);
