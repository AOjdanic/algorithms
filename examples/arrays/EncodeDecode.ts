/*
Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.


Recommended Time & Space Complexity:
You should aim for a solution with O(m) time for each encode() and decode() call and O(m+n) space, where m is the sum of lengths of all the strings and n is the number of strings.

*/

function encode(strs: string[]) {
  if (!strs.length) return "";

  let encoded = "";
  for (let i = 0; i < strs.length; i++) {
    encoded += `${strs[i].length}#` + strs[i];
  }

  return encoded;
}

function decode(str: string) {
  if (!str.length) return [];

  const decoded: string[] = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    const length = parseInt(str.slice(i, j));

    const start = j + 1;
    const end = start + length;

    const word = str.slice(start, end);
    decoded.push(word);

    i = end;
  }

  return decoded;
}

console.log(decode(encode(["hello", "there"])));
