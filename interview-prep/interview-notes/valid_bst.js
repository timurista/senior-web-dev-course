class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function validate_bst(tree) {
  if (!tree) return null

  function check_left(parentVal, left, minLeft) {
    if (!left) return true;
    // console.log(left.val, minLeft)
    if (left.val < minLeft) return false;
    if (left.val > parentVal) return false;
    return true;
  }

  function check_right(parentVal, right, minRight) {
    if (!right) return true;
    console.log(right.val, minRight)
    if (right.val > minRight) return false;
    if (right.val < parentVal) return false;
    return true;
  }

  function is_valid(node, minLeft, maxRight) {
    if (!node) return true;
    let l = check_left(node.val, node.left, minLeft)
    let r = check_right(node.val, node.right, maxRight)
    // console.log(node)
    if (!l) return false;
    if (!r) return false;
    return is_valid(node.left, null, node.val) && is_valid(node.right, node.val, null)
  }

  return is_valid(tree, null, null)

}

let tree = new Node(5)
tree.left = new Node(4)
tree.left.left = new Node(1)
tree.left.right = new Node(8)

tree.right = new Node(6)
tree.right.right = new Node(9)

console.log(validate_bst(tree))


let tree2 = new Node(5)
tree2.left = new Node(3)
tree2.left.left = new Node(1)
tree2.left.right = new Node(4)

tree2.right = new Node(6)
tree2.right.right = new Node(9)

console.log(validate_bst(tree2))