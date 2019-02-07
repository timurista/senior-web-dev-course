function mergeSorted(arr1, arr2) {
  if (!arr1 && !arr2) return [];
  if (!arr2.length) return arr1;
  if (!arr1.length) return arr2;

  const merged = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      merged.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      merged.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return merged;
}

function mergeSortedArrays(arr1, arr2) {
  var newArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return [...newArr, ...arr1, ...arr2];
}

console.log("MERGE SORTED", mergeSortedArrays([0, 2, 3], [1, 2, 4]));
