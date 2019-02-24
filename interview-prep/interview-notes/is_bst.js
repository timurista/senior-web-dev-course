class Node {
  constructor(val) {
    this.val = val;
    this.left = val;
    this.right = val;
  }
}

function is_binary_search(tree) {
  // walk all left
  // walk all right
  // assert 
}

let tree = new Node(3)
tree.left = new Node(1)
tree.left.left = new Node(0)
tree.left.right = new Node(2)
tree.right = new Node(5)
tree.right.left = new Node(4)
tree.right.left = new Node(6)