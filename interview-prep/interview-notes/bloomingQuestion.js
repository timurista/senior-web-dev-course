/** 
10                   x  x  x  x
 9          x  x  x  x  x  x  x
 8       x  x  x  x  x  x  x  x
 7             x  x  x  x  x  x
 6 x  x  x  x  x  x  x  x  x  x
 5    x  x  x  x  x  x  x  x  x
 4                            x
 3                         x  x
 2                      x  x  x
 1                x  x  x  x  x
   1  2  3  4  5  6  7  8  9 10
*/

// [1,3,2]
// 3    x  x
// 2       x
// 1 x  x  x
//   1  2  3

// [1,2,3]
// 3       x
// 2    x  x
// 1 x  x  x
//   1  2  3

var kEmptySlots = function(flowers, k) {
  // let days = new Array(flowers.length).fill(-1);

  const actualPositions = new Array(flowers.length);
  flowers.forEach((flower, index) => (actualPositions[flower - 1] = index + 1));
  const valid = [];

  // iterate by creating a window with a left flower, and a right flower
  // we need to check that everything in between is less than those two numbers
  // which means we only need to check that everything is less than the max of the two
  for (
    let left = 0, right = k + 1;
    left < actualPositions.length - k - 1;
    left++, right++
  ) {
    let leftFlower = actualPositions[left];
    let rightFlower = actualPositions[right];
    let between = actualPositions.slice(left + 1, right);
    console.log(between, leftFlower, rightFlower);
    let max = Math.max(leftFlower, rightFlower);

    if (between.length) {
      if (between.every(el => el > max)) valid.push(max);
    } else {
      // finally we need to cover the case where k is 0, in which case we only push to our valid array if the
      // numbers are one apart, because that means we have two bloomed flowers with 0 in between them
      if (Math.abs(left - right) === 1) valid.push(max);
    }
  }

  return valid.length ? Math.min(...valid) : -1;
};

console.log(kEmptySlots([1, 3, 2], 1));
console.log(kEmptySlots([1, 2, 3], 1));
console.log(kEmptySlots([6, 5, 8, 9, 7, 1, 10, 2, 3, 4], 2));
