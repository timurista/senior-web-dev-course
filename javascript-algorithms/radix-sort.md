
## Comparison sort
  less than vs greater than
  avg time complexity
  merge and quick sort avg is o n log n

## Can we do better?
  yes but not by making comparisons
  best avg case in any comparison is n log n
    mathematical bound to comparison

## Algorithms take advantage of sorting data
Radix Sort, never comparing two things
works on numbers, binary or strings / images in binary
size of number is encoded in size of digit
we take the size of digits in the integer and place them in buckets.
all numbers ending in 0 go in 0 bucket, all numbers ending in 1 go in 1 bucket. Then we return elements in those buckets as a list. That list is then placed back into buckets and resorted.
