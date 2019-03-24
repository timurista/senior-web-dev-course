function generateSolution(arr, n) {
  const operators = { 'plus': (a, b) => a + b, 'minus': (a, b) => a - b, 'multiply': (a, b) => a * b, 'divide': (a, b) => a / b }
  let visited = new Map();

  let initial = arr.shift();
  let queue = [];
  for (let ops of Object.keys(operators)) {
    queue.push([initial, ops, [[initial, ops]], 0])
  }
  while (queue.length) {
    console.log(queue)
    let [item, fnName, path, res] = queue.shift();
    visited.set(item + fnName, true);
    // console.log(res, item, fnName)
    let newRes = operators[fnName](res, item);
    console.log(item + fnName, newRes)

    // if (res < 0) continue;
    // console.log(res)
    if (newRes === n) { console.log(path, 'visited', visited); return true };

    while (arr.length) {
      let nextItem = arr.shift();
      for (let operatorFn of Object.keys(operators)) {
        // if (newRes > n || newRes < 0) {
        //   if (!visited.has(item + operatorFn)) {
        //     queue.push([item, operatorFn, path, newRes])
        //   }
        //   continue;
        // } else {
        let newPath = [...path, [nextItem, operatorFn]]
        // if (visited.has(nextItem + operatorFn)) continue;
        queue.push([nextItem, operatorFn, newPath, newRes])
        // }
      }
    }

  }
  return false;
}

function generateSolution()


console.log(generateSolution([1, 2, 12, 1], 24))