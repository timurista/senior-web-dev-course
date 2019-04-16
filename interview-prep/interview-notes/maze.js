function find_path(matrix, start, end) {
  let visited = matrix.slice();
  visited = new Array(matrix.length).fill([]);
  visited = visited.map(_ => new Array(matrix[0].length).fill(false));

  // console.log(visited, start);

  let queue = [{ node: start, dist: 0 }];

  const rowDir = [-1, 0, 0, 1];
  const colDir = [0, -1, 1, 0];

  const isValid = (x, y) => matrix[x] && matrix[x][y];

  while (queue.length) {
    const { node, dist } = queue.shift();
    let r = node[0];
    let c = node[1];

    console.log(node)
    visited[r][c] = true;

    if (end[0] === r && end[1] === c) {
      console.log('found', r, c, matrix)
      return dist;
    }

    for (let i = 0; i < rowDir.length; i++) {
      let row = rowDir[i] + r;
      let col = colDir[i] + c;

      if (isValid(row, col) && !visited[row][col]) {
        queue.push({ node: [row, col], dist: dist + 1 })
      }
    }
  }
  return -1;

}

let m = [
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 1, 1, 0],
]
console.log(find_path(m, [0, 0], [2, 1]))