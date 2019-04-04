/**
Good morning! Here's your coding interview problem for today.

This problem was asked by Two Sigma.

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

 */

function rand5() {
  return Math.round(Math.random() * 5) + 1;
}

function rand7() {
  // generate multiple of 7 with equal prob
  // this will generate up to 21
  // 5 * 5 = 25, 5-5 = 0, max 25 worst case, so we try it again
  let i = 5 * rand5() + rand5() - 5;
  if (i < 22)
    return i % 7 + 1;
  return rand7(); // we try this again, 3/25 chance of this happening
}

for (let i = 0; i < 100; i++) {
  let r = rand7();
  console.log(r)
}
