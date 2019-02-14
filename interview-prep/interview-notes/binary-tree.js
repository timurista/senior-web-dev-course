class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  lookup(val) {
    let curr = this.root;

    while (curr !== null) {
      if (curr.val === val) return curr;
      if (val <= curr.val) {
        curr = curr.left;
      } else if (val >= curr.val) {
        curr = curr.right;
      }
    }
    return null;
  }

  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let curr = this.root;

    while (curr !== null) {
      if (val <= curr.val) {
        if (!curr.left) {
          curr.left = node;
          return;
        }
        curr = curr.left;
      } else if (val >= curr.val) {
        if (!curr.right) {
          curr.right = node;
          return;
        }
        curr = curr.right;
      }
    }
    // curr = node;
    console.log("INSERTING", curr, val);
  }

  remove(val) {
    if (!this.root) return false;
    let curr = this.root;
    let prev = curr;
    // let position = "";
    // let markedNode = null;
    // let findVal = val;

    while (curr !== null) {
      if (val <= curr.val) {
        prev = curr;
        curr = curr.left;
      } else if (val >= curr.val) {
        prev = curr;
        curr = curr.right;
      } else if (curr.val === val) {
        if (curr.right === null) {
          if (prev === null) {
            this.root = curr.left;
          } else {
            if (curr.val < prev.val) {
              prev.left = curr.left;
            } else if (curr.val > prev.val) {
              prev.right = curr.left;
            }
          }
        }

        if (curr.left === null) {
          if (prev === null) {
            this.root = curr.right;
          } else {
            if (curr.val < prev.val) {
              prev.left = curr.right;
            } else if (curr.val > prev.val) {
              prev.right = curr.right;
            }
          }
        }
      }
    }

    prev = null;
    return false;
  }
}

function traverse(node) {
  const tree = { val: node.val };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

let tree = new BinarySearchTree();
console.log(tree.lookup(200));

tree.insert(9);
tree.insert(7);
tree.insert(14);

console.log(JSON.stringify(traverse(tree.root), undefined, 2));

console.log(tree.lookup(7));
console.log(tree.lookup(200));

// console.log("REMOVING");
tree.insert(11);
tree.insert(16);
// console.log(tree.remove(14));
console.log(JSON.stringify(traverse(tree.root), undefined, 2));
