var orangesRotting = function(grid) {
  let fresh = 0;
  let days = 0;

  // count fresh
  for (let row of grid) {
    for (let col of row) {
      if (col === 1) fresh++;
    }
  }
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
