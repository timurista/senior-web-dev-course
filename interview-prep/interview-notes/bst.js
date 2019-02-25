class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function is_bst(root) {

  function bst(node, min, max) {
    if (!node) return true;

    if (min !== null && node.val < min) {
      return false;
    }

    if (max !== null && node.val > max) {
      return false;
    }


    let p1 = bst(node.left, min, node.val);
    let p2 = bst(node.right, node.val, max);
    return p1 && p2
  }

  return bst(root, null, null)
}


let root = new Node(3)
root.left = new Node(1)
root.left.left = new Node(0)
root.left.right = new Node(2)
root.right = new Node(4)
root.right.left = new Node(5)
root.right.right = new Node(6)

console.log(is_bst(root))

let root2 = new Node(3)
root2.left = new Node(1)
root2.left.left = new Node(0)
root2.left.right = new Node(2)
root2.right = new Node(5)
root2.right.left = new Node(4)
root2.right.right = new Node(6)
console.log(is_bst(root2))