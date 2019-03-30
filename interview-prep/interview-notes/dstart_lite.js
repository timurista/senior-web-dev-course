// a start life lon planning

class AStarLifeLong {
  constructor(matrix = [[]], start = [0, 0], goal) {
    this.matrix = matrix;
    this.goal = goal;
    this.matrix[goal[0]][goal[1]] = 0;
    this.start = start;
    this.heuristicMap = this.generateKeys(goal)
  }
  generateKeys(goal) {
    let heuristicMap = new Map();
    let getHueristic = (curr, goal, currentWeight) => {
      console.log(curr, goal, currentWeight)
      return Math.sqrt(((curr[0] - goal[0]) ** 2) + ((curr[1] - goal[1]) ** 2)) + currentWeight
    }
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        heuristicMap.set([row, col], getHueristic([row, col], goal, matrix[row][col]))
      }
    }
    return heuristicMap
  }

}

let matrix = [
  [4, 3, 4, 2],
  [4, Infinity, 1, 1],
  [4, 2, 2, 2]
]

let astar = new AStarLifeLong(matrix, [0, 0], [2, 3])
console.log(astar.heuristicMap)