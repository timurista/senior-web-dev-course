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




