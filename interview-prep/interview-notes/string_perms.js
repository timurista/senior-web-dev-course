// // 
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ...z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable.For example, '001' is not allowed.

// Upgrade to premium and get in -depth solutions to every problem.Since you were referred by one of our affiliates, you'll get a 10% discount on checkout!

// If you liked this problem, feel free to forward it along so they can subscribe here! As always, shoot us an email if there's anything we can help with!

let chars = '_abcdefghijklmnopqrstuvwxyz'.split('');

// console.log(chars)
function decode_count(message) {
  let count = 0;
  let options = [];

  let permutate = (str, rest) => {
    if (!rest.length) {
      options.push(str)
      count++;
      return;
    }
    // console.log(rest)
    let second = null;
    let first = chars[rest.substring(0, 1)];
    if (rest.length > 1) {
      let end = rest.substring(0, 2);
      // console.log(chars[end])
      second = chars[end];
    }

    permutate(str + first, rest.substring(1));
    if (second) {
      permutate(str + second, rest.substring(2));
    }
    // for (let c of rest) {
    //   permutate('a')
    //   perm
    // }
  }

  permutate("", message)
  console.log(options, count);
  return count;
}

console.log(decode_count("1111"))
console.log(decode_count("1"))
console.log(decode_count("2123"))
console.log(decode_count("21235"))
console.log(decode_count("11111"))

