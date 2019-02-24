// This problem was asked by Google.

// An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

// If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

// Upgrade to premium and get in-depth solutions to every problem. Since you were referred by one of our affiliates, you'll get a 10% discount on checkout!

// If you liked this problem, feel free to forward it along so they can subscribe here! As always, shoot us an email if there's anything we can help with!

function XOR_list() {
  return false;
}


class Node {
  constructor(val) {
    this.value = val;
    this.child = null;
  }
}

let root = new Node(5);
root.child = new Node(4);
root.child.child = new Node(3);
root.child.child.child = new Node(2);
root.child.child.child.child = new Node(1);

console.log(root)