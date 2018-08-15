## Typescript

```ts
function sum(a: number, b: number) {
  return a + b;
}
```
statically typed languages are self-documetning. You can see what kind of params a function expects. 
Less bugs in prod. 

CONS
- a little harder to learn, and a little more to write
- an extra layer of complexity
- slightly slower dev experience

typescript makes js extra safe.

## Weak vs Strongly typed
JS is dynamic language that is weakly typed.
```js
var a = 'booya'
a + 17 = 'booya17'
```

tools: flow, elm, reasonml.
typescript at microsoft. Try to kind of make

ReasonML, like Ocamal. Similar to js easy to pickup.
50% is written in reason ml.

## Flow
USe `// @flow` which takes types. Flow is prebuilt into create-react app.
`yarn add -D flow-bin`
`yarn run flow`

## Typescript?
superset of js. Adds it ontop of javascript.
Reason ML doesn't depend on any changes javascript goes through. 

Elm / ReasonML, not many jobs that request it.
Flow or typescript.
Typescript growth outweighs the others. Angular is built with typescript, so you use it by default.

extra layer of type safety in the code. Make sure devs play with rules in code.

## Why use typescript?
when to use static typing
- already have tests written
- code to be self-documenting
- budget for new people to learn things

## Declaration type -- DefinietlyTyped.org
type search like react
@types/react gives us declaration so typescript compiler understands react.

You have mouse event, keyboard event, etc.

This file was downloaded through definitely-typed. Community created declaration files. Can use react as if they were written in typescript.

A lot of complexity here.
And hoping things are kept up to date.



