class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  constructor(limit = 100) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {}
  }

  // on every read detatch and attach to head
  read(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;
      this.remove(key);
      this.write(key, value);
      return value;
    }
  }

  write(key, value) {
    this.ensureLimit();
    let node = new Node(key, value);


    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }
    this.cache[key] = node;
    this.size++;
  }

  remove(key) {
    const node = this.cache[key];
    if (!node) return;

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    delete this.cache[key];
    this.size--;
  }

  ensureLimit() {
    if (this.size === this.limit) {
      this.remove(this.tail.key)
    }
  }
}

let lru = new LRU(3);
lru.write('a', 1)
lru.write('b', 2)
lru.write('c', 3)

console.log(lru)
lru.read('a')
console.log('NEXT NODE', lru.head)
lru.remove('c', 3)
console.log('NEXT NODE', lru.head)


