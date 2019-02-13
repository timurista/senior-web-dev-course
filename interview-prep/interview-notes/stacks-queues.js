// Stacks

// google
//udemy
// youtube

// Arrays or linked lists to build
// Arrays
// cached locality faster when accessing in memory
// got to double memory

// linked lists dynamic memory
// doesnt need to change

// Queues
// LinkedLists not Arrays

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(val) {
    let node = new Node(val);
    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      this.top.next = node;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;

    if (!this.length) this.bottom = null;

    return temp;
  }
}

const myStack = new Stack();
myStack.push("discord");
myStack.push("udemy");
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
