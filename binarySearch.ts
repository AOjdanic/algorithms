function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 3, 4, 5, 6, 7, 8], 4));
