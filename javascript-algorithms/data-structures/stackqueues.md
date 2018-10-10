## Stacks
3 things in them
and remove where most recently added thing

push / pop on array is stack.

also shift/unshift satisfies FILO.

Which one is more efficient? Big O notation complexity adding it to beginning is not as efficient.

What is better is to probably pop or push in stacks. That is true when using arrays.

LinkedList is probably better.

## Stack Implementation
```js
class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}
class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val) {
      var node = new Node(val);

      if (!this.size) {
        this.first = node;
        this.last = node;
      } else {
        let first = this.first;
        this.first = node;
        this.first.next = first; 
      }
      return ++this.size;
  }
  pop() {
    if (!this.size) return undefined;
    let first = this.first;
    if (this.size <= 1) {
        this.last = null;
    }
    this.first = first.next;
    this.size --;
    return first;
  }
}
```