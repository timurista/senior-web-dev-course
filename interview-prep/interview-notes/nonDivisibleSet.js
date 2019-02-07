function perms(arr, k) {
  if (arr.length < 1) return 0;

  // check perms

  // 7 % 5 = 2
  // 1 % 5 = 1
  // 4 % 5 = 4

  // so we just make the mods

  const sets = [];
  let largestSubset = 1;
  let largest = null;

  // so we will start
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) break;
      const firstItem = arr[i];
      const secondItem = arr[j];
      const sum = firstItem + secondItem;
      if (sum % k !== 0) {
        // console.log([firstItem, secondItem], sum);
        // check if a set exists

        if (!sets.length) {
          sets.push(new Set([firstItem, secondItem]));
          if (largestSubset < 2) {
            largestSubset = 2;
          }
        } else {
          let setIndex = 0;
          while (setIndex < sets.length) {
            let newSet = null;
            const set = sets[setIndex];

            if (!set.has(firstItem) && !set.has(secondItem)) {
              newSet = new Set([firstItem, secondItem]);
            } else {
              // add an item
              let itemToAdd = set.has(firstItem) ? secondItem : firstItem;
              let canAdd = true;
              // check if set values add
              for (let val of set) {
                // console.log("set has val", val);
                if ((val + itemToAdd) % k === 0) canAdd = false;
              }

              if (canAdd) {
                set.add(itemToAdd);

                if (set.size > largestSubset) {
                  largestSubset = set.size;
                  largest = set;
                }
              }
            }
            if (newSet) sets.push(newSet);
            setIndex++;
          }
        }
      }
    }
  }
  console.log(largest);

  return largestSubset;
}

// console.log(perms([19, 10, 12, 10, 24, 25, 22], 4));
// console.log(perms([1, 7, 2, 4], 3));
// console.log(
//   perms(
//     [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436],
//     7
//   )
// );

console.log(
  perms(
    [
      770528134,
      663501748,
      384261537,
      800309024,
      103668401,
      538539662,
      385488901,
      101262949,
      557792122,
      46058493
    ],
    5
  )
); // 6

// 5 1
// 1 2 3 4 5
console.log(perms([1, 2, 3, 4, 5], 1));
