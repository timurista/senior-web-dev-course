function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  if (root === null) return 0;

  // lets you step inside
  const reduceNode = (node, val) => {
    if (!node || node.val !== val) return 0;

    console.log(node.val, val);
    return (
      1 + Math.max(reduceNode(node.left, val), reduceNode(node.right, val))
    );
  };

  const left = reduceNode(root.left, root.val);
  const right = reduceNode(root.right, root.val);

  console.log(left, right);

  const max = Math.max(
    left + right,
    Math.max(longestUnivaluePath(root.left), longestUnivaluePath(root.right))
  );
  return max;
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(5);

console.log(root);
console.log(longestUnivaluePath(root));
