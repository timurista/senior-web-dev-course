/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows = 0) {
  // 0 4 8 12, 1 3 5 7 9 11 13, 2 6 10
  if (numRows === 1) return s;

  let currRow = 0;
  let goingDown = false;
  let minLen = Math.min(numRows, s.length);
  let rows = new Array(minLen).fill('');

  for (let c of s) {
    rows[currRow] += c;
    if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
    currRow += goingDown ? 1 : -1;
  }
  let ret = '';
  for (let row of rows) {
    console.log('row', row)
    ret += row;
  }
  return ret;
};

console.log(convert('PAYPALISHIRING', 3))