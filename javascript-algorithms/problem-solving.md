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




