function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const minNum = sortedArray[0];
  const maxNum = sortedArray[sortedArray.length - 1];

  let minSum = 0;
  let maxSum = 0;
  let maxNumCounter = 0;
  let minNumCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxNum && !maxNumCounter) {
      maxNumCounter++;
      continue;
    } else minSum += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minNum && !minNumCounter) {
      minNumCounter++;
      continue;
    } else maxSum += arr[i];
  }

  return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum([5, 5, 5, 5, 5])); // 20 , 20

// more clearn way to slove this problem

function minMaxsum(arr) {
  let min = arr[0],
    max = min,
    sum = min;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(`${sum - min} ${sum - max}`);
}

minMaxsum([1, 2, 3, 4, 5]);
