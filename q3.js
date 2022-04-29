//Brute force - not O(log (m + n))
var findMedianSortedArrays = function (nums1, nums2) {
    function getMedian(nums) {
        if (nums.length % 2 == 0) {
            let left = Math.floor(nums.length / 2) - 1;
            let right = Math.floor(nums.length / 2);
            return (nums[left] + nums[right]) / 2;
        } else {
            let i = Math.floor(nums.length / 2);
            return nums[i];
        }
    }

    let median1 = getMedian(nums1);
    let median2 = getMedian(nums2);

    let nums3 = nums1.concat(nums2);
    nums3.sort((a, b) => a - b);

    return getMedian(nums3);
};
