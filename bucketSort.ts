function bucketSort(arr: number[]) {
  const countsMap = {
    "0": 0,
    "1": 0,
    "2": 0,
  };

  arr.forEach((el) => countsMap[el]++);

  let arrIndex = 0;

  for (let i = 0; i < Object.values(countsMap).length; i++) {
    for (let j = 0; j < countsMap[i]; j++) {
      arr[arrIndex] = Number(Object.keys(countsMap)[i]);
      arrIndex++;
    }
  }

  return arr;
}

console.log(bucketSort([2, 1, 2, 0, 0, 2]));
