function superDigit(n, k) {
  if (n < 10) {
    return n;
  }

  const numArray = n.toString().split("");

  const superNum = numArray.reduce((a, b) => a + (b | 0), 0) * k;

  return superDigit(superNum, 1);
}

console.log(superDigit(148, 3));

// we can turn a string to number by this ===>> "b" | 0
