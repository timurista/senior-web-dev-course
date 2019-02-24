function rotate(given_array, n) {
  // (0,0) (0,1) (0,2)

  // after rotate
  // (0,2) (1,2) (2,2)

  // (1,0) (1,1) (1,2)
  // after rotate
  // (0,1) (1,1) (2, 1)

  // (2,0) (2,1) (2,2)
  // after rotate
  // (0,0) (1,0) (2,0)

  // flip the rows and cols
  // new col is now - the end
  // 0,2 -> 2,0. and 0 is the col, so  2- 0 is 2
  // 2,0 -> 0,2. and 2 is col so 2-2 is 0
  // 0,1 -> 1,0 and 0 is col, so 2-0 is 2, 1,2
  let newArr = new Array(n);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(n);
  }
  for (let row = 0; row < given_array.length; row++) {
    console.log(newArr, given_array)
    for (let col = 0; col < n; col++) {
      console.log(row, col, col, n - 1 - row)
      newArr[row][col] = given_array[n - 1 - col][row];
    }
  }
  return newArr;
}

function rotate_in_place(given_array, n) {
  // in place solution
  let flipped = {};
  for (let row = 0; row < given_array.length; row++) {
    for (let col = 0; col < n; col++) {
      let newRow = n - 1 - col;
      let newCol = row;
      console.log(flipped);
      if (flipped[newRow + ',' + newCol]) continue;
      let temp = given_array[row][col];
      // console.log(row, col, col, newRow, temp, given_array[newRow][row]);
      given_array[row][col] = given_array[newRow][newCol];
      given_array[newRow][newCol] = temp;
      flipped[row + ',' + col] = true;
    }
  }
  return given_array;
}

function rotate_in_place(given_array, n) {
  // in place solution
  let flipped = {};
  for (let row = 0; row < given_array.length; row++) {
    for (let col = 0; col < n; col++) {
      let newRow = n - 1 - col;
      let newCol = row;
      console.log(flipped);
      if (flipped[newRow + ',' + newCol]) continue;
      let temp = given_array[row][col];
      // console.log(row, col, col, newRow, temp, given_array[newRow][row]);
      given_array[row][col] = given_array[newRow][newCol];
      given_array[newRow][newCol] = temp;
      flipped[row + ',' + col] = true;
    }
  }
  return given_array;
}


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate_in_place(arr, arr.length))