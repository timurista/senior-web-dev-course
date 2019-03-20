class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      temp.prev = node;
      this.head.next = temp;
    }
  }
  remove(node) {
    let prev = node.prev;
    if (prev) {
      prev.next = node.next;
    }
    node.next = null;
    node.prev = null;
    return node;
  }
  removeTail() {
    this.remove(this.tail);
  }
}

class LRU {
  constructor(n = 100) {
    this.n = n;
    this.cache = []
    this.cacheNodes = new LinkedList();
  }

  set(key, val) {
    let node = new Node(key, val);
    this.cacheNodes.add(node)
    this.cache[key] = node;

    while (this.cacheNodes.size > this.n) {
      this.cacheNodes.removeTail()
      delete this.cache[key]
    }
    return node;
  }
  get(key) {
    let node = this.cache[key];
    console.log(node)
    this.cacheNodes.remove(node)
    this.cacheNodes.add(node)
    return node.val
  }
}

let lru = new LRU();
lru.set('john', 1)
lru.set('tim', 2)
lru.get('tim')

console.log('cache', lru)