function find_path(maze) {
  if (!maze || maze.length < 1) return false;

  let cache = new Map();
  let path = []
  let lastRow = maze.length - 1;
  let lastCol = lastRow;
  if (getPath(maze, lastRow, lastCol, path, cache)) {
    return path
  }
  return null
}


function getPath(maze, row, col, path, cache) {
  if (row < 0 || col < 0 || !maze[row][col]) return false;

  let p = [row, col];

  if (cache.has(p)) {
    return cache.get(p);
  }
  let success = false;
  let isAtOrigin = row === 0 && col === 0;
  let upPath = getPath(maze, row - 1, col, path, cache);
  let leftPath = getPath(maze, row, col - 1, path, cache);
  if (isAtOrigin || upPath || leftPath) {
    path.push(p);
    success = true;
  }
  console.log(cache, p, success)
  cache.set(p.toString(), success)
  return success;
}

let maze = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1]
]
console.log(find_path(maze))