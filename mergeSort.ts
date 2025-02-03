function swap(arr: number[], start: number, end: number) {
  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
function merge(arr: number[], start: number, end: number) {
  if (start === end) return arr;

  if (arr[start] >= arr[end]) {
    swap(arr, start, end);
  } else {
    swap(arr, end, start);
  }
  return arr;
}

function mergeSort(arr: number[], start: number, end: number) {
  const middle = Math.floor((start + end) / 2);

  mergeSort(arr, start, middle);
  mergeSort(arr, middle + 1, end);

  merge(arr, start, end);

  return arr;
}

console.log(mergeSort([7, 3, 7], 0, 2));
