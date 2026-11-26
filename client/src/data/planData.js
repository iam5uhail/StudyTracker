import { lectureNotesData } from './lectureNotesData.js';
import { JAVA_PRACTICE_QUESTIONS } from './javaPracticeData.js';

// Complete 70-Day Target Plan: All 140 Core Java Topics + 140 Core Java Practice Drills
// Daily Target: Exactly 2 Core Java Lectures + 2 Java Practice Drills per Day
export const DEFAULT_START_DATE = "2026-11-21";
const rawPlanDays = [
  {
    "dayNumber": 1,
    "title": "01.introduction to all language & 02. Introduction to java",
    "tasks": [
      {
        "id": "d1-j1",
        "type": "java",
        "title": "01.introduction to all language",
        "num": 1,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d1-j2",
        "type": "java",
        "title": "02. Introduction to java",
        "num": 2,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d1-dsa",
        "type": "dsa",
        "title": "Two Sum II",
        "difficulty": "Medium",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 2,
    "title": "03. Difference between java and python & 04. Java software download and install",
    "tasks": [
      {
        "id": "d2-j1",
        "type": "java",
        "title": "03. Difference between java and python",
        "num": 3,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d2-j2",
        "type": "java",
        "title": "04. Java software download and install",
        "num": 4,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d2-dsa",
        "type": "dsa",
        "title": "3Sum",
        "difficulty": "Medium",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/3sum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 3,
    "title": "05. Steps to create java first program & 06. java program structure and explanation",
    "tasks": [
      {
        "id": "d3-j1",
        "type": "java",
        "title": "05. Steps to create java first program",
        "num": 5,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d3-j2",
        "type": "java",
        "title": "06. java program structure and explanation",
        "num": 6,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d3-dsa",
        "type": "dsa",
        "title": "Sort Colors",
        "difficulty": "Medium",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/sort-colors/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 4,
    "title": "07.compile and run java & 08. main() method explanation",
    "tasks": [
      {
        "id": "d4-j1",
        "type": "java",
        "title": "07.compile and run java",
        "num": 7,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d4-j2",
        "type": "java",
        "title": "08. main() method explanation",
        "num": 8,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d4-dsa",
        "type": "dsa",
        "title": "Move Zeroes",
        "difficulty": "Easy",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/move-zeroes/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 5,
    "title": "09. Explain of compilation and execution & 10. data types",
    "tasks": [
      {
        "id": "d5-j1",
        "type": "java",
        "title": "09. Explain of compilation and execution",
        "num": 9,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d5-j2",
        "type": "java",
        "title": "10. data types",
        "num": 10,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d5-dsa",
        "type": "dsa",
        "title": "Container With Most Water",
        "difficulty": "Medium",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/container-with-most-water/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 6,
    "title": "11.type casting & 12. number system",
    "tasks": [
      {
        "id": "d6-j1",
        "type": "java",
        "title": "11.type casting",
        "num": 11,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d6-j2",
        "type": "java",
        "title": "12. number system",
        "num": 12,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d6-dsa",
        "type": "dsa",
        "title": "Trapping Rain Water",
        "difficulty": "Hard",
        "pattern": "Two-Pointer",
        "topic": "Array",
        "link": "https://leetcode.com/problems/trapping-rain-water/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 7,
    "title": "13. variables & 14. literals and operators",
    "tasks": [
      {
        "id": "d7-j1",
        "type": "java",
        "title": "13. variables",
        "num": 13,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d7-j2",
        "type": "java",
        "title": "14. literals and operators",
        "num": 14,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d7-dsa",
        "type": "dsa",
        "title": "Maximum Sum Subarray of Size K",
        "difficulty": "Easy",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/maximum-average-subarray-i/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 8,
    "title": "15.keywords and identifiers & 16.selection statement",
    "tasks": [
      {
        "id": "d8-j1",
        "type": "java",
        "title": "15.keywords and identifiers",
        "num": 15,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d8-j2",
        "type": "java",
        "title": "16.selection statement",
        "num": 16,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d8-dsa",
        "type": "dsa",
        "title": "Max Consecutive ones",
        "difficulty": "Easy",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/max-consecutive-ones/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 9,
    "title": "17.iteration and loooping - 1 & 18. iteration or looping statement-2",
    "tasks": [
      {
        "id": "d9-j1",
        "type": "java",
        "title": "17.iteration and loooping - 1",
        "num": 17,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d9-j2",
        "type": "java",
        "title": "18. iteration or looping statement-2",
        "num": 18,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d9-dsa",
        "type": "dsa",
        "title": "Max Consecutive ones III",
        "difficulty": "Medium",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/max-consecutive-ones-iii/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 10,
    "title": "19. jump statement & 20. control statement program",
    "tasks": [
      {
        "id": "d10-j1",
        "type": "java",
        "title": "19. jump statement",
        "num": 19,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d10-j2",
        "type": "java",
        "title": "20. control statement program",
        "num": 20,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d10-dsa",
        "type": "dsa",
        "title": "Subarray Product Less Than K",
        "difficulty": "Medium",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/subarray-product-less-than-k/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 11,
    "title": "21. star pattern & 22. Number & Albhabet pattern",
    "tasks": [
      {
        "id": "d11-j1",
        "type": "java",
        "title": "21. star pattern",
        "num": 21,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d11-j2",
        "type": "java",
        "title": "22. Number & Albhabet pattern",
        "num": 22,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d11-dsa",
        "type": "dsa",
        "title": "Sliding Window Maximum",
        "difficulty": "Hard",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/sliding-window-maximum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 12,
    "title": "23. Programming paradigm & 24. Oops concept",
    "tasks": [
      {
        "id": "d12-j1",
        "type": "java",
        "title": "23. Programming paradigm",
        "num": 23,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d12-j2",
        "type": "java",
        "title": "24. Oops concept",
        "num": 24,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d12-dsa",
        "type": "dsa",
        "title": "Subarray with k distinct integers",
        "difficulty": "Hard",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 13,
    "title": "25. Constructor & 26. Deep explanation of object creation",
    "tasks": [
      {
        "id": "d13-j1",
        "type": "java",
        "title": "25. Constructor",
        "num": 25,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d13-j2",
        "type": "java",
        "title": "26. Deep explanation of object creation",
        "num": 26,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d13-dsa",
        "type": "dsa",
        "title": "Fruits Into Baskets",
        "difficulty": "Medium",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/fruit-into-baskets/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 14,
    "title": "27. Relationship in java classes & 28. Relationship in java classes - 2",
    "tasks": [
      {
        "id": "d14-j1",
        "type": "java",
        "title": "27. Relationship in java classes",
        "num": 27,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d14-j2",
        "type": "java",
        "title": "28. Relationship in java classes - 2",
        "num": 28,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d14-dsa",
        "type": "dsa",
        "title": "Minimum Size Subarray Sum",
        "difficulty": "Medium",
        "pattern": "Sliding Window",
        "topic": "Array",
        "link": "https://leetcode.com/problems/minimum-size-subarray-sum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 15,
    "title": "29. Relationship in java classes - 3 & 30. Relationship in java classes - 4",
    "tasks": [
      {
        "id": "d15-j1",
        "type": "java",
        "title": "29. Relationship in java classes - 3",
        "num": 29,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d15-j2",
        "type": "java",
        "title": "30. Relationship in java classes - 4",
        "num": 30,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d15-dsa",
        "type": "dsa",
        "title": "Subarray Sum Equals K",
        "difficulty": "Medium",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/subarray-sum-equals-k/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 16,
    "title": "31. Polymorphism - 1 & 32. Polymorphism - 2",
    "tasks": [
      {
        "id": "d16-j1",
        "type": "java",
        "title": "31. Polymorphism - 1",
        "num": 31,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d16-j2",
        "type": "java",
        "title": "32. Polymorphism - 2",
        "num": 32,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d16-dsa",
        "type": "dsa",
        "title": "Matrix Block Sum (Running Sum of 2D Array)",
        "difficulty": "Medium",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/matrix-block-sum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 17,
    "title": "33. Data hiding and abstraction & 34. Interfaces in java",
    "tasks": [
      {
        "id": "d17-j1",
        "type": "java",
        "title": "33. Data hiding and abstraction",
        "num": 33,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d17-j2",
        "type": "java",
        "title": "34. Interfaces in java",
        "num": 34,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d17-dsa",
        "type": "dsa",
        "title": "Product of Array Except Self",
        "difficulty": "Medium",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/product-of-array-except-self/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 18,
    "title": "35. Encapsulation in java & 36. this keyword",
    "tasks": [
      {
        "id": "d18-j1",
        "type": "java",
        "title": "35. Encapsulation in java",
        "num": 35,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d18-j2",
        "type": "java",
        "title": "36. this keyword",
        "num": 36,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d18-dsa",
        "type": "dsa",
        "title": "Continuous Subarray Sum",
        "difficulty": "Medium",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/continuous-subarray-sum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 19,
    "title": "37. super and final keyword & 38. static keyword",
    "tasks": [
      {
        "id": "d19-j1",
        "type": "java",
        "title": "37. super and final keyword",
        "num": 37,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d19-j2",
        "type": "java",
        "title": "38. static keyword",
        "num": 38,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d19-dsa",
        "type": "dsa",
        "title": "Subarray Sum Divisible by K",
        "difficulty": "Medium",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 20,
    "title": "39. nested classes in java & 40. static method and static nested classes",
    "tasks": [
      {
        "id": "d20-j1",
        "type": "java",
        "title": "39. nested classes in java",
        "num": 39,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d20-j2",
        "type": "java",
        "title": "40. static method and static nested classes",
        "num": 40,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d20-dsa",
        "type": "dsa",
        "title": "Find Pivot Index",
        "difficulty": "Easy",
        "pattern": "Prefix Sum",
        "topic": "Array",
        "link": "https://leetcode.com/problems/find-pivot-index/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 21,
    "title": "41. packages -1 & 42. packages -2",
    "tasks": [
      {
        "id": "d21-j1",
        "type": "java",
        "title": "41. packages -1",
        "num": 41,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d21-j2",
        "type": "java",
        "title": "42. packages -2",
        "num": 42,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d21-dsa",
        "type": "dsa",
        "title": "Maximum Subarray",
        "difficulty": "Medium",
        "pattern": "Kadane's Algorithm",
        "topic": "Array",
        "link": "https://leetcode.com/problems/maximum-subarray/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 22,
    "title": "43. Packages -3 & 44. GUI in java",
    "tasks": [
      {
        "id": "d22-j1",
        "type": "java",
        "title": "43. Packages -3",
        "num": 43,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d22-j2",
        "type": "java",
        "title": "44. GUI in java",
        "num": 44,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d22-dsa",
        "type": "dsa",
        "title": "Maximum Product Subarray",
        "difficulty": "Medium",
        "pattern": "Kadane's Algorithm",
        "topic": "Array",
        "link": "https://leetcode.com/problems/maximum-product-subarray/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 23,
    "title": "45. Event handling in AWT & 46. Tic Toe - 1",
    "tasks": [
      {
        "id": "d23-j1",
        "type": "java",
        "title": "45. Event handling in AWT",
        "num": 45,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d23-j2",
        "type": "java",
        "title": "46. Tic Toe - 1",
        "num": 46,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d23-dsa",
        "type": "dsa",
        "title": "Maximum Sum Circular Subarray",
        "difficulty": "Medium",
        "pattern": "Kadane's Algorithm",
        "topic": "Array",
        "link": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 24,
    "title": "47. Tic Toe -2 & 48. Tic Toe -3",
    "tasks": [
      {
        "id": "d24-j1",
        "type": "java",
        "title": "47. Tic Toe -2",
        "num": 47,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d24-j2",
        "type": "java",
        "title": "48. Tic Toe -3",
        "num": 48,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d24-dsa",
        "type": "dsa",
        "title": "Maximum Absolute Sum of Any Subarray",
        "difficulty": "Medium",
        "pattern": "Kadane's Algorithm",
        "topic": "Array",
        "link": "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 25,
    "title": "49. Tic Toe -4 & 50. Error and exception",
    "tasks": [
      {
        "id": "d25-j1",
        "type": "java",
        "title": "49. Tic Toe -4",
        "num": 49,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d25-j2",
        "type": "java",
        "title": "50. Error and exception",
        "num": 50,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d25-dsa",
        "type": "dsa",
        "title": "Reverse a String",
        "difficulty": "Easy",
        "pattern": "Two-Pointer (Palindrome)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/reverse-string/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 26,
    "title": "51 checked and unchecked exception & 52. throws keyword and try-catch block",
    "tasks": [
      {
        "id": "d26-j1",
        "type": "java",
        "title": "51 checked and unchecked exception",
        "num": 51,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d26-j2",
        "type": "java",
        "title": "52. throws keyword and try-catch block",
        "num": 52,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d26-dsa",
        "type": "dsa",
        "title": "Valid Palindrome",
        "difficulty": "Easy",
        "pattern": "Two-Pointer (Palindrome)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/valid-palindrome/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 27,
    "title": "53. try-catch block combination & 54. try-catch block combination",
    "tasks": [
      {
        "id": "d27-j1",
        "type": "java",
        "title": "53. try-catch block combination",
        "num": 53,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d27-j2",
        "type": "java",
        "title": "54. try-catch block combination",
        "num": 54,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d27-dsa",
        "type": "dsa",
        "title": "Valid Palindrome II",
        "difficulty": "Easy",
        "pattern": "Two-Pointer (Palindrome)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/valid-palindrome-ii/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 28,
    "title": "55. String introduction & 56. String class constructor and methods",
    "tasks": [
      {
        "id": "d28-j1",
        "type": "java",
        "title": "55. String introduction",
        "num": 55,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d28-j2",
        "type": "java",
        "title": "56. String class constructor and methods",
        "num": 56,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d28-dsa",
        "type": "dsa",
        "title": "Longest Palindromic Substring",
        "difficulty": "Medium",
        "pattern": "Two-Pointer (Palindrome)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/longest-palindromic-substring/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 29,
    "title": "57. StringBuffer, Stringbuilder & 58. String Program-1",
    "tasks": [
      {
        "id": "d29-j1",
        "type": "java",
        "title": "57. StringBuffer, Stringbuilder",
        "num": 57,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d29-j2",
        "type": "java",
        "title": "58. String Program-1",
        "num": 58,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d29-dsa",
        "type": "dsa",
        "title": "Palindromic Substrings",
        "difficulty": "Medium",
        "pattern": "Two-Pointer (Palindrome)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/palindromic-substrings/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 30,
    "title": "59. String Program-2 & 60. Multithreading Introduction",
    "tasks": [
      {
        "id": "d30-j1",
        "type": "java",
        "title": "59. String Program-2",
        "num": 59,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d30-j2",
        "type": "java",
        "title": "60. Multithreading Introduction",
        "num": 60,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d30-dsa",
        "type": "dsa",
        "title": "Find All Anagrams in a String",
        "difficulty": "Medium",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 31,
    "title": "61.Thread creation-1 & 62.Thread creation-2",
    "tasks": [
      {
        "id": "d31-j1",
        "type": "java",
        "title": "61.Thread creation-1",
        "num": 61,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d31-j2",
        "type": "java",
        "title": "62.Thread creation-2",
        "num": 62,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d31-dsa",
        "type": "dsa",
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 32,
    "title": "63.Thread class methods-1 & 64.Thread class methods-2",
    "tasks": [
      {
        "id": "d32-j1",
        "type": "java",
        "title": "63.Thread class methods-1",
        "num": 63,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d32-j2",
        "type": "java",
        "title": "64.Thread class methods-2",
        "num": 64,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d32-dsa",
        "type": "dsa",
        "title": "Longest Substring with K Uniques",
        "difficulty": "Medium",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 33,
    "title": "65.Thread class methods-3 & 66.Synchronization-1",
    "tasks": [
      {
        "id": "d33-j1",
        "type": "java",
        "title": "65.Thread class methods-3",
        "num": 65,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d33-j2",
        "type": "java",
        "title": "66.Synchronization-1",
        "num": 66,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d33-dsa",
        "type": "dsa",
        "title": "Permutation in String",
        "difficulty": "Medium",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/permutation-in-string/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 34,
    "title": "67.Synchronization-2 & 68.Synchronization-3",
    "tasks": [
      {
        "id": "d34-j1",
        "type": "java",
        "title": "67.Synchronization-2",
        "num": 67,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d34-j2",
        "type": "java",
        "title": "68.Synchronization-3",
        "num": 68,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d34-dsa",
        "type": "dsa",
        "title": "Minimum Window Substring",
        "difficulty": "Hard",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/minimum-window-substring/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 35,
    "title": "69.Threadgroup class & Threadpool framework & 70.Callable and future interface",
    "tasks": [
      {
        "id": "d35-j1",
        "type": "java",
        "title": "69.Threadgroup class & Threadpool framework",
        "num": 69,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d35-j2",
        "type": "java",
        "title": "70.Callable and future interface",
        "num": 70,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d35-dsa",
        "type": "dsa",
        "title": "Substring with Concatenation of All Words",
        "difficulty": "Hard",
        "pattern": "Sliding Window (String)",
        "topic": "Strings",
        "link": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 36,
    "title": "71. Java IO and Byte Streams & 72.Character Stream and dynamic input approach",
    "tasks": [
      {
        "id": "d36-j1",
        "type": "java",
        "title": "71. Java IO and Byte Streams",
        "num": 71,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d36-j2",
        "type": "java",
        "title": "72.Character Stream and dynamic input approach",
        "num": 72,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d36-dsa",
        "type": "dsa",
        "title": "Binary Search",
        "difficulty": "Easy",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/binary-search/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 37,
    "title": "73.Byte Stream Class & 74.Character Stream Class",
    "tasks": [
      {
        "id": "d37-j1",
        "type": "java",
        "title": "73.Byte Stream Class",
        "num": 73,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d37-j2",
        "type": "java",
        "title": "74.Character Stream Class",
        "num": 74,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d37-dsa",
        "type": "dsa",
        "title": "Sqrt(x)",
        "difficulty": "Easy",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/sqrtx/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 38,
    "title": "75.File Handling with Programs & 76.Serialization, Deserialaization & Externalization",
    "tasks": [
      {
        "id": "d38-j1",
        "type": "java",
        "title": "75.File Handling with Programs",
        "num": 75,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d38-j2",
        "type": "java",
        "title": "76.Serialization, Deserialaization & Externalization",
        "num": 76,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d38-dsa",
        "type": "dsa",
        "title": "Search Insert Position",
        "difficulty": "Easy",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-insert-position/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 39,
    "title": "77.Notepad-1 & 78.Notepad-2",
    "tasks": [
      {
        "id": "d39-j1",
        "type": "java",
        "title": "77.Notepad-1",
        "num": 77,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d39-j2",
        "type": "java",
        "title": "78.Notepad-2",
        "num": 78,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d39-dsa",
        "type": "dsa",
        "title": "Search in Rotated Sorted Array",
        "difficulty": "Medium",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 40,
    "title": "79.Notepad-3 & 80.Networking Introduction",
    "tasks": [
      {
        "id": "d40-j1",
        "type": "java",
        "title": "79.Notepad-3",
        "num": 79,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d40-j2",
        "type": "java",
        "title": "80.Networking Introduction",
        "num": 80,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d40-dsa",
        "type": "dsa",
        "title": "Find Minimum in Rotated Sorted Array",
        "difficulty": "Medium",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 41,
    "title": "81.Socket Programming & 82. RMI (Remote Method Invocation)",
    "tasks": [
      {
        "id": "d41-j1",
        "type": "java",
        "title": "81.Socket Programming",
        "num": 81,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d41-j2",
        "type": "java",
        "title": "82. RMI (Remote Method Invocation)",
        "num": 82,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d41-dsa",
        "type": "dsa",
        "title": "Find Peak Element",
        "difficulty": "Medium",
        "pattern": "Classic Binary Search",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/find-peak-element/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 42,
    "title": "83. Chat Project -1 & 84. Chat Project -2",
    "tasks": [
      {
        "id": "d42-j1",
        "type": "java",
        "title": "83. Chat Project -1",
        "num": 83,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d42-j2",
        "type": "java",
        "title": "84. Chat Project -2",
        "num": 84,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d42-dsa",
        "type": "dsa",
        "title": "Find First and Last Position of Element",
        "difficulty": "Medium",
        "pattern": "Lower / Upper Bound",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 43,
    "title": "85 DSA Introduction & 86 Array-1D",
    "tasks": [
      {
        "id": "d43-j1",
        "type": "java",
        "title": "85 DSA Introduction",
        "num": 85,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d43-j2",
        "type": "java",
        "title": "86 Array-1D",
        "num": 86,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d43-dsa",
        "type": "dsa",
        "title": "Find kth rotation",
        "difficulty": "Easy",
        "pattern": "Lower / Upper Bound",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 44,
    "title": "87 Array-2D & 88 Array-3D",
    "tasks": [
      {
        "id": "d44-j1",
        "type": "java",
        "title": "87 Array-2D",
        "num": 87,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d44-j2",
        "type": "java",
        "title": "88 Array-3D",
        "num": 88,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d44-dsa",
        "type": "dsa",
        "title": "Count Occurrences",
        "difficulty": "Easy",
        "pattern": "Lower / Upper Bound",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 45,
    "title": "89 Matrix, Jagged, Anonymous Array & 90 Array Programs-1",
    "tasks": [
      {
        "id": "d45-j1",
        "type": "java",
        "title": "89 Matrix, Jagged, Anonymous Array",
        "num": 89,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d45-j2",
        "type": "java",
        "title": "90 Array Programs-1",
        "num": 90,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d45-dsa",
        "type": "dsa",
        "title": "Ceiling in a Sorted Array",
        "difficulty": "Easy",
        "pattern": "Lower / Upper Bound",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-insert-position/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 46,
    "title": "91 Array Programs-2 & 92 Array Programs-3",
    "tasks": [
      {
        "id": "d46-j1",
        "type": "java",
        "title": "91 Array Programs-2",
        "num": 91,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d46-j2",
        "type": "java",
        "title": "92 Array Programs-3",
        "num": 92,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d46-dsa",
        "type": "dsa",
        "title": "Floor in a Sorted Array",
        "difficulty": "Easy",
        "pattern": "Lower / Upper Bound",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-insert-position/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 47,
    "title": "93 Collection Framework Introduction & 94 Collection Interface",
    "tasks": [
      {
        "id": "d47-j1",
        "type": "java",
        "title": "93 Collection Framework Introduction",
        "num": 93,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d47-j2",
        "type": "java",
        "title": "94 Collection Interface",
        "num": 94,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d47-dsa",
        "type": "dsa",
        "title": "Koko Eating Bananas",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/koko-eating-bananas/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 48,
    "title": "95 List Interface & ArrayList class & 96 ArrayList-2",
    "tasks": [
      {
        "id": "d48-j1",
        "type": "java",
        "title": "95 List Interface & ArrayList class",
        "num": 95,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d48-j2",
        "type": "java",
        "title": "96 ArrayList-2",
        "num": 96,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d48-dsa",
        "type": "dsa",
        "title": "Capacity To Ship Packages Within D Days",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 49,
    "title": "97 Linked List  & 98 Vector Legacy",
    "tasks": [
      {
        "id": "d49-j1",
        "type": "java",
        "title": "97 Linked List ",
        "num": 97,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d49-j2",
        "type": "java",
        "title": "98 Vector Legacy",
        "num": 98,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d49-dsa",
        "type": "dsa",
        "title": "Min Speed to Arrive on Time",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 50,
    "title": "99 Stack Legacy & 100 Cursor in Collection",
    "tasks": [
      {
        "id": "d50-j1",
        "type": "java",
        "title": "99 Stack Legacy",
        "num": 99,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d50-j2",
        "type": "java",
        "title": "100 Cursor in Collection",
        "num": 100,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d50-dsa",
        "type": "dsa",
        "title": "Aggressive cows",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 51,
    "title": "101 Set Interface & HasSet & 102 LinkedHasSet, SortedSet, NavigableSet,",
    "tasks": [
      {
        "id": "d51-j1",
        "type": "java",
        "title": "101 Set Interface & HasSet",
        "num": 101,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d51-j2",
        "type": "java",
        "title": "102 LinkedHasSet, SortedSet, NavigableSet,",
        "num": 102,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d51-dsa",
        "type": "dsa",
        "title": "Min number of days to make m bouquets",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 52,
    "title": "103 TreeSet & 104 Copmarable & Comparator",
    "tasks": [
      {
        "id": "d52-j1",
        "type": "java",
        "title": "103 TreeSet",
        "num": 103,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d52-j2",
        "type": "java",
        "title": "104 Copmarable & Comparator",
        "num": 104,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d52-dsa",
        "type": "dsa",
        "title": "Magnetic Force Between Two Balls",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 53,
    "title": "105 Queue & 106 Abstract Design Pattern",
    "tasks": [
      {
        "id": "d53-j1",
        "type": "java",
        "title": "105 Queue",
        "num": 105,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d53-j2",
        "type": "java",
        "title": "106 Abstract Design Pattern",
        "num": 106,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d53-dsa",
        "type": "dsa",
        "title": "Allocate Minimum Number of Pages",
        "difficulty": "Medium",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 54,
    "title": "107 Entry interface & HashMap class & 108 LinkedHasMap, IdentityHashMap,WeakHashMap",
    "tasks": [
      {
        "id": "d54-j1",
        "type": "java",
        "title": "107 Entry interface & HashMap class",
        "num": 107,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d54-j2",
        "type": "java",
        "title": "108 LinkedHasMap, IdentityHashMap,WeakHashMap",
        "num": 108,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d54-dsa",
        "type": "dsa",
        "title": "Split Array Largest Sum",
        "difficulty": "Hard",
        "pattern": "Binary Search on Answers",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/split-array-largest-sum/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 55,
    "title": "109 SortedMap, NavigableMap & 110 HashTable",
    "tasks": [
      {
        "id": "d55-j1",
        "type": "java",
        "title": "109 SortedMap, NavigableMap",
        "num": 109,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d55-j2",
        "type": "java",
        "title": "110 HashTable",
        "num": 110,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d55-dsa",
        "type": "dsa",
        "title": "Search a 2D Matrix",
        "difficulty": "Medium",
        "pattern": "Search In 2D Matrix",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-a-2d-matrix/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 56,
    "title": "111 Dictionary, Property, Concurrent Class & 112 Generics",
    "tasks": [
      {
        "id": "d56-j1",
        "type": "java",
        "title": "111 Dictionary, Property, Concurrent Class",
        "num": 111,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d56-j2",
        "type": "java",
        "title": "112 Generics",
        "num": 112,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d56-dsa",
        "type": "dsa",
        "title": "Search a 2D Matrix II",
        "difficulty": "Medium",
        "pattern": "Search In 2D Matrix",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 57,
    "title": "113 Default static method in interface & 114 Lambda Functions",
    "tasks": [
      {
        "id": "d57-j1",
        "type": "java",
        "title": "113 Default static method in interface",
        "num": 113,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d57-j2",
        "type": "java",
        "title": "114 Lambda Functions",
        "num": 114,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d57-dsa",
        "type": "dsa",
        "title": "Kth Smallest Element in Sorted Matrix",
        "difficulty": "Medium",
        "pattern": "Search In 2D Matrix",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 58,
    "title": "115 Predicate,consumer,supplier,Function & 116 Stream Api",
    "tasks": [
      {
        "id": "d58-j1",
        "type": "java",
        "title": "115 Predicate,consumer,supplier,Function",
        "num": 115,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d58-j2",
        "type": "java",
        "title": "116 Stream Api",
        "num": 116,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d58-dsa",
        "type": "dsa",
        "title": "Matrix Median",
        "difficulty": "Hard",
        "pattern": "Search In 2D Matrix",
        "topic": "Binary Search",
        "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 59,
    "title": "117 Method Refrence, Constructor Refrence & 118 Date Time API",
    "tasks": [
      {
        "id": "d59-j1",
        "type": "java",
        "title": "117 Method Refrence, Constructor Refrence",
        "num": 117,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d59-j2",
        "type": "java",
        "title": "118 Date Time API",
        "num": 118,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d59-dsa",
        "type": "dsa",
        "title": "Next Greater Element I",
        "difficulty": "Easy",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/next-greater-element-i/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 60,
    "title": "119 Download & Install Mysql & 120 SQL Queries",
    "tasks": [
      {
        "id": "d60-j1",
        "type": "java",
        "title": "119 Download & Install Mysql",
        "num": 119,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d60-j2",
        "type": "java",
        "title": "120 SQL Queries",
        "num": 120,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d60-dsa",
        "type": "dsa",
        "title": "Next Greater Element II",
        "difficulty": "Medium",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/next-greater-element-ii/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 61,
    "title": "122 JDBC insert, update, delete & 123 JDBC development",
    "tasks": [
      {
        "id": "d61-j1",
        "type": "java",
        "title": "122 JDBC insert, update, delete",
        "num": 122,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d61-j2",
        "type": "java",
        "title": "123 JDBC development",
        "num": 123,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d61-dsa",
        "type": "dsa",
        "title": "Daily Temperatures",
        "difficulty": "Medium",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/daily-temperatures/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 62,
    "title": "124 Billing Software - 1 & 125. Billing Software - 2",
    "tasks": [
      {
        "id": "d62-j1",
        "type": "java",
        "title": "124 Billing Software - 1",
        "num": 124,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d62-j2",
        "type": "java",
        "title": "125. Billing Software - 2",
        "num": 125,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d62-dsa",
        "type": "dsa",
        "title": "Online Stock Span",
        "difficulty": "Medium",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/online-stock-span/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 63,
    "title": "126. Billing Software - 3 & 127. Billing Software - 4",
    "tasks": [
      {
        "id": "d63-j1",
        "type": "java",
        "title": "126. Billing Software - 3",
        "num": 126,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d63-j2",
        "type": "java",
        "title": "127. Billing Software - 4",
        "num": 127,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d63-dsa",
        "type": "dsa",
        "title": "Largest Rectangle in Histogram",
        "difficulty": "Hard",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 64,
    "title": "128 Billing Software - 5 & 129 Billing Software - 6",
    "tasks": [
      {
        "id": "d64-j1",
        "type": "java",
        "title": "128 Billing Software - 5",
        "num": 128,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d64-j2",
        "type": "java",
        "title": "129 Billing Software - 6",
        "num": 129,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d64-dsa",
        "type": "dsa",
        "title": "Maximal Rectangle",
        "difficulty": "Hard",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/maximal-rectangle/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 65,
    "title": "130 Billing Software - 7 & 131 Billing Software - 9",
    "tasks": [
      {
        "id": "d65-j1",
        "type": "java",
        "title": "130 Billing Software - 7",
        "num": 130,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d65-j2",
        "type": "java",
        "title": "131 Billing Software - 9",
        "num": 131,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d65-dsa",
        "type": "dsa",
        "title": "Asteroid Collision",
        "difficulty": "Medium",
        "pattern": "Monotonic Stack",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/asteroid-collision/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 66,
    "title": "132 Billing Software - 10 & 133 Billing Software - 11",
    "tasks": [
      {
        "id": "d66-j1",
        "type": "java",
        "title": "132 Billing Software - 10",
        "num": 132,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d66-j2",
        "type": "java",
        "title": "133 Billing Software - 11",
        "num": 133,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d66-dsa",
        "type": "dsa",
        "title": "Basic Calculator I",
        "difficulty": "Hard",
        "pattern": "Expression Evaluation",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/basic-calculator/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 67,
    "title": "134 Billing Software - 12 & 135 Billing Software - 13",
    "tasks": [
      {
        "id": "d67-j1",
        "type": "java",
        "title": "134 Billing Software - 12",
        "num": 134,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d67-j2",
        "type": "java",
        "title": "135 Billing Software - 13",
        "num": 135,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d67-dsa",
        "type": "dsa",
        "title": "Basic Calculator II",
        "difficulty": "Medium",
        "pattern": "Expression Evaluation",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/basic-calculator-ii/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 68,
    "title": "136 Billing Software - 14 & 137 Billing Software - 15",
    "tasks": [
      {
        "id": "d68-j1",
        "type": "java",
        "title": "136 Billing Software - 14",
        "num": 136,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d68-j2",
        "type": "java",
        "title": "137 Billing Software - 15",
        "num": 137,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d68-dsa",
        "type": "dsa",
        "title": "Evaluate Reverse Polish Notation",
        "difficulty": "Medium",
        "pattern": "Expression Evaluation",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 69,
    "title": "138 Applets - 1 & 139 Applets - 2",
    "tasks": [
      {
        "id": "d69-j1",
        "type": "java",
        "title": "138 Applets - 1",
        "num": 138,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d69-j2",
        "type": "java",
        "title": "139 Applets - 2",
        "num": 139,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d69-dsa",
        "type": "dsa",
        "title": "Decode String",
        "difficulty": "Medium",
        "pattern": "Expression Evaluation",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/decode-string/",
        "completed": false,
        "notes": ""
      }
    ]
  },
  {
    "dayNumber": 70,
    "title": "140 Applets - 3 & 141 Applets - 4",
    "tasks": [
      {
        "id": "d70-j1",
        "type": "java",
        "title": "140 Applets - 3",
        "num": 140,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d70-j2",
        "type": "java",
        "title": "141 Applets - 4",
        "num": 141,
        "completed": false,
        "notes": ""
      },
      {
        "id": "d70-dsa",
        "type": "dsa",
        "title": "Backspace String Compare",
        "difficulty": "Easy",
        "pattern": "Stack Simulation / Undo Operation",
        "topic": "Stack",
        "link": "https://leetcode.com/problems/backspace-string-compare/",
        "completed": false,
        "notes": ""
      }
    ]
  }
];

export const initialPlanDays = rawPlanDays.map(day => {
  const q1Index = (day.dayNumber - 1) * 2;
  const q2Index = (day.dayNumber - 1) * 2 + 1;

  const pq1 = JAVA_PRACTICE_QUESTIONS[q1Index] || {
    id: `p_${day.dayNumber}_1`,
    title: `Day ${day.dayNumber} Practice Drill 1`,
    levelTitle: `Day ${day.dayNumber} Practice`,
    badge: 'Practice Drill',
    tags: ['Core Java', 'Practice'],
    description: `Core Java practice drill for Day ${day.dayNumber}.`
  };

  const pq2 = JAVA_PRACTICE_QUESTIONS[q2Index] || {
    id: `p_${day.dayNumber}_2`,
    title: `Day ${day.dayNumber} Practice Drill 2`,
    levelTitle: `Day ${day.dayNumber} Practice`,
    badge: 'Practice Drill',
    tags: ['Core Java', 'Practice'],
    description: `Core Java practice drill for Day ${day.dayNumber}.`
  };

  const pTask1 = {
    id: `d${day.dayNumber}-p1`,
    type: 'practice',
    questionId: pq1.id,
    levelId: pq1.levelId,
    title: pq1.title,
    levelTitle: pq1.levelTitle,
    badge: pq1.badge || 'Practice Drill',
    tags: pq1.tags || ['Core Java', 'Practice'],
    description: pq1.description,
    sampleInput: pq1.sampleInput || '',
    sampleOutput: pq1.sampleOutput || '',
    starterCode: pq1.starterCode || '',
    solutionCode: pq1.solutionCode || '',
    hints: pq1.hints || [],
    concepts: pq1.concepts || '',
    completed: false,
    notes: ""
  };

  const pTask2 = {
    id: `d${day.dayNumber}-p2`,
    type: 'practice',
    questionId: pq2.id,
    levelId: pq2.levelId,
    title: pq2.title,
    levelTitle: pq2.levelTitle,
    badge: pq2.badge || 'Practice Drill',
    tags: pq2.tags || ['Core Java', 'Practice'],
    description: pq2.description,
    sampleInput: pq2.sampleInput || '',
    sampleOutput: pq2.sampleOutput || '',
    starterCode: pq2.starterCode || '',
    solutionCode: pq2.solutionCode || '',
    hints: pq2.hints || [],
    concepts: pq2.concepts || '',
    completed: false,
    notes: ""
  };

  const javaTasks = (day.tasks || [])
    .filter(t => t.type === 'java')
    .map(t => ({
      ...t,
      notes: lectureNotesData[t.id] || t.notes || ""
    }));

  return {
    ...day,
    tasks: [
      ...javaTasks,
      pTask1,
      pTask2
    ]
  };
});
