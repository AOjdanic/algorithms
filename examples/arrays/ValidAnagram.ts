/*
Valid Anagram

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

Input: s = "racecar", t = "carrace"
Output: true

Input: s = "jar", t = "jam"
Output: false

Constraints:
s and t consist of lowercase English letters.

Recommended Time & Space Complexity:

You should aim for a solution with O(n + m) time and O(1) space,
where n is the length of the string s and m is the length of the string t.
*/

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  const sMap = {};
  s.split("").forEach((letter) => {
    if (sMap[letter]) {
      sMap[letter] = sMap[letter] + 1;
    } else {
      sMap[letter] = 1;
    }
  });

  const tMap = {};
  t.split("").forEach((letter) => {
    if (tMap[letter]) {
      tMap[letter] = tMap[letter] + 1;
    } else {
      tMap[letter] = 1;
    }
  });

  return Object.keys(sMap).every((key) => {
    return Boolean(tMap[key]) && tMap[key] === sMap[key];
  });
}
