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
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const last = new Node(data);
    if (!this.head) {
      this.head = last;
    }
    else {
      this.getLast().next = last;
    }
  }

  getAt(index = 0) {
    if (index < 0) return null;

    let idx = 0;
    let node = this.head;
    while (node) {
      if (idx === index) {
        return node
      }
      node = node.next;
      idx++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;
    let found = this.getAt(index);

    if (index === 0) {
      this.head = this.head.next;
    }
    let prev = this.getAt(index - 1);
    if (prev && prev.next) {
      prev.next = prev.next.next;
    }
    return found;

    // SOLUTION 2 below

    // let node = this.head;
    // let prev = null;
    // let idx = 0;


    // while (node) {
    //   if (index === idx) {
    //     if (index === 0) {
    //       this.head = node.next;
    //       return node;
    //     }
    //     if (prev) {
    //       prev.next = node.next;
    //     }
    //     return node;
    //   }
    //   prev = node;
    //   node = node.next;
    //   idx++;
    // }
    // return node;
  }

}

module.exports = { Node, LinkedList };
