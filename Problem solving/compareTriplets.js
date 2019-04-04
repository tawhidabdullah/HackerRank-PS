// compare the triplet

function compareTriplets(a, b) {
  const finalResults = [0, 0];
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], b[i]);
    if (a[i] > b[i]) finalResults[0] += 1;
    else if (a[i] < b[i]) finalResults[1] += 1;
    else {
      finalResults[0] += 0;
      finalResults[1] += 0;
    }
  }
  console.log(finalResults);
}

compareTriplets([1, 2, 3], [1, 2, 3]);
