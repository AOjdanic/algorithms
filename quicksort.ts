function quicksort(arr: number[], start: number, end: number): number[] {
  if (start >= end) return arr;
  let left = start;
  const pivot = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      const temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;
      left++;
    }
  }

  arr[end] = arr[left];
  arr[left] = pivot;

  quicksort(arr, start, left - 1);
  quicksort(arr, left + 1, end);

  return arr;
}

const input = [6, 2, 4, 1, 3];

console.log(quicksort(input, 0, input.length - 1));
