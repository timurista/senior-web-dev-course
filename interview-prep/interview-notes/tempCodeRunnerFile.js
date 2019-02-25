function wordCountEngine(document) {
  // your code goes here
  let doc = document.replace(/[']/g, "");
  let words = doc.match(/[a-zA-Z]+/g);
  let map = {};
  for (let word of words) {
    let w = word.toLowerCase();
    map[w] = ++map[w] || 1;
  }
  let sorted = Object.entries(map).sort((a, b) => b[1] - a[1])
  return sorted
}

let s = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
console.log(wordCountEngine(s));
