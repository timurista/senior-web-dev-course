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

## Shift

Important thing to note about shift is that we move the old head up and sever the length with the previous node.
```js
shift() {
    if (!this.length) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;            
    } else {
        this.head = oldHead.next;
        // severing references between 2 nodes
        this.head.prev = null;
        oldHead.next = null;            
    }
    this.length--;
    return oldHead;

}
```

## Unshift
A little more straightforward than shift, here we just have to update the head prev and the head to be the node. Basically establish the connection both ways between these two items.

```js
unshift(val) {
    var node = new Node(val);
    if (!this.length) {
        this.head = node;
        this.tail = node;
    } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    this.length ++;
    return node;
}
```

## Get
first we deal with edge case
then we deal with whether it is less than middle we use the head or if it is greater than the middle we use the tail to minimize the number of steps.
So this is really always o n/2. still o n in big scheme though but capped.

```js
get(index) {
    if (index < 0 || index >= this.length) return null;
    var current = this.head
    var counter = 0;
    
    if (index <= Math.floor(this.length / 2)) {
        while (counter !== index) {
            counter ++;
            current = current.next;               
        }
    } else {
        current = this.tail
        counter = this.length-1;
        while (counter !== index) {
            counter --;
            current = current.prev;               
        }
    }
    return current;
}
```

## SET
again similar to singly linked list, we just utilize the get method to give us a valid node or null.

```js
set(index, val) {
    var node = this.get(index);
    if (node) {
        node.val = val;
        return true;
    }
    return false;
}
```