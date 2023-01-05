/**
 *
 * 题目: 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
       数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
       请找出数组中任意一个重复的数字。

  限制: 2 <= n <= 100000
 */

/**
 * 1,  先排序，再找
 * 时间复杂度: n * logn
 * 空间复杂度: o(1)
 */

function getRepeatNum(sourceArr) {
    if (sourceArr.length < 2) return null;

    sourceArr = sourceArr.sort();

    for (let i = 0; i < sourceArr.length; i++) {
        if (sourceArr[i] == sourceArr[i + 1]) {
            return sourceArr[i];
        }
    }

    return null;
}

/**
 * 1，遍历数组，放到对象中，每新插一下，判断是否有重复的
 * 2，有重复，直接return，没有，插入map
 * 时间复杂度: o(n)
 * 空间复杂度: o(n)
 */

function getRepeatNum1(sourceArr) {
    if (sourceArr.length < 2) return null;

    let tempObj = {};

    for (let i = 0; i < sourceArr.length; i++) {
        if (tempObj[sourceArr[i]]) {
            return tempObj[sourceArr[i]];
        }

        tempObj[sourceArr[i]] = sourceArr[i];
    }

    return null;
}

/**
 * 算法思想：由于条件是 数组的值和 数组下标的值一个范围（很重要，没有这个条件，无法用），
 * 那设想：如果数组无重复，
 * 1，特殊情况：nums[i] = i 一定是无重复的
 * 2，其他无重复的情况，可以理解成，各个项进行有限次交换得到
 *
 * 那我们 循环 交换 num[i] 和 nums[nums[1]] 构造 nums[i] = i，
 * 如果成立，继续下一个，在构造过程中 判断 num[i] 和 nums[nums[1]]的值是否相等即可
 *
 */
function getRepeatNum2(sourceArr) {
    if (sourceArr.length < 2) return null;

    let temp,
        i = 0;
    while (i < sourceArr.length) {
        // 构造成 nums[i] = i
        if (sourceArr[i] == i) {
            i++;
        }

        // 上一次交换后 是否有重复的
        if (sourceArr[i] === sourceArr[sourceArr[i]]) return sourceArr[i];

        swap(sourceArr, i, sourceArr[i]);
    }

    return null;
}

function swap(nums, i, j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

module.exports = {
    getRepeatNum,
    getRepeatNum1,
    getRepeatNum2,
};