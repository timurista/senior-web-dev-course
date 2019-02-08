## Importance

useful in javascript
md5 hash is one way, 128-bit fingerprint.

Indempodent - function always sends out same output when given output. Key knows where value is in memory.

## Speed of hash function

needs to be really fast
optimum hashing function that is fast.
md5 hash (o1) complexity
delete, lookup, search, insert is (o1)

## Pros and Cons

1. main problems
   **Collision**
   name + phone number it stores jon smith in same bucket. Same address space.
   Both users in the space

Hash tables cant avoid this collision. Is possibility you add things to same space. Slows down ability to access. You have to walk the tree.

O(n/k) where k is size of hash table.

Dealing with Hashed Collisions

## Collision Resolution

1. separate chaining, robin hood hashing, bit of a downside.

Map maintains insertion order.
const b = new Sets() // stores keys only

## Great things about hash tables

Very fast for searching for things
But inserting is typically O(1)
some cases on collision, but most of time you can assert O(1)
no concept of order in hashtables
