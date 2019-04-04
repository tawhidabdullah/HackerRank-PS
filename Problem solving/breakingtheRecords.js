function breakingRecords(scores) {
  const maxAndWorstScores = [0, 0];
  let wrostScorePointer = 0;
  let maxScorePointer = 0;

  for (
    let maxScore = maxScorePointer + 1;
    maxScore < scores.length;
    maxScore++
  ) {
    if (scores[maxScorePointer] < scores[maxScore]) {
      maxAndWorstScores[0] += 1;
      maxScorePointer++;
      maxScorePointer = maxScore;
    }
  }

  for (
    let worstScore = wrostScorePointer + 1;
    worstScore < scores.length;
    worstScore++
  ) {
    if (scores[wrostScorePointer] > scores[worstScore]) {
      maxAndWorstScores[1] += 1;
      wrostScorePointer = worstScore;
    }
  }

  return maxAndWorstScores;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // should be [2,4]
