function merge(arr, start, middle, end) {
  const leftArrayLength = middle - start + 1;
  const rightArrayLength = end - middle;

  const leftArray = new Array(leftArrayLength);
  const rightArray = new Array(rightArrayLength);

  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = arr[start + i];
  }

  for (let j = 0; j < rightArrayLength; j++) {
    rightArray[j] = arr[middle + 1 + j];
  }

  let leftArrayPointer = 0;
  let rightArrayPointer = 0;
  let originalArrayPointer = start;

  while (
    leftArrayPointer < leftArrayLength &&
    rightArrayPointer < rightArrayLength
  ) {
    if (leftArray[leftArrayPointer] <= rightArray[rightArrayPointer]) {
      arr[originalArrayPointer] = leftArray[leftArrayPointer];
      leftArrayPointer++;
    } else {
      arr[originalArrayPointer] = rightArray[rightArrayPointer];
      rightArrayPointer++;
    }

    originalArrayPointer++;
  }

  while (leftArrayPointer < leftArrayLength) {
    arr[originalArrayPointer] = leftArray[leftArrayPointer];
    leftArrayPointer++;
    originalArrayPointer++;
  }

  while (rightArrayPointer < rightArrayLength) {
    arr[originalArrayPointer] = rightArray[rightArrayPointer];
    rightArrayPointer++;
    originalArrayPointer++;
  }
}

function mergeSort(arr, start, end) {
  const middle = Math.floor((start + end) / 2);

  if (start < end) {
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    merge(arr, start, middle, end);
  }
  return arr;
}

const input = [7, 3, 8, 2, 4, 3, 1, 6];

console.log(mergeSort(input, 0, input.length - 1));
