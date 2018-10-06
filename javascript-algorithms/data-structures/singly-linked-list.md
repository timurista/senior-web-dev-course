## Singly Linked List
a bunch of elements pointing at next item.

head, tail, and length property.

Linked list, only stair no elevator.

```
HEAD                      TAIL
[ ] -> [ 4 ] -> [ 5 ] -> [ 89 ] 
```
insert at beginning you just make element new head pointer to old head pointer.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

Node.prototype.toString = () => {
    return `NODE: val: ${this.val}, next: ${this.next} `
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else if (this.head) {
            this.tail.next = node;
            this.tail = node;            
        }
        this.length ++;
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(2)
list.push(3)
list.push('hi')
console.log(list)

// SinglyLinkedList {length: 3, head: Node, tail: Node} head: Node {val: 2, next: Node}next: Node next: Node next: null val: "hi"__proto__: Object val: 3 __proto__: Object val: 2 __proto__: Object length: 3 tail: Node {val: "hi", next: null}__proto__: Object
```
We define a Node which just has value and next pointer. Then we define a manager which just handles 2 edge cases.

## Pop
removes from end of linked list
but removing it, we have to go through whole list from beginning.

```js
pop() {
        if (!this.head) return undefined;
        
        var current = this.head;
        var prev = this.head;

        while (current.next) {
            prev = current; // prev always lags behind
            current = current.next;
        }
        // we update tail to be previous
        this.tail = prev;
        this.tail.next = null;
        this.length --;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
}

var list = new SinglyLinkedList();
list.push(2)
list.push(3)
list.push('hi')
console.log(list)

list.traverse()
console.log(list.pop(), list)
console.log(list.pop())
console.log(list.pop())
console.log(list)
```


