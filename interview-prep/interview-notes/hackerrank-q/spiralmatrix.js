/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let arr = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let remainder = matrix.length !== matrix[0].length ? true : false;

  while (startRow <= endRow && startCol <= endCol) {
    // if (startRow >= endRow && matrix.length < matrix[0].length) return arr;
    // if (startCol >= endCol && matrix.length > matrix[0].length) return arr;
    // console.log(startRow, endRow, startCol, endCol);
    for (let i = startCol; i <= endCol; i++) {
      arr.push(matrix[startRow][i]);
    }

    startRow++;

    // turn right
    for (let i = startRow; i <= endRow; i++) {
      arr.push(matrix[i][endCol]);
    }
    endCol--;

    // turn right
    for (let i = endCol; i >= startCol; i--) {
      arr.push(matrix[endRow][i]);
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      arr.push(matrix[i][startCol]);
    }

    // turn right
    startCol++;
  }
  return remainder ? arr.slice(0, arr.length - 1) : arr;
};

var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) return [];
  var upper = -1,
    right = matrix[0].length,
    lower = matrix.length,
    left = -1;
  var x = left + 1;
  var y = upper + 1;
  let result = [];

  var xySanity = (x, y, upper, lower, left, right) => {
    return x > left && x < right && y > upper && y < lower;
  };

  while (upper < lower && left < right) {
    if (!xySanity(x, y, upper, lower, left, right)) break;
    for (; x < right; x++) result.push(matrix[y][x]);
    x--;
    y++;
    upper++;
    if (!xySanity(x, y, upper, lower, left, right)) break;
    for (; y < lower; y++) result.push(matrix[y][x]);
    x--;
    y--;
    right--;
    if (!xySanity(x, y, upper, lower, left, right)) break;
    for (; x > left; x--) result.push(matrix[y][x]);
    x++;
    y--;
    lower--;
    if (!xySanity(x, y, upper, lower, left, right)) break;
    for (; y > upper; y--) result.push(matrix[y][x]);
    left++;
    x++;
    y++;
  }
  return result;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
console.log(spiralOrder([[7], [9], [6]]));
console.log(spiralOrder([[2, 3]]));
