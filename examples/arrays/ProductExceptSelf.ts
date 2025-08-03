/*
Products of Array Except Self

Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.

Input: nums = [1,2,4,6]
Output: [48,24,12,8]

Input: nums = [-1,0,1,2,3]
Output: [0,-6,0,0,0]

Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20


Recommended Time & Space Complexity:
You should aim for a solution as good or better than O(n) time and O(n) space, where n is the size of the input array.
*/

// function productExceptSelf(nums: number[]) {
//   const prefix = new Array(nums.length).fill(1);
//
//   for (let i = 1; i < nums.length; i++) {
//     prefix[i] = nums[i - 1] * prefix[i - 1];
//   }
//
//   const suffix = new Array(nums.length).fill(1);
//
//   for (let i = nums.length - 2; i >= 0; i--) {
//     suffix[i] = nums[i + 1] * suffix[i + 1];
//   }
//
//   const res: number[] = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     res[i] = prefix[i] * suffix[i];
//   }
//
//   return res;
// }

function productExceptSelf(nums: number[]) {
  let prefix = 1;
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const temp = prefix;
    prefix *= nums[i];
    res[i] = temp;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const temp = postfix;
    postfix *= nums[i];
    res[i] *= temp;
  }

  return res;
}

console.log(productExceptSelf([1, 2, 4, 6]));

/*
the best way we can do this is go through the array twice, once from start to end, then from end to start.
each time we go through the array, we write at the current position the value of the prefix, then we get 
to postfix, we will multiply value already there, with the value of the postfix
*/
