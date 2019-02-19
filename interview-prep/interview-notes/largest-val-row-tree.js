/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  // store depth as array
  // find max at depth

  if (!root) return [];
  let vals = [];

  function traverse(node, depth) {
    if (!node) {
      return;
    }
    // console.log(vals[depth], depth, node.val);
    vals[depth] = Math.max(vals[depth] || -Infinity, node.val);
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }
  traverse(root, 0);
  return vals;
};

var largestValues = function(root) {
  if (!root) return [];
  let queue = [[root]];
  let res = [];
  while (queue.length) {
    let nodes = queue.pop();
    console.log(nodes);
    let next_lv = [];
    let largest = -Infinity;
    for (let node of nodes) {
      largest = Math.max(largest, node.val);
      if (node.left) {
        next_lv.push(node.left);
      }
      if (node.right) {
        next_lv.push(node.right);
      }
    }

    // console.log(next_lv);

    res.push(largest);
    if (next_lv.length) queue.push(next_lv);
  }

  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);
root.right.left = null;
root.right.right = new TreeNode(9);
console.log(largestValues(root));
