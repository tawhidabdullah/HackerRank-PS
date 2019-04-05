function countingValleys(n, s) {
  // if we start climbing from down,then we will have come to down
  // at the end
  // or if we start climbing from up, then we will have to come to up
  // at the end

  let score = 0;
  return [...s].reduce((sum, value) => {
    if (value === "D") {
      score++;
    } else {
      score--;
    }
    if (value === "D" && score === 0) {
      sum++;
    }
    return sum;
  }, 0);
}

console.log(countingValleys(8, "DUDDDUDUU"));
