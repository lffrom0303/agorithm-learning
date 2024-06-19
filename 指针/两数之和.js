var twoSum = function (nums, target) {
  // 有序数组
  // let i = 0,
  //     j = nums.length - 1;
  // while (i < j) {
  //   const sum = nums[i] + nums[j];
  //   if (sum === target) {
  //     return [nums[i], nums[j]];
  //   } else if (sum > target) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }
  // return [];
  //无序数组解法1
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];

  //无序数组解法2
  // 将原始数组的值和索引一起存储
  // const indexedNums = nums.map((num, index) => ({ num, index }));
  // // 对数组进行排序
  // indexedNums.sort((a, b) => a.num - b.num);
  // let i = 0,
  //     j = indexedNums.length - 1;
  // while (i < j) {
  //   const sum = indexedNums[i].num + indexedNums[j].num;
  //   if (sum === target) {
  //     return [indexedNums[i].index, indexedNums[j].index];
  //   } else if (sum > target) {
  //     j--;
  //   } else {
  //     i++;
  //   }
  // }
  // return [];

  //暴力解法
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }
  // return [];
};