const EMPTY = 0;

let result;
function sudoku(board) {
  if (isComplete(board)) return board;

  let [r, c] = findFirstEmpty(board)

  for (let i = 1; i <= 9; i++) {
    board[r][c] = i;
    if (validSoFar(board)) {
      let result = sudoku(board)
      // console.log('result', result)
      if (isComplete(result)) return result
    }
    board[r][c] = EMPTY;
  }
  return board;
}

function findFirstEmpty(board) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] === EMPTY) return [r, c]
    }
  }
  return true;
}

function isComplete(board) {
  for (let r of board) {
    for (let c of r) {
      // console.log(c, r)
      if (c === EMPTY) return false
    }
  }
  // console.log('board complete')
  return true;
}

function validSoFar(board) {
  if (!rowsValid(board)) return false;
  if (!colsValid(board)) return false;
  if (!blocksValid(board)) return false;
  return true;
}

function rowsValid(board) {
  for (let row of board) {
    if (hasDupes(row)) return false;
  }
  return true;
}

function rowsValid(board) {
  for (let row of board) {
    if (hasDupes(row)) return false;
  }
  return true;
}

function colsValid(board) {
  for (let c = 0; c < board.length; c++) {
    let col = []
    for (let r = 0; r < board.length; r++) {
      col.push(board[r][c])
    }
    if (hasDupes(col)) return false
  }
  return true;
}

function blocksValid(board) {
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      block = []
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          block.push(board[i + k][j + l])
        }
      }
      if (hasDupes(block)) return false;
    }
  }
  return true;
}

function hasDupes(row) {
  let dupes = {}
  for (let item of row) {
    if (item !== EMPTY && dupes[item]) return true
    dupes[item] = true;
  }
  return false;
}

let boardS = [
  [0, 9, 0, 0, 0, 0, 8, 5, 3],
  [0, 0, 0, 8, 0, 0, 0, 0, 4],
  [0, 0, 8, 2, 0, 3, 0, 6, 9],
  [5, 7, 4, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 9, 0, 0, 6, 3, 7],
  [9, 4, 0, 1, 0, 8, 5, 0, 0],
  [7, 0, 0, 0, 0, 6, 0, 0, 0],
  [6, 8, 2, 0, 0, 0, 0, 9, 0]
]

console.log(sudoku(boardS))