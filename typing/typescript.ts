const mySum = (a: number, b: number) => {
  return a + b;
}

console.log(mySum(2,4));

let isCool: boolean = true;

let age: number = 56;

let favoriteQuote: string = `I'm not all ${age}`;

// arrays
let pets: string[] = [ 'cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

let wizard: object = {
    a: 'John'
};

console.log(wizard)

// Tuple
let basket: [string, number];

basket = ['basketball', 5];
// handy for certain things

// Enum
enum Size {
  small = 1,
  medium = 2,
  large = 3
};

let sizeName: string = Size[2];

// enums let us to define set of named constants
// directions, or value associated with it

// Any, be careful... use it right when using it
let whatever: any = 'agghhh no!!!';
whatever = 5;
whatever = true;
whatever = Size.small;

// useful for when converting js objects to typescript
// and this will take a long time

// never
let error = (): never => {
  throw Error('oops');
};

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string,
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('fight');
}

// interface vs type
// interface is a new name to be used anywhere
// interface is cleaner syntax



