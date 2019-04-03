class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function make_trees(low, high) {
  let trees = []
  if (low > high) {
    trees.push(null)
    return trees;
  }

  for (let i = low; i < high + 1; i++) {
    let left = make_trees(low, i - 1);
    let right = make_trees(i + 1, high)

    console.log(i, left, right)
    for (let l of left) {
      for (let r of right) {
        let node = new Node(i, l, r)
        trees.push(node);
      }
    }
  }
  return trees;
}

function preorder(root) {
  result = []
  if (root) {
    result.push(root.val)
    result = result.concat(preorder(root.left))
    result = result.concat(preorder(root.right))
  }
  return result;
}

function construct_trees(n) {
  let trees = make_trees(1, n);
  // console.log(trees)
  for (let tree of trees) {
    console.log(preorder(tree))
  }
}

construct_trees(3)