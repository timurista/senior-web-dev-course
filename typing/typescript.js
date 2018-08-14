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
