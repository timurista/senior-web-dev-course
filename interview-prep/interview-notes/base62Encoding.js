var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function base62(num, base = 62) {
  let digits = [];
  while (num > 0) {
    remainder = charset[num % base];
    digits.push(remainder)
    num = Math.floor(num / base);
  }
  return digits.reverse().join('')
}

let hash = '5eb63bbbe01eeed093cb22bb8f5acdc3'.split('').map(c => base62(c.charCodeAt())).join('')

console.log(hash.slice(0, 7));