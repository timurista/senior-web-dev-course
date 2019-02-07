## String as array

String is just an array
convert to array, loop
return string

function reverse(str) {
// return str.reverse()
let start = 0;
let end = str.length;

let charArr = new Array(str.length).fill('')

while (start < end) {
charArr[start] = str.charAt(end);

    if (end > start) {
      charArr[end] = str.charAt(start);
      end--;
    }
    start++;

}
return charArr.join('')
}
