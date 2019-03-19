

// TODO Approach 5
// Reactive Observer/Subscriber pattern, Async
// http://www.csc.kth.se/~phaller/doc/haller16-scala.pdf
// Futures / Promises in Scala
class Observer {
  constructor() {
    this.timeout = 10;
    this.events = [];
    this.currentValue = 0;

    this.subscribers = new Set();
    this.updateInterval = setInterval(() => {
      new Promise(resolve => {
        this.currentValue = Math.floor(Math.random() * 100)
        this.events.push(this.currentValue);
        resolve()
      });
    }, 150)

    this.broadcastInterval = setInterval(() => {
      this.broadcast();
    }, 1000)
  }

  broadcast() {
    // console.log('events that seeded the db', this.events)
    for (let subscriber of this.subscribers) {
      subscriber.call(null, median(this.events));
    }

    this.events = [];
  }

  subscribe(fn) {
    this.subscribers.add(fn)
  }

  reset() {
    clearInterval(this.broadcastInterval);
    clearInterval(this.updateInterval)
  }
}

const median = vals => vals.sort((a, b) => a - b)[Math.floor(vals.length / 2)]

let myObserver = new Observer();
const fn1 = val => {
  console.log(val, 'seconds:', new Date().getSeconds())
};
myObserver.subscribe(fn1)
myObserver.subscribe(fn1)
