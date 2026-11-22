// Auto-generated 70-Day DSA Problem Guides
export const allDsaGuidesByTitle = {
  "Two Sum II": {
    "questionTitle": "Two Sum II - Input Array Is Sorted",
    "desc": "Given a 1-indexed sorted array of integers numbers, find two distinct numbers such that they add up to a specific target number. Return their 1-based indices [index1, index2]. Exactly one solution exists, and you cannot use the same element twice.",
    "inputExample": "numbers = [2, 7, 11, 15], target = 9",
    "outputExample": "[1, 2]",
    "explanation": "The sum of numbers[0] (value 2) and numbers[1] (value 7) is 2 + 7 = 9. Since the problem uses 1-based indexing, we return their positions [0 + 1, 1 + 1] -> [1, 2].",
    "constraints": "• 2 <= numbers.length <= 3 * 10^4\n• -1000 <= numbers[i] <= 1000\n• numbers is sorted in non-decreasing order\n• Exactly one valid answer exists\n• Space constraint: O(1) extra memory",
    "hint": "Two-Pointer Strategy:\n1. Since numbers is already sorted, start with left = 0 and right = numbers.length - 1.\n2. Calculate currentSum = numbers[left] + numbers[right].\n3. If currentSum === target, return [left + 1, right + 1].\n4. If currentSum < target, we need a larger value, so move left pointer forward: left++.\n5. If currentSum > target, we need a smaller value, so move right pointer backward: right--.\n• Time: O(n) linear scan, Space: O(1) in-place pointers."
  },
  "3Sum": {
    "questionTitle": "3Sum - Find All Unique Triplets Summing to 0",
    "desc": "Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] === 0. The output array must NOT contain duplicate triplets.",
    "inputExample": "nums = [-1, 0, 1, 2, -1, -4]",
    "outputExample": "[[-1, -1, 2], [-1, 0, 1]]",
    "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. Distinct triplets that sum to 0 are [-1, -1, 2] and [-1, 0, 1]. Duplicate combinations are filtered out.",
    "constraints": "• 3 <= nums.length <= 3000\n• -10^5 <= nums[i] <= 10^5",
    "hint": "Sort + Two-Pointer:\n1. Sort the array first so pointers can move logically.\n2. Iterate i from 0 to n - 3. If nums[i] > 0, stop (no 3 positives can sum to 0).\n3. Skip duplicates if nums[i] === nums[i - 1].\n4. For each i, treat it as -nums[i] target and use Two-Pointer (left = i + 1, right = n - 1)."
  },
  "Sort Colors": {
    "questionTitle": "Sort Colors (Dutch National Flag)",
    "desc": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red (0), white (1), and blue (2). Do this in a single pass without using the library's sort function.",
    "inputExample": "nums = [2, 0, 2, 1, 1, 0]",
    "outputExample": "[0, 0, 1, 1, 2, 2]",
    "explanation": "All 0s are placed at the beginning, followed by all 1s, and all 2s at the end.",
    "constraints": "• 1 <= nums.length <= 300\n• nums[i] is either 0, 1, or 2\n• Follow-up: O(n) one-pass in-place with O(1) space.",
    "hint": "3-Pointer Partition (Dutch Flag):\n• low: boundary for 0s.\n• mid: current item being checked.\n• high: boundary for 2s.\nWhen nums[mid] === 0: swap(low, mid), low++, mid++.\nWhen nums[mid] === 1: mid++.\nWhen nums[mid] === 2: swap(mid, high), high--."
  },
  "Move Zeroes": {
    "questionTitle": "Move Zeroes to End In-Place",
    "desc": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
    "inputExample": "nums = [0, 1, 0, 3, 12]",
    "outputExample": "[1, 3, 12, 0, 0]",
    "explanation": "Non-zero values [1, 3, 12] keep their original order at the front, while both 0s are placed at the end.",
    "constraints": "• 1 <= nums.length <= 10^4\n• -2^31 <= nums[i] <= 2^31 - 1\n• Modify nums in-place without copying array.",
    "hint": "Two-Pointer (Slow & Fast):\n• insertPos tracks where the next non-zero number should go.\n• Whenever fast pointer finds nums[i] !== 0, swap nums[insertPos] with nums[i] and increment insertPos."
  },
  "Container With Most Water": {
    "questionTitle": "Container With Most Water",
    "desc": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    "inputExample": "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
    "outputExample": "49",
    "explanation": "The vertical lines at index 1 (height 8) and index 8 (height 7) form a container of width 7. The water height is bounded by the shorter line: min(8, 7) = 7. Total water = 7 * 7 = 49.",
    "constraints": "• n == height.length\n• 2 <= n <= 10^5\n• 0 <= height[i] <= 10^4",
    "hint": "Greedy Two-Pointer:\n1. Area = width * min(height[left], height[right]).\n2. As pointers move inward, width ALWAYS decreases.\n3. The only way to potentially get a larger area is to seek a taller line. Hence, always move the pointer pointing to the shorter line!"
  },
  "Trapping Rain Water": {
    "questionTitle": "Trapping Rain Water",
    "desc": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "inputExample": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
    "outputExample": "6",
    "explanation": "The elevation map [0,1,0,2,1,0,1,3,2,1,2,1] traps 6 units of rain water between peaks.",
    "constraints": "• n == height.length\n• 1 <= n <= 2 * 10^4\n• 0 <= height[i] <= 10^5",
    "hint": "Two Pointers with LeftMax & RightMax:\n• Maintain left = 0, right = n - 1, maxL = 0, maxR = 0.\n• If height[left] <= height[right]: if height[left] >= maxL, update maxL; else water += maxL - height[left]; left++.\n• Else: if height[right] >= maxR, update maxR; else water += maxR - height[right]; right--."
  },
  "Maximum Sum Subarray of Size K": {
    "questionTitle": "Maximum Average / Sum Subarray of Size K",
    "desc": "Given an array of integers nums and an integer k, find the maximum contiguous subarray sum of length equal to k.",
    "inputExample": "nums = [2, 1, 5, 1, 3, 2], k = 3",
    "outputExample": "9",
    "explanation": "Subarray [5, 1, 3] has the maximum sum of 9 among all subarrays of length 3.",
    "constraints": "• 1 <= k <= nums.length <= 10^5\n• -10^4 <= nums[i] <= 10^4",
    "hint": "Fixed Sliding Window:\n1. Calculate the sum of the first k elements windowSum.\n2. Slide the window one element at a time: windowSum += nums[i] - nums[i - k].\n3. Track max(maxSum, windowSum) across all windows."
  },
  "Max Consecutive ones": {
    "questionTitle": "Max Consecutive Ones",
    "desc": "Given a binary array nums, return the maximum number of consecutive 1's in the array.",
    "inputExample": "nums = [1, 1, 0, 1, 1, 1]",
    "outputExample": "3",
    "explanation": "The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.",
    "constraints": "• 1 <= nums.length <= 10^5\n• nums[i] is either 0 or 1",
    "hint": "Single Pass Count:\n• Keep a count = 0 and maxCount = 0.\n• Iterate through nums: if num === 1, count++; maxCount = Math.max(maxCount, count).\n• If num === 0, reset count = 0."
  },
  "Max Consecutive ones III": {
    "questionTitle": "Max Consecutive Ones III",
    "desc": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    "inputExample": "nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2",
    "outputExample": "6",
    "explanation": "Flipping nums[5] and nums[10] gives [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1], maximum consecutive 1s is 6.",
    "constraints": "• 1 <= nums.length <= 10^5\n• 0 <= k <= nums.length",
    "hint": "Variable Sliding Window:\n• Maintain left = 0, zeroCount = 0.\n• For right = 0 to n-1: if nums[right] === 0, zeroCount++.\n• While zeroCount > k: if nums[left] === 0, zeroCount--; left++.\n• maxLen = max(maxLen, right - left + 1)."
  },
  "Subarray Product Less Than K": {
    "questionTitle": "Subarray Product Less Than K",
    "desc": "Given an array of positive integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.",
    "inputExample": "nums = [10, 5, 2, 6], k = 100",
    "outputExample": "8",
    "explanation": "The 8 subarrays with product < 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].",
    "constraints": "• 1 <= nums.length <= 3 * 10^4\n• 1 <= nums[i] <= 1000\n• 0 <= k <= 10^6",
    "hint": "Sliding Window with Product Counting:\n• If k <= 1, return 0 (all positive numbers).\n• Expand right: prod *= nums[right].\n• Shrink left while prod >= k: prod /= nums[left++].\n• For each right, exactly (right - left + 1) new valid subarrays end at right."
  },
  "Sliding Window Maximum": {
    "questionTitle": "Sliding Window Maximum",
    "desc": "You are given an array of integers nums, and a sliding window of size k moving from left to right. Return the max of each sliding window.",
    "inputExample": "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
    "outputExample": "[3, 3, 5, 5, 6, 7]",
    "explanation": "Windows: [1,3,-1]->3, [3,-1,-3]->3, [-1,-3,5]->5, [3,5,3]->5, [5,3,6]->6, [3,6,7]->7.",
    "constraints": "• 1 <= nums.length <= 10^5\n• 1 <= k <= nums.length",
    "hint": "Monotonic Deque:\n• Store indices in a double-ended queue in descending order of value.\n• Remove indices outside window (index <= i - k).\n• Pop smaller elements from back before inserting current.\n• The front of deque always holds the max element index."
  },
  "Subarray with k distinct integers": {
    "questionTitle": "Subarrays with K Different Integers",
    "desc": "Given an integer array nums and an integer k, return the number of good subarrays where the number of different integers in the subarray is exactly k.",
    "inputExample": "nums = [1, 2, 1, 2, 3], k = 2",
    "outputExample": "7",
    "explanation": "Subarrays with exactly 2 distinct numbers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].",
    "constraints": "• 1 <= nums.length <= 2 * 10^4\n• 1 <= k <= nums.length",
    "hint": "Exact(K) = atMost(K) - atMost(K - 1):\n• Helper function atMost(k) finds total subarrays with <= k distinct elements using sliding window.\n• Return atMost(k) - atMost(k - 1)."
  },
  "Fruits Into Baskets": {
    "questionTitle": "Fruit Into Baskets",
    "desc": "You have 2 baskets, and each basket can only hold a single type of fruit. Pick contiguous fruits from trees to maximize the total fruits gathered.",
    "inputExample": "fruits = [1, 2, 3, 2, 2]",
    "outputExample": "4",
    "explanation": "Pick from trees [2, 3, 2, 2] which only contains 2 types of fruits (type 2 and 3).",
    "constraints": "• 1 <= fruits.length <= 10^5\n• 0 <= fruits[i] < fruits.length",
    "hint": "Sliding Window with at most 2 distinct elements:\n• Maintain frequency map of fruit types.\n• When map size exceeds 2, increment left pointer and decrement frequency until map size <= 2.\n• Track max window length."
  },
  "Minimum Size Subarray Sum": {
    "questionTitle": "Minimum Size Subarray Sum",
    "desc": "Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray whose sum is greater than or equal to target. If no such subarray exists, return 0.",
    "inputExample": "target = 7, nums = [2, 3, 1, 2, 4, 3]",
    "outputExample": "2",
    "explanation": "Subarray [4, 3] has the minimal length (2) with sum >= 7.",
    "constraints": "• 1 <= target <= 10^9\n• 1 <= nums.length <= 10^5",
    "hint": "Dynamic Window Expansion & Contraction:\n• Expand right adding to currentSum.\n• While currentSum >= target: update minLen = min(minLen, right - left + 1), then subtract nums[left++] from currentSum."
  },
  "Subarray Sum Equals K": {
    "questionTitle": "Subarray Sum Equals K",
    "desc": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    "inputExample": "nums = [1, 1, 1], k = 2",
    "outputExample": "2",
    "explanation": "The subarrays [1, 1] at indices [0, 1] and [1, 2] both sum to 2.",
    "constraints": "• 1 <= nums.length <= 2 * 10^4\n• -1000 <= nums[i] <= 1000\n• -10^7 <= k <= 10^7",
    "hint": "Prefix Sum + Hash Map:\n• prefixSum[j] - prefixSum[i] = k -> prefixSum[i] = prefixSum[j] - k.\n• Store frequency of each prefix sum in a hash map. Initialize map[0] = 1.\n• For each sum, answer += map[sum - k], then map[sum]++."
  },
  "Matrix Block Sum (Running Sum of 2D Array)": {
    "questionTitle": "Matrix Block Sum (2D Prefix Sum)",
    "desc": "Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for: i - k <= r <= i + k, j - k <= c <= j + k.",
    "inputExample": "mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1",
    "outputExample": "[[12,21,16],[27,45,33],[24,39,28]]",
    "explanation": "Each cell (i, j) sums the (2k+1)x(2k+1) block clamped within matrix bounds.",
    "constraints": "• m, n <= 100\n• 1 <= k <= 100",
    "hint": "2D Prefix Sum:\n• Build pref[r][c] = mat[r-1][c-1] + pref[r-1][c] + pref[r][c-1] - pref[r-1][c-1].\n• Block sum = pref[r2][c2] - pref[r1-1][c2] - pref[r2][c1-1] + pref[r1-1][c1-1]."
  },
  "Product of Array Except Self": {
    "questionTitle": "Product of Array Except Self",
    "desc": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i] in O(n) without division.",
    "inputExample": "nums = [1, 2, 3, 4]",
    "outputExample": "[24, 12, 8, 6]",
    "explanation": "answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, answer[2] = 1*2*4 = 8, answer[3] = 1*2*3 = 6.",
    "constraints": "• 2 <= nums.length <= 10^5\n• -30 <= nums[i] <= 30\n• Do not use division. O(1) extra space (excluding output array).",
    "hint": "Prefix Products + Suffix Products:\n1. First pass: fill answer[i] with the product of all elements to the left.\n2. Second pass: maintain a running rightProduct from the end and multiply into answer[i]."
  },
  "Continuous Subarray Sum": {
    "questionTitle": "Continuous Subarray Sum (Multiple of K)",
    "desc": "Given an integer array nums and an integer k, return true if nums has a good subarray of size >= 2 whose sum is a multiple of k.",
    "inputExample": "nums = [23, 2, 4, 6, 7], k = 6",
    "outputExample": "true",
    "explanation": "[2, 4] is a continuous subarray of size 2 whose elements sum up to 6.",
    "constraints": "• 1 <= nums.length <= 10^5\n• 0 <= nums[i] <= 10^9\n• 1 <= k <= 2^31 - 1",
    "hint": "Prefix Sum Modulo Hash Map:\n• If (sum[j] % k) === (sum[i] % k), then the subarray between i and j is a multiple of k.\n• Store first occurrence index of (runningSum % k). Return true if (j - i >= 2)."
  },
  "Subarray Sum Divisible by K": {
    "questionTitle": "Subarray Sums Divisible by K",
    "desc": "Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.",
    "inputExample": "nums = [4, 5, 0, -2, -3, 1], k = 5",
    "outputExample": "7",
    "explanation": "There are 7 subarrays with sum divisible by 5: [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3].",
    "constraints": "• 1 <= nums.length <= 3 * 10^4\n• -10^4 <= nums[i] <= 10^4\n• 2 <= k <= 10^4",
    "hint": "Prefix Modulo Frequency Map:\n• Remainder = ((runningSum % k) + k) % k (handles negative numbers).\n• Add count of this remainder from map, then increment map[remainder]."
  },
  "Find Pivot Index": {
    "questionTitle": "Find Pivot Index",
    "desc": "Given an array of integers nums, calculate the pivot index of this array where the sum of numbers strictly to the left equals the sum of numbers strictly to the right. Return the leftmost pivot index.",
    "inputExample": "nums = [1, 7, 3, 6, 5, 6]",
    "outputExample": "3",
    "explanation": "Pivot index is 3: left sum = nums[0] + nums[1] + nums[2] = 11, right sum = nums[4] + nums[5] = 11.",
    "constraints": "• 1 <= nums.length <= 10^4\n• -1000 <= nums[i] <= 1000",
    "hint": "TotalSum vs LeftSum:\n• totalSum = sum(nums).\n• As you iterate, rightSum = totalSum - leftSum - nums[i].\n• If leftSum === rightSum, return current index i. Otherwise leftSum += nums[i]."
  },
  "Maximum Subarray": {
    "questionTitle": "Maximum Subarray (Kadane's Algorithm)",
    "desc": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "inputExample": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
    "outputExample": "6",
    "explanation": "The subarray [4, -1, 2, 1] has the largest sum 6.",
    "constraints": "• 1 <= nums.length <= 10^5\n• -10^4 <= nums[i] <= 10^4",
    "hint": "Kadane's Dynamic Programming:\n• currentSum = Math.max(nums[i], currentSum + nums[i]).\n• maxSum = Math.max(maxSum, currentSum).\n• Linear O(n) one-pass solution."
  },
  "Maximum Product Subarray": {
    "questionTitle": "Maximum Product Subarray",
    "desc": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    "inputExample": "nums = [2, 3, -2, 4]",
    "outputExample": "6",
    "explanation": "[2, 3] has the largest product 6.",
    "constraints": "• 1 <= nums.length <= 2 * 10^4\n• -10 <= nums[i] <= 10",
    "hint": "Track Min and Max Products:\n• A negative number multiplied by a min negative product becomes a large positive!\n• Maintain maxProd and minProd at each step: if nums[i] < 0, swap(maxProd, minProd).\n• maxProd = max(num, maxProd * num), minProd = min(num, minProd * num)."
  },
  "Maximum Sum Circular Subarray": {
    "questionTitle": "Maximum Sum Circular Subarray",
    "desc": "Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.",
    "inputExample": "nums = [1, -2, 3, -2]",
    "outputExample": "3",
    "explanation": "Subarray [3] has maximum sum 3.",
    "constraints": "• n == nums.length\n• 1 <= n <= 3 * 10^4\n• -3 * 10^4 <= nums[i] <= 3 * 10^4",
    "hint": "Circular Max = max(Normal Kadane, TotalSum - MinSubarraySum):\n• If maxKadane < 0 (all numbers negative), return maxKadane.\n• Otherwise return max(maxKadane, totalSum - minKadane)."
  },
  "Maximum Absolute Sum of Any Subarray": {
    "questionTitle": "Maximum Absolute Sum of Any Subarray",
    "desc": "You are given an integer array nums. The absolute sum of a subarray [nums[l], ..., nums[r]] is abs(nums[l] + ... + nums[r]). Return the maximum absolute sum of any subarray.",
    "inputExample": "nums = [1, -3, 2, 3, -4]",
    "outputExample": "5",
    "explanation": "Subarray [2, 3] has absolute sum abs(5) = 5. Subarray [-3, 2, 3, -4] has absolute sum abs(-2) = 2.",
    "constraints": "• 1 <= nums.length <= 10^5\n• -10^4 <= nums[i] <= 10^4",
    "hint": "Max Prefix - Min Prefix:\n• The maximum subarray sum is the difference between the max prefix sum and min prefix sum!\n• Running prefix sum: return maxPrefix - minPrefix."
  },
  "Reverse a String": {
    "questionTitle": "Reverse a String",
    "desc": "Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.",
    "inputExample": "s = ['h', 'e', 'l', 'l', 'o']",
    "outputExample": "['o', 'l', 'l', 'e', 'h']",
    "explanation": "The characters are reversed in place.",
    "constraints": "• 1 <= s.length <= 10^5\n• O(1) in-place memory",
    "hint": "Classic Two-Pointer Swap:\n• left = 0, right = s.length - 1.\n• While left < right: swap s[left] and s[right]; left++; right--."
  },
  "Valid Palindrome": {
    "questionTitle": "Valid Palindrome",
    "desc": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
    "inputExample": "s = 'A man, a plan, a canal: Panama'",
    "outputExample": "true",
    "explanation": "'amanaplanacanalpanama' is a palindrome.",
    "constraints": "• 1 <= s.length <= 2 * 10^5\n• Consists only of printable ASCII characters.",
    "hint": "Two-Pointer Filtering:\n• left = 0, right = s.length - 1.\n• Skip non-alphanumeric characters with left++ and right--.\n• Compare s[left].toLowerCase() === s[right].toLowerCase()."
  },
  "Valid Palindrome II": {
    "questionTitle": "Valid Palindrome II (At Most One Deletion)",
    "desc": "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    "inputExample": "s = 'abca'",
    "outputExample": "true",
    "explanation": "Delete character 'c' to get 'aba', which is a palindrome.",
    "constraints": "• 1 <= s.length <= 10^5\n• s consists of lowercase English letters.",
    "hint": "Two-Pointer with 1 Skip Chance:\n• When s[left] !== s[right], test both isPalindrome(s, left + 1, right) and isPalindrome(s, left, right - 1)."
  },
  "Longest Palindromic Substring": {
    "questionTitle": "Longest Palindromic Substring",
    "desc": "Given a string s, return the longest palindromic substring in s.",
    "inputExample": "s = 'babad'",
    "outputExample": "'bab' (or 'aba')",
    "explanation": "'bab' and 'aba' are both valid palindromes of length 3.",
    "constraints": "• 1 <= s.length <= 1000\n• s consist of only digits and English letters.",
    "hint": "Expand Around Center:\n• For each index i, expand around center for odd length (i, i) and even length (i, i + 1).\n• Track the longest palindrome boundaries."
  },
  "Palindromic Substrings": {
    "questionTitle": "Palindromic Substrings Count",
    "desc": "Given a string s, return the number of palindromic substrings in it.",
    "inputExample": "s = 'aaa'",
    "outputExample": "6",
    "explanation": "Six palindromic substrings: 'a', 'a', 'a', 'aa', 'aa', 'aaa'.",
    "constraints": "• 1 <= s.length <= 1000",
    "hint": "Expand Around Center Count:\n• Each center (i, i) and (i, i + 1) expands outward as long as characters match; increment count for each match."
  },
  "Find All Anagrams in a String": {
    "questionTitle": "Find All Anagrams in a String",
    "desc": "Given two strings s and p, return an array of all the start indices of p's anagrams in s.",
    "inputExample": "s = 'cbaebabacd', p = 'abc'",
    "outputExample": "[0, 6]",
    "explanation": "The substring with start index = 0 is 'cba', which is an anagram of 'abc'. The substring with start index = 6 is 'bac', which is an anagram of 'abc'.",
    "constraints": "• 1 <= s.length, p.length <= 3 * 10^4",
    "hint": "Fixed Sliding Window Frequency Array:\n• Window size = p.length.\n• Maintain character counts in 26-size arrays and compare frequencies in O(1)."
  },
  "Longest Substring Without Repeating Characters": {
    "questionTitle": "Longest Substring Without Repeating Characters",
    "desc": "Given a string s, find the length of the longest substring without repeating characters.",
    "inputExample": "s = 'abcabcbb'",
    "outputExample": "3",
    "explanation": "The answer is 'abc', with the length of 3.",
    "constraints": "• 0 <= s.length <= 5 * 10^4",
    "hint": "Sliding Window with Last Seen Index Map:\n• If char was seen within current window (seen[c] >= left), jump left = seen[c] + 1.\n• seen[c] = right; maxLen = max(maxLen, right - left + 1)."
  },
  "Longest Substring with K Uniques": {
    "questionTitle": "Longest Substring with K Unique Characters",
    "desc": "Given a string s and an integer k, find the length of the longest substring that contains exactly k unique characters.",
    "inputExample": "s = 'aabacbebebe', k = 3",
    "outputExample": "7",
    "explanation": "'cbebebe' is the longest substring with 3 unique characters ('c', 'b', 'e').",
    "constraints": "• 1 <= s.length <= 10^5\n• 1 <= k <= 26",
    "hint": "Sliding Window Character Map:\n• Expand right adding char to map.\n• When map.size > k, shrink left.\n• When map.size === k, record maxLen = max(maxLen, right - left + 1)."
  },
  "Permutation in String": {
    "questionTitle": "Permutation in String",
    "desc": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
    "inputExample": "s1 = 'ab', s2 = 'eidbaooo'",
    "outputExample": "true",
    "explanation": "s2 contains one permutation of s1 ('ba').",
    "constraints": "• 1 <= s1.length, s2.length <= 10^4",
    "hint": "Sliding Window Character Match:\n• Count char frequency in s1.\n• Slide a window of length s1.length across s2. If frequency counts match, return true."
  },
  "Minimum Window Substring": {
    "questionTitle": "Minimum Window Substring",
    "desc": "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
    "inputExample": "s = 'ADOBECODEBANC', t = 'ABC'",
    "outputExample": "'BANC'",
    "explanation": "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t.",
    "constraints": "• 1 <= s.length, t.length <= 10^5",
    "hint": "Sliding Window with Required Match Count:\n• Track required characters in a map.\n• Expand right until all chars are satisfied.\n• Contract left while window remains valid, tracking smallest window."
  },
  "Substring with Concatenation of All Words": {
    "questionTitle": "Substring with Concatenation of All Words",
    "desc": "You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once.",
    "inputExample": "s = 'barfoothefoobarman', words = ['foo','bar']",
    "outputExample": "[0, 9]",
    "explanation": "Substrings starting at 0 ('barfoo') and 9 ('foobar') are concatenations of words.",
    "constraints": "• 1 <= s.length <= 10^4\n• 1 <= words.length <= 5000",
    "hint": "Chunked Sliding Window:\n• Window length = words.length * wordLen.\n• Slide across s with step size = wordLen."
  },
  "Binary Search": {
    "questionTitle": "Binary Search",
    "desc": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    "inputExample": "nums = [-1, 0, 3, 5, 9, 12], target = 9",
    "outputExample": "4",
    "explanation": "9 exists in nums and its index is 4.",
    "constraints": "• 1 <= nums.length <= 10^4\n• All integers in nums are unique.\n• O(log n) runtime complexity.",
    "hint": "Divide and Conquer:\n• low = 0, high = nums.length - 1.\n• mid = Math.floor((low + high) / 2).\n• If nums[mid] === target return mid; if nums[mid] < target low = mid + 1; else high = mid - 1."
  },
  "Sqrt(x)": {
    "questionTitle": "Sqrt(x) - Integer Square Root",
    "desc": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. Do not use built-in exponent functions.",
    "inputExample": "x = 8",
    "outputExample": "2",
    "explanation": "The square root of 8 is 2.82842..., and since we round down to the nearest integer, 2 is returned.",
    "constraints": "• 0 <= x <= 2^31 - 1",
    "hint": "Binary Search on Search Space [0, x]:\n• low = 0, high = x.\n• If mid * mid <= x, answer = mid; low = mid + 1; else high = mid - 1."
  },
  "Search Insert Position": {
    "questionTitle": "Search Insert Position",
    "desc": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    "inputExample": "nums = [1, 3, 5, 6], target = 5",
    "outputExample": "2",
    "explanation": "5 is found at index 2.",
    "constraints": "• 1 <= nums.length <= 10^4\n• -10^4 <= nums[i], target <= 10^4\n• nums contains distinct values sorted in ascending order.",
    "hint": "Lower Bound Binary Search:\n• When loop terminates (low > high), low is the exact insertion point!"
  },
  "Search in Rotated Sorted Array": {
    "questionTitle": "Search in Rotated Sorted Array",
    "desc": "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    "inputExample": "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
    "outputExample": "4",
    "explanation": "0 is at index 4.",
    "constraints": "• 1 <= nums.length <= 5000\n• All values of nums are unique.\n• O(log n) runtime complexity.",
    "hint": "Identify Which Half is Sorted:\n• If nums[low] <= nums[mid]: left half is sorted. Check if target lies within [nums[low], nums[mid]].\n• Else: right half is sorted. Check if target lies within [nums[mid], nums[high]]."
  },
  "Find Minimum in Rotated Sorted Array": {
    "questionTitle": "Find Minimum in Rotated Sorted Array",
    "desc": "Given the sorted rotated array nums of unique elements, return the minimum element of this array in O(log n) time.",
    "inputExample": "nums = [3, 4, 5, 1, 2]",
    "outputExample": "1",
    "explanation": "The original array was [1, 2, 3, 4, 5] rotated 3 times.",
    "constraints": "• n == nums.length\n• 1 <= n <= 5000\n• All elements are unique.",
    "hint": "Compare with Right Boundary:\n• If nums[mid] > nums[high]: min is in right half -> low = mid + 1.\n• Else: min is at mid or in left half -> high = mid."
  },
  "Find Peak Element": {
    "questionTitle": "Find Peak Element",
    "desc": "A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index.",
    "inputExample": "nums = [1, 2, 3, 1]",
    "outputExample": "2",
    "explanation": "3 is a peak element and your function should return index 2.",
    "constraints": "• 1 <= nums.length <= 1000\n• O(log n) runtime.",
    "hint": "Binary Search on Slope:\n• If nums[mid] < nums[mid + 1]: we are on an upward slope; a peak must exist to the right -> low = mid + 1.\n• Else: downward slope; peak exists at mid or to left -> high = mid."
  },
  "Find First and Last Position of Element": {
    "questionTitle": "Find First and Last Position of Element in Sorted Array",
    "desc": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value in O(log n). If target is not found, return [-1, -1].",
    "inputExample": "nums = [5, 7, 7, 8, 8, 10], target = 8",
    "outputExample": "[3, 4]",
    "explanation": "8 starts at index 3 and ends at index 4.",
    "constraints": "• 0 <= nums.length <= 10^5\n• -10^9 <= target <= 10^9",
    "hint": "Two Binary Searches:\n1. Search for first occurrence: when nums[mid] === target, record mid and continue searching left (high = mid - 1).\n2. Search for last occurrence: when nums[mid] === target, record mid and continue searching right (low = mid + 1)."
  },
  "Find kth rotation": {
    "questionTitle": "Find Number of Rotations in Sorted Array",
    "desc": "Given an ascending sorted rotated array of distinct integers, find the rotation count k (number of times the sorted array was shifted).",
    "inputExample": "arr = [15, 18, 2, 3, 6, 12]",
    "outputExample": "2",
    "explanation": "Array [2, 3, 6, 12, 15, 18] was rotated 2 times to the right.",
    "constraints": "• 1 <= arr.length <= 10^5\n• All elements are distinct.",
    "hint": "Index of the Minimum Element:\n• The number of rotations is simply the index of the minimum element in the rotated array!"
  },
  "Count Occurrences": {
    "questionTitle": "Count Occurrences in Sorted Array",
    "desc": "Given a sorted array arr and a number x, write a function that counts the occurrences of x in arr in O(log n) time.",
    "inputExample": "arr = [1, 1, 2, 2, 2, 2, 3], x = 2",
    "outputExample": "4",
    "explanation": "2 occurs 4 times in the array.",
    "constraints": "• 1 <= arr.length <= 10^5\n• O(log n) runtime required.",
    "hint": "Last Index - First Index + 1:\n• Find first occurrence index using binary search.\n• Find last occurrence index using binary search.\n• Return (last - first + 1) or 0 if not found."
  },
  "Ceiling in a Sorted Array": {
    "questionTitle": "Ceil The Floor in a Sorted Array",
    "desc": "Given a sorted array and a value x, the ceiling of x is the smallest element in array greater than or equal to x, and the floor is the greatest element smaller than or equal to x.",
    "inputExample": "arr = [1, 2, 8, 10, 10, 12, 19], x = 5",
    "outputExample": "Floor: 2, Ceiling: 8",
    "explanation": "Largest element <= 5 is 2. Smallest element >= 5 is 8.",
    "constraints": "• 1 <= arr.length <= 10^5",
    "hint": "Binary Search Floor and Ceil:\n• If arr[mid] <= x: floor = arr[mid], low = mid + 1.\n• If arr[mid] >= x: ceil = arr[mid], high = mid - 1."
  },
  "Floor in a Sorted Array": {
    "questionTitle": "Floor in a Sorted Array",
    "desc": "Given a sorted array arr of distinct integers and a value x, find the index of the largest element in arr that is smaller than or equal to x.",
    "inputExample": "arr = [1, 2, 8, 10, 11, 12, 19], x = 0",
    "outputExample": "-1",
    "explanation": "No element is smaller than or equal to 0, so floor does not exist (-1).",
    "constraints": "• 1 <= arr.length <= 10^5",
    "hint": "Binary Search Condition:\n• If arr[mid] <= x: answer = mid, low = mid + 1.\n• Else high = mid - 1."
  },
  "Koko Eating Bananas": {
    "questionTitle": "Koko Eating Bananas",
    "desc": "Koko loves to eat bananas. There are n piles of bananas. She has h hours to eat all bananas. Return the minimum integer eating speed k such that she can eat all the bananas within h hours.",
    "inputExample": "piles = [3, 6, 7, 11], h = 8",
    "outputExample": "4",
    "explanation": "At speed 4, Koko can finish all piles in 1 + 2 + 2 + 3 = 8 hours.",
    "constraints": "• 1 <= piles.length <= 10^4\n• piles.length <= h <= 10^9",
    "hint": "Binary Search on Answer Range [1, max(piles)]:\n• Helper canEat(speed): sum of Math.ceil(pile / speed).\n• If totalHours <= h: possible -> high = mid; else low = mid + 1."
  },
  "Capacity To Ship Packages Within D Days": {
    "questionTitle": "Capacity To Ship Packages Within D Days",
    "desc": "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all packages being shipped within days days.",
    "inputExample": "weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5",
    "outputExample": "15",
    "explanation": "A ship capacity of 15 allows shipping: [1..5] day 1 (15), [6,7] day 2 (13), [8] day 3 (8), [9] day 4 (9), [10] day 5 (10).",
    "constraints": "• 1 <= days <= weights.length <= 5 * 10^4",
    "hint": "Binary Search on Capacity [max(weights), sum(weights)]:\n• Helper canShip(cap): counts days needed.\n• If daysNeeded <= days: high = mid; else low = mid + 1."
  },
  "Min Speed to Arrive on Time": {
    "questionTitle": "Minimum Speed to Arrive on Time",
    "desc": "You are given floating integer hour representing time available to reach office. Return minimum positive integer speed that all trains must travel, or -1 if impossible.",
    "inputExample": "dist = [1, 3, 2], hour = 6",
    "outputExample": "1",
    "explanation": "At speed 1: 1/1 = 1 hr, wait until hr 1. 3/1 = 3 hr, wait until hr 4. 2/1 = 2 hr. Total 6 hours.",
    "constraints": "• n == dist.length\n• 1 <= n <= 10^5\n• 1 <= hour <= 10^9",
    "hint": "Binary Search on Speed [1, 10^7]:\n• Note: Last train does not require waiting for integer hour!"
  },
  "Aggressive cows": {
    "questionTitle": "Aggressive Cows (Largest Minimum Distance)",
    "desc": "You are given an array of stalls positions and an integer k (cows). Assign cows to stalls such that the minimum distance between any two cows is as large as possible.",
    "inputExample": "stalls = [1, 2, 8, 4, 9], k = 3",
    "outputExample": "3",
    "explanation": "Place cows at stalls [1, 4, 8]. The minimum distance is min(4-1, 8-4) = 3.",
    "constraints": "• 2 <= k <= stalls.length <= 10^5",
    "hint": "Sort Stalls + Binary Search on Distance:\n• Range: [1, stalls[n-1] - stalls[0]].\n• Helper canPlace(dist): greedily place cows if current - last >= dist."
  },
  "Min number of days to make m bouquets": {
    "questionTitle": "Minimum Number of Days to Make m Bouquets",
    "desc": "You have bloomDay array and integers m (bouquets) and k (adjacent flowers per bouquet). Return minimum days to make m bouquets, or -1 if impossible.",
    "inputExample": "bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1",
    "outputExample": "3",
    "explanation": "After day 3: [x, _, x, _, x], which gives 3 bouquets of size 1.",
    "constraints": "• 1 <= m * k <= bloomDay.length <= 10^5",
    "hint": "Binary Search on Days [min(bloom), max(bloom)]:\n• Count consecutive bloomed flowers / k."
  },
  "Magnetic Force Between Two Balls": {
    "questionTitle": "Magnetic Force Between Two Balls",
    "desc": "Given position array and m balls, distribute balls such that minimum magnetic force between any two balls is maximized.",
    "inputExample": "position = [1, 2, 3, 4, 7], m = 3",
    "outputExample": "3",
    "explanation": "Place balls at [1, 4, 7]. Minimum force is 3.",
    "constraints": "• 2 <= m <= position.length <= 10^5",
    "hint": "Identical to Aggressive Cows:\n• Sort positions and binary search max-min distance."
  },
  "Allocate Minimum Number of Pages": {
    "questionTitle": "Allocate Minimum Number of Pages (Book Allocation)",
    "desc": "Given array of pages of n books and m students, allocate books consecutively to students such that the maximum number of pages allocated to any student is minimized.",
    "inputExample": "pages = [12, 34, 67, 90], m = 2",
    "outputExample": "113",
    "explanation": "Student 1: [12, 34, 67] -> 113 pages. Student 2: [90] -> 90 pages. Max is 113.",
    "constraints": "• 1 <= m <= pages.length <= 10^5",
    "hint": "Binary Search on Max Pages [max(pages), sum(pages)]:\n• Greedily allocate books to current student until sum exceeds capacity, then assign to next student."
  },
  "Split Array Largest Sum": {
    "questionTitle": "Split Array Largest Sum",
    "desc": "Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.",
    "inputExample": "nums = [7, 2, 5, 10, 8], k = 2",
    "outputExample": "18",
    "explanation": "Split into [7, 2, 5] and [10, 8]. Max sum is 18.",
    "constraints": "• 1 <= nums.length <= 1000\n• 1 <= k <= min(50, nums.length)",
    "hint": "Binary Search Equivalent to Book Allocation:\n• Search range: [max(nums), sum(nums)]."
  },
  "Search a 2D Matrix": {
    "questionTitle": "Search a 2D Matrix (Strictly Sorted)",
    "desc": "Write an efficient algorithm that searches for a value target in an m x n integer matrix where each row is sorted and the first integer of each row is greater than the last integer of previous row.",
    "inputExample": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    "outputExample": "true",
    "explanation": "3 is found in the first row.",
    "constraints": "• m, n <= 100\n• O(log(m * n)) time.",
    "hint": "Virtual 1D Array:\n• Treat matrix as 1D array of size m * n.\n• row = Math.floor(mid / n), col = mid % n."
  },
  "Search a 2D Matrix II": {
    "questionTitle": "Search a 2D Matrix II (Rows & Columns Sorted)",
    "desc": "Write an efficient algorithm that searches for a target value in an m x n integer matrix where integers in each row and column are sorted in ascending order.",
    "inputExample": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
    "outputExample": "true",
    "explanation": "5 exists in the matrix.",
    "constraints": "• m, n <= 300\n• O(m + n) runtime.",
    "hint": "Top-Right Corner Search (Staircase Search):\n• Start at (row = 0, col = n - 1).\n• If current === target, return true.\n• If current > target, col-- (entire column is too large).\n• If current < target, row++ (entire row is too small)."
  },
  "Kth Smallest Element in Sorted Matrix": {
    "questionTitle": "Kth Smallest Element in a Sorted Matrix",
    "desc": "Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.",
    "inputExample": "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
    "outputExample": "13",
    "explanation": "The elements in sorted order are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13.",
    "constraints": "• n == matrix.length\n• 1 <= n <= 300\n• 1 <= k <= n^2",
    "hint": "Binary Search on Value Range [matrix[0][0], matrix[n-1][n-1]]:\n• Count elements <= mid using O(n) staircase walk."
  },
  "Matrix Median": {
    "questionTitle": "Matrix Median in Row-Wise Sorted Matrix",
    "desc": "Given a row-wise sorted matrix of size R x C where R and C are always odd, find the median of the matrix.",
    "inputExample": "matrix = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]",
    "outputExample": "5",
    "explanation": "Sorted array is [1, 2, 3, 3, 5, 6, 6, 9, 9], median is 5.",
    "constraints": "• R, C are odd\n• 1 <= R, C <= 500",
    "hint": "Binary Search on [min, max]:\n• Desired count of elements <= median is ((R * C) + 1) / 2.\n• Count per row with upper_bound."
  },
  "Next Greater Element I": {
    "questionTitle": "Next Greater Element I",
    "desc": "The next greater element of some element x in an array is the first greater element that is to the right of x in the same array. Find next greater element for each query.",
    "inputExample": "nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]",
    "outputExample": "[-1, 3, -1]",
    "explanation": "For 4: no greater element to right in nums2 -> -1. For 1: next greater is 3. For 2: no greater element -> -1.",
    "constraints": "• 1 <= nums1.length <= nums2.length <= 1000",
    "hint": "Monotonic Decreasing Stack + Hash Map:\n• Iterate nums2: while stack is non-empty and top < current, map[pop()] = current.\n• Push current. For remaining in stack, map is -1."
  },
  "Next Greater Element II": {
    "questionTitle": "Next Greater Element II (Circular Array)",
    "desc": "Given a circular integer array nums, return the next greater number for every element in nums.",
    "inputExample": "nums = [1, 2, 1]",
    "outputExample": "[2, -1, 2]",
    "explanation": "First 1's next greater is 2. 2 has no greater (-1). Second 1 circular next greater is 2.",
    "constraints": "• 1 <= nums.length <= 10^4",
    "hint": "Simulate 2x Array Traversal with Modulo:\n• Iterate i from 2n - 1 down to 0.\n• Maintain monotonic stack of elements.\n• Pop while stack.top <= nums[i % n].\n• If i < n, res[i] = stack.length ? stack.top : -1."
  },
  "Daily Temperatures": {
    "questionTitle": "Daily Temperatures",
    "desc": "Given an array of integers temperatures represents daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    "inputExample": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
    "outputExample": "[1, 1, 4, 2, 1, 1, 0, 0]",
    "explanation": "Day 0 (73) waits 1 day for 74. Day 2 (75) waits 4 days for 76.",
    "constraints": "• 1 <= temperatures.length <= 10^5\n• 30 <= temperatures[i] <= 100",
    "hint": "Monotonic Stack of Indices:\n• When current temp > temp[stack.top], prevDay = stack.pop(), answer[prevDay] = currentDay - prevDay."
  },
  "Online Stock Span": {
    "questionTitle": "Online Stock Span",
    "desc": "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day (maximum number of consecutive days for which price <= current price).",
    "inputExample": "next([100, 80, 60, 70, 60, 75, 85])",
    "outputExample": "[1, 1, 1, 2, 1, 4, 6]",
    "explanation": "On day 6 price 85 has span 6 because prices [80, 60, 70, 60, 75, 85] are all <= 85.",
    "constraints": "• At most 10^4 calls to next.",
    "hint": "Monotonic Stack with Accumulated Spans:\n• Store pairs [price, span].\n• While stack.top.price <= price: span += stack.pop().span.\n• Push [price, span] and return span."
  },
  "Largest Rectangle in Histogram": {
    "questionTitle": "Largest Rectangle in Histogram",
    "desc": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "inputExample": "heights = [2, 1, 5, 6, 2, 3]",
    "outputExample": "10",
    "explanation": "Bars 5 and 6 form a rectangle of height 5 and width 2, giving area 10.",
    "constraints": "• 1 <= heights.length <= 10^5\n• 0 <= heights[i] <= 10^4",
    "hint": "Monotonic Increasing Stack:\n• When a shorter bar is encountered, pop previous bars: width = i - stack.top - 1, area = height * width.\n• Track maximum area."
  },
  "Maximal Rectangle": {
    "questionTitle": "Maximal Rectangle in Binary Matrix",
    "desc": "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    "inputExample": "matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]",
    "outputExample": "6",
    "explanation": "The maximal rectangle has area 6 (3x2 block of 1s).",
    "constraints": "• rows, cols <= 200",
    "hint": "Histogram per Row:\n• Convert each row into a histogram by accumulating consecutive 1s from top.\n• Run Largest Rectangle in Histogram on each row."
  },
  "Asteroid Collision": {
    "questionTitle": "Asteroid Collision",
    "desc": "We are given an array asteroids of integers representing asteroids in a row. Small asteroids move right (positive) or left (negative). Find the state of the asteroids after all collisions.",
    "inputExample": "asteroids = [5, 10, -5]",
    "outputExample": "[5, 10]",
    "explanation": "10 and -5 collide resulting in 10. 5 and 10 never collide because both move right.",
    "constraints": "• 2 <= asteroids.length <= 10^4\n• asteroids[i] != 0",
    "hint": "Stack Simulation:\n• Collision happens ONLY when stack top is positive (> 0) and incoming is negative (< 0).\n• If top < abs(curr), pop top and repeat.\n• If top === abs(curr), destroy both (pop and discard curr).\n• If top > abs(curr), destroy curr."
  },
  "Basic Calculator I": {
    "questionTitle": "Basic Calculator I (+, -, Parentheses)",
    "desc": "Given a string s representing a valid expression, implement a basic calculator to evaluate it with '+', '-', '(', ')', and spaces.",
    "inputExample": "s = '(1+(4+5+2)-3)+(6+8)'",
    "outputExample": "23",
    "explanation": "Evaluating the parenthesized expression gives 23.",
    "constraints": "• 1 <= s.length <= 3 * 10^5",
    "hint": "Stack for Sign and Result:\n• Push [result, sign] when encountering '('.\n• Pop and apply sign when encountering ')'."
  },
  "Basic Calculator II": {
    "questionTitle": "Basic Calculator II (+, -, *, /)",
    "desc": "Given a string s which represents an expression, evaluate this expression containing non-negative integers, '+', '-', '*', '/' operators and spaces.",
    "inputExample": "s = '3+2*2'",
    "outputExample": "7",
    "explanation": "Multiplication precedes addition: 2 * 2 = 4, then 3 + 4 = 7.",
    "constraints": "• 1 <= s.length <= 3 * 10^5",
    "hint": "Stack with Operator Precedence:\n• For '+' push num; for '-' push -num.\n• For '*' pop, multiply, push back.\n• For '/' pop, truncate divide, push back.\n• Finally sum all values in stack."
  },
  "Evaluate Reverse Polish Notation": {
    "questionTitle": "Evaluate Reverse Polish Notation (Postfix)",
    "desc": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression and return an integer.",
    "inputExample": "tokens = ['2', '1', '+', '3', '*']",
    "outputExample": "9",
    "explanation": "((2 + 1) * 3) = 9.",
    "constraints": "• 1 <= tokens.length <= 10^4\n• Division truncates toward zero.",
    "hint": "Stack Operand Evaluation:\n• If token is number, push to stack.\n• If operator, pop operand2, pop operand1, apply operator, push result."
  },
  "Decode String": {
    "questionTitle": "Decode String (k[encoded_string])",
    "desc": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.",
    "inputExample": "s = '3[a2[c]]'",
    "outputExample": "'accaccacc'",
    "explanation": "'2[c]' becomes 'cc'. '3[a + cc]' becomes 'accaccacc'.",
    "constraints": "• 1 <= s.length <= 30",
    "hint": "Two Stacks (Count Stack & String Stack):\n• On '[' push currentCount and currentString; reset both.\n• On ']' pop count and prevString, currentString = prevString + currentString.repeat(count)."
  },
  "Backspace String Compare": {
    "questionTitle": "Backspace String Compare ('#' Backspace)",
    "desc": "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
    "inputExample": "s = 'ab#c', t = 'ad#c'",
    "outputExample": "true",
    "explanation": "Both s and t become 'ac'.",
    "constraints": "• 1 <= s.length, t.length <= 200\n• Follow up: O(n) time and O(1) space.",
    "hint": "Stack or Reverse Two-Pointer:\n• Stack: Push chars, pop on '#'. Compare resulting stacks.\n• O(1) space: Traverse backwards from end counting '#' skips."
  }
};

export function getDsaGuideForTask(title) {
  if (allDsaGuidesByTitle[title]) {
    return allDsaGuidesByTitle[title];
  }
  // Case-insensitive or trimmed lookup
  const cleanTitle = (title || "").trim();
  for (const [key, val] of Object.entries(allDsaGuidesByTitle)) {
    if (key.toLowerCase() === cleanTitle.toLowerCase() || cleanTitle.toLowerCase().includes(key.toLowerCase())) {
      return val;
    }
  }
  return {
    questionTitle: title,
    desc: "Solve this algorithmic problem using the required pattern.",
    inputExample: "Input array or values",
    outputExample: "Expected output",
    explanation: "Follow the problem constraints and pattern guide.",
    constraints: "Refer to LeetCode link for full constraints.",
    hint: "Review the pattern approach tab above for step-by-step guidance."
  };
}
