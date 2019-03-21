
const STOP = '#'

class Trie {
  constructor() {
    this.trie = {}
  }

  insert(word) {
    let currentTrie = this.trie;
    for (let char of word) {
      if (!currentTrie[char]) {
        currentTrie[char] = {}
      }
      currentTrie = currentTrie[char]
    }
    currentTrie[STOP] = true
  }

  find(prefix) {
    let currentTrie = this.trie;
    for (let char of prefix) {
      if (currentTrie[char]) {
        currentTrie = currentTrie[char]
      } else {
        return []
      }
    }
    return this._elements(currentTrie)
  }
  _elements(d) {
    let result = []
    let subresult = []
    for (let [c, v] of Object.entries(d)) {
      if (c === STOP)
        subresult = ['']
      else {
        subresult = [];
        console.log(c)
        for (let s of this._elements(v)) {
          let restword = c + s
          subresult.push(restword)
        }
      }
      result = result.concat(subresult)
    }
    return result;
  }
}

let tr = new Trie()
words = ['dog', 'deer', 'deal']
for (let word of words) {
  tr.insert(word)
}

console.log(tr)

function autocomplete(s) {
  suffixes = tr.find(s);
  let newwords = []
  for (let word of suffixes) {
    newwords.push(s + word)
  }
  return newwords
}

console.log(autocomplete('de'))