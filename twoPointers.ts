const range = [-1, 2, 3, 4, 7, 9];

// assumed that we have one solution
function findTargetIndexes(range: number[], target: number): [number, number] {
  let L = 0;
  let R = range.length - 1;

  while (L < R) {
    if (range[L] + range[R] < target) {
      L++;
    } else if (range[L] + range[R] > target) {
      R--;
    } else {
      return [L, R];
    }
  }

  return [0, range.length]; // not necessary, thanks to the assumption, but typescript is not happy, so...
}

console.log(findTargetIndexes(range, 7));
