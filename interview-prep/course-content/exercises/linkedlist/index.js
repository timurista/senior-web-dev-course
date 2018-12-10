// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (!this.head) return 0;
    let node = this.head;
    let size = 1;
    while (node.next) {
      size++;
      node = node.next;
    }
    return size;
  }


}

module.exports = { Node, LinkedList };
