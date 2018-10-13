## Hash Table
Cool stuff to talk about what hashing is, how it works.
Hashing algorithm is, what makes a good one.

used to store key-value pairs.
not ordered keys.

unlike arrays they are FAST, for adding and removing values
Python has Dictionaries
JS as Objects and Maps* (only strings as keys)
Java,Go Scala has Maps
Ruby Hashes

## Implement your own?
We want human readability, and work. But they don't know how to find something.
We are reinventing wheel, but important to understand how it works.
We take an input an turn into number to store in array.
hashing functions, existing famous hash functions.

[0,1,2,3,4,5,6,7,8]
pink -> hashfunction gives me number 0 - 9. Gives me 0
orangered -> 7 so we store at 7
cyan -> 3. Always same number back

## Hash function part

hash function is a 1 way function. Exposed hash function in python.
What makes a good hash function? Fast, constant time.
No clustering, outputs to specific indices, but uniform shape.
Deterministic, same input -> same output


Basic hash function
```js
function hash(string, length) {

    let total = 0;
    // primes help reduce collisions
    let WEIRD_PRIME = 31;
    
    // sort of constant time up to 100 because we grab min of length or 100
    for (let i = 0; i < Math.min(string.length, 100); i++) {
        let val = string.charCodeAt(i) - 96;
        // salting it? with prime number to reduce collisions
        // trying to make this number prime before modulus
        total = (total * WEIRD_PRIME + val) % length;
    }
    return total;
}

// clustering happens below
// not perfect... we can make it more scattered
console.log(hash("hi", 11))
console.log(hash("pink", 10))
console.log(hash("goodbye", 10))
console.log(hash("cyan", 10))
```



## Collisions
Separate chaining and linear probing

### Separate Chaining
We store values together
store things at same position. Using a nested array to do it.

HashTable with separate chaining
```js
class HashTable {
constructor(size=53) {
    this.keyMap = new Array(size);
}

// black box, not most efficient for sure
_hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let val = key.charCodeAt(i) - 96;
        total = (total * WEIRD_PRIME) - val;
    }
    return Math.abs(total) % this.keyMap.length;
}

set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
    return index;
}

get(key) {
    let index = this._hash(key);
    let values = this.keyMap[index];
    if (!values) return undefined;

    for (let item of values) {
        // we know structure is [key, value]
        if (item[0] === key) return item[1];
    }
    return undefined;
}
}
```

Returning values and keys
```js
keys() {
  let keys = []
  for (let item of this.keyMap) {
      if (item) {
          for (let subItems of item) {
              let key = subItems[0];
              if (!keys.includes(key)) keys.push(key)
          }                    
      }
  }
  return keys;
}

values() {
  let values = []
  for (let item of this.keyMap) {
      if (item) {
          for (let subItems of item) {
              let val = subItems[1];
              if (!values.includes(val)) values.push(val)
          }                    
      }
  }
  return values;
}
```

### Linear Probing
Only 1 piece of data at each position
when there is collision we look ahead for next empty slot and store it there.

## Hash Table Big O
Insert O(1)*
Deletion O(1)
constant time, which comes down to how fast hash function is, and evenly it flattens things

very fast, it is o(1)

but searching for key can be close to constant time, worst case with bad hasihng function makes it o(n)
usually nlogn or constant

it is possible to write a constant time hash function.
how evenly it is distributed, etc.



