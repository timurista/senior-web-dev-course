var mySum = function (a, b) {
    return a + b;
};
console.log(mySum(2, 4));
var isCool = true;
var age = 56;
var favoriteQuote = "I'm not all " + age;
// arrays
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var wizard = {
    a: 'John'
};
console.log(wizard);
// Tuple
var basket;
basket = ['basketball', 5];
// handy for certain things
// Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var sizeName = Size[2];
// enums let us to define set of named constants
// directions, or value associated with it
// Any, be careful... use it right when using it
var whatever = 'agghhh no!!!';
whatever = 5;
whatever = true;
whatever = Size.small;
// useful for when converting js objects to typescript
// and this will take a long time
// never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('fight');
};
// interface vs type
// interface is a new name to be used anywhere
// interface is cleaner syntax
// type assertion
var army = {};
army.magic = 'fireball';
// Function
var myFn = function (robots) {
    console.log('fight on again');
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalal';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAWR');
console.log(lion.greet());
// union type |
var confused = 'abc123';
