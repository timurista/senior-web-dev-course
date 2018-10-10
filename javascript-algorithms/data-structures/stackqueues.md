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
    if (!this.size) return null;
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

## Big O of stacks
Insertion O(1) and Removal O(1)
Searching is O n like linked lists and access is O n like linked lists. If searching or access is more of a priority then use something like an array.

LIFO data structure, used for call stack, routing, page history, and many more. Javascript pretty easy to implement.


# QUeues
FIFO
first in, first out. Queue think of line, first person in line is first thing out. Commonly used when waiting to join, keeps track. Background tasks on computer, print or task processing. Can only handling on thing at a time.

## Queue class
Writing own queue class is not rigid. First thing added in is first removed. Enqueue and dequeue.

```js
// but you unfortunately reindex everything
q = []; q.push('thing'); q.shift();
// but with array you still have to reindex things when you unshift
``` 

Queue List / Implementation
```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;        
    }
    enqueue(val) {
        var node = new Node(val);
        if (!this.length) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;            
        }
        this.size++;
        return this.size;
    }
    dequeue() {
      if (!this.first) return null;
      let first = this.first;
      if (this.lenght === 1) {
          this.last = null;
      }
      this.first = first.next;
      this.size--;
      return first.val;
    }
}
```
Big O notation is constant time insertion and removal.
array was not constant time, it was cascade of reindexing.
FIFO, first person in is first person out.



