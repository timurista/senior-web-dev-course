// function count_neighor_bombs(bombs_map, row, col) {
//   let top_left = bombs_map[row - 1 + "," + col - 1] || 0;
//   let top = bombs_map[row - 1 + "," + col] || 0;
//   let top_right = bombs_map[row - 1 + "," + col + 1] || 0;
//   let left = bombs_map[row + "," + col] || 0;
//   let right = bombs_map[row + "," + col] || 0;
//   let bottom_left = bombs_map[row + 1 + "," + col - 1] || 0;
//   let bottom = bombs_map[row + 1 + "," + col] || 0;
//   let bottom_right = bombs_map[row + 1 + "," + col + 1] || 0;
//   return (
//     top_left +
//     top +
//     top_right +
//     left +
//     right +
//     bottom_left +
//     bottom +
//     bottom_right
//   );
// }

// function mine_sweeper(bombs, num_rows, num_cols) {
//   let field = new Array(num_rows).fill(new Array(num_cols).fill(0));
//   let bombs_map = {};
//   for (let item of bombs) {
//     let row = item[0];
//     let col = item[1];
//     field[row][col] = -1;
//     bombs_map[row + "," + col] = 1;
//   }
//   console.log(field);

//   for (let i = 0; i < num_rows; i++) {
//     for (let j = 0; j < num_cols; j++) {
//       // field[i][j] = 0;
//       if (bombs_map[i + "," + j] === undefined) {
//         console.log(bombs_map[i + "," + j]);
//         field[i][j] = count_neighor_bombs(bombs_map, i, j);
//       }
//     }
//   }
//   return field;
// }

function mine_sweeper(bombs, num_rows, num_cols) {
  let field = new Array(num_rows);
  for (let r = 0; r < field.length; r++) {
    field[r] = new Array(num_cols).fill(0);
  }
  let bombs_map = {};
  for (let [row, col] of bombs) {
    field[row][col] = -1;
    bombs_map[row + "," + col] = 1;
    // add to surrounding
    console.log("field after bomb insert", field, row, col);

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (field[i] && field[i][j] !== undefined) {
          if (bombs_map[i + "," + j] === undefined) {
            console.log(i, j, bombs_map[i + "," + j]);
            field[i][j] += 1;
          }
        }
      }
    }
    console.log("field after bomb count insert", field);
  }
  return field;
}

console.log(mine_sweeper([[0, 0], [0, 1]], 3, 4));
