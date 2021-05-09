// Created: 5/9/21
// To Solve: Leetcode 35: Search Insert Position

//@param {number[]} nums
//@param {number} target
//@return {number}
function searchInsert(nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  // split array
  while (startIndex < endIndex) {
    // calculate middle index
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // check if the middle index value is target
    if (target == nums[middleIndex]) {
      return middleIndex;
    }

    // pick which side to look in
    if (target > nums[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
}
