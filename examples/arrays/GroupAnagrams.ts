/*
Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]

Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.


Recommended Time & Space Complexity:

You should aim for a solution with O(m * n) time and O(m) space, where m is the number of strings and n is the length of the longest string.
*/

function groupAnagrams(strs: string[]) {
  const anagramMap = {};

  for (const str of strs) {
    const charArray = new Array(26).fill(0);

    for (const char of str) {
      charArray[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const key = JSON.stringify(charArray);

    if (anagramMap[key]) {
      anagramMap[key] = [...anagramMap[key], str];
    } else {
      anagramMap[key] = [str];
    }
  }

  return Object.values(anagramMap);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));

// we create a frequency array of each character, and then use a stringified
// version as the key for our map. If another word has the same frequency
// pattern, we found a match
