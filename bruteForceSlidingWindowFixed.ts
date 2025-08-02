const nums = [1, 2, 3, 2, 3, 3];

function bruteForceFixedSlidingWindow(nums: number[], k: number) {
  for (let L = 0; L < nums.length; L++) {
    for (let R = L + 1; R < Math.min(nums.length, L + k); R++) {
      if (nums[L] === nums[R]) return true;
    }
  }

  return false;
}

console.log(bruteForceFixedSlidingWindow(nums, 3));
