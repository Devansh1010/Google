/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// var removeDuplicates = function (nums) {
//     if (!Array.isArray(nums)) {
//         return -1
//     }

//     if (nums.length == 0) {
//         return 0
//     }

//     let lastUniqueElementFound = 1
//     let uniqueElement = nums[0]

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] != uniqueElement) {
//             nums[lastUniqueElementFound] = nums[i]
//             lastUniqueElementFound++
//             uniqueElement = nums[i]
//         }
//     }

//     return lastUniqueElementFound
// };


var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    if(nums.length === 1) return 1;

    if(nums.length === 2) {
        return nums[0] === nums[1] ? 1 : 2
    }

    // We start at 1 because the first element is always unique
    let insertIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        // If current element is different from the previous unique one
        if (nums[i] !== nums[insertIndex - 1]) {
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }

    return insertIndex;
};

const arr = [0, 0, 0, 1, 1, 2, 2, 2, 3]
const result = removeDuplicates(arr)

console.log(arr)
console.log(result)

