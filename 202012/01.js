/**
 * 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 测试用例：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 *
 * 输入：nums = [], target = 0
 *
 * 输出：[-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length
  if (len === 0) return [-1, -1]

  let firstTargetPosition = findFirstPosition(nums, target)
  if (firstTargetPosition === -1) return [-1, -1]

  let lastTargetPosition = findLastPosition(nums, target)

  return [firstTargetPosition, lastTargetPosition]
}

function findFirstPosition(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  if (nums[left] === target) return left

  return -1
}

function findLastPosition(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2)
    if (nums[mid] === target) {
      left = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  if (nums[left] === target) return left

  return -1
}

let nums = [5, 7, 7, 8, 8, 10]
let target = 6

console.log(searchRange(nums, target))
