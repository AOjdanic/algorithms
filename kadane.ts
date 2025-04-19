const arr = [4, -1, 2, -7, 3, 4];

function bruteForceKadane(nums: number[]) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

console.time("bruteForceKadane");
console.log(bruteForceKadane(arr));
console.timeEnd("bruteForceKadane");

function kadane(nums: number[]) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum, 0) + nums[i];
    // currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.time("kadane");
console.log(kadane(arr));
console.timeEnd("kadane");

// sliding window implementation
// return the boundaries of the subarray with the largest sum
function kadaneSW(nums: number[]) {
  let maxSum = nums[0];
  let currentSum = 0;

  // pointers that denote the boundaries of sliding window
  let maxL = 0;
  let maxR = 0;

  let L = 0; // left pointer

  for (let R = 0; R < nums.length; R++) {
    if (currentSum < 0) {
      currentSum = 0;
      L = R;
    }

    currentSum += nums[R];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxL = L;
      maxR = R;
    }
  }

  return [maxL, maxR];
}

console.log(kadaneSW(arr));
