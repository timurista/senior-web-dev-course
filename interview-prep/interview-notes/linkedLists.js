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
      tail: this.tail.val
    };
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.list);
