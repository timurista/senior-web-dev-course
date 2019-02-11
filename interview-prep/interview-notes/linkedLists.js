class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val = 0) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  append(item) {
    const node = new Node(item);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(item) {
    const node = new Node(item);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  size() {
    let s = 0;
    for (let n of this) {
      s++;
    }
    return s;
  }

  get(index) {
    return this.traverseToIndex(index);
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    if (leader) {
      let currentLeader = leader.next;

      if (leader.next.next) {
        leader.next = leader.next.next;
      } else {
        leader.next = null;
        this.tail = leader;
      }
      this.length--;
      return currentLeader;
    }
    return null;
  }

  traverseToIndex(index) {
    let idx = 0;
    for (let node of this) {
      if (idx === index) return node;
      idx++;
    }
    return null;
  }

  insert(index, val) {
    const node = new Node(val);

    if (index >= this.length) {
      return this.append(val);
    }

    if (index <= 0) {
      return this.prepend(val);
    }

    const leader = this.traverseToIndex(index - 1);
    if (leader) {
      let holdingPointer = leader.next;
      leader.next = node;
      node.next = holdingPointer;
      this.length++;
      return node;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  get list() {
    return {
      list: [...this].map(c => c.val),
      head: this.head.val,
      tail: this.tail.val,
      size: this.length
    };
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.list);
myLinkedList.insert(2, 99);
myLinkedList.insert(0, 44);
myLinkedList.insert(99, 44);
console.log(myLinkedList.list);
myLinkedList.remove(2);
myLinkedList.remove(5);
console.log(myLinkedList.list);
myLinkedList.remove(0);
console.log(myLinkedList.list);
