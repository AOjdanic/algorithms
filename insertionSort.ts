function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while (j >= 0 && arr[j] > arr[j + 1]) {
      const temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

console.log(insertionSort([2, 3, 4, 1, 6]));
