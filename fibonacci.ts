function fibonacci(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const cache: Record<number, number> = {};

function fibonacciMemoized(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (cache[n]) return cache[n];

  cache[n] = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
  return cache[n];
}

console.time("fibonacci");
console.log(fibonacci(50));
console.timeEnd("fibonacci");

// fibonacci: 1:38.321 (m:ss.mmm)

console.time("fibonacciMemoized");
console.log(fibonacciMemoized(50));
console.timeEnd("fibonacciMemoized");

// fibonacciMemoized: 3.469ms -> for 50
// fibonacciMemoized: 3.398ms -> for 200
