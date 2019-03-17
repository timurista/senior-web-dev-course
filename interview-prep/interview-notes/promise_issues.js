// Consistent Resolve

// Approach 1 Promise extend

// flawed because even if we know when do end it,
// still have race condition

class PromiseTimer extends Promise {
  resolveAt(timestamp) {
    //
    let delta = 500;
    if (Math.abs(delta - timestamp) >= timestamp) {

    }
  }
}

// Approach 2
// Priority Queue

console.log('BEFORE')
let promise1 = new Promise(resolve => setTimeout(() => resolve(1), 200));
let promise2 = new Promise(resolve => setTimeout(() => resolve(2), 50));
let promise3 = new Promise(resolve => setTimeout(() => resolve(3)), 100);



console.log('AFTER')
class TimePriority {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.comparator = comparator;

  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }

  enqueue(promise, timestamp) {
    this.heap.unshift({ promise, timestamp })
    this.shiftValues();
  }

  shiftValues() {
    let start = 0;
    let next = 1;
    let current = this.heap[start]
    let nextVal = this.heap[next];
    if (!nextVal) return;

    console.log(current)
    while (current && nextVal) {
      if (current.timestamp > nextVal.timestamp) {
        console.log('swap', start, next)
        let temp = this.heap[start];
        this.heap[start] = this.heap[next];
        this.heap[next] = temp;
      }
      start++;
      next++;
      current = this.heap[start]
      nextVal = this.heap[next];
    }

  }


  dequeue() {
    return this.heap.pop()
  }
}


let timePriority = new TimePriority();
let now = new Date();
timePriority.enqueue(promise2, now.getTime() + 1000);
timePriority.enqueue(promise1, now.getTime() + 2000);
timePriority.enqueue(promise3, now.getTime() + 3000);


console.log(timePriority)
console.log(timePriority.dequeue().promise.then(e => console.log(e)));
console.log(timePriority.dequeue().promise.then(e => console.log(e)));
console.log(timePriority.dequeue().promise.then(e => console.log(e)));

// timePriority.dequeue().promise.then(console.log);
// timePriority.dequeue().promise.then(console.log);


// Approach 3
// Priority Queue with heap