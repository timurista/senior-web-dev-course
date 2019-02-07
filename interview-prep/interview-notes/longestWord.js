function LongestWord(sen) {
  let largest = "";
  const matches = sen.split(/[^\w]/);
  console.log(matches);
  for (let m of matches) {
    if (m.length > largest.length) {
      largest = m;
    }
  }
  // code goes here
  return largest;
}

console.log(LongestWord("fun&!! time"));
