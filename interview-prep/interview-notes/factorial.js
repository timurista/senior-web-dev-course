let memoize = []


function factorial(n) {
  if (n <= 2) return n;
  let x = n * factorial(n - 1)
  memoize[n] = x
  return x
}

console.time('it')
console.log(factorial(100))
console.timeEnd('it')