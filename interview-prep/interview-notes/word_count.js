function wordCountEngine(document) {
  // your code goes here
  // console.time('time')
  let words = document.match(/[a-zA-Z']+/g);
  let map = {};
  console.log(words)

  // bucket sort impl
  // [undefined, undefined, undefined]
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let w = word.toLowerCase().replace(/['-]/g, "");
    if (map[w]) {
      map[w].val++;
    } else {
      map[w] = {
        val: 1,
        loc: i,
      }
    }
  }

  // todo refactor with bucket here

  let entries = []
  for (let key in map) {
    entries.push([key, map[key]])
  }
  let sorted = entries.sort((a, b) => {
    if (b[1].val > a[1].val) {
      return 1;
    }
    if (b[1].val < a[1].val) {
      return -1;
    }
    if (b[1].loc < a[1].loc) {
      return 1;
    }
    if (b[1].loc > a[1].loc) {
      return -1;
    }
    return 0;
  })
  // console.timeEnd('time')
  return sorted.map(c => [c[0], c[1].val.toString()])
}


let s = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
let s2 = `Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors.`

// console.log(wordCountEngine(s));
console.log(wordCountEngine(s2));

console.log('SECOND')

function wordCountEngine2(document) {
  // your code goes here
  // console.time('time')
  let words = document.match(/[a-zA-Z']+/g);
  let map = {};
  let largestCount = 0;
  // console.log(words)
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let w = word.toLowerCase().replace(/['-]/g, "");
    if (map[w]) {
      map[w].val++;
      largestCount = Math.max(largestCount, map[w].val)
      // map[w].loc = Math.min(map[w].loc, i);
    } else {
      map[w] = {
        val: 1,
        loc: i,
      }
    }
  }
  let entries = new Array(largestCount + 1).fill(null)
  for (let word in map) {
    let counter = map[word].val
    let wordList = entries[counter];
    if (entries[counter] === null) {
      wordList = []
    }
    wordList.push([word, map[word].val])
    entries[counter] = wordList;
  }
  return entries.reverse().filter(c => c !== null).reduce((a, b) => {
    return a.concat(b)
  });
  // let sorted = entries.sort((a, b) => {
  //   if (b[1].val > a[1].val) {
  //     return 1;
  //   }
  //   if (b[1].val < a[1].val) {
  //     return -1;
  //   }
  //   if (b[1].loc < a[1].loc) {
  //     return 1;
  //   }
  //   if (b[1].loc > a[1].loc) {
  //     return -1;
  //   }
  //   return 0;
  // })
  // console.timeEnd('time')
  // return sorted.map(c => [c[0], c[1].val.toString()])
}

s = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
s2 = `Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors.`

// console.log(wordCountEngine(s));
console.log(wordCountEngine2(s2));

