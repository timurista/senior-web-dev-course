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

function nth_from_end(head, n) {
  if (!head) return null;

  let first = head;
  let second = head;

  while (n > 0) {
    if (second === null) return null;
    second = second.child;
    n--;
  }

  // now continue iterating to the end
  while (second !== null) {
    first = first.child;
    second = second.child;
  }
  return first;

  // let current = head;
  // let first = head;
  // // let lastIdx = 0;
  // let count = 0;
  // // let found = null;
  // while (current) {
  //   current = current.child;
  //   count++;
  // }
  // if (n > count) return null;
  // let found = head;
  // let lastIdx = count - n;

  // while (lastIdx > 0) {
  //   found = found.child;
  //   lastIdx--;
  // }
  // return found;
}

// console.log(root)
console.log(nth_from_end(root, 3))
console.log(nth_from_end(root, 6))

// console.log(root)
let head2 = new Node(1);
head2.child = new Node(2);
head2.child.child = new Node(3);

console.log(nth_from_end(head2, 3))
console.log(nth_from_end(head2, 1))
console.log(nth_from_end(null, 1))
