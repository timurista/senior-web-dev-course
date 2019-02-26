class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowest_common_ancestor(head, val1, val2) {
  if (!head) return null;
  if (val1 == val2) return val1;
  let a_path = find_ancestors(head, val1)
  let b_path = find_ancestors(head, val2)
  console.log('   paths: ', a_path, b_path)

  let min = Infinity;
  for (let item1 of a_path) {
    let found = b_path.indexOf(item1) > -1
    if (found) min = Math.min(min, item1)
    else break
  }
  return min !== Infinity ? min : 0;
}

function find_ancestors(head, val) {
  // let ancestors = []

  const traverse = (parents, node) => {
    if (!node) return [];
    // if (ancestors.indexOf(val) > -1) return;
    if (node.val === val) {
      return parents.concat(val);
    }
    let p1 = traverse(parents.concat(node.val), node.left);
    let p2 = traverse(parents.concat(node.val), node.right);
    return p1.concat(p2)
  }
  let ancestors = traverse([], head);
  return ancestors;
}

let tree = new Node(5)
tree.left = new Node(1)
tree.left.left = new Node(3)
tree.left.right = new Node(8)
tree.left.left.left = new Node(6)
tree.left.left.right = new Node(7)

tree.right = new Node(4)
tree.right.left = new Node(9)
tree.right.right = new Node(2)

console.log(lowest_common_ancestor(tree, 8, 7)) // 1
console.log(lowest_common_ancestor(tree, 4, 2)) // 4
console.log(lowest_common_ancestor(tree, 3, 1)) // 1
console.log(lowest_common_ancestor(tree, 0, 5)) // 0

let tree2 = new Node(5)
tree2.left = new Node(1)
tree2.left.left = new Node(3)
tree2.left.right = new Node(8)
tree2.left.left.left = new Node(6)
tree2.left.left.right = new Node(7)

tree2.right = new Node(4)
tree2.right.left = new Node(9)
tree2.right.right = new Node(2)
console.log(lowest_common_ancestor(tree2, 4, 7)) // 5
console.log(lowest_common_ancestor(tree2, 3, 3)) // 3
console.log(lowest_common_ancestor(tree2, 8, 7)) // 1
console.log(lowest_common_ancestor(tree2, 3, 0)) // 0

  // / lca(head1, 1, 5) should return 0
        // lca(head1, 3, 1) should return 1
        // lca(head1, 1, 4) should return 1
        // lca(head1, 0, 5) should return 0
        // lca(head2, 4, 7) should return 5
        // lca(head2, 3, 3) should return 3
        // lca(head2, 8, 7) should return 1
        // lca(head2, 3, 0) should return null (0 does not exist in the tree)

