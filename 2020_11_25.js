/**
 * 输入：s = "leetcode"
    输出："cdelotee"
 * @param {string} s
 * @return {string}
 * 
 * 桶排序
 */
var sortString = function (s) {
  const num = new Array(26).fill(0)
  for (char of s) {
    num[char.charCodeAt() - 'a'.charCodeAt()]++
  }
  let result = ''
  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (num[i]) {
        result += String.fromCharCode(i + 'a'.charCodeAt())
        num[i]--
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (num[i]) {
        result += String.fromCharCode(i + 'a'.charCodeAt())
        num[i]--
      }
    }
  }
  return result
}
let str = 'leetcode'
console.log(sortString(str))
