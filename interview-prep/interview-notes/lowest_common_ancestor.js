class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// for memoize
let all_ancestors = {}
let old_head = null

function lowest_common_ancestor(head, val1, val2) {
  if (!head) return null;
  if (val1 == val2) return val1;
  if (!old_head) old_head = head;
  if (old_head !== head) { old_head = head; all_ancestors = {} }
  let a_path = find_ancestors(head, val1)
  let b_path = find_ancestors(head, val2)
  console.log('   paths: ', a_path, b_path)

  // let min = Infinity;
  // ancestors are smaller assumption
  // you could just check min here if unsure
  for (let item1 of a_path.reverse()) {
    let found = b_path.indexOf(item1) > -1
    if (found) return item1
  }
  return 0;
}



function find_ancestors(head, val) {
  // to memoize
  if (all_ancestors[val]) {
    // console.log('  FOUND ANCESTOR for ' + val)
    return all_ancestors[val];
  }

  const traverse = (parents, node) => {
    if (!node) return [];
    if (node.val === val) {
      return parents.concat(val);
    }
    let currentArr = parents.concat(node.val)
    // below only works if we assume no duplicate values
    all_ancestors[node.val] = currentArr
    let p1 = node.left ? traverse(currentArr, node.left) : [];
    let p2 = node.right ? traverse(currentArr, node.right) : [];
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

console.time('test1')
console.log(lowest_common_ancestor(tree, 8, 7)) // 1
console.log(lowest_common_ancestor(tree, 4, 2)) // 4
console.log(lowest_common_ancestor(tree, 3, 1)) // 1
console.log(lowest_common_ancestor(tree, 0, 5)) // 0

console.log('all ancestors', all_ancestors)

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

console.timeEnd('test1')