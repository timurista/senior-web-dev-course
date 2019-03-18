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
    this.promises = [];
    this.comparator = comparator;
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }

  addPromise(promise, timestamp) {
    this.promises.push(promise);
    let index = this.promises.length - 1;

    promise.then(value => {
      // console.log('before', this.promises)

      this.promises.splice(index, 1);
      this.enqueue({ value, timestamp });
      // console.log('removed', this.promises)
    })
  }

  enqueue(value) {
    this.heap.unshift(value)
    this.shiftValues();
  }

  shiftValues() {
    let start = 0;
    let next = 1;
    let current = this.heap[start]
    let nextVal = this.heap[next];
    if (!nextVal) return;

    // console.log(current)
    while (current && nextVal) {
      if (current.timestamp < nextVal.timestamp) {
        // console.log('swap', start, next)
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

  last() {
    return this.heap[this.heap.length - 1]
  }
}


let timePriority = new TimePriority();
let now = new Date();

setInterval(() => {
  let rand = () => Math.floor(Math.random() * 50 + 1);
  // console.log('rand', rand)
  timePriority.addPromise(new Promise(resolve => setTimeout(() => resolve(1), rand)), now.getTime() + rand());

  // timePriority.addPromise(promise1, now.getTime() + 2000);
  // timePriority.addPromise(promise3, now.getTime() + 3000);
  // console.log('HEAP', timePriority.heap)
  timePriority.dequeue()
}, 20)

setInterval(() => {

  console.log('HEAP', timePriority.last());
}, 500)


// console.log(timePriority)
// console.log('HEAP', timePriority.heap)
// console.log(timePriority.dequeue());
// console.log(timePriority.dequeue());
// console.log(timePriority.dequeue());
// console.log('HEAP', timePriority.heap)


// timePriority.dequeue().promise.then(console.log);
// timePriority.dequeue().promise.then(console.log);


// Approach 3
// Priority Queue with heap

// APPROACH 3
/**
 * TRANSCATION TABLE
 * request | time
 * resolver => request, time => finds write request at closest time, sends back
 */


// Approach 4
// Locking mechanism --> mutex / method
  // mutex is locking mechanism 
  // it can proceed doing work, wake up worker nodes
// semaphore is a generalized mutex



 // TODO Approach 5
 // Reactive Async
 // http://www.csc.kth.se/~phaller/doc/haller16-scala.pdf
    // Futures / Promises in Scala
