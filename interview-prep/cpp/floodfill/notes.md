## Basic flood fill problem
you check if there is a 1, then you fill the neighbors until you reach 0
at 0 you return or if you reach end

x < 0 or y < 0 or x > n or y > n or matrix[y][x] == 0
return

floodfill left
floodfill top
floodfill right
floodfill bottom
