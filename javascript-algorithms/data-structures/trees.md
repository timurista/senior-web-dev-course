## Trees
Implementing operations on binary search tree
data structures that have parent / child node
which can connect to 1, 2 nodes.

a singly linked list is tree
2 -> 12 -> 11
not a tree is references things not below them.
Tree every node moves away from root node. Have to have 1 root or entry point.

root, parent, siblings, leaf is node with no children
connection is edge which connects two nodes, parent and child.

DOM tree structure on the browser. And routing using a tree structure for network routing for shortest path. AST, abstract syntax tree.


Trees are used in classification, for decisions of what move to do next. Folders, etc.

## Binary Trees
Trees with 2 children. Binary search trees excell at searching, makes it easier to retrieve. Each node has at most 2 children. Sorted in an order, BST stores data to be compared or sortable.

to left is <, to the right is > the parent.
easy to look things up, quick to search things.

```js
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

  insert(val) {
    var node = new Node(val);
    if (!this.root) {
        this.root = node;
        return this;
    }
    var current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left) {
            current = current.left;
        } else {
            current.left = node;
            return this;
        }
      } else {
        if (current.right) {
            current = current.right;
        } else {
            current.right = node;
            return this;
        }
      }          
    }        
  }
}
```

## Find

```js
find(val) {
  if (!this.root) return undefined;
  var current = this.root;
  var found = undefined; // keep a found variable
  while (current && !found) {
      if (val > current.val) {
          current = current.right;
      } else if (val < current.val) {
          current = current.left;
      } else {
          // this case means current.val === val
          // so then we set it to true
          // it will only reach here if there is a valid current above
          found = true;
      }
  }
  if (!found) return undefined;
  return current;
}
```

## Big O
insertion and searching of O (log n)
