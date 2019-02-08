class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.lenth; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return address;
  }

  get(key) {
    console.log(this.data);
    const address = this._hash(key);
    for (let bucket of this.data[address]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
  }
}

const myHashTable = new HashTable(2);
console.log(
  myHashTable.set("grapes", 10000),
  myHashTable.set("apples", 200),
  myHashTable.get("grapes")
);
