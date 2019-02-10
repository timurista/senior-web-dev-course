var flipgame = function(fronts, backs) {
  let same = {};
  let smallest = Infinity;

  for (let i = 0; i < backs.length; i++) {
    let frontCard = fronts[i];
    let backCard = backs[i];

    if (frontCard === backCard) {
      same[frontCard] = true;
    }
  }

  for (let i = 0; i < fronts.length; i++) {
    let frontCard = fronts[i];
    let backCard = backs[i];
    if (!same[frontCard]) smallest = Math.min(smallest, frontCard);
    if (!same[backCard]) smallest = Math.min(smallest, backCard);
  }

  return smallest < Infinity ? smallest : 0;
};

console.log(flipgame([1, 2, 4, 4, 7], [1, 3, 4, 1, 3]) === 2); // 2
