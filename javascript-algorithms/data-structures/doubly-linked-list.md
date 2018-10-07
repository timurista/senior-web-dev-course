## Doubly Linked List

COmpare and contrast these linked lists.

Nodes, no indexing
No random accessing

head, tail
it points to next and prev node.

poping is easier

or reversing is easier. But code is a little more complicated

but it takes more memory

## Doubly Linked List Pop and Push methods
```js
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
            this.length = 1;
            return this;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return null;
        var prev = this.tail.prev;
        var popped = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
        }
        this.length --;
        popped.prev = null;
        return popped;

    }
}
```