// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // go through 1...n
  // you could allocate empty matrix
  // traverse twice, so 2n or n*2 problem
  // 1,0,0 -> 2,0,1 -> 3,0,2
  // 4,1,2 -> 5,2,2
  // 6,2,1 -> 7,2,0
  // 8,1,0 -> 9,1,1

  let results = [];
  for (let i = 0; i < n; i++) {
    let array = new Array(n)
    results.push(array.fill('-', 0, n));
  };
  let counter = 1;
  let startCol = 0
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    console.log('---');
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    startRow++;

    console.log('topleft to topright', results)

    for (let j = startRow; j <= endRow; j++) {
      results[j][endCol] = counter;
      counter++;
    }

    endCol--;

    console.log('topright to bottomright', results)

    for (let c = endCol; c >= startCol; c--) {
      results[endRow][c] = counter;
      counter++;
    }

    endRow--;

    console.log('bottomright to bottomleft', results)

    for (let d = endRow; d >= startRow; d--) {
      results[d][startCol] = counter;
      counter++;
    }

    console.log('bottomleft to topleft', results)

    startCol++;


  }
  return results;

}

console.log(matrix(5))

module.exports = matrix;
