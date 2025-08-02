/*
Given an array of integers nums and an integer target,
return the indices i and j such that nums[i] + nums[j] == target and i != j.
We may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.

Input: nums = [3,4,5,6], target = 7
Output: [0,1]

Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Input: nums = [4,5,6], target = 10
Output: [0,2]

Input: nums = [5,5], target = 10
Output: [0,1]


Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000


Recommended Time & Space Complexity
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.
*/

function twoSum(nums: number[], target: number): [number, number] {
  let L = -1;
  let R = -1;

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const matchSumElIndex = map[diff];

    if (matchSumElIndex === null || matchSumElIndex === undefined) {
      map[nums[i]] = i;
      console.log(map);
      continue;
    }
    console.log("runs after if", matchSumElIndex, i);

    L = matchSumElIndex < i ? matchSumElIndex : i;
    R = matchSumElIndex < i ? i : matchSumElIndex;
    break;
  }

  return [L, R];
}

console.log(twoSum([3, 2, 4, 5, 6], 7));

// as we iterate through the array, we find the difference between the target
// and the current number. If that number exists in the hashmap, then we have a
// match, and we set the indices, break the loop, return from function.
// If not, we then set the current number in the hashmap as the key, and the
// value is the index at which that element is found. Later, when we find the
// second matching number, in case it wasn't in the map at the beginning, we
// found the solution. We can do this, because we know that there is exactly one
// solution, and one pair of elements which give us the target.
