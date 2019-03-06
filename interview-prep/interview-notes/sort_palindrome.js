function sort_palindromes(strings) {
  if (!strings.length) return;
  let arr = []
  merge_sort(strings, arr, 0, strings.length - 1)
  return strings;
}

function merge_sort(strings, arr, left, right) {
  console.log(left, right, strings)
  if (left < right) {
    let middle = Math.floor((left + right) / 2);
    merge_sort(strings, arr, left, middle);
    merge_sort(strings, arr, middle + 1, right);
    merge(strings, left, middle, right);
  }
}
function merge(strings, left, middle, right) {
  let helperLeft = left;
  let helperRight = middle;
  let current = left;
  while (helperLeft <= middle && helperRight <= right) {
    // comparator
    console.log('helpfter Left/right', helperLeft, helperRight)
    if (isPalindrome(strings[helperLeft]) && !isPalindrome(strings[helperRight])) {
      swap(strings, current, helperLeft)
      helperLeft++;
    } else {
      swap(strings, current, helperRight)
      helperRight++;
    }
    current++;
  }
  return strings;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function isPalindrome(s) {
  console.log(s)
  // TODO optimize
  return s === s.split('').reverse().join('');
}

// TODO make work
console.log(sort_palindromes(['def', 'aba', 'dgh', 'bab', 'cac'])) // aba, bab, dgh, def