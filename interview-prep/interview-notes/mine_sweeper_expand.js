function check_and_find_neighbor(field, position) {
  // console.log(position);
  field[position[0]][position[1]] = -2;
  let neighbors = [];
  for (let i = position[0] - 1; i <= position[0] + 1; i++) {
    for (let j = position[1] - 1; j <= position[1] + 1; j++) {
      if (field[i] === undefined || field[i][j] === undefined) continue;
      else if (field[i][j] !== 0) continue;
      // console.log(i, j);
      neighbors.push([i, j]);
      field[i][j] = -2;
    }
  }
  return neighbors;
}

function click(field, num_rows, num_cols, given_i, given_j) {
  if (field[given_i][given_j] !== 0) return field;
  let queue = [[given_i, given_j]];
  while (queue.length) {
    let toCheck = queue.pop();
    // console.log(queue, toCheck);
    let found = check_and_find_neighbor(field, toCheck);
    if (found.length) queue.push(...found);
  }
  return field;
}

let field = [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, -1, 1, 0]];
console.log(click(field, field.length, field[0].length, 2, 2));
// console.log(click(field, field.length, field[0].length, 0, 0));

let field2 = [[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]];
console.log(click(field2, field2.length, field2[0].length, 0, 2));
