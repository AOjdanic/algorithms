const randomNumber = Math.floor(Math.random() * 100) + 1;

function isCorrect(n: number) {
  if (n > randomNumber) return 1;
  if (n < randomNumber) return -1;

  return 0;
}

function binarySearchRange(low: number, high: number): number {
  let left = low;
  let right = high;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (isCorrect(middle) > 0) {
      right = middle - 1;
    } else if (isCorrect(middle) < 0) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(
  "randomNumber",
  randomNumber,
  "number found by algo",
  binarySearchRange(1, 100),
);
