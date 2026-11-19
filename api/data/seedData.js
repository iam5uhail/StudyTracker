// Default rich dataset for Java & DSA Pattern learning and custom tracks
const initialTracks = [
  {
    id: "pattern-wise",
    name: "Pattern Wise Sheet",
    badge: "1",
    subtitle: "Master data structures and algorithms pattern by pattern",
    description: "Pattern Wise goes topic by topic to train pattern recognition instead of memorizing individual solutions.",
    icon: "LayoutGrid",
    category: "DSA",
    topics: [
      {
        id: "two-pointers",
        name: "Two Pointers Pattern",
        description: "Optimal linear traversals for sorted arrays, palindromes, and pair finding.",
        items: [
          {
            id: "tp-1",
            title: "Valid Palindrome",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/valid-palindrome/",
            tags: ["Two Pointers", "String"],
            notes: "Clean alphanumeric check using left & right pointers moving towards center.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tp-2",
            title: "Two Sum II - Input Array Is Sorted",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            tags: ["Two Pointers", "Array"],
            notes: "Leverage sorted property: if sum < target, left++; if sum > target, right--.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tp-3",
            title: "3Sum",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/3sum/",
            tags: ["Two Pointers", "Sorting"],
            notes: "Sort array first, fix one element, use two pointers for remaining two. Skip duplicates carefully.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tp-4",
            title: "Container With Most Water",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/container-with-most-water/",
            tags: ["Two Pointers", "Greedy"],
            notes: "Width decreases each step, always advance pointer with smaller height to seek greater area.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tp-5",
            title: "Trapping Rain Water",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/trapping-rain-water/",
            tags: ["Two Pointers", "Dynamic Programming"],
            notes: "Track maxLeft and maxRight pointers. Water trapped at i depends on min(maxL, maxR) - height[i].",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "sliding-window",
        name: "Sliding Window Pattern",
        description: "Subarray and substring problems optimizing from O(N^2) to O(N).",
        items: [
          {
            id: "sw-1",
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            tags: ["Sliding Window", "Greedy"],
            notes: "Track minimum price seen so far and calculate max potential profit at each day.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "sw-2",
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            tags: ["Sliding Window", "Hash Table"],
            notes: "Maintain frequency map/set. Shrink left pointer when duplicate encountered.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "sw-3",
            title: "Longest Repeating Character Replacement",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
            tags: ["Sliding Window", "Hash Table"],
            notes: "Window size - maxFrequency <= k determines whether window remains valid.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "sw-4",
            title: "Minimum Window Substring",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/minimum-window-substring/",
            tags: ["Sliding Window", "Hash Table"],
            notes: "Target map count check. Expand right until all chars covered, shrink left while still valid.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "binary-search",
        name: "Binary Search & Search Space",
        description: "Logarithmic lookup and binary searching on answer spaces.",
        items: [
          {
            id: "bs-1",
            title: "Binary Search",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-search/",
            tags: ["Binary Search"],
            notes: "mid = left + (right - left) / 2 to avoid integer overflow.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "bs-2",
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            tags: ["Binary Search"],
            notes: "One half of rotated array is always strictly sorted. Determine which half and check target range.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "bs-3",
            title: "Find Minimum in Rotated Sorted Array",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            tags: ["Binary Search"],
            notes: "Compare mid with right boundary to decide which half holds the inflection point.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "bs-4",
            title: "Koko Eating Bananas",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/koko-eating-bananas/",
            tags: ["Binary Search on Answer"],
            notes: "Binary search on speed range [1, max(piles)]. Feasibility check counts hours needed.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "bs-5",
            title: "Median of Two Sorted Arrays",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            tags: ["Binary Search", "Divide and Conquer"],
            notes: "Partition smaller array so left partition equals right partition in combined count.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "trees-bfs-dfs",
        name: "Trees, DFS & BFS Traversals",
        description: "Hierarchical data structures, recursion, level-order queues, and BST properties.",
        items: [
          {
            id: "tr-1",
            title: "Invert Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/invert-binary-tree/",
            tags: ["Tree", "DFS"],
            notes: "Swap left and right subtrees recursively.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tr-2",
            title: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            tags: ["Tree", "Recursion"],
            notes: "1 + Math.max(depth(root.left), depth(root.right)).",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tr-3",
            title: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            tags: ["Tree", "BFS", "Queue"],
            notes: "Use Queue. Size of queue at start of while loop equals number of nodes at current level.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tr-4",
            title: "Lowest Common Ancestor of a Binary Search Tree",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            tags: ["Tree", "BST"],
            notes: "If both p and q < root, go left; if both > root, go right; else split point is LCA.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "tr-5",
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            tags: ["Tree", "Design"],
            notes: "Preorder traversal with null marker delimiters.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "dp-patterns",
        name: "Dynamic Programming Core Patterns",
        description: "Overlapping subproblems, state transitions, memoization, and tabulation.",
        items: [
          {
            id: "dp-1",
            title: "Climbing Stairs",
            difficulty: "Easy",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/climbing-stairs/",
            tags: ["DP", "Fibonacci"],
            notes: "dp[i] = dp[i-1] + dp[i-2]. Space reducible to 2 variables.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "dp-2",
            title: "Coin Change",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/coin-change/",
            tags: ["DP", "Unbounded Knapsack"],
            notes: "dp[i] = min(dp[i], 1 + dp[i - coin]) for each coin <= i.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "dp-3",
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/longest-increasing-subsequence/",
            tags: ["DP", "Binary Search"],
            notes: "O(N^2) classic DP or O(N log N) using patience sorting and binary search.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "dp-4",
            title: "Word Break",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/word-break/",
            tags: ["DP", "Trie"],
            notes: "dp[i] is true if any prefix dp[j] is true and substring s[j..i] exists in wordDict.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "dp-5",
            title: "Edit Distance",
            difficulty: "Hard",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/edit-distance/",
            tags: ["DP", "2D Grid"],
            notes: "Matrix DP for insert, delete, and replace transitions between word1 and word2.",
            isSolved: false,
            isRevision: false
          }
        ]
      }
    ]
  },
  {
    id: "java-mastery",
    name: "Java Core & Multithreading",
    badge: "2",
    subtitle: "In-depth Java concepts, memory model, and concurrency for backend engineering",
    description: "Deep dive into JVM internals, memory management, thread safety, and modern Java features.",
    icon: "Coffee",
    category: "Java",
    topics: [
      {
        id: "java-memory",
        name: "Java Memory Model & JVM Internals",
        description: "Heap, Stack, Metaspace, GC algorithms, and object lifecycle.",
        items: [
          {
            id: "jm-1",
            title: "Stack vs Heap Memory Allocation & Pass-by-Value Semantics",
            difficulty: "Easy",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/javase/specs/jls/se17/html/jls-4.html",
            tags: ["Java Core", "Memory"],
            notes: "Java is strictly pass-by-value. For objects, the value passed is the reference address itself.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "jm-2",
            title: "String Constant Pool (SCP) & Immutability Under the Hood",
            difficulty: "Medium",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html",
            tags: ["String", "SCP"],
            notes: "String literals go to SCP; new String() allocates in regular heap. Immutability ensures thread-safety and hash caching.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "jm-3",
            title: "Garbage Collection Generations: G1GC, ZGC & Escape Analysis",
            difficulty: "Hard",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/gctuning/",
            tags: ["JVM", "Garbage Collection"],
            notes: "Eden, Survivor (S0, S1), and Tenured spaces. JIT escape analysis scalar replaces non-escaping objects onto the stack.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "java-collections",
        name: "Collections Framework Internals",
        description: "Internal working of HashMap, ConcurrentHashMap, ArrayList, and TreeMap.",
        items: [
          {
            id: "jc-1",
            title: "Internal Working of HashMap: Hashing, Buckets & Treeify Threshold",
            difficulty: "Medium",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html",
            tags: ["Collections", "HashMap"],
            notes: "Node array (table). In Java 8+, if a bucket reaches 8 nodes (TREEIFY_THRESHOLD) and capacity >= 64, it converts to Red-Black Tree.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "jc-2",
            title: "ConcurrentHashMap: Lock Striping, CAS & Synchronized Bins",
            difficulty: "Hard",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html",
            tags: ["Concurrency", "Collections"],
            notes: "No whole-table lock. Reads are non-blocking via volatile value. Writes lock only the head bin node via CAS and synchronized.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "jc-3",
            title: "Comparable vs Comparator & Custom Sorting Internals",
            difficulty: "Easy",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html",
            tags: ["Collections", "Sorting"],
            notes: "Comparable provides natural order (compareTo in-class); Comparator provides external, flexible ordering strategies.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "java-multithreading",
        name: "Multithreading & Concurrency",
        description: "Threads, synchronized, volatile, ReentrantLock, and ThreadPoolExecutor.",
        items: [
          {
            id: "mt-1",
            title: "Volatile Keyword & Happens-Before Guarantee",
            difficulty: "Medium",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/javase/specs/jls/se17/html/jls-17.html#jls-17.4",
            tags: ["Concurrency", "JMM"],
            notes: "Prevents CPU instruction reordering and forces reads/writes directly to main memory instead of L1/L2 CPU caches.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "mt-2",
            title: "Producer-Consumer Problem using BlockingQueue and Lock & Condition",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/design-bounded-blocking-queue/",
            tags: ["Concurrency", "Design"],
            notes: "Implement using ArrayBlockingQueue or ReentrantLock with notFull and notEmpty Condition signals.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "mt-3",
            title: "ThreadPoolExecutor Architecture & Rejection Execution Policies",
            difficulty: "Hard",
            platform: "JavaDocs",
            link: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html",
            tags: ["Concurrency", "Executors"],
            notes: "CorePoolSize -> BlockingQueue -> MaxPoolSize -> RejectedExecutionHandler (Abort, CallerRuns, Discard, DiscardOldest).",
            isSolved: false,
            isRevision: false
          },
          {
            id: "mt-4",
            title: "Virtual Threads (Project Loom) in Java 21 vs Platform OS Threads",
            difficulty: "Medium",
            platform: "JavaDocs",
            link: "https://openjdk.org/jeps/444",
            tags: ["Java 21", "Virtual Threads"],
            notes: "User-mode lightweight threads scheduled by the JVM onto carrier platform threads. Dramatically simplifies high-throughput I/O servers.",
            isSolved: false,
            isRevision: false
          }
        ]
      }
    ]
  },
  {
    id: "last-minute-100",
    name: "Last Minute 100",
    badge: "3",
    subtitle: "High-yield, fast-track interview problems for crunch time",
    description: "Curated high-frequency problems commonly asked in top-tier tech interview rounds.",
    icon: "Zap",
    category: "Interview Crunch",
    topics: [
      {
        id: "lm-arrays",
        name: "Top Array & Matrix Crunch",
        description: "Most frequent array interview challenges.",
        items: [
          {
            id: "lm-1",
            title: "Maximum Subarray (Kadane's Algorithm)",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/maximum-subarray/",
            tags: ["Array", "Kadane"],
            notes: "curSum = Math.max(num, curSum + num); maxSoFar = Math.max(maxSoFar, curSum).",
            isSolved: false,
            isRevision: false
          },
          {
            id: "lm-2",
            title: "Merge Intervals",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/merge-intervals/",
            tags: ["Intervals", "Sorting"],
            notes: "Sort by start time. Merge if next.start <= current.end by taking Math.max(current.end, next.end).",
            isSolved: false,
            isRevision: false
          },
          {
            id: "lm-3",
            title: "Rotate Image (In-Place Matrix Rotation)",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/rotate-image/",
            tags: ["Matrix"],
            notes: "Transpose matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row.",
            isSolved: false,
            isRevision: false
          }
        ]
      },
      {
        id: "lm-graphs",
        name: "Top Graph & BFS Essentials",
        description: "Grid traversals and topological sort.",
        items: [
          {
            id: "lm-4",
            title: "Number of Islands",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/number-of-islands/",
            tags: ["Graph", "BFS/DFS"],
            notes: "Iterate grid. When '1' found, increment count and sink connected land with DFS/BFS to '0'.",
            isSolved: false,
            isRevision: false
          },
          {
            id: "lm-5",
            title: "Course Schedule (Topological Sort / Cycle Detection)",
            difficulty: "Medium",
            platform: "LeetCode",
            link: "https://leetcode.com/problems/course-schedule/",
            tags: ["Graph", "Kahn's Algorithm"],
            notes: "Build in-degree array. Push 0 in-degree nodes to queue. If processed count == numCourses, valid.",
            isSolved: false,
            isRevision: false
          }
        ]
      }
    ]
  }
];

module.exports = { initialTracks };
