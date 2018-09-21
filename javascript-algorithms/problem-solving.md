## Objectives

What is an algorithm

compare and contrast problem solving problems.

## What is algorithm?

process or set of steps to accomplish a task.

## How do you improve?

1. devise a plan for solving problems. 
2. Master common problem solving patterns

some recipes to solve challenge

## Problem solving things
steps to help
1. understand the problem
2. explore concrete examples
3. break it down
4. solve/simplify
5. look back and refactor

## Understand the Problem
explore concrete examples
break it down
solve/simplify
look back and refactor

thorough investigation of problem

## Questions to ask

1. can you restate the problem in your own words.
2. Restate problem in your own words
  - what are the inputs?
  - what are the outputs?
  - what should come back

4. can outputs be determined from inputs?
  - do I have enough information to solve the problem
  - worth considering it at an early stage

5. how should I label important pieces of data which are part of the problem?


Example
write a function which takes two numbers and returns their sum.
  1) restate problem: takes 2 numbers only (not strings) with range -infinity to infinity and add them together.
  2) inputs (2 number what's upper bound?)
  3) what are outputs? A float, a number what happens at edge cases?
  4) outputs from inputs?

  5) label important pieces of data
    add, num1, num2

## Explore Examples
Concrete Examples
generate examples for sanity checks

User Stories
  - what does user experience
Unit tests
  - layout how a thing should work

Start with simple examples
- write 2-3 simple examples with input and output
- progress to complex examples
- examples with empty inputs
- examples with invalid inputs

## Problem 1
write a function which takes a string and returns counts of each character in the string.

examples
assumption: character in string is anything alphanumeric or utf8 encoded. `/u8a` is 1 character like `a` and `+`

and -> returns a count of 3 (a, n, d)
ana -> returns a count of 3 (a, n, a)
b -> returns a count of 1 (b)

## Complex examples?
"my phone number is 122233"
"Hi, Hello"

## empty
"" -> returns a count of 
undefined or null evaluates to "" and return 0
" " -> spaces, or numbers? Uppercase and or lowercase?

## edge cases / invalid
what if string is too large?
  return 0?
what if not a string?
  convert to unicode representation and count

should every letter be there?
  maybe we set the object to a list of alphanumeric codes
  O(1)
  then do lookups and updates which are fast

## Break it Down
little comments as a guide for steps to take. Communicate what you are doing to interviewer.

Think about code BEFORE you write it.

given the problem above, you might break it down like this:

```js
function charCount(str) {
  // make object to return at end
  // loop over string
    // if char is a number/letter and key in object add 1 to count
    // if key is number/letter and not in object
      // add it and set to 1
  // return object
}
```

formulated an approach above

## Solve or Simplify
Might feel good about 80% maybe not 20%
solve a simpler problem. Ignore part giving you a hard time to focus on everything else.

Have something to show for it.
If you know A place to start, just go for it.

## Simplify
Find core difficulty in the thing you are trying to do.
ignore that difficulty, then incorporate it back in.
how to handle for 1 character. Find pattern, or start with loop and then at end go back. Lowercase everything to begin with.

```js
function charCount(s) {
    var counts = {}
    for (var i = 0; i<s.length; i++) {
        var char = s[i].toLowerCase()
        // filter only alphanumeric
        var isAlphaNumeric = /![a-z0-9]/g;
        // option 1 long array
        // option 2 regex
        // ascii codes
        

        if (counts[char]) {
            counts[char] ++
        } else {
            counts[char] = 1
        }
    }
    return counts;
}

console.log(charCount('Hi There'))
```
above we are 80% of the way there, but it helps to break down and solve easy cases and then leave the harder parts for later.

## Look Back and Refactor
You are not done. Look at individual components. Balance between efficiency and legibility.
Ask these questions out loud.

Is this ideal. I would google if there is a faster way. Check results, derive result differently?

Can you use this to solve another problem. Unlock solution to another problem on a different

Can you improve the performance of your solution?

can you think of other ways to refactor?

how have other people solved this problem?

Its worth analyzing your code and thinking about it

### Final Solution
```js
function charCount(s) {
    var counts = {}
    for (var char of s) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            if (counts[char]) {
                counts[char] ++
            } else {
                counts[char] = 1
            }
        }

    }
    return counts;
}

console.log(charCount('Hi There!'))
```

you can replace this
```js
if (/[a-z0-9]/.test(char)) {
    if (counts[char]) {
        counts[char] ++
    } else {
        counts[char] = 1
    }
}
```

with this
```js
if (/[a-z0-9]/.test(char)) {
    counts[char] = ++counts[char] || 1;
}
```
ask questions about how to improve.