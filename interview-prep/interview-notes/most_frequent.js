function most_frequent(list) {
  if (!list.length) return null;
  let map = {};
  let mostFrequent = list[0];
  let mostFrequentCount = 1;
  for (let item of list) {
    if (map[item]) {
      map[item]++;
      if (map[item] > mostFrequentCount) {
        mostFrequent = item;
        mostFrequentCount = map[item];
      }
    } else {
      map[item] = 1;
    }
  }
  return mostFrequent;
}

console.log(most_frequent([1, 3, 1, 3, 2, 1]));
console.log(most_frequent([3, 3, 1, 3, 2, 1]));
console.log(most_frequent([]));
console.log(most_frequent([0]));
console.log(most_frequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1]));
