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