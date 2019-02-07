function formingMagicSquare(arr) {
  // assume arr is 3x3
  if (!arr.length === 3) return false;
  if (!arr[0] === 3) return false;
  if (!arr[1] === 3) return false;
  if (!arr[2] === 3) return false;

  const possibles = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
  ];

  console.log("SIZE", JSON.stringify(possibles).length);
  console.log("SIZE", roughSizeOfObject(possibles));

  let minCost = Infinity;
  let closestMatchArr = null;

  for (let i = 0; i < possibles.length; i++) {
    const candidate = possibles[i];
    let cost = 0;

    // calc cost
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        cost += Math.abs(candidate[row][col] - arr[row][col]);
      }
    }
    if (cost < minCost) {
      closestMatchArr = candidate;
      minCost = cost;
    }
  }
  // little help
  console.log("closest match found", closestMatchArr);
  return minCost;
}

function roughSizeOfObject(object) {
  var objectList = [];
  var stack = [object];
  var bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    if (typeof value === "boolean") {
      bytes += 4;
    } else if (typeof value === "string") {
      bytes += value.length * 2;
    } else if (typeof value === "number") {
      bytes += 8;
    } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
      objectList.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }
  return bytes;
}

formingMagicSquare([[1, 2, 3], [2, 3, 4], [4, 5, 6]]);
