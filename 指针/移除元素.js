var removeElement = function (nums, val) {
  let slow = 0; // 慢指针
  for (let fast = 0; fast < nums.length; fast++) {
    // 快指针
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  // 返回新数组的长度，实际移除的元素个数可以通过原数组长度减去新数组长度计算
  return slow;
};
