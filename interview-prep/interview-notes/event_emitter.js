class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, handler) {
    if (this.events[eventName]) {
      this.events[eventName].push(handler);
    } else {
      this.events[eventName] = [handler];
    }
    return this;
  }
  remove(eventName, idx) {
    let eventsArr = this.events[eventName];
    if (eventsArr) {
      eventsArr.splice(idx, 1);
    }
  }
  once(eventName, handler) {
    let idx = 0;
    let eventsArr = this.events[eventName];
    if (eventsArr) {
      idx = eventsArr.length;
      let onceHandler = (args) => {
        handler(args);
        this.remove(eventName, idx);
      }
      eventsArr.push(onceHandler);
    } else {
      let onceHandler = (args) => {
        handler(args);
        this.remove(eventName, idx);
      }
      this.events[eventName] = [onceHandler];
    }
  }
  emit(eventName, val) {
    let eventsArr = this.events[eventName];
    if (eventsArr && val) {
      for (let handler of eventsArr) {
        handler(val);
      }
    }
  }
  off(eventName, handler) {
    let eventsArr = this.events[eventName];
    if (!handler) {
      eventsArr = [];
      return;
    }
    if (eventsArr && handler) {
      for (let i = 0; i < eventsArr.length;) {
        if (eventsArr[i] === handler) {
          eventsArr.splice(i, 1);
        } else {
          i++;
        }
      }
    }
  }
}




class EventEmitter2 {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }
  off(event, listener) {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
    }
  }
  emit(event, ...args) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => listener.apply(this, args));
    }
  }
  once(event, listener) {
    const remove = this.on(event, (...args) => {
      remove();
      listener.apply(this, args);
    });
  }
};

let eventEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}


eventEmitter.on('pramp', responseToEvent);
eventEmitter.once('pramp', function (msg) { console.log(msg + ' just once!'); });
eventEmitter.emit('pramp', '1st');
eventEmitter.emit('pramp', '2nd');
eventEmitter.off('pramp', responseToEvent);
eventEmitter.emit('pramp', '3rd');
eventEmitter.emit('pramp', '1st');
console.log(eventEmitter.events)


// second
let eventEmitter2 = new EventEmitter2();

function responseToEvent(msg) {
  console.log(msg);
}

console.log('SECOND TRY')

eventEmitter2.on('pramp', responseToEvent);
eventEmitter2.once('pramp', function (msg) { console.log(msg + ' just once!'); });
eventEmitter2.emit('pramp', '1st');
eventEmitter2.emit('pramp', '2nd');
eventEmitter2.off('pramp', responseToEvent);
eventEmitter2.emit('pramp', '3rd');
eventEmitter2.emit('pramp', '1st');
console.log(eventEmitter2.events)