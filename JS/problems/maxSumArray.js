//sliding window approach for maximum sum of k consecutive elements in an array
function maxSubarraySum(nums, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Build the initial window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    maxSum = windowSum;

    // The Slide
    for (let i = k; i < nums.length; i++) {
        // Subtract the element that is falling out of the window
        // Add the new element entering the window
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

console.log(maxSubarraySum(arr, k)); // Output: 9