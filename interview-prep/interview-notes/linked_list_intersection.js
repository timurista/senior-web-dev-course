class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    this.prev = null;
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
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(item) {
    const node = new Node(item);
    node.next = this.head;
    this.head.prev = node;
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
      let follower = leader.next;
      leader.next = node;
      node.prev = leader;
      node.next = follower;
      follower.prev = node;
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

function intersect(list1, list2) {
  let diff = list1.size() - list2.size();
  let curr1 = list1.head;
  let curr2 = list2.head;

  if (diff > 0) {
    for (let _ = 0; _ < diff; _++) {
      curr1 = curr1.next;
    }
  } else if (diff < 0) {
    for (let _ = 0; _ < Math.abs(diff); _++) {
      curr2 = curr2.next;
    }
  }

  while (curr1.val !== curr2.val) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return curr1
}

let ll1 = new LinkedList();
ll1.append(1)
ll1.append(2)
ll1.append(8)
ll1.append(10)

let ll2 = new LinkedList();
ll2.append(3)
ll2.append(4)
ll2.append(5)
ll2.append(8)
ll2.append(10)

console.log(intersect(ll1, ll2));

