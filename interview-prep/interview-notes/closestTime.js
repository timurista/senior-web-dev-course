/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  let current =
    60 * parseInt(time.substr(0, 2), 10) + parseInt(time.substr(3), 10);
  const allowed = new Set();

  for (const digit of time) if (digit !== ":") allowed.add(parseInt(digit));

  const maxMinutes = 24 * 60;

  const validFound = current => {
    const digits = [
      current / 60 / 10,
      (current / 60) % 10,
      (current % 60) / 10,
      (current % 60) % 10
    ].map(d => Math.floor(d));
    for (const digit of digits) {
      if (!allowed.has(digit)) return false;
    }
    return `${digits[0]}${digits[1]}:${digits[2]}${digits[3]}`;
  };

  // go forward
  while (true) {
    current = (current + 1) % maxMinutes;
    console.count("loop computed");
    const valid = validFound(current);
    if (valid) return valid;
  }
};

// console.log(nextClosestTime("19:34"));
console.log(nextClosestTime("23:59"));
