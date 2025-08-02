const dataset = [2, 3, 1, 2, 4, 3];

function shortestSubarray(dataset: number[], target: number): number {
  let L = 0;
  let sum = 0;
  let length = Infinity;

  for (let R = 0; R < dataset.length; R++) {
    sum += dataset[R];

    while (sum >= target) {
      length = Math.min(length, R - L + 1);
      sum -= dataset[L];
      L++;
    }
  }

  if (length === Infinity) return 0;

  return length;
}
