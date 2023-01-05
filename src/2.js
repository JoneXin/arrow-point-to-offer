/**
 * 题目:在一个 n * m 的二维数组中，
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
 * 时间复杂度 O(n) 空间复杂度 O(1)
 *
 * 思路：先找到 小于target 的第一列，那么这列靠左的数据（除了第一行）都有可能
 * 再 从这列向下找，
 * 如果 < target 这一行则淘汰，行数++ 往下一行找
 * 如果 > target 那么这列淘汰，列数-- 往左找
 * 边界条件：行数下标 < 二维数组行数 -1 && 列数下标 >= 0
 */
function doubleDimensionalArrayfind(nums, target) {
    if (nums.length === 0 || nums[0].length == 0) return false;

    // 第一行二分查找
    // 找到比target 小的第一列下标, 二分 tail指针的值  就是比 目标值小的第一列
    let head = 0,
        tail = nums[0].length - 1,
        tempIndex;

    while (head <= tail) {
        tempIndex = Math.floor((tail + head) / 2);

        if (target === nums[0][tempIndex]) return true;

        if (target > nums[0][tempIndex]) {
            head = tempIndex + 1;
        }

        if (target < nums[0][tempIndex]) {
            tail = tempIndex - 1;
        }
    }

    // 比最小值还小
    if (tail < 0) return false;

    let column = tail,
        row = 1;

    // 遍历小于target的第一列
    while (column >= 0 && row < nums.length) {
        if (nums[row][column] == target) return true;

        if (nums[row][column] < target) {
            row++;
        } else {
            column--;
        }
    }

    return false;
}

module.exports = {
    doubleDimensionalArrayfind,
};
