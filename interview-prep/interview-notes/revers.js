function reverse(str) {
  if (!str || str.length < 2) {
    return str;
  }
  // return str.reverse()
  let start = 0;
  let end = str.length;

  let charArr = new Array(str.length);

  while (start <= end) {
    console.count("reverse step");
    charArr[start] = str.charAt(end);
    charArr[end] = str.charAt(start);
    end--;
    start++;
  }
  console.log(str.length);
  return charArr.join("");
}

const s =
  "Hi my name is Andrei and I love to code in javascript the number of steps here should be half + 1";
console.log(
  reverse(s) ===
    s
      .split("")
      .reverse()
      .join("")
);
