## Open Closed Principle

We assume existing function is already unit tested. Design and writing of code should be written in a way so we modify existing code as rarely as possible.

OC Principle
Open for extension, closed for extension. Most painful part of software engineering is 

## Common Interface
Implement a thing once then we can reuse it.

1. strategy pattern
2. template pattern also

## Design patterns
with those 2 patterns we keep as much code unchanged as possible.

## Why use it?

We want to use merge sort. We create an abstract class Sorter. Protected SortType type. We want to make sure different insertion sorts are sorter. 

Imagine we have multiple classes using sorter and a manager that implements the sorter. We use enums everywhere, but then we need to add another sorter.
Now you have to modify the manager, the enum which lists the sorter, and create a new sorter object.

So in the example above, it is working fine but it is not closed for modification.

## How to implement this a better way?

SortType, we remove it because we don't want any enum classes.

Sorter can sort, only feautre it has. So we refactor our SoterMananger so it doesn't have to keep track of the type of sorter that is being used. Instead that logic is abstracted out into the interface.

```js

interface Sorter {
  sort: () => any[]
}

class Quicksort implements Sorter {
  constructor() {}

  sort() {
    // this is quicksort
    // using interface Sorter
    console.log('sorting with quicksort...');
  }
} 
```

now the manager just has to call sort method from the sorter and the interface will take care of making sure the thing conforms to expected output.


