function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class WordDict {
  constructor(dict = []) {
    this.dict = dict;
  }
  loadDict(dict) {
    this.dict = dict;
  }

  findPath(start, end) {
    let queue = [[[start], start, new Set()]];
    let visitedPaths = new Set();
    let paths = [];
    let parentMap = new Map();
    parentMap.set(start, null)
    while (queue.length) {
      let [path, item, visited] = queue.shift();
      if (visited.has(item)) continue;
      // console.log(visited.size, visitedPaths.size, this.dict.length)
      visited.add(item);
      // if (visited.has(end)) continue;
      // if (visitedPaths.has(path.join(','))) break;
      // visitedPaths.add(path.join(','));
      // if (item === end) {
      //   paths.push(path);
      //   // let visited2 = new Set();
      //   // visited2.delete(start);
      //   // visited2.delete(end);
      //   // queue.push([[start], start, visited2]);
      //   // shuffleArray(this.dict)
      //   // continue;
      //   visited = new Set();
      //   continue;
      // }
      // console.log('ITEM', path, item)
      const words = this.findWordsOneDistance(item);
      console.log('NEW PATH', visited)
      // console.log('WORDS', item);
      for (let word of words) {
        // if (!visited.has(word)) console.log('WORD', word, 'PATH', path.concat(word).join(','))
        // if (visitedPaths.has(path.concat(word).join(','))) continue;
        // visitedPaths.add(path.join(','));
        // if (!visited.has(word)) 
        parentMap.set(item, word);
        if (item === end) {
          paths.push(path);
        }
        visited.add(item);

        queue.push([path.concat(word), word, visited])
      }
    }
    // let pths = paths.slice();
    console.log(paths.length, paths)
    return paths.reduce((a, b) => a.length < b.length ? a : b)
  }

  findWordsOneDistance(a) {
    let oneAwayWords = []
    for (let word of this.dict) {
      if (this.isOneAway(a, word)) oneAwayWords.push(word);
    }
    // console.log('ONE AWAY', oneAwayWords)
    // console.log(oneAwayWords)
    return oneAwayWords;
  }
  isOneAway(first, second) {
    // console.log(first, second)
    if (first.length > second.length) return false;
    if (first.length === second.length) {
      let diffs = 0;
      for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) diffs++;
        if (diffs > 1) return false
      }
    }
    return true;
  }
}

let wordDict = new WordDict();
wordDict.loadDict([
  'code', 'rode', 'rube', 'ruby', 'coke',
  'cake', 'cuke', 'cube', 'cire', 'core',
  'cere', 'care', 'cote', 'cite', 'cete',
  'cate', 'care', 'cuke', 'lode', 'rode',
  'rude', 'mode', 'bode'
])
console.log(wordDict.findPath('code', 'ruby'))



// function
//   let the starting word be "S" and the ending word be "E".
// load the dictionary in a list.
//   Put "S" in a Queue.
//     parentMap.put("S", "null");

// While(!Queue.isEmpty()) {
//   word "U" = Queue.remove();
//   if ("U" is visited) then continue;
//   now starting from "U" do a breadth first traversal, ie, iterate through the dictionary and push all the words "V" which are 1 letter apart from "U" and update their parent as "U".
//   parentMap.put("V", "U");
//   if ("V" == "E") { PrintWordChain("V"); }
//   mark "U" as visited.
// }


// PrintWordChain("V") {
//   String T = "";
//   while ((T = parentMap.get("V")) != null) {
//     print T;
//     V = T;
//   }
// }

