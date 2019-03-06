// my solution
function all_perms(str) {
  let perms = new Set();

  function find_perm(str_arr, str_accum) {
    if (str_arr.length <= 1) {
      perms.add(str_accum + str_arr[0])
      return;
    }
    for (let i = 0; i < str_arr.length; i++) {
      let modified_arr = str_arr.slice();
      let new_acc = modified_arr.splice(i, 1);
      find_perm(modified_arr, str_accum + new_acc)
    }
  }

  find_perm(str.split(''), '')
  return perms;
}

console.time('mine')
all_perms('abc')
all_perms('jo')
all_perms('john s')
console.timeEnd('mine')


// possible solution 2
function getPermutations(string) {
  console.log(string)
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];
  // a b
  // c

  // a
  // b

  // set(a)

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  console.log('round', string, permutationsOfAllCharsExceptLast, allCharsExceptLast, lastChar)
  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();

  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      console.log(permutationOfAllCharsExceptLast, lastChar, permutation)
      permutations.add(permutation);
    }
  });

  return permutations;
}

console.time('other_guy')
getPermutations('abc')
console.timeEnd('other_guy')
