// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const colLen = n * 2 - 1;

  for (let row = 0; row < n; row++) {
    let starLen = row * 2 + 1;
    let sideLen = Math.floor((colLen - starLen) / 2);
    let level = ' '.repeat(sideLen) + '#'.repeat(starLen) + ' '.repeat(sideLen)
    console.log(level);
  }
}

function pyramid(n) {
  const colLen = n * 2 - 1;

  for (let row = 0; row < n; row++) {
    let starLen = row * 2 + 1;
    let sideLen = (colLen - starLen) / 2;
    let level = '';

    for (let col = 0; col < colLen; col++) {
      if (col >= sideLen && col < sideLen + starLen) {
        level += '#'
      } else {
        level += ' '
      }
    }

    console.log(level)
  }
}

// recursive
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  const colLen = n * 2 - 1;

  if (level.length === colLen) {
    console.log(level);
    return pyramid(n, row + 1)
  }

  let starLen = row * 2 + 1;
  let sideLen = (colLen - starLen) / 2;

  if (level.length >= sideLen && level.length < sideLen + starLen) {
    level += '#'
  } else {
    level += ' '
  }

  pyramid(n, row, level)
}

module.exports = pyramid;
