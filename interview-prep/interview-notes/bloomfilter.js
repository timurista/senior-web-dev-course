class BloomFilter {
  constructor(size = 100) {
    this.hashingVector = new Array(size);
    this.found = {};
  }
  _hash(str, i) {
    // console.log(str[0])

    let char = str[0].charCodeAt();
    this.found[char] = ++this.found[char] || 1;
    let multiplier = this.found[char];
    let hash = char + multiplier;
    console.log(char, multiplier, hash, hash % this.hashingVector.length)
    return hash % this.hashingVector.length;
  }

  _hashString(str) {
    let hashes = [];
    for (let i = 0; i < str.length; i++) {
      let hashIndex = this._hash(str[i], i);
      hashes.push(hashIndex)
    }
    this.found = {};
    return hashes;
  }

  test(str) {
    // console.log('test')
    let hashes = this._hashString(str);
    for (let hasIndex of hashes) {
      console.log('testing', this.hashingVector[hasIndex])
      if (!this.hashingVector[hasIndex]) return false;
    }
    return true;
  }
  add(str) {
    let hashes = this._hashString(str);
    console.log('hash', hashes)
    for (let hashIndex of hashes) {
      this.hashingVector[hashIndex] = 1;
    }
  }
}


let key = 'abcde'
let key2 = 'abc'
let key3 = 'aaa'

let bf = new BloomFilter()
console.time('filter')
bf.add(key)
bf.add(key2)
bf.add(key3)
console.log(bf.test('adde'), bf)
console.timeEnd('filter')