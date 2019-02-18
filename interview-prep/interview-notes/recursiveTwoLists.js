function flatten(array, mutable) {
  var toString = Object.prototype.toString;
  var arrayTypeStr = "[object Array]";

  var result = [];
  var nodes = (mutable && array) || array.slice();
  var node;

  if (!array.length) {
    return result;
  }

  node = nodes.pop();

  do {
    if (toString.call(node) === arrayTypeStr) {
      nodes.push.apply(nodes, node);
    } else {
      result.push(node);
    }
  } while (nodes.length && (node = nodes.pop()) !== undefined);

  result.reverse(); // we reverse result to restore the original order
  return result;
}

function flatten(arr) {
  if (!arr.length) return [];
  nodes = arr.slice();
  result = [];
  console.log("START NODES", nodes);
  let node = nodes.pop();
  do {
    if (Array.isArray(node)) {
      console.log("NODE", node);
      nodes.push.apply(nodes, node);
      console.log("NODEs", nodes);
    } else {
      // console.log(node);
      result.push(node);
    }
  } while (nodes.length && (node = nodes.pop()) !== undefined);
  return result.reverse();
}

var array = [[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]];
console.log(flatten(array));
