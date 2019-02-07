function minBribes(q) {
  if (q.every((val, i, arr) => !i || val >= arr[i - 1])) {
    return 0;
  }
  // bubble sort sort left, right

  // const firstPosition = q.slice().sort((a, b) => a - b);
  // console.log(q, firstPosition);
  // return q;

  let ans = 0;
  for (let i = 0; i < q.length; i++) {
    const correctNumber = i + 1;
    if (q[i] - correctNumber > 2) {
      console.log("Too Chaotic");
      return;
    }
    // count swaps
    // 0,1,2
    // can swap back 2 elements
    // can swap forward 2 elements
    const maxSwapPosition = Math.max(0, q[0] - 2);
    // start 0 up to the element
    // can only bribe in 1 direction, ascending.
    for (let j = maxSwapPosition; j < i; j++) {
      if (q[j] > q[i]) {
        ans++;
      }
    }
  }
  console.log(ans);
}

// minBribes([2, 1, 5, 3, 4]);
minBribes([5, 1, 2, 3, 7, 8, 6, 4]);
