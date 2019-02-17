function findMedianSOrted(nums1, nums2) {
  let j = 0;
  let index = 0;
  let totalSize = nums1.length + nums2.length;
  let sorted = new Array(totalSize + 1);

  for (let i of nums1) {
    // sort the ind
    while (j < nums2.length && nums2[j] < i) {
      sorted[index] = nums2[j];
      j++;
      index++;
    }
    sorted[index] = i;
    index++;
  }

  while (j < nums2.length) {
    sorted[index] = nums2[j];
    index++;
    j++;
  }

  let mid = Math.floor(totalSize / 2);
  if (totalSize % 2 === 1) return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

function findMedianSortedArrays(nums1, nums2) {
  let j = 0;
  let ind = 0;
  let totalSize = nums1.length + nums2.length;
  let sorted = new Array(totalSize + 1); // create new array to sort into
  for (let i of nums1) {
    // sorts nums1 and nums2 into sorted[] array
    while (j < nums2.length && nums2[j] < i) {
      // j less than length of second arr
      // [1,2] and [3]
      sorted[ind] = nums2[j];
      j++;
      ind++;
    }
    sorted[ind] = i;
    ind++;
  }
  while (j < nums2.length) {
    sorted[ind] = nums2[j];
    ind++;
    j++;
  }
  let mid = Math.floor(totalSize / 2);
  if (totalSize % 2 == 1) return sorted[mid];
  else return (sorted[mid - 1] + sorted[mid]) / 2.0;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [2]));
console.log(findMedianSortedArrays([4], []));
console.log(findMedianSortedArrays([1, 2, 3, 4], []));
