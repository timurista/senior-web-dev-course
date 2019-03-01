function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.substring(1)) + str.substring(0, 1)
}

console.log(reverse("my name is tim"))