## What is a program

allocate memory
parse and execute (read / run)

- memory heap (memory allocation)
- call stack (read and edited)

Memory leaks === unused memory fills it up

- global vars bad because they fill up memory heap

Call Stack

- reads and executes script
- synchronous === line one gets run, then line 2
- all lines must run

```js
const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};
one();
```

## Javascript Runtime environment

evnet loop
callback queue
web api

- set timeout
- async programming

```js
// callstack []

// WEB API
setTimeout(); // runs in 2 seconds

// after 2 seconds
//CALLBACK QUEUE
callback(); // from timeout
console.log(2); // added back to callstack

// EVENT LOOP
```
