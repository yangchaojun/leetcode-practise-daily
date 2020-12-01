/**
 * 四数相加 II
 * 输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const countAB = new Map()
  A.forEach((u) =>
    B.forEach((v) => countAB.set(u + v, (countAB.get(u + v) || 0) + 1))
  )
  let ans = 0
  for (let u of C) {
    for (let v of D) {
      if (countAB.has(-u - v)) {
        ans += countAB.get(-u - v)
      }
    }
  }
  return ans
}
