"use strict";

const nums = [1, 2, 3, 2, 3, 3];

function slidingWindowFixed(nums: number[], k: number) {
  const set = new Set<number>();
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (R - L + 1 > k) {
      set.delete(nums[L]);
      L++;
    }

    if (set.has(nums[R])) return true;

    set.add(nums[R]);
  }

  return false;
}

console.log(slidingWindowFixed(nums, 3));
