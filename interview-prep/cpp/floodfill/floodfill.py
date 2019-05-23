def floodfill(matrix, row, col, m,n, visited):

  if [m,n] in visited:
    return
  if row < 0 or col < 0 or row > n or col > m or matrix[row][col] === 0):
    return
  matrix[row][col] = 0
  count += 1
  visited.add()

  floodfill(matrix, row, col-1, m, n, visited)
  floodfill(matrix, row-1,col, m, n, visited)
  floodfill(matrix, row,col+1, m, n, visited)
  floodfill(matrix, row+1,col, m, n, visited)

