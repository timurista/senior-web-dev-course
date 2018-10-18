Singly Linked List
Push
```js
    push(val){
        var node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            var temp = this.tail;
            this.tail = node;
            temp.next = node;
        }
        
        this.length++;
        return this;
    }
```

```js
pop() {
        if (!this.head) return undefined;
        
        var current = this.head;
        var prev = this.head;

        while (current.next) {
            prev = current;
            current = current.next;
        }
        // found second to last item
        this.tail = prev;
        this.tail.next = null;
        this.length --;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
}        
```