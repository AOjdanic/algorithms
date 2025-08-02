/*
Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements within the array.
You may return the output in any order.

Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.


Recommended Time & Space Complexity:
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.
 */

function topKFrequent(nums: number[], k: number) {
  const frequencyMap: { [k: number]: number } = {};
  // this line has actually come to bite me, as this introduced a bug which i
  // wasn't aware of. I incorrectly thought that fill will initialize a new
  // array for each element in the array, but no, it is the same array
  // that is why, if i tried to do a direct push on an array, it would fill all
  // the "arrays", because they are just references to one same array
  // const frequencies: number[][] = new Array(nums.length).fill([]);

  // this line is better, because the second argument to from method is a mapper
  const frequencies: number[][] = Array.from({ length: nums.length }, () => []);

  // build frequency map
  for (const num of nums) {
    const noOfOccurrences = frequencyMap[num];
    frequencyMap[num] = (noOfOccurrences ?? 0) + 1;
  }

  // fill frequencies array with numbers that have specific frequency
  for (const number in frequencyMap) {
    const noOfOccurrences = frequencyMap[Number.parseInt(number)];
    frequencies[noOfOccurrences].push(Number.parseInt(number));
    // frequencies[noOfOccurrences] = [
    //   ...frequencies[noOfOccurrences],
    //   Number.parseInt(number),
    // ];
  }

  const result: number[] = [];
  // iterate from the end of the frequency array, as that is where the
  // maximum of frequencies is
  for (let i = frequencies.length - 1; i > 0; i--) {
    for (const number of frequencies[i]) {
      result.push(Number(number));
      if (result.length === k) return result;
    }
  }

  return result;
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));

// the main idea of this problem is to create an array that is the same size as
// the input array, because in the worst case, one word can repeat itself in the
// entire array. Then, we build a map with frequency values for each member of
// the array, and then, we take the frequency value as the index of the array we
// initialized previously, and put in it all the values that have that number of
// occurences. Lastly, we iterate through that array in reverse order, and get
// the resulting k values.
